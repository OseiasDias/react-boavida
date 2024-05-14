
import '../../styles/header/Header.css';
import Imglogo from '../../assets/img/logo.png';
import { HiMenuAlt3 } from "react-icons/hi";


const Header = () => {



    return (

        <section className="h-wrapper">

            <nav className="navbar navbar-expand-lg sticky-top h-menu ">
                <div className="container">
                    <a className="navbar-brand justify-content-start " href="#residencias">
                        <img src={Imglogo} alt='logo' width={100} />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <HiMenuAlt3 className='iconMenu' />
                        </button>

                  
                    <div className="collapse  navbar-collapse justify-content-end  " id="navbarNav">
                        <ul className="navbar-nav meuMenu">
                            <li className="nav-item">
                                <a className="nav-link" href="#residencias">

                                    Residências

                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#empresas">
                                    Nosso Valor


                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contacto">
                                    Contate-nos
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#empresas">
                                    Iniciar
                                </a>
                            </li>
                            <button className='botao ms-lg-2'>

                                <a href="#contacto">Contacto</a>

                            </button>
                        </ul>


                    </div>
                </div>
            </nav>


        </section>

    )
}

export default Header

