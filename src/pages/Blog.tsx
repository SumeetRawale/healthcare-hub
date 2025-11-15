import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Healthcare BPO: Trends to Watch in 2025",
      excerpt: "Discover the emerging technologies and practices shaping the healthcare BPO industry.",
      date: "January 15, 2025",
      author: "Dr. Sarah Johnson",
      category: "Industry Trends",
      readTime: "5 min read"
    },
    {
      title: "How to Reduce Medical Billing Errors by 50%",
      excerpt: "Learn proven strategies to minimize billing errors and maximize revenue collection.",
      date: "January 10, 2025",
      author: "Michael Chen",
      category: "Best Practices",
      readTime: "7 min read"
    },
    {
      title: "HIPAA Compliance: Essential Guidelines for Healthcare BPO",
      excerpt: "A comprehensive guide to maintaining HIPAA compliance in outsourced operations.",
      date: "January 5, 2025",
      author: "Lisa Anderson",
      category: "Compliance",
      readTime: "10 min read"
    },
    {
      title: "Improving Patient Satisfaction Through Better Support",
      excerpt: "Strategies to enhance patient experience and build lasting relationships.",
      date: "December 28, 2024",
      author: "David Martinez",
      category: "Patient Care",
      readTime: "6 min read"
    },
    {
      title: "Medical Coding Accuracy: Why It Matters More Than Ever",
      excerpt: "Understanding the impact of coding accuracy on revenue cycle management.",
      date: "December 20, 2024",
      author: "Emily Roberts",
      category: "Medical Coding",
      readTime: "8 min read"
    },
    {
      title: "Telehealth Support: Best Practices for Virtual Care",
      excerpt: "How to deliver exceptional support for telehealth platforms and virtual consultations.",
      date: "December 15, 2024",
      author: "James Wilson",
      category: "Telehealth",
      readTime: "6 min read"
    }
  ];

  const categories = [
    "All Posts", "Industry Trends", "Best Practices", "Compliance", 
    "Patient Care", "Medical Coding", "Telehealth"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Insights, trends, and best practices in healthcare BPO and customer experience
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-secondary/20 sticky top-0 z-40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-accent font-semibold mb-3">
                    <span className="bg-accent/10 px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-muted-foreground">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <Button variant="link" className="p-0 h-auto font-semibold group-hover:text-accent">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl mb-8">
              Subscribe to our newsletter for the latest insights and industry updates
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground"
              />
              <Button size="lg" variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
