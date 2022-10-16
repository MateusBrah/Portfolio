import React from 'react'
import ProjectsContainer from './ProjectsContainer';
import AboutContainer from './AboutContainer';
import TechnologiesContainer from './TechnologiesContainer';

import "../styles/components/maincontent.sass"


const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer/>
      <TechnologiesContainer/>
      <ProjectsContainer/>
    </main>
  )
}

export default MainContent;