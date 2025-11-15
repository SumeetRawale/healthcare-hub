import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Pill, CheckCircle, Clock, Shield, PhoneCall, Target } from "lucide-react";

const PrescriptionAuthorization = () => {
  const features = [
    "Medication prior authorization",
    "Pharmacy benefit verification",
    "Step therapy documentation",
    "Appeal and peer-to-peer support",
    "Alternative medication research",
    "Formulary compliance verification"
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Fast processing of medication authorization requests"
    },
    {
      icon: Target,
      title: "High Success Rate",
      description: "Maximize approval rates with complete documentation"
    },
    {
      icon: PhoneCall,
      title: "Peer-to-Peer Support",
      description: "Expert coordination of P2P reviews when needed"
    },
    {
      icon: Shield,
      title: "Patient Care Focus",
      description: "Ensure patients receive necessary medications promptly"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Pill className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Medication Authorization</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Prescription Authorization Services</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Specialized prescription authorization services to ensure patients receive necessary medications 
              without delay through efficient prior authorization and appeals management.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Complete Medication Authorization Support</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-6 bg-card rounded-lg border-2 border-border hover:border-accent transition-colors">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <p className="font-medium">{feature}</p>
                </div>
              ))}
            </div>

            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Expert Medication Authorization</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our prescription authorization specialists work closely with pharmacies, insurance companies, 
                  and prescribers to secure timely approval for medications. We handle all documentation 
                  requirements, including medical necessity letters and clinical supporting information.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When initial requests are denied, we coordinate appeals and peer-to-peer reviews, ensuring 
                  patients receive the medications their providers prescribe. We also research formulary 
                  alternatives when necessary to find covered options.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Key Benefits</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-8">
                      <Icon className="h-16 w-16 text-accent mx-auto mb-6 transition-all duration-300 group-hover:scale-110" />
                      <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
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
          <h2 className="text-4xl font-bold mb-6">Ensure Medication Access for Patients</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Fast, reliable prescription authorization services that put patients first
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button variant="outline_hero" size="lg" asChild>
              <Link to="/services/dental-billing">View Specialty Billing</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrescriptionAuthorization;
