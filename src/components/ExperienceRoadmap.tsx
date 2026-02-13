import { useEffect, useRef, useState } from 'react';
import { Award, Briefcase, Calendar, Code, GraduationCap, MapPin } from 'lucide-react';

type RoadmapType = 'work' | 'education' | 'achievement';

interface RoadmapItem {
  id: string;
  type: RoadmapType;
  title: string;
  organization: string;
  location: string;
  date: string;
  description: string;
  skills?: string[];
}

const experienceData: RoadmapItem[] = [
  {
    id: '1',
    type: 'work',
    title: 'Mobile App Development Intern',
    organization: 'EVBuddy',
    location: 'New Jersey, USA',
    date: 'J-Term 2026 - Current',
    description: 'Developed an EV charging digital infrastructure which allows users to access EV chargers around them right through their mobile with a group of other 15 experts.',
    skills: ['Team Collaboration', 'Engineering', 'Development', 'Communication'],
  },
  {
    id: '2',
    type: 'work',
    title: 'Full Stack Developer',
    organization: 'Club Camp Crew',
    location: 'Remote',
    date: 'December 2025 - Current',
    description: 'Improved SEO to drive organic growth and attract more users while developing data driven marketing strategies to expand reach, optimize campaigns, and strengthen brand visibility.',
    skills: ['SEO', 'Data Analysis', 'Marketing Strategy', 'Full Stack Development'],
  },
  {
    id: '3',
    type: 'education',
    title: 'B.S. in Computer Engineering | Minor in Entrepreneurship',
    organization: 'University of St. Thomas',
    location: 'Minnesota, USA',
    date: 'February 2025 - December 2028',
    description: 'Pursuing Computer Engineering with an Entrepreneurship minor. Focusing on full-stack development, mobile applications, and AI/ML technologies while applying classroom knowledge to real-world projects and developing skills to bridge technology and business.',
    skills: ['Computer Engineering', 'Entrepreneurship', 'Software Development', 'Innovation'],
  },
  {
    id: '4',
    type: 'work',
    title: 'Full Stack Web Developer',
    organization: 'Freelancer (Self-Employed)',
    location: 'Remote',
    date: 'August 2024 - December 2024',
    description: 'Designed websites for businesses to enhance their online presence while developing advanced communication and client management skills.',
    skills: ['Web Development', 'Client Management', 'Communication', 'Design'],
  },
  {
    id: '5',
    type: 'achievement',
    title: 'Secretary of DESI Club',
    organization: 'University of St. Thomas',
    location: 'Minnesota, USA',
    date: 'August 2025 - December 2025',
    description: 'Demonstrated leadership commitment through effective team management and communication, coordinating club activities and fostering collaboration among members.',
    skills: ['Leadership', 'Team Management', 'Communication', 'Commitment'],
  },
  {
    id: '6',
    type: 'achievement',
    title: 'Member of Debate Club',
    organization: 'University of St. Thomas',
    location: 'Minnesota, USA',
    date: 'December 2025 - Current',
    description: 'Developed advanced communication skills, stress management techniques, rational thinking, and influential communication through active participation in competitive debates and club activities.',
    skills: ['Communication', 'Stress Management', 'Rational Thinking', 'Influential Communication'],
  },
];

const iconMap: Record<RoadmapType, JSX.Element> = {
  work: <Briefcase className="roadmap-icon" />,
  education: <GraduationCap className="roadmap-icon" />,
  achievement: <Award className="roadmap-icon" />,
};

const markerClass: Record<RoadmapType, string> = {
  work: 'roadmap-marker roadmap-marker--work',
  education: 'roadmap-marker roadmap-marker--education',
  achievement: 'roadmap-marker roadmap-marker--achievement',
};

const filterClass: Record<RoadmapType, string> = {
  work: 'roadmap-filter roadmap-filter--work',
  education: 'roadmap-filter roadmap-filter--education',
  achievement: 'roadmap-filter roadmap-filter--achievement',
};

export function ExperienceRoadmap() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | RoadmapType>('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;

    const cards = target.querySelectorAll('.roadmap-card');
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [filter]);

  const filteredData = filter === 'all'
    ? experienceData
    : experienceData.filter((item) => item.type === filter);

  return (
    <section id="experience" className="section section--white" ref={sectionRef}>
      <div className="container">
        <div className="roadmap-header">
          <h2 className="section-title">My Journey</h2>
          <p className="roadmap-subtitle">A visual roadmap of my professional experience</p>
          <div className="section-divider"></div>
        </div>

        <div className="roadmap-filters">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`roadmap-filter ${filter === 'all' ? 'is-active' : ''}`}
          >
            All
          </button>
          <button
            type="button"
            onClick={() => setFilter('work')}
            className={`${filterClass.work} ${filter === 'work' ? 'is-active' : ''}`}
          >
            <Briefcase className="roadmap-filter-icon" />
            Work
          </button>
          <button
            type="button"
            onClick={() => setFilter('education')}
            className={`${filterClass.education} ${filter === 'education' ? 'is-active' : ''}`}
          >
            <GraduationCap className="roadmap-filter-icon" />
            Education
          </button>
          <button
            type="button"
            onClick={() => setFilter('achievement')}
            className={`${filterClass.achievement} ${filter === 'achievement' ? 'is-active' : ''}`}
          >
            <Award className="roadmap-filter-icon" />
            Achievements
          </button>
        </div>

        <div className={`roadmap ${isVisible ? 'is-visible' : ''}`}>
          <div className="roadmap-list">
            <div className="roadmap-line"></div>
            {filteredData.map((item, index) => {
              const isLeft = index % 2 === 0;
              const isSelected = selectedItem === item.id;

              return (
                <div
                  key={item.id}
                  className={`roadmap-item ${isLeft ? 'is-left' : 'is-right'}`}
                >
                  <div className={`roadmap-content ${isLeft ? 'align-right' : 'align-left'}`}>
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => setSelectedItem(isSelected ? null : item.id)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          setSelectedItem(isSelected ? null : item.id);
                        }
                      }}
                      className={`roadmap-card roadmap-card--hidden ${isSelected ? 'is-selected' : ''}`}
                      style={{ transitionDelay: `${index * 120}ms` }}
                    >
                      <div className={`roadmap-meta ${isLeft ? 'align-right' : 'align-left'}`}>
                        <Calendar className="roadmap-meta-icon" />
                        <span className="roadmap-meta-text">{item.date}</span>
                      </div>

                      <h3 className="roadmap-title">{item.title}</h3>

                      <div className={`roadmap-org ${isLeft ? 'align-right' : 'align-left'}`}>
                        <span className="roadmap-org-text">{item.organization}</span>
                      </div>

                      <div className={`roadmap-location ${isLeft ? 'align-right' : 'align-left'}`}>
                        <MapPin className="roadmap-location-icon" />
                        <span className="roadmap-location-text">{item.location}</span>
                      </div>

                      <p className="roadmap-desc">{item.description}</p>

                      {item.skills && (
                        <div className={`roadmap-skills ${isLeft ? 'align-right' : 'align-left'}`}>
                          {item.skills.map((skill) => (
                            <span key={skill} className="roadmap-skill">
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="roadmap-marker-wrap">
                    <div className={markerClass[item.type]}>
                      {iconMap[item.type] ?? <Code className="roadmap-icon" />}
                    </div>
                  </div>

                  <div className="roadmap-marker-mobile">
                    <div className={markerClass[item.type]}>
                      {iconMap[item.type] ?? <Code className="roadmap-icon" />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="roadmap-legend">
          <h3 className="roadmap-legend-title">Legend</h3>
          <div className="roadmap-legend-grid">
            <div className="roadmap-legend-item">
              <div className="roadmap-legend-icon roadmap-marker--work">
                <Briefcase className="roadmap-icon" />
              </div>
              <div>
                <div className="roadmap-legend-heading">Work Experience</div>
                <div className="roadmap-legend-text">Professional roles</div>
              </div>
            </div>
            <div className="roadmap-legend-item">
              <div className="roadmap-legend-icon roadmap-marker--education">
                <GraduationCap className="roadmap-icon" />
              </div>
              <div>
                <div className="roadmap-legend-heading">Education</div>
                <div className="roadmap-legend-text">Academic background</div>
              </div>
            </div>
            <div className="roadmap-legend-item">
              <div className="roadmap-legend-icon roadmap-marker--achievement">
                <Award className="roadmap-icon" />
              </div>
              <div>
                <div className="roadmap-legend-heading">Achievements</div>
                <div className="roadmap-legend-text">Awards and recognition</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
