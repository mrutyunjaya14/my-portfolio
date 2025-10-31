import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>

      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 opacity-30 animate-gradient-shift"
        style={{
          background: "var(--gradient-hero)",
          backgroundSize: "200% 200%",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light rounded-full blur-2xl opacity-30 animate-float"></div>
              <img
                src={profilePhoto}
                alt="Pintu Kumar - Data Scientist"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-hover border-4 border-primary/20"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-6 animate-fade-in-up">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
                  Pintu Kumar
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium mb-4">
                Data Scientist
              </h2>
              <p className="text-lg md:text-xl text-foreground/70 max-w-2xl">
                Turning data into actionable insights through advanced analytics, machine learning, and visualization
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-soft hover:shadow-hover transition-smooth"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Mail className="mr-2" size={20} />
                Connect With Me
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
