import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart3, Users, TrendingUp, Target, Lightbulb, CheckCircle } from "lucide-react";

const MarketSurvey = () => {
  const highlights = [
    "Customer feedback collection",
    "Market trend understanding",
    "Product satisfaction surveys",
    "Competition inputs",
    "Insight-based recommendations"
  ];

  const benefits = [
    { icon: Users, title: "Real Customer Feedback", description: "Direct insights from your target audience" },
    { icon: BarChart3, title: "Market Intelligence", description: "Understand trends and patterns" },
    { icon: Target, title: "Product Satisfaction", description: "Measure customer satisfaction levels" },
    { icon: TrendingUp, title: "Competition Analysis", description: "Stay ahead with competitive insights" },
    { icon: Lightbulb, title: "Actionable Insights", description: "Data-driven recommendations" },
    { icon: CheckCircle, title: "Better Decisions", description: "Make informed strategic choices" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Market Intelligence</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Market Survey & Analysis</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              We connect with your customers to understand real feedback and expectations. This helps you 
              make the right decisions without depending on assumptions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="border-2 border-accent mb-12">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Clear Market Insights</h3>
                <p className="text-lg text-muted-foreground">
                  You get clear insights about the market, product and customer behavior. Our surveys give 
                  you practical data for planning and improvement.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Key Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <Card key={index} className="group hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-2 transition-all duration-300">
                  <CardContent className="p-6">
                    <benefit.icon className="h-10 w-10 text-accent mb-4 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300" />
                    <h4 className="text-xl font-bold text-primary mb-2">{benefit.title}</h4>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Get Market Insights Today</h2>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MarketSurvey;
