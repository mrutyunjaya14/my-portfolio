import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// ⚡ Sample project images (replace with your own local / public URLs)
import churnImg from "@/assets/projects/Churn.jpg";
import salesImg from "@/assets/projects/Sale.jpg";
import sentimentImg from "@/assets/projects/sentiment.jpg";
import imageClassImg from "@/assets/projects/ImageClass.png";

const projects = [
  {
    title: "Customer Churn Prediction",
    description:
      "Built an ML model to predict customer churn with 92% accuracy using Random Forest and XGBoost. Includes feature engineering and hyperparameter tuning.",
    tech: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
    image: churnImg,
    demo: "#",
    github: "#",
  },
  {
    title: "Sales Forecasting Dashboard",
    description:
      "Interactive Power BI dashboard for time-series sales forecasting. Integrated multiple sources and automated weekly refresh pipelines.",
    tech: ["Power BI", "Python", "SQL", "Time Series"],
    image: salesImg,
    demo: "#",
    github: "#",
  },
  {
    title: "Sentiment Analysis Tool",
    description:
      "Deep learning-based sentiment analyzer for customer reviews using LSTM networks, achieving 88% accuracy with pre-trained embeddings.",
    tech: ["TensorFlow", "LSTM", "NLP", "Flask"],
    image: sentimentImg,
    demo: "#",
    github: "#",
  },
  {
    title: "Image Classification System",
    description:
      "CNN model for product categorization, deployed with Docker and AWS, achieving 95% accuracy and auto-scaling capabilities.",
    tech: ["PyTorch", "CNN", "Docker", "AWS"],
    image: imageClassImg,
    demo: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative bg-gradient-to-b from-background via-secondary/10 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of my most exciting machine learning and data science work.
          </p>
        </motion.div>

        {/* Projects Grid */}
  <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
                <Card className="relative group overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-b from-background/60 to-background/20 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative h-48 md:h-56 overflow-hidden rounded-t-3xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-80"></div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-accent/40 text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-smooth"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2" size={16} /> Live Demo
                      </a>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2" size={16} /> View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/mrutyunjaya14"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Github className="mr-2" size={20} />
              View All Projects on GitHub
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Background Gradient Blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Projects;
