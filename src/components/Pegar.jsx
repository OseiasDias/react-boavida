import '../styles/Pegar.css';
import { Button } from 'react-bootstrap';



const Pegar = () => {

    return (
        <section className="seccao-pegar">
            <div className="container">
                <div className="row minhaLinha mt-5">

                    <div className="col-lg-8 mx-auto text-center">
                        <span className='primeiroSpan'>Começe Agora na Homyz</span>

                        <br />

                        <span className='segundoSpan'>Procure sua Residência Agora</span>
                        <br/>
                        <Button className='newBtn '> <a href='mailto:oseiasdias1953@gmail.com'>Agora</a></Button>
                    </div>

                </div>
            </div>
        </section>
    );

}

export default Pegar;