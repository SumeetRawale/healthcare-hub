import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Rocket, TrendingUp, DollarSign, Users, Target, CheckCircle } from "lucide-react";

const StartupServices = () => {
  const highlights = [
    "Tailor-made outsourcing model",
    "Fits your internal working pattern",
    "Reduces monthly operational cost",
    "Ensures smooth customer handling",
    "Supports long-term business growth"
  ];

  const benefits = [
    { icon: Rocket, title: "Fast Setup", description: "Quick onboarding and deployment" },
    { icon: Target, title: "Customized Model", description: "Designed to fit your specific needs" },
    { icon: DollarSign, title: "Cost Efficient", description: "Reduce operational expenses" },
    { icon: Users, title: "Scalable Support", description: "Grow your team as you expand" },
    { icon: TrendingUp, title: "Growth Ready", description: "Infrastructure that scales with you" },
    { icon: CheckCircle, title: "Flexible Solutions", description: "Adapt to changing business needs" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Rocket className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Startup Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Grow with Our Customized Business Model</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Every business works in a different way, so we design a model that fits your exact requirement. 
              Our team studies your process, removes delays and creates a structure that supports your daily flow.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="border-2 border-accent mb-12">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Built for Growth</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  This gives you controlled cost, stable operations and better customer management month on month.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our focus is to build a model that grows with you and supports you at every stage.
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
          <h2 className="text-4xl font-bold mb-6">Scale Your Startup Today</h2>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StartupServices;
