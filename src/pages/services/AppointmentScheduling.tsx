import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, CheckCircle, Clock, Phone, Users, Bell } from "lucide-react";

const AppointmentScheduling = () => {
  const features = [
    "24/7 appointment scheduling",
    "Multi-channel booking (phone, online, app)",
    "Automated appointment reminders",
    "Cancellation and rescheduling management",
    "Provider schedule optimization",
    "Real-time calendar integration"
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Reduced No-Shows",
      description: "Up to 40% reduction with automated reminders"
    },
    {
      icon: Users,
      title: "Improved Access",
      description: "24/7 scheduling increases patient satisfaction"
    },
    {
      icon: Phone,
      title: "Multilingual Support",
      description: "Professional scheduling in multiple languages"
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "SMS, email, and voice appointment confirmations"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Patient Scheduling</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Patient Appointment Scheduling</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Professional appointment scheduling services that optimize your practice efficiency, 
              reduce no-shows, and improve patient satisfaction.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Complete Scheduling Solutions</h2>
            
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
                <h3 className="text-2xl font-bold text-primary mb-4">Professional Scheduling Services</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our experienced scheduling team manages your appointment calendar efficiently, ensuring optimal 
                  provider utilization while delivering exceptional patient service. We handle new appointments, 
                  reschedules, cancellations, and follow-up scheduling with professionalism and care.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With automated reminder systems and real-time calendar integration, we help reduce no-shows 
                  and maximize your practice's productivity.
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
          <h2 className="text-4xl font-bold mb-6">Optimize Your Scheduling Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Let our professional team handle your appointment scheduling efficiently
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button variant="outline_hero" size="lg" asChild>
              <Link to="/services/eligibility-verification">Explore Eligibility Verification</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AppointmentScheduling;
