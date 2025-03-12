import NavBar from "../navBar/NavBar.jsx";
import iconHome from "../../assets/Reembolso/homeHeader.png";
import seta from "../../assets/Reembolso/Vector.png";
import styles from "../Solicitacao/Solicitacao.module.scss";
import setaBaixo from "../../assets/SolicitacaoReembolso/seta.png";
import positivoIcon from "../../assets/SolicitacaoReembolso/positivo.png";
import cancelarIcon from "../../assets/SolicitacaoReembolso/cancelar.png";
import IconBtnSalvar from "../../assets/SolicitacaoReembolso/maisBtnSalvar.png";
import btnCancelarForm from "../../assets/SolicitacaoReembolso/btnCancelarForm.png";
import lixeira from "../../assets/SolicitacaoReembolso/lixeira.png";
import motivoIcon from "../../assets/SolicitacaoReembolso/motivo.png";

function Solicitacao() {
    return (
        <section className={styles.containerSolicitacao}>
            
                {/* <NavBar/> */}

                <div className={styles.containerPrincipalSolicitacao}>
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
                                    <textarea type="text" required id={styles.descricaoInput} name="descricao"/>
                                </div>

                            </div>

                            <div className={styles.barraVertical}></div>

                            <div className={styles.grupo2}>
              <div className={styles.inputData}>
                <label htmlFor="">Data</label>
                <input type="date" name="" id="" />
              </div>

              <div className={styles.tipoDeDespesa}>
                <label htmlFor="">Tipo de Despesa</label>

                <select name="" id="">
                  <option value="">Selecionar</option>
                  <option value=""> Alimentação </option>
                  <option value=""> Combustível</option>
                  <option value=""> Condução</option>
                  <option value=""> Estacionamento</option>
                  <option value=""> Viagem Admin.</option>
                  <option value=""> Viagem Operacional</option>
                  <option value=""> Eventos de representação</option>
                </select>
              </div>

              <div className={styles.centroDeCusto}>
                <label htmlFor="">Centro de Custo</label>

                <select name="" id="">
                  <option value="">Selecionar</option>
                  <option value="">
                    1100109002 - FIN CONTROLES INTERNOS MTZ
                  </option>
                  <option value="">
                    1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ
                  </option>
                  <option value="">1100110101 - FIN CONTABILIDADE MTZ</option>
                </select>
              </div>

              <div className={styles.ordem}>
                <label htmlFor="">Ord. Int.</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.divisoes}>
                <label htmlFor="">Div.</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.pep}>
                <label htmlFor="">PEP</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.moeda}>
                <label htmlFor="">Moeda</label>
                <select name="" id="">
                  <option value="">Selecionar</option>
                  <option value="">BRL</option>
                  <option value="">ARS</option>
                  <option value="">USD</option>
                </select>
              </div>

              <div className={styles.distancia}>
                <label htmlFor="">Dist/Km</label>
                <input type="text" name="" id="" />
              </div>

              <div className={styles.valorKm}>
                <label htmlFor="">Valor/Km</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.valorFaturado}>
                <label htmlFor="">Valor Faturado</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.despesa}>
                <label htmlFor="">Despesa</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.botoes}>
                <button id={styles.btnSalvar}>
                    <img src={IconBtnSalvar} alt="" />
                    Salvar
                </button>
                <button id={styles.btnCancelarFormulario}> 
                    <img src={btnCancelarForm} alt="" />
                </button>
              </div>
            </div>
                        </form>
                        <table>
                            <thead>
                                <tr className={styles.espaçoVazio}></tr>
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
                                <tr className={styles.espaçoVazio}></tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td> <img src={lixeira} alt="ícone da lixeira" /> </td>
                                    <td> Maria Vagas Figueira de Souza Santos Silva</td>
                                    <td> Shell</td>
                                    <td> 345</td>
                                    <td> 10/07 </td>
                                    <td> <img src={motivoIcon} alt="ícone do motivo" /></td>
                                    <td>Alimentação</td>
                                    <td>Fin</td>
                                    <td>2</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>BRL</td>
                                    <td>20km</td>
                                    <td>5.00</td>
                                    <td>20.00</td>
                                    <td>45.00</td>
                                </tr>
                            </tbody>
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
        </section>
    )
}

export default Solicitacao;