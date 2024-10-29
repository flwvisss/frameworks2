import { Container } from "react-bootstrap"
import Menu from "./components/navbar"
import Footer from "./components/footer"
import { useEffect, useState } from "react";

export default function Promessa() {
    const [divida, setDivida] = useState("")
    useEffect(() => { 
        setTimeout(() => {
            document.title = "Minha Promessa"
            setDivida(saoLonguinho("da minha vida"))
        }, 4000);
    })
    return <>
        <Menu />
        <Container>
            Promessas {(divida==="" ? <img src = "gato.gif" width={40} height={40}/> : divida)}
        </Container>
        <Footer />
    </>
}
function saoLonguinho(texto){
    setTimeout(() => {
        return(texto)
    }, 2000);
}