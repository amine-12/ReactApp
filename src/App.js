import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Homepage/Navbar'
import ShowCase from './Components/Homepage/Showcase'
import Features from './Components/Homepage/Features'
import Footer from './Components/Homepage/Footer'


function App() {
  return (
    <div>
      <NavBar/>
      <ShowCase/>
      <Features/>
      <Footer/>
    </div>
  );
}

export default App;
