import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Video, Users, Headphones, Clock, Shield, Globe } from "lucide-react";

const Telehealth = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Video className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Healthcare Service</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Telehealth & Virtual Assistance</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Comprehensive support services for telehealth platforms and virtual care delivery. 
              We help you provide seamless remote healthcare experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Virtual Care Support</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Patient Engagement",
                  description: "Remote patient engagement and support for virtual consultations"
                },
                {
                  icon: Headphones,
                  title: "Virtual Front Desk",
                  description: "Professional virtual receptionist and helpdesk services"
                },
                {
                  icon: Video,
                  title: "Platform Support",
                  description: "Technical support for telemedicine platforms and tools"
                },
                {
                  icon: Clock,
                  title: "24/7 Availability",
                  description: "Round-the-clock support for continuous virtual care delivery"
                },
                {
                  icon: Shield,
                  title: "Secure Communications",
                  description: "HIPAA-compliant communication handling and data protection"
                },
                {
                  icon: Globe,
                  title: "Multi-Language Support",
                  description: "Support in multiple languages for diverse patient populations"
                }
              ].map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group cursor-pointer border-2">
                    <CardContent className="p-8">
                      <Icon className="h-12 w-12 text-accent mb-4 transition-all duration-300 group-hover:scale-110" />
                      <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
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
          <h2 className="text-4xl font-bold mb-6">Transform Your Telehealth Services</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Deliver exceptional virtual care with our expert support services
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button variant="outline_hero" size="lg" asChild>
              <Link to="/services/analytics">View Analytics Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Telehealth;
