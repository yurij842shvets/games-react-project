import "./App.css";
import HomePage from "./HomePageSection.jsx";
import AboutUsPage from "./AboutUsPageSection.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
