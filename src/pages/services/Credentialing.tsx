import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  UserCheck, 
  Users, 
  Building2, 
  CheckCircle, 
  Shield, 
  Clock, 
  Award,
  FileCheck,
  RefreshCw,
  TrendingUp
} from "lucide-react";

const Credentialing = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to section based on hash
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const individualFeatures = [
    "Primary Source Verification (PSV)",
    "CAQH ProView Management",
    "Medicare & Medicaid Enrollment",
    "Commercial Payer Registration",
    "State Licensure Verification",
    "DEA & Board Certification Checks"
  ];

  const groupFeatures = [
    "Multi-provider credentialing",
    "Group practice enrollment",
    "Tax ID and NPI setup",
    "Facility credentialing",
    "Medicare PECOS enrollment",
    "Commercial payer contracting"
  ];

  const combinedFeatures = [
    "End-to-end provider credentialing",
    "Group practice setup & enrollment",
    "Centralized documentation management",
    "Network contracting support",
    "Compliance audits & monitoring",
    "Real-time status tracking"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Credentialing Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Complete Credentialing Solutions</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Streamlined credentialing and payer enrollment for individual providers, group practices, 
              and healthcare organizations nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-background py-8 border-b sticky top-0 z-10 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" asChild>
              <a href="#individual">Individual Provider</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#group">Group Practice</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#combined">Provider & Group</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Individual Provider Credentialing Section */}
      <section id="individual" className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <UserCheck className="h-12 w-12 text-accent" />
              <div>
                <h2 className="text-4xl font-bold text-primary">Individual Provider Credentialing Services</h2>
                <p className="text-xl text-muted-foreground mt-2">
                  Streamlined Credentialing & Payer Enrollment for Healthcare Professionals
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">What Is Individual Provider Credentialing?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Individual provider credentialing is the comprehensive process of verifying a healthcare 
                    professional's qualifications, licenses, and certifications to ensure they meet payer and 
                    regulatory requirements for network participation.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Why Credentialing Matters</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Proper credentialing ensures you can bill insurance companies, maintain compliance with 
                    healthcare regulations, and establish trust with patients. Without it, you cannot participate 
                    in insurance networks or receive reimbursements.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-3xl font-bold text-primary mb-8">Comprehensive Credentialing Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {individualFeatures.map((feature, index) => (
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

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card 
                className="text-center hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group cursor-pointer opacity-0 animate-fade-up"
                style={{ animationDelay: '0ms' }}
              >
                <CardContent className="p-6">
                  <Clock className="h-12 w-12 text-accent mx-auto mb-4 transition-all duration-300 group-hover:scale-110" />
                  <h4 className="font-bold text-lg mb-2">Fast Processing</h4>
                  <p className="text-sm text-muted-foreground">Quick turnaround times</p>
                </CardContent>
              </Card>
              <Card 
                className="text-center hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group cursor-pointer opacity-0 animate-fade-up"
                style={{ animationDelay: '100ms' }}
              >
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-accent mx-auto mb-4 transition-all duration-300 group-hover:scale-110" />
                  <h4 className="font-bold text-lg mb-2">Full Compliance</h4>
                  <p className="text-sm text-muted-foreground">100% regulatory adherence</p>
                </CardContent>
              </Card>
              <Card 
                className="text-center hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group cursor-pointer opacity-0 animate-fade-up"
                style={{ animationDelay: '200ms' }}
              >
                <CardContent className="p-6">
                  <FileCheck className="h-12 w-12 text-accent mx-auto mb-4 transition-all duration-300 group-hover:scale-110" />
                  <h4 className="font-bold text-lg mb-2">Error-Free</h4>
                  <p className="text-sm text-muted-foreground">Accurate applications</p>
                </CardContent>
              </Card>
              <Card 
                className="text-center hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group cursor-pointer opacity-0 animate-fade-up"
                style={{ animationDelay: '300ms' }}
              >
                <CardContent className="p-6">
                  <Award className="h-12 w-12 text-accent mx-auto mb-4 transition-all duration-300 group-hover:scale-110" />
                  <h4 className="font-bold text-lg mb-2">Expert Support</h4>
                  <p className="text-sm text-muted-foreground">Dedicated specialists</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Get Credentialed & Start Billing Faster</h3>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Let our experts handle your credentialing process while you focus on patient care
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Talk to a Credentialing Expert</Link>
                </Button>
                <Button variant="outline_hero" size="lg" asChild>
                  <Link to="/contact">Schedule Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Group Credentialing Section */}
      <section id="group" className="py-20 bg-secondary/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Users className="h-12 w-12 text-accent" />
              <div>
                <h2 className="text-4xl font-bold text-primary">Group Credentialing Services</h2>
                <p className="text-xl text-muted-foreground mt-2">
                  Seamless Payer Enrollment for Clinics & Multi-Provider Practices
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">What Is Group Credentialing?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Group credentialing involves enrolling your entire practice or clinic with insurance payers 
                    under a single group Tax ID and NPI. This streamlined approach allows multiple providers to 
                    be credentialed simultaneously under your organization's umbrella.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Benefits for Your Practice</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Group credentialing simplifies administration, reduces paperwork, ensures consistent payer 
                    participation across all providers, and accelerates the enrollment process for new hires 
                    joining your practice.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-3xl font-bold text-primary mb-8">Complete Group Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {groupFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-6 bg-card rounded-lg border-2 border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1 transition-all duration-300 group-hover:scale-110" />
                  <p className="font-medium">{feature}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="text-center hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6">
                  <Building2 className="h-12 w-12 text-accent mx-auto mb-4 transition-all duration-300 group-hover:scale-110" />
                  <h4 className="font-bold text-lg mb-2">Practice Setup</h4>
                  <p className="text-sm text-muted-foreground">Complete group enrollment</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6">
                  <Clock className="h-12 w-12 text-accent mx-auto mb-4 transition-all duration-300 group-hover:scale-110" />
                  <h4 className="font-bold text-lg mb-2">Efficient Process</h4>
                  <p className="text-sm text-muted-foreground">Multiple providers at once</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6">
                  <RefreshCw className="h-12 w-12 text-accent mx-auto mb-4 transition-all duration-300 group-hover:scale-110" />
                  <h4 className="font-bold text-lg mb-2">Automated Renewals</h4>
                  <p className="text-sm text-muted-foreground">Never miss a deadline</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6">
                  <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4 transition-all duration-300 group-hover:scale-110" />
                  <h4 className="font-bold text-lg mb-2">Status Tracking</h4>
                  <p className="text-sm text-muted-foreground">Real-time monitoring</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Accelerate Your Group Enrollment</h3>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Get your entire practice credentialed efficiently with our expert team
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Request Group Credentialing Quote</Link>
                </Button>
                <Button variant="outline_hero" size="lg" asChild>
                  <Link to="/contact">Connect With Enrollment Specialists</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combined Provider & Group Section */}
      <section id="combined" className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Building2 className="h-12 w-12 text-accent" />
              <div>
                <h2 className="text-4xl font-bold text-primary">Provider & Group Credentialing Solutions</h2>
                <p className="text-xl text-muted-foreground mt-2">
                  Comprehensive Credentialing for Healthcare Providers & Organizations
                </p>
              </div>
            </div>

            <Card className="mb-12 border-2 border-accent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Complete Credentialing Support</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our integrated credentialing solutions combine individual provider verification with group 
                  practice enrollment, creating a seamless process that covers all your credentialing needs 
                  under one comprehensive service.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're a solo practitioner joining a group, a multi-specialty clinic adding new 
                  providers, or a healthcare organization managing multiple locations, our unified approach 
                  ensures efficiency, accuracy, and compliance at every step.
                </p>
              </CardContent>
            </Card>

            <h3 className="text-3xl font-bold text-primary mb-8">Integrated Credentialing Workflow</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {combinedFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-6 bg-card rounded-lg border-2 border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1 transition-all duration-300 group-hover:scale-110" />
                  <p className="font-medium">{feature}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <FileCheck className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">Centralized Data Management</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All provider and group documentation managed in a secure, centralized system with 
                    easy access to credentials, certifications, and compliance records.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <Shield className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">Compliance Audits</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Regular audits and monitoring ensure ongoing compliance with payer requirements, 
                    regulatory standards, and accreditation criteria across all providers.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Start Your Credentialing Process Today</h3>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Trusted by U.S. healthcare providers nationwide for comprehensive credentialing solutions
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Start Your Credentialing Now</Link>
                </Button>
                <Button variant="outline_hero" size="lg" asChild>
                  <Link to="/contact">Book Free Credentialing Assessment</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Credentialing;