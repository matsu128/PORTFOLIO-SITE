// BackgroundCircle.js

import React, { useEffect, useState } from 'react';
import './BackgroundCircle.css';

const BackgroundCircle = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const newScrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(newScrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // スクロール位置に応じて top の値を計算
  const calculateTop = () => {
    if (scrollPercentage <= 20) {
        return `${scrollPercentage - 20}%`;
      } else if (scrollPercentage >= 80) {
        return `${80 - (scrollPercentage - 20)}%`;
      } else {
        return "0"; // 通常通りの位置に配置
      }
  };

  return (
    <div
      className="background-circle"
      style={{ top: calculateTop() }} /* スクロールに応じて位置を調整 */
    ></div>
  );
};

export default BackgroundCircle;
