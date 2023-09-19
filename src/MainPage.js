import React from 'react';
import Banner from './Banner';
import ProjectList from './ProjectList';
import SkillSection from './SkillSection';
import ContactForm from './ContactForm';
import  Footer from './Footer';

const MainPage = () => {
  return (
    <div>
      <Banner />
      <ProjectList />
      <SkillSection />
      <ContactForm />
      < Footer />
    </div>
  );
};

export default MainPage;
