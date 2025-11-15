import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  FileCode,
  CheckCircle,
  Shield,
  TrendingUp,
  Award,
  Clock,
  ChevronRight,
  Home,
  Phone,
  Mail,
  Calendar,
  Lock,
  Stethoscope,
  Building2,
  Activity,
  Briefcase,
  Users,
  Siren,
  Video,
} from "lucide-react";
import { Helmet } from "react-helmet";
import heroImage from "@/assets/hero-healthcare-1.jpg";

const ICDCoding = () => {
  const coreServices = [
    "ICD-10-CM Diagnosis Coding – Assigning detailed diagnosis codes from physician documentation and clinical notes.",
    "ICD-10-PCS Procedure Coding – Capturing every inpatient procedure with accuracy and payer-specific compliance.",
    "DRG Validation – Ensuring correct DRG grouping for accurate reimbursement.",
    "Clinical Documentation Improvement (CDI) – Strengthening provider documentation for coding accuracy and audit readiness.",
    "Denial Management Support – Identifying and resolving coding-related denials.",
    "Coding Audits & Quality Checks – Multi-level review for consistent accuracy above 98%.",
  ];

  const complianceStandards = [
    "HIPAA & CMS standards",
    "AHIMA / AAPC guidelines",
    "OIG & NCCI coding regulations",
    "LCD/NCD policy adherence",
  ];

  const techBenefits = [
    { icon: Clock, title: "Faster turnaround times (TAT)" },
    { icon: TrendingUp, title: "Real-time data visibility" },
    { icon: Lock, title: "Complete data confidentiality" },
  ];

  const industries = [
    { name: "Hospitals & Health Systems", icon: Building2 },
    { name: "Ambulatory Surgical Centers", icon: Activity },
    { name: "Multi-Specialty Clinics", icon: Briefcase },
    { name: "Private Practices & Group Practices", icon: Users },
    { name: "Urgent Care & Walk-in Clinics", icon: Siren },
    { name: "Telehealth Providers", icon: Video },
  ];

  const differentiators = [
    "98%+ Coding Accuracy",
    "HIPAA-Compliant Workflow",
    "Certified (CPC, CCS, CRC,RHIA) Coders",
    "AI-Driven Efficiency",
    "Onsite, Offshore & Hybrid Models",
    "24x7 Support & Reporting",
  ];

  const relatedServices = [
    { title: "CPT & HCPCS Coding Services", link: "/services/cpt-coding" },
    { title: "Medical Billing Services", link: "/services/medical-billing" },
    { title: "Denial Management", link: "/services/denial-management" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>
          ICD Coding Services | Accurate & Compliant Coding Solutions by The Connections Healthcare Services
        </title>
        <meta
          name="description"
          content="Ensure 100% accuracy and compliance in ICD-10 coding with The Connections Healthcare Services. Certified coders, HIPAA-compliant processes, and AI-driven precision for faster reimbursements."
        />
      </Helmet>

      <Navbar />

      {/* Hero Section with Image and Breadcrumb */}
      <section className="relative bg-primary text-primary-foreground">
        <div className="absolute inset-0 overflow-hidden">
          <img src={heroImage} alt="ICD Coding Services" className="w-full h-full object-cover opacity-20" />
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
            <span className="text-primary-foreground">ICD Coding Services</span>
          </nav>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <FileCode className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Medical Coding Service</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-2">ICD Coding Services</h1>
            <p className="text-2xl font-semibold mb-4">Accurate. Compliant. Connected.</p>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              We deliver end-to-end ICD Coding Services that help healthcare providers, hospitals, and billing companies
              achieve error-free documentation, faster reimbursements, and complete compliance. Our certified
              professionals translate clinical information into precise ICD-10-CM and ICD-10-PCS codes.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">What We Offer</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We provide comprehensive ICD-10 coding solutions for all healthcare environments — from
                  multi-specialty hospitals to independent physician groups and ambulatory centers.
                </p>
                <h3 className="text-2xl font-bold text-primary mb-6">Our Core Services</h3>
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance & Quality First */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">Compliance & Quality First</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Every project follows a rigorous compliance framework with multi-tier quality checks, internal audits,
                  and continuous coder training to ensure accuracy and zero audit risks.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {complianceStandards.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-4 bg-secondary/30 rounded-lg border-2 border-transparent hover:border-accent hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-up group cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Shield className="h-5 w-5 text-accent flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                      <span className="font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Card className="border-2 border-accent hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <CardContent className="p-8">
                  <Award className="h-16 w-16 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">Certified Excellence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our team includes certified coders (CPC, CCS, RHIA) with deep specialty expertise and payer-rule
                    knowledge.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology That Drives Accuracy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-6 text-center">Technology That Drives Accuracy</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
              We combine human intelligence with AI-powered CAC platforms and EHR integrations (Epic, Cerner, Meditech,
              eClinicalWorks) on secure cloud infrastructure with HL7/FHIR support.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {techBenefits.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 hover:border-accent transition-all duration-300 group cursor-pointer opacity-0 animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
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

      {/* Industries & Specialties We Support */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-6 text-center">
              The Connections Healthcare Services' with its ICD coding services offers a range of solutions:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <div
                    key={index}
                    className="p-4 bg-secondary/30 rounded-lg text-center hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-accent cursor-pointer group opacity-0 animate-fade-up"
                    style={{ animationDelay: `${index * 60}ms` }}
                  >
                    <Icon className="h-8 w-8 text-accent mx-auto mb-2 transition-transform duration-300 group-hover:scale-110" />
                    <p className="font-medium">{industry.name}</p>
                  </div>
                );
              })}
            </div>
            <p className="text-center text-lg text-muted-foreground max-w-4xl mx-auto">
              No matter your specialty, from optometry to behavioral health, our ICD-10 coding adapts to your clinical and operational workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-6">Why Choose The Connections Healthcare Services?</h2>
            <p className="text-xl text-muted-foreground mb-8 italic">
              Because accuracy in coding means accuracy in revenue.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {differentiators.map((diff, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 hover:border-accent transition-all duration-300 opacity-0 animate-fade-up cursor-pointer"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CardContent className="p-6">
                    <p className="font-semibold">{diff}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-lg text-muted-foreground mt-8 leading-relaxed">
              We don’t just code — we understand clinical intent, payer rules, and compliance standards. Expect cleaner
              claims, fewer denials, and improved reimbursement velocity.
            </p>
          </div>
        </div>
      </section>

      {/* Integrated Revenue Cycle Advantage */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Card className="border-2 border-accent hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <CardContent className="p-8">
                  <TrendingUp className="h-16 w-16 text-accent mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-4">Integrated Revenue Cycle Advantage</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our ICD coding services align with your RCM operations — from charge capture and claim submission to
                    denial resolution — enabling faster cash flow, reduced rework, and higher first-pass acceptance.
                  </p>
                </CardContent>
              </Card>
              <div className="space-y-4">
                {[
                  "Faster cash flow",
                  "Reduced rework",
                  "Higher first-pass acceptance rates",
                  "Improved compliance performance",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-secondary/30 rounded-lg border-2 border-transparent hover:border-accent hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-up group cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                    <p className="font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Let’s Code Accuracy Together.</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Partner with The Connections Healthcare Services for reliable, compliant, and cost-effective ICD Coding
              Services.
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
                  Schedule a Consultation
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
                <Card
                  key={index}
                  className="hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group cursor-pointer border-2"
                >
                  <CardContent className="p-6">
                    <h4 className="font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                      {service.title}
                    </h4>
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

export default ICDCoding;
