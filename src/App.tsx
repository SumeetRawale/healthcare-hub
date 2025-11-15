import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WhatWeDo from "./pages/WhatWeDo";
import Industries from "./pages/Industries";
import AllServices from "./pages/AllServices";
import BPOServicesPage from "./pages/BPOServicesPage";
import HealthcareServicesPage from "./pages/HealthcareServicesPage";
import WhyUs from "./pages/WhyUs";
import Blog from "./pages/Blog";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import MedicalCoding from "./pages/services/MedicalCoding";
import MedicalBilling from "./pages/services/MedicalBilling";
import PatientSupport from "./pages/services/PatientSupport";
import DataManagement from "./pages/services/DataManagement";
import Telehealth from "./pages/services/Telehealth";
import Analytics from "./pages/services/Analytics";
import ICDCoding from "./pages/services/ICDCoding";
import CPTCoding from "./pages/services/CPTCoding";
import HCCCoding from "./pages/services/HCCCoding";
import Credentialing from "./pages/services/Credentialing";
import AppointmentScheduling from "./pages/services/AppointmentScheduling";
import EligibilityVerification from "./pages/services/EligibilityVerification";
import ChargeCapturing from "./pages/services/ChargeCapturing";
import ClaimAudits from "./pages/services/ClaimAudits";
import ClaimSubmission from "./pages/services/ClaimSubmission";
import PaymentPosting from "./pages/services/PaymentPosting";
import DenialManagement from "./pages/services/DenialManagement";
import QualityReviews from "./pages/services/QualityReviews";
import InsuranceFollowUp from "./pages/services/InsuranceFollowUp";
import BusinessAnalysis from "./pages/services/BusinessAnalysis";
import AccountReceivable from "./pages/services/AccountReceivable";
import PriorAuthorization from "./pages/services/PriorAuthorization";
import PrescriptionAuthorization from "./pages/services/PrescriptionAuthorization";
import SpecialtyBilling from "./pages/services/SpecialtyBilling";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import ScrollToTop from "./components/ScrollToTop";
import ClientStrategies from "./pages/services/ClientStrategies";
import CustomerCare from "./pages/services/CustomerCare";
import OmnichannelCommunication from "./pages/services/OmnichannelCommunication";
import ContactCentre from "./pages/services/ContactCentre";
import CustomerAcquisition from "./pages/services/CustomerAcquisition";
import SalesLeakage from "./pages/services/SalesLeakage";
import AMCManagement from "./pages/services/AMCManagement";
import VIPAccountManagement from "./pages/services/VIPAccountManagement";
import InvoiceManagement from "./pages/services/InvoiceManagement";
import MarketSurvey from "./pages/services/MarketSurvey";
import BackOfficeSupport from "./pages/services/BackOfficeSupport";
import DatabaseAnalytics from "./pages/services/DatabaseAnalytics";
import StartupServices from "./pages/services/StartupServices";
import SatisfactionSurvey from "./pages/services/SatisfactionSurvey";
import ClientStartups from "./pages/services/ClientStartups";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/industries" element={<Industries />} />
        <Route path="/all-services" element={<AllServices />} />
        <Route path="/bpo-services" element={<BPOServicesPage />} />
        <Route path="/healthcare-services" element={<HealthcareServicesPage />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Contact />} />
          <Route path="/services/medical-coding" element={<MedicalCoding />} />
          <Route path="/services/medical-billing" element={<MedicalBilling />} />
          <Route path="/services/patient-support" element={<PatientSupport />} />
          <Route path="/services/data-management" element={<DataManagement />} />
          <Route path="/services/telehealth" element={<Telehealth />} />
          <Route path="/services/analytics" element={<Analytics />} />
          <Route path="/services/icd-coding" element={<ICDCoding />} />
          <Route path="/services/cpt-coding" element={<CPTCoding />} />
          <Route path="/services/hcc-coding" element={<HCCCoding />} />
          <Route path="/services/credentialing" element={<Credentialing />} />
          <Route path="/services/individual-credentialing" element={<Credentialing />} />
          <Route path="/services/group-credentialing" element={<Credentialing />} />
          <Route path="/services/provider-group-credentialing" element={<Credentialing />} />
          <Route path="/services/appointment-scheduling" element={<MedicalBilling />} />
          <Route path="/services/eligibility-verification" element={<MedicalBilling />} />
          <Route path="/services/charge-capturing" element={<MedicalBilling />} />
          <Route path="/services/claim-audits" element={<MedicalBilling />} />
          <Route path="/services/claim-submission" element={<MedicalBilling />} />
          <Route path="/services/payment-posting" element={<MedicalBilling />} />
          <Route path="/services/denial-management" element={<MedicalBilling />} />
          <Route path="/services/quality-reviews" element={<MedicalBilling />} />
          <Route path="/services/insurance-follow-up" element={<MedicalBilling />} />
          <Route path="/services/business-analysis" element={<MedicalBilling />} />
          <Route path="/services/account-receivable" element={<MedicalBilling />} />
          <Route path="/services/prior-authorization" element={<MedicalBilling />} />
          <Route path="/services/prescription-authorization" element={<MedicalBilling />} />
          <Route path="/services/specialty-billing" element={<SpecialtyBilling />} />
          <Route path="/services/dental-billing" element={<SpecialtyBilling />} />
          <Route path="/services/mental-health-billing" element={<SpecialtyBilling />} />
          <Route path="/services/optometry-billing" element={<SpecialtyBilling />} />
          <Route path="/services/chiropractic-billing" element={<SpecialtyBilling />} />
          <Route path="/services/client-strategies" element={<ClientStrategies />} />
          <Route path="/services/customer-care" element={<CustomerCare />} />
          <Route path="/services/omnichannel-communication" element={<OmnichannelCommunication />} />
          <Route path="/services/contact-centre" element={<ContactCentre />} />
          <Route path="/services/customer-acquisition" element={<CustomerAcquisition />} />
          <Route path="/services/sales-leakage" element={<SalesLeakage />} />
          <Route path="/services/amc-management" element={<AMCManagement />} />
          <Route path="/services/vip-account-management" element={<VIPAccountManagement />} />
          <Route path="/services/invoice-management" element={<InvoiceManagement />} />
          <Route path="/services/market-survey" element={<MarketSurvey />} />
          <Route path="/services/back-office-support" element={<BackOfficeSupport />} />
          <Route path="/services/database-analytics" element={<DatabaseAnalytics />} />
          <Route path="/services/startup-services" element={<StartupServices />} />
          <Route path="/services/satisfaction-survey" element={<SatisfactionSurvey />} />
          <Route path="/services/client-startups" element={<ClientStartups />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>

);

export default App;
