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
    subtitle: "AI-Powered Fashion Platform",
    tech: ["OpenAI API", "AI", "MySQL"],
    description:
      "An AI-powered platform that turns natural-language shopping requests into highly accurate SQL queries, understanding real conversational chat, pricing, and intent to fetch the most reliable product options from Amazon.",
    icon: Sparkles,
    featured: true,
  },
  {
    title: "Medical Courses Platform",
    subtitle: "E-Learning System",
    tech: ["PHP", "RBAC", "MySQL", "REST APIs"],
    description:
      "A medical e-learning platform for managing courses, enrollments, and users with role-based access control for admins, instructors, and students.",
    icon: Database,
    featured: false,
  },
  {
    title: "Payment Gateway API",
    subtitle: "Webhook-Enabled Integration",
    tech: ["PHP (Yii2)", "Webhooks", "MySQL", "REST APIs"],
    description:
      "A flexible payment gateway supporting multiple banking systems with configurable credentials, platform selection, and full webhook integration.",
    icon: Database,
    featured: false,
  },
  {
    title: "Demo Environment Generator",
    subtitle: "Automation Tool",
    tech: ["Python", "Automation", "MySQL"],
    description:
      "Automated tools for generating demo environments, reducing manual setup time by 80%. Streamlined deployment and configuration for client demonstrations.",
    icon: Code2,
    featured: false,
  },
  {
    title: "Election Management System",
    subtitle: "Voter & District Control",
    tech: ["PHP (Yii2)", "RBAC", "MySQL", "Data Scoping"],
    description:
      "Contributed to election system platform with event-driven workflows, analytical dashboards, advanced filtering, queued export jobs with PDF generation, and survey modules.",
    icon: Code2,
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-2">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;