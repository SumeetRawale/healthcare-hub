import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage1 from "@/assets/hero-healthcare-1.jpg";
import heroImage2 from "@/assets/hero-healthcare-2.jpg";
import heroImage3 from "@/assets/hero-healthcare-3.jpg";
import heroImage4 from "@/assets/hero-healthcare-4.jpg";

const slides = [
  {
    image: heroImage1,
    title: "Healthcare Service Excellence",
    subtitle: "Optimize Your Healthcare Operations",
    points: [
      "99.8% Coding Accuracy Rate",
      "40% Reduction in Claim Denials",
      "24/7 Patient Support Services",
      "HIPAA Compliant Operations"
    ],
    cta: "Explore Healthcare Services",
    link: "/services/medical-coding"
  },
  {
    image: heroImage2,
    title: "Medical Billing & Revenue Cycle Management",
    subtitle: "Maximize Your Revenue Potential",
    points: [
      "Faster Reimbursement Processing",
      "Expert Denial Management",
      "Complete Revenue Cycle Solutions",
      "Advanced Analytics & Reporting"
    ],
    cta: "Learn More",
    link: "/services/medical-billing"
  },
  {
    image: heroImage3,
    title: "Comprehensive Patient Care",
    subtitle: "Enhance Patient Experience",
    points: [
      "Multi-Channel Support",
      "Real-Time Appointment Scheduling",
      "Insurance Verification",
      "Telehealth Support Services"
    ],
    cta: "Discover Services",
    link: "/services/patient-support"
  },
  {
    image: heroImage2,
    tagline: "THINGS WE VALUE",
    title: {
      parts: [
        { text: "Reduce ", color: "default" },
        { text: "Operating Cost", color: "accent" },
        { text: " or Increase your ", color: "default" },
        { text: "Revenue", color: "accent" }
      ]
    },
    subtitle: "",
    cta: "Learn More",
    link: "/industries",
  },
  {
    image: heroImage4,
    tagline: "THINGS WE VALUE",
    title: {
      parts: [
        { text: "Re-imagine ", color: "accent" },
        { text: "your business with a partner ", color: "default" },
        { text: "Experiance ", color: "accent" }
      ]
    },
    subtitle: "",
    cta: "Learn more",
    link: "/industries",
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Unified Overlay Layout for all slides */}
          <>
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="max-w-3xl text-primary-foreground animate-fade-in">
                {/* Optional Tagline (4th slide) */}
                {('tagline' in slide) && (slide as any).tagline && (
                  <p className="text-accent font-semibold mb-2 uppercase tracking-wider text-sm md:text-base">
                    {(slide as any).tagline}
                  </p>
                )}
                {/* Subtitle line (existing slides use this) */}
                {slide.subtitle && (
                  <p className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm md:text-base">
                    {slide.subtitle}
                  </p>
                )}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  {typeof slide.title === 'object' && 'parts' in (slide as any).title ? (
                    (slide as any).title.parts.map((part: any, idx: number) => (
                      <span key={idx} className={part.color === 'accent' ? 'text-accent' : 'text-primary-foreground'}>
                        {part.text}
                      </span>
                    ))
                  ) : (
                    String(slide.title)
                  )}
                </h1>
                
                {/* Key Points */}
                {slide.points && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {slide.points.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                        <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                        <span className="text-lg font-medium">{point}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <Link to={slide.link}>{slide.cta}</Link>
                  </Button>
                  <Button variant="outline_hero" size="lg" asChild>
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-accent text-primary-foreground p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-accent text-primary-foreground p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-accent w-12" : "bg-primary-foreground/40 w-3 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
