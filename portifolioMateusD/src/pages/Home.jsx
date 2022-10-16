import MainContent from "../components/MainContent";

import Sidebar from "../components/Sidebar";

import "../styles/components/app.sass"

const Home = () => {
  return (
    <div>
      <div id="portfolio">
          <h1>Mateus Damasceno</h1>
          <Sidebar />
          <MainContent/>
      </div>
    </div>
  )
}

export default Home;