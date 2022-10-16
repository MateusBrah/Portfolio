import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'
import '../styles/components/socialmedia.sass'

const socialNetworks = [
    { name: "linkedin", link: "https://www.linkedin.com/in/mateusdamasceno/", icon: <FaLinkedinIn/> },
    { name: "github", link: "https://github.com/MateusBrah", icon: <FaGithub/> },
    { name: "instagram", link: "https://www.instagram.com/mateus_damasceno/", icon: <FaInstagram/> },
];

const SocialMedia = () => {
  return (
    <section id="social-networks">
        {socialNetworks.map((network) => (
            <a target="_blank" href={network.link} className='social-btn' id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>
  )
};

export default SocialMedia;