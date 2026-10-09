document.addEventListener("DOMContentLoaded", () => {

    const iniciar = document.getElementById("iniciar");

    if (!iniciar) return;

    // CRIAÇÃO DA TELA DE INSTRUÇÕES

    const tela = document.createElement("section");

    tela.id = "tela-instrucoes";

    tela.innerHTML = `
        <div class="conteudo-instrucoes">

            <p class="rotulo-instrucoes">
                PHANTOM TROUPE
            </p>

            <h2>ANTE ACTUM</h2>

            <div class="linha-instrucoes"></div>

            <p class="subtitulo-instrucoes">
                Antes que o espetáculo comece.
            </p>

            <div class="regras">

                <p>
                    Quatro atos. Oitenta desafios.
                    Um último julgamento.
                </p>

                <p>
                    Cada questão exige atenção,
                    interpretação e precisão.
                </p>

                <p>
                    Nas questões objetivas,
                    você terá 30 segundos
                    para responder.
                </p>

                <p>
                    A velocidade poderá
                    favorecer sua pontuação.
                    A indecisão terá seu preço.
                </p>

                <p>
                    Alterar uma resposta
                    implicará uma penalidade
                    de 30% do valor da questão.
                </p>

                <p>
                    Ao final de cada desafio,
                    a classificação será atualizada.
                </p>

                <p>
                    Nas questões discursivas,
                    o tempo máximo será
                    de cinco minutos.
                </p>

            </div>

            <div class="linha-instrucoes"></div>

            <p class="frase-final">
                O conhecimento será sua única certeza.
            </p>

            <button id="voltar">
                ← VOLTAR
            </button>

        </div>
    `;

    // ESTILO DA NOVA TELA

    const estilo = document.createElement("style");

    estilo.textContent = `

        #tela-instrucoes {
            display: none;
            position: fixed;
            inset: 0;
            z-index: 9999;
            overflow-y: auto;
            background: radial-gradient(
                circle at top,
                #191919,
                #080808 65%
            );
            color: #eeeeee;
            text-align: center;
            padding: 65px 25px;
        }

        .conteudo-instrucoes {
            max-width: 700px;
            margin: auto;
        }

        .rotulo-instrucoes {
            color: #888;
            font-size: 11px;
            letter-spacing: 5px;
        }

        #tela-instrucoes h2 {
            font-family: Georgia, serif;
            font-size: clamp(35px, 7vw, 60px);
            font-weight: 400;
            letter-spacing: 5px;
            margin-top: 35px;
        }

        .linha-instrucoes {
            width: 180px;
            height: 1px;
            background: #444;
            margin: 35px auto;
        }

        .subtitulo-instrucoes {
            font-family: Georgia, serif;
            font-style: italic;
            color: #aaa;
            font-size: 19px;
        }

        .regras {
            margin: 55px auto;
        }

        .regras p {
            color: #bbb;
            font-size: 15px;
            line-height: 1.9;
            margin-bottom: 30px;
        }

        .frase-final {
            font-family: Georgia, serif;
            font-style: italic;
            color: #ccc;
            margin-bottom: 50px;
        }

        #voltar {
            background: transparent;
            border: 1px solid #555;
            color: #eee;
            padding: 15px 35px;
            letter-spacing: 3px;
            cursor: pointer;
        }

    `;

    document.head.appendChild(estilo);
    document.body.appendChild(tela);

    // ABRIR INSTRUÇÕES

    iniciar.addEventListener("click", () => {
        tela.style.display = "block";
        document.body.style.overflow = "hidden";
        tela.scrollTop = 0;
    });

    // VOLTAR À APRESENTAÇÃO

    document.getElementById("voltar")
        .addEventListener("click", () => {
            tela.style.display = "none";
            document.body.style.overflow = "";
        });

});
