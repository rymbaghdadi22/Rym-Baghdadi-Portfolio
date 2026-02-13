import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, GitlabIcon } from "lucide-react";

const contactItems = [
  { icon: Mail, label: "Email", value: "rimbaghdadi22@gmail.com", href: "mailto:rimbaghdadi22@gmail.com" },
  { icon: Phone, label: "Phone", value: "+961 71690644", href: "tel:+96171690644" },
  { icon: MapPin, label: "Location", value: "Tripoli, Lebanon", href: undefined },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/rym-baghdadi", href: "https://linkedin.com/in/rym-baghdadi" },
  // { icon: GitlabIcon, label: "GitLab", value: "gitlab.com/rymbagh", href: "https://gitlab.com/rymbagh" },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-2">Get in touch</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Contact <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {contactItems.map((item, i) => {
            const Icon = item.icon;
            const Wrapper = item.href ? "a" : "div";
            const extraProps = item.href ? { href: item.href, target: item.href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" } : {};

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Wrapper
                  {...(extraProps as any)}
                  className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm font-medium">{item.value}</p>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
