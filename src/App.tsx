import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import BrandLogo from "./components/BrandLogo/BrandLogo";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="relative">
      <NavBar />
      <HomePage />
      <BrandLogo />
      <Products />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
