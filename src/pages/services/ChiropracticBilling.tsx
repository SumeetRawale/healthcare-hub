import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Activity, CheckCircle, Shield, TrendingUp, Clock, Target } from "lucide-react";

const ChiropracticBilling = () => {
  const features = [
    "Chiropractic adjustment coding",
    "Spinal manipulation billing",
    "Physical therapy modality coding",
    "X-ray and diagnostic billing",
    "Personal injury claim expertise",
    "Workers' compensation billing"
  ];

  const benefits = [
    {
      icon: Target,
      title: "Specialty Expertise",
      description: "Deep knowledge of chiropractic billing codes"
    },
    {
      icon: TrendingUp,
      title: "Revenue Optimization",
      description: "Maximize reimbursement for all services"
    },
    {
      icon: Clock,
      title: "Faster Payments",
      description: "Efficient claim processing and follow-up"
    },
    {
      icon: Shield,
      title: "Compliance Assured",
      description: "Navigate complex chiropractic regulations"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Specialty Billing</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Chiropractic Billing Services</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Specialized chiropractic billing services with expertise in adjustment coding, modality billing, 
              and personal injury claims to maximize revenue for your practice.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Complete Chiropractic Billing Solutions</h2>
            
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
                <h3 className="text-2xl font-bold text-primary mb-4">Expert Chiropractic Revenue Cycle Management</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our chiropractic billing specialists understand the unique coding requirements for spinal 
                  manipulations, adjustments, and therapeutic modalities. We expertly handle billing for all 
                  chiropractic services including adjustments, physical therapy, X-rays, and evaluations.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We have extensive experience with personal injury and workers' compensation claims, ensuring 
                  proper documentation and billing for accident-related care. Our team maximizes reimbursement 
                  while maintaining compliance with all payer requirements and chiropractic billing regulations.
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
          <h2 className="text-4xl font-bold mb-6">Grow Your Chiropractic Practice Revenue</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Specialized billing services designed for chiropractic practices
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button variant="outline_hero" size="lg" asChild>
              <Link to="/services/medical-coding">View Medical Coding</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChiropracticBilling;
