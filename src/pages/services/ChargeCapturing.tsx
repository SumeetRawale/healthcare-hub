import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileInput, CheckCircle, DollarSign, Clock, Target, TrendingUp } from "lucide-react";

const ChargeCapturing = () => {
  const features = [
    "Accurate charge entry from multiple sources",
    "Real-time charge capture",
    "CPT and revenue code validation",
    "Modifier application",
    "Fee schedule verification",
    "Electronic charge submission"
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Revenue Maximization",
      description: "Capture all billable services for optimal revenue"
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Same-day charge entry for faster billing"
    },
    {
      icon: Target,
      title: "High Accuracy",
      description: "99.5% accuracy in charge capture and entry"
    },
    {
      icon: TrendingUp,
      title: "Reduced Leakage",
      description: "Eliminate lost charges and revenue leakage"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <FileInput className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Charge Management</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Charge Capturing & Entry</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Professional charge capture and entry services that ensure all billable services are 
              accurately documented and submitted for maximum revenue recovery.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Comprehensive Charge Services</h2>
            
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
                <h3 className="text-2xl font-bold text-primary mb-4">Accurate Charge Capture Solutions</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our charge capture specialists ensure every billable service is accurately documented and entered 
                  into your billing system. We capture charges from encounter forms, EMR systems, and provider 
                  documentation, applying correct CPT codes, modifiers, and fee schedules.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With real-time charge validation and quality checks, we prevent revenue leakage and ensure 
                  maximum reimbursement for services rendered.
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
          <h2 className="text-4xl font-bold mb-6">Maximize Your Revenue with Accurate Charge Capture</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Let our experts ensure every billable service is captured and processed correctly
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button variant="outline_hero" size="lg" asChild>
              <Link to="/services/claim-audits">Explore Claim Audits</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChargeCapturing;
