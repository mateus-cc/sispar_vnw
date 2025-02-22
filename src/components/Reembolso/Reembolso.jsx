import { useNavigate } from "react-router-dom";
import NavBar from "../navBar/NavBar.jsx";
import styles from "./Reembolso.module.scss";
import iconHome from "../../assets/Reembolso/homeHeader.png";
import seta from "../../assets/Reembolso/Vector.png";
import solicitarReembolsoIgm from "../../assets/Reembolso/solicitarReembolso.png";
import verificarAnaliseIgm from "../../assets/Reembolso/verificarAnalise.png";
import historicoImg from "../../assets/Reembolso/historico.png";
import solicitadosIcon from "../../assets/Reembolso/solicitados.png";
import analiseIcon from "../../assets/Reembolso/emAnalise.png";
import aprovadoIcon from "../../assets/Reembolso/aprovados.png";
import rejeitadoIcon from "../../assets/Reembolso/rejeitados.png";
import atualizacaoIcon from "../../assets/Reembolso/sistemaAtualizado.png";

function Reembolso() {
    const navigate = useNavigate(); //iniciando o hook useNavigate

    function handleLogin() {
        navigate("/solicitacao"); //redireciona para a página de reembolso
    }

    return (
        <section className={styles.containerTeste}>
            <NavBar/>
            <div>
                <header>
                    <img src={iconHome} alt="" />
                    <img src={seta} alt="" />
                    <p>Reembolsos</p>
                </header>
                <main >
                    <h1>Sistema de Reembolsos</h1>
                    <p id={styles.subTitulo}>Solicite novos pedidos de reembolso, visualize solicitações em análise e todo o histórico.</p>
                    <section className={styles.containerCards}>
                    <article onClick={handleLogin}>
                        <img src={solicitarReembolsoIgm} alt="" />
                        <p>Solicitar Reembolso</p>
                    </article>
                    <article>
                        <img src={verificarAnaliseIgm} alt="" />
                        <p>Verificar</p>
                    </article>
                    <article>
                        <img src={historicoImg} alt="" />
                        <p>Histórico</p>
                    </article>
                </section>
                <section className={styles.containerStatus}>
                    <div className={styles.status}>
                        <img src={solicitadosIcon} alt="" />
                        <p><strong>182</strong> Solicitados</p>
                    </div>
                    <div className={styles.status}>
                        <img src={analiseIcon} alt="" />
                        <p><strong>74</strong> Em análise</p>
                    </div>
                    <div className={styles.status}>
                        <img src={aprovadoIcon} alt="" />
                        <p><strong>195</strong> Aprovados</p>
                    </div>
                    <div className={styles.status}>
                        <img src={rejeitadoIcon} alt="" />
                        <p><strong>41</strong> Rejeitados</p>
                    </div>
                </section>
                </main>
                <footer>
                    <img src={atualizacaoIcon} alt="" />
                    <p>Sistema atualizado.</p>
                </footer>
            </div>
        </section>
    )
}

export default Reembolso;