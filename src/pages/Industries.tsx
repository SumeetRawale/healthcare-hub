import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Heart, Building2, ShoppingCart, GraduationCap, 
  Plane, Home, Car, Smartphone, Pill, Stethoscope 
} from "lucide-react";

const Industries = () => {
  const industries = [
     {
      icon: Stethoscope,
      title: "Pharmaceuticals",
      description: "Specialized support for pharmaceutical companies including regulatory compliance and customer service.",
      services: ["Compliance Management", "Sales Support", "Customer Service", "Data Analytics"]
    },
    {
      icon: Building2,
      title: "Financial Services",
      description: "Secure and compliant BPO solutions for banks, insurance companies, and financial institutions.",
      services: ["Customer Support", "Claims Processing", "Fraud Detection", "Account Management"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & Retail",
      description: "End-to-end customer support and order management solutions for online and offline retailers.",
      services: ["Order Processing", "Customer Service", "Inventory Support", "Returns Management"]
    },
    {
      icon: Smartphone,
      title: "Telecommunications",
      description: "Technical support and customer care services for telecom operators and service providers.",
      services: ["Technical Support", "Billing Support", "Retention Services", "Sales"]
    },
    {
      icon: Plane,
      title: "Travel & Hospitality",
      description: "Reservation management and customer support for travel agencies, hotels, and tourism companies.",
      services: ["Booking Management", "Customer Service", "Concierge Services", "Loyalty Programs"]
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Admissions support, student services, and administrative assistance for educational institutions.",
      services: ["Student Support", "Admissions", "Alumni Relations", "Administrative Services"]
    },
    {
      icon: Car,
      title: "Automotive",
      description: "Customer service and roadside assistance for automotive manufacturers and dealers.",
      services: ["Customer Service", "Roadside Assistance", "Parts Support", "Service Scheduling"]
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Lead generation, customer support, and property management services for real estate businesses.",
      services: ["Lead Management", "Property Inquiries", "Tenant Support", "Appointment Scheduling"]
    },
    {
      icon: Pill,
      title: "Medical Devices",
      description: "Technical support and compliance services for medical device manufacturers and distributors.",
      services: ["Technical Support", "Regulatory Compliance", "Training Services", "Product Support"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Delivering specialized BPO solutions across diverse industries with domain expertise and proven results
          </p>
        </div>
      </section>

      {/* Main Focus - Healthcare */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Heart className="h-20 w-20 text-accent mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Our Primary Focus: Healthcare Services
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                With deep expertise in healthcare BPO, we provide comprehensive services that optimize operations, 
                reduce costs, and improve patient outcomes for healthcare providers across the globe.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/services/medical-coding">Explore Healthcare Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Industries */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Complete Industry Coverage</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Expertise and solutions tailored to meet the unique challenges of each industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card 
                  key={index} 
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent"
                >
                  <CardContent className="p-6">
                    <Icon className="h-12 w-12 text-accent mb-4" />
                    <h3 className="text-2xl font-bold text-primary mb-3">{industry.title}</h3>
                    <p className="text-muted-foreground mb-6">{industry.description}</p>
                    <div className="space-y-2">
                      <p className="font-semibold text-sm text-primary">Key Services:</p>
                      <ul className="space-y-1">
                        {industry.services.map((service, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="h-1.5 w-1.5 bg-accent rounded-full" />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 contact-page to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Don't See Your Industry?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            We work with businesses across all sectors. Contact us to discuss your specific needs
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
