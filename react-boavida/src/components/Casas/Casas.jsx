import '../../styles/casas/Casas.css';

{/**import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'; */ }

import img1 from '../../assets/img/r1.png';
import img2 from '../../assets/img/r2.png';
import img3 from '../../assets/img/r3.png';

const Casas = () => {

    return (


        <section className="houses mt-4">
            <div className=" container mt-5">
                <div className="row">
                    <span className='span1'>Melhores Casas</span>
                    <h3 className='hTres1'>Residencias Populares</h3>
                </div>





                <div className="row ">




                    <div className='divUnica col-lg-3 col-md-6 col-12  '>
                        <div id='item'>
                            <img src={img1} alt="Casa T3 Com Jardin" className='w-100'/>
                        </div>
                        <div className='text-item'>
                            <h6>Casa T3 Com Jardim</h6>
                            <h6><b>Preço </b>25000 <span>Kz</span></h6>
                            <h6><b>Detalhes</b> Jardin 4x5, Alvenaria</h6>
                        </div>
                    </div>






                    <div className='divUnica col-lg-3 col-md-6 col-12  '>
                        <div id='item'>
                            <img src={img2} alt="Casa T3 Com Jardin" className='w-100'/>
                        </div>
                        <div className='text-item'>
                            <h6>Casa V4 Com Piscina</h6>
                            <h6><b>Preço </b>35000 <span>Kz</span></h6>
                            <h6><b>Detalhes</b> Piscina 4x6</h6>
                        </div>
                    </div>





                    <div className='divUnica col-lg-3 col-md-6 col-12'>

                        <div id='item'>
                            <img src={img3} alt="Casa T3 Com Jardin"  className='w-100'/>
                        </div>
                        <div className='text-item'>
                            <h6>Casa T3 Com Jardim</h6>
                            <h6><b>Preço </b>25000 <span>Kz</span></h6>
                            <h6><b>Detalhes</b> Jardin 4x5, Alvenaria</h6>
                        </div>
                    </div>




                    <div className='divUnica col-lg-3 col-md-6 col-12  '>
                        <div id='item'>
                            <img src={img1} alt="Casa T3 Com Jardin" className='w-100'/>
                        </div>
                        <div className='text-item'>
                            <h6>Casa V6 Duplex</h6>
                            <h6><b>Preço </b>55000 <span>Kz</span></h6>
                            <h6><b>Detalhes</b> Jardin 4x5, Alvenaria</h6>
                        </div>
                    </div>






                </div>



            </div>
        </section >

    )
}

export default Casas;