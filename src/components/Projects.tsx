import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Customer Churn Prediction",
      description: "Built a machine learning model to predict customer churn with 92% accuracy using Random Forest and XGBoost. Implemented feature engineering and hyperparameter tuning to optimize performance.",
      tech: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
      demo: "#",
      github: "#",
    },
    {
      title: "Sales Forecasting Dashboard",
      description: "Developed an interactive Power BI dashboard for sales forecasting using time series analysis. Integrated multiple data sources and automated weekly reporting.",
      tech: ["Power BI", "Python", "SQL", "Time Series"],
      demo: "#",
      github: "#",
    },
    {
      title: "Sentiment Analysis Tool",
      description: "Created a sentiment analysis tool using NLP and deep learning to analyze customer reviews. Achieved 88% accuracy using LSTM networks and word embeddings.",
      tech: ["TensorFlow", "LSTM", "NLP", "Flask"],
      demo: "#",
      github: "#",
    },
    {
      title: "Image Classification System",
      description: "Implemented a CNN-based image classification system for product categorization. Deployed model using Docker and AWS with 95% accuracy on test dataset.",
      tech: ["PyTorch", "CNN", "Docker", "AWS"],
      demo: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my data science and machine learning work
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 gradient-card shadow-soft hover:shadow-hover transition-smooth border border-border/50 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                {/* Project Header */}
                <div>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-accent text-accent-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/30 hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/30 hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    <Github className="mr-2" size={16} />
                    View Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
