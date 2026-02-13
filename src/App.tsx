import { Hero } from './components/Hero';
import { ExperienceRoadmap } from './components/ExperienceRoadmap';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="app-root">
      <Navigation />
      <Hero />
      <ExperienceRoadmap />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}