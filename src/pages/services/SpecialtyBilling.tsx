import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smile, Brain, Eye, Activity, CheckCircle, TrendingUp, Clock, Shield, Target, FileCheck } from "lucide-react";

const SpecialtyBilling = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  const dentalFeatures = [
    "Comprehensive insurance verification and claim submission",
    "Handling of CDT and CPT codes with precise documentation",
    "ERA posting and EOB review for accurate reconciliation",
    "Denial management and appeals for unpaid or underpaid claims"
  ];

  const mentalHealthFeatures = [
    "Accurate CPT coding for therapy, counseling, and evaluation sessions",
    "Insurance eligibility verification and benefits coordination",
    "Support for telehealth billing and time-based codes",
    "Claim submission, tracking, and denial resolution",
    "Compliance with HIPAA and payer-specific requirements"
  ];

  const eyeCareFeatures = [
    "Comprehensive ophthalmic coding (CPT/ICD-10)",
    "Handling of refraction, diagnostic testing, and surgical claims",
    "Coordination of medical and vision insurance benefits",
    "Electronic claim submission and payment posting",
    "Regular AR follow-up and denial appeals"
  ];

  const chiropracticFeatures = [
    "Accurate CPT and modifier coding for spinal manipulation and therapies",
    "Verification of insurance benefits and pre-authorization",
    "Electronic claim submission and tracking",
    "Denial management and payer communication",
    "Compliance with CMS chiropractic billing rules"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Specialty Billing Services | Dental, Mental Health, Eye Care & Chiropractic</title>
        <meta name="description" content="Comprehensive specialty billing services for dental, mental health, optometry, ophthalmology, and chiropractic practices. Expert billing solutions to maximize revenue and reduce denials." />
        <meta name="keywords" content="specialty billing services, dental billing, mental health billing, behavioral health billing, optometry billing, ophthalmology billing, chiropractic billing, healthcare specialty billing" />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FileCheck className="h-14 w-14 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Specialty Billing</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Specialty Billing Services</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Expert billing solutions tailored to the unique needs of dental, mental health, eye care, and chiropractic practices
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-secondary/30 py-8 sticky top-0 z-40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <a href="#dental">Dental Billing</a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="#mental-health">Mental Health Billing</a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="#eye-care">Eye Care Billing</a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="#chiropractic">Chiropractic Billing</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Dental Specialty Billing */}
      <section id="dental" className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Smile className="h-12 w-12 text-accent" />
              <div>
                <h2 className="text-4xl font-bold text-primary">Dental Specialty Billing Services</h2>
                <p className="text-lg text-muted-foreground mt-2">Accurate & Efficient Billing Solutions for Dental Practices</p>
              </div>
            </div>
            
            <Card className="mb-8 border-2 border-accent">
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our Dental Specialty Billing Services simplify claim submission, payment posting, and denial management for dental providers and clinics. We help streamline your insurance billing workflow, reduce denials, and ensure faster payments so your team can focus on patient smiles, not paperwork.
                </p>

                <h3 className="text-2xl font-bold text-primary mb-4">End-to-End Dental Billing Management</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {dentalFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-primary mb-3">Why Choose Our Dental Billing Team</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our experts understand the unique billing codes, frequency limitations, and pre-authorization needs in dental billing. We work with major payers and ensure clean claims for maximum reimbursement.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button variant="default" asChild>
                    <Link to="/contact">Get a Free Dental Billing Consultation</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="font-bold text-primary mb-2">Increased Revenue</h4>
                  <p className="text-sm text-muted-foreground">Optimize reimbursement with accurate dental coding</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="font-bold text-primary mb-2">Faster Payments</h4>
                  <p className="text-sm text-muted-foreground">Reduce payment cycles with clean claims</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="font-bold text-primary mb-2">CDT Expertise</h4>
                  <p className="text-sm text-muted-foreground">Certified dental coders ensuring accuracy</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="font-bold text-primary mb-2">Lower Denials</h4>
                  <p className="text-sm text-muted-foreground">Minimize denials with proper documentation</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mental & Behavioral Health Billing */}
      <section id="mental-health" className="py-20 bg-secondary/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Brain className="h-12 w-12 text-accent" />
              <div>
                <h2 className="text-4xl font-bold text-primary">Mental & Behavioral Health Billing Services</h2>
                <p className="text-lg text-muted-foreground mt-2">Compassionate Billing Support for Mental Health Providers</p>
              </div>
            </div>
            
            <Card className="mb-8 border-2 border-accent">
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our Mental & Behavioral Health Billing Services are designed to meet the specific needs of psychiatrists, therapists, counselors, and behavioral health clinics. We simplify billing for complex sessions, telehealth visits, and multi-payer setups ensuring compliance and maximizing revenue.
                </p>

                <h3 className="text-2xl font-bold text-primary mb-4">Tailored Billing for Mental & Behavioral Health Practices</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {mentalHealthFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-primary mb-3">Why Our Behavioral Health Billing Stands Out</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We understand the sensitivity and complexity of behavioral health billing. Our team ensures timely claims, transparent reporting, and payer compliance so you can focus on patient well-being.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button variant="default" asChild>
                    <Link to="/contact">Schedule a Consultation</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="font-bold text-primary mb-2">Specialty Expertise</h4>
                  <p className="text-sm text-muted-foreground">Deep understanding of behavioral health codes</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="font-bold text-primary mb-2">Revenue Optimization</h4>
                  <p className="text-sm text-muted-foreground">Maximize reimbursement for therapy sessions</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="font-bold text-primary mb-2">Time-Based Coding</h4>
                  <p className="text-sm text-muted-foreground">Accurate session duration billing</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="font-bold text-primary mb-2">HIPAA Compliance</h4>
                  <p className="text-sm text-muted-foreground">Secure and confidential billing processes</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Optometry & Ophthalmology Billing */}
      <section id="eye-care" className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Eye className="h-12 w-12 text-accent" />
              <div>
                <h2 className="text-4xl font-bold text-primary">Optometry & Ophthalmology Billing Services</h2>
                <p className="text-lg text-muted-foreground mt-2">Specialized Billing for Eye Care Providers</p>
              </div>
            </div>
            
            <Card className="mb-8 border-2 border-accent">
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our Optometry and Ophthalmology Billing Services help vision care specialists improve claim accuracy, reduce rejections, and increase reimbursements. From vision insurance coordination to surgical billing, we manage your entire billing cycle with precision and compliance.
                </p>

                <h3 className="text-2xl font-bold text-primary mb-4">Our Eye Care Billing Expertise Covers:</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {eyeCareFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-primary mb-3">Why Choose Us for Eye Care Billing</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We understand the complexities of vision care billing from multiple payers to coding overlaps and ensure every claim is clean, accurate, and fully reimbursable.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button variant="default" asChild>
                    <Link to="/contact">Get Started with Eye Care Billing</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="font-bold text-primary mb-2">Dual Billing Expertise</h4>
                  <p className="text-sm text-muted-foreground">Medical and vision insurance coordination</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="font-bold text-primary mb-2">Revenue Growth</h4>
                  <p className="text-sm text-muted-foreground">Maximize reimbursement for optical services</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="font-bold text-primary mb-2">Efficient Processing</h4>
                  <p className="text-sm text-muted-foreground">Fast claim submission and follow-up</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="font-bold text-primary mb-2">Compliance Focus</h4>
                  <p className="text-sm text-muted-foreground">Navigate complex vision insurance requirements</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Chiropractic Specialty Billing */}
      <section id="chiropractic" className="py-20 bg-secondary/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Activity className="h-12 w-12 text-accent" />
              <div>
                <h2 className="text-4xl font-bold text-primary">Chiropractic Specialty Billing Services</h2>
                <p className="text-lg text-muted-foreground mt-2">Simplify Chiropractic Billing & Boost Reimbursements</p>
              </div>
            </div>
            
            <Card className="mb-8 border-2 border-accent">
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our Chiropractic Billing Services help chiropractors overcome the challenges of payer-specific limitations, coding errors, and frequent denials. We handle every step of the billing process, ensuring faster payments and fewer headaches.
                </p>

                <h3 className="text-2xl font-bold text-primary mb-4">Complete Chiropractic Billing Solutions</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {chiropracticFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-primary mb-3">Why Chiropractors Trust Our Billing Expertise</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our billing specialists understand chiropractic-specific payer rules and frequency caps, ensuring all claims meet compliance standards and get paid promptly.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button variant="default" asChild>
                    <Link to="/contact">Talk to a Billing Expert Today</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="font-bold text-primary mb-2">Specialty Expertise</h4>
                  <p className="text-sm text-muted-foreground">Deep knowledge of chiropractic billing codes</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="font-bold text-primary mb-2">Revenue Optimization</h4>
                  <p className="text-sm text-muted-foreground">Maximize reimbursement for all services</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="font-bold text-primary mb-2">Faster Payments</h4>
                  <p className="text-sm text-muted-foreground">Efficient claim processing and follow-up</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="font-bold text-primary mb-2">Compliance Assured</h4>
                  <p className="text-sm text-muted-foreground">Navigate complex chiropractic regulations</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Specialty Billing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Let our specialty billing experts handle your claims while you focus on providing exceptional patient care
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button variant="outline_hero" size="lg" asChild>
              <Link to="/all-services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpecialtyBilling;