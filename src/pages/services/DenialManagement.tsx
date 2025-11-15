import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";

const DenialManagement = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Revenue Recovery</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Denial Management in Medical Billing</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Expert denial management services that identify root causes, appeal denied claims, 
              and recover lost revenue while preventing future denials.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Comprehensive Denial Resolution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our denial management specialists analyze denial patterns, prepare appeals with supporting 
                  documentation, and work denials through to resolution. We recover revenue while implementing 
                  preventive measures to reduce future denial rates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Recover Lost Revenue Today</h2>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DenialManagement;
