import React, { useEffect, useRef, useState } from 'react';
import './ProjectSlider.css';
import { Link } from 'react-router-dom';

const ProjectSlider = ({ projects }) => {
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = sliderRef.current;
    const scrollWidth = container.scrollWidth;
    const animationDuration = scrollWidth * 4;
    let animationFrameId;

    const scroll = (timestamp) => {
      const currentTime = new Date().getTime();
      const progress = (currentTime % animationDuration) / animationDuration;
      container.scrollLeft = scrollWidth * progress;
      animationFrameId = requestAnimationFrame(scroll);
    };

    if (!isHovered) {
      animationFrameId = requestAnimationFrame(scroll);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="project-slider-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="project-slider"
        ref={sliderRef}
        style={{
          overflowX: 'auto',
          cursor: isHovered ? 'grabbing' : 'grab',
        }}
        onMouseDown={(e) => {
          if (isHovered) {
            e.preventDefault();
            const startX = e.clientX;
            const scrollLeft = sliderRef.current.scrollLeft;

            const onMouseMove = (event) => {
              const deltaX = event.clientX - startX;
              sliderRef.current.scrollLeft = scrollLeft - deltaX;
            };

            document.addEventListener('mousemove', onMouseMove);

            document.addEventListener('mouseup', () => {
              document.removeEventListener('mousemove', onMouseMove);
            });
          }
        }}
      >
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <Link
              className="project-link" // スタイルを適用するクラス名を設定
              to={project.link}
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;
