import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare, Smartphone, Mail, Phone, MessageCircle, CheckCircle } from "lucide-react";

const OmnichannelCommunication = () => {
  const benefits = [
    "All customer interactions managed in one place.",
    "Faster replies and better customer experience.",
    "No duplication or missed follow-ups.",
    "Consistent communication across all platforms.",
    "Easy tracking through reports and dashboards."
  ];

  const channels = [
    { icon: Phone, name: "Phone Calls" },
    { icon: MessageCircle, name: "WhatsApp" },
    { icon: Mail, name: "Email" },
    { icon: MessageSquare, name: "Live Chat" },
    { icon: Smartphone, name: "Social Media" },
    { icon: CheckCircle, name: "Ticketing Systems" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Unified Communication</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Omnichannel Communication</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Every customer uses a different channel to connect. Some prefer calls, some use WhatsApp, 
              others rely on email, chat, or social media. Businesses need one place where all these 
              interactions are managed smoothly.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="border-2 border-accent mb-12">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">One Unified Team</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  We help you handle all communication channels with one unified team. Your customers get 
                  quick responses, and your business gets complete visibility on every conversation.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our team manages calls, chats, emails, WhatsApp, social platforms, and ticketing. 
                  We ensure no message is missed and every request is handled with accuracy.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Communication Channels We Handle</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
              {channels.map((channel, index) => (
                <Card key={index} className="group hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-2 transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <channel.icon className="h-12 w-12 text-accent mb-3 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300" />
                    <span className="text-sm font-semibold text-primary">{channel.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h3 className="text-3xl font-bold text-primary mb-8 text-center">How Omnichannel Support Helps You</h3>
            <Card className="border-2 border-accent mb-12">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {benefits.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-muted border-2 border-accent">
              <CardContent className="p-8 text-center">
                <p className="text-lg text-muted-foreground mb-4">
                  We help you make more revenue with quick and consistent customer responses.
                </p>
                <p className="text-lg text-muted-foreground">
                  We save your revenue month on month by reducing delays and unmanaged messages. With us, 
                  your communication becomes simple, connected, and efficient across every channel your 
                  customers use.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Unify Your Customer Communication</h2>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OmnichannelCommunication;
