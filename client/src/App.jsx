import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound"; 
import Home from "./pages/Home"; 
import Navbar from "./components/Navbar";


function App() {
  return (
      <Router>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  );
}


export default App;