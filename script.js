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
  const BASE_POINTS = 100;        // Valor provisório para a demonstração
  const MAX_SPEED_BONUS = 50;    // Bônus provisório: até 50% dos pontos-base
  const CHANGE_PENALTY = 30;     // 30% de 100 pontos
  const CORRECT_ANSWER = "rapidamente";

  const tela = document.createElement("section");
  tela.id = "sc-regras";
  tela.hidden = true;
  tela.setAttribute("aria-labelledby", "sc-title");
  tela.innerHTML = `
    <div class="sc-container" role="dialog" aria-modal="true">
      <nav class="sc-nav" aria-label="Navegação das instruções">
        <span>幻影旅団</span>
        <button id="sc-voltar" type="button" aria-label="Fechar instruções">FECHAR ×</button>
      </nav>
      <div id="sc-view-regras">
        <div class="sc-cabecalho">
          <span class="sc-edicao">ADVERBIA IN SCAENA / 2026</span>
          <h2 id="sc-title">Antes de entrar<br><em>em cena.</em></h2>
          <p>Leia as regras antes de começar.</p>
        </div>
        <div class="sc-conteudo">
          <aside class="sc-lateral">
            <span>O PERCURSO</span><strong>81</strong><p>QUESTÕES</p>
            <div class="sc-divisor"></div><small>QUATRO ATOS<br>UMA QUESTÃO FINAL</small>
          </aside>
          <div class="sc-lista">
            <div class="sc-regra"><span class="sc-numero">01</span><div><h3>A estrutura</h3><p>Quatro atos, com vinte questões em cada um. A última questão de cada ato será discursiva; ao final, haverá uma questão especial.</p></div></div>
            <div class="sc-regra"><span class="sc-numero">02</span><div><h3>O tempo</h3><p>As questões objetivas terão trinta segundos. Nas discursivas, o limite será de cinco minutos.</p></div></div>
            <div class="sc-regra"><span class="sc-numero">03</span><div><h3>As escolhas</h3><p>Alterar a primeira resposta aplica uma penalidade de 30% do valor da questão. Responder rapidamente poderá render bônus.</p></div></div>
            <div class="sc-regra"><span class="sc-numero">04</span><div><h3>A pontuação</h3><p>O valor das questões cresce com a dificuldade. A pontuação total poderá ficar negativa.</p></div></div>
            <div class="sc-regra"><span class="sc-numero">05</span><div><h3>Os resultados</h3><p>O ranking será atualizado após cada questão. O placar mostra votos por alternativa, sem identificar participantes. O docente corrigirá as respostas discursivas.</p></div></div>
          </div>
        </div>
        <div class="sc-experiment-note">
          <span class="sc-edicao">PROTÓTIPO LOCAL · 01 QUESTÃO</span>
          <p>Esta demonstração testa o cronômetro, a seleção de alternativa e uma fórmula provisória de pontuação. Ainda não conecta Chromebooks nem publica resultados.</p>
          <button id="sc-testar" type="button" class="sc-primary">Testar uma questão <span aria-hidden="true">↗</span></button>
        </div>
      </div>
      <div id="sc-view-quiz" hidden>
        <div class="sc-cabecalho sc-quiz-heading">
          <span class="sc-edicao">DEMONSTRAÇÃO / QUESTÃO 01</span>
          <h2>Observe a frase.</h2>
          <p>Escolha uma alternativa. Você pode mudar de ideia antes de confirmar, mas a mudança aplica a penalidade demonstrativa.</p>
        </div>
        <div class="sc-quiz-card">
          <div class="sc-quiz-top"><span>PORTUGUÊS · ADVÉRBIOS</span><span id="sc-timer-label">00:30</span></div>
          <div class="sc-timer-track" aria-hidden="true"><span id="sc-timer-bar"></span></div>
          <p class="sc-quiz-question">Na frase <em>“A equipe respondeu rapidamente ao desafio”</em>, qual palavra é o advérbio?</p>
          <div class="sc-options" role="group" aria-label="Alternativas">
            <button type="button" class="sc-option" data-answer="equipe"><span>A</span><strong>equipe</strong></button>
            <button type="button" class="sc-option" data-answer="respondeu"><span>B</span><strong>respondeu</strong></button>
            <button type="button" class="sc-option" data-answer="rapidamente"><span>C</span><strong>rapidamente</strong></button>
            <button type="button" class="sc-option" data-answer="desafio"><span>D</span><strong>desafio</strong></button>
          </div>
          <p id="sc-choice-status" class="sc-choice-status" aria-live="polite">Nenhuma alternativa selecionada.</p>
          <div class="sc-quiz-actions">
            <button id="sc-confirmar" type="button" class="sc-primary" disabled>Confirmar resposta <span aria-hidden="true">↗</span></button>
            <button id="sc-voltar-regras" type="button" class="sc-secondary">Voltar às regras</button>
          </div>
          <div id="sc-result" class="sc-result" hidden aria-live="polite"></div>
        </div>
        <p class="sc-provisional">Pontuação de teste: 100 pontos por acerto · bônus de velocidade de até 50 · penalidade demonstrativa de 30 pontos ao mudar a resposta.</p>
      </div>
      <footer class="sc-rodape"><span>ADVERBIA IN SCAENA</span><span>幻影旅団 · 2026</span></footer>
    </div>`;

  const estilo = document.createElement("style");
  estilo.textContent = `
    #sc-regras[hidden], #sc-view-quiz[hidden], #sc-result[hidden] { display: none !important; }
    #sc-regras { position:fixed; inset:0; z-index:9999; overflow-y:auto; background:#171513; color:#e8dfcf; font-family:Manrope,Arial,sans-serif; text-align:left; }
    #sc-regras * { box-sizing:border-box; }
    .sc-container { max-width:1120px; margin:auto; padding:20px clamp(22px,5vw,70px) 30px; }
    .sc-nav { display:flex; align-items:center; justify-content:space-between; padding-bottom:15px; border-bottom:1px solid rgba(232,223,207,.22); }
    .sc-nav span,.sc-edicao,.sc-lateral>span,.sc-lateral p,.sc-lateral small,.sc-rodape,.sc-numero,.sc-quiz-top,.sc-provisional { font-family:"IBM Plex Mono","Courier New",monospace; letter-spacing:.1em; }
    .sc-nav span { font-size:9px; color:#b3976b; }
    #sc-voltar { min-height:40px; background:none; border:1px solid #6a5342; color:#e8dfcf; padding:8px 13px; font:9px "IBM Plex Mono",monospace; cursor:pointer; }
    .sc-cabecalho { padding:clamp(42px,7vh,76px) 0 42px; }
    .sc-edicao { color:#b3976b; font-size:8px; }
    .sc-cabecalho h2 { font:400 clamp(49px,7vw,83px)/.88 "Cormorant Garamond",Georgia,serif; letter-spacing:-.035em; margin:23px 0; }
    .sc-cabecalho em { color:#b7ac9a; font-weight:400; }
    .sc-cabecalho>p { color:#b7ac9a; font-size:12px; line-height:1.8; max-width:620px; }
    .sc-conteudo { display:grid; grid-template-columns:minmax(130px,.65fr) 2fr; gap:clamp(30px,6vw,82px); border-top:1px solid rgba(232,223,207,.22); padding-top:27px; }
    .sc-lateral>span { font-size:8px; color:#8f8577; }.sc-lateral strong { display:block; font:400 96px/.9 "Cormorant Garamond",Georgia,serif; margin-top:15px; }.sc-lateral p { font-size:8px; color:#b3976b; }
    .sc-divisor { width:31px; height:1px; background:#a45453; margin:24px 0 16px; }.sc-lateral small { font-size:8px; line-height:2; color:#8f8577; }
    .sc-regra { display:grid; grid-template-columns:30px 1fr; gap:13px; padding:17px 0; border-bottom:1px solid rgba(232,223,207,.15); }.sc-regra:first-child { padding-top:0; }
    .sc-numero { font-size:9px; color:#a45453; }.sc-regra h3 { font:400 23px/1 "Cormorant Garamond",Georgia,serif; margin:0 0 8px; }.sc-regra p { max-width:500px; color:#b7ac9a; font-size:12px; line-height:1.8; margin:0; }
    .sc-experiment-note { margin-top:30px; padding:20px 0 0; border-top:1px solid rgba(232,223,207,.22); }.sc-experiment-note p { color:#b7ac9a; font-size:12px; line-height:1.8; max-width:650px; }
    .sc-primary { display:inline-flex; align-items:center; justify-content:space-between; gap:25px; border:1px solid #8b6d51; background:transparent; color:#e8dfcf; padding:13px 16px; font:10px "IBM Plex Mono","Courier New",monospace; letter-spacing:.08em; cursor:pointer; }
    .sc-primary:hover:not(:disabled), .sc-primary:focus-visible { background:#392322; border-color:#b38b64; outline:none; }.sc-primary:disabled { opacity:.4; cursor:not-allowed; }
    .sc-secondary { background:none; border:0; color:#b7ac9a; padding:12px 0; font:10px "IBM Plex Mono","Courier New",monospace; cursor:pointer; }
    .sc-quiz-heading { padding-bottom:25px; }.sc-quiz-heading h2 { margin-bottom:15px; }
    .sc-quiz-card { max-width:760px; border-top:1px solid rgba(232,223,207,.35); padding-top:20px; }
    .sc-quiz-top { display:flex; justify-content:space-between; gap:12px; font-size:8px; color:#b3976b; }
    #sc-timer-label { color:#e8dfcf; font-size:12px; }
    .sc-timer-track { height:3px; background:#3a3029; margin:12px 0 28px; overflow:hidden; }.sc-timer-track span { display:block; width:100%; height:100%; background:#a45453; transition:width .2s linear; }
    .sc-quiz-question { max-width:670px; margin:0 0 25px; font:400 clamp(23px,3vw,34px)/1.4 "Cormorant Garamond",Georgia,serif; color:#e8dfcf; }.sc-quiz-question em { color:#c5aa7b; }
    .sc-options { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:10px; }
    .sc-option { display:flex; align-items:center; gap:14px; min-height:58px; padding:12px 14px; text-align:left; background:rgba(255,255,255,.015); border:1px solid rgba(232,223,207,.22); color:#e8dfcf; cursor:pointer; }
    .sc-option>span { color:#b3976b; font:10px "IBM Plex Mono","Courier New",monospace; }.sc-option strong { font:400 16px "Cormorant Garamond",Georgia,serif; }
    .sc-option:hover:not(:disabled) { border-color:#8b6d51; }.sc-option.is-selected { border-color:#a45453; background:rgba(140,57,62,.15); box-shadow:inset 3px 0 #a45453; }.sc-option:disabled { cursor:default; opacity:.8; }
    .sc-choice-status { min-height:20px; color:#a99d8d; font-size:11px; }
    .sc-quiz-actions { display:flex; align-items:center; gap:22px; flex-wrap:wrap; padding:8px 0 12px; }
    .sc-result { margin-top:20px; padding:18px 0; border-top:1px solid rgba(232,223,207,.25); }.sc-result h3 { font:400 28px "Cormorant Garamond",Georgia,serif; margin:0 0 9px; }.sc-result p { color:#c2b7a5; font-size:13px; line-height:1.8; margin:6px 0; }.sc-result .sc-result-score { color:#d3b98d; font:12px "IBM Plex Mono","Courier New",monospace; }
    .sc-provisional { max-width:750px; color:#817768; font-size:8px; line-height:1.8; margin:25px 0 0; letter-spacing:.04em; }
    .sc-rodape { display:flex; justify-content:space-between; gap:15px; margin-top:42px; padding:14px 0; border-top:1px solid rgba(232,223,207,.22); font-size:7px; color:#8f8577; }
    @media(max-width:650px) { .sc-conteudo { grid-template-columns:1fr; gap:25px; }.sc-lateral strong { font-size:60px; }.sc-cabecalho { padding:45px 0 35px; }.sc-rodape { flex-wrap:wrap; }.sc-options { grid-template-columns:1fr; }.sc-quiz-actions { align-items:flex-start; flex-direction:column; gap:8px; } }
    @media(prefers-reduced-motion:reduce) { .sc-timer-track span { transition:none; } }
  `;
  document.head.appendChild(estilo);
  document.body.appendChild(tela);

  const rulesView = tela.querySelector("#sc-view-regras");
  const quizView = tela.querySelector("#sc-view-quiz");
  const timerLabel = tela.querySelector("#sc-timer-label");
  const timerBar = tela.querySelector("#sc-timer-bar");
  const confirmButton = tela.querySelector("#sc-confirmar");
  const choiceStatus = tela.querySelector("#sc-choice-status");
  const resultBox = tela.querySelector("#sc-result");
  const answerButtons = [...tela.querySelectorAll(".sc-option")];

  function stopTimer() {
    if (timerId !== null) window.clearInterval(timerId);
    timerId = null;
  }

  function resetDemo() {
    stopTimer();
    deadline = null;
    remainingMs = QUESTION_DURATION_MS;
    selectedAnswer = null;
    firstAnswer = null;
    hasChangedAnswer = false;
    finished = false;
    timerLabel.textContent = "00:30";
    timerBar.style.width = "100%";
    timerBar.style.background = "#a45453";
    choiceStatus.textContent = "Nenhuma alternativa selecionada.";
    confirmButton.disabled = true;
    confirmButton.hidden = false;
    resultBox.hidden = true;
    resultBox.innerHTML = "";
    answerButtons.forEach(button => {
      button.disabled = false;
      button.classList.remove("is-selected");
      button.setAttribute("aria-pressed", "false");
    });
  }

  function updateTimer() {
    if (deadline !== null) {
      remainingMs = Math.max(0, deadline - performance.now());
    }
    const secondsToDisplay = Math.ceil(remainingMs / 1000);
    timerLabel.textContent = `00:${String(secondsToDisplay).padStart(2, "0")}`;
    timerBar.style.width = `${(remainingMs / QUESTION_DURATION_MS) * 100}%`;
    if (remainingMs <= 5000) timerBar.style.background = "#c77d62";
    return remainingMs;
  }

  function finishQuestion() {
    if (finished) return;
    updateTimer();
    finished = true;
    stopTimer();
    answerButtons.forEach(button => { button.disabled = true; });
    confirmButton.disabled = true;
    confirmButton.hidden = true;

    const isCorrect = selectedAnswer === CORRECT_ANSWER;
    // O bônus usa o tempo real restante em milissegundos, não um contador arredondado por segundo.
    const speedBonus = (isCorrect && !hasChangedAnswer && remainingMs > 0)
      ? Math.round(MAX_SPEED_BONUS * (remainingMs / QUESTION_DURATION_MS))
      : 0;
    let points = isCorrect ? BASE_POINTS + speedBonus : 0;
    if (hasChangedAnswer) points -= CHANGE_PENALTY;

    let headline;
    if (selectedAnswer === null) headline = "Tempo encerrado.";
    else if (isCorrect) headline = "Resposta correta.";
    else headline = "Não foi desta vez.";

    const changedMessage = hasChangedAnswer
      ? `A resposta foi alterada; a penalidade demonstrativa foi de −${CHANGE_PENALTY} pontos.`
      : "Sua primeira escolha foi mantida; por isso, você era elegível ao bônus de velocidade.";
    const explanation = selectedAnswer === null
      ? "Você não selecionou uma alternativa. A resposta esperada era “rapidamente”, advérbio de modo que modifica o verbo “respondeu”."
      : `A resposta esperada é “rapidamente”, advérbio de modo que modifica o verbo “respondeu”. ${changedMessage}`;
    const elapsedSeconds = ((QUESTION_DURATION_MS - remainingMs) / 1000).toFixed(3).replace(".", ",");
    resultBox.innerHTML = `
      <h3>${headline}</h3>
      <p>${explanation}</p>
      <p class="sc-result-score">PONTUAÇÃO DESTA QUESTÃO: ${points > 0 ? "+" : ""}${points} PONTOS</p>
      <p>Base: ${BASE_POINTS} · Bônus de velocidade: +${speedBonus} · Penalidade por alteração: −${hasChangedAnswer ? CHANGE_PENALTY : 0}</p>
      <p>Tempo decorrido: ${elapsedSeconds} s</p>
      <button id="sc-repetir" type="button" class="sc-primary">Repetir demonstração <span aria-hidden="true">↻</span></button>
      <button id="sc-voltar-regras-resultado" type="button" class="sc-secondary">Voltar às regras</button>`;
    resultBox.hidden = false;
    tela.querySelector("#sc-repetir").addEventListener("click", () => startDemo());
    tela.querySelector("#sc-voltar-regras-resultado").addEventListener("click", showRules);
  }

  function startDemo() {
    resetDemo();
    rulesView.hidden = true;
    quizView.hidden = false;
    deadline = performance.now() + QUESTION_DURATION_MS;
    updateTimer();
    timerId = window.setInterval(() => {
      const remaining = updateTimer();
      if (remaining <= 0) finishQuestion();
    }, 50);
  }

  function showRules() {
    stopTimer();
    tela.querySelector("#sc-view-regras").hidden = false;
    quizView.hidden = true;
    resetDemo();
  }

  answerButtons.forEach(button => {
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => {
      if (finished || (deadline !== null && performance.now() >= deadline)) return;
      const newAnswer = button.dataset.answer;
      if (selectedAnswer === newAnswer) return;
      if (firstAnswer === null) firstAnswer = newAnswer;
      else if (newAnswer !== selectedAnswer) hasChangedAnswer = true;
      selectedAnswer = newAnswer;
      answerButtons.forEach(option => {
        const selected = option.dataset.answer === selectedAnswer;
        option.classList.toggle("is-selected", selected);
        option.setAttribute("aria-pressed", String(selected));
      });
      choiceStatus.textContent = hasChangedAnswer
        ? "Alternativa alterada. A penalidade de demonstração será aplicada."
        : "Alternativa selecionada. Você ainda pode mudar sua escolha.";
      confirmButton.disabled = false;
    });
  });

  const fechar = () => {
    stopTimer();
    tela.hidden = true;
    document.body.style.overflow = "";
    showRules();
    iniciar.focus();
  };
  iniciar.addEventListener("click", () => {
    tela.hidden = false;
    document.body.style.overflow = "hidden";
    showRules();
    tela.querySelector("#sc-voltar").focus();
  });
  tela.querySelector("#sc-voltar").addEventListener("click", fechar);
  tela.querySelector("#sc-testar").addEventListener("click", startDemo);
  tela.querySelector("#sc-voltar-regras").addEventListener("click", showRules);
  confirmButton.addEventListener("click", finishQuestion);
  tela.addEventListener("click", event => { if (event.target === tela) fechar(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape" && !tela.hidden) fechar(); });
});
