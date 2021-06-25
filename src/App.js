
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
