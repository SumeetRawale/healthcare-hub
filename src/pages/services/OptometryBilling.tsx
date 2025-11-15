import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Eye, CheckCircle, Shield, TrendingUp, Clock, Target } from "lucide-react";

const OptometryBilling = () => {
  const features = [
    "Vision and medical billing split",
    "Eyewear and optical billing",
    "Contact lens fitting codes",
    "Refractive surgery billing",
    "Vision insurance expertise",
    "Medical eye exam coding"
  ];

  const benefits = [
    {
      icon: Target,
      title: "Dual Billing Expertise",
      description: "Expert handling of both vision and medical claims"
    },
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      description: "Maximize reimbursement for optical services"
    },
    {
      icon: Clock,
      title: "Efficient Processing",
      description: "Fast claim submission and follow-up"
    },
    {
      icon: Shield,
      title: "Compliance Focus",
      description: "Navigate complex vision insurance requirements"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Specialty Billing</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Optometry Billing Services</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Specialized optometry billing services with expertise in both vision and medical eye care 
              billing to maximize revenue for optometry practices.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Complete Optometry Revenue Cycle</h2>
            
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
                <h3 className="text-2xl font-bold text-primary mb-4">Dual Billing Expertise</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our optometry billing specialists understand the unique challenge of managing both routine 
                  vision care and medical eye care billing. We expertly navigate the differences between 
                  vision insurance plans and medical insurance, ensuring proper claim submission to the 
                  correct payer.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From routine eye exams and glasses to medical conditions like glaucoma and cataracts, we 
                  ensure every service is coded and billed correctly for maximum reimbursement while maintaining 
                  compliance with both vision and medical insurance requirements.
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
          <h2 className="text-4xl font-bold mb-6">Optimize Your Optometry Practice Revenue</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Expert billing for vision and medical eye care services
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button variant="outline_hero" size="lg" asChild>
              <Link to="/services/chiropractic-billing">View Chiropractic Billing</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OptometryBilling;
