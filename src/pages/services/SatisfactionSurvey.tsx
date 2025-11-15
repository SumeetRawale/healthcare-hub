import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ClipboardCheck, TrendingUp, BarChart3, MessageCircle, CheckCircle2, FileText } from "lucide-react";
import { Helmet } from "react-helmet";

const SatisfactionSurvey = () => {
  const highlights = [
    {
      icon: ClipboardCheck,
      title: "Customer Satisfaction (CSAT) Surveys",
      description: "Measure satisfaction levels through structured questionnaires"
    },
    {
      icon: MessageCircle,
      title: "Product & Service Feedback Calls",
      description: "Collect detailed feedback through direct customer conversations"
    },
    {
      icon: BarChart3,
      title: "Neutral & Honest Data Collection",
      description: "Ensure unbiased feedback gathering for accurate insights"
    },
    {
      icon: FileText,
      title: "Issue Mapping & Improvement Areas",
      description: "Identify pain points and opportunities for enhancement"
    },
    {
      icon: TrendingUp,
      title: "Monthly Insights for Decision-Making",
      description: "Regular reports with actionable recommendations"
    },
    {
      icon: CheckCircle2,
      title: "Action Point Conversion",
      description: "Transform feedback into clear, executable improvement steps"
    }
  ];

  const services = [
    {
      title: "Survey Design & Execution",
      description: "Custom-designed surveys that capture the right data points for your business needs"
    },
    {
      title: "Multi-Channel Feedback Collection",
      description: "Gather feedback through phone, email, SMS, and digital platforms"
    },
    {
      title: "Data Analysis & Reporting",
      description: "Professional analysis with visual reports and trend identification"
    },
    {
      title: "Continuous Improvement Support",
      description: "Ongoing monitoring and recommendations for service enhancement"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Satisfaction & Feedback Survey Services | Customer Experience Insights</title>
        <meta name="description" content="Professional customer satisfaction surveys and feedback collection. Get honest insights, identify improvement areas, and enhance your service quality with data-driven decisions." />
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse shadow-lg shadow-accent/50"></span>
              <span className="text-sm font-semibold text-white tracking-wide">Customer Insights</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Satisfaction & Feedback Survey
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Understanding your customer's real experience helps you improve service quality every month
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We conduct structured surveys that capture honest feedback, concerns, and expectations directly from users.
              This gives you clear insights to refine processes and deliver a better customer journey.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team ensures every response is collected, analyzed, and converted into simple action points.
            </p>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Highlights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive survey solutions for actionable customer insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {highlights.map((highlight, index) => (
              <Card key={index} className="group hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-6">
                  {/* <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"> */}
                    <highlight.icon className="h-10 w-10 text-accent mb-4 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300" />
                  {/* </div> */}
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Survey Services
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Understand Your Customers Better?
            </h2>
            <p className="text-xl text-white/90">
              Let us help you gather meaningful feedback and turn insights into action
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 hover:scale-105 transition-transform">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SatisfactionSurvey;