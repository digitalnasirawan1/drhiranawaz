import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seoRoutes, notFoundMetadata, defaultSiteMetadata } from '../data/seoMetadata';
import { businessInfo } from '../data/businessInfo';

export default function SEOHead({ customTitle, customDescription, customSchema }) {
  const location = useLocation();
  const currentPath = location.pathname;

  // Normalize path with trailing slash
  const normalizedPath = currentPath.endsWith('/') ? currentPath : `${currentPath}/`;
  const routeSlug = normalizedPath === '/' ? '' : normalizedPath.replace(/^\/+/, '');

  const matchedRoute = seoRoutes.find(r => r.slug === routeSlug) || notFoundMetadata;

  const title = customTitle || matchedRoute.title || defaultSiteMetadata.siteName;
  const description = customDescription || matchedRoute.description;
  const canonical = matchedRoute.canonical || `${defaultSiteMetadata.siteUrl}${normalizedPath}`;
  const robots = matchedRoute.robots || 'index, follow';
  const ogImage = matchedRoute.ogImage || defaultSiteMetadata.defaultOgImage;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper to update or create meta tags
    const setMetaTag = (attrName, attrVal, content) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('name', 'description', description);
    setMetaTag('name', 'robots', robots);

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // Open Graph
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonical);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:type', matchedRoute.schemaType === 'Physician' ? 'profile' : 'website');

    // Twitter
    setMetaTag('property', 'twitter:card', 'summary_large_image');
    setMetaTag('property', 'twitter:title', title);
    setMetaTag('property', 'twitter:description', description);
    setMetaTag('property', 'twitter:url', canonical);
    setMetaTag('property', 'twitter:image', ogImage);

    // Schema JSON-LD (No BreadcrumbList!)
    let schemaScript = document.getElementById('route-schema-jsonld');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'route-schema-jsonld';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const basePhysicianSchema = {
      "@context": "https://schema.org",
      "@type": "Physician",
      "@id": "https://drhiranawaz.com/#physician",
      "name": businessInfo.doctorName,
      "medicalSpecialty": [
        "https://schema.org/Surgical",
        "General Surgery",
        "Laparoscopic Surgery"
      ],
      "jobTitle": "Female Laparoscopic & General Surgeon",
      "honorificSuffix": "MBBS, FCPS (General Surgery)",
      "description": "Head of Surgery Department at Fauji Foundation Hospital Faisalabad. Conducting specialist outpatient consultations at Faisal Hospital and Private Clinic in Faisalabad.",
      "url": "https://drhiranawaz.com/",
      "image": "https://drhiranawaz.com/images/photos/Dr%20Hira%20Nawaz%20Photo.png",
      "telephone": "+923211836189",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": businessInfo.address.plot,
        "addressLocality": businessInfo.address.city,
        "addressRegion": "Punjab",
        "addressCountry": "PK"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "16:00",
          "closes": "21:00"
        }
      ],
      "sameAs": [
        businessInfo.socials.facebook,
        businessInfo.socials.instagram,
        businessInfo.socials.tiktok,
        businessInfo.socials.linkedin
      ]
    };

    const finalSchema = customSchema || basePhysicianSchema;
    schemaScript.textContent = JSON.stringify(finalSchema);

    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [title, description, canonical, robots, ogImage, customSchema, matchedRoute.schemaType]);

  return null;
}
