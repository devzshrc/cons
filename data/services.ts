export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "1",
    title: "Custom Home Builds",
    description: "Ground-up construction of bespoke residential properties, managed with precision and high-end craftsmanship.",
    icon: "Home",
  },
  {
    id: "2",
    title: "Commercial Development",
    description: "Scalable commercial builds from retail spaces to corporate offices, delivered on time and within budget.",
    icon: "Building2",
  },
  {
    id: "3",
    title: "Luxury Renovations",
    description: "Complete transformation of existing spaces with modern finishes and structural optimizations.",
    icon: "Hammer",
  },
  {
    id: "4",
    title: "Project Management",
    description: "End-to-end oversight of your construction project, ensuring seamless execution from blueprint to handover.",
    icon: "ClipboardList",
  }
];
