import React, { useState, useEffect } from 'react';
import './Project.css';
import { Link } from 'react-router-dom';

const Project = () => {
  const mainPage = [
    {
      title: 'Mainpage',
      description: 'If you want to go back',
      link: '/', 
    },
  ];

  const [showText, setShowText] = useState(true);
  const fullText = '商品情報管理システム';

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="project-container">
      <div className={`project-header ${showText ? 'show' : 'hide'}`}>
        <h2>{fullText}</h2>
      </div>
      <div className={`project-details ${showText ? 'hide' : 'show'}`}>
        <p>Duration: 2022/12 - 2023/01</p>
        <p>Language: java, JavaScript, HTML, CSS, mysql</p>
        <p>Role: Frontend Developer</p>
        <h3>Project Details</h3>
        <p>背景：紙ベースでの管理からの移行(DX化)</p>
        <p>担当：2画面の設計、製造、テストを担当</p>
        <p>工夫点：設計時にいかに見やすく無駄な処理がなく製造するかを意識しました。</p>
      </div>
      <div id="mainpage">
        {mainPage.map((mainpage, index) => (
          <div className="back" key={index}>
            <Link className="project-link" to={mainpage.link}>
              戻る
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
