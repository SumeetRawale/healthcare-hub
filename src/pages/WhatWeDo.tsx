import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Headphones, MessageSquare, TrendingUp, Shield, Users
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import phoneIcon from "@/assets/icons/phone-colorful.png";
import smsIcon from "@/assets/icons/sms-colorful.png";
import chatIcon from "@/assets/icons/chat-colorful.png";
import whatsappIcon from "@/assets/icons/whatsapp-colorful.png";
import emailIcon from "@/assets/icons/email-colorful.png";
import chatbotIcon from "@/assets/icons/chatbot-colorful.png";
import omnichannelSlide1 from "@/assets/omnichannel-slide-1.jpg";
import omnichannelSlide2 from "@/assets/omnichannel-slide-2.jpg";
import omnichannelSlide3 from "@/assets/omnichannel-slide-3.jpg";

const WhatWeDo = () => {
  const services = [
    {
      icon: Headphones,
      title: "Client Strategies & Consulting",
      description: "Design your Customer Engagement Strategy with expert consultation and proven methodologies.",
      features: ["Customer Journey Mapping", "Client Process Optimization", "Quality Assurance", "Performance Analytics"],
      link: "/services/client-strategies"
    },
    {
      icon: MessageSquare,
      title: "Customer Care",
      description: "Deliver exceptional Client 24/7 with our comprehensive customer care services.",
      features: ["Inbound Support", "Outbound Campaigns", "Technical Support", "Multi-lingual Services"],
      link: "/services/customer-care"
    },
    {
      icon: TrendingUp,
      title: "Customer Acquisition as a Service",
      description: "Increase Sales with B2B & B2C customer acquisition strategies and execution.",
      features: ["Lead Generation", "Sales Conversion", "Market Research", "Campaign Management"],
      link: "/services/customer-acquisition"
    },
    {
      icon: Shield,
      title: "Sales Leakage Prevention & Detection",
      description: "Protect your Business from Loss & Leakage with advanced monitoring and analytics.",
      features: ["Revenue Protection", "Fraud Detection", "Process Audits", "Compliance Monitoring"],
      link: "/services/sales-leakage"
    }
  ];

  const channels = [
    { icon: phoneIcon, name: "Phone" },
    { icon: smsIcon, name: "SMS" },
    { icon: chatIcon, name: "Chat" },
    { icon: whatsappIcon, name: "WhatsApp" },
    { icon: emailIcon, name: "Email" },
    { icon: chatbotIcon, name: "Chatbot & AI" }
  ];

  const omnichannelSlides = [
    { image: omnichannelSlide1, alt: "Customer service team" },
    { image: omnichannelSlide2, alt: "Digital communication channels" },
    { image: omnichannelSlide3, alt: "Multi-device communication" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        <div className="relative container mx-auto px-4 py-32 md:py-40">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse shadow-lg shadow-accent/50"></span>
              <span className="text-sm font-semibold text-white tracking-wide">Professional Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight animate-fade-in">
              What We Do?
              <span className="block text-accent mt-3 drop-shadow-lg">Business & Digital Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
              Our delivery centre of excellence operates with cutting-edge technology and proven methodologies
            </p>
            <div className="flex items-center justify-center gap-3 text-sm text-white/70 pt-6">
              <Link to="/" className="hover:text-accent transition-colors font-medium">Home</Link>
              <span className="text-white/40">/</span>
              <span className="text-accent font-semibold">What We Do</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Healthcare Revenue Cycle Management */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">Specialize in delivering end-to-end Revenue Cycle Management (RCM) solutions for healthcare providers across the USA</h2>
            <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
            <div className="order-2 md:order-1 group">
              <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-lg)] transition-all duration-500 hover:shadow-[var(--shadow-accent)]">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Healthcare Revenue Cycle Management" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-accent/10 rounded-2xl shadow-[var(--shadow-sm)] border border-accent/20">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">Healthcare Revenue Cycle Management</h3>
              <p className="text-muted-foreground leading-relaxed">We specialize in delivering end-to-end Revenue Cycle Management (RCM) solutions for healthcare providers across the USA. Our expert team ensures accurate billing, efficient claim processing, and faster reimbursements, helping healthcare organizations improve cash flow, reduce denials, and focus on quality patient care.</p>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground font-medium pt-2">
                <span className="h-px w-8 bg-accent"></span>
              </div>
              <Button 
                variant="default" 
                asChild 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 rounded-xl shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-accent)] transition-all duration-300 hover:-translate-y-1"
              >
                <Link to="/healthcare-services">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CX Strategies & Consulting */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">Client Strategies & Consulting</h2>
            <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
            <div className="order-2 md:order-1 group">
              <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-lg)] transition-all duration-500 hover:shadow-[var(--shadow-accent)]">
                <img 
                  src="https://i0.wp.com/the-connections.com/wp-content/uploads/2020/07/tm-post-three.jpg?w=847&ssl=1" 
                  alt="Clinet Strategies and Consulting" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-accent/10 rounded-2xl shadow-[var(--shadow-sm)] border border-accent/20">
                <Headphones className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">Design your Customer Engagement Strategy</h3>
              <p className="text-muted-foreground leading-relaxed">Expert consultation and proven methodologies to optimize your customer experience journey.</p>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground font-medium pt-2">
                <span className="h-px w-8 bg-accent"></span>
              </div>
              <Button 
                variant="default" 
                asChild 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 rounded-xl shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-accent)] transition-all duration-300 hover:-translate-y-1"
              >
                <Link to="/services/client-strategies">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Care */}
      <section className="py-20 md:py-32 bg-muted/30 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">Customer Care</h2>
            <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-accent/10 rounded-2xl shadow-[var(--shadow-sm)] border border-accent/20">
                <MessageSquare className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">Deliver Client 24×7 with our Services</h3>
              <p className="text-muted-foreground leading-relaxed">Round-the-clock customer support with comprehensive care services tailored to your business needs.</p>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground font-medium pt-2">
                <span className="h-px w-8 bg-accent"></span>
              </div>
              <Button 
                variant="default" 
                asChild 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 rounded-xl shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-accent)] transition-all duration-300 hover:-translate-y-1"
              >
                <Link to="/services/customer-care">Learn More</Link>
              </Button>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-lg)] transition-all duration-500 hover:shadow-[var(--shadow-accent)]">
                <img 
                  src="https://i1.wp.com/the-connections.com/wp-content/uploads/2020/06/post-0083.jpg?w=847&ssl=1" 
                  alt="Customer Care Services"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Omnichannel Communication */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">Omnichannel Communication</h2>
            <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
            <div className="order-2 md:order-1">
              <Carousel 
                className="w-full" 
                opts={{ loop: true }}
                plugins={[
                  Autoplay({
                    delay: 4000,
                  }),
                ]}
              >
                <CarouselContent>
                  {omnichannelSlides.map((slide, index) => (
                    <CarouselItem key={index}>
                      <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-lg)] group">
                        <img 
                          src={slide.image} 
                          alt={slide.alt} 
                          className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="grid grid-cols-3 gap-4 p-6 bg-card rounded-2xl border border-border shadow-[var(--shadow-sm)]">
                {channels.map((channel, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-accent/10 transition-all duration-300 group animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-16 w-16 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-scale-in">
                      <img 
                        src={channel.icon} 
                        alt={channel.name} 
                        className="w-full h-full object-contain drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300" 
                      />
                    </div>
                    <span className="text-xs text-center font-medium text-foreground">{channel.name}</span>
                  </div>
                ))}
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">All Channels, One Platform</h3>
              <p className="text-muted-foreground leading-relaxed">Seamless communication across Phone, SMS, Chat, WhatsApp, Email, Chatbot & AI.</p>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground font-medium pt-2">
                <span className="h-px w-8 bg-accent"></span>
              </div>
              <Button 
                variant="default" 
                asChild 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 rounded-xl shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-accent)] transition-all duration-300 hover:-translate-y-1"
              >
                <Link to="/services/omnichannel-communication">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Centre Software */}
      <section className="py-20 md:py-32 bg-muted/30 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">Contact Centre Software & Solution</h2>
            <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-accent/10 rounded-2xl shadow-[var(--shadow-sm)] border border-accent/20">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">Multi-channel Communication on Single Application</h3>
              <p className="text-muted-foreground leading-relaxed">Unified platform for managing all communication channels with advanced features and analytics.</p>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground font-medium pt-2">
                <span className="h-px w-8 bg-accent"></span>
              </div>
              <Button 
                variant="default" 
                asChild 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 rounded-xl shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-accent)] transition-all duration-300 hover:-translate-y-1"
              >
                <Link to="/services/contact-centre">Learn More</Link>
              </Button>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-lg)] transition-all duration-500 hover:shadow-[var(--shadow-accent)]">
                <img 
                  src="https://i0.wp.com/the-connections.com/wp-content/uploads/2020/08/tm-blog02.jpg?w=847&ssl=1" 
                  alt="Contact Centre Software"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Acquisition */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">Customer Acquisition as a Service</h2>
            <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
            <div className="order-2 md:order-1 group">
              <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-lg)] transition-all duration-500 hover:shadow-[var(--shadow-accent)]">
                <img 
                  src="https://i1.wp.com/the-connections.com/wp-content/uploads/2020/06/tm-services-three.jpg?w=847&ssl=1" 
                  alt="Customer Acquisition" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-accent/10 rounded-2xl shadow-[var(--shadow-sm)] border border-accent/20">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">Increase Sales with B2B & B2C Customers</h3>
              <p className="text-muted-foreground leading-relaxed">Proven strategies and execution to drive customer acquisition and accelerate business growth.</p>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground font-medium pt-2">
                <span className="h-px w-8 bg-accent"></span>
              </div>
              <Button 
                variant="default" 
                asChild 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 rounded-xl shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-accent)] transition-all duration-300 hover:-translate-y-1"
              >
                <Link to="/services/customer-acquisition">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Leakage Prevention */}
      <section className="py-20 md:py-32 bg-muted/30 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">Sales Leakage Prevention & Detection</h2>
            <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-accent/10 rounded-2xl shadow-[var(--shadow-sm)] border border-accent/20">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">Protect your Business from Loss & Leakage</h3>
              <p className="text-muted-foreground leading-relaxed">Advanced monitoring and analytics to identify, prevent, and protect revenue from leakage.</p>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground font-medium pt-2">
                <span className="h-px w-8 bg-accent"></span>
              </div>
              <Button 
                variant="default" 
                asChild 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 rounded-xl shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-accent)] transition-all duration-300 hover:-translate-y-1"
              >
                <Link to="/services/sales-leakage">Learn More</Link>
              </Button>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-lg)] transition-all duration-500 hover:shadow-[var(--shadow-accent)]">
                <img 
                  src="https://i0.wp.com/the-connections.com/wp-content/uploads/2020/07/tm-post-one.jpg?w=847&ssl=1" 
                  alt="Sales Leakage Prevention"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Satisfaction & Feedback Survey */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">Satisfaction & Feedback Survey</h2>
            <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
            <div className="order-2 md:order-1 group">
              <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-lg)] transition-all duration-500 hover:shadow-[var(--shadow-accent)]">
                <img 
                  src="https://i1.wp.com/the-connections.com/wp-content/uploads/2020/07/tm-servicesone.jpg?w=847&ssl=1" 
                  alt="Satisfaction & Feedback Survey" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h3 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">Net Promoter Score Based Surveys</h3>
              <p className="text-muted-foreground leading-relaxed">Comprehensive feedback collection and analysis to measure customer satisfaction and drive improvement.</p>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground font-medium pt-2">
                <span className="h-px w-8 bg-accent"></span>
              </div>
              <Button 
                variant="default" 
                asChild 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 rounded-xl shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-accent)] transition-all duration-300 hover:-translate-y-1"
              >
                <Link to="/services/satisfaction-survey">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AMC Management */}
      <section className="py-20 md:py-32 bg-muted/30 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">AMC Management – End to End</h2>
            <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">From Ticket Generation to Payment Reconciliation</h3>
              <p className="text-muted-foreground leading-relaxed">Complete AMC lifecycle management with automated workflows and seamless integration.</p>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground font-medium pt-2">
                <span className="h-px w-8 bg-accent"></span>
              </div>
              <Button 
                variant="default" 
                asChild 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 rounded-xl shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-accent)] transition-all duration-300 hover:-translate-y-1"
              >
                <Link to="/services/amc-management">Learn More</Link>
              </Button>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-lg)] transition-all duration-500 hover:shadow-[var(--shadow-accent)]">
                <img 
                  src="https://i0.wp.com/the-connections.com/wp-content/uploads/2020/11/image1.png?w=847&ssl=1" 
                  alt="AMC Management" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key or VIP Account Management */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">Key or VIP Account Management</h2>
            <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
            <div className="order-2 md:order-1 group">
              <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-lg)] transition-all duration-500 hover:shadow-[var(--shadow-accent)]">
                <img 
                  src="https://i2.wp.com/the-connections.com/wp-content/uploads/2020/08/tm-blog01.jpg?w=847&ssl=1" 
                  alt="Key or VIP Account Management" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h3 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">Corporate Customers & Special Desk Support</h3>
              <p className="text-muted-foreground leading-relaxed">Dedicated support and personalized service for your most valuable accounts with priority handling.</p>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground font-medium pt-2">
                <span className="h-px w-8 bg-accent"></span>
              </div>
              <Button 
                variant="default" 
                asChild 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 rounded-xl shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-accent)] transition-all duration-300 hover:-translate-y-1"
              >
                <Link to="/services/vip-account-management">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Invoices Management */}
      <section className="py-20 md:py-32 bg-muted/30 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">Invoices Management</h2>
            <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">Printing, Submission, Tracking & Collections</h3>
              <p className="text-muted-foreground leading-relaxed">End-to-end invoice lifecycle management from generation to collection with real-time tracking.</p>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground font-medium pt-2">
                <span className="h-px w-8 bg-accent"></span>
              </div>
              <Button 
                variant="default" 
                asChild 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 rounded-xl shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-accent)] transition-all duration-300 hover:-translate-y-1"
              >
                <Link to="/services/invoice-management">Learn More</Link>
              </Button>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-lg)] transition-all duration-500 hover:shadow-[var(--shadow-accent)]">
                <img 
                  src="https://i2.wp.com/the-connections.com/wp-content/uploads/2020/11/image2-1.png?w=847&ssl=1" 
                  alt="Invoices Management"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Survey & Analysis */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">Market Survey & Analysis</h2>
            <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
            <div className="order-2 md:order-1 group">
              <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-lg)] transition-all duration-500 hover:shadow-[var(--shadow-accent)]">
                <img 
                  src="https://i1.wp.com/the-connections.com/wp-content/uploads/2020/06/tm-blogdetail-two.jpg?w=847&ssl=1" 
                  alt="Market Survey & Analysis" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h3 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">Tele Survey, Market Research & Competitor Analysis</h3>
              <p className="text-muted-foreground leading-relaxed">Data-driven insights and comprehensive market intelligence to inform strategic decisions.</p>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground font-medium pt-2">
                <span className="h-px w-8 bg-accent"></span>
              </div>
              <Button 
                variant="default" 
                asChild 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 rounded-xl shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-accent)] transition-all duration-300 hover:-translate-y-1"
              >
                <Link to="/services/market-survey">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Back Office Support */}
      <section className="py-20 md:py-32 bg-muted/30 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">Back Office Support</h2>
            <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">24/7 Processing and Human Intervention</h3>
              <p className="text-muted-foreground leading-relaxed">Reliable back-office operations with continuous processing and expert human oversight when needed.</p>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground font-medium pt-2">
                <span className="h-px w-8 bg-accent"></span>
              </div>
              <Button 
                variant="default" 
                asChild 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 rounded-xl shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-accent)] transition-all duration-300 hover:-translate-y-1"
              >
                <Link to="/services/back-office-support">Learn More</Link>
              </Button>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-lg)] transition-all duration-500 hover:shadow-[var(--shadow-accent)]">
                <img 
                  src="https://i1.wp.com/the-connections.com/wp-content/uploads/2020/06/tm-services-four.jpg?w=847&ssl=1" 
                  alt="Back Office Support" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CX Database Analytics */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">Client Database Analytics</h2>
            <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
            <div className="order-2 md:order-1 group">
              <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-lg)] transition-all duration-500 hover:shadow-[var(--shadow-accent)]">
                <img 
                  src="https://i2.wp.com/the-connections.com/wp-content/uploads/2020/11/image3.png?w=847&ssl=1" 
                  alt="Client Database Analytics" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h3 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">Convert Data into Actionable Insights</h3>
              <p className="text-muted-foreground leading-relaxed">Advanced analytics platform to transform customer data into strategic business intelligence.</p>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground font-medium pt-2">
                <span className="h-px w-8 bg-accent"></span>
              </div>
              <Button 
                variant="default" 
                asChild 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 rounded-xl shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-accent)] transition-all duration-300 hover:-translate-y-1"
              >
                <Link to="/services/database-analytics">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CX for Startups */}
      <section className="py-20 md:py-32 bg-muted/30 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">Client for Startups</h2>
            <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">Grow with our Customized Business Model</h3>
              <p className="text-muted-foreground leading-relaxed">Flexible, scalable customer experience solutions designed specifically for startups and growing businesses.</p>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground font-medium pt-2">
                <span className="h-px w-8 bg-accent"></span>
              </div>
              <Button 
                variant="default" 
                asChild 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 rounded-xl shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-accent)] transition-all duration-300 hover:-translate-y-1"
              >
                <Link to="/services/client-startups">Learn More</Link>
              </Button>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-lg)] transition-all duration-500 hover:shadow-[var(--shadow-accent)]">
                <img 
                  src="https://i1.wp.com/the-connections.com/wp-content/uploads/2020/11/image4.png?w=847&ssl=1" 
                  alt="Client for Startups" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatWeDo;
