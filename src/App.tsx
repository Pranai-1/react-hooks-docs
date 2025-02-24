import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import State from "./Hooks/State";

function App() {


  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> 
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/state" element={<State />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  )
}

export default App
