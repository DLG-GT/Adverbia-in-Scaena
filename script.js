/*
 * Adverbia in Scaena — motor local do quiz
 * Requer perguntas.js carregado antes deste arquivo.
 * Este protótipo funciona em um navegador por vez; não implementa multiplayer.
 */
(() => {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("iniciar");
    const bank = window.ADVERBIA_QUESTOES;

    if (!startButton) return;

    if (!bank || !Array.isArray(bank.perguntas) || bank.perguntas.length !== 81) {
      startButton.addEventListener("click", () => {
        window.alert("Não foi possível carregar as 81 perguntas. Confira se perguntas.js está na mesma pasta e se foi incluído antes de script.js no index.html.");
      });
      console.error("Adverbia in Scaena: banco de questões ausente ou inválido.");
      return;
    }

    const questions = bank.perguntas;
    const LETTERS = ["A", "B", "C", "D"];
    const BASE_POINTS_DEFAULT = 100;
    const MAX_SPEED_BONUS = 50;
    const CHANGE_PENALTY = 30;

    const actTitles = {
      1: "ATO I · FUNDAMENTOS",
      2: "ATO II · O SENTIDO POR TRÁS DAS PALAVRAS",
      3: "ATO III · ENTRE O SENTIDO E A INTENÇÃO",
      4: "ATO IV · A ÚLTIMA INTERPRETAÇÃO",
      Especial: "QUESTÃO ESPECIAL · O ÚLTIMO ATO"
    };

    let currentIndex = 0;
    let currentQuestion = null;
    let currentChoice = null;
    let firstChoice = null;
    let changedChoice = false;
    let remainingMs = 0;
    let deadline = null;
    let timerId = null;
    let feedbackVisible = false;
    let viewMode = "rules";
    let records = [];
    let totalPoints = 0;
    let correctCount = 0;
    let objectiveCount = 0;
    let hasStarted = false;

    const modal = document.createElement("section");
    modal.id = "sc-regras";
    modal.hidden = true;
    modal.setAttribute("aria-labelledby", "sc-title");
    modal.innerHTML = `
      <div class="sc-container" role="dialog" aria-modal="true" aria-label="Adverbia in Scaena">
        <nav class="sc-nav" aria-label="Navegação do quiz">
          <span>幻影旅団 · ADVERBIA IN SCAENA</span>
          <button class="sc-close" id="sc-close" type="button" aria-label="Fechar quiz">FECHAR ×</button>
        </nav>
        <div id="sc-view-regras">
          <div class="sc-cabecalho">
            <span class="sc-edicao">ANTES DE COMEÇAR · 2026</span>
            <h2 id="sc-title">Antes do<br><em>primeiro ato.</em></h2>
            <p>Leia rapidinho. Depois, as perguntas fazem o resto.</p>
          </div>
          <div class="sc-conteudo">
            <aside class="sc-lateral">
              <span>O PERCURSO</span><strong>81</strong><p>QUESTÕES</p>
              <div class="sc-divisor"></div>
              <small>QUATRO ATOS<br>UMA QUESTÃO FINAL</small>
            </aside>
            <div class="sc-lista">
              <div class="sc-regra"><span class="sc-numero">01</span><div><h3>O caminho</h3><p>São quatro atos com 20 questões cada. A última de cada ato é discursiva. A questão 81 é o desafio especial.</p></div></div>
              <div class="sc-regra"><span class="sc-numero">02</span><div><h3>O tempo</h3><p>Você tem 30 segundos nas questões de marcar e 5 minutos nas discursivas.</p></div></div>
              <div class="sc-regra"><span class="sc-numero">03</span><div><h3>Se mudar de ideia</h3><p>Trocar de alternativa após a primeira escolha tira 30 pontos. Acertar sem trocar pode render bônus por rapidez.</p></div></div>
              <div class="sc-regra"><span class="sc-numero">04</span><div><h3>A pontuação</h3><p>Questões objetivas valem pontos automaticamente. As discursivas ficam pendentes para correção do professor.</p></div></div>
              <div class="sc-regra"><span class="sc-numero">05</span><div><h3>Sem truques</h3><p>Leia a frase, pense no contexto e escolha. Algumas perguntas cobram interpretação — não basta procurar uma palavra.</p></div></div>
            </div>
          </div>
          <div class="sc-experiment-note">
            <span class="sc-edicao">MODO DE TESTE LOCAL</span>
            <p>Esta versão roda neste navegador. As respostas e a pontuação não são enviadas a um servidor, não sincronizam entre participantes e serão perdidas se a página for recarregada.</p>
            <button id="sc-comecar" type="button" class="sc-primary">Começar o quiz <span aria-hidden="true">↗</span></button>
          </div>
        </div>
        <div id="sc-view-quiz" hidden></div>
        <div id="sc-view-resumo" hidden></div>
        <footer class="sc-rodape"><span>ADVERBIA IN SCAENA</span><span>幻影旅団 · 2026</span></footer>
      </div>
    `;
    document.body.appendChild(modal);

    const rulesView = modal.querySelector("#sc-view-regras");
    const quizView = modal.querySelector("#sc-view-quiz");
    const summaryView = modal.querySelector("#sc-view-resumo");
    const closeButton = modal.querySelector("#sc-close");

    function escapeHtml(value) {
      return String(value ?? "").replace(/[&<>"']/g, ch => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
      })[ch]);
    }

    function safeUrl(value) {
      if (typeof value !== "string") return null;
      try {
        const url = new URL(value);
        return url.protocol === "https:" || url.protocol === "http:" ? url.href : null;
      } catch {
        return null;
      }
    }

    function setView(view) {
      viewMode = view;
      rulesView.hidden = view !== "rules";
      quizView.hidden = view !== "game";
      summaryView.hidden = view !== "summary";
    }

    function sourceMarkup(question) {
      const source = question.fonte || {};
      const text = escapeHtml(source.texto || "Texto-base não informado.");
      const meta = [source.tipo, source.autor, source.obra]
        .filter(Boolean).map(escapeHtml).join(" · ");
      const url = safeUrl(source.url);
      const link = url
        ? ` · <a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">Consultar a fonte ↗</a>`
        : "";
      const note = source.nota ? `<div>${escapeHtml(source.nota)}</div>` : "";
      return `<div class="sc-source"><blockquote>“${text}”</blockquote><div class="sc-source-meta">${meta || "Fonte não identificada"}${link}${note}</div></div>`;
    }

    function questionActLabel(question) {
      return actTitles[question.ato] || (question.ato === "Especial" ? actTitles.Especial : "ADVERBIA IN SCAENA");
    }

    function questionHeader(question) {
      const duration = question.tipo === "discursiva" ? "05:00" : "00:30";
      const progress = Math.max(0, Math.min(100, (question.id / questions.length) * 100));
      return `
        <div class="sc-cabecalho sc-quiz-heading">
          <span class="sc-edicao">${escapeHtml(questionActLabel(question))}</span>
          <h2>${question.id === 81 ? "O último exame." : `Questão ${String(question.id).padStart(2, "0")}.`}</h2>
          <div class="sc-progress-head"><span>${String(question.id).padStart(2, "0")} / 81 · ${question.tipo === "discursiva" ? "DISCURSIVA" : "MÚLTIPLA ESCOLHA"}</span><span id="sc-timer-label" class="sc-timer">${duration}</span></div>
          <div class="sc-progress-track" role="progressbar" aria-label="Progresso do quiz" aria-valuemin="0" aria-valuemax="81" aria-valuenow="${question.id}"><span id="sc-overall-bar" style="width:${progress}%"></span></div>
        </div>`;
    }

    function renderQuestion() {
      currentQuestion = questions[currentIndex];
      currentChoice = null;
      firstChoice = null;
      changedChoice = false;
      feedbackVisible = false;
      remainingMs = (Number(currentQuestion.tempoSegundos) || (currentQuestion.tipo === "discursiva" ? 300 : 30)) * 1000;
      setView("game");

      const question = currentQuestion;
      const objective = question.tipo === "multipla_escolha";
      const optionsMarkup = objective
        ? `<div class="sc-options" role="group" aria-label="Alternativas de resposta">${question.alternativas.map((alternative, index) => `
            <button type="button" class="sc-option" data-choice="${escapeHtml(alternative.id)}" aria-pressed="false">
              <span>${escapeHtml(alternative.id || LETTERS[index])}</span><strong>${escapeHtml(alternative.texto)}</strong>
            </button>`).join("")}</div>
          <p id="sc-choice-status" class="sc-choice-status" aria-live="polite">Selecione uma alternativa.</p>`
        : `<label class="sc-discursive-label" for="sc-resposta">SUA RESPOSTA</label><textarea id="sc-resposta" class="sc-discursive" rows="6" placeholder="Escreva sua interpretação aqui…" aria-label="Resposta discursiva"></textarea><p class="sc-choice-status">As discursivas ficam pendentes para correção do professor.</p>`;

      quizView.innerHTML = `${questionHeader(question)}
        <div class="sc-question-card">
          <div class="sc-question-meta"><span>${escapeHtml(question.fonte?.tipo || "TEXTO-BASE")}</span><span>${objective ? "30 SEGUNDOS" : "5 MINUTOS"}</span></div>
          <div class="sc-timer-track" aria-hidden="true"><span id="sc-timer-bar"></span></div>
          ${sourceMarkup(question)}
          <p class="sc-prompt">${escapeHtml(question.enunciado)}</p>
          ${optionsMarkup}
          <div class="sc-quiz-actions">
            <button id="sc-enviar" type="button" class="sc-primary" ${objective ? "disabled" : ""}>${objective ? "Confirmar resposta" : "Registrar resposta"} <span aria-hidden="true">↗</span></button>
            <button id="sc-pausar-fechar" type="button" class="sc-secondary">Fechar e continuar depois</button>
          </div>
        </div>
        <p class="sc-provisional">Questão ${question.id} de 81 · ${objective ? "A pontuação objetiva é calculada automaticamente nesta demonstração." : "Resposta discursiva sem nota automática."}</p>`;

      if (objective) {
        quizView.querySelectorAll(".sc-option").forEach(button => {
          button.addEventListener("click", () => selectChoice(button.dataset.choice));
        });
      }
      quizView.querySelector("#sc-enviar").addEventListener("click", () => submitCurrent(false));
      quizView.querySelector("#sc-pausar-fechar").addEventListener("click", closeModal);
      startTimer();
    }

    function selectChoice(choiceId) {
      if (feedbackVisible || !currentQuestion || currentQuestion.tipo !== "multipla_escolha") return;
      if (deadline !== null && performance.now() >= deadline) {
        remainingMs = 0;
        stopTimer();
        submitCurrent(true);
        return;
      }
      if (currentChoice === choiceId) return;
      if (firstChoice === null) firstChoice = choiceId;
      else if (choiceId !== currentChoice) changedChoice = true;
      currentChoice = choiceId;

      quizView.querySelectorAll(".sc-option").forEach(button => {
        const selected = button.dataset.choice === currentChoice;
        button.classList.toggle("is-selected", selected);
        button.setAttribute("aria-pressed", String(selected));
      });
      quizView.querySelector("#sc-choice-status").textContent = changedChoice
        ? "Alternativa alterada. A penalidade de 30 pontos será aplicada."
        : "Alternativa selecionada. Você ainda pode mudar de ideia.";
      quizView.querySelector("#sc-enviar").disabled = false;
    }

    function timerText(ms) {
      const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    function updateTimerDisplay() {
      const label = quizView.querySelector("#sc-timer-label");
      const bar = quizView.querySelector("#sc-timer-bar");
      if (label) label.textContent = timerText(remainingMs);
      if (bar) {
        const full = (Number(currentQuestion?.tempoSegundos) || 30) * 1000;
        const pct = full > 0 ? Math.max(0, Math.min(100, remainingMs / full * 100)) : 0;
        bar.style.width = `${pct}%`;
        bar.style.background = remainingMs <= 5000 ? "#c77d62" : "#a45453";
      }
    }

    function startTimer() {
      stopTimer(false);
      if (feedbackVisible || viewMode !== "game" || !currentQuestion) return;
      deadline = performance.now() + remainingMs;
      updateTimerDisplay();
      timerId = window.setInterval(() => {
        remainingMs = Math.max(0, deadline - performance.now());
        updateTimerDisplay();
        if (remainingMs <= 0) {
          remainingMs = 0;
          stopTimer(false);
          submitCurrent(true);
        }
      }, 100);
    }

    function stopTimer(captureRemaining = true) {
      if (captureRemaining && deadline !== null) {
        remainingMs = Math.max(0, deadline - performance.now());
      }
      if (timerId !== null) window.clearInterval(timerId);
      timerId = null;
      deadline = null;
    }

    function submitCurrent(expired) {
      if (feedbackVisible || !currentQuestion) return;
      if (deadline !== null && !expired) {
        remainingMs = Math.max(0, deadline - performance.now());
        if (remainingMs <= 0) expired = true;
      }
      stopTimer(false);
      feedbackVisible = true;

      const q = currentQuestion;
      const totalMs = (Number(q.tempoSegundos) || (q.tipo === "discursiva" ? 300 : 30)) * 1000;
      const elapsedMs = Math.max(0, totalMs - remainingMs);
      let record;

      if (q.tipo === "multipla_escolha") {
        const selected = q.alternativas.find(item => item.id === currentChoice);
        const correct = currentChoice === q.respostaCorreta;
        const base = Number.isFinite(q.pontosBase) ? q.pontosBase : BASE_POINTS_DEFAULT;
        const bonus = correct && !changedChoice && remainingMs > 0 && !expired
          ? Math.round(MAX_SPEED_BONUS * (remainingMs / totalMs)) : 0;
        const rawPoints = correct ? base + bonus : 0;
        const penalty = changedChoice ? CHANGE_PENALTY : 0;
        const points = rawPoints - penalty;
        totalPoints += points;
        objectiveCount += 1;
        if (correct) correctCount += 1;
        record = {
          id: q.id, tipo: q.tipo, resposta: currentChoice,
          respostaTexto: selected?.texto || "Sem resposta",
          correta: correct, pontos: points, bonus, penalidade: penalty,
          alterou: changedChoice, expirou: Boolean(expired), tempoGastoMs: elapsedMs
        };
      } else {
        const answer = quizView.querySelector("#sc-resposta")?.value?.trim() || "";
        record = {
          id: q.id, tipo: q.tipo, resposta: answer,
          correta: null, pontos: null, expirou: Boolean(expired),
          tempoGastoMs: elapsedMs, pendenteCorrecao: true
        };
      }

      records = records.filter(item => item.id !== q.id);
      records.push(record);
      renderFeedback(q, record);
    }

    function renderFeedback(question, record) {
      const objective = question.tipo === "multipla_escolha";
      const correctAlternative = objective
        ? question.alternativas.find(item => item.id === question.respostaCorreta)
        : null;
      let resultMarkup;

      if (objective) {
        const headline = record.correta ? "Resposta correta." : (record.resposta === "Sem resposta" ? "Tempo encerrado." : "Não foi desta vez.");
        resultMarkup = `<div class="sc-result" aria-live="polite">
          <h3>${headline}</h3>
          <p>${record.resposta === "Sem resposta" ? "Nenhuma alternativa foi confirmada antes do fim do tempo." : `Sua resposta: ${escapeHtml(record.resposta)} — ${escapeHtml(record.respostaTexto)}.`}</p>
          <p>Resposta esperada: <strong>${escapeHtml(question.respostaCorreta)} — ${escapeHtml(correctAlternative?.texto || "")}</strong></p>
          <p>${escapeHtml(question.justificativa || "Consulte a fonte e releia o enunciado para revisar a resposta.")}</p>
          <p class="sc-result-score">PONTOS NESTA QUESTÃO: ${record.pontos > 0 ? "+" : ""}${record.pontos} · BÔNUS: +${record.bonus} · PENALIDADE: −${record.penalidade}</p>
          <p>Tempo utilizado: ${(record.tempoGastoMs / 1000).toFixed(1).replace(".", ",")} s.</p>
        </div>`;
      } else {
        const answerText = record.resposta ? escapeHtml(record.resposta) : "Nenhuma resposta foi registrada.";
        const rubric = Array.isArray(question.rubrica) && question.rubrica.length
          ? `<ul>${question.rubrica.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : "";
        resultMarkup = `<div class="sc-result" aria-live="polite">
          <h3>Resposta registrada.</h3>
          <p>Esta questão fica pendente para correção do professor; não recebe nota automática.</p>
          <p><strong>Sua resposta:</strong><br>${answerText}</p>
          <details class="sc-rubric"><summary>Ver critérios de correção</summary>${rubric}<p><strong>Resposta orientativa:</strong> ${escapeHtml(question.respostaEsperada || "A correção deve considerar a justificativa apresentada e o contexto da fonte.")}</p></details>
        </div>`;
      }

      quizView.innerHTML = `${questionHeader(question)}<div class="sc-question-card">${sourceMarkup(question)}<p class="sc-prompt">${escapeHtml(question.enunciado)}</p>${resultMarkup}<div class="sc-quiz-actions"><button id="sc-proxima" type="button" class="sc-primary">${question.id >= questions.length ? "Ver resultado" : "Próxima questão"} <span aria-hidden="true">↗</span></button><button id="sc-finalizar" type="button" class="sc-secondary">Fechar e voltar depois</button></div></div>`;
      const statusLabel = quizView.querySelector("#sc-timer-label");
      if (statusLabel) statusLabel.textContent = record.expirou ? "TEMPO" : "REGISTRADA";
      quizView.querySelector("#sc-proxima").addEventListener("click", nextQuestion);
      quizView.querySelector("#sc-finalizar").addEventListener("click", closeModal);
    }

    function nextQuestion() {
      if (currentIndex >= questions.length - 1) {
        renderSummary();
        return;
      }
      currentIndex += 1;
      renderQuestion();
    }

    function renderSummary() {
      stopTimer(false);
      setView("summary");
      const discursiveRecords = records.filter(item => item.tipo === "discursiva");
      const review = records.filter(item => item.tipo === "multipla_escolha").sort((a, b) => a.id - b.id);
      summaryView.innerHTML = `
        <div class="sc-cabecalho">
          <span class="sc-edicao">FIM DA ENCENAÇÃO · RESULTADO LOCAL</span>
          <h2>As cortinas<br><em>se fecham.</em></h2>
          <p>Você chegou ao fim das 81 questões. Veja seu resultado objetivo e quais respostas ainda precisam de correção.</p>
        </div>
        <div class="sc-summary-grid">
          <div class="sc-summary-stat"><strong>${correctCount}/${objectiveCount}</strong><span>ACERTOS OBJETIVOS</span></div>
          <div class="sc-summary-stat"><strong>${totalPoints}</strong><span>PONTOS OBJETIVOS</span></div>
          <div class="sc-summary-stat"><strong>${discursiveRecords.length}/5</strong><span>DISCURSIVAS REGISTRADAS</span></div>
        </div>
        <p class="sc-provisional">O resultado considera somente as questões objetivas. As cinco discursivas precisam ser corrigidas pelo professor. O placar é local e não é compartilhado com outros participantes.</p>
        <div class="sc-summary-list">
          <details class="sc-rubric"><summary>Revisar as questões objetivas (${review.length})</summary>
            ${review.map(item => `<div class="sc-summary-item"><strong>Questão ${item.id} · ${item.correta ? "Acerto" : "Erro ou sem resposta"}</strong><br>Marcada: ${escapeHtml(item.resposta)} — ${escapeHtml(item.respostaTexto)}<br>Pontos: ${item.pontos > 0 ? "+" : ""}${item.pontos}</div>`).join("")}
          </details>
          <details class="sc-rubric"><summary>Ver respostas discursivas para correção (${discursiveRecords.length})</summary>
            ${discursiveRecords.sort((a,b)=>a.id-b.id).map(item => { const q=questions.find(x=>x.id===item.id); return `<div class="sc-summary-item"><strong>Questão ${item.id} · Correção pendente</strong><br>${escapeHtml(item.resposta || "Sem resposta") }<details class="sc-rubric"><summary>Ver rubrica e resposta orientativa</summary>${Array.isArray(q.rubrica) ? `<ul>${q.rubrica.map(r=>`<li>${escapeHtml(r)}</li>`).join("")}</ul>` : ""}<p>${escapeHtml(q.respostaEsperada || "")}</p></details></div>`; }).join("")}
          </details>
        </div>
        <div class="sc-quiz-actions"><button id="sc-reiniciar" type="button" class="sc-primary">Começar de novo <span aria-hidden="true">↻</span></button><button id="sc-sair" type="button" class="sc-secondary">Fechar</button></div>`;
      summaryView.querySelector("#sc-reiniciar").addEventListener("click", startGame);
      summaryView.querySelector("#sc-sair").addEventListener("click", closeModal);
    }

    function startGame() {
      stopTimer(false);
      currentIndex = 0;
      currentQuestion = null;
      currentChoice = null;
      firstChoice = null;
      changedChoice = false;
      remainingMs = 0;
      feedbackVisible = false;
      records = [];
      totalPoints = 0;
      correctCount = 0;
      objectiveCount = 0;
      hasStarted = true;
      document.body.style.overflow = "hidden";
      modal.hidden = false;
      renderQuestion();
    }

    function openModal() {
      modal.hidden = false;
      document.body.style.overflow = "hidden";
      setView(viewMode);
      if (viewMode === "game" && !feedbackVisible) startTimer();
      if (viewMode === "rules") modal.querySelector("#sc-comecar").focus();
      else if (viewMode === "game") modal.querySelector("#sc-close").focus();
    }

    function closeModal() {
      stopTimer(true);
      modal.hidden = true;
      document.body.style.overflow = "";
      startButton.focus();
    }

    startButton.addEventListener("click", openModal);
    closeButton.addEventListener("click", closeModal);
    modal.querySelector("#sc-comecar").addEventListener("click", startGame);
    modal.addEventListener("click", event => {
      if (event.target === modal) closeModal();
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && !modal.hidden) closeModal();
    });

    // A variável é mantida para facilitar a depuração durante o desenvolvimento.
    window.ADVERBIA_QUIZ = {
      getStatus: () => ({
        totalQuestoes: questions.length,
        questaoAtual: currentQuestion?.id ?? null,
        modo: viewMode,
        acertosObjetivos: correctCount,
        pontosObjetivos: totalPoints,
        respostasRegistradas: records.length,
        iniciado: hasStarted
      })
    };
  });
})();
