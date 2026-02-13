import { useState } from 'react';
import { 
  Code, 
  Database, 
  Palette, 
  GitBranch, 
  Layout, 
  Server, 
  Cloud, 
  TestTube, 
  MessageSquare,
  TrendingUp,
  Mic,
  Smartphone,
  Box,
  Brain
} from 'lucide-react';

export type SkillLevel = 'beginner' | 'intermediate' | 'expert';

// Using tuple structure: [skill name, expertise level, icon]
const skillsData: [string, SkillLevel, React.ReactNode][] = [
  // Frontend & Design
  ['JavaScript', 'expert', <Code size={20} />],
  ['TypeScript', 'expert', <Code size={20} />],
  ['React', 'expert', <Layout size={20} />],
  ['React Native', 'expert', <Smartphone size={20} />],
  ['Expo', 'expert', <Smartphone size={20} />],
  ['CSS/Tailwind', 'expert', <Palette size={20} />],
  ['Figma', 'expert', <Palette size={20} />],
  ['UI/UX Design', 'intermediate', <Palette size={20} />],
  
  // Backend & Databases
  ['Node.js', 'expert', <Server size={20} />],
  ['Python', 'expert', <Code size={20} />],
  ['C', 'expert', <Code size={20} />],
  ['Django', 'expert', <Server size={20} />],
  ['Spring Boot', 'expert', <Server size={20} />],
  ['REST API', 'expert', <Server size={20} />],
  ['MongoDB', 'intermediate', <Database size={20} />],
  ['PostgreSQL', 'intermediate', <Database size={20} />],
  ['MySQL', 'expert', <Database size={20} />],
  ['Supabase', 'expert', <Database size={20} />],
  
  // Cloud & DevOps
  ['Azure', 'expert', <Cloud size={20} />],
  ['Git', 'expert', <GitBranch size={20} />],
  ['Unit Testing', 'expert', <TestTube size={20} />],
  
  // AI/ML
  ['ML', 'intermediate', <Brain size={20} />],
  ['Scikit-learn', 'intermediate', <Brain size={20} />],
  ['PyTorch', 'intermediate', <Brain size={20} />],
  ['TensorFlow', 'intermediate', <Brain size={20} />],
  
  // Soft Skills
  ['Communication', 'expert', <MessageSquare size={20} />],
  ['Sales', 'expert', <TrendingUp size={20} />],
  ['Debate', 'expert', <Mic size={20} />],
];

const skillConfig = {
  beginner: {
    color: 'skill-pill',
    hoverColor: 'skill-pill--beginner-hover',
    label: 'Beginner',
  },
  intermediate: {
    color: 'skill-pill',
    hoverColor: 'skill-pill--intermediate-hover',
    label: 'Intermediate',
  },
  expert: {
    color: 'skill-pill',
    hoverColor: 'skill-pill--expert-hover',
    label: 'Expert',
  },
};

interface SkillPillProps {
  name: string;
  level: SkillLevel;
  icon?: React.ReactNode;
}

function SkillPill({ name, level, icon }: SkillPillProps) {
  const [isActive, setIsActive] = useState(false);
  const config = skillConfig[level];

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      className={`${config.color} ${isActive ? config.hoverColor : ''}`}
      onClick={handleClick}
    >
      {icon && <span className="skill-pill-icon">{icon}</span>}
      <span className="skill-pill-text">
        {name}
        {isActive && <span className="skill-pill-level"> • {config.label}</span>}
      </span>
    </button>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section section--cream">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">Click on a skill to view level</p>

        <div className="container-md">
          <div className="skills-pill-grid">
            {skillsData.map(([name, level, icon], index) => (
              <SkillPill key={index} name={name} level={level} icon={icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}