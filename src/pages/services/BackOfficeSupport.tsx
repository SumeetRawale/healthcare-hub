import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Mail, BarChart, Users, Clock, CheckCircle } from "lucide-react";

const BackOfficeSupport = () => {
  const highlights = [
    "Data entry and documentation",
    "Ticket and email management",
    "Report preparation",
    "Vendor coordination",
    "Daily operational support"
  ];

  const benefits = [
    { icon: FileText, title: "Data Entry", description: "Accurate documentation and data management" },
    { icon: Mail, title: "Ticket Management", description: "Efficient handling of tickets and emails" },
    { icon: BarChart, title: "Report Preparation", description: "Comprehensive reporting and analytics" },
    { icon: Users, title: "Vendor Coordination", description: "Seamless vendor management" },
    { icon: Clock, title: "Daily Operations", description: "Consistent operational support" },
    { icon: CheckCircle, title: "Quality Assurance", description: "High accuracy and reliability" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Operational Excellence</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Back Office Support</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              We take over your backend tasks so your teams can focus on business growth. All work is 
              handled with accuracy, discipline and clear reporting.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="border-2 border-accent mb-12">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Focus on Growth</h3>
                <p className="text-lg text-muted-foreground">
                  This reduces load on your internal team and keeps your records up to date. You get stable 
                  operations and faster turnaround time.
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
          <h2 className="text-4xl font-bold mb-6">Streamline Your Back Office</h2>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BackOfficeSupport;
