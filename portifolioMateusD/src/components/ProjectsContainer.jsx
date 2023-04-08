import React from 'react'
import { Link } from 'react-router-dom'
import ButtonMain from './ButtonMain'

const ProjectsContainer = () => {
  const space = {
    paddingBottom: "20px",
  }

  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p style={space}>
        Quer conferir meus projetos prontos ou que estão em andamento? clique no botão abaixo para ser direcionado a minha humilde lista. Obrigado :D
      </p>
      <nav>
       <ButtonMain
        component={Link}
        to="/projetos">
        Ver Projetos
        </ButtonMain>
      </nav>
    </section>
  )
}

export default ProjectsContainer

