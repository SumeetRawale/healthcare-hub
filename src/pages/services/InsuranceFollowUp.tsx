import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PhoneCall, CheckCircle, Clock, TrendingUp, Target, DollarSign } from "lucide-react";

const InsuranceFollowUp = () => {
  const features = [
    "Unpaid claims follow-up",
    "Insurance verification and appeals",
    "Aging AR management",
    "Denial resolution tracking",
    "Payment posting reconciliation",
    "EOB and ERA analysis"
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Revenue Recovery",
      description: "Recover revenue from unpaid and delayed claims"
    },
    {
      icon: Clock,
      title: "Faster Payments",
      description: "Reduce days in AR with proactive follow-up"
    },
    {
      icon: TrendingUp,
      title: "Improved Collections",
      description: "Increase overall collection rates significantly"
    },
    {
      icon: Target,
      title: "Expert Team",
      description: "Dedicated specialists handling all follow-ups"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <PhoneCall className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Revenue Recovery</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Insurance Follow-Up Services</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Expert insurance follow-up services to maximize collections, reduce AR days, and recover 
              revenue from unpaid and denied claims through persistent, professional follow-up.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Comprehensive Follow-Up Services</h2>
            
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
                <h3 className="text-2xl font-bold text-primary mb-4">Proactive AR Management</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our insurance follow-up specialists work diligently on your aging accounts receivable, 
                  contacting insurance companies to resolve unpaid claims, request missing information, 
                  and ensure timely payment processing.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain detailed documentation of all follow-up activities, track claim status changes, 
                  and provide regular reports on collection progress and outstanding balances by payer.
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
          <h2 className="text-4xl font-bold mb-6">Maximize Your Revenue Recovery</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Let our experts handle insurance follow-up while you focus on patient care
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button variant="outline_hero" size="lg" asChild>
              <Link to="/services/business-analysis">View Analytics Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InsuranceFollowUp;
