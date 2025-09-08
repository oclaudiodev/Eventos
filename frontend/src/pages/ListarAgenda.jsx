import { useState } from "react";
import api from "../api";
import { Link } from "react-router";
import './listar.scss'

export default function ListarAgenda() {
    const [agenda, setAgenda] = useState([])

    async function carregarAgendaAxios() {
        await api.get('/eventos')
            .then(resposta => setAgenda(resposta.data))
    }


    return (
        <div>
            <div className="cabecalho">
                <img className="logo" src="/src/assets/images/logoP.png" height='90px' alt="logoP" />
                <h1>Agenda Frei</h1>
                <div className="navegacao">
                    <h1>Inicio</h1>
                    <h1>Cadastro</h1>
                </div>
            </div>
            <h1>Listar Agenda - CRUD</h1>

            <main>
                <button className="butao" onClick={carregarAgendaAxios}>Consultar</button>
                <div className="cardM">
                    {
                        agenda.map(evento => {
                            return <div className="card">
                                <h2>{evento.titulo}</h2>
                                <p>{evento.descricao}</p>
                                <h3>{evento.dataevento}</h3>
                            </div>
                        })
                    }
                </div>
                <br></br>
                <Link to={'/'}>Crie um novo evento</Link>
                <br />
                <br />
            </main>

            <footer>
                <div className="rodape">
                    <img className="logo" src="/src/assets/images/logoB.png" alt="logoB.png" />
                    <div>
                        <h3>Contato</h3>
                        <p>(11)95100-8673</p>
                        <p>7claudiosouza@gmail.com</p>
                    </div>
                    <div>
                        <h3>Desenvolvido Por</h3>
                        <p>José Claudio de Souza Silva</p>
                    </div>
                    <div>
                        <h3>Turma</h3>
                        <p>Informática - A</p>
                    </div>
                </div>
                <h3 className="fim">2025 @ Instituto Nossa Senhora de Fátima</h3>
            </footer>
            
        </div>
    );
}