import { Container } from "react-bootstrap";
import Menu from "./components/navbar";
import Footer from "./components/footer";
import Cardprod from "./cardprod";

export default function Pesportes(params){
    return<>
        <Menu />
        <Container className="boirder border-2 rounded border-primary col-sm-6 text-center">Lista de Produtos de Esportes</Container>
        <Container>
            <div className="row">
                <Cardprod titulo={"Bola de Volei"} descricao={"bola"} preco={"$90.00"} />
                <Cardprod titulo={"Bola de Futsal"} descricao={"bola"} preco={"$90.00"} />
                <Cardprod titulo={"Bola de Handball"} descricao={"bola"} preco={"$90.00"} />
            </div>
        </Container>
        <Footer />
    </>
}