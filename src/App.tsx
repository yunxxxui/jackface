import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./Components/Header";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Search from "./Pages/Search";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/search"element={<Search/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
