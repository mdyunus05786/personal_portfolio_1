import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'framer-motion';

function RadialProgress({
  percent,
  value,
  label,
  size = 120,
  stroke = 12,
  duration = 1600,
}: {
  percent: number;
  value: string;
  label: string;
  size?: number;
  stroke?: number;
  duration?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const center = size / 2;
    const radius = (size - stroke) / 2;
    const startAngle = -Math.PI / 2;
    ctx.lineCap = 'round';

    const draw = (currentPercent: number) => {
      ctx.clearRect(0, 0, size, size);

      ctx.lineWidth = stroke;
      ctx.beginPath();
      ctx.strokeStyle = '#f2b7bf';
      ctx.arc(center, center, radius, 0, 2 * Math.PI);
      ctx.stroke();

      const end = startAngle + (currentPercent / 100) * 2 * Math.PI;
      ctx.beginPath();
      ctx.strokeStyle = '#F63049';
      ctx.arc(center, center, radius, startAngle, end);
      ctx.stroke();
    };

    draw(0);

    let frameId = 0;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      draw(eased * percent);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [isVisible, percent, size, stroke, duration]);

  return (
    <div className="radial" ref={containerRef}>
      <div className="radial-canvas" style={{ width: size, height: size }}>
        <canvas ref={canvasRef} />
        <div className="radial-value">
          {value}
        </div>
      </div>
      <h4 className="radial-label">{label}</h4>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="hero">
      {/* Animated Background Elements */}
      <div className="hero-bg">
        <motion.div
          className="hero-orb hero-orb--one"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="hero-orb hero-orb--two"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="hero-orb hero-orb--three"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="hero-inner">
        <div className="hero-grid">
          {/* Text Content */}
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I'm <span className="name-script text-accent">Mohammed Yunus</span>
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Full Stack Developer & Designer
            </motion.p>
            <motion.p 
              className="hero-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              I create beautiful, functional websites and applications that make a difference. 
              Passionate about clean code and user experience.
            </motion.p>
            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <RadialProgress percent={90} value="100+" label="Project done" duration={2800} />
              <RadialProgress percent={60} value="2+" label="Internships" duration={2800} />
              <RadialProgress percent={75} value="1.5 yrs" label="Industry experience" duration={2800} />
            </motion.div>
            <motion.div 
              className="hero-links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero-link"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero-link"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a 
                href="mailto:your@email.com" 
                className="hero-link"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="hero-photo-wrap"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <ImageWithFallback
                src="/Profile_pic.png"
                alt="Profile"
                className="profile-photo"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}