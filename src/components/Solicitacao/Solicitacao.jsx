import NavBar from "../navBar/NavBar.jsx";
import iconHome from "../../assets/Reembolso/homeHeader.png";
import seta from "../../assets/Reembolso/Vector.png";
import styles from "../Solicitacao/Solicitacao.module.scss";
import btnApagar from "../../assets/SolicitacaoReembolso/btnApagar.png";
import setaBaixo from "../../assets/SolicitacaoReembolso/seta.png";
import positivoIcon from "../../assets/SolicitacaoReembolso/positivo.png";
import cancelarIcon from "../../assets/SolicitacaoReembolso/cancelar.png";

function Solicitacao() {
    return (
        <section>
            <div className={styles.containerSolicitacao}>
                {/* <NavBar/> */}
                <div>
                    <header>
                    <img src={iconHome} alt="" />
                        <img src={seta} alt="" />
                        <p>Reembolsos</p>
                        <img src={seta} alt="" />
                        <p>Solicitação de Reembolso</p>
                    </header>
                    <main>
                        <form action="" id={styles.formulario}>
                            <div className={styles.grupoUm}>

                                <div className={styles.inputNome}>
                                    <label htmlFor="nome">Nome Completo</label>
                                    <input type="text" required id={styles.nomeInput} name="nome"/>
                                </div>
                                    
                                <div className={styles.inputEmpresa}>
                                    <label htmlFor="empresa">Empresa</label>
                                    <input type="text" required id={styles.empresaInput} name="empresa"/>
                                </div>

                                <div className={styles.inputPrestacao}>
                                    <label htmlFor="prestContas">N Prest. Contas</label>
                                    <input type="text" required id={styles.prestContasInput} name="prestContas"/>
                                </div>

                                <div className={styles.inputMotivo}>
                                    <label htmlFor="descricao">Descrição / Motivo do Reembolso</label>
                                    <input type="text" required id={styles.descricaoInput} name="descricao"/>
                                </div>

                            </div>
                        </form>
                        <table>
                            <thead>
                                <tr>

                                </tr>
                                <tr>Colaborador(a)</tr>
                                <tr>Empresa</tr>
                                <tr>Nº Prest.</tr>
                                <tr>Data</tr>
                                <tr>Motivo</tr>
                                <tr>Tipo Reemb.</tr>
                                <tr>Ctr. Custo</tr>
                                <tr>Ord. Int.</tr>
                                <tr>Div.</tr>
                                <tr>PEP</tr>
                                <tr>Moeda</tr>
                                <tr>Dist. Km</tr>
                                <tr>Val. Km</tr>
                                <tr>Val. Faturado</tr>
                                <tr>Despesa</tr>
                            </thead>
                        </table>
                    </main>
                    <footer>
                        <div>
                            <label htmlFor="">Total Faturado</label>
                            <input type="text" placeholder="0.00" />
                        </div>
                        <div>
                            <label htmlFor="">Total Despesa</label>
                            <input type="text" placeholder="0.00" />
                        </div>
                        <button id={styles.btnEnviarAnalise}>
                            <img src={positivoIcon} alt="" />
                            Enviar para Análise
                        </button>
                        <button id={styles.btnCancelar}>
                            <img src={cancelarIcon} alt="" />
                            Cancelar Solicitção
                        </button>
                    </footer>
                </div>
            </div>
        </section>
    )
}

export default Solicitacao;