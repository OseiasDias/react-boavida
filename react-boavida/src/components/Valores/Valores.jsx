import '../../styles/valores/Valores.css';
{/*import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AcordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessiblie-accordion';
import {MdOutlineArrowDropDown} from 'react-icones/md';
import "react-accessiblie-accordion/dist/fancy-example.css";
*/}
import imgNova from '../../assets/img/value.png';
import dados from '../../utils/ValorAcordion.jsx'
import Accordion from 'react-bootstrap/Accordion';



const Valores = () => {

    return (
        <section className="seccao-valores">

            <div className="container mt-5">
                <div className="row justify-content-between">
                    <div className="col-12-col-md-6 col-lg-5 div-imagem">
                        <img src={imgNova} alt='...' className='outraImg mx-auto d-block' />
                    </div>
                    <div className="col-12-col-md-6 col-lg-7 ">
                        <header className='intro mt-2'>
                            <span>Outros Valores</span>
                            <h6>Pague a Bom Preco</h6>
                            <p>
                                Oferece comportamento responsivo, reprodução automática e várias opções de animação
                            </p>
                        </header>

                        <div className='w-100'>
                            <Accordion defaultActiveKey={0} flush className='acoordion1'>

                                {
                                    dados.map((item, i) => {

                                        return (
                                            <>
                                                <Accordion.Item eventKey={i} className='acoordion'>
                                                    <Accordion.Header className='acoordionHeader'><span className='spanEspecial'>{item.icon}</span> <span className='text-center  d-block w-100 m-auto'>{item.heading}</span></Accordion.Header>
                                                    <Accordion.Body className='acoordionBody'>


                                                        <p className='text-justify'>
                                                            {item.texto}</p>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </>
                                        );
                                    })
                                }

                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Valores;