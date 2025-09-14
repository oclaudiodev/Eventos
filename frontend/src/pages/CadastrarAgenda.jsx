import { useState } from "react";
import api from "../api";
import { Link } from "react-router";
import './cadastro.scss';

export default function ListarAgenda() {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [dataEvento, setDataEvento] = useState('');

    async function criarEvento() {
        await api.post('/eventos', {
            titulo,
            descricao,
            dataevento: dataEvento
        })
        .then(() => alert('Evento criado!'))
        .catch(e => alert(e.response?.data?.erro || "Erro ao criar evento."));
    }

    return (
        <div className="page">
            <div className="conteudo">
                <div className="cabecalho">
                    <img className="logo" src="/src/assets/images/logoP.png" height="90px" alt="logoP" />
                    <h1>Agenda Frei</h1>
                    <div className="navegacao">
                        <Link to ={'/listar'}><h1>Inicio</h1></Link>
                        <Link to ={'/'}><h1>Cadastro</h1></Link>
                    </div>
                </div>

                <h1 className="espaco">Cadastrar Evento</h1>

                <div className="formulario">
                    <div>
                        <label>Título</label>
                        <br />
                        <input value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                    </div>
                    <br />
                    <div>
                        <label>Descrição</label>
                        <br />
                        <input value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                    </div>
                    <br />
                    <div>
                        <label>Data do Evento</label>
                        <br />
                        <input value={dataEvento} onChange={(e) => setDataEvento(e.target.value)} />
                    </div>
                    <br />
                    <div className="butoes">
                        <p>id:</p>
                        <button onClick={criarEvento}>Criar</button>
                        <button>Salvar</button>
                    </div>
                    <br />
                    <Link to="/listar">Veja todos os Eventos</Link>
                </div>
            </div>

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
