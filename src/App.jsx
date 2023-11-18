import Header from "./components/Header";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Footer />
      <Section />
        <AboutMe />
    </div>
  );
}

export default App;
