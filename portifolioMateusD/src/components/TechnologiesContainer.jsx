import React from 'react'

import {
    DiHtml5, 
    DiCss3, 
    DiJsBadge, 
    DiNodejsSmall, 
    DiPython, 
    DiReact
} from "react-icons/di";
  
  import "../styles/components/technologiescontainer.sass";
  
  const technologies = [
    { 
      id: "html",
      name: "HTML5",
      describe: "HTML é uma linguagem de marcação utilizada na construção de páginas na Web.",
      icon: <DiHtml5/> 
    },
    { 
      id: "css", 
      name: "CSS3", 
      describe: "Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web.",
      icon: <DiCss3/> 
      },
    { 
      id: "js",
      name: "JavaScript", 
      describe: "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.", 
      icon: <DiJsBadge/> 
    },
    { 
      id: "node", 
      name: "Node.js", 
      describe: "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.",
      icon: <DiNodejsSmall/> 
    },
    { 
      id: "python",
      name: "Python", 
      describe: "Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.", 
      icon: <DiPython/> 
    },
    { 
      id: "react", 
      name: "React", 
      describe: "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.", 
      icon: <DiReact/> 
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