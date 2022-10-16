import React from 'react'

import '../styles/components/projectspagecontainer.sass'
import ButtonMain from './ButtonMain'


const projectsSave = [
    {
        id: "projetoPortfolio",
        name: "Portfólio",
        describe: "Me refiro a este portfólio, criado com o intuito de colocar em prática meus estudos.",
        ling: "Node.js, React, JavaScript, HTML5 e CSS3/SASS ",
    },
    {
        id: "projetoLoginInstagram",
        name: "Login Instagram",
        describe: "Projeto focado aos estudos, uma tentativa de recriar uma tela de Login do Instagram",
        ling: "HTML5 e CSS",
    },
    { 
        id: "projetologinpython",
        name: "Login App Desktop",
        describe: "O intuito desse projeto foi criar uma tela de login desktop",
        ling: "Python",
      },
]

const btnSpace = {
    width: "200px",
    textAlign: "center",
}

const ProjectsPageContainer = () => {
  return (
    <section className='projects-add'>
        <div className='projects-grid'>
            {projectsSave.map((proje) => (
                <div className="projects-card" id={proje.id} key={proje.id}>
                    <ButtonMain
                    style={btnSpace}
                    component="a"
                    href="#"
                    >{proje.name}</ButtonMain>
                    <div className='projects-info'>
                        <p>{proje.describe}</p>
                        <p>Oque usei: {proje.ling}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default ProjectsPageContainer