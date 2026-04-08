"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`
    );
    // Simple frontend-only submission via mailto
    window.location.href = `mailto:hello@ajitconstructions.example.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pt-24 pb-32">
      <div className="container mx-auto max-w-4xl px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-heading font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Get in touch to discuss your upcoming project.
          </p>
        </div>

        <div className="bg-muted/10 border rounded-xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold" htmlFor="name">Full Name</label>
                <Input required id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Jane Doe" className="bg-background" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold" htmlFor="email">Email</label>
                <Input required id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="jane@example.com" className="bg-background" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold" htmlFor="phone">Phone (Optional)</label>
                <Input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className="bg-background" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold" htmlFor="projectType">Project Type</label>
                <Input required id="projectType" name="projectType" value={formData.projectType} onChange={handleChange} placeholder="e.g. Residential Build, Commercial Renovation" className="bg-background" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold" htmlFor="message">Message</label>
              <Textarea 
                required 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Tell us about your project timeline, budget, and location..." 
                className="min-h-[150px] bg-background" 
              />
            </div>

            <Button type="submit" size="lg" className="w-full text-base h-14 rounded-full">
              Send Inquiry
            </Button>

            <p className="text-sm text-center text-muted-foreground mt-4">
              Alternatively, you can email us directly at <a href="mailto:hello@ajitconstructions.example.com" className="underline">hello@ajitconstructions.example.com</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
