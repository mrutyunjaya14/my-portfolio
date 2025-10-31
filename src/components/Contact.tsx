import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "hover:text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "hover:text-foreground",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "#",
      color: "hover:text-sky-500",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:pintu.kumar@example.com",
      color: "hover:text-red-500",
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Collaborate</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss data science? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-8 gradient-card shadow-soft border border-border/50 animate-slide-in-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  required
                  className="bg-background/50"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="bg-background/50"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="bg-background/50"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8 animate-slide-in-right">
            <Card className="p-8 gradient-card shadow-soft border border-border/50">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4 text-foreground/80">
                <p className="leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you need data analysis, machine learning solutions, or consulting, feel free to reach out.
                </p>
                <p className="font-medium text-primary">
                  pintu.kumar@example.com
                </p>
              </div>
            </Card>

            <Card className="p-8 gradient-card shadow-soft border border-border/50">
              <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-smooth group ${social.color}`}
                  >
                    <social.icon size={20} />
                    <span className="text-sm font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
