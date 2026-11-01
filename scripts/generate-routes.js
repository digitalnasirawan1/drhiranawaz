import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { seoRoutes, notFoundMetadata, defaultSiteMetadata } from '../src/data/seoMetadata.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('Error: dist directory does not exist. Run "vite build" first.');
  process.exit(1);
}

const templateHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

// Filter out root route since dist/index.html already exists
const subRoutes = seoRoutes.filter(r => r.slug && r.slug.length > 0);

console.log(`Generating ${subRoutes.length} pre-rendered route entry points in dist/...`);

for (const route of subRoutes) {
  const folderName = route.slug.replace(/^\/+|\/+$/g, '');
  const targetDir = path.join(distDir, folderName);
  
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const ogImage = route.ogImage || defaultSiteMetadata.defaultOgImage;

  let customizedHtml = templateHtml
    .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.description}" />`)
    .replace(/<meta name="robots" content=".*?" \/>/, `<meta name="robots" content="${route.robots || 'index, follow'}" />`)
    .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${route.canonical}" />`)
    .replace(/<meta property="og:type" content=".*?" \/>/, `<meta property="og:type" content="${route.schemaType === 'Physician' ? 'profile' : 'website'}" />`)
    .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${route.canonical}" />`)
    .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${route.title}" />`)
    .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.description}" />`)
    .replace(/<meta property="og:image" content=".*?" \/>/, `<meta property="og:image" content="${ogImage}" />`)
    .replace(/<meta property="twitter:url" content=".*?" \/>/, `<meta property="twitter:url" content="${route.canonical}" />`)
    .replace(/<meta property="twitter:title" content=".*?" \/>/, `<meta property="twitter:title" content="${route.title}" />`)
    .replace(/<meta property="twitter:description" content=".*?" \/>/, `<meta property="twitter:description" content="${route.description}" />`)
    .replace(/<meta property="twitter:image" content=".*?" \/>/, `<meta property="twitter:image" content="${ogImage}" />`);

  fs.writeFileSync(path.join(targetDir, 'index.html'), customizedHtml, 'utf8');
}

// Generate 404.html
const notFoundHtml = templateHtml
  .replace(/<title>.*?<\/title>/, `<title>${notFoundMetadata.title}</title>`)
  .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${notFoundMetadata.description}" />`)
  .replace(/<meta name="robots" content=".*?" \/>/, `<meta name="robots" content="${notFoundMetadata.robots}" />`)
  .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${notFoundMetadata.canonical}" />`);

fs.writeFileSync(path.join(distDir, '404.html'), notFoundHtml, 'utf8');

// Generate sitemap.xml with all 29 pages
const indexableRoutes = seoRoutes.filter(r => r.inSitemap);
const currentDate = new Date().toISOString().split('T')[0];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexableRoutes.map(r => `  <url>
    <loc>${r.canonical}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${r.slug === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${r.slug === '' ? '1.0' : r.slug.includes('-surgery') ? '0.8' : '0.7'}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf8');

// Generate robots.txt (allowing all 29 pages, only 404 disallowed)
const robotsTxt = `# Robots.txt for Dr. Hira Nawaz Official Medical Website
User-agent: *
Allow: /
Disallow: /404/

Sitemap: https://drhiranawaz.com/sitemap.xml
`;

fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt, 'utf8');

console.log(`Successfully generated ${subRoutes.length} route folders, 404.html, sitemap.xml (${indexableRoutes.length} pages), and robots.txt in dist/.`);
