import React from "react";
import "./App.css";
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {Work} from "./Work/Work";
import {HireMe} from "./HireMe/HireMe";
import {Contact} from "./Contacts/Contact";
import {Footer} from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
        <Main/>
        <Skills/>
      <Work/>
        <HireMe/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
