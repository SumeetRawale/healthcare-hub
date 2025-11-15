import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, MessageSquare, Mail, Clock, Users, BarChart } from "lucide-react";

const ContactCentre = () => {
  const highlights = [
    "Inbound and outbound calling",
    "Chat, email and WhatsApp support",
    "24×7 operations",
    "Trained agents and QA team",
    "Daily, weekly and monthly reports"
  ];

  const services = [
    { icon: Phone, title: "Inbound & Outbound Calling", description: "Professional call handling for all customer needs" },
    { icon: MessageSquare, title: "Multi-Channel Chat Support", description: "Real-time assistance across platforms" },
    { icon: Mail, title: "Email & WhatsApp", description: "Written communication management" },
    { icon: Clock, title: "24×7 Operations", description: "Round-the-clock availability" },
    { icon: Users, title: "Trained Team", description: "Expert agents with QA oversight" },
    { icon: BarChart, title: "Detailed Reporting", description: "Comprehensive performance metrics" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Phone className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Operations & Support</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Centre Operations & Support</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              We manage your customer calls, chats, emails and WhatsApp support under one team. 
              Your customers get quick resolutions with a real human touch.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="border-2 border-accent mb-12">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-4">
                  This improves satisfaction and reduces turnaround time. We operate 24×7 to ensure no 
                  customer is left unattended.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Key Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-2 transition-all duration-300">
                  <CardContent className="p-6">
                    <service.icon className="h-10 w-10 text-accent mb-4 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300" />
                    <h4 className="text-xl font-bold text-primary mb-2">{service.title}</h4>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Elevate Your Contact Centre</h2>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactCentre;
