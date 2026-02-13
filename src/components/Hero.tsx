import { motion } from "framer-motion";
import rymImage from "@/assets/rym.jpg";
import { Mail, MapPin, Linkedin, ArrowDown } from "lucide-react";

interface HeroProps {
  onScrollToProjects: () => void;
}

const Hero = ({ onScrollToProjects }: HeroProps) => {
  return (
    <section id="about" className="min-h-screen flex items-center section-padding pt-32 relative">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-primary font-heading font-medium text-sm tracking-widest uppercase mb-4">
            Backend Developer
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6">
            Hi, I'm{" "}
            <span className="text-gradient">Rym Baghdadi</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mb-8">
            Specialized in building secure, scalable platforms using PHP&nbsp;(Yii2), Python, and MySQL. Passionate about automation, clean architecture, and delivering production-ready backend systems.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {["PHP frameworks", "Python", "MySQL", "REST APIs", "Webhooks", "RBAC", "AWS"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1.5"><MapPin size={14} className="text-primary" /> Tripoli, Lebanon</span>
            <a href="mailto:rimbaghdadi22@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors"><Mail size={14} className="text-primary" /> rimbaghdadi22@gmail.com</a>
            <a href="https://linkedin.com/in/rym-baghdadi" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors"><Linkedin size={14} className="text-primary" /> LinkedIn</a>
          </div>

          <button
            onClick={onScrollToProjects}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all"
          >
            View My Work
            <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/5 blur-2xl" />
            <img
              src={rymImage}
              alt="Rym Baghdadi"
              className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl glow-primary"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={onScrollToProjects}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ArrowDown size={24} className="text-primary" />
      </motion.div>
    </section>
  );
};

export default Hero;