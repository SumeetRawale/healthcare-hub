import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wallet, CheckCircle, Clock, TrendingUp, Target, DollarSign } from "lucide-react";

const AccountReceivable = () => {
  const features = [
    "Complete AR management",
    "Aging report analysis",
    "Collection strategy optimization",
    "Payment plan management",
    "Bad debt prevention",
    "Patient statement generation"
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Increased Collections",
      description: "Improve collection rates by up to 30%"
    },
    {
      icon: Clock,
      title: "Reduced AR Days",
      description: "Lower days in AR with proactive management"
    },
    {
      icon: TrendingUp,
      title: "Cash Flow Improvement",
      description: "Optimize cash flow with better AR management"
    },
    {
      icon: Target,
      title: "Strategic Focus",
      description: "Data-driven approach to maximize collections"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Wallet className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Revenue Management</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Account Receivable Management</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Comprehensive AR management services to optimize collections, reduce aging balances, 
              and improve your practice's cash flow through strategic receivables management.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Complete AR Solutions</h2>
            
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
                <h3 className="text-2xl font-bold text-primary mb-4">Strategic AR Management</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our AR management team takes a comprehensive approach to optimizing your receivables, 
                  from analyzing aging reports to implementing targeted collection strategies. We work on 
                  both insurance and patient AR to maximize collections across all revenue sources.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With detailed reporting and proactive management, we help reduce your AR days, improve 
                  cash flow, and minimize bad debt write-offs through strategic collection efforts.
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
          <h2 className="text-4xl font-bold mb-6">Optimize Your AR Management</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Improve cash flow and collections with expert AR management services
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button variant="outline_hero" size="lg" asChild>
              <Link to="/services/prior-authorization">View Authorization Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AccountReceivable;
