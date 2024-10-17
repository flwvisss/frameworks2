import { Accordion, Container } from 'react-bootstrap';
import Footer from './components/footer';
import Menu from './components/navbar';

export default function Lista() {
    var noticias = [
        {
            id: 1,
            titulo: "Lançamento de Nova Vacina contra COVID-19",
            conteudo: "Uma nova vacina contra a COVID-19 foi lançada hoje, prometendo maior eficácia e menos efeitos colaterais. Os especialistas afirmam que ela pode ajudar a controlar a disseminação do vírus."
        },
        {
            id: 2,
            titulo: "Conferência sobre Mudanças Climáticas Atraí Líderes Mundiais",
            conteudo: "A Conferência Anual sobre Mudanças Climáticas começou ontem em Paris, reunindo líderes de todo o mundo para discutir soluções para a crise climática."
        },
        {
            id: 3,
            titulo: "Avanços em Tecnologia de Energias Renováveis",
            conteudo: "Pesquisadores anunciaram novos avanços em tecnologias de energia solar e eólica, que prometem tornar essas fontes de energia mais eficientes e acessíveis."
        },
        {
            id: 4,
            titulo: "Descoberta de Novas Espécies na Amazônia",
            conteudo: "Cientistas descobriram várias novas espécies de plantas e animais na Amazônia, destacando a importância da conservação da biodiversidade na região."
        },
        {
            id: 5,
            titulo: "Novo Filme de Ação Bate Recordes de Bilheteira",
            conteudo: "O novo filme de ação, 'Aventuras no Tempo', superou todos os recordes de bilheteira em seu primeiro fim de semana de lançamento."
        }

    ]
    return (
        <>
            <Menu />
            <Container>
                <Accordion>
                    {noticias.map(noticia =>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>{noticia.titulo}</Accordion.Header>
                            <Accordion.Body>
                                 {noticia.conteudo}
                            </Accordion.Body>
                        </Accordion.Item>
                    )}
                </Accordion>
            </Container>
            <Footer />
        </>
    );
}
