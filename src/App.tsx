import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Header from "./Components/Header";
import ToTop from "./Components/ToTop";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Share from "./Pages/Share";

function App() {
  return (
    <Router>
      <Header/>
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
      <ToTop/>
    </Router>
  );
}

export default App;
