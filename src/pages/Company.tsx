import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Award, Users, MapPin, TrendingUp } from "lucide-react";

const Company = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service delivery, maintaining the highest standards of quality."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We believe in building long-term partnerships with our clients, working together toward shared success."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Honesty, transparency, and ethical practices are at the core of everything we do."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We continuously innovate and adopt new technologies to provide cutting-edge solutions."
    }
  ];

  const milestones = [
    { year: "2011", event: "The-Connections founded in Pune" },
    { year: "2012", event: "Expanded operations to Bangalore" },
    { year: "2015", event: "Achieved HIPAA compliance certification" },
    { year: "2018", event: "Crossed 500+ satisfied clients milestone" },
    { year: "2020", event: "Launched advanced AI-powered solutions" },
    { year: "2023", event: "Recognized as Top Healthcare Service Provider" },
    { year: "2025", event: "Serving 1000+ healthcare providers globally" }
  ];

  const team = [
    {
      name: "Leadership Team",
      description: "Experienced executives with decades of combined expertise in healthcare and BPO industries"
    },
    {
      name: "Medical Coding Experts",
      description: "Certified professionals with deep knowledge of ICD-10, CPT, and HCPCS coding systems"
    },
    {
      name: "Technology Specialists",
      description: "Skilled engineers developing innovative solutions for healthcare operations"
    },
    {
      name: "Customer Support Team",
      description: "Dedicated professionals providing 24/7 exceptional service to our clients"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About The-Connections</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Quality & Value Delivered, Together - Your trusted partner in healthcare excellence since 2008
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Founded in 2008, The-Connections emerged from a simple yet powerful vision: to transform healthcare 
                operations through exceptional BPO services. What started as a small team in Pune has grown into a 
                leading healthcare service provider with operations spanning across India's top IT hubs.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Over the years, we've built our reputation on unwavering commitment to quality, innovation, and 
                client success. Our journey has been marked by continuous learning, adaptation, and growth, always 
                staying ahead of industry trends and technological advancements.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we proudly serve over 1000 healthcare providers globally, delivering comprehensive solutions 
                that drive efficiency, reduce costs, and improve patient outcomes. Our success is measured by the 
                success of our clients, and we remain dedicated to being their trusted partner in excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <Target className="h-16 w-16 text-accent mb-6" />
                <h3 className="text-3xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower healthcare providers with world-class BPO services that optimize operations, 
                  reduce costs, and enhance patient care. We are committed to delivering excellence through 
                  innovation, expertise, and unwavering dedication to our clients' success.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <Eye className="h-16 w-16 text-accent mb-6" />
                <h3 className="text-3xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the global leader in healthcare services, recognized for our exceptional quality, 
                  innovative solutions, and transformative impact on healthcare operations worldwide. We envision 
                  a future where every healthcare provider has access to best-in-class support services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide our actions and define who we are
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <Icon className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Journey</h2>
            <p className="text-muted-foreground text-lg">Key milestones in our growth story</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start group">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-2xl font-bold text-accent">{milestone.year}</span>
                  </div>
                  <div className="flex-shrink-0 mt-2">
                    <div className="h-4 w-4 rounded-full bg-accent group-hover:scale-125 transition-transform" />
                  </div>
                  <div className="flex-1 pb-8 border-l-2 border-accent/20 pl-6 -ml-2">
                    <p className="text-lg text-foreground font-medium">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {team.map((group, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <Users className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-3">{group.name}</h3>
                  <p className="text-muted-foreground">{group.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <MapPin className="h-16 w-16 mx-auto mb-6 text-accent" />
            <h2 className="text-4xl font-bold mb-6">We Are Based in Pune, Bangalore & Gujrat</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Strategic presence in India's leading technology hubs enables us to leverage top talent 
              and provide exceptional service across time zones.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Visit Our Offices</Link>
              </Button>
              <Button variant="outline_hero" size="lg" asChild>
                <Link to="/careers">Join Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Company;
