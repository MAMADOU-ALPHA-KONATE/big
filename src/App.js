//import  './App.css';
import './components/service/service.css';
import Service from './components/service/service';
import Body from './components/body/body';
import Card from './components/card/card';
import Header from './components/header/header';
import About from './components/about/about';
import Footer from './components/footer/footer'; 
import Controller from './components/controller/controller';

    

function App() {
  return (
    <div className='container'>
    <Header/> 
    <Service/>
    <Body/>
    <Card/>
    <About/>
    <Controller/>
    <Footer/>
   
    
    
    
    
 
    </div>
    );
}

export default App;
