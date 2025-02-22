import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Login from '../src/components/Login/Login.jsx';
import "./global.scss";
import Reembolso from "../src/components/Reembolso/Reembolso.jsx";
import Solicitacao from "../src/components/Solicitacao/Solicitacao.jsx";
import CriarConta from "./components/CriarConta/CriarConta.jsx";

function App() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/criarconta" element={<CriarConta/>}/>
                <Route path="/reembolso" element={<Reembolso/>}/>
                <Route path="/solicitacao" element={<Solicitacao/>}/>
                <Route path="/reembolso" element={<Reembolso/>}/>
            </Routes>
        </Router>
    )
}

export default App;