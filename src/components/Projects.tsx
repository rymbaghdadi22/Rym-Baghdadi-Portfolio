import { motion } from "framer-motion";
import { Sparkles, Database, Code2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  tech: string[];
  description: string;
  icon: LucideIcon;
  featured: boolean;
}
const projects: Project[] = [
  {
    title: "Zayaina",
    subtitle: "AI-Powered Fashion Assistant",
    tech: ["Yii / PHP", "AI Integration", "MySQL"],
    description:
      "Built an AI-powered fashion assistant that converts natural user requests into structured product searches, improving shopping accuracy and delivering relevant results in real-time.",
    icon: Sparkles,
    featured: true,
  },
  {
    title: "Payment Gateway System",
    subtitle: "Multi-Bank Integration Platform",
    tech: ["Yii / PHP", "Secure Transactions", "API Integration"],
    description:
      "Developed a configurable payment system allowing businesses to integrate multiple banking providers with secure transaction processing and automated payment status updates.",
    icon: Database,
    featured: false,
  },
  {
    title: "Election Management Platform",
    subtitle: "Voter & Reporting System",
    tech: ["PHP", "Dashboards", "Reporting Tools"],
    description:
      "Contributed to a large-scale election management platform featuring real-time dashboards, voter tracking, automated reporting, and data export tools to support strategic decision-making.",
    icon: Code2,
    featured: false,
  },
  {
    title: "Medical E-Learning Platform",
    subtitle: "Course & User Management System",
    tech: ["PHP", "Access Control", "MySQL"],
    description:
      "Developed a digital learning platform for medical professionals, managing courses, enrollments, and user permissions to streamline online education workflows.",
    icon: Database,
    featured: false,
  },
  {
    title: "Demo Environment Automation Tool",
    subtitle: "Internal Productivity System",
    tech: ["Python", "Automation", "Deployment Support"],
    description:
      "Built automation tools to generate ready-to-use demo environments, reducing manual setup time by 80% and improving sales and onboarding efficiency.",
    icon: Code2,
    featured: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-2">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className={`group relative rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-all duration-500 ${
                  project.featured ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {project.featured && (
                  <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary text-primary-foreground">
                    Featured
                  </span>
                )}
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{project.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-secondary text-secondary-foreground font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
