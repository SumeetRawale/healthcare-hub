import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Let's discuss how we can help transform your healthcare operations
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">Reach the Experts</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <Input type="email" placeholder="john.doe@example.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input type="tel" placeholder="+91 XXXXX XXXXX" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Company Name</label>
                    <Input placeholder="Your Company" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Service Interest</label>
                    <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                      <option>Select a service</option>
                      <option>Medical Coding & Compliance</option>
                      <option>Medical Billing & RCM</option>
                      <option>Patient Support Services</option>
                      <option>Healthcare Data Management</option>
                      <option>Telehealth Services</option>
                      <option>Other BPO Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell us about your requirements..." 
                      rows={5}
                    />
                  </div>

                  <Button variant="hero" size="lg" className="w-full">
                    Submit Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-2 border-accent">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-10 w-10 text-accent flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-2">Phone</h3>
                      <p className="text-sm text-muted-foreground mb-1">For Business Deals:</p>
                      <a href="tel:+917887898196" className="text-base font-semibold text-accent hover:underline">
                        +91 788-789-8196
                      </a>
                      <p className="text-xs text-muted-foreground mt-2">
                        Available Monday - Friday, 9:00 AM - 6:00 PM IST
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-10 w-10 text-accent flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
                      <a href="mailto:info@the-connections.com" className="text-base font-semibold text-accent hover:underline">
                        info@the-connections.com
                      </a>
                      <p className="text-xs text-muted-foreground mt-2">
                        You're our top priority expect to hear from us soon.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-10 w-10 text-accent flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-2">Locations</h3>
                      <div className="space-y-3">
                        <div>
                          <p className="font-semibold text-primary text-sm">Pune Office</p>
                          <p className="text-xs text-muted-foreground">Maharashtra, India</p>
                        </div>
                        <div>
                          <p className="font-semibold text-primary text-sm">Bangalore Office</p>
                          <p className="text-xs text-muted-foreground">Karnataka, India</p>
                        </div>
                        <div>
                          <p className="font-semibold text-primary text-sm">Gujrat Office</p>
                          <p className="text-xs text-muted-foreground">Ahmedabad, India</p>
                        </div>
                        <div>
                          <p className="font-semibold text-primary text-sm">USA Office</p>
                          <p className="text-xs text-muted-foreground">Irvine, USA</p>
                        </div>                        
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-10 w-10 text-accent flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-2">Business Hours</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <div className="flex justify-between text-sm">
                          <span>Sunday - Saturday:</span>
                          <span className="font-semibold">9:30 AM - 6:30 PM</span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        * 24/7 support available for existing clients
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 contact-page text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of healthcare providers who trust us with their operations
          </p>
          <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
            <a href="tel:+917887898196">Call Us Now</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;