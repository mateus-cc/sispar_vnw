import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.scss";
import menuHamburguer from "../../assets/NavBar/Frame.png";
import user from "../../assets/NavBar/User.png";
import home from "../../assets/NavBar/Home.png";
import reembolso from "../../assets/NavBar/Shopping.png";
import search from "../../assets/NavBar/Search.png";
import historico from "../../assets/NavBar/Historico.png";
import exit from "../../assets/NavBar/Exit.png";

function NavBar() {
    const navigate = useNavigate(); //iniciando o hook useNavigate

    function handleLogin() {
        navigate("/reembolso"); //redireciona para a página de reembolso
    }
    return (
        <section className={styles.navBar}>
            <div>
                <button className={styles.bntBasico}> 
                    <img src={menuHamburguer} alt=""/>
                </button>
            </div>

            <button className={styles.bntPerfil}>
                <img src={user} alt="" />
                <div className={styles.hidden}>
                    <p>Mateus Costa</p>
                    <p>Comércio Exterior</p>
                </div>
            </button>

            <div id={styles.servicos}>
                <div className={styles.btn}>
                    <button className={styles.bntBasico} onClick={handleLogin}>
                        <img src={home} alt="" />
                    </button>
                    <p className={styles.hiddenTextBtn}>Início</p>
                </div>
                <div className={styles.btn}>
                    <button className={styles.bntBasico}>
                        <img src={reembolso} alt="" />
                    </button>
                    <p className={styles.hiddenTextBtn}>Reembolsos</p>
                </div>
                <div className={styles.btn}>
                    <button className={styles.bntBasico}>
                        <img src={search} alt="" />
                    </button>
                    <p className={styles.hiddenTextBtn}>Análises</p>
                </div>
                <div className={styles.btn}>
                    <button className={styles.bntBasico}>
                        <img src={historico} alt="" />
                    </button>
                    <p className={styles.hiddenTextBtn}>Histórico</p>
                </div>
            </div>

            <button className={styles.bntSair}>
                <img src={exit} alt="" />
            </button>
        </section>
    )
}

export default NavBar;