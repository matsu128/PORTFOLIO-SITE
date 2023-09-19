import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ContactSuccess.css';

const ContactSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate(); // useNavigateフックを使ってリダイレクトを行うための関数を取得
  const { name, email, message } = location.state || {};

  const handleGoBack = () => {
    // 「/」へのリダイレクトを行う
    navigate('/');
  };

  return (
    <div className="container">
      <div className="header">Thank you for contacting me!</div>
      <div className="fade-in">
        <h2>Contact Details</h2>
        {name && <p>Name: {name}</p>}
        {email && <p>Email: {email}</p>}
        {message && <p>Message: {message}</p>}
        <button onClick={handleGoBack}>戻る</button>
      </div>
    </div>
  );
};

export default ContactSuccess;
