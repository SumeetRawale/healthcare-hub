import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, CheckCircle, Shield, TrendingUp, Award, Users } from "lucide-react";

const MedicalCoding = () => {
  const features = [
    "ICD-10, CPT, and HCPCS coding support",
    "Accurate clinical documentation improvement (CDI)",
    "Error-free coding to minimize claim rejections",
    "Regular audits and compliance monitoring",
    "Real-time coding quality assurance",
    "Specialty-specific coding expertise"
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "99.8% Accuracy Rate",
      description: "Industry-leading accuracy ensuring clean claims and faster reimbursements"
    },
    {
      icon: TrendingUp,
      title: "Reduced Denials",
      description: "Up to 65% reduction in claim denials through precise coding"
    },
    {
      icon: Shield,
      title: "Full Compliance",
      description: "HIPAA compliant operations with regular compliance audits"
    },
    {
      icon: Award,
      title: "Certified Coders",
      description: "Team of certified medical coding professionals with ongoing training"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Healthcare Service</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Medical Coding & Compliance</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Ensure accurate, compliant medical coding with our expert team of certified professionals. 
              We deliver precision coding that maximizes reimbursements and minimizes denials.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">What We Offer</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-6 bg-card rounded-lg border-2 border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 group cursor-pointer opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1 transition-all duration-300 group-hover:scale-110" />
                  <p className="font-medium">{feature}</p>
                </div>
              ))}
            </div>

            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Comprehensive Coding Services</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our medical coding specialists are proficient in all major coding systems including ICD-10-CM, 
                  ICD-10-PCS, CPT, and HCPCS Level II. We provide accurate code assignment for diagnoses, 
                  procedures, and services across all medical specialties.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With clinical documentation improvement (CDI) services, we help healthcare providers capture 
                  the complete clinical picture, ensuring proper code assignment and optimal reimbursement while 
                  maintaining full compliance with regulatory requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Key Benefits</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card 
                    key={index} 
                    className="text-center hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group cursor-pointer opacity-0 animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
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

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Our Process</h2>
            
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Document Review",
                  description: "Thorough review of clinical documentation and patient records"
                },
                {
                  step: "2",
                  title: "Code Assignment",
                  description: "Accurate code assignment by certified medical coders"
                },
                {
                  step: "3",
                  title: "Quality Assurance",
                  description: "Multi-level quality checks and compliance verification"
                },
                {
                  step: "4",
                  title: "Delivery & Support",
                  description: "Timely delivery with ongoing support and clarifications"
                },
                {
                  step: "5",
                  title: "Daily Auditing.",
                  description: "Timely Auditing with ongoing support"
                }
              ].map((item, index) => (
                <Card key={index} className="border-l-4 border-l-accent">
                  <CardContent className="p-8">
                    <div className="flex gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-bold">
                          {item.step}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Improve Your Coding Accuracy?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Partner with our expert medical coding team for accurate, compliant coding
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Request a Consultation</Link>
            </Button>
            <Button variant="outline_hero" size="lg" asChild>
              <Link to="/services/medical-billing">Explore Medical Billing</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MedicalCoding;
