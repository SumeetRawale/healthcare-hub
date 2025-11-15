import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Phone, Mail, MessageSquare, Calendar, Clock, Heart, Shield } from "lucide-react";

const PatientSupport = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Healthcare Service</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Patient Support Services</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Enhance patient satisfaction with our 24/7 multi-channel support services. 
              We help you deliver exceptional patient experiences at every touchpoint.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Comprehensive Patient Support</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                { icon: Phone, title: "Phone Support", desc: "Inbound and outbound call handling" },
                { icon: Mail, title: "Email Support", desc: "Timely email response management" },
                { icon: MessageSquare, title: "Chat & SMS", desc: "Real-time chat and SMS support" },
                { icon: Calendar, title: "Scheduling", desc: "Appointment booking and reminders" }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-6">
                      <Icon className="h-12 w-12 text-accent mx-auto mb-4 transition-all duration-300 group-hover:scale-110" />
                      <h3 className="font-bold text-lg text-primary mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-accent">
                <CardContent className="p-8">
                  <Clock className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-4">24/7 Availability</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Round-the-clock patient support ensures your patients can reach you anytime, 
                    improving satisfaction and trust.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent">
                <CardContent className="p-8">
                  <Heart className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-4">Empathetic Care</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our trained professionals deliver compassionate, patient-centered support 
                    that reflects your care philosophy.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent">
                <CardContent className="p-8">
                  <Shield className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-4">HIPAA Secure</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All patient interactions are handled with strict HIPAA compliance and 
                    data security protocols.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Enhance Your Patient Experience</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Deliver exceptional patient support that builds loyalty and satisfaction
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button variant="outline_hero" size="lg" asChild>
              <Link to="/services/data-management">View Data Management</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PatientSupport;
