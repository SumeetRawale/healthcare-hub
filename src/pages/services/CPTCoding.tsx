import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, CheckCircle, Shield, Award, DollarSign, Stethoscope, Lock, Zap, Clock, TrendingUp, Users, ChevronRight, Home, Phone, Mail, Calendar, Heart, Bone, Activity, Droplet, Pill, Baby, AlertCircle, Scissors, Users2, Brain } from "lucide-react";
import { Helmet } from "react-helmet";
import heroImage from "@/assets/hero-healthcare-1.jpg";

const CPTCoding = () => {
  const coreServices = [
    "CPT Procedure Coding – Assigning precise codes for surgical, diagnostic, and outpatient services",
    "HCPCS Level II Coding – Capturing supplies, equipment, and non-physician services accurately",
    "Modifier Management – Ensuring correct modifier usage to prevent denials and maintain compliance",
    "Charge Capture Review – Verifying that all performed services are captured and billed",
    "Coding Audits & QA – Routine audits to maintain >98% accuracy",
    "Denial Prevention Support – Identifying and correcting coding errors that trigger rejections"
  ];

  const complianceStandards = [
    "AMA CPT® Guidelines",
    "CMS & OIG Compliance",
    "HIPAA Security Standards",
    "NCCI Edits, LCD/NCD Policies"
  ];

  const techFeatures = [
    { icon: Zap, title: "Seamless workflow integration" },
    { icon: TrendingUp, title: "Real-time productivity tracking" },
    { icon: Lock, title: "Complete HIPAA data security" },
    { icon: Clock, title: "Faster turnaround time (TAT)" }
  ];

  const specialties = [
    { name: "Cardiology", icon: Heart },
    { name: "Orthopedics", icon: Bone },
    { name: "Radiology", icon: Activity },
    { name: "Gastroenterology", icon: Droplet },
    { name: "Internal Medicine", icon: Pill },
    { name: "Pediatrics", icon: Baby },
    { name: "Emergency Medicine", icon: AlertCircle },
    { name: "General Surgery", icon: Scissors },
    { name: "OB/GYN", icon: Users2 },
    { name: "Oncology", icon: Brain }
  ];

  const benefitsTable = [
    { strength: "Certified Coders (CPC, COC, CCS-P)", advantage: "Accurate, compliant coding" },
    { strength: "HIPAA-Compliant Operations", advantage: "Total data protection" },
    { strength: "98%+ Coding Accuracy", advantage: "Reduced claim rejections" },
    { strength: "AI-Driven Coding", advantage: "Faster processing" },
    { strength: "Specialty Expertise", advantage: "Better reimbursement outcomes" },
    { strength: "24x7 Service Model", advantage: "Continuous operational coverage" }
  ];

  const rcmBenefits = [
    "Clean claim submission",
    "Higher first-pass payment rates",
    "Lower denial ratios",
    "Transparent revenue tracking"
  ];

  const relatedServices = [
    { title: "ICD Coding Services", link: "/services/icd-coding" },
    { title: "Denial Management", link: "/services/denial-management" },
    { title: "Medical Billing & RCM Services", link: "/services/medical-billing" },
    { title: "HCC Coding", link: "/services/hcc-coding" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>CPT Coding Services | Accurate & Compliant Procedure Coding by The Connections Healthcare Services</title>
        <meta name="description" content="Streamline your revenue cycle with accurate CPT coding services from The Connections Healthcare Services. Certified coders, HIPAA-compliant workflows, and specialty-specific expertise for precise reimbursement." />
      </Helmet>

      <Navbar />

      {/* Hero Section with Image */}
      <section className="relative bg-primary text-primary-foreground">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={heroImage} 
            alt="CPT Coding Services" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 py-20">
          {/* Breadcrumb */}
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
            <span className="text-primary-foreground">CPT Coding Services</span>
          </nav>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Procedure Coding Service</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">CPT Coding Services</h1>
            <p className="text-2xl font-semibold mb-4">Precise. Compliant. Revenue-Driven.</p>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              At The Connections Healthcare Services, we deliver end-to-end CPT Coding Services that ensure every medical procedure is coded correctly, compliant with payer guidelines, and ready for clean claim submission. Our AAPC and AHIMA-certified coding experts use the latest CPT, HCPCS, and modifier guidelines to translate medical procedures into accurate billable codes—helping healthcare organizations maximize reimbursements while maintaining full compliance.
            </p>
          </div>
        </div>
      </section>

      {/* What Is CPT Coding */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">What Is CPT Coding?</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Current Procedural Terminology (CPT) coding is the standard system used by U.S. healthcare providers to document and report medical, surgical, and diagnostic services. It ensures uniform communication between providers, payers, and regulatory bodies, supporting accurate reimbursement and performance tracking.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  At The Connections Healthcare Services, we stay aligned with AMA updates and CMS requirements to provide the highest level of coding accuracy and regulatory compliance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our CPT Coding Expertise */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-6 text-center">Our CPT Coding Expertise</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
              We provide comprehensive CPT coding solutions for all healthcare environments—from hospitals and specialty practices to ambulatory centers and telemedicine providers.
            </p>
            
            <h3 className="text-2xl font-bold text-primary mb-6">Our Core Services Include:</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
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

      {/* Compliance & Coding Accuracy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">Compliance & Coding Accuracy</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our processes are built on strict adherence to industry standards and regulatory requirements. We maintain continuous training, peer reviews, and multi-level QA audits, ensuring accuracy, compliance, and audit readiness across all specialties.
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
                    Our team consists of AAPC and AHIMA-certified professional coders with extensive experience in specialty-specific coding requirements and payer guidelines.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-6 text-center">Technology Integration for Smarter Coding</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
              We combine skilled human coding expertise with AI-powered Computer-Assisted Coding (CAC) tools integrated with major EHR systems like Epic, Cerner, Meditech, and eClinicalWorks.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card 
                    key={index} 
                    className="text-center hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 hover:border-accent transition-all duration-300 group cursor-pointer opacity-0 animate-fade-up"
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
              We provide CPT coding across multiple specialties with dedicated coders for each area:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {specialties.map((specialty, index) => {
                const Icon = specialty.icon;
                return (
                  <Card 
                    key={index} 
                    className="p-4 bg-secondary/30 rounded-lg text-center hover:bg-accent/10 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-accent cursor-pointer group opacity-0 animate-fade-up"
                    style={{ animationDelay: `${index * 60}ms` }}
                  >
                    <CardContent className="p-0">
                      <Icon className="h-8 w-8 text-accent mx-auto mb-2 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6" />
                      <p className="font-semibold group-hover:text-accent transition-colors duration-300">{specialty.name}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            <p className="text-center text-muted-foreground mt-8 italic">
              Our specialty-based coders ensure accurate CPT code selection aligned with payer-specific documentation requirements.
            </p>
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
                        <th className="text-left p-6 text-lg font-bold">Our Strengths</th>
                        <th className="text-left p-6 text-lg font-bold">Your Advantage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {benefitsTable.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-secondary/30"}>
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

      {/* End-to-End RCM Integration */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Card className="border-2 border-accent hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <CardContent className="p-8">
                  <TrendingUp className="h-16 w-16 text-accent mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-4">End-to-End RCM Integration</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our CPT coding services form the backbone of an efficient Revenue Cycle Management (RCM) process. By integrating procedure coding with ICD diagnosis coding, charge entry, and billing operations, we ensure optimal financial performance.
                  </p>
                </CardContent>
              </Card>
              
              <div className="space-y-4">
                {rcmBenefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-4 bg-secondary/30 rounded-lg opacity-0 animate-fade-up transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 hover:border-2 hover:border-accent hover:bg-accent/10 cursor-pointer group border-2 border-transparent"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 transition-all duration-300 group-hover:scale-110" />
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
              Because every procedure deserves precision.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team combines clinical understanding, coding expertise, and technology to deliver CPT coding services that are accurate, timely, and fully compliant.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center opacity-0 animate-fade-up transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 hover:border-accent hover:bg-accent/10 cursor-pointer group" style={{ animationDelay: '0ms' }}>
                <CardContent className="p-6">
                  <DollarSign className="h-12 w-12 text-accent mx-auto mb-3 transition-all duration-300 group-hover:scale-110" />
                  <p className="font-semibold">Streamlined Revenue Cycle</p>
                </CardContent>
              </Card>
              <Card className="text-center opacity-0 animate-fade-up transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 hover:border-accent hover:bg-accent/10 cursor-pointer group" style={{ animationDelay: '100ms' }}>
                <CardContent className="p-6">
                  <CheckCircle className="h-12 w-12 text-accent mx-auto mb-3 transition-all duration-300 group-hover:scale-110" />
                  <p className="font-semibold">Reliable Coding Accuracy</p>
                </CardContent>
              </Card>
              <Card className="text-center opacity-0 animate-fade-up transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 hover:border-accent hover:bg-accent/10 cursor-pointer group" style={{ animationDelay: '200ms' }}>
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-accent mx-auto mb-3 transition-all duration-300 group-hover:scale-110" />
                  <p className="font-semibold">Compliance Confidence</p>
                </CardContent>
              </Card>
              <Card className="text-center opacity-0 animate-fade-up transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 hover:border-accent hover:bg-accent/10 cursor-pointer group" style={{ animationDelay: '300ms' }}>
                <CardContent className="p-6">
                  <TrendingUp className="h-12 w-12 text-accent mx-auto mb-3 transition-all duration-300 group-hover:scale-110" />
                  <p className="font-semibold">Cost Efficiency</p>
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
            <h2 className="text-4xl font-bold mb-6">Let's Simplify Coding. Amplify Reimbursement.</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Connect with The Connections Healthcare Services to elevate your CPT coding accuracy and revenue performance.
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
                  Schedule a Free Consultation
                </Link>
              </Button>
              <Button variant="outline_hero" size="lg" asChild>
                <Link to="/healthcare-services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Sidebar */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Explore More Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedServices.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-2 border-2 hover:border-accent">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-primary mb-3">{service.title}</h4>
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <Link to={service.link} className="flex items-center gap-2">
                        Learn More
                        <ChevronRight className="h-4 w-4" />
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

export default CPTCoding;
