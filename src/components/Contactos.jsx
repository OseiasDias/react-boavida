import '../styles/Contactos.css';
import imgContactos from '../assets/img/contact.jpg';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';
import { Button } from 'react-bootstrap';
import { FaWhatsappSquare } from "react-icons/fa";


const Contactos = () => {


    return (
        <section className="seccao-contacto mt-5">
            <div className="container">

                <div className="row justify-content-between">
                    <div className="col-12 col-lg-5 col-md-11 mt-4">
                        <header className='herderContactos'>
                            <span>Outros Contactos De Usuarios</span>
                            <h6>Contactos Faceis</h6>
                            <p>Entre em Contacto apartir do seguintes Terminais</p>
                        </header>
                        <div className="row justify-content-between">

                            <div className="col-lg-6 p-3">
                                <div className="espaco ">
                                    <div className='d-flex justify-content-start'>
                                        <div className="icones">
                                            <MdCall size={25} />
                                        </div>
                                        <div className="textoItens">
                                            <span>Ligar</span>
                                            <br />
                                            <span>938 629 915</span>
                                        </div>
                                    </div>
                                    <Button className='w-100 d-block mx-auto botaoBtn'>Telefonar</Button>
                                </div>

                            </div>

                            <div className="col-lg-6 p-3">
                                <div className="espaco ">
                                    <div className='d-flex justify-content-start'>
                                        <div className="icones">
                                            <HiChatBubbleBottomCenter size={25} />
                                        </div>
                                        <div className="textoItens">
                                            <span>Mensagem</span>
                                            <br />
                                            <span>938 629 915</span>

                                        </div>
                                    </div>
                                    <Button className='w-100 d-block mx-auto botaoBtn'>Enviar</Button>
                                </div>

                            </div>

                            <div className="col-lg-6 p-3">
                                <div className="espaco ">
                                    <div className='d-flex justify-content-start'>
                                        <div className="icones">
                                            <BsFillChatDotsFill size={25} />
                                        </div>
                                        <div className="textoItens">
                                            <span>Email</span>
                                            <br />
                                            <span className='position-relative'>os@gmail.com</span>
                                        </div>
                                    </div>
                                    <Button className='w-100 d-block mx-auto botaoBtn'>Escrever</Button>
                                </div>

                            </div>

                            <div className="col-lg-6 p-3">
                                <div className="espaco">
                                    <div className='d-flex justify-content-start'>
                                        <div className="icones">
                                            <FaWhatsappSquare size={25} />
                                        </div>
                                        <div className="textoItens">
                                            <span>WhatshApp</span>
                                            <br />
                                            <span>938 629 915</span>
                                        </div>
                                    </div>
                                    <Button className='w-100 d-block mx-auto botaoBtn'>Conectar</Button>
                                </div>

                            </div>


                        </div>
                    </div>
                    <div className="col-12 col-lg-7 col-md-11 mt-3">
                        <img src={imgContactos} alt='...' className='w-100 minhaImg' />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contactos;