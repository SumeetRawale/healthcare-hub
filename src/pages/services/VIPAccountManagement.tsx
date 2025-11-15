import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Crown, Users, Bell, MessageSquare, TrendingUp, Shield } from "lucide-react";

const VIPAccountManagement = () => {
  const highlights = [
    "Dedicated VIP account managers",
    "Daily updates and reminders",
    "Priority handling for critical cases",
    "Clear communication flow",
    "Better retention and loyalty"
  ];

  const benefits = [
    { icon: Users, title: "Dedicated Managers", description: "Personal account managers for VIP clients" },
    { icon: Bell, title: "Daily Updates", description: "Regular check-ins and reminders" },
    { icon: Crown, title: "Priority Service", description: "Fast-track handling for urgent needs" },
    { icon: MessageSquare, title: "Clear Communication", description: "Direct communication channels" },
    { icon: TrendingUp, title: "Revenue Protection", description: "Safeguard high-value accounts" },
    { icon: Shield, title: "Better Retention", description: "Increased loyalty and satisfaction" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Crown className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Premium Service</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Key or VIP Account Management</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Your important clients need fast responses and regular communication. We assign a dedicated team 
              who manages every update, follow-up and requirement with priority.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="border-2 border-accent mb-12">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground">
                  This helps you retain high-value customers and gives them a smooth experience every day. 
                  Our goal is to protect your most important accounts and support your revenue.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Key Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <Card key={index} className="group hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-2 transition-all duration-300">
                  <CardContent className="p-6">
                    <benefit.icon className="h-10 w-10 text-accent mb-4 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300" />
                    <h4 className="text-xl font-bold text-primary mb-2">{benefit.title}</h4>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Elevate Your VIP Service</h2>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VIPAccountManagement;
