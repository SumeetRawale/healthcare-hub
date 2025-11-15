import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileCheck, CheckCircle, Clock, Shield, TrendingUp, Target } from "lucide-react";

const PriorAuthorization = () => {
  const features = [
    "Medical procedure pre-authorization",
    "Medication prior authorization",
    "DME authorization requests",
    "Specialist referral coordination",
    "Appeal and reconsideration support",
    "Authorization tracking and follow-up"
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Faster Approvals",
      description: "Reduce authorization turnaround time significantly"
    },
    {
      icon: Target,
      title: "Higher Approval Rate",
      description: "Achieve 95%+ first-time authorization approval"
    },
    {
      icon: Shield,
      title: "Prevent Denials",
      description: "Ensure proper authorization before service delivery"
    },
    {
      icon: TrendingUp,
      title: "Revenue Protection",
      description: "Protect revenue with proper pre-authorization"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <FileCheck className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Authorization Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Prior Authorization Services</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Comprehensive prior authorization services to ensure timely approvals for procedures, 
              medications, and services, preventing claim denials and delays in patient care.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Complete Authorization Management</h2>
            
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
                <h3 className="text-2xl font-bold text-primary mb-4">Expert Authorization Support</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our authorization specialists handle all aspects of the prior authorization process, from 
                  initial request submission to follow-up with payers. We ensure all necessary documentation 
                  is provided, reducing delays and improving approval rates.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain detailed tracking of all authorization requests, monitor expiration dates, and 
                  proactively handle renewals to ensure continuous patient care without interruption.
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
          <h2 className="text-4xl font-bold mb-6">Streamline Your Authorization Process</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Ensure timely approvals and prevent claim denials with expert prior authorization services
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button variant="outline_hero" size="lg" asChild>
              <Link to="/services/prescription-authorization">View Prescription Authorization</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PriorAuthorization;
