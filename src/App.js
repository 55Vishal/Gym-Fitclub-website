import './App.css';
import Footer from './components/Footer/Footer';
import About from './components/Header/About';
import Hero from './components/Hero';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Router from './components/Router/Router';
import Testimonials from './components/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
         <Hero/>
         <Programs/>
         <Reasons/>
         <Plans/>
         <Testimonials/>
         <Join/>
         <Footer/>

    </div>
  );
}

export default App;
