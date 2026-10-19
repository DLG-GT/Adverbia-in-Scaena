document.addEventListener("DOMContentLoaded", () => {
  const iniciar = document.getElementById("iniciar");
  if (!iniciar) return;

  let timerId = null;
  const QUESTION_DURATION_MS = 30_000;
  let deadline = null;
  let remainingMs = QUESTION_DURATION_MS;
  let selectedAnswer = null;
  let hasChangedAnswer = false;
  let firstAnswer = null;
  let finished = false;

  const BASE_POINTS = 100;
  const MAX_SPEED_BONUS = 50;
  const CHANGE_PENALTY = 30;
  const CORRECT_ANSWER = "rapidamente";

  const tela = document.createElement("section");
  tela.id = "sc-regras";
  tela.hidden = true;
  tela.setAttribute("aria-labelledby", "sc-title");

  tela.innerHTML = `
    <div class="sc-container" role="dialog" aria-modal="true">
      <nav class="sc-nav" aria-label="Navegação das instruções">
        <span>幻影旅団</span>
        <button id="sc-voltar" type="button" aria-label="Fechar instruções">
          FECHAR ×
        </button>
      </nav>

      <div id="sc-view-regras">
        <div class="sc-cabecalho">
          <span class="sc-edicao">ADVERBIA IN SCAENA / 2026</span>
          <h2 id="sc-title">Antes do<br><em>primeiro ato.</em></h2>
          <p>Veja rapidinho como o quiz funciona.</p>
        </div>

        <div class="sc-conteudo">
          <aside class="sc-lateral">
            <span>O PERCURSO</span>
            <strong>81</strong>
            <p>QUESTÕES</p>
            <div class="sc-divisor"></div>
            <small>QUATRO ATOS<br>UMA QUESTÃO FINAL</small>
          </aside>

          <div class="sc-lista">
            <div class="sc-regra">
              <span class="sc-numero">01</span>
              <div>
                <h3>O caminho</h3>
                <p>
                  São quatro atos, com 20 questões em cada.
                  A última pergunta de cada ato é discursiva.
                  No final, tem uma questão especial.
                </p>
              </div>
            </div>

            <div class="sc-regra">
              <span class="sc-numero">02</span>
              <div>
                <h3>O tempo</h3>
                <p>
                  Nas questões de marcar, você tem 30 segundos.
                  Nas discursivas, são 5 minutos.
                </p
