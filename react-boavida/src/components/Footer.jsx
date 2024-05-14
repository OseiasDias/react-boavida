import '../styles/Footer.css';
import imgLogo from '../assets/img/logo2.png';

const Footer = () => {

    return(

        <footer className="footer-seccao">
            <div className="container mt-5">
                <div className="row justify-content-between">
                    <div className="col-lg-5 col-md-6 justify-content-start">
                    <img src={imgLogo} alt='logo' width={110}/>
                    <br/>
                        <span className='melhp'>Volte a sizitar a HomWiz sempre</span>
                        <br />
                        <span className='melhp'>O Melhor que  a HomWiz</span>
                    </div>

                    <div className="col-lg-5 col-md-6 justify-content-end ladoDireito">
                        
                        <h6>Informação</h6>

                        <span>Luanda, Viana-zango</span>

                        <ul className='listaMenu'>
                            <li><a href=''>Propriedade</a></li>
                            <li><a href=''>Produtos</a></li>
                            <li><a href=''>Serviços</a></li>
                            <li><a href=''>Sobre Usuario</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );

}

export default Footer;