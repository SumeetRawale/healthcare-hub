import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart, TrendingUp, PieChart, LineChart, Target, Zap } from "lucide-react";

const Analytics = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <BarChart className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Healthcare Service</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Healthcare Analytics & Insights</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Transform your healthcare data into actionable insights. Our analytics services help you 
              make informed decisions and optimize operations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Advanced Analytics Solutions</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: TrendingUp,
                  title: "Claims Analytics",
                  description: "Comprehensive claims analysis for faster reimbursements and denial prevention"
                },
                {
                  icon: PieChart,
                  title: "Patient Satisfaction",
                  description: "Detailed patient satisfaction reporting and trend analysis"
                },
                {
                  icon: LineChart,
                  title: "Operational Efficiency",
                  description: "Predictive analytics for improved operational performance"
                },
                {
                  icon: Target,
                  title: "Revenue Optimization",
                  description: "Revenue cycle analytics to identify improvement opportunities"
                },
                {
                  icon: Zap,
                  title: "Real-Time Dashboards",
                  description: "Live dashboards for instant visibility into key metrics"
                },
                {
                  icon: BarChart,
                  title: "Custom Reporting",
                  description: "Tailored reports designed for your specific business needs"
                }
              ].map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group cursor-pointer border-2">
                    <CardContent className="p-8">
                      <Icon className="h-12 w-12 text-accent mb-4 transition-all duration-300 group-hover:scale-110" />
                      <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Make Data-Driven Decisions</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Leverage powerful analytics to transform your healthcare operations
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Schedule a Demo</Link>
            </Button>
            <Button variant="outline_hero" size="lg" asChild>
              <Link to="/what-we-do">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Analytics;
