import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { DollarSign, CheckCircle, Clock, Shield, Target, TrendingUp } from "lucide-react";

const PaymentPosting = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Revenue Cycle</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Payment Posting in Medical Billing</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Accurate and timely payment posting services that ensure proper credit application, 
              EOB reconciliation, and complete revenue cycle visibility.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Professional Payment Posting</h2>
            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Accurate Payment Processing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our payment posting team processes insurance payments, patient payments, and adjustments with 
                  precision. We reconcile EOBs, apply payments correctly, and maintain accurate account balances 
                  for optimal revenue cycle management.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Streamline Your Payment Posting</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PaymentPosting;
