import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Shield, Users, TrendingUp, Clock, Globe, Zap, Heart, Target, CheckCircle } from "lucide-react";

const WhyUs = () => {
  const advantages = [
    {
      icon: Award,
      title: "13+ Years of Excellence",
      description:
        "Over a decade and a half of proven expertise in delivering exceptional BPO services across industries.",
    },
    {
      icon: Shield,
      title: "99.8% Accuracy Rate",
      description:
        "Industry-leading accuracy in medical coding, billing, and data management ensures minimal errors and maximum efficiency.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly trained professionals with deep domain knowledge and continuous skill development programs.",
    },
    {
      icon: TrendingUp,
      title: "40% Revenue Improvement",
      description:
        "Our clients experience significant revenue cycle improvements through optimized processes and denial management.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Round-the-clock availability ensures your operations never stop and your customers are always supported.",
    },
    {
      icon: Globe,
      title: "Strategic Locations",
      description: "Operations in Pune and Bangalore provide timezone advantages and access to top talent pools.",
    },
    {
      icon: Zap,
      title: "Advanced Technology",
      description: "Cutting-edge tools, AI-powered solutions, and automated workflows for maximum efficiency.",
    },
    {
      icon: Heart,
      title: "HIPAA Compliance",
      description: "Stringent data security measures and full HIPAA compliance for healthcare operations.",
    },
    {
      icon: Target,
      title: "Customized Solutions",
      description: "Tailored services designed to meet your specific business needs and goals.",
    },
  ];

  const benefits = [
    "Reduce operating costs by up to 50%",
    "Improve claim acceptance rates",
    "Faster reimbursement cycles",
    "Enhanced patient satisfaction",
    "Scalable solutions that grow with you",
    "Dedicated account management",
    "Transparent reporting and analytics",
    "Risk-free trial periods available",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Why Choose The-Connections?</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Partner with a trusted leader in healthcare services and experience the difference that expertise,
            technology, and dedication can make
          </p>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Competitive Advantages</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              What sets us apart in the healthcare industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <Icon className="h-16 w-16 text-accent mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-primary mb-4">{advantage.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-6">Benefits You'll Experience</h2>
              <p className="text-muted-foreground text-lg">Real, measurable results that impact your bottom line</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-card rounded-lg hover:shadow-md transition-shadow"
                >
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-lg font-medium text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-accent">
              <CardContent className="p-12 text-center">
                <h2 className="text-4xl font-bold text-primary mb-6">Quality & Value Delivered, Together</h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Our commitment goes beyond just providing services. We become an extension of your team, working
                  tirelessly to ensure your success. With rigorous quality controls, continuous improvement processes,
                  and a genuine dedication to your goals, we deliver exceptional value at every touchpoint.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact">Partner With Us</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/what-we-do">Explore Our Services</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Trusted by Industry Leaders</h2>
            <p className="text-muted-foreground text-lg">
              Join hundreds of satisfied clients who have transformed their operations with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              "Reduced billing errors by 65% in the first quarter",
              "Improved patient satisfaction scores by 45%",
              "Achieved 99.2% clean claim rate consistently",
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="text-4xl text-accent mb-4">"</div>
                  <p className="text-lg text-muted-foreground italic">{testimonial}</p>
                  <div className="mt-6 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent">
                        ★
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 contact-page to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Let's discuss how we can help transform your healthcare operations
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyUs;
