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

  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDetails(true);
    }, 1000); // 1秒後に詳細を表示

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="project-container">
      <div className={`project-content ${showDetails ? 'show' : ''}`}>
        <h2>カレンダーアプリ</h2>
        <div className={`project-details ${showDetails ? 'show' : ''}`}>
          <p>Duration: 2022/11 - 2022/12</p>
          <p>Language: java, JavaScript, HTML, CSS, mysql</p>
          <p>担当：2画面の詳細設計、製造、テスト</p>
          <h3>Project Details</h3>
          <p>
            This was a web development project to create a responsive website for a client in the
            healthcare industry. I joined the project during the initial development phase and was
            responsible for implementing the frontend user interface using JavaScript, HTML, and CSS.
            The website was designed to be mobile-friendly and accessible, providing information about
            the client's services and contact information.
          </p>
          {/* 他の詳細情報を追加 */}
        </div>
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
