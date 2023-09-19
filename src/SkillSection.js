import React, { useState, useEffect } from 'react';
import './SkillSection.css';

const SkillSection = () => {
  const categories = [
    {
      title: '・Language',
      skills: ['Java', 'Python', 'React', 'JavaScript', 'HTML', 'CSS'],
      titleJP: '・プログラミング言語',
    },
    {
      title: '・Database',
      skills: ['MySQL', 'Oracle DB'],
      titleJP: '・データベース',
    },
    {
      title: '・IDE',
      skills: ['Visual Studio Code', 'Eclipse', 'inteliJ'],
      titleJP: '・開発環境',
    },
    {
      title: '・Operating System',
      skills: ['Windows', 'macOS', 'Linux'],
      titleJP: '・使用OS',
    },
  ];

  const [showSkillSection, setShowSkillSection] = useState(false);
  const [activeCategories, setActiveCategories] = useState(new Array(categories.length).fill(false));
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleCategoryClick = (categoryIndex) => {
    setActiveCategories((prevCategories) => {
      const newCategories = [...prevCategories];
      newCategories[categoryIndex] = !newCategories[categoryIndex];
      return newCategories;
    });
  };

  // スクロールイベントを監視
  useEffect(() => {
    const handleScroll = () => {
      // スクロール位置がSkillセクションの位置に近づいたら表示する
      const skillSection = document.getElementById('skills');
      if (skillSection) {
        const skillSectionTop = skillSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (skillSectionTop < windowHeight * 0.8) {
          setShowSkillSection(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // クリーンアップ
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`skill-section ${showSkillSection ? 'show' : ''}`} id="skills">
      <div className="skill-background"></div>
      <h2 className="center-title">Skills</h2>
      <div className="skills-container">
        <div className="left-skills">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`skill-category ${activeCategories[index] ? 'active' : ''}`}
              onClick={() => handleCategoryClick(index)}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <h3>{hoveredCategory === index ? category.titleJP : category.title}</h3>
              <ul className="skill-list">
                {activeCategories[index] &&
                  category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="skill-item">
                      {skill}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="right-items">
          {/* 右側の4つの項目をここに配置 */}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
