import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import State from "./Hooks/State";
import CallBack from "./Hooks/CallbackAndMemo";
import Ref from "./Hooks/Ref";
import ActionState from "./Hooks/ActionState";
import Id from "./Hooks/Id";
import Transition from "./Hooks/Transition";
import Imperative from "./Hooks/ImperativeHandle";
import Deferredvalue from "./Hooks/DeferredValue";
import FormStatus from "./Hooks/FormStatus";
import Fragment from "../src/Components/Fragment"
import RatingComponent from "./Components/Tooltip";
import Strict from "./Components/Strict";
import { lazy, Suspense } from "react";
const Lazy=lazy(()=>import("./Components/Lazy")) 

function App() {
    // Preload function triggered on hover.
    // const preloadLazyPage = () => {
    //   // This triggers the dynamic import ahead of time.
    //   import("./Components/Lazy");
    // };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> 
        {/* <Link to="/lazy" onMouseEnter={preloadLazyPage}>
          Go to Lazy Page
        </Link> */}
      </nav>
<Suspense fallback={<div>Loading lazy...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/state" element={<State />} />
        <Route path="/callback" element={<CallBack />} />
        <Route path="/ref" element={<Ref />} />
        <Route path="/actionState" element={<ActionState />} />
        <Route path="/id" element={<Id />} />
        <Route path="/transition" element={<Transition />} />
        <Route path="/imperative" element={<Imperative />} />
        <Route path="/deferredValue" element={<Deferredvalue />} />
        <Route path="/formStatus" element={<FormStatus />} />
        <Route path="/fragment" element={<Fragment />} />
        <Route path="/tooltip" element={<RatingComponent />} />
        <Route path="/strict" element={<Strict />} />
        <Route path="/lazy" element={<Lazy />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
      </Suspense>
    </Router>
    
  )
}

export default App
