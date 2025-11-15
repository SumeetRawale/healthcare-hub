import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Activity, FileText, Stethoscope, Brain, Eye, Smile, 
  ClipboardCheck, DollarSign, FileCheck, Shield, UserCheck,
  Pill, Calendar, Phone, HelpCircle, BarChart
} from "lucide-react";

const healthcareServices = [
  {
    icon: DollarSign,
    title: "Medical Billing",
    description: "Comprehensive medical billing services ensuring accurate claim submission and maximum reimbursement.",
    link: "/services/medical-billing",
    color: "text-blue-600"
  },
  {
    icon: FileText,
    title: "Medical Coding",
    description: "Expert medical coding services with certified coders ensuring compliance and accuracy.",
    link: "/services/medical-coding",
    color: "text-red-600"
  },
  {
    icon: Activity,
    title: "Chiropractic Billing",
    description: "Specialized billing services for chiropractic practices with industry expertise.",
    link: "/services/chiropractic-billing",
    color: "text-purple-600"
  },
  {
    icon: Smile,
    title: "Dental Billing",
    description: "Complete dental billing solutions optimized for dental practice workflows.",
    link: "/services/dental-billing",
    color: "text-orange-600"
  },
  {
    icon: Brain,
    title: "Mental Health Billing",
    description: "Specialized billing services for mental health providers and behavioral health practices.",
    link: "/services/mental-health-billing",
    color: "text-teal-600"
  },
  {
    icon: Eye,
    title: "Optometry Billing",
    description: "Expert billing services tailored for optometry and vision care practices.",
    link: "/services/optometry-billing",
    color: "text-red-600"
  },
  {
    icon: FileCheck,
    title: "CPT Coding",
    description: "Accurate CPT coding services ensuring proper procedure documentation and billing.",
    link: "/services/cpt-coding",
    color: "text-indigo-600"
  },
  {
    icon: ClipboardCheck,
    title: "ICD Coding",
    description: "Precise ICD coding services for accurate diagnosis documentation and compliance.",
    link: "/services/icd-coding",
    color: "text-cyan-600"
  },
  {
    icon: BarChart,
    title: "HCC Coding",
    description: "Risk adjustment and HCC coding services to optimize reimbursement.",
    link: "/services/hcc-coding",
    color: "text-pink-600"
  },
  {
    icon: UserCheck,
    title: "Eligibility Verification",
    description: "Real-time insurance eligibility verification to reduce claim denials.",
    link: "/services/eligibility-verification",
    color: "text-amber-600"
  },
  {
    icon: Shield,
    title: "Prior Authorization",
    description: "Streamlined prior authorization services to expedite patient care.",
    link: "/services/prior-authorization",
    color: "text-lime-600"
  },
  {
    icon: Phone,
    title: "Insurance Follow-up",
    description: "Proactive insurance follow-up to ensure timely claim resolution.",
    link: "/services/insurance-follow-up",
    color: "text-rose-600"
  },
  {
    icon: HelpCircle,
    title: "Denial Management",
    description: "Expert denial management services to recover lost revenue.",
    link: "/services/denial-management",
    color: "text-violet-600"
  },
  {
    icon: DollarSign,
    title: "Payment Posting",
    description: "Accurate payment posting services for streamlined financial operations.",
    link: "/services/payment-posting",
    color: "text-sky-600"
  },
  {
    icon: Stethoscope,
    title: "Provider Credentialing",
    description: "Complete credentialing services for individual and group practices.",
    link: "/services/individual-credentialing",
    color: "text-emerald-600"
  },
  {
    icon: Pill,
    title: "Prescription Authorization",
    description: "Efficient prescription authorization services for faster patient care.",
    link: "/services/prescription-authorization",
    color: "text-fuchsia-600"
  },
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    description: "Professional appointment scheduling to optimize practice efficiency.",
    link: "/services/appointment-scheduling",
    color: "text-slate-600"
  },
  {
    icon: Phone,
    title: "Patient Support",
    description: "Compassionate patient support services to enhance patient satisfaction.",
    link: "/services/patient-support",
    color: "text-stone-600"
  }
];

const HealthcareServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Healthcare Services
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Comprehensive healthcare revenue cycle management and practice support services to optimize your healthcare operations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcareServices.map((service, index) => {
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
      <section className="py-20 contact-page to-accent/90 text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Partner With Healthcare Experts</h2>
            <p className="text-xl mb-8 text-accent-foreground/90">
              Let's discuss how our healthcare services can improve your revenue cycle and patient care.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthcareServicesPage;
