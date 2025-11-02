import { useRef } from "react";
import emailjs from "emailjs-com";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_k1mia4c", // replace this
        "template_10btaoe", // replace this
        formRef.current,
        "e2T6Uzc7EyN9S_eK0" // replace this
      )
      .then(
        () => {
          toast({
            title: "✅ Message sent successfully!",
            description: "Thanks for reaching out — I’ll reply soon.",
          });
          formRef.current?.reset();
        },
        (error) => {
          toast({
            title: "❌ Failed to send message.",
            description: "Please try again later or email me directly.",
          });
          console.error("EmailJS Error:", error);
        }
      );
  };

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mrutyunjaya-beura-699631336/",
      color: "hover:text-blue-500",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/mrutyunjaya14",
      color: "hover:text-gray-200",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/mrutyunjaya.ai/",
      color: "hover:text-pink-500",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:mrutyunjayabeura2004@gmail.com",
      color: "hover:text-red-500",
    },
  ];

  return (
    <section id="contact" className="section-padding relative bg-gradient-to-b from-background via-background/80 to-background/60">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Let’s Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got an idea, project, or opportunity? I’d love to collaborate with you.
          </p>
        </div>

  <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium mb-2 text-foreground/80">
                    Your Name
                  </label>
                  <Input id="from_name" name="from_name" placeholder="John Doe" required />
                </div>

                <div>
                  <label htmlFor="from_email" className="block text-sm font-medium mb-2 text-foreground/80">
                    Email Address
                  </label>
                  <Input id="from_email" name="from_email" type="email" placeholder="john@example.com" required />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/80">
                    Message
                  </label>
                  <Textarea id="message" name="message" placeholder="Tell me about your project..." rows={5} required />
                </div>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    type="submit"
                    className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg shadow-primary/25"
                  >
                    ✉️ Send Message
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>

          {/* Info + Socials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Card className="p-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">Let’s Talk</h3>
              <p className="text-foreground/80 leading-relaxed">
                I’m open to collaborations, freelance work, or data-driven projects.  
                Let’s build something amazing together.
              </p>
              <p className="mt-6 font-medium text-primary">
                📧 mrutyunjayabeura2004@gmail.com
              </p>
            </Card>

            <Card className="p-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl">
              <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center justify-center gap-2 py-4 rounded-xl bg-secondary/40 hover:bg-primary/80 hover:text-white transition-all ${social.color}`}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={24} />
                    <span className="text-sm font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
