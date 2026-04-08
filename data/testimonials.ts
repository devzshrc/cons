export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "They delivered our dream home completely stress-free. The attention to detail and communication throughout the build was unmatched.",
    author: "Sarah Jenkins",
    role: "Homeowner",
  },
  {
    id: "2",
    quote: "Our commercial office space was completed ahead of schedule and perfectly on budget. The team's professionalism is best in class.",
    author: "David Chen",
    role: "CEO",
    company: "TechNova Inc.",
  },
  {
    id: "3",
    quote: "If you want high-end architecture translated flawlessly into reality, this is the only construction firm you need to call.",
    author: "Michael & Jessica Torres",
    role: "Property Investors",
  }
];
