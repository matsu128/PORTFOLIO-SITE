import React from 'react';
import './ProjectList.css';
import { Link } from 'react-router-dom';
import ProjectSlider from './ProjectSlider';

const ProjectList = () => {
  const projects = [
    {
      title: 'カレンダーアプリ',
      description: 'This is my first project. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '/project1',
    },
    {
      title: '商品情報管理システム',
      description: 'This is my second project. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: '/project2',
    },
    {
      title: 'レビューアプリ',
      description: 'This is my third project. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: '/project3',
    },
    // 他のプロジェクトを追加
  ];

  return (
    <div className="project-list" id="projects">
      <ProjectSlider projects={projects} />
      
      {/* プロジェクトごとのリンクを作成 */}
      {projects.map((project, index) => (
        <Link to={project.link} key={index} className="slider-link">
          {project.title}
        </Link>
      ))}
    </div>
  );
};

export default ProjectList;
