import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Headphones, Calculator, Users, Settings, Building2, BarChart3, Database, TrendingUp, ShieldCheck, Clock, Headset } from "lucide-react";

const bpoServices = [
  {
    icon: FileText,
    title: "Data Entry & Processing",
    description: "High-accuracy data entry, document processing, and digital transformation services to streamline your operations.",
    link: "/services/data-management",
    color: "text-blue-600"
  },
  {
    icon: Headphones,
    title: "Customer Support Services",
    description: "24/7 multi-channel customer support with expert agents and advanced CRM integration for superior customer experience.",
    link: "/services/patient-support",
    color: "text-red-600"
  },
  {
    icon: Calculator,
    title: "Finance & Accounting",
    description: "Comprehensive bookkeeping, accounts payable/receivable, payroll processing, and detailed financial reporting.",
    link: "/services/account-receivable",
    color: "text-purple-600"
  },
  {
    icon: Users,
    title: "HR & Recruitment",
    description: "End-to-end talent acquisition, onboarding processes, payroll management, and dedicated employee support services.",
    link: "/services/group-credentialing",
    color: "text-orange-600"
  },
  {
    icon: Settings,
    title: "Technical Support",
    description: "Professional IT helpdesk, software support, and technical troubleshooting services for global businesses.",
    link: "/services/telehealth",
    color: "text-teal-600"
  },
  {
    icon: Building2,
    title: "Back Office Operations",
    description: "Efficient administrative support, document management, and business process automation solutions.",
    link: "/services/business-analysis",
    color: "text-red-600"
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    description: "Data-driven insights, performance metrics, and strategic business intelligence to drive growth.",
    link: "/services/analytics",
    color: "text-indigo-600"
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Secure data storage, management, and optimization services for enterprise-level data handling.",
    link: "/services/data-management",
    color: "text-cyan-600"
  },
  {
    icon: TrendingUp,
    title: "Quality Assurance",
    description: "Comprehensive quality reviews and process optimization to ensure excellence in service delivery.",
    link: "/services/quality-reviews",
    color: "text-pink-600"
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Audits",
    description: "Regulatory compliance monitoring, audit support, and risk management services.",
    link: "/services/claim-audits",
    color: "text-amber-600"
  },
  {
    icon: Clock,
    title: "Appointment Management",
    description: "Professional scheduling, calendar management, and appointment coordination services.",
    link: "/services/appointment-scheduling",
    color: "text-lime-600"
  },
  {
    icon: Headset,
    title: "Virtual Assistant Services",
    description: "Dedicated virtual assistants for administrative tasks, email management, and daily operations.",
    link: "/services/patient-support",
    color: "text-rose-600"
  }
];

const BPOServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Business Process Outsourcing Services
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Comprehensive BPO solutions designed to streamline operations, reduce costs, and accelerate business growth across all industries.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bpoServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-8">
                    <div className={`${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-14 w-14" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground" asChild>
                      <Link to={service.link}>
                        Learn More
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
      <section className="py-20 bg-gradient-to-br from-accent to-accent/90 text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-accent-foreground/90">
              Let's discuss how our BPO services can help you achieve operational excellence.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BPOServicesPage;
