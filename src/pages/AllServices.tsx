import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  FileText, DollarSign, Users, Database, Video, BarChart,
  Headphones, Calculator, Settings, Building2, Shield, Calendar,
  ClipboardCheck, Activity, TrendingUp, FileCheck, UserCheck, Phone
} from "lucide-react";

const AllServices = () => {
  const healthcareServices = [
    {
      icon: FileText,
      title: "Medical Coding & Compliance",
      description: "ICD-10, CPT, and HCPCS coding with 99.8% accuracy. Expert CDI and compliance monitoring.",
      link: "/services/medical-coding"
    },
    {
      icon: DollarSign,
      title: "Medical Billing & RCM",
      description: "End-to-end billing, denial management, and AR follow-up for maximum revenue optimization.",
      link: "/services/medical-billing"
    },
    {
      icon: Users,
      title: "Patient Support Services",
      description: "24/7 multi-channel support, appointment scheduling, and insurance verification assistance.",
      link: "/services/patient-support"
    },
    {
      icon: Database,
      title: "Healthcare Data Management",
      description: "Secure EHR/EMR data entry, clinical abstraction, and HIPAA-compliant data handling.",
      link: "/services/data-management"
    },
    {
      icon: Video,
      title: "Telehealth & Virtual Assistance",
      description: "Remote patient engagement, virtual front-desk, and real-time telemedicine support.",
      link: "/services/telehealth"
    },
    {
      icon: BarChart,
      title: "Healthcare Analytics",
      description: "Claims analytics, patient satisfaction reporting, and predictive operational insights.",
      link: "/services/analytics"
    },
    {
      icon: Shield,
      title: "Eligibility Verification",
      description: "Real-time insurance verification and benefits validation services.",
      link: "/services/eligibility-verification"
    },
    {
      icon: Calendar,
      title: "Appointment Scheduling",
      description: "Efficient scheduling, reminders, and patient coordination services.",
      link: "/services/appointment-scheduling"
    },
    {
      icon: ClipboardCheck,
      title: "Prior Authorization",
      description: "Streamlined prior authorization and prescription authorization services.",
      link: "/services/prior-authorization"
    },
    {
      icon: Activity,
      title: "Provider Credentialing",
      description: "Individual and group credentialing services for healthcare providers.",
      link: "/services/individual-credentialing"
    }
  ];

  const bpoServices = [
    {
      icon: FileText,
      title: "Data Entry & Processing",
      description: "High-accuracy data entry, document processing, and digital transformation services.",
      link: "/services/data-management"
    },
    {
      icon: Headphones,
      title: "Customer Support Services",
      description: "24/7 multi-channel customer support with expert agents and advanced CRM integration.",
      link: "/services/patient-support"
    },
    {
      icon: Calculator,
      title: "Finance & Accounting",
      description: "Bookkeeping, accounts payable/receivable, payroll processing, and financial reporting.",
      link: "/services/account-receivable"
    },
    {
      icon: Users,
      title: "HR & Recruitment",
      description: "Talent acquisition, onboarding, payroll management, and employee support services.",
      link: "/services/group-credentialing"
    },
    {
      icon: Settings,
      title: "Technical Support",
      description: "IT helpdesk, software support, and technical troubleshooting for global businesses.",
      link: "/services/telehealth"
    },
    {
      icon: Building2,
      title: "Back Office Operations",
      description: "Administrative support, document management, and business process automation.",
      link: "/services/business-analysis"
    },
    {
      icon: TrendingUp,
      title: "Business Analysis",
      description: "Process optimization, performance analytics, and strategic business insights.",
      link: "/services/business-analysis"
    },
    {
      icon: FileCheck,
      title: "Quality Assurance",
      description: "Comprehensive quality reviews and process improvement services.",
      link: "/services/quality-reviews"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLjktMiAyLTJzMiAuOSAyIDItLjkgMi0yIDItMi0uOS0yLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">All Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Comprehensive healthcare and BPO solutions designed to transform your operations and drive growth
          </p>
        </div>
      </section>

      {/* Healthcare Services */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold mb-2 uppercase tracking-wider">Our Expertise</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Healthcare Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Specialized healthcare BPO services to optimize operations and improve patient care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcareServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent"
                >
                  <CardContent className="p-6">
                    <Icon className="h-12 w-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <Button variant="link" className="p-0 h-auto font-semibold group-hover:text-accent" asChild>
                      <Link to={service.link}>
                        Learn More →
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* BPO Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold mb-2 uppercase tracking-wider">Complete Solutions</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Business Process Outsourcing Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Comprehensive BPO services to streamline processes and drive business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bpoServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent"
                >
                  <CardContent className="p-6">
                    <Icon className="h-12 w-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <Button variant="link" className="p-0 h-auto font-semibold group-hover:text-accent" asChild>
                      <Link to={service.link}>
                        Learn More →
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Contact us today to discuss how our services can help your business grow
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button variant="outline_hero" size="lg" asChild>
              <Link to="/what-we-do">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllServices;