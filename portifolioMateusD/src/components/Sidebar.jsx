import Avatar from "../assets/img/eu.jpeg"
import SocialMedia from './SocialMedia'
import InformationContainer from './InformationContainer'
import '../styles/components/sidebar.sass'
import ButtonMain from "./ButtonMain"


const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Foto de Mateus"/>
      <p className="title">Desenvolvedor</p>
      <SocialMedia/>
      <InformationContainer/>
      <ButtonMain 
        component="a"
        href="#"
        target="_blank"
        id="btn">
        Download currículo
      </ButtonMain>
    </aside>
  )
};

export default Sidebar;