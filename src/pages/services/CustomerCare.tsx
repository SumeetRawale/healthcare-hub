import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Headphones, Clock, Users, TrendingUp, Shield, CheckCircle } from "lucide-react";

const CustomerCare = () => {
  const highlights = [
    "Real-time response across all communication channels",
    "Consistent support across all time zones",
    "Service teams available during peak, off-peak, and after-hours",
    "No backlog, no pending tickets, no missed customers"
  ];

  const benefits = [
    { icon: Clock, title: "24×7 Coverage", description: "Nights, weekends, and holidays fully covered" },
    { icon: Users, title: "Quick Handling", description: "Fast resolution of inquiries and complaints" },
    { icon: TrendingUp, title: "Continuous Monitoring", description: "Daily, weekly and monthly reports" },
    { icon: Shield, title: "Service Stability", description: "Strong support during rush periods" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Headphones className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">24×7 Support</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Customer Care</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-4">
              Always Available. Always Consistent.
            </p>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              We become your extended support team that never shuts down. Our agents handle high volumes, 
              urgent cases, and ongoing follow-ups with the same quality at every hour.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="border-2 border-accent mb-12">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Key Highlights</h3>
                <ul className="space-y-4">
                  {highlights.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Where We Add Value</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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

            <Card className="bg-muted border-2 border-accent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Why Brands Choose 24×7 CX</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Your customers receive help whenever they reach out. Your business runs smoothly even after 
                  your internal team logs out.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Your revenue grows when your service never stops. Your leakages reduce when your customer 
                  issues don't wait.
                </p>
                <p className="text-lg text-muted-foreground">
                  We help you convert more leads, retain more customers, and protect your service quality. 
                  Our 24×7 CX support becomes your advantage in a competitive market.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Start 24×7 Support Today</h2>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomerCare;
