import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Headphones, Calculator, Users, Settings, Building2, ArrowRight } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Data Entry & Processing",
    description: "High-accuracy data entry, document processing, and digital transformation services.",
    link: "/services/data-management",
    color: "text-blue-600"
  },
  {
    icon: Headphones,
    title: "Customer Support Services",
    description: "24/7 multi-channel customer support with expert agents and advanced CRM integration.",
    link: "/services/patient-support",
    color: "text-red-600"
  },
  {
    icon: Calculator,
    title: "Finance & Accounting",
    description: "Bookkeeping, accounts payable/receivable, payroll processing, and financial reporting.",
    link: "/services/account-receivable",
    color: "text-purple-600"
  },
  {
    icon: Users,
    title: "HR & Recruitment",
    description: "Talent acquisition, onboarding, payroll management, and employee support services.",
    link: "/services/group-credentialing",
    color: "text-orange-600"
  },
  {
    icon: Settings,
    title: "Technical Support",
    description: "IT helpdesk, software support, and technical troubleshooting for global businesses.",
    link: "/services/telehealth",
    color: "text-teal-600"
  },
  {
    icon: Building2,
    title: "Back Office Operations",
    description: "Administrative support, document management, and business process automation.",
    link: "/services/business-analysis",
    color: "text-red-600"
  }
];

const BPOServices = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-accent font-semibold mb-2 uppercase tracking-wider">Complete BPO Solutions</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Business Process Outsourcing Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Scale your operations with our comprehensive BPO services designed to streamline processes, reduce costs, and drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className={`${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Button variant="link" className="p-0 h-auto font-semibold group-hover:text-accent" asChild>
                    <Link to={service.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <Link to="/bpo-services">View All BPO Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BPOServices;