import { useNavigate } from "react-router-dom";
import imgPrincipal from "../../assets/TelaLogin/Login.jpg";
import logo from "../../assets/TelaLogin/wssispar.jpg";
import styles from "./Login.module.scss";

function Login() {
    const navigate = useNavigate(); //iniciando o hook useNavigate

    function handleLogin() {
        navigate("/reembolso"); //redireciona para a página de reembolso
    }

    function handleCriarConta() {
        navigate("/criarconta"); //redireciona para a página de criar conta
    }

    return (
        <main className={styles.container}>
            <section>
                <img id={styles.navioCargueiro} src={imgPrincipal}/>
            </section>
            <section id={styles.login}>
                <img id={styles.logo} src={logo} alt=""/>
                <h1>Boas vindas ao Novo Portal SISPAR</h1>
                <p>Sistema de Emissão de boletos e parcelamento</p>
                <form action="">
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Senha" />
                    <a href="#">Esqueci minha senha</a>
                    <section>
                        <button type="button" onClick={handleLogin}>Entrar</button>
                        <button id={styles.btn_criar_conta} onClick={handleCriarConta}>Criar conta</button>
                    </section>
                </form>
            </section>
        </main>
        
    )
}

export default Login;