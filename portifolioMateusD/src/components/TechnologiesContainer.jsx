import React from 'react'

import {
    DiHtml5, 
    DiCss3Full, 
    DiJsBadge, 
    DiNodejsSmall, 
    DiPython, 
    DiReact,
    DiJqueryLogo,
    DiJava,
} from "react-icons/di";

  import {SiTypescript, SiJquery} from "react-icons/si"
  
  import "../styles/components/technologiescontainer.sass";
  
  const technologies = [
    { 
      id: "react", 
      name: "React", 
      describe: "Participei da criação e atuo na manutenção de duas aplicações PWA de Onboarding da minha empresa, visando facilitar a contratação de novos colaboradores, tendo em vista a grande demanda interna da empresa, que atua na área de construção civil. Mensalmente temos em torno de 700 a 1200 contratações.", 
      icon: <DiReact/> 
    },
    { 
      id: "node", 
      name: "Node.js", 
      describe: "O Node.js faz parte do meu dia a dia, com a criação e manutenção de APIs e ChatBot, possuo experiencia com: Express, Axios, Restify, Swagger, Dotenv, JWT, PdfMake, Nodemon, Jest, Oauth e Microsoft Bot Framework.",
      icon: <DiNodejsSmall/> 
    },
    { 
      id: "TypeScript",
      name: "TypeScript",
      describe: "Além de usá-la na criação de novos projetos, atualmente na empresa que atuo estamos migrando todos os projetos possíveis para o TypeScript, para que tenhamos uma melhor performance no código como um todo, e para que diminua as chances de possíveis bugs por problema de tipagem.",
      icon: <SiTypescript/> 
    },
    { 
      id: "java",
      name: "Java", 
      describe: "Atuo na manutenção e criação de Formulários em nosso Business Process Management (Fluig), utilizamos Java e JavaScript (JQuery) em conjunto, para atender os requisitos de arquitetura",
      icon: <DiJava/> 
    },
    { 
      id: "css", 
      name: "CSS3", 
      describe: "O CSS é constante durante minha jornada, utilizo o Bootstrap e MUI em diferentes projetos. Em projetos pessoais gosto de complementar com o SassScript, pois facilita a componentização de Styles.",
      icon: <DiCss3Full/> 
    },
    { 
      id: "JQuery",
      name: "jQuery", 
      describe: "Como dito anteriormente utilizo o Jquery constantemente, tornando a programação mais ágil e simplificada.", 
      icon: <SiJquery/> 
    },
  ];
  
const TechnologiesContainer = () => {
  return (
  <section className="technologies-container">
    <h2>Tecnologias</h2>
    <div className="technologies-grid">
      {technologies.map((tech) => (
        <div className="technology-card" id={tech.id} key={tech.id}>
          {tech.icon}
          <div className="technology-info">
            <h3>{tech.name}</h3>
            <p>{tech.describe}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
  )
};

export default TechnologiesContainer;