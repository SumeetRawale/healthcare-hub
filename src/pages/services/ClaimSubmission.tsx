import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Send, CheckCircle, Clock, Shield, TrendingUp, RefreshCw } from "lucide-react";

const ClaimSubmission = () => {
  const features = [
    "Electronic claim submission (EDI 837)",
    "Multi-payer claim filing",
    "Real-time claim status tracking",
    "Rejection management and resubmission",
    "Clearinghouse integration",
    "Claim scrubbing before submission"
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Fast Submission",
      description: "Same-day electronic claim filing"
    },
    {
      icon: CheckCircle,
      title: "High Success Rate",
      description: "98% first-pass acceptance rate"
    },
    {
      icon: RefreshCw,
      title: "Quick Turnaround",
      description: "Immediate rejection handling and resubmission"
    },
    {
      icon: TrendingUp,
      title: "Revenue Acceleration",
      description: "Faster payments through efficient submission"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Send className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Claim Processing</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Claim Submission & Rejections</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Professional claim submission services with rejection management that ensures fast, 
              accurate claim filing and immediate resolution of submission issues.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Complete Submission Services</h2>
            
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
                <h3 className="text-2xl font-bold text-primary mb-4">Efficient Electronic Claim Filing</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our claim submission team handles electronic filing to all major payers through secure clearinghouse 
                  connections. We scrub claims before submission to catch errors, submit claims same-day, and track 
                  acceptance status in real-time.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When rejections occur, we immediately identify the issue, make corrections, and resubmit within 
                  24 hours, ensuring minimal delays in your revenue cycle.
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
          <h2 className="text-4xl font-bold mb-6">Accelerate Your Claims Processing</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Partner with us for fast, accurate claim submission and rejection management
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline_hero" size="lg" asChild>
              <Link to="/services/payment-posting">Explore Payment Posting</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClaimSubmission;
