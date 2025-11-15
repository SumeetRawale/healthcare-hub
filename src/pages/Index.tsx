import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import HealthcareServices from "@/components/HealthcareServices";
import BPOServices from "@/components/BPOServices";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, TrendingUp, Shield, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Slider */}
      <HeroSlider />

      {/* Stats Section */}
      <section id="stats" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Award, label: "Industry Experience", value: "13+ Years" },
              { icon: TrendingUp, label: "Revenue Improvement", value: "70%" },
              { icon: Shield, label: "Coding Accuracy", value: "99.8%" },
              { icon: Clock, label: "Support Available", value: "24/7" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <Icon className="h-10 w-10 mx-auto mb-3 text-accent" />
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Healthcare Services Section */}
      <HealthcareServices />

      {/* BPO Services Section */}
      <BPOServices />

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">WE ARE BASED IN PUNE, BANGALORE & AHMEDABAD</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              With a strong presence in India's leading IT hubs, we deliver world-class healthcare services that combine
              technology, expertise, and dedication to excellence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/company">About Our Company</Link>
              </Button>
              <Button variant="outline_hero" size="lg" asChild>
                <Link to="/contact">Let's Connect</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Preview */}
      <section id="why-choose-us" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Why Choose The-Connections?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We deliver exceptional value through our proven expertise and commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Proven Track Record",
                description: "13+ years of experience serving healthcare providers with exceptional results",
              },
              {
                title: "Advanced Technology",
                description: "Cutting-edge tools and platforms for seamless healthcare operations",
              },
              {
                title: "Expert Team",
                description: "Highly trained professionals with deep healthcare industry knowledge",
              },
            ].map((reason, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-primary mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/why-us">Discover More Advantages</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
