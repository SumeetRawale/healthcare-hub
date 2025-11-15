import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Rocket, Users, TrendingUp, DollarSign, Headphones, FileText } from "lucide-react";
import { Helmet } from "react-helmet";

const ClientStartups = () => {
  const highlights = [
    {
      icon: Rocket,
      title: "End-to-End Support for Early-Stage Companies",
      description: "Complete outsourcing solutions from day one to help you launch faster"
    },
    {
      icon: TrendingUp,
      title: "Scalable Team Structure",
      description: "Flexible team that grows with your workload and business needs"
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Outsourcing Model",
      description: "Affordable solutions designed specifically for startup budgets"
    },
    {
      icon: Headphones,
      title: "Customer Support & Operations",
      description: "Professional support and backend handling so you focus on growth"
    },
    {
      icon: FileText,
      title: "Daily Reporting & Clear Communication",
      description: "Transparent updates and metrics to keep you informed"
    },
    {
      icon: Users,
      title: "Dedicated Startup Success Team",
      description: "Experienced professionals who understand the startup journey"
    }
  ];

  const services = [
    {
      title: "Customer Support Setup",
      description: "Email, phone, and chat support infrastructure ready from day one",
      features: ["Multi-channel support", "Ticket management", "24/7 availability", "Knowledge base creation"]
    },
    {
      title: "Operations Management",
      description: "Backend operations handled efficiently so you can focus on product",
      features: ["Data entry & management", "Order processing", "Quality assurance", "Process documentation"]
    },
    {
      title: "Flexible Scaling",
      description: "Start small and scale up as your business grows without hiring overhead",
      features: ["No long-term contracts", "Pay-as-you-grow model", "Quick team expansion", "Training included"]
    },
    {
      title: "Growth Partner Support",
      description: "Strategic guidance and operational best practices from day one",
      features: ["Process optimization", "Performance tracking", "Regular strategy calls", "Industry insights"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Startup Support Services | Scalable Outsourcing for Early-Stage Companies</title>
        <meta name="description" content="Fast, flexible, and cost-friendly support for startups. Complete outsourcing solutions for customer support, operations, and backend tasks. Scale as you grow." />
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse shadow-lg shadow-accent/50"></span>
              <span className="text-sm font-semibold text-white tracking-wide">For Startups</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Startup Support Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Fast, flexible, and cost-friendly support that grows with you
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Startups need fast, flexible, and cost-friendly support that grows with them.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We provide a complete outsourcing setup that covers customer support, operations, and backend tasks from day one.
              This helps founders focus on growth while we manage the daily workload.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our model is scalable, simple, and perfect for early-stage teams.
            </p>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Highlights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to scale your startup operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {highlights.map((highlight, index) => (
              <Card key={index} className="group hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  {/* <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"> */}
                    <highlight.icon className="h-10 w-10 text-accent mb-4 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300" />
                  {/* </div> */}
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Startup Support Services
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Scale Your Startup?
            </h2>
            <p className="text-xl text-white/90">
              Let us handle your operations while you focus on building your product
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 hover:scale-105 transition-transform">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClientStartups;