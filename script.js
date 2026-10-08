* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


:root {

    --fundo: #080808;

    --fundo-secundario: #0d0d0d;

    --texto: #eeeeee;

    --cinza: #999999;

    --linha: #292929;

    --borda: #333333;

}


/* =========================
   BASE
========================= */

html {
    scroll-behavior: smooth;
}


body {

    min-height: 100vh;

    background: var(--fundo);

    color: var(--texto);

    font-family:
        Arial,
        Helvetica,
        sans-serif;

}


/* =========================
   CAPA
========================= */

.capa {

    min-height: 100vh;

    padding:
        55px
        40px
        45px;

    display: flex;

    flex-direction: column;

    align-items: center;

    text-align: center;

    background:

        radial-gradient(
            circle at 50% 15%,
            #181818 0%,
            #0b0b0b 42%,
            #080808 100%
        );

}


.capa header {

    width: 100%;

}


.equipe {

    color: var(--cinza);

    font-size: 11px;

    letter-spacing: 0.45em;

    margin-bottom: 20px;

}


h1 {

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size:
        clamp(36px, 6vw, 68px);

    font-weight: 500;

    letter-spacing: 0.08em;

    line-height: 1.05;

}


h1 span {

    display: inline-block;

}


.linha {

    width: min(430px, 65%);

    height: 1px;

    background: var(--linha);

    margin:
        27px
        auto
        0;

}


.sintese {

    width:
        min(760px, 100%);

    margin-top: 90px;

}


.rotulo {

    color: var(--cinza);

    font-size: 10px;

    letter-spacing: 0.35em;

    margin-bottom: 25px;

}


.texto-sintese {

    color: #c5c5c5;

    font-size: 16px;

    line-height: 1.9;

    max-width: 700px;

    margin: auto;

}


blockquote {

    margin-top: auto;

}


blockquote p {

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    color: #d8d8d8;

    font-size:
        clamp(16px, 2vw, 21px);

    line-height: 1.7;

}


blockquote cite {

    display: block;

    margin-top: 10px;

    color: var(--cinza);

    font-size: 12px;

    letter-spacing: 0.18em;

    font-style: normal;

}


.indicador {

    margin-top: 45px;

    color: #777;

    font-size: 9px;

    letter-spacing: 0.3em;

}


.seta {

    margin-top: 12px;

    font-size: 20px;

}


/* =========================
   INTEGRANTES
========================= */

.integrantes {

    min-height: 100vh;

    padding:
        110px
        40px
        100px;

    text-align: center;

    background: var(--fundo-secundario);

}


.integrantes h2 {

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size:
        clamp(27px, 4vw, 42px);

    font-weight: 400;

    letter-spacing: 0.06em;

}


.pequena {

    width: 230px;

    margin-top: 22px;

}


/* =========================
   GRID
========================= */

.equipe-grid {

    width:
        min(1050px, 100%);

    margin:
        80px
        auto
        75px;

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 35px;

}


/* =========================
   INTEGRANTE
========================= */

.integrante {

    display: flex;

    flex-direction: column;

    align-items: center;

}


.avatar {

    width: 150px;

    height: 150px;

    border:
        1px solid
        var(--borda);

    background: #111;

    display: flex;

    align-items: center;

    justify-content: center;

    color: #555;

    font-size: 9px;

    letter-spacing: 0.2em;

}


.integrante h3 {

    margin-top: 25px;

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size: 17px;

    font-weight: 400;

    letter-spacing: 0.1em;

}


.integrante p {

    margin-top: 14px;

    max-width: 210px;

    color: #999;

    font-size: 13px;

    line-height: 1.7;

}


/* quinto integrante */

.integrante.ultimo {

    grid-column:
        2 / 4;

}


/* =========================
   BOTÃO
========================= */

#iniciar {

    padding:
        16px
        48px;

    border:
        1px solid
        #555;

    background:
        transparent;

    color:
        var(--texto);

    font-size: 11px;

    letter-spacing: 0.3em;

    cursor: pointer;

    transition:
        background 0.2s,
        color 0.2s,
        transform 0.2s;

}


#iniciar:hover {

    background: #eeeeee;

    color: #080808;

    transform:
        translateY(-2px);

}


/* =========================
   CELULAR
========================= */

@media (max-width: 800px) {

    .equipe-grid {

        grid-template-columns:
            repeat(2, 1fr);

    }

    .integrante.ultimo {

        grid-column:
            1 / 3;

    }

}


@media (max-width: 500px) {

    .capa {

        padding:
            40px
            20px;

    }

    .integrantes {

        padding:
            80px
            20px;

    }

    .equipe-grid {

        grid-template-columns:
            1fr;

    }

    .integrante.ultimo {

        grid-column:
            auto;

    }

}