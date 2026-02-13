import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [currentSection, setCurrentSection] = useState<"hero" | "content">("hero");

  const handleScrollToProjects = () => {
    setCurrentSection("content");
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      <AnimatePresence mode="wait">
        {currentSection === "hero" ? (
          <motion.div
            key="hero"
            initial={{ rotateY: 0, opacity: 1 }}
            exit={{ 
              rotateY: -90, 
              opacity: 0,
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
          >
            <Hero onScrollToProjects={handleScrollToProjects} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ 
              rotateY: 0, 
              opacity: 1,
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
          >
            <div className="pt-20">
              <Projects />
              <Experience />
              <Contact />
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;