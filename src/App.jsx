import React, {useContext} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import PageNotFound from './Routes/PageNotFound';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { ContextGlobal } from './Components/utils/global.context';
import "./App.css";

function App() {
  const { state, dispatch } = useContext(ContextGlobal);

  const themeClass = state.theme === "light" ? "light-theme" : "dark-theme";

   // Función para cambiar el tema
   const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <Router>
     <div className={themeClass}> 
      <Navbar toggleTheme={toggleTheme}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dentist/:id" element={<Detail />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/pageNotFound" element={<PageNotFound />} />
      </Routes>
      <Footer />
     </div>
    </Router>
  );
}

export default App;