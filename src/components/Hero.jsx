import ImgHero from '../assets/img/hero-image.png';
import '../styles/Hero.css';
import { HiLocationMarker } from "react-icons/hi";

import CountUp from "react-countup"

 const Hero = () =>{

    return(

        <section className="hero-wrapper-all paddings innerWidth hero-container flexCenter">
            <div className="container">

                <div className="row">
                    <div className="col-lg-11 hero-wrapper justify-content-center">
                        
                        <div className="row justify-content-between">
                            <div className="col-12 pt-5 col-md-6 col-lg-5 hero-esquerda float-lg-start">
                                   
                                    <h1 className='mt-5'>Descubra <br/> o imóvel mais<br/> adequado
                                    
                                     </h1>
                                    <div className='texto my-4'>
                                        <span className='spanPacote'>Procura uma variedade de imoveis temos para si a melhor solução</span>
                                        <span className='spanPacote'>Evite dificuldade na procura da sua residência</span>
                                    </div>

                                    <div id="enviar" className='w-100 bg-white  mt-4'> 
                                        <HiLocationMarker color='blue' size={30} className='float-start icon' />
                                        <input type='text'  className='border-0 inputText '/>
                                        <button className="botao float-end novoBtn px-4 ">
                                            Pesquisar
                                        </button>

                                    </div>

                                    <div className="status justify-content-between d-flex mt-5">
                                        <div className="colStar me-2">
                                            <span className='spanPrimeiro'>
                                                <CountUp  start={1} end={9000} duration={4}/>
                                                <span>+</span>
                                            </span>
                                            <br/>
                                            <span className='spanPacote'>Pacote Maximo</span>
                                        </div>

                                        <div className="colStar me-2">
                                            <span className='spanPrimeiro'>
                                                <CountUp  start={1} end={2000} duration={4}/>
                                                <span>+</span>
                                            </span>
                                            <br/>
                                            <span className='spanPacote'>Pacote Médio</span>
                                        </div>

                                        <div className="colStar me-2">
                                            <span className='spanPrimeiro'>
                                                <CountUp  start={1} end={6000} duration={4}/>
                                                <span>+</span>
                                            </span>
                                            <br/>
                                            <span className='spanPacote'>Pacote Minimo</span>
                                        </div>
                                    </div>


                            </div>
                            <div className="col-12 col-md-6 col-lg-6 hero-direita pt-5">
                                <div className="hero-imagem float-lg-end ">
                                    <img src={ImgHero} alt='Imovel' className='w-100 propria-imagem'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero