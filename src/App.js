
import './App.css';
import Header from './component/Navbar/Header';
import { BrowserRouter, Switch } from 'react-router-dom'
import Service from './component/Navbar/Service';
import Ma from './component/Navbar/Ma';
import Dheeex from './component/Navbar/Dheeex';
import Footer from './component/Navbar/Footer';
// import Acco from './component/Navbar/Acco';
// import Accordion from './component/Navbar/Accordion';
// import Blog from './component/Navbar/Blog';





function App() {
  return (
    <BrowserRouter>
      <Header />
      <Service />
      <Ma />
      <Dheeex /> 
      <br />    <br />   <br />   <br />   <br />   <br />   <br />   <br />   <br />   <br />   <br />   <br />   <br />   <br />   <br />   <br />   <br />   <br />   <br />   <br />
      <Footer />
      {/* <Acco/> */}
      {/* <Blog/> */}
       {/* <Accordion />  */}
      
      <Switch />

      <Switch />
    </BrowserRouter>
  );
}


export default App;
