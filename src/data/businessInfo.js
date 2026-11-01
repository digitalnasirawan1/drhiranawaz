export const businessInfo = {
  doctorName: "Dr. Hira Nawaz",
  professionalIdentity: "Female Laparoscopic & General Surgeon",
  qualifications: "MBBS, FCPS (General Surgery)",
  leadershipRole: "Head of Surgery Department, Fauji Foundation Hospital Faisalabad",
  leadershipNote: "Departmental leadership position held at Fauji Foundation Hospital Faisalabad.",
  
  // Primary Contact Details
  phoneDisplay: "0321 1836189",
  phoneTel: "tel:+923211836189",
  whatsappUrl: "https://wa.me/923211836189",
  websiteUrl: "https://drhiranawaz.com",
  timezone: "Asia/Karachi",

  // Main Consultation Clinic (Private Clinic)
  privateClinicName: "Private Clinic",
  privateClinicAddress: {
    plot: "Behind Faisal Hospital (New Building), 547/A Lower Canal Rd E",
    area: "Muhammadia Colony Block A, People's Colony No 1",
    city: "Faisalabad",
    postalCode: "03822",
    country: "Pakistan",
    full: "Behind Faisal Hospital (New Building), 547/A Lower Canal Rd E, Muhammadia Colony Block A, People's Colony No 1, Faisalabad, 03822",
    headerShort: "Behind Faisal Hospital (New Building), People's Colony No 1, Faisalabad"
  },

  // Consultation Locations
  locations: [
    {
      id: "private-clinic",
      name: "Private Clinic",
      tagline: "Outpatient & Day-Care Surgical Clinic",
      slug: "/private-clinic/",
      plot: "Behind Faisal Hospital (New Building), 547/A Lower Canal Rd E",
      area: "Muhammadia Colony Block A, People's Colony No 1",
      city: "Faisalabad",
      postalCode: "03822",
      country: "Pakistan",
      fullAddress: "Behind Faisal Hospital (New Building), 547/A Lower Canal Rd E, Muhammadia Colony Block A, People's Colony No 1, Faisalabad, 03822",
      googleMapsUrl: "https://maps.app.goo.gl/xN24RtbBNCQiNQjg7",
      hours: [
        { day: "Monday", time: "4:00 PM – 9:00 PM", isOpen: true },
        { day: "Tuesday", time: "4:00 PM – 9:00 PM", isOpen: true },
        { day: "Wednesday", time: "4:00 PM – 9:00 PM", isOpen: true },
        { day: "Thursday", time: "4:00 PM – 9:00 PM", isOpen: true },
        { day: "Friday", time: "4:00 PM – 9:00 PM", isOpen: true },
        { day: "Saturday", time: "4:00 PM – 9:00 PM", isOpen: true },
        { day: "Sunday", time: "Closed", isOpen: false }
      ],
      timingSummary: "Mon – Sat: 4:00 PM – 9:00 PM (Sunday Closed)"
    },
    {
      id: "faisal-hospital",
      name: "Faisal Hospital",
      tagline: "Consultation & Inpatient Surgical Facility",
      slug: "/faisal-hospital/",
      plot: "Plot 547, Muhammadia Colony Block A",
      area: "People's Colony No 1",
      city: "Faisalabad",
      postalCode: "38000",
      country: "Pakistan",
      fullAddress: "Faisal Hospital, Plot 547, Muhammadia Colony Block A, People's Colony No 1, Faisalabad, Pakistan",
      googleMapsUrl: "https://maps.app.goo.gl/UfRntfLaEcPaeVAU7",
      hours: [
        { day: "Monday", time: "4:00 PM – 9:00 PM", isOpen: true },
        { day: "Tuesday", time: "4:00 PM – 9:00 PM", isOpen: true },
        { day: "Wednesday", time: "4:00 PM – 9:00 PM", isOpen: true },
        { day: "Thursday", time: "4:00 PM – 9:00 PM", isOpen: true },
        { day: "Friday", time: "4:00 PM – 9:00 PM", isOpen: true },
        { day: "Saturday", time: "4:00 PM – 9:00 PM", isOpen: true },
        { day: "Sunday", time: "Closed", isOpen: false }
      ],
      timingSummary: "Mon – Sat: 4:00 PM – 9:00 PM (Sunday Closed)"
    }
  ],

  // Convenience references
  address: {
    plot: "Behind Faisal Hospital (New Building), 547/A Lower Canal Rd E",
    area: "Muhammadia Colony Block A, People's Colony No 1",
    city: "Faisalabad",
    country: "Pakistan",
    full: "Behind Faisal Hospital (New Building), 547/A Lower Canal Rd E, Muhammadia Colony Block A, People's Colony No 1, Faisalabad, 03822"
  },
  googleMapsUrl: "https://maps.app.goo.gl/xN24RtbBNCQiNQjg7",
  hours: [
    { day: "Monday", time: "4:00 PM – 9:00 PM", isOpen: true },
    { day: "Tuesday", time: "4:00 PM – 9:00 PM", isOpen: true },
    { day: "Wednesday", time: "4:00 PM – 9:00 PM", isOpen: true },
    { day: "Thursday", time: "4:00 PM – 9:00 PM", isOpen: true },
    { day: "Friday", time: "4:00 PM – 9:00 PM", isOpen: true },
    { day: "Saturday", time: "4:00 PM – 9:00 PM", isOpen: true },
    { day: "Sunday", time: "Closed", isOpen: false }
  ],
  
  // Official Social Profiles
  socials: {
    facebook: "https://www.facebook.com/drhiranawazofficial/",
    instagram: "https://www.instagram.com/hiranawaz.official",
    tiktok: "https://www.tiktok.com/@dr.hira.nawaz",
    linkedin: "https://pk.linkedin.com/in/dr-hira-nawaz"
  },
  
  // Brand Assets
  images: {
    logo: "/images/brand/logo.png",
    logoWhite: "/images/brand/logo-white.png",
    heroPortrait: "/images/photos/Dr Hira Nawaz Photo.png",
    dp: "/images/photos/Dr Hira Nawaz DP.png",
    inOPD: "/images/photos/Dr Hira Nawaz in OPD.jpg",
    inOT: "/images/photos/Dr Hira Nawaz in OT.jpg",
    clinic: "/images/photos/Dr Hira Nawaz Clinic.jpg",
    pic: "/images/photos/Dr Hira Nawaz Pic.jpg",
    qrCode: "/images/brand/qr-code.png",
    scanClinicAddress: "/images/brand/scan-clinic-address.png"
  }
};
