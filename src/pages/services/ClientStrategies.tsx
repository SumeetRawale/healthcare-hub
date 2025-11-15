import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, TrendingUp, Users, ClipboardCheck, CheckCircle } from "lucide-react";

const ClientStrategies = () => {
  const whatWeDo = [
    "Review your existing customer service and communication system.",
    "Identify gaps that impact response time and satisfaction.",
    "Design a process-driven CX plan for better performance.",
    "Build workflows that reduce repetition and delays.",
    "Implement best practices to improve customer handling.",
    "Guide your team with the right tools, training, and quality checks."
  ];

  const benefits = [
    { icon: TrendingUp, title: "Better Customer Experience", description: "Faster responses and improved satisfaction" },
    { icon: Users, title: "Stronger Brand Trust", description: "Higher satisfaction and loyalty" },
    { icon: CheckCircle, title: "Less Operational Errors", description: "No missed follow-ups" },
    { icon: TrendingUp, title: "Higher Revenue", description: "Better service and retention" },
    { icon: ClipboardCheck, title: "Clear Processes", description: "Your team can follow every day" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Strategy & Consulting</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Client Strategies & Consulting</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              We help companies build strong Customer Experience (CX) systems that improve every interaction. 
              Our focus is on simple, practical strategies that connect people, processes, and technology.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">What We Do</h2>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              Our team studies your current workflow, identifies gaps, and creates a plan that makes your CX 
              stronger and more efficient. We ensure your customers get fast resolutions, clear communication, 
              and a smooth journey from start to end.
            </p>
            
            <Card className="border-2 border-accent mb-12">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {whatWeDo.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <h3 className="text-3xl font-bold text-primary mb-8 text-center">How CX Consulting Helps You</h3>
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

            <Card className="bg-muted border-2 border-accent">
              <CardContent className="p-8 text-center">
                <p className="text-lg text-muted-foreground mb-6">
                  We help your business deliver consistent service to every customer. We help you save revenue 
                  month on month by avoiding service gaps, escalations, and delays. With the right CX strategy, 
                  your customer journey becomes smooth and your business becomes more reliable.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your CX?</h2>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClientStrategies;
