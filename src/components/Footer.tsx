import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
  <footer className="bg-secondary/40 border-t border-border/50 py-8 mt-12 relative overflow-hidden">
      {/* Subtle background gradient texture */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-40 animate-gradient-x"></div>
      
  <div className="relative max-w-7xl mx-auto text-center px-6">
        {/* Branding */}
        <h3 className="text-xl font-semibold">Mrutyunjaya Beura</h3>
        <p className="text-sm text-muted-foreground">
          Data Scientist & Machine Learning Enthusiast
        </p>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 mt-4 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-primary transition-smooth">About</a>
          <a href="#skills" className="hover:text-primary transition-smooth">Skills</a>
          <a href="#projects" className="hover:text-primary transition-smooth">Projects</a>
          <a href="#contact" className="hover:text-primary transition-smooth">Contact</a>
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-6">
          <a href="https://github.com/mrutyunjaya14" target="_blank" className="hover:text-primary transition-smooth">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/mrutyunjaya-beura-699631336/" target="_blank" className="hover:text-primary transition-smooth">
            <Linkedin size={20} />
          </a>
          <a href="mailto:mrutyunjayabeura2004@gmail.com" className="hover:text-primary transition-smooth">
            <Mail size={20} />
          </a>
        </div>

        {/* Divider */}
        <div className="my-6 mx-auto h-[1px] w-32 bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>

        {/* Custom Message */}
        <p className="text-sm text-muted-foreground mt-2">
          Built with ❤️  by <span className="font-medium text-primary">Mrutyunjaya Beura</span>
        </p>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
