import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Database, Shield, FileText, BarChart, Lock, CheckCircle } from "lucide-react";

const DataManagement = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Database className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Healthcare Service</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Healthcare Data Management</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Secure, accurate, and compliant healthcare data management services. 
              We handle your EHR/EMR data with precision and care.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Our Data Services</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: FileText,
                  title: "EHR/EMR Data Entry",
                  description: "Accurate and timely electronic health record data entry and management"
                },
                {
                  icon: BarChart,
                  title: "Clinical Abstraction",
                  description: "Precise clinical data abstraction for quality reporting and analytics"
                },
                {
                  icon: Shield,
                  title: "HIPAA Compliance",
                  description: "Full HIPAA-compliant data handling with strict security protocols"
                },
                {
                  icon: Lock,
                  title: "Secure Storage",
                  description: "Encrypted data storage with multi-layer security measures"
                },
                {
                  icon: BarChart,
                  title: "Analytics & Reporting",
                  description: "Comprehensive reporting and analytics for better decision-making"
                },
                {
                  icon: CheckCircle,
                  title: "Quality Assurance",
                  description: "Rigorous quality checks ensuring data accuracy and integrity"
                }
              ].map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group cursor-pointer border-2">
                    <CardContent className="p-8">
                      <Icon className="h-12 w-12 text-accent mb-4 transition-all duration-300 group-hover:scale-110" />
                      <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Secure Your Healthcare Data</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Trust us with your critical healthcare data management needs
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline_hero" size="lg" asChild>
              <Link to="/services/telehealth">Explore Telehealth</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataManagement;
