// React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";

// Styles
import "./styles/components/app.sass";

function App() {


  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<ProjectsPage />} />
        </Routes>
      </Router>

  )
}

export default App
