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
        
        <Route path="/jackface/search"element={<Search/>}/>
        <Route path="/jackface/share"element={<Share/>}/>
        <Route path="/jackface/about" element={<About/>}/>
        <Route path="/jackface" element={<Home/>}/>
        
        <Route
          path="*"
          element={<Navigate to="/jackface"/>}
         />

      </Routes>
      <ToTop/>
    </Router>
  );
}

export default App;
