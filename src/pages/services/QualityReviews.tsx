import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ClipboardCheck, CheckCircle, Shield, TrendingUp, Award, Target } from "lucide-react";

const QualityReviews = () => {
  const features = [
    "Comprehensive chart audits",
    "Coding accuracy validation",
    "Documentation compliance review",
    "HEDIS quality measures",
    "Performance improvement tracking",
    "Regulatory compliance audits"
  ];

  const benefits = [
    {
      icon: Target,
      title: "Quality Improvement",
      description: "Identify and address quality gaps systematically"
    },
    {
      icon: TrendingUp,
      title: "Performance Metrics",
      description: "Track and improve key quality indicators"
    },
    {
      icon: Shield,
      title: "Compliance Assurance",
      description: "Ensure adherence to quality standards and regulations"
    },
    {
      icon: Award,
      title: "Expert Analysis",
      description: "Detailed quality assessments from certified professionals"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <ClipboardCheck className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Quality Assurance</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Quality Reviews & Audits</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Comprehensive quality review services to ensure your healthcare organization meets the highest 
              standards of care, documentation, and regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Complete Quality Review Services</h2>
            
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
                <h3 className="text-2xl font-bold text-primary mb-4">Comprehensive Quality Assessment</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our quality review team conducts thorough audits of clinical documentation, coding accuracy, 
                  and compliance with quality measures. We identify areas for improvement and provide actionable 
                  recommendations to enhance your quality scores and patient outcomes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From HEDIS measures to Medicare Stars ratings, we help healthcare organizations optimize their 
                  quality performance through systematic review processes and continuous improvement initiatives.
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
          <h2 className="text-4xl font-bold mb-6">Enhance Your Quality Performance</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Partner with quality experts to improve outcomes and compliance
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button variant="outline_hero" size="lg" asChild>
              <Link to="/services/insurance-follow-up">View Follow-Up Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QualityReviews;
