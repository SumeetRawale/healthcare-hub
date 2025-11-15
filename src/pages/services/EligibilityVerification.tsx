import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, CheckCircle, Clock, DollarSign, FileCheck, Users } from "lucide-react";

const EligibilityVerification = () => {
  const features = [
    "Real-time insurance eligibility checks",
    "Benefits verification",
    "Coverage limitation identification",
    "Co-pay and deductible verification",
    "Pre-authorization requirements",
    "Multi-payer verification support"
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Reduce Denials",
      description: "Prevent claim rejections due to eligibility issues"
    },
    {
      icon: Clock,
      title: "Fast Verification",
      description: "Real-time checks before patient appointments"
    },
    {
      icon: FileCheck,
      title: "Complete Information",
      description: "Full coverage details including co-pays and deductibles"
    },
    {
      icon: Users,
      title: "Better Patient Experience",
      description: "Inform patients about coverage upfront"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Eligibility Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Eligibility & Verification Services</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Comprehensive insurance eligibility verification services that ensure proper coverage 
              before services are rendered, reducing denials and improving revenue cycle management.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Complete Verification Services</h2>
            
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
                <h3 className="text-2xl font-bold text-primary mb-4">Prevent Claim Denials with Real-Time Verification</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our eligibility verification team checks insurance coverage before appointments, identifying active 
                  coverage, benefits limitations, co-pay requirements, and pre-authorization needs. This proactive 
                  approach prevents claim denials and improves patient satisfaction.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We verify coverage with all major insurance payers including Medicare, Medicaid, and commercial 
                  insurers, providing your front desk team with complete coverage information.
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
          <h2 className="text-4xl font-bold mb-6">Improve Your Eligibility Process</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Partner with us for comprehensive insurance eligibility verification
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline_hero" size="lg" asChild>
              <Link to="/services/charge-capturing">Explore Charge Capturing</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EligibilityVerification;
