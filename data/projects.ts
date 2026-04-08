export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  location: string;
  budget: string;
  area: string;
  timeline: string;
  coverImage: string;
  gallery: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "modern-minimal-villa-la",
    title: "Modern Minimal Villa",
    description: "A complete ground-up construction of a modern minimal villa focusing on natural light, open spaces, and sustainable materials.",
    category: "Residential",
    location: "Los Angeles, CA",
    budget: "$2.5M",
    area: "4,500 sq ft",
    timeline: "14 Months",
    coverImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    ],
    featured: true,
  },
  {
    id: "2",
    slug: "downtown-commercial-loft",
    title: "Downtown Commercial Loft",
    description: "Renovation of an old warehouse into a high-end commercial office space with exposed brick and modern steel accents.",
    category: "Commercial",
    location: "New York, NY",
    budget: "$1.2M",
    area: "8,000 sq ft",
    timeline: "8 Months",
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
    ],
    featured: true,
  },
  {
    id: "3",
    slug: "coastal-retreat-malibu",
    title: "Coastal Retreat",
    description: "Bespoke coastal home designed to withstand the elements while providing panoramic ocean views.",
    category: "Residential",
    location: "Malibu, CA",
    budget: "$4.1M",
    area: "6,200 sq ft",
    timeline: "18 Months",
    coverImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600566753086-00f18efc2291?q=80&w=2070&auto=format&fit=crop",
    ],
    featured: true,
  },
  {
    id: "4",
    slug: "urban-boutique-hotel",
    title: "Urban Boutique Hotel",
    description: "A 40-room boutique hotel featuring minimalist luxury design, a rooftop pool, and an underground speakeasy.",
    category: "Commercial",
    location: "Austin, TX",
    budget: "$8.5M",
    area: "25,000 sq ft",
    timeline: "24 Months",
    coverImage: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    ],
    featured: false,
  }
];
