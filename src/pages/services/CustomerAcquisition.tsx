import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Users, PhoneCall, CheckCircle, Target, Calendar } from "lucide-react";

const CustomerAcquisition = () => {
  const highlights = [
    "Lead generation through calling",
    "Lead qualification and filtering",
    "Appointment setting",
    "Continuous follow-up support",
    "Steady flow of sales opportunities"
  ];

  const benefits = [
    { icon: Users, title: "Quality Leads", description: "Ready leads that are verified and interested" },
    { icon: PhoneCall, title: "Active Outreach", description: "Calling and follow-ups handled professionally" },
    { icon: Target, title: "Proper Qualification", description: "Reduce workload with pre-qualified prospects" },
    { icon: TrendingUp, title: "Better Conversion", description: "Improved conversion rates every month" },
    { icon: Calendar, title: "Appointment Setting", description: "Scheduled meetings with decision-makers" },
    { icon: CheckCircle, title: "Strong Pipeline", description: "Consistent flow for your sales team" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Sales Growth</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Customer Acquisition as a Service</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              We help you reach new customers with calling, follow-ups and proper qualification. 
              Your sales team receives ready leads that are already verified and interested.
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
                  This reduces their workload and improves your conversion rate every month. Our team works 
                  consistently to build a strong pipeline for your business.
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
          <h2 className="text-4xl font-bold mb-6">Grow Your Customer Base</h2>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomerAcquisition;
