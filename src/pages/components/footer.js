import { Container } from "react-bootstrap"
import style from "@/styles/Footer.module.css"

export default function Footer() {
    return <>
    <Container className={`${style.degrademenu} position-button bottom-0 start-50 degrademenu rounded-2 border border-dark border border-2`}>
        <footer className="px-3 rounded">
            <ul className="nav justify-content-center border-bottom pb-1 mb-2">
                <li className="nav-item">Disciplina de Frameworks2</li>
            </ul>
            <p className="text-center">&copy; 2024 IFMS</p>
        </footer>
    </Container>
    </>
}
