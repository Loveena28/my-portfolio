import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container px-12 py-4">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EmailSection />
        <Footer />
      <ScrollToTop />
      </div>
    </main>
  );
}
