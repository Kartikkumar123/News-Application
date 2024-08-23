import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { useState } from "react";

function App() {

  let [language,setLanguage] = useState("hi")
  let [search,setSearch] = useState("")

  let changeLanguage = (data) =>{
    setLanguage(data)
  }
  let changeSearch = (data) =>{
    setSearch(data)
  }
  return (
    <>
      <BrowserRouter>
      <Navbar changeLanguage={changeLanguage} changeSearch={changeSearch}/>
        <Routes>
          <Route path="" element={<Home language={language} q={search?search:"All"} />} />
          <Route path="/All" element={<Home language={language} q={search?search:"All"}/>} />
          <Route path="/Stock" element={<Home language={language} q={search?search:"Stock"}/>} />
          <Route path="/Politics" element={<Home language={language} q={search?search:"Politics"}/>} />
          <Route path="/Education" element={<Home language={language} q={search?search:"Education"}/>} />
          <Route path="/Entertainment" element={<Home language={language} q={search?search:"Entertainment"}/>} />
          <Route path="/Crime" element={<Home language={language} q={search?search:"Crime"}/>} />
          <Route path="/World" element={<Home language={language} q={search?search:"World"}/>} />
          <Route path="/India" element={<Home language={language} q={search?search:"India"}/>} />
          <Route path="/Sports" element={<Home language={language} q={search?search:"Sports"}/>} />
          <Route path="/Science" element={<Home language={language} q={search?search:"Science"}/>} />
          <Route path="/Cricket" element={<Home language={language} q={search?search:"Cricket"}/>} />
          <Route path="/t20" element={<Home language={language} q={search?search:"T20 World Cup"}/>} />
          <Route path="/Technology" element={<Home language={language} q={search?search:"All"}/>} />
          <Route path="/Jokes" element={<Home language={language} q={search?search:"Jokes"}/>} />

        </Routes>
        <Footer />
      </BrowserRouter>
      </>
  );
}

export default App;
