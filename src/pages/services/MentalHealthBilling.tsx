import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brain, CheckCircle, Shield, TrendingUp, Clock, Heart } from "lucide-react";

const MentalHealthBilling = () => {
  const features = [
    "Psychotherapy CPT coding",
    "Psychiatric evaluation billing",
    "Group therapy session coding",
    "Telehealth mental health billing",
    "Substance abuse treatment billing",
    "Crisis intervention coding"
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Specialty Expertise",
      description: "Deep understanding of mental health billing nuances"
    },
    {
      icon: TrendingUp,
      title: "Revenue Optimization",
      description: "Maximize reimbursement for mental health services"
    },
    {
      icon: Clock,
      title: "Time-Based Coding",
      description: "Accurate time-based service documentation"
    },
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "Extra sensitive data protection for mental health"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Specialty Billing</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Mental Health Billing Services</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Specialized billing services for mental health providers, including psychiatrists, psychologists, 
              therapists, and counselors with expertise in behavioral health reimbursement.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Comprehensive Mental Health Billing</h2>
            
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
                <h3 className="text-2xl font-bold text-primary mb-4">Expert Behavioral Health Revenue Cycle</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our mental health billing specialists understand the unique challenges of behavioral health 
                  billing, including time-based coding, medical necessity documentation, and payer-specific 
                  requirements for mental health services.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We handle billing for individual therapy, group sessions, psychiatric evaluations, medication 
                  management, and telehealth services, ensuring proper documentation and maximum reimbursement 
                  while maintaining strict confidentiality standards.
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
          <h2 className="text-4xl font-bold mb-6">Focus on Patient Care, Not Billing</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Specialized mental health billing that understands your practice needs
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button variant="outline_hero" size="lg" asChild>
              <Link to="/services/optometry-billing">View Optometry Billing</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MentalHealthBilling;
