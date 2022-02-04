import { lazy, Suspense } from "react";
import {HashRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import NavGlobal from "Components/NavGlobal";
import ToTop from "Components/ToTop";
import About from "Pages/About";
import Search from "Pages/Search";

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
