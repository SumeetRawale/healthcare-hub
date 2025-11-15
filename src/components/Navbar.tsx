import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import medicalCodingImg from "@/assets/menu/medical-coding.jpg";
import credentialingImg from "@/assets/menu/credentialing.jpg";
import medicalBillingImg from "@/assets/menu/medical-billing.jpg";
import specialtyBillingImg from "@/assets/menu/specialty-billing.jpg";
import consultingImg from "@/assets/menu/consulting.jpg";
import acquisitionImg from "@/assets/menu/acquisition.jpg";
import managementImg from "@/assets/menu/management.jpg";
import analyticsImg from "@/assets/menu/analytics.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "What We Do?", path: "/what-we-do" },
    { name: "BPO Service", path: "/industries" },
    { name: "Why The Connections", path: "/why-us" },
    { name: "About Us", path: "/company" },
  ];

  const bpoServices = {
    consulting: [
      { name: "Client Strategies & Consulting", path: "/services/client-strategies" },
      { name: "Customer Care (24×7)", path: "/services/customer-care" },
      { name: "Omnichannel Communication", path: "/services/omnichannel-communication" },
      { name: "Contact Centre Operations", path: "/services/contact-centre" },
    ],
    acquisition: [
      { name: "Customer Acquisition", path: "/services/customer-acquisition" },
      { name: "Sales Leakage Prevention", path: "/services/sales-leakage" },
      { name: "Market Survey & Analysis", path: "/services/market-survey" },
      { name: "Satisfaction & Feedback Survey", path: "/services/satisfaction-survey" },
    ],
    management: [
      { name: "AMC Management", path: "/services/amc-management" },
      { name: "VIP Account Management", path: "/services/vip-account-management" },
      { name: "Invoice Management", path: "/services/invoice-management" },
    ],
    analytics: [
      { name: "Client Database Analytics", path: "/services/database-analytics" },
      { name: "Back Office Support", path: "/services/back-office-support" },
      { name: "Startup Services", path: "/services/client-startups" },
    ],
  };

  const healthcareServices = {
    coding: [
      { name: "ICD Coding Services", path: "/services/icd-coding" },
      { name: "CPT Coding Services", path: "/services/cpt-coding" },
      { name: "HCC Coding Services", path: "/services/hcc-coding" },
    ],
    credentialing: [
      { name: "Individual Provider Credentialing", path: "/services/credentialing#individual" },
      { name: "Group Credentialing", path: "/services/credentialing#group" },
      { name: "Provider & Group Credentialing", path: "/services/credentialing#combined" },
    ],
    billing: [
      { name: "Patient Appointment Scheduling", path: "/services/medical-billing#appointment-scheduling" },
      { name: "Eligibility Verification", path: "/services/medical-billing#eligibility-verification" },
      { name: "Charge Capturing & Entry", path: "/services/medical-billing#charge-capturing" },
      { name: "Claim Audits", path: "/services/medical-billing#claim-audits" },
      { name: "Claim Submission & Rejections", path: "/services/medical-billing#claim-submission" },
      { name: "Payment Posting", path: "/services/medical-billing#payment-posting" },
      { name: "Quality Reviews", path: "/services/medical-billing#quality-reviews" },
      { name: "Insurance Follow Up", path: "/services/medical-billing#insurance-followup" },
      { name: "Denial Management", path: "/services/medical-billing#denial-management" },
      { name: "Business Analysis & Quality Reporting", path: "/services/medical-billing#business-analysis" },
      { name: "Account Receivable", path: "/services/medical-billing#account-receivable" },
      { name: "Prior Authorization", path: "/services/medical-billing#prior-authorization" },
      { name: "Prescription Prior Authorization", path: "/services/medical-billing#prescription-authorization" },
    ],
    specialty: [
      { name: "Dental Specialty Billing", path: "/services/specialty-billing#dental" },
      { name: "Mental & Behavioral Health", path: "/services/specialty-billing#mental-health" },
      { name: "Optometry & Ophthalmology", path: "/services/specialty-billing#eye-care" },
      { name: "Chiropractic Specialty", path: "/services/specialty-billing#chiropractic" },
    ],
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-accent text-accent-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <p className="font-medium">For Business Deal Contact Us on +91 788-789-8196</p>
          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact" className="hover:underline">
              Careers
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="The-Connections - Quality & Value Delivered, Together"
                className="h-14 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <Link
                to="/"
                className={`text-base font-medium transition-colors hover:text-accent ${
                  isActive("/") ? "text-accent" : "text-foreground"
                }`}
              >
                Home
              </Link>

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-accent/10 text-base font-medium">
                      <Link
                        to="/what-we-do"
                        className={`text-base font-medium transition-colors hover:text-accent ${
                          isActive("/what-we-do") ? "text-accent" : "text-foreground"
                        }`}
                      >
                        What We Do?
                      </Link>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="left-0">
                      <div className="flex w-[1100px] h-[380px]">
                        {/* Consulting & Support */}
                        <div className="flex-1 p-5 border-r border-border">
                          <div className="relative h-32 overflow-hidden rounded-md mb-3 group">
                            <img
                              src={consultingImg}
                              alt="Consulting Services"
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <h4 className="font-bold text-base text-foreground mb-3">Consulting & Support</h4>
                          <div className="space-y-0">
                            {bpoServices.consulting.map((service, index) => (
                              <div key={service.path} className="relative">
                                <Link
                                  to={service.path}
                                  className="block py-2 text-base font-semibold text-muted-foreground hover:text-accent transition-colors"
                                >
                                  {service.name}
                                </Link>
                                <div className="h-px w-full bg-gradient-to-r from-border from-0% via-border via-85% to-transparent to-100%" />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Acquisition & Growth */}
                        <div className="flex-1 p-5 border-r border-border">
                          <div className="relative h-32 overflow-hidden rounded-md mb-3 group">
                            <img
                              src={acquisitionImg}
                              alt="Customer Acquisition Services"
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <h4 className="font-bold text-base text-foreground mb-3">Acquisition & Growth</h4>
                          <div className="space-y-0">
                            {bpoServices.acquisition.map((service, index) => (
                              <div key={service.path} className="relative">
                                <Link
                                  to={service.path}
                                  className="block py-2 text-base font-semibold text-muted-foreground hover:text-accent transition-colors"
                                >
                                  {service.name}
                                </Link>
                                <div className="h-px w-full bg-gradient-to-r from-border from-0% via-border via-85% to-transparent to-100%" />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Management Services */}
                        <div className="flex-1 p-5 border-r border-border">
                          <div className="relative h-32 overflow-hidden rounded-md mb-3 group">
                            <img
                              src={managementImg}
                              alt="Management Services"
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <h4 className="font-bold text-base text-foreground mb-3">Management Services</h4>
                          <div className="space-y-0">
                            {bpoServices.management.map((service, index) => (
                              <div key={service.path} className="relative">
                                <Link
                                  to={service.path}
                                  className="block py-2 text-base font-semibold text-muted-foreground hover:text-accent transition-colors"
                                >
                                  {service.name}
                                </Link>
                                <div className="h-px w-full bg-gradient-to-r from-border from-0% via-border via-85% to-transparent to-100%" />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Analytics & Operations */}
                        <div className="flex-1 p-5">
                          <div className="relative h-32 overflow-hidden rounded-md mb-3 group">
                            <img
                              src={analyticsImg}
                              alt="Analytics Services"
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <h4 className="font-bold text-base text-foreground mb-3">Analytics & Operations</h4>
                          <div className="space-y-0">
                            {bpoServices.analytics.map((service, index) => (
                              <div key={service.path} className="relative">
                                <Link
                                  to={service.path}
                                  className="block py-2 text-base font-semibold text-muted-foreground hover:text-accent transition-colors"
                                >
                                  {service.name}
                                </Link>
                                <div className="h-px w-full bg-gradient-to-r from-border from-0% via-border via-85% to-transparent to-100%" />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-accent/10 text-base font-medium">
                      Healthcare Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="left-0">
                      <div className="flex w-[1100px] h-[380px]">
                        {/* Medical Coding */}
                        <div className="flex-1 p-5 border-r border-border">
                          <div className="relative h-32 overflow-hidden rounded-md mb-3 group">
                            <img
                              src={medicalCodingImg}
                              alt="Medical Coding Services"
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <h4 className="font-bold text-base text-foreground mb-3">Medical Coding</h4>
                          <div className="space-y-0">
                            {healthcareServices.coding.map((service, index) => (
                              <div key={service.path} className="relative">
                                <Link
                                  to={service.path}
                                  className="block py-2 text-base font-semibold text-muted-foreground hover:text-accent transition-colors"
                                >
                                  {service.name}
                                </Link>
                                <div className="h-px w-full bg-gradient-to-r from-border from-0% via-border via-85% to-transparent to-100%" />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Credentialing */}
                        <div className="flex-1 p-5 border-r border-border">
                          <div className="relative h-32 overflow-hidden rounded-md mb-3 group">
                            <img
                              src={credentialingImg}
                              alt="Credentialing Services"
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <h4 className="font-bold text-base text-foreground mb-3">Credentialing</h4>
                          <div className="space-y-0">
                            {healthcareServices.credentialing.map((service, index) => (
                              <div key={service.path} className="relative">
                                <Link
                                  to={service.path}
                                  className="block py-2 text-base font-semibold text-muted-foreground hover:text-accent transition-colors"
                                >
                                  {service.name}
                                </Link>
                                <div className="h-px w-full bg-gradient-to-r from-border from-0% via-border via-85% to-transparent to-100%" />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Medical Billing */}
                        <div className="flex-1 p-5 border-r border-border flex flex-col">
                          <div className="relative h-32 overflow-hidden rounded-md mb-3 group">
                            <img
                              src={medicalBillingImg}
                              alt="Medical Billing Services"
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <h4 className="font-bold text-base text-foreground mb-3">Medical Billing</h4>
                          <div className="space-y-0 overflow-y-auto flex-1 pr-2">
                            {healthcareServices.billing.map((service, index) => (
                              <div key={service.path} className="relative">
                                <Link
                                  to={service.path}
                                  className="block py-2 text-base font-semibold text-muted-foreground hover:text-accent transition-colors"
                                >
                                  {service.name}
                                </Link>
                                <div className="h-px w-full bg-gradient-to-r from-border from-0% via-border via-85% to-transparent to-100%" />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Specialty Billing */}
                        <div className="flex-1 p-5">
                          <div className="relative h-32 overflow-hidden rounded-md mb-3 group">
                            <img
                              src={specialtyBillingImg}
                              alt="Specialty Billing Services"
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <h4 className="font-bold text-base text-foreground mb-3">Specialty Billing</h4>
                          <div className="space-y-0">
                            {healthcareServices.specialty.map((service, index) => (
                              <div key={service.path} className="relative">
                                <Link
                                  to={service.path}
                                  className="block py-2 text-base font-semibold text-muted-foreground hover:text-accent transition-colors"
                                >
                                  {service.name}
                                </Link>
                                <div className="h-px w-full bg-gradient-to-r from-border from-0% via-border via-85% to-transparent to-100%" />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link
                to="/industries"
                className={`text-base font-medium transition-colors hover:text-accent ${
                  isActive("/industries") ? "text-accent" : "text-foreground"
                }`}
              >
                BPO Service
              </Link>
              <Link
                to="/why-us"
                className={`text-base font-medium transition-colors hover:text-accent ${
                  isActive("/why-us") ? "text-accent" : "text-foreground"
                }`}
              >
                Why The Connections
              </Link>
              <Link
                to="/company"
                className={`text-base font-medium transition-colors hover:text-accent ${
                  isActive("/company") ? "text-accent" : "text-foreground"
                }`}
              >
                About Us
              </Link>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  <Phone className="h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t border-border animate-fade-in max-h-[70vh] overflow-y-auto">
              <Link
                to="/"
                className={`block py-3 text-base font-medium transition-colors hover:text-accent ${
                  isActive("/") ? "text-accent" : "text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <div className="mb-4">
                <p className="py-3 text-base font-medium text-foreground">What We Do?</p>
                <div className="pl-4 space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-primary mb-2">Consulting & Support</p>
                    {bpoServices.consulting.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block py-2 text-sm text-muted-foreground hover:text-accent"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary mb-2">Acquisition & Growth</p>
                    {bpoServices.acquisition.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block py-2 text-sm text-muted-foreground hover:text-accent"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary mb-2">Management Services</p>
                    {bpoServices.management.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block py-2 text-sm text-muted-foreground hover:text-accent"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary mb-2">Analytics & Operations</p>
                    {bpoServices.analytics.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block py-2 text-sm text-muted-foreground hover:text-accent"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center justify-between w-full py-3 text-base font-medium text-foreground"
                >
                  Healthcare Services
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="pl-4 space-y-3 mt-2">
                  <div>
                    <p className="text-base font-semibold text-primary mb-2">Medical Coding</p>
                    {healthcareServices.coding.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block py-2 text-base font-medium text-muted-foreground hover:text-accent"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-primary mb-2">Credentialing</p>
                    {healthcareServices.credentialing.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block py-2 text-base font-medium text-muted-foreground hover:text-accent"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-primary mb-2">Medical Billing</p>
                    {healthcareServices.billing.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block py-2 text-base font-medium text-muted-foreground hover:text-accent"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-primary mb-2">Specialty Billing</p>
                    {healthcareServices.specialty.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block py-2 text-base font-medium text-muted-foreground hover:text-accent"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                to="/industries"
                className={`block py-3 text-base font-medium transition-colors hover:text-accent ${
                  isActive("/industries") ? "text-accent" : "text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                BPO Service
              </Link>
              <Link
                to="/why-us"
                className={`block py-3 text-base font-medium transition-colors hover:text-accent ${
                  isActive("/why-us") ? "text-accent" : "text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Why The Connections
              </Link>
              <Link
                to="/company"
                className={`block py-3 text-base font-medium transition-colors hover:text-accent ${
                  isActive("/company") ? "text-accent" : "text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Button variant="hero" size="lg" className="w-full mt-4" asChild>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Phone className="h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
