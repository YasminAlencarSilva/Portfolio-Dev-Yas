import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import ParticlesBackground from "@/components/ParticlesBackground";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import CoursesSection from "@/components/CoursesSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <ParticlesBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <CoursesSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Index;
