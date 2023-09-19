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
  const fullText = '商品レビューサイト';

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
        <p>Duration: 2023/01 - 2023/04</p>
        <p>Language: Python, JavaScript, HTML, CSS, SQL</p>
        <p>Role: Frontend Developer</p>
        <h3>Project Details</h3>
        <p>背景：商品を投稿してランキングとレビュー情報を元に販売促進を促す</p>
        <p>担当：5画面の設計、製造、テストを担当</p>
        <p>工夫点：オブジェクト指向を意識した設計、サニタイジング処理<br></br>
            ログイン機能(新規登録、退会)、複数ページでのデータのやり取り等を意識しました。</p>
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
