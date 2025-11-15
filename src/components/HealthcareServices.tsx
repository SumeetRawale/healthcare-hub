import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, DollarSign, Users, Database, Video, BarChart, ArrowRight } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Medical Coding & Compliance",
    description: "ICD-10, CPT, and HCPCS coding with 99.8% accuracy. Expert CDI and compliance monitoring.",
    link: "/services/medical-coding",
    color: "text-blue-600"
  },
  {
    icon: DollarSign,
    title: "Medical Billing & RCM",
    description: "End-to-end billing, denial management, and AR follow-up for maximum revenue optimization.",
    link: "/services/medical-billing",
    color: "text-red-600"
  },
  {
    icon: Users,
    title: "Patient Support Services",
    description: "24/7 multi-channel support, appointment scheduling, and insurance verification assistance.",
    link: "/services/patient-support",
    color: "text-purple-600"
  },
  {
    icon: Database,
    title: "Healthcare Data Management",
    description: "Secure EHR/EMR data entry, clinical abstraction, and HIPAA-compliant data handling.",
    link: "/services/data-management",
    color: "text-orange-600"
  },
  {
    icon: Video,
    title: "Telehealth & Virtual Assistance",
    description: "Remote patient engagement, virtual front-desk, and real-time telemedicine support.",
    link: "/services/telehealth",
    color: "text-teal-600"
  },
  {
    icon: BarChart,
    title: "Healthcare Analytics",
    description: "Claims analytics, patient satisfaction reporting, and predictive operational insights.",
    link: "/services/analytics",
    color: "text-red-600"
  }
];

const HealthcareServices = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-accent font-semibold mb-2 uppercase tracking-wider">Our Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Optimize your healthcare operations with our specialized services designed to improve efficiency, reduce costs, and enhance patient care.
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
            <Link to="/healthcare-services">View All Healthcare Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HealthcareServices;
