import { Heart, Target, TrendingUp } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="section section--white">
      <div className="container">
        <h2 className="section-title">
          About Me
        </h2>
        <div className="section-divider"></div>
        
        <div className="section-lead">
          <p className="about-text">
            I am deeply inspired to become an entrepreneur and am passionate about giving back to the community that has supported and shaped me. I am driven by a strong desire to create meaningful change, and I approach every decision in my life with a focus on moving one step closer to my long-term goals.
          </p>
          <p className="about-text">
            I believe in continuous growth, constantly learning about myself, expanding my knowledge, and striving to become a better person each day while moving forward with purpose and determination.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card about-card--cream">
            <div className="about-icon about-icon--red">
              <Target size={32} />
            </div>
            <h3 className="about-title">Goal-Driven</h3>
            <p className="about-text">
              Every decision I make is purposeful, focused on moving one step closer to achieving my entrepreneurial vision and long-term goals.
            </p>
          </div>

          <div className="about-card about-card--sand">
            <div className="about-icon about-icon--dark">
              <Heart size={32} />
            </div>
            <h3 className="about-title">Community-Focused</h3>
            <p className="about-text">
              Passionate about giving back to the community that has supported and shaped me, creating meaningful change for those around me.
            </p>
          </div>

          <div className="about-card about-card--cream">
            <div className="about-icon about-icon--red">
              <TrendingUp size={32} />
            </div>
            <h3 className="about-title">Continuous Growth</h3>
            <p className="about-text">
              Constantly learning, expanding my knowledge, and striving to become a better person each day with purpose and determination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}