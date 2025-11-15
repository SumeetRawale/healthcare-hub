import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wrench, ClipboardList, Users, CheckCircle, FileText, DollarSign, Bell } from "lucide-react";

const AMCManagement = () => {
  const process = [
    "Ticket creation and logging",
    "Assigning the right engineer or service team",
    "Coordinating visits and follow-ups",
    "Tracking service status till closure",
    "Updating records and reports",
    "Managing invoices and payment reminders",
    "Final payment reconciliation"
  ];

  const benefits = [
    { icon: ClipboardList, title: "Complete Tracking", description: "Every service request logged and monitored" },
    { icon: Users, title: "Team Assignment", description: "Right engineer assigned to every ticket" },
    { icon: CheckCircle, title: "Service Completion", description: "Follow through till closure" },
    { icon: FileText, title: "Documentation", description: "Proper records and reports" },
    { icon: DollarSign, title: "Payment Management", description: "Invoice and payment tracking" },
    { icon: Bell, title: "Real-time Updates", description: "Customers stay informed at every stage" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">End-to-End Management</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">AMC Management – End-to-End</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-4">
              From Ticket Generation to Payment Reconciliation
            </p>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Annual Maintenance Contracts need a smooth process. Most companies struggle with missed tickets, 
              slow follow-ups, pending approvals, and delayed payments. We manage your complete AMC cycle so 
              every service request is tracked, resolved, and closed with proper documentation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">A Complete AMC Process That Works Without Gaps</h2>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              From the moment a customer raises a ticket, our team takes over the entire workflow.
            </p>

            <Card className="border-2 border-accent mb-12">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {process.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground text-lg">{step}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg text-muted-foreground mt-6 font-medium">
                  Every step is handled with accuracy so nothing slips through the cracks.
                </p>
              </CardContent>
            </Card>

            <h3 className="text-3xl font-bold text-primary mb-12 text-center">Key Benefits</h3>
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
                <h3 className="text-2xl font-bold text-primary mb-4">Your Customers Stay Updated. Your Team Stays Stress-Free.</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  We ensure every activity is recorded, every update is shared, and every commitment is met. 
                  Your customers get a smooth service experience and your internal team gets complete visibility.
                </p>
                <p className="text-lg text-muted-foreground font-medium">
                  When the AMC process is organised, your service delivery becomes stronger. Your customer 
                  trust grows. Your revenue stabilises.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Streamline Your AMC Process</h2>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AMCManagement;
