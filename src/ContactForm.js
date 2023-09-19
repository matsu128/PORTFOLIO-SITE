import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactForm.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 名前とメールのバリデーション
    let isNameValid = true;
    let isEmailValid = true;

    if (name.trim() === '') {
      setNameError('名前を入力してください');
      isNameValid = false;
    } else {
      setNameError('');
    }

    if (email.trim() === '') {
      setEmailError('メールアドレスを入力してください');
      isEmailValid = false;
    } else {
      // 簡単なメールアドレスのバリデーション
      const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailPattern.test(email)) {
        setEmailError('有効なメールアドレスを入力してください');
        isEmailValid = false;
      } else {
        setEmailError('');
      }
    }

    // バリデーションが成功した場合に送信
    if (isNameValid && isEmailValid) {
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      setName('');
      setEmail('');
      setMessage('');
      navigate('/contact-success', { state: { name, email, message } });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // スクロール位置が画面の中央を超えたらコンポーネントを表示
      const element = document.querySelector('.contact-form');
      if (element) {
        const elementPosition = element.getBoundingClientRect();
        if (elementPosition.top <= window.innerHeight / 2) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    // 初期表示時にもスクロール位置をチェック
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`contact-form ${isVisible ? 'visible' : ''}`} id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="error-message">{nameError}</div>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <div className="error-message">{emailError}</div>
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
