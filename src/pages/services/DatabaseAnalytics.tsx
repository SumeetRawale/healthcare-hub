import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Database, TrendingUp, Search, Users, Target, CheckCircle } from "lucide-react";

const DatabaseAnalytics = () => {
  const highlights = [
    "Customer data study",
    "Issue pattern detection",
    "CX improvement insights",
    "Quality recommendations",
    "Monthly CX review"
  ];

  const benefits = [
    { icon: Database, title: "Data Analysis", description: "Deep dive into customer data patterns" },
    { icon: Search, title: "Issue Detection", description: "Identify problems before they escalate" },
    { icon: Users, title: "Customer Experience", description: "Improve service quality systematically" },
    { icon: Target, title: "Quality Focus", description: "Targeted recommendations for improvement" },
    { icon: TrendingUp, title: "Monthly Reviews", description: "Regular performance tracking" },
    { icon: CheckCircle, title: "Actionable Reports", description: "Convert data into clear actions" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Database className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Data Intelligence</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Client Database Analytics</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Your customer data has a clear pattern of what is working and what needs change. We analyze 
              this data to find issues in experience and support.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="border-2 border-accent mb-12">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Data-Driven Improvements</h3>
                <p className="text-lg text-muted-foreground">
                  This helps you improve service quality and build trust with your customers. Our reports 
                  convert your data into actions.
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
          <h2 className="text-4xl font-bold mb-6">Transform Your Data Into Insights</h2>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DatabaseAnalytics;
