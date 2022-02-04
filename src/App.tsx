import { lazy, Suspense } from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import NavGlobal from "./Components/NavGlobal";
import ToTop from "./Components/ToTop";
import About from "./Pages/About";
import Search from "./Pages/Search";
import Share from "./Pages/Share";

const Home = lazy(()=>
  import("./Pages/Home")
)

function App() {
  return (
    <Router>
      <NavGlobal/>
      <Suspense fallback={<><div>loading..</div></>}>
        <Routes>
          
          <Route path="/search"element={<Search/>}/>
          <Route path="/share"element={<Share/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={<Home/>}/>
          <Route
            path="*"
            element={<Navigate to="/"/>}
          />

        </Routes>
      </Suspense>
      <ToTop/>
    </Router>
  );
}

export default App;
