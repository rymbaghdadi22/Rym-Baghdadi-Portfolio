import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
const experiences = [
  {
    title: "Backend Engineer",
    company: "Bitminds.ai",
    period: "Jun 2024 – Present",
    location: "Tripoli, Lebanon",
    points: [
      "Improved system performance and reduced response time by restructuring backend architecture and optimizing database operations",
      "Strengthened platform security and reliability by implementing structured access control and background processing systems",
      "Developed a secure payment integration solution enabling businesses to connect with multiple banking providers",
      "Built internal automation tools that reduced manual demo setup time by 80% and increased operational efficiency",
      "Integrated AI-driven workflow assistants to enhance administrative productivity and reduce repetitive tasks",
    ],
  },
  {
    title: "Backend Development Intern",
    company: "UbilityAI",
    period: "Dec 2023 – Mar 2024",
    location: "Tripoli, Lebanon",
    points: [
      "Developed and automated backend test suites to improve system stability and reliability",
      "Built reusable Python modules integrated with internal and third-party services",
      "Designed workflow automation scripts that enhanced system performance",
      "Collaborated with engineering teams to test, debug, and validate new platform features",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-2">Career</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative pl-12"
              >
                {/* Dot */}
                <div className="absolute left-2.5 top-1 w-4 h-4 rounded-full border-2 border-primary bg-background" />

                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <Briefcase size={16} className="text-primary" />
                    <h3 className="font-heading font-semibold text-lg">{exp.title}</h3>
                  </div>
                  <p className="text-sm text-primary font-medium mb-1">{exp.company}</p>
                  <p className="text-xs text-muted-foreground mb-4">
                    {exp.period} · {exp.location}
                  </p>
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1 shrink-0">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
