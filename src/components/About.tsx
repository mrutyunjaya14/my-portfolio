import { GraduationCap, Briefcase, Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const About = () => {
  const timeline = [
    {
      icon: GraduationCap,
      year: "2018 - 2022",
      title: "B.Tech in Computer Science",
      description: "Specialized in Data Science and Machine Learning",
    },
    {
      icon: Briefcase,
      year: "2022 - 2023",
      title: "Junior Data Analyst",
      description: "Built dashboards and performed data analysis for business insights",
    },
    {
      icon: Award,
      year: "2023 - Present",
      title: "Data Scientist",
      description: "Developing ML models and leading analytics projects",
    },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about extracting meaningful insights from complex datasets
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Bio */}
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-2xl font-semibold">Who I Am</h3>
            <p className="text-foreground/80 leading-relaxed">
              I'm a Data Scientist with a passion for transforming raw data into actionable insights. With expertise in Python, machine learning, and data visualization, I help organizations make data-driven decisions that drive growth and efficiency.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              My approach combines technical expertise with business acumen, ensuring that analytical solutions align with organizational goals. I thrive on solving complex problems and communicating findings in clear, impactful ways.
            </p>
            <div className="flex gap-4">
              <Button className="bg-primary hover:bg-primary-dark">
                <Download className="mr-2" size={18} />
                Download CV
              </Button>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-4 animate-slide-in-right">
            <h3 className="text-2xl font-semibold mb-6">Journey</h3>
            {timeline.map((item, index) => (
              <Card
                key={index}
                className="p-6 gradient-card shadow-soft hover:shadow-hover transition-smooth border border-border/50"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-primary font-medium mb-1">
                      {item.year}
                    </div>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
