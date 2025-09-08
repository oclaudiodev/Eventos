import { BrowserRouter,Routes,Route } from "react-router";
import CadastrarAgenda from './pages/CadastrarAgenda'
import ListarAgenda from "./pages/ListarAgenda";

export default function Navegacao (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path= "/" element={<CadastrarAgenda/>}/>
                <Route path= "/listar" element={<ListarAgenda/>}/>
           </Routes>
        </BrowserRouter>
    )
}