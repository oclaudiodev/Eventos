import { useState } from "react";
import api from "../api";
import { Link } from "react-router";
import './cadastro.scss'


export default function ListarAgenda() {
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [dataEvento, setDataEvento] = useState('')

    async function criarEvento() {
        await api.post('/eventos', {
            "titulo": titulo,
            "descricao": descricao,
            "dataevento": dataEvento
        })
            .then(() => alert('Evento criado!'))
            .catch(e => alert(e.response.data.erro))
    }

    return (
        <div>
            <h1>Cadastrar Evento</h1>
            
            <div className="formulario">
                <div>
                    <label>Titulo</label>
                    <input value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                </div>
                <br />
                <div>
                    <label>Descricao</label>
                    <input value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                </div>
                <br />
                <label>Data do Evento</label>
                <input value={dataEvento} onChange={(e) => setDataEvento(e.target.value)} />
                <br />
                <button onClick={criarEvento}>Criar</button>
                
                <br></br>
                <Link to={'/listar'}>Veja todos os Eventos</Link>
                
            </div>

        </div>
    );
}