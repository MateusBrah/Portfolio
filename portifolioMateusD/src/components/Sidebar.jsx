import Avatar from "../assets/img/eu.jpeg"
import SocialMedia from './SocialMedia'
import InformationContainer from './InformationContainer'
import '../styles/components/sidebar.sass'
import ButtonMain from "./ButtonMain"




const Sidebar = () => {

  const btnSpace = {
    width: "200px",
    textAlign: "center",
    marginTop: "35px",
  }

  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Foto de Mateus"/>
      <p className="title">Desenvolvedor</p>
      <SocialMedia/>
      <InformationContainer/>
      <ButtonMain 
        style={btnSpace}
        component="a"
        href="#"
        target="_blank"
        id="btn">
        Download currículo
      </ButtonMain>
      <ButtonMain 
        style={btnSpace}
        component="a"
        href="https://cursos.alura.com.br/user/mateus-damasceno0/fullCertificate/44e70dae939e10eca97b61d314625a5f"
        target="_blank"
        id="btn">
        Certificados Alura
      </ButtonMain>
      <ButtonMain 
        style={btnSpace}
        component="a"
        href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-2e470f10-93c2-485c-a571-c7846bd719b3.pdf"
        target="_blank"
        id="btn">
        Certificados Udemy
      </ButtonMain>
    </aside>
  )
};

export default Sidebar;