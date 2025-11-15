import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart3, CheckCircle, TrendingUp, Target, PieChart, LineChart } from "lucide-react";

const BusinessAnalysis = () => {
  const features = [
    "Revenue cycle analytics",
    "Payer performance analysis",
    "Provider productivity metrics",
    "Denial trend analysis",
    "KPI dashboard development",
    "Custom reporting solutions"
  ];

  const benefits = [
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description: "Make informed decisions with comprehensive analytics"
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Monitor KPIs and identify improvement opportunities"
    },
    {
      icon: PieChart,
      title: "Financial Analysis",
      description: "Understand revenue patterns and optimize collections"
    },
    {
      icon: LineChart,
      title: "Trend Identification",
      description: "Spot trends and address issues proactively"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Analytics & Intelligence</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Business Analysis & Reporting</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Transform your healthcare data into actionable insights with comprehensive business analysis 
              and custom reporting solutions that drive better financial outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Comprehensive Analytics Services</h2>
            
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
                <h3 className="text-2xl font-bold text-primary mb-4">Strategic Business Intelligence</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our business analysts transform raw data into meaningful insights, helping you understand 
                  your revenue cycle performance, identify bottlenecks, and make data-driven decisions to 
                  optimize your financial operations.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We develop custom dashboards and reports tailored to your specific needs, providing real-time 
                  visibility into key performance indicators, payer trends, and revenue opportunities.
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
          <h2 className="text-4xl font-bold mb-6">Unlock the Power of Your Data</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Transform data into insights that drive better financial performance
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button variant="outline_hero" size="lg" asChild>
              <Link to="/services/account-receivable">View AR Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessAnalysis;
