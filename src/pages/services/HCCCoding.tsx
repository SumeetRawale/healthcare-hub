import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Activity, CheckCircle, Shield, TrendingUp, Award, Target, ChevronRight, Home, Phone, Mail, Calendar, Zap, Lock, Clock, Stethoscope, Heart, Droplet, Wind, Pill, HeartPulse, UserRound, Users } from "lucide-react";
import { Helmet } from "react-helmet";
import heroImage from "@/assets/hero-healthcare-1.jpg";

const HCCCoding = () => {
  const audiences = [
    "Medicare Advantage (Part C) Plans",
    "Commercial ACA Programs",
    "Accountable Care Organizations (ACOs)",
    "Independent Physician Associations (IPAs)",
    "Health Plans & Payers"
  ];

  const coreServices = [
    "HCC Code Abstraction – Extracting and assigning accurate HCC codes from clinical documentation.",
    "RAF Score Optimization – Ensuring proper risk score capture for accurate payment adjustment.",
    "Chart Review & Retrospective Coding – Identifying missed or miscoded chronic conditions.",
    "Prospective (Concurrent) Coding – Capturing ongoing conditions during current encounters.",
    "Clinical Documentation Improvement (CDI) – Strengthening provider documentation for risk capture.",
    "HCC Coding Audits & QA – Validating accuracy, completeness, and compliance."
  ];

  const complianceStandards = [
    "CMS & HHS Risk Adjustment Guidelines",
    "ICD-10-CM & HCC Mapping Standards",
    "OIG & HEDIS Quality Frameworks",
    "AHIMA & AAPC compliance codes of conduct"
  ];

  const techFeatures = [
    { icon: Zap, title: "Automated HCC code identification" },
    { icon: TrendingUp, title: "RAF score calculation and gap closure" },
    { icon: Lock, title: "Secure, HIPAA-compliant cloud operations" },
    { icon: Clock, title: "Real-time reporting dashboards" }
  ];

  const specialties = [
    { name: "Cardiology", icon: Heart },
    { name: "Endocrinology", icon: Activity },
    { name: "Pulmonology", icon: Wind },
    { name: "Nephrology", icon: Droplet },
    { name: "Oncology", icon: Target },
    { name: "Internal Medicine", icon: Stethoscope },
    { name: "Geriatrics", icon: Users },
    { name: "Primary Care", icon: UserRound },
    { name: "Rheumatology", icon: HeartPulse }
  ];

  const benefitsTable = [
    { strength: "Certified CRC/HCC Coders", advantage: "Expert risk adjustment accuracy" },
    { strength: "AI-Driven Analytics", advantage: "Faster HCC identification" },
    { strength: "HIPAA-Compliant Workflow", advantage: "Secure data handling" },
    { strength: "98%+ Accuracy Rates", advantage: "Better compliance & fewer errors" },
    { strength: "Retrospective & Concurrent Coding", advantage: "Full coverage for every patient" },
    { strength: "RAF Optimization", advantage: "Maximized risk-adjusted revenue" }
  ];

  const relatedServices = [
    { title: "ICD Coding Services", link: "/services/icd-coding" },
    { title: "CPT Coding Services", link: "/services/cpt-coding" },
    { title: "Risk Adjustment Audits", link: "/services/claim-audits" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>HCC Coding Services | Risk Adjustment & RAF Optimization by The Connections Healthcare Services</title>
        <meta name="description" content="Improve risk adjustment accuracy and optimize RAF scores with HCC coding services by The Connections Healthcare Services. Certified coders, compliant workflows, and AI-driven insights for value-based care." />
      </Helmet>

      <Navbar />

      {/* Hero Section with Image and Breadcrumb */}
      <section className="relative bg-primary text-primary-foreground">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroImage}
            alt="HCC Coding Services"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <nav className="flex items-center gap-2 text-sm mb-8 text-primary-foreground/80">
            <Link to="/" className="hover:text-accent flex items-center gap-1">
              <Home className="h-4 w-4" />
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/healthcare-services" className="hover:text-accent">
              Healthcare Services
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-primary-foreground">HCC Coding Services</span>
          </nav>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Risk Adjustment Coding</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-2">HCC Coding Services</h1>
            <p className="text-2xl font-semibold mb-4">Accurate. Compliant. Risk-Adjusted.</p>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              At The Connections Healthcare Services, we provide end-to-end HCC Coding Services that help healthcare organizations accurately capture patient risk profiles, ensure RAF optimization, and maintain CMS compliance. Our certified HCC coders and auditors specialize in Medicare Advantage (MA), ACA, and commercial risk adjustment models.
            </p>
          </div>
        </div>
      </section>

      {/* What Is HCC Coding */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">What Is HCC Coding?</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Hierarchical Condition Category (HCC) coding is a risk-adjusted payment model developed by CMS to predict future healthcare costs based on chronic conditions.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  {[
                    "Proper reimbursement for risk-adjusted populations",
                    "Accurate patient risk profiling",
                    "Enhanced compliance and quality reporting",
                    "Better resource allocation and care management"
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-2 p-4 bg-secondary/30 rounded-lg border-2 border-transparent hover:border-accent hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-up group cursor-pointer"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                      <span className="font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Our approach combines clinical understanding, advanced analytics, and coding expertise to help providers maximize revenue integrity under value-based care models.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our HCC Coding Expertise */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-6 text-center">Our HCC Coding Expertise</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
              We deliver comprehensive HCC coding and risk adjustment solutions tailored for:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {audiences.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 p-4 bg-card rounded-lg border-2 border-border hover:border-accent hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-up group cursor-pointer"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-primary mb-6">Our Core HCC Services Include:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {coreServices.map((service, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-6 bg-card rounded-lg border-2 border-border hover:border-accent hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-up group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110" />
                  <p className="font-medium">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Quality */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">Compliance & Quality You Can Trust</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We ensure 100% adherence to CMS RADV and HIPAA requirements. Our certified coders (CPC, CRC, CCS) follow the latest standards and maintain audit readiness through multi-level QA.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {complianceStandards.map((standard, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-2 p-4 bg-secondary/30 rounded-lg border-2 border-transparent hover:border-accent hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-up group cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Shield className="h-5 w-5 text-accent flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                      <span className="font-medium text-sm">{standard}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Card className="border-2 border-accent hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <CardContent className="p-8">
                  <Award className="h-16 w-16 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">Certified Excellence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every record undergoes peer reviews and real-time accuracy monitoring to maintain consistent performance and compliance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology-Driven Risk Adjustment */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-6 text-center">Technology-Driven Risk Adjustment</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
              We leverage AI-powered coding tools and EHR-integrated analytics (Epic, Cerner, Meditech, Allscripts) to improve accuracy and speed.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card 
                    key={index} 
                    className="text-center hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group cursor-pointer opacity-0 animate-fade-up"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <CardContent className="p-6">
                      <Icon className="h-12 w-12 text-accent mx-auto mb-4 transition-all duration-300 group-hover:scale-110" />
                      <p className="font-semibold">{feature.title}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Specialties We Support */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-6 text-center">Specialties We Support</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Our HCC coders are skilled across multiple specialties and chronic conditions impacting RAF.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {specialties.map((specialty, index) => {
                const Icon = specialty.icon;
                return (
                  <div 
                    key={index} 
                    className="p-4 bg-secondary/30 rounded-lg text-center hover:bg-accent/10 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-accent cursor-pointer group opacity-0 animate-fade-up"
                    style={{ animationDelay: `${index * 60}ms` }}
                  >
                    <Icon className="h-8 w-8 text-accent mx-auto mb-2 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6" />
                    <p className="font-semibold group-hover:text-accent transition-colors duration-300">{specialty.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Table */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Benefits of Partnering with The Connections Healthcare Services</h2>
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-primary text-primary-foreground">
                        <th className="text-left p-6 text-lg font-bold">Our Capabilities</th>
                        <th className="text-left p-6 text-lg font-bold">Your Advantages</th>
                      </tr>
                    </thead>
                    <tbody>
                      {benefitsTable.map((row, index) => (
                        <tr 
                          key={index} 
                          className={`${index % 2 === 0 ? "bg-background" : "bg-secondary/30"} hover:bg-accent/10 transition-all duration-300 cursor-pointer opacity-0 animate-fade-up`}
                          style={{ animationDelay: `${index * 60}ms` }}
                        >
                          <td className="p-6 font-semibold">{row.strength}</td>
                          <td className="p-6 text-muted-foreground">{row.advantage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* End-to-End Integration */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Card className="border-2 border-accent hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <CardContent className="p-8">
                  <TrendingUp className="h-16 w-16 text-accent mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-4">End-to-End Risk Adjustment Integration</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our HCC coding services integrate with your revenue cycle and clinical operations, ensuring a continuous loop between provider documentation, coding accuracy, and RAF reporting—supporting both retrospective and prospective models.
                  </p>
                </CardContent>
              </Card>
              <div className="space-y-4">
                {[
                  "Continuous audit readiness",
                  "Accurate RAF reporting",
                  "Closed risk gaps with proactive coding",
                  "Financial accuracy year-round"
                ].map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-4 bg-secondary/30 rounded-lg border-2 border-transparent hover:border-accent hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-up group cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                    <p className="font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-6">Why Choose The Connections Healthcare Services?</h2>
            <p className="text-xl text-muted-foreground mb-8 italic">
              Because in risk adjustment, accuracy defines revenue, and compliance defines trust.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We help you capture every chronic condition correctly, maintain CMS audit readiness, improve RAF accuracy, and drive compliant reimbursements in value-based care models.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 hover:border-accent transition-all duration-300 opacity-0 animate-fade-up group cursor-pointer" style={{ animationDelay: '0ms' }}>
                <CardContent className="p-6">
                  <Target className="h-12 w-12 text-accent mx-auto mb-3 transition-transform duration-300 group-hover:scale-110" />
                  <p className="font-semibold">RAF Score Optimization</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 hover:border-accent transition-all duration-300 opacity-0 animate-fade-up group cursor-pointer" style={{ animationDelay: '80ms' }}>
                <CardContent className="p-6">
                  <CheckCircle className="h-12 w-12 text-accent mx-auto mb-3 transition-transform duration-300 group-hover:scale-110" />
                  <p className="font-semibold">Accurate Risk Capture</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 hover:border-accent transition-all duration-300 opacity-0 animate-fade-up group cursor-pointer" style={{ animationDelay: '160ms' }}>
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-accent mx-auto mb-3 transition-transform duration-300 group-hover:scale-110" />
                  <p className="font-semibold">Compliance Confidence</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 hover:border-accent transition-all duration-300 opacity-0 animate-fade-up group cursor-pointer" style={{ animationDelay: '240ms' }}>
                <CardContent className="p-6">
                  <TrendingUp className="h-12 w-12 text-accent mx-auto mb-3 transition-transform duration-300 group-hover:scale-110" />
                  <p className="font-semibold">Revenue Integrity</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Capture Every Risk. Maximize Every Opportunity.</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Partner with The Connections Healthcare Services to strengthen your risk adjustment accuracy and coding compliance today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>Call: +91 78878 98196</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>info@the-connections.com</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Request a Consultation
                </Link>
              </Button>
              <Button variant="outline_hero" size="lg" asChild>
                <Link to="/healthcare-services">Explore More Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Explore More Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group cursor-pointer border-2">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-primary mb-3 group-hover:text-accent transition-colors">{service.title}</h4>
                    <Button variant="link" className="p-0 h-auto group-hover:text-accent" asChild>
                      <Link to={service.link} className="flex items-center gap-2">
                        Learn More
                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HCCCoding;
