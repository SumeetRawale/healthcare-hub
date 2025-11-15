import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Scale, AlertCircle, CheckCircle, XCircle, Users } from "lucide-react";

const TermsOfUse = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Use | The-Connections - Healthcare Services Agreement</title>
        <meta name="description" content="The-Connections Terms of Use. Review our service terms, HIPAA compliance, and Business Associate Agreement provisions for healthcare BPO services." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/20 rounded-full mb-6">
                  <Scale className="h-10 w-10 text-accent" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Use</h1>
                <p className="text-xl text-primary-foreground/90">
                  Service Agreement & Legal Terms for Healthcare Services
                </p>
                <p className="text-sm text-primary-foreground/70 mt-4">
                  Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                
                {/* Introduction */}
                <div className="mb-12">
                  <div className="bg-accent/10 border-l-4 border-accent p-6 rounded mb-6">
                    <p className="text-foreground">
                      <strong>PLEASE READ THESE TERMS CAREFULLY.</strong> By accessing or using The-Connections website and services, you agree to be bound by these Terms of Use. If you do not agree, please discontinue use immediately.
                    </p>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    These Terms of Use ("Terms") govern your access to and use of The-Connections services, website, and related platforms. These Terms constitute a legally binding agreement between you ("Client," "you") and The-Connections ("we," "us," "our").
                  </p>
                </div>

                {/* Acceptance */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Acceptance of Terms</h2>
                  </div>
                  
                  <p className="text-muted-foreground mb-3">
                    By using our services, you acknowledge that you have read, understood, and agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>These Terms of Use</li>
                    <li>Our Privacy Policy</li>
                    <li>Business Associate Agreement (BAA) provisions for HIPAA-covered services</li>
                    <li>Any service-specific agreements or addendums</li>
                  </ul>
                </div>

                {/* Services */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Services Provided</h2>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    The-Connections provides healthcare services, including but not limited to:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Medical Coding Services</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• ICD-10, CPT, and HCC coding</li>
                        <li>• Code audit and compliance</li>
                      </ul>
                    </div>
                    
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Revenue Cycle Management</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Medical billing and claims</li>
                        <li>• Payment posting and AR management</li>
                      </ul>
                    </div>
                    
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Patient Support</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Appointment scheduling</li>
                        <li>• Eligibility verification</li>
                      </ul>
                    </div>
                    
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Specialized Services</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Credentialing and prior authorization</li>
                        <li>• Telehealth and analytics</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* HIPAA & BAA */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">HIPAA Compliance & Business Associate Agreement</h2>
                  </div>
                  
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-6">
                    <h3 className="font-semibold text-foreground mb-3">Business Associate Relationship</h3>
                    <p className="text-muted-foreground mb-3">
                      The-Connections acts as a <strong>Business Associate</strong> under HIPAA when providing services that involve access to Protected Health Information (PHI). We comply with:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>HIPAA Privacy Rule (45 CFR Part 160 and Subparts A and E of Part 164)</li>
                      <li>HIPAA Security Rule (45 CFR Part 164, Subparts A and C)</li>
                      <li>HIPAA Breach Notification Rule (45 CFR Part 164, Subpart D)</li>
                      <li>HITECH Act provisions</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-foreground">BAA Requirements</h3>
                  <p className="text-muted-foreground mb-3">
                    For all services involving PHI, a separate Business Associate Agreement must be executed. The BAA includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Permitted uses and disclosures of PHI</li>
                    <li>Safeguarding obligations and security measures</li>
                    <li>Breach notification procedures</li>
                    <li>Individual rights and access provisions</li>
                    <li>Termination and data return/destruction requirements</li>
                  </ul>
                </div>

                {/* Client Obligations */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Client Obligations</h2>
                  
                  <p className="text-muted-foreground mb-4">As a client, you agree to:</p>
                  
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Provide Accurate Information</h3>
                        <p className="text-sm text-muted-foreground">Supply complete, accurate, and timely information required for service delivery</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Maintain HIPAA Compliance</h3>
                        <p className="text-sm text-muted-foreground">Ensure you are a covered entity or have appropriate authorization to share PHI</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Payment Terms</h3>
                        <p className="text-sm text-muted-foreground">Pay invoices according to agreed-upon terms (typically Net 30)</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Authorized Use</h3>
                        <p className="text-sm text-muted-foreground">Use our services only for lawful purposes and in compliance with all applicable laws</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Limitations */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                      <XCircle className="h-6 w-6 text-destructive" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Prohibited Uses</h2>
                  </div>
                  
                  <p className="text-muted-foreground mb-3">You may NOT use our services to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Violate any laws, regulations, or third-party rights</li>
                    <li>Transmit malware, viruses, or malicious code</li>
                    <li>Engage in fraudulent billing or coding practices</li>
                    <li>Attempt unauthorized access to our systems</li>
                    <li>Share login credentials or access rights with unauthorized parties</li>
                    <li>Reverse engineer, decompile, or disassemble our software or systems</li>
                  </ul>
                </div>

                {/* Intellectual Property */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Intellectual Property Rights</h2>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Our Content</h3>
                  <p className="text-muted-foreground mb-4">
                    All content, software, processes, and materials provided by The-Connections remain our exclusive property. This includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                    <li>Proprietary coding tools and methodologies</li>
                    <li>Website content, design, and branding</li>
                    <li>Training materials and documentation</li>
                    <li>Reports, templates, and analytics dashboards</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Your Content</h3>
                  <p className="text-muted-foreground">
                    You retain ownership of all data and PHI you provide. We process this information solely as your Business Associate and per your instructions. Upon termination, we will return or destroy your data as required by our BAA.
                  </p>
                </div>

                {/* Confidentiality */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Confidentiality</h2>
                  <p className="text-muted-foreground mb-4">
                    Both parties agree to maintain the confidentiality of all proprietary and sensitive information exchanged during the business relationship, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Protected Health Information (PHI) and patient records</li>
                    <li>Business strategies, pricing, and financial information</li>
                    <li>Proprietary systems, processes, and methodologies</li>
                    <li>Any information marked as confidential</li>
                  </ul>
                </div>

                {/* Liability */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Limitation of Liability</h2>
                  
                  <div className="bg-card border-2 border-border rounded-lg p-6 mb-4">
                    <p className="text-muted-foreground mb-3">
                      <strong className="text-foreground">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Services are provided "AS IS" and "AS AVAILABLE"</li>
                      <li>We make no warranties, express or implied, regarding service availability or results</li>
                      <li>Our total liability shall not exceed the amount paid by you for services in the 12 months preceding the claim</li>
                      <li>We are not liable for indirect, incidental, consequential, or punitive damages</li>
                    </ul>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Service Accuracy</h3>
                  <p className="text-muted-foreground">
                    While we strive for 99.8% coding accuracy, final responsibility for claim accuracy rests with the healthcare provider. We recommend quality reviews and audits as part of your compliance program.
                  </p>
                </div>

                {/* Indemnification */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Indemnification</h2>
                  <p className="text-muted-foreground">
                    You agree to indemnify and hold harmless The-Connections from any claims, damages, or expenses arising from:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Your violation of these Terms</li>
                    <li>Your violation of applicable laws or regulations</li>
                    <li>Inaccurate or incomplete information you provide</li>
                    <li>Unauthorized use of our services by your employees or agents</li>
                  </ul>
                </div>

                {/* Termination */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Termination</h2>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground">By Either Party</h3>
                  <p className="text-muted-foreground mb-4">
                    Either party may terminate services with 30 days written notice, unless otherwise specified in your service agreement.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Immediate Termination</h3>
                  <p className="text-muted-foreground mb-4">
                    We may immediately terminate or suspend services if:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                    <li>You breach these Terms or the BAA</li>
                    <li>Payment is more than 60 days overdue</li>
                    <li>You engage in fraudulent or illegal activities</li>
                    <li>Required to do so by law or regulatory authority</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Effect of Termination</h3>
                  <p className="text-muted-foreground">
                    Upon termination, we will return or securely destroy all PHI as required by the BAA and HIPAA. Outstanding invoices remain due and payable.
                  </p>
                </div>

                {/* Disclaimers */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center">
                      <AlertCircle className="h-6 w-6 text-amber-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Important Disclaimers</h2>
                  </div>
                  
                  <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 space-y-3">
                    <p className="text-foreground"><strong>Not Medical Advice:</strong></p>
                    <p className="text-sm text-muted-foreground">
                      The-Connections provides administrative support services only. We do not provide medical advice, diagnosis, or treatment recommendations. All clinical decisions remain the sole responsibility of licensed healthcare providers.
                    </p>
                    
                    <p className="text-foreground"><strong>Not Legal or Tax Advice:</strong></p>
                    <p className="text-sm text-muted-foreground">
                      Our services do not constitute legal, tax, or compliance advice. Consult with qualified professionals for such guidance.
                    </p>
                  </div>
                </div>

                {/* Governing Law */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Governing Law & Dispute Resolution</h2>
                  
                  <p className="text-muted-foreground mb-4">
                    These Terms are governed by the laws of India and the United States (for U.S.-based clients), without regard to conflict of law principles.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Dispute Resolution</h3>
                  <p className="text-muted-foreground mb-3">
                    In the event of a dispute:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Negotiation:</strong> Parties will attempt good-faith negotiation for 30 days</li>
                    <li><strong>Mediation:</strong> If unresolved, disputes will be submitted to mediation</li>
                    <li><strong>Arbitration/Litigation:</strong> Any remaining disputes will be resolved through binding arbitration or courts of competent jurisdiction</li>
                  </ol>
                </div>

                {/* Changes to Terms */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Changes to These Terms</h2>
                  <p className="text-muted-foreground">
                    We reserve the right to modify these Terms at any time. Material changes will be communicated via email or website notice. Continued use of services after changes constitutes acceptance of the revised Terms.
                  </p>
                </div>

                {/* Miscellaneous */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Miscellaneous</h2>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Entire Agreement:</strong> These Terms, together with the BAA and any service agreements, constitute the entire agreement between the parties.
                    </p>
                    <p>
                      <strong className="text-foreground">Severability:</strong> If any provision is found unenforceable, the remaining provisions remain in full effect.
                    </p>
                    <p>
                      <strong className="text-foreground">Waiver:</strong> Failure to enforce any right does not constitute a waiver of that right.
                    </p>
                    <p>
                      <strong className="text-foreground">Assignment:</strong> You may not assign these Terms without our written consent. We may assign to affiliates or in connection with a merger or acquisition.
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 text-center">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Questions About These Terms?</h2>
                  <p className="text-muted-foreground mb-6">
                    For questions about these Terms of Use or to request a Business Associate Agreement, contact us:
                  </p>
                  <div className="space-y-2 text-foreground">
                    <p><strong>Email:</strong> <a href="mailto:legal@the-connections.com" className="text-primary hover:underline">info@the-connections.com</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+917887898196" className="text-primary hover:underline">+91 788-789-8196</a></p>
                    <p><strong>Address:</strong> Legal Department, The-Connections, Pune, India</p>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TermsOfUse;
