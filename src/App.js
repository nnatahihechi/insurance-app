import './App.css';
import About from './containers/about';
import Contact from './containers/contact';
import Footer from './containers/footer';
import Hero from './containers/hero';
import NavBar from './containers/navBar';
import Services from './containers/services';
import Support from './containers/support';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Services/>
      <About/>
      <Support/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
