import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

function App() {
  return (
    <Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:id/:name/:desc" element={<About />} />
      </Routes>
    </Navigation>
  );
}

export default App;
