document.addEventListener("DOMContentLoaded", () => {

    const iniciar = document.getElementById("iniciar");

    if (!iniciar) return;

    const tela = document.createElement("section");

    tela.id = "sc-regras";
    tela.hidden = true;

    tela.innerHTML = `
        <div class="sc-container">

            <nav class="sc-nav">
                <span>PHANTOM TROUPE</span>
                <button id="sc-voltar">FECHAR ×</button>
            </nav>

            <div class="sc-cabecalho">

                <span class="sc-edicao">
                    ADVERBIA IN SCAENA / 2026
                </span>

                <h2>
                    Antes de entrar<br>
                    <em>em cena.</em>
                </h2>

                <p>
                    As regras da competição.
                </p>

            </div>

            <div class="sc-conteudo">

                <aside class="sc-lateral">
                    <span>O PERCURSO</span>

                    <strong>81</strong>

                    <p>QUESTÕES</p>

                    <div class="sc-divisor"></div>

                    <small>
                        QUATRO ATOS<br>
                        UM GRAN FINALE
                    </small>
                </aside>

                <main class="sc-lista">

                    <div class="sc-regra">
                        <span class="sc-numero">01</span>

                        <div>
                            <h3>A estrutura</h3>

                            <p>
                                Quatro atos, com vinte questões
                                cada. A última questão de cada
                                ato será discursiva.
                                O encerramento reserva uma
                                questão final especial.
                            </p>
                        </div>
                    </div>

                    <div class="sc-regra">
                        <span class="sc-numero">02</span>

                        <div>
                            <h3>O tempo</h3>

                            <p>
                                Trinta segundos para cada
                                questão objetiva. Nas questões
                                discursivas, o limite será
                                de cinco minutos.
                            </p>
                        </div>
                    </div>

                    <div class="sc-regra">
                        <span class="sc-numero">03</span>

                        <div>
                            <h3>As escolhas</h3>

                            <p>
                                Respostas rápidas poderão
                                receber bonificação.

                                Alterar uma resposta
                                implicará penalidade de
                                30% do valor da questão.
                            </p>
                        </div>
                    </div>

                    <div class="sc-regra">
                        <span class="sc-numero">04</span>

                        <div>
                            <h3>A pontuação</h3>

                            <p>
                                A dificuldade e o valor
                                das questões aumentarão
                                ao longo da competição.

                                A pontuação poderá
                                ser negativa.
                            </p>
                        </div>
                    </div>

                    <div class="sc-regra">
                        <span class="sc-numero">05</span>

                        <div>
                            <h3>Os resultados</h3>

                            <p>
                                O ranking será atualizado
                                após cada questão.

                                Os votos por alternativa
                                serão exibidos sem
                                identificação individual.
                                As respostas discursivas
                                serão corrigidas pelo docente.
                            </p>
                        </div>
                    </div>

                </main>

            </div>

            <footer class="sc-rodape">
                <span>ADVERBIA IN SCAENA</span>
                <span>PHANTOM TROUPE © 2026</span>
            </footer>

        </div>
    `;

    const estilo = document.createElement("style");

    estilo.textContent = `

        #sc-regras[hidden] {
            display: none;
        }

        #sc-regras {
            position: fixed;
            inset: 0;
            z-index: 9999;
            overflow-y: auto;

            background: #0b0b0b;
            color: #e9e6df;

            font-family: Arial, sans-serif;
            text-align: left;
        }

        #sc-regras * {
            box-sizing: border-box;
        }

        .sc-container {
            max-width: 1200px;
            margin: auto;
            padding: 35px 45px;
        }

        .sc-nav {
            display: flex;
            align-items: center;
            justify-content: space-between;

            padding-bottom: 22px;
            border-bottom: 1px solid #333;
        }

        .sc-nav span {
            font-size: 10px;
            letter-spacing: 3px;
            color: #aaa;
        }

        #sc-voltar {
            background: none;
            border: none;
            color: #aaa;
            font-size: 10px;
            letter-spacing: 2px;
            cursor: pointer;
            padding: 10px;
        }

        .sc-cabecalho {
            padding: 90px 0 85px;
        }

        .sc-edicao {
            color: #b7a486;
            font-size: 10px;
            letter-spacing: 3px;
        }

        .sc-cabecalho h2 {
            font-family: Georgia, serif;
            font-size: clamp(48px, 8vw, 100px);
            font-weight: 400;
            line-height: 1.05;
            letter-spacing: -2px;
            margin: 30px 0;
        }

        .sc-cabecalho em {
            font-weight: 400;
            color: #a99b86;
        }

        .sc-cabecalho p {
            color: #888;
            font-size: 14px;
            letter-spacing: 1px;
        }

        .sc-conteudo {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 90px;
            border-top: 1px solid #333;
            padding-top: 60px;
        }

        .sc-lateral > span {
            font-size: 10px;
            letter-spacing: 3px;
            color: #999;
        }

        .sc-lateral strong {
            display: block;
            font-family: Georgia, serif;
            font-weight: 400;
            font-size: 120px;
            line-height: 1.2;
            margin-top: 30px;
        }

        .sc-lateral p {
            font-size: 11px;
            letter-spacing: 4px;
            color: #b7a486;
        }

        .sc-divisor {
            width: 40px;
            height: 1px;
            background: #777;
            margin: 50px 0 25px;
        }

        .sc-lateral small {
            font-size: 11px;
            line-height: 2;
            letter-spacing: 2px;
            color: #777;
        }

        .sc-regra {
            display: grid;
            grid-template-columns: 45px 1fr;
            gap: 20px;

            padding: 28px 0 35px;
            border-bottom: 1px solid #292929;
        }

        .sc-regra:first-child {
            padding-top: 0;
        }

        .sc-numero {
            font-family: Georgia, serif;
            font-size: 15px;
            color: #a99b86;
        }

        .sc-regra h3 {
            font-family: Georgia, serif;
            font-size: 26px;
            font-weight: 400;
            margin-bottom: 15px;
        }

        .sc-regra p {
            max-width: 440px;
            color: #929292;
            font-size: 14px;
            line-height: 1.9;
        }

        .sc-rodape {
            display: flex;
            justify-content: space-between;

            margin-top: 100px;
            padding: 25px 0;
            border-top: 1px solid #333;

            color: #666;
            font-size: 9px;
            letter-spacing: 2px;
        }

        @media (max-width: 700px) {

            .sc-container {
                padding: 25px;
            }

            .sc-cabecalho {
                padding: 75px 0 60px;
            }

            .sc-cabecalho h2 {
                font-size: clamp(43px, 11vw, 65px);
                letter-spacing: -1px;
            }

            .sc-conteudo {
                grid-template-columns: 1fr;
                gap: 55px;
                padding-top: 45px;
            }

            .sc-lateral strong {
                font-size: 85px;
                margin-top: 10px;
            }

            .sc-divisor {
                margin: 25px 0;
            }

            .sc-regra {
                grid-template-columns: 30px 1fr;
                gap: 15px;
            }

            .sc-regra h3 {
                font-size: 24px;
            }

            .sc-rodape {
                gap: 20px;
                font-size: 8px;
            }
        }

    `;

    document.head.appendChild(estilo);
    document.body.appendChild(tela);

    const voltar = document.getElementById("sc-voltar");
    let overflowAnterior = "";

    iniciar.addEventListener("click", () => {
        overflowAnterior = document.body.style.overflow;
        tela.hidden = false;
        document.body.style.overflow = "hidden";
        tela.scrollTop = 0;
        voltar.focus();
    });

    function fecharTela() {
        tela.hidden = true;
        document.body.style.overflow = overflowAnterior;
        iniciar.focus();
    }

    voltar.addEventListener("click", fecharTela);

    document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape" && !tela.hidden) {
            fecharTela();
        }
    });

});
