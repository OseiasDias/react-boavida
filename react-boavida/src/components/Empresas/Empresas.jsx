import '../../styles/empresas/Empresas.css';
import Img1 from '../../assets/img/prologis.png';
import Img2 from '../../assets/img/realty.png';
import Img3 from '../../assets/img/tower.png';
import Img4 from '../../assets/img/equinix.png';

const Empresas = () => {

    return (
        <>
            <section className="c-wrapper container">
                <div className="row mt-5">
                    
                        <div className='col-lg-3 col-md-6 col-6'>
                            <img src={Img1} alt='...' className='Imagens-marcas w-75 mx-auto d-block' />
                        </div>
                        <div className='col-lg-3 col-md-6 col-6'>
                            <img src={Img2} alt='...' className='Imagens-marcas w-75 mx-auto d-block' />
                        </div>
                        <div className='col-lg-3 col-md-6 col-6'>
                            <img src={Img3} alt='...' className='Imagens-marcas w-75 mx-auto d-block' />
                        </div>
                        <div className='col-lg-3 col-md-6 col-6'>
                            <img src={Img4} alt='...' className='Imagens-marcas w-75 mx-auto d-block' />
                        </div>

                    
                </div>
            </section>
        </>
    )
}

export default Empresas;