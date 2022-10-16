import React from 'react'
import { Link } from 'react-router-dom'
import ButtonMain from '../components/ButtonMain'
import ProjectsContent from '../components/ProjectsContent'

import '../styles/components/projectpage.sass'

const ProjectsPage = () => {
  return (
    <div>
      <div id='projectPage'>
      <h1>
        Projetos
      </h1>
        <ButtonMain
          component={Link}
          className="btn-home"
          to="/">
          Voltar
        </ButtonMain>
      </div>
      <ProjectsContent/>
    </div>
  )
}

export default ProjectsPage