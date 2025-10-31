import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Pintu Kumar. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart size={16} className="text-primary fill-primary animate-pulse" />
            <span>and lots of data</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <a
              href="mailto:pintu.kumar@example.com"
              className="hover:text-primary transition-smooth"
            >
              pintu.kumar@example.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
