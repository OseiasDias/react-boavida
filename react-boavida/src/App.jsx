

import './App.css';
import Header from './components/Header/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Hero from './components/Hero.jsx';
import Empresas from './components/Empresas/Empresas.jsx';
import Casas from './components/Casas/Casas.jsx';
import Valores from './components/Valores/Valores.jsx';
import Contactos from './components/Contactos.jsx';
import Pegar from './components/Pegar.jsx';
import Footer from './components/Footer.jsx';





function App() {


  return (
    <div className="App">

      <div id='residencias'>
        <div className='gradiente-branco' />
        <Header />
        <Hero />

      </div>
      <Empresas />
      <div id='empresas'>

        <Casas />
      </div>
     
        <Valores />
    
      <div id='contacto'>
        <Contactos />
      </div>
      <Pegar />
      <Footer />



    </div>
  )
}

export default App
