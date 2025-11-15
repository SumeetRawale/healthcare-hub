import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, FileText, Eye, Database, Users } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | The-Connections - HIPAA Compliant Healthcare Service</title>
        <meta name="description" content="The-Connections Privacy Policy. Learn how we protect your personal information and maintain HIPAA compliance in all our healthcare services." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/20 rounded-full mb-6">
                  <Shield className="h-10 w-10 text-accent" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                <p className="text-xl text-primary-foreground/90">
                  Your Privacy is Our Priority - HIPAA Compliant & Secure
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
                  <p className="text-lg text-muted-foreground mb-4">
                    At The-Connections, we are committed to protecting your privacy and maintaining the confidentiality of your personal and health information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information in compliance with HIPAA (Health Insurance Portability and Accountability Act) and other applicable privacy regulations.
                  </p>
                </div>

                {/* Information We Collect */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Database className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Information We Collect</h2>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Personal Information</h3>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
                    <li>Name, email address, phone number, and business contact details</li>
                    <li>Company information and job title</li>
                    <li>IP address, browser type, and device information</li>
                    <li>Website usage data and analytics</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 text-foreground">Protected Health Information (PHI)</h3>
                  <p className="text-muted-foreground mb-3">
                    When providing healthcare services to our clients, we may process PHI on behalf of covered entities. This includes:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground">
                    <li>Patient demographic information</li>
                    <li>Medical records and health information</li>
                    <li>Insurance and billing information</li>
                    <li>Treatment and diagnosis codes (ICD, CPT, HCC)</li>
                  </ul>
                  <div className="bg-accent/10 border-l-4 border-accent p-4 rounded">
                    <p className="text-sm text-foreground">
                      <strong>HIPAA Notice:</strong> All PHI is handled in strict accordance with HIPAA Privacy and Security Rules. We act as a Business Associate and maintain appropriate safeguards.
                    </p>
                  </div>
                </div>

                {/* How We Use Information */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">How We Use Your Information</h2>
                  </div>
                  
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Service Delivery:</strong> To provide medical coding, billing, patient support, and other healthcare services</li>
                    <li><strong>Communication:</strong> To respond to inquiries, send updates, and provide customer support</li>
                    <li><strong>Compliance:</strong> We are compliance with HIPAA regulations and legal obligations.</li>
                    <li><strong>Quality Improvement:</strong> To analyze and improve our service quality and accuracy</li>
                    <li><strong>Security:</strong> To protect against fraud, unauthorized access, and security threats</li>
                    <li><strong>Business Operations:</strong> For billing, audits, and business analytics (de-identified data only)</li>
                  </ul>
                </div>

                {/* HIPAA Compliance */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Lock className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">HIPAA Compliance & Data Security</h2>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    As a healthcare Business Associate, we implement comprehensive safeguards:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-card border border-border rounded-lg p-6">
                      <h3 className="font-semibold text-foreground mb-3">Technical Safeguards</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• AES-256 encryption at rest</li>
                        <li>• TLS/SSL encryption in transit</li>
                        <li>• Multi-factor authentication (MFA)</li>
                        <li>• Secure access controls and audit logs</li>
                        <li>• Regular security testing and monitoring</li>
                      </ul>
                    </div>
                    
                    <div className="bg-card border border-border rounded-lg p-6">
                      <h3 className="font-semibold text-foreground mb-3">Administrative Safeguards</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• HIPAA-trained staff</li>
                        <li>• Business Associate Agreements (BAAs)</li>
                        <li>• Role-based access controls (RBAC)</li>
                        <li>• Incident response procedures</li>
                        <li>• Regular risk assessments</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Data Sharing */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Information Sharing & Disclosure</h2>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">We do NOT sell your personal information. We may share information only in these circumstances:</p>
                  
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>With Your Consent:</strong> When you explicitly authorize disclosure</li>
                    <li><strong>Service Providers:</strong> With vetted vendors under strict confidentiality agreements</li>
                    <li><strong>Legal Requirements:</strong> When required by law, court order, or regulatory authority</li>
                    <li><strong>Business Transfers:</strong> In the event of merger, acquisition, or asset sale (with continued protection)</li>
                    <li><strong>Covered Entities:</strong> PHI shared only with healthcare providers we serve under BAAs</li>
                  </ul>
                </div>
                

                {/* Data Retention */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Data Retention</h2>
                  <p className="text-muted-foreground mb-3">
                    We retain information only as long as necessary for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Fulfilling the purposes outlined in this policy</li>
                    <li>Complying with legal, regulatory, and contractual obligations (typically 6-7 years for healthcare records)</li>
                    <li>Resolving disputes and enforcing agreements</li>
                  </ul>
                </div>

                {/* Cookies */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Cookies & Tracking Technologies</h2>
                  <p className="text-muted-foreground mb-3">
                    Our website uses cookies and similar technologies for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                    <li>Essential functionality (login, session management)</li>
                    <li>Analytics and performance monitoring</li>
                    <li>User preferences and personalization</li>
                  </ul>
                  <p className="text-muted-foreground">
                    You can control cookies through your browser settings. Note that disabling cookies may limit website functionality.
                  </p>
                </div>

                {/* Children's Privacy */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Children&apos;s Privacy</h2>
                  <p className="text-muted-foreground">
                    Our services are not directed to individuals under 18. We do not knowingly collect personal information from children. If you believe we have collected such information, please contact us immediately.
                  </p>
                </div>

                {/* International Users */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">International Data Transfers</h2>
                  <p className="text-muted-foreground">
                    Our operations are based in India, serving U.S. healthcare providers. Data transfers comply with applicable international data protection laws and are secured under Business Associate Agreements and appropriate safeguards.
                  </p>
                </div>

                {/* Changes to Policy */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Changes to This Privacy Policy</h2>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy periodically. Changes will be posted on this page with an updated "Last Updated" date. Continued use of our services constitutes acceptance of the revised policy.
                  </p>
                </div>

                {/* Contact */}
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 text-center">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Questions About Privacy?</h2>
                  <p className="text-muted-foreground mb-6">
                    For privacy inquiries, data access requests, or HIPAA concerns, contact our Privacy Officer:
                  </p>
                  <div className="space-y-2 text-foreground">
                    <p><strong>Email:</strong> <a href="mailto:privacy@the-connections.com" className="text-primary hover:underline">info@the-connections.com</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+917887898196" className="text-primary hover:underline">+91 788-789-8196</a></p>
                    <p><strong>Address:</strong> Privacy Officer, The-Connections, Pune, India</p>
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

export default PrivacyPolicy;
