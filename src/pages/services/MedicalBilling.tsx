import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { 
  DollarSign, CheckCircle, TrendingUp, Clock, Shield, Target,
  Calendar, ClipboardCheck, FileText, FileSearch, Send, CreditCard,
  Award, Phone, XCircle, BarChart3, Briefcase, FileCheck, Pill
} from "lucide-react";
import { useEffect } from "react";
import heroImage from "@/assets/hero-healthcare-2.jpg";

const MedicalBilling = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  const services = [
    { id: "appointment-scheduling", icon: Calendar, title: "Patient Appointment Scheduling", desc: "Seamless coordination between patients and providers through efficient, real-time scheduling." },
    { id: "eligibility-verification", icon: ClipboardCheck, title: "Eligibility Verification", desc: "Verify patient insurance eligibility and benefits before each visit to ensure accurate billing." },
    { id: "charge-capturing", icon: FileText, title: "Charge Capturing & Entry", desc: "Accurately record all billable procedures and patient encounters with correct coding." },
    { id: "claim-audits", icon: FileSearch, title: "Claim Audits", desc: "Detailed claim audits to ensure billing accuracy, compliance, and error-free submissions." },
    { id: "claim-submission", icon: Send, title: "Claim Submission & Rejections", desc: "Streamlined claim submission process ensuring every claim is clean and compliant." },
    { id: "payment-posting", icon: CreditCard, title: "Payment Posting", desc: "Accurate posting of insurance and patient payments into your practice management system." },
    { id: "quality-reviews", icon: Award, title: "Quality Reviews", desc: "Regular quality reviews to maintain accuracy and compliance across all revenue cycle stages." },
    { id: "insurance-followup", icon: Phone, title: "Insurance Follow-Up", desc: "Timely communication with payers for all pending claims to secure faster reimbursements." },
    { id: "denial-management", icon: XCircle, title: "Denial Management", desc: "Identify root causes, correct claims, and resubmit promptly to recover revenue." },
    { id: "business-analysis", icon: BarChart3, title: "Business Analysis & Quality Reporting", desc: "Deep insights into your revenue cycle performance with customized reports and KPIs." },
    { id: "account-receivable", icon: Briefcase, title: "Account Receivable (AR)", desc: "Efficient AR management to ensure timely reimbursements and reduced outstanding balances." },
    { id: "prior-authorization", icon: FileCheck, title: "Prior Authorization", desc: "Secure timely approvals for procedures, imaging, and medications without delays." },
    { id: "prescription-authorization", icon: Pill, title: "Prescription Prior Authorization", desc: "Coordinate with providers and payers to obtain medication approvals promptly." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Medical Billing Services | Revenue Cycle Management | The Connections Healthcare Services</title>
        <meta name="description" content="Comprehensive medical billing and revenue cycle management services. From patient scheduling to denial management, we optimize your healthcare revenue cycle." />
        <meta name="keywords" content="medical billing services, revenue cycle management, patient scheduling, insurance verification, claim submission, denial management, healthcare RCM" />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6 text-primary-foreground/80">
              <Link to="/" className="hover:text-accent">Home</Link> &gt; 
              <Link to="/healthcare-services" className="hover:text-accent"> Healthcare Services</Link> &gt; 
              <span className="text-primary-foreground"> Medical Billing & RCM</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Complete RCM Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Medical Billing & Revenue Cycle Management</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              End-to-end revenue cycle management services that maximize reimbursements, reduce denials, and optimize your healthcare practice's financial performance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-4 text-center">Our Medical Billing Services</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Comprehensive revenue cycle management covering every step from patient scheduling to payment posting
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card 
                    key={service.id} 
                    className="border-2 border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all group cursor-pointer opacity-0 animate-fade-up" 
                    style={{ animationDelay: `${index * 60}ms` }}
                    onClick={() => {
                      const element = document.getElementById(service.id);
                      if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                  >
                    <CardContent className="p-6">
                      <Icon className="h-12 w-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Sections */}
      
      {/* 1. Patient Appointment Scheduling */}
      <section id="appointment-scheduling" className="py-20 bg-secondary/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Calendar className="h-10 w-10 text-accent" />
              <h2 className="text-4xl font-bold text-primary">Patient Appointment Scheduling</h2>
            </div>
            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our Patient Appointment Scheduling service ensures seamless coordination between patients and providers through efficient, real-time scheduling. We handle appointment confirmations, reminders, cancellations, and rescheduling to reduce no-shows and optimize provider time.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Real-time EMR integration</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Automated reminders</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">No-show reduction</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Patient satisfaction focus</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 2. Eligibility Verification */}
      <section id="eligibility-verification" className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <ClipboardCheck className="h-10 w-10 text-accent" />
              <h2 className="text-4xl font-bold text-primary">Eligibility Verification</h2>
            </div>
            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We verify patient insurance eligibility and benefits before each visit to ensure accurate billing and minimize claim denials. Our specialists check active coverage, copay, deductible, and authorization requirements using payer portals and EDI transactions.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Pre-visit verification</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Real-time payer portal checks</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Coverage & benefits validation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Reduced claim denials</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. Charge Capturing & Entry */}
      <section id="charge-capturing" className="py-20 bg-secondary/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <FileText className="h-10 w-10 text-accent" />
              <h2 className="text-4xl font-bold text-primary">Charge Capturing & Entry</h2>
            </div>
            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our Charge Capture & Entry services accurately record all billable procedures and patient encounters. We ensure correct coding, CPT, and modifier usage, reducing revenue leakage and compliance risks. Every charge is reviewed for accuracy before submission.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Accurate CPT code assignment</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Modifier compliance</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Revenue leakage prevention</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Pre-submission QA review</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Claim Audits */}
      <section id="claim-audits" className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <FileSearch className="h-10 w-10 text-accent" />
              <h2 className="text-4xl font-bold text-primary">Claim Audits</h2>
            </div>
            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We conduct detailed Claim Audits to ensure billing accuracy, compliance, and error-free claim submissions. Our audit team identifies coding errors, missing information, and inconsistencies to prevent rejections or denials.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Pre-submission audits</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Coding accuracy validation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Compliance verification</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">95%+ clean claim rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. Claim Submission & Rejections */}
      <section id="claim-submission" className="py-20 bg-secondary/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Send className="h-10 w-10 text-accent" />
              <h2 className="text-4xl font-bold text-primary">Claim Submission & Rejections</h2>
            </div>
            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We streamline the entire Claim Submission process, ensuring that every claim is clean, compliant, and transmitted to the payer on time. Our rejection management team identifies and corrects errors instantly, improving first-pass resolution rates.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Electronic claim submission</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Instant rejection resolution</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">First-pass resolution focus</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Accelerated reimbursements</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. Payment Posting */}
      <section id="payment-posting" className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <CreditCard className="h-10 w-10 text-accent" />
              <h2 className="text-4xl font-bold text-primary">Payment Posting</h2>
            </div>
            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our Payment Posting service ensures accurate posting of insurance and patient payments into your practice management system. We reconcile EOBs, ERAs, and manual payments to maintain clear account visibility and financial accuracy.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">EOB/ERA reconciliation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Accurate payment allocation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Real-time posting</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Financial transparency</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 7. Quality Reviews */}
      <section id="quality-reviews" className="py-20 bg-secondary/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Award className="h-10 w-10 text-accent" />
              <h2 className="text-4xl font-bold text-primary">Quality Reviews</h2>
            </div>
            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We perform regular Quality Reviews to maintain accuracy and compliance across all revenue cycle stages. Our QA specialists review claims, payments, and denials to identify process gaps and training needs, ensuring top-tier performance.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Multi-level QA audits</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Process optimization</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Compliance monitoring</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Continuous improvement</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 8. Insurance Follow-Up */}
      <section id="insurance-followup" className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Phone className="h-10 w-10 text-accent" />
              <h2 className="text-4xl font-bold text-primary">Insurance Follow-Up</h2>
            </div>
            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our Insurance Follow-Up service ensures timely communication with payers for all pending claims. We track aging reports, identify delays, and resolve issues promptly to secure faster reimbursements and improve cash flow.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Proactive payer communication</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">AR aging management</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Faster reimbursements</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Improved cash flow</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 9. Denial Management */}
      <section id="denial-management" className="py-20 bg-secondary/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <XCircle className="h-10 w-10 text-accent" />
              <h2 className="text-4xl font-bold text-primary">Denial Management</h2>
            </div>
            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We specialize in Denial Management by identifying root causes, correcting claims, and resubmitting them promptly. Our team categorizes denials, analyzes patterns, and builds strategies to minimize future denials.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Root cause analysis</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Appeal & resubmission</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Pattern identification</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Revenue recovery</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 10. Business Analysis & Quality Reporting */}
      <section id="business-analysis" className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <BarChart3 className="h-10 w-10 text-accent" />
              <h2 className="text-4xl font-bold text-primary">Business Analysis & Quality Reporting</h2>
            </div>
            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our Business Analysis and Quality Reporting service offers deep insights into your revenue cycle performance. We create customized reports highlighting KPIs, trends, and improvement areas, empowering informed decision-making.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Custom KPI dashboards</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Trend analysis</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Performance insights</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Data-driven decisions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 11. Account Receivable (AR) */}
      <section id="account-receivable" className="py-20 bg-secondary/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Briefcase className="h-10 w-10 text-accent" />
              <h2 className="text-4xl font-bold text-primary">Account Receivable (AR)</h2>
            </div>
            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We manage your Account Receivables efficiently to ensure timely reimbursements and reduced outstanding balances. Our AR specialists monitor claim status, follow up with payers, and maintain aging reports for better cash flow.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">AR aging analysis</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Claim status monitoring</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Reduced AR days</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Enhanced cash flow</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 12. Prior Authorization */}
      <section id="prior-authorization" className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <FileCheck className="h-10 w-10 text-accent" />
              <h2 className="text-4xl font-bold text-primary">Prior Authorization</h2>
            </div>
            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our Prior Authorization team secures timely approvals for procedures, imaging, and medications, ensuring patient care isn't delayed. We handle payer communication, documentation, and status tracking to streamline approval workflows.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Expedited approvals</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Payer coordination</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Documentation management</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Reduced administrative burden</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 13. Prescription Prior Authorization */}
      <section id="prescription-authorization" className="py-20 bg-secondary/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Pill className="h-10 w-10 text-accent" />
              <h2 className="text-4xl font-bold text-primary">Prescription Prior Authorization</h2>
            </div>
            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We assist in Prescription Prior Authorizations to ensure patients receive timely medications without delays. Our team coordinates with providers and payers to obtain approvals, manage documentation, and handle follow-ups.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Medication approvals</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Provider coordination</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Timely patient care</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm">Improved compliance</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Transform Your Revenue Cycle Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Partner with The Connections Healthcare Services for comprehensive medical billing solutions that maximize your revenue and minimize administrative burden.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button variant="outline_hero" size="lg" asChild>
              <Link to="/services/medical-coding">Explore Medical Coding</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MedicalBilling;
