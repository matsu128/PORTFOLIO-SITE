// import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import MainPage from './MainPage';
import ContactSuccess from './ContactSuccess';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
// import BackgroundCircle from './BackgroundCircle';
//import LoginForm rom './LoginForm';
import './App.css';


const App = () => {

  return (
    <Router>
      <div class="bodyAll">
        <Header />
        <Routes>
          {/* メインページ */}
          <Route path="/" element={<MainPage />} />

          {/* コンタクトフォームを送信した後の成功ページ */}
          <Route path="/contact-success" element={<ContactSuccess />} />
          <Route path="/project1/" element={<Project1 />} />
          <Route path="/project2/" element={<Project2 />} />
          <Route path="/project3/" element={<Project3 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
