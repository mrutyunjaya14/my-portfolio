import { Code2, Brain, BarChart3, Cog } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming",
      color: "from-blue-500 to-cyan-500",
      skills: ["Python", "R", "SQL", "Julia"],
    },
    {
      icon: Brain,
      title: "Machine Learning",
      color: "from-purple-500 to-pink-500",
      skills: ["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost"],
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      color: "from-green-500 to-emerald-500",
      skills: ["Power BI", "Tableau", "Matplotlib", "Seaborn"],
    },
    {
      icon: Cog,
      title: "Tools & Platforms",
      color: "from-orange-500 to-red-500",
      skills: ["Git", "Docker", "AWS", "Spark"],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for data science and machine learning projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 gradient-card shadow-soft hover:shadow-hover transition-smooth border border-border/50 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} p-3 group-hover:scale-110 transition-smooth`}>
                  <category.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-xl font-semibold">{category.title}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Also familiar with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Pandas", "NumPy", "Keras", "MLflow", "Jupyter", "VS Code", "Linux", "REST APIs"].map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="border-primary/30 text-foreground/80 hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
