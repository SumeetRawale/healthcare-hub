import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, DollarSign, Bell, TrendingUp, CheckCircle, Calendar } from "lucide-react";

const InvoiceManagement = () => {
  const highlights = [
    "Invoice creation and sharing",
    "Reminder management",
    "Payment tracking",
    "Follow-up with overdue accounts",
    "Reconciliation and reporting"
  ];

  const benefits = [
    { icon: FileText, title: "Invoice Creation", description: "Professional invoice generation and delivery" },
    { icon: Bell, title: "Smart Reminders", description: "Automated payment reminder system" },
    { icon: DollarSign, title: "Payment Tracking", description: "Complete visibility on payment status" },
    { icon: CheckCircle, title: "Overdue Follow-ups", description: "Proactive follow-up on pending payments" },
    { icon: Calendar, title: "Reconciliation", description: "Accurate payment reconciliation and reports" },
    { icon: TrendingUp, title: "Smooth Cash Flow", description: "Maintain healthy revenue flow" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Financial Management</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Invoice Management</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Many businesses lose revenue due to delayed invoices or missed reminders. We handle the complete 
              cycle from invoice creation to payment tracking.
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
                  This keeps your cash flow smooth and clear every month. Your finance team receives proper 
                  updates without any confusion.
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
          <h2 className="text-4xl font-bold mb-6">Optimize Your Invoice Process</h2>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InvoiceManagement;
