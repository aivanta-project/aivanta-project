import React from "react";
import { useTheme } from "./hooks/useTheme";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PrinciplesStrip } from "./components/PrinciplesStrip";
import { AboutSection } from "./components/AboutSection";
import { ResearchSection } from "./components/ResearchSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { OpenSourceSection } from "./components/OpenSourceSection";
import { CommunitySection } from "./components/CommunitySection";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main id="main">
        <Hero />
        <PrinciplesStrip />
        <AboutSection />
        <ResearchSection />
        <ProjectsSection />
        <OpenSourceSection />
        <CommunitySection />
      </main>
      <Footer />
    </>
  );
};

export default App;
