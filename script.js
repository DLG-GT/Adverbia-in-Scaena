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

    // Códigos temporários de demonstração. Troque-os antes de publicar.
    // Em GitHub Pages, senhas no JavaScript são visíveis no código-fonte; não são segurança real.
    const ACCESS_PASSWORDS = {
      ryodan: "genei-ryodan",
      professor: "shirleigr"
    };

    const GENERIC_RYODAN_PROFILE = {
      title: "Membro da Genei Ryodan",
      welcome: "A senha foi reconhecida. Seu nome pode ser qualquer um: a senha é que abre as portas da Genei Ryodan.",
      acts: {
        1: "O primeiro ato testa os fundamentos. Observe cada palavra como uma peça no tabuleiro.",
        2: "No segundo ato, o sentido começa a se deslocar. A aranha segue em frente sem perder o fio.",
        3: "No terceiro ato, intenção e contexto entram em conflito. Analise antes de agir.",
        4: "O último ato exige precisão. Um detalhe pode decidir toda a interpretação."
      },
      ending: "Você chegou ao fim da encenação. A Genei Ryodan reconhece quem atravessou os quatro atos até a última questão."
    };

    const MEMBER_PROFILES = {
      dlg: {
        title: "O Diretor da Cena",
        welcome: "A encenação começa sob seu olhar. Cada escolha altera o ritmo do próximo ato.",
        acts: {
          1: "O primeiro ato prepara o palco. A estratégia começa pelos fundamentos.",
          2: "Agora, o sentido exige mais do que uma leitura rápida: é hora de observar o contexto.",
          3: "Intenção e interpretação se enfrentam. Conduza a cena sem perder nenhum detalhe.",
          4: "A última interpretação coloca a estratégia à prova. O desfecho está próximo."
        },
        ending: "As cortinas se fecham, mas a direção da cena permanece com você. O percurso está registrado."
      },
      dentrixz: {
        title: "A Lâmina Silenciosa",
        welcome: "Nem todo silêncio é ausência de resposta. A sua primeira cena começa agora.",
        acts: {
          1: "Fundamentos firmes: a precisão silenciosa vale mais que a pressa.",
          2: "O sentido se esconde nos detalhes. Leia o que a frase revela — e o que deixa implícito.",
          3: "A intenção pode estar fora da superfície. Corte as interpretações precipitadas.",
          4: "A etapa final pede precisão. Uma escolha cuidadosa pode mudar tudo."
        },
        ending: "A última cena terminou. Sua precisão deixa marcas no resultado final."
      },
      fabemz: {
        title: "O Estrategista dos Detalhes",
        welcome: "Uma pequena mudança pode alterar toda a frase. O tabuleiro está aberto.",
        acts: {
          1: "O plano começa com os fundamentos. Repare no que cada advérbio modifica.",
          2: "As peças mudam de posição: compare sentidos antes de escolher.",
          3: "Este ato recompensa quem percebe nuances entre intenção e efeito.",
          4: "A última etapa é o teste do plano. Cada detalhe conta."
        },
        ending: "Plano concluído. O resultado reúne cada decisão tomada ao longo dos atos."
      },
      vesselnick: {
        title: "O Observador do Contexto",
        welcome: "O contexto revela aquilo que as palavras, sozinhas, não contam.",
        acts: {
          1: "Observe as bases antes de avançar. O contexto começa a se formar aqui.",
          2: "Uma mesma frase pode mudar de direção conforme o contexto. Investigue essa mudança.",
          3: "Olhe para a intenção por trás da construção: a superfície nem sempre basta.",
          4: "A última leitura exige visão do conjunto, não apenas de uma palavra isolada."
        },
        ending: "A observação terminou com a última questão. O conjunto das escolhas compõe o resultado."
      },
      rique_jss: {
        title: "O Último Movimento",
        welcome: "Toda encenação guarda um movimento decisivo. Descubra onde ele acontece.",
        acts: {
          1: "Todo movimento precisa de base. Comece pelos fundamentos e siga com atenção.",
          2: "O sentido ganha movimento quando o contexto entra em cena.",
          3: "As interpretações se cruzam. Escolha com cuidado o próximo movimento.",
          4: "Este é o último ato: a precisão de cada movimento será colocada à prova."
        },
        ending: "Último movimento concluído. O percurso chega ao fim e o resultado fica registrado."
      }
    };

    const PROFESSOR_OBSERVER_PROFILE = {
      title: "Shirlei · Professora observadora",
      welcome: "Modo de observação ativado. Acompanhe as interpretações e veja como o contexto transforma o sentido.",
      acts: {
        1: "Observação do Ato I: acompanhe se os participantes identificam os fundamentos antes de avançar.",
        2: "Observação do Ato II: repare nas justificativas e nas mudanças de sentido provocadas pelo contexto.",
        3: "Observação do Ato III: note como intenção, escolha linguística e interpretação se relacionam.",
        4: "Observação do Ato IV: este é o momento de acompanhar a síntese do que foi estudado."
      },
      ending: "Fim da observação. O percurso completo está disponível para uma conversa de revisão com a turma."
    };

    let currentIndex = 0;
    let currentQuestion = null;
    let currentChoice = null;
    let firstChoice = null;
    let changedChoice = false;
    let remainingMs = 0;
    let deadline = null;
    let timerId = null;
    let autoAdvanceTimerId = null;
    let autoAdvanceCountdownId = null;
    let autoAdvanceDeadline = null;
    let autoAdvanceRemainingMs = 5000;
    let feedbackVisible = false;
    let viewMode = "rules";
    let records = [];
    let totalPoints = 0;
    let correctCount = 0;
    let objectiveCount = 0;
    let hasStarted = false;
    let participantName = "";
    let participantRole = "guest";
    let participantProfile = null;
    let actBreakVisible = false;
    const LEADERBOARD_KEY = "adverbiaInScaenaLeaderboardV1";

    function loadLeaderboard() {
      try {
        const value = JSON.parse(window.localStorage.getItem(LEADERBOARD_KEY) || "[]");
        return Array.isArray(value) ? value : [];
      } catch (error) {
        console.warn("Placar local indisponível neste navegador.", error);
        return [];
      }
    }

    function saveLeaderboard(entries) {
      try {
        window.localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(entries));
        return true;
      } catch (error) {
        console.warn("Não foi possível salvar o placar neste navegador.", error);
        return false;
      }
    }

    function participantKey(name) {
      return String(name || "").trim().toLocaleLowerCase("pt-BR");
    }

    function normalizeIdentity(name) {
      return String(name || "").trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR");
    }

    function identifyRole(password) {
      const candidate = String(password || "").trim();
      if (candidate && candidate === ACCESS_PASSWORDS.professor) return "professor";
      if (candidate && candidate === ACCESS_PASSWORDS.ryodan) return "ryodan";
      return "guest";
    }

    function roleProfileMessage(stage, actNumber = 1) {
      if (participantRole === "guest") return "";
      const profile = participantRole === "professor"
        ? PROFESSOR_OBSERVER_PROFILE
        : (participantProfile || GENERIC_RYODAN_PROFILE);
      const message = stage === "welcome"
        ? profile.welcome
        : stage === "final"
          ? profile.ending
          : (profile.acts[actNumber] || profile.welcome);
      const label = participantRole === "professor"
        ? "MODO DE OBSERVAÇÃO"
        : "GENEI RYODAN · PERFIL RECONHECIDO";
      return `<aside class="sc-role-message" aria-live="polite"><span class="sc-role-label">${escapeHtml(label)}</span><strong>${escapeHtml(profile.title)}</strong><p>${escapeHtml(message)}</p></aside>`;
    }

    function leaderboardMarkup(currentAct = null) {
      const entries = loadLeaderboard().sort((a, b) =>
        (Number(b.totalPoints) || 0) - (Number(a.totalPoints) || 0) ||
        (Number(b.correctCount) || 0) - (Number(a.correctCount) || 0) ||
        String(a.name).localeCompare(String(b.name), "pt-BR")
      );
      if (!entries.length) return '<p class="sc-board-empty">O placar ainda está vazio. Os resultados aparecerão aqui ao fim de cada ato.</p>';
      return `<div class="sc-board-wrap"><table class="sc-board"><thead><tr><th>#</th><th>Participante</th>${currentAct ? `<th>Ato ${currentAct}</th>` : ""}<th>Pontos acumulados</th></tr></thead><tbody>${entries.map((entry, index) => {
        const actScore = currentAct && entry.acts ? entry.acts[String(currentAct)] : null;
        return `<tr${participantKey(entry.name) === participantKey(participantName) ? ' class="is-current-player"' : ""}><td>${index + 1}</td><td>${escapeHtml(entry.name || "Participante")}</td>${currentAct ? `<td>${actScore ? Number(actScore.points) : "—"}</td>` : ""}<td><strong>${Number(entry.totalPoints) || 0}</strong></td></tr>`;
      }).join("")}</tbody></table></div>`;
    }

    function saveActScore(actNumber, finished = false) {
      const all = loadLeaderboard();
      const key = participantKey(participantName);
      let entry = all.find(item => participantKey(item.name) === key);
      if (!entry) {
        entry = { name: participantName, acts: {}, totalPoints: 0, correctCount: 0, completed: false };
        all.push(entry);
      }
      const startId = (actNumber - 1) * 20 + 1;
      const endId = actNumber * 20;
      const actRecords = records.filter(item => item.id >= startId && item.id <= endId && item.tipo === "multipla_escolha");
      entry.name = participantName;
      entry.acts = entry.acts || {};
      entry.acts[String(actNumber)] = {
        points: actRecords.reduce((sum, item) => sum + (Number(item.pontos) || 0), 0),
        correct: actRecords.filter(item => item.correta).length,
        answered: actRecords.length
      };
      entry.totalPoints = totalPoints;
      entry.correctCount = correctCount;
      entry.updatedAt = new Date().toISOString();
      if (finished) entry.completed = true;
      saveLeaderboard(all);
    }

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
            <span class="sc-edicao">IDENTIFICAÇÃO DO PARTICIPANTE</span>
            <div class="sc-identity-grid">
              <div class="sc-identity-field">
                <label class="sc-name-label" for="sc-participant-name">Seu nome ou apelido</label>
                <input id="sc-participant-name" class="sc-name-input" maxlength="40" autocomplete="nickname" placeholder="Digite seu nickname">
              </div>
              <div class="sc-identity-field">
                <label class="sc-name-label" for="sc-participant-password">Senha de acesso</label>
                <input id="sc-participant-password" class="sc-name-input" type="password" maxlength="80" autocomplete="off" placeholder="Senha da equipe ou da professora">
              </div>
            </div>
            <p>A senha reconhecida ativa o perfil da Genei Ryodan ou o modo de observação da professora, independentemente do nickname. Sem uma senha reconhecida, você joga normalmente, sem personalização especial.</p>
            <button id="sc-comecar" type="button" class="sc-primary">Começar o quiz <span aria-hidden="true">↗</span></button>
            <div class="sc-board-section"><h3>Placar geral deste dispositivo</h3><div id="sc-rules-board">${leaderboardMarkup()}</div></div>
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
        ${currentIndex === 0 ? roleProfileMessage("welcome") : ""}
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
        const noAnswer = !record.resposta || record.resposta === "Sem resposta";
        const headline = record.correta ? "Resposta correta." : (noAnswer ? "Tempo encerrado." : "Não foi desta vez.");
        resultMarkup = `<div class="sc-result" aria-live="polite">
          <h3>${headline}</h3>
          <p>${noAnswer ? "Nenhuma alternativa foi confirmada antes do fim do tempo." : `Sua resposta: ${escapeHtml(record.resposta)} — ${escapeHtml(record.respostaTexto)}.`}</p>
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

      const delayMs = objective ? 5000 : 8000;
      const nextText = question.id >= questions.length
        ? "O resultado final aparece"
        : `A questão ${String(question.id + 1).padStart(2, "0")} vem a seguir`;
      quizView.innerHTML = `${questionHeader(question)}<div class="sc-question-card">${sourceMarkup(question)}<p class="sc-prompt">${escapeHtml(question.enunciado)}</p>${resultMarkup}<p id="sc-auto-next" class="sc-auto-next" aria-live="polite">${nextText} em ${Math.ceil(delayMs / 1000)} segundos…</p><div class="sc-quiz-actions"><button id="sc-proxima" type="button" class="sc-primary">${question.id >= questions.length ? "Ver resultado agora" : "Avançar agora"} <span aria-hidden="true">↗</span></button><button id="sc-finalizar" type="button" class="sc-secondary">Fechar e continuar depois</button></div></div>`;
      const statusLabel = quizView.querySelector("#sc-timer-label");
      if (statusLabel) statusLabel.textContent = record.expirou ? "TEMPO" : "REGISTRADA";
      quizView.querySelector("#sc-proxima").addEventListener("click", nextQuestion);
      quizView.querySelector("#sc-finalizar").addEventListener("click", closeModal);
      scheduleAutoAdvance(delayMs);
    }

    function clearAutoAdvance(preserveRemaining = false) {
      if (preserveRemaining && autoAdvanceDeadline !== null) {
        autoAdvanceRemainingMs = Math.max(0, autoAdvanceDeadline - performance.now());
      }
      if (autoAdvanceTimerId !== null) window.clearTimeout(autoAdvanceTimerId);
      if (autoAdvanceCountdownId !== null) window.clearInterval(autoAdvanceCountdownId);
      autoAdvanceTimerId = null;
      autoAdvanceCountdownId = null;
      autoAdvanceDeadline = null;
    }

    function scheduleAutoAdvance(delayMs = autoAdvanceRemainingMs) {
      clearAutoAdvance(false);
      autoAdvanceRemainingMs = Math.max(0, delayMs);
      if (!feedbackVisible || modal.hidden || viewMode !== "game") return;

      const label = quizView.querySelector("#sc-auto-next");
      const isFinal = currentQuestion && currentQuestion.id >= questions.length;
      const baseText = isFinal ? "O resultado final aparece" : `A questão ${String((currentQuestion?.id || 0) + 1).padStart(2, "0")} vem a seguir`;
      const updateCountdown = () => {
        const seconds = Math.ceil(autoAdvanceRemainingMs / 1000);
        if (label) label.textContent = `${baseText} em ${seconds} ${seconds === 1 ? "segundo" : "segundos"}…`;
      };

      autoAdvanceDeadline = performance.now() + autoAdvanceRemainingMs;
      updateCountdown();
      autoAdvanceCountdownId = window.setInterval(() => {
        autoAdvanceRemainingMs = Math.max(0, autoAdvanceDeadline - performance.now());
        updateCountdown();
      }, 200);
      autoAdvanceTimerId = window.setTimeout(() => {
        clearAutoAdvance(false);
        autoAdvanceRemainingMs = 5000;
        nextQuestion();
      }, autoAdvanceRemainingMs);
    }

    function nextQuestion() {
      clearAutoAdvance(false);
      autoAdvanceRemainingMs = 5000;
      if (currentIndex >= questions.length - 1) {
        if (participantRole !== "professor") saveActScore(4, true);
        renderSummary();
        return;
      }
      const finishedAct = [20, 40, 60, 80].includes(currentQuestion?.id);
      if (finishedAct && !actBreakVisible) {
        actBreakVisible = true;
        const actNumber = currentQuestion.id / 20;
        if (participantRole !== "professor") saveActScore(actNumber);
        renderActLeaderboard(actNumber);
        return;
      }
      advanceToNextQuestion();
    }

    function advanceToNextQuestion() {
      clearAutoAdvance(false);
      autoAdvanceRemainingMs = 5000;
      actBreakVisible = false;
      if (currentIndex >= questions.length - 1) {
        renderSummary();
        return;
      }
      currentIndex += 1;
      renderQuestion();
    }

    function renderActLeaderboard(actNumber) {
      stopTimer(false);
      setView("game");
      const actNames = {
        1: "Fundamentos",
        2: "O sentido por trás das palavras",
        3: "Entre o sentido e a intenção",
        4: "A última interpretação"
      };
      const actRecords = records.filter(item => item.id >= (actNumber - 1) * 20 + 1 && item.id <= actNumber * 20 && item.tipo === "multipla_escolha");
      const actPoints = actRecords.reduce((sum, item) => sum + (Number(item.pontos) || 0), 0);
      const actEdition = participantRole === "professor"
        ? `MODO DE OBSERVAÇÃO · ATO ${actNumber}`
        : `ATO ${actNumber} CONCLUÍDO · PLACAR ATUALIZADO`;
      const actTitle = participantRole === "professor"
        ? "A cena continua.<br><em>O olhar acompanha.</em>"
        : "Fim do ato.<br><em>As posições mudam.</em>";
      const actDescription = participantRole === "professor"
        ? `${escapeHtml(participantName)}, você está acompanhando o fim de “${escapeHtml(actNames[actNumber])}” no modo de observação.`
        : `${escapeHtml(participantName)}, você terminou “${escapeHtml(actNames[actNumber])}”. O placar foi atualizado com sua pontuação.`;
      quizView.innerHTML = `
        <div class="sc-cabecalho">
          <span class="sc-edicao">${actEdition}</span>
          <h2>${actTitle}</h2>
          <p>${actDescription}</p>
        </div>
        ${roleProfileMessage("act", actNumber)}
        <div class="sc-summary-grid">
          <div class="sc-summary-stat"><strong>${actPoints}</strong><span>PONTOS NESTE ATO</span></div>
          <div class="sc-summary-stat"><strong>${totalPoints}</strong><span>PONTOS ACUMULADOS</span></div>
          <div class="sc-summary-stat"><strong>${correctCount}/${objectiveCount}</strong><span>ACERTOS OBJETIVOS</span></div>
        </div>
        <div class="sc-board-section"><h3>Classificação geral</h3>${leaderboardMarkup(actNumber)}</div>
        <p class="sc-provisional">O placar reúne participantes que jogaram neste mesmo navegador. Para compartilhar a classificação entre diferentes aparelhos, será necessário conectar um banco de dados ou serviço de servidor.</p>
        <div class="sc-quiz-actions"><button id="sc-continue-act" type="button" class="sc-primary">${actNumber === 4 ? "Ir para a questão especial 81" : `Continuar para o Ato ${actNumber + 1}`} <span aria-hidden="true">↗</span></button><button id="sc-close-act" type="button" class="sc-secondary">Fechar e continuar depois</button></div>`;
      quizView.querySelector("#sc-continue-act").addEventListener("click", advanceToNextQuestion);
      quizView.querySelector("#sc-close-act").addEventListener("click", closeModal);
      const rulesBoard = modal.querySelector("#sc-rules-board");
      if (rulesBoard) rulesBoard.innerHTML = leaderboardMarkup();
    }

    function renderSummary() {
      stopTimer(false);
      setView("summary");
      const discursiveRecords = records.filter(item => item.tipo === "discursiva");
      const review = records.filter(item => item.tipo === "multipla_escolha").sort((a, b) => a.id - b.id);
      summaryView.innerHTML = `
        <div class="sc-cabecalho">
          <span class="sc-edicao">${participantRole === "professor" ? "FIM DA OBSERVAÇÃO · REGISTRO LOCAL" : "FIM DA ENCENAÇÃO · RESULTADO LOCAL"}</span>
          <h2>${participantRole === "professor" ? "A observação<br><em>se conclui.</em>" : "As cortinas<br><em>se fecham.</em>"}</h2>
          <p>${participantRole === "professor" ? `${escapeHtml(participantName)}, você acompanhou o percurso no modo de observação. Esta sessão não será registrada no placar dos alunos.` : `${escapeHtml(participantName)}, você chegou ao fim das 81 questões. Veja sua pontuação e as respostas que ainda precisam de correção.`}</p>
        </div>
        ${roleProfileMessage("final")}
        <div class="sc-summary-grid">
          <div class="sc-summary-stat"><strong>${correctCount}/${objectiveCount}</strong><span>ACERTOS OBJETIVOS</span></div>
          <div class="sc-summary-stat"><strong>${totalPoints}</strong><span>PONTOS OBJETIVOS</span></div>
          <div class="sc-summary-stat"><strong>${discursiveRecords.length}/5</strong><span>DISCURSIVAS REGISTRADAS</span></div>
        </div>
        <p class="sc-provisional">${participantRole === "professor" ? "As respostas registradas nesta sessão de observação não entram no placar. As discursivas continuam disponíveis para consulta e correção." : "O resultado considera somente as questões objetivas. As cinco discursivas precisam ser corrigidas pelo professor. O placar fica salvo neste navegador e pode reunir vários participantes que joguem neste mesmo dispositivo."}</p>
        <div class="sc-board-section"><h3>Placar geral</h3>${leaderboardMarkup()}</div>
        <div class="sc-summary-list">
          <details class="sc-rubric"><summary>Revisar as questões objetivas (${review.length})</summary>
            ${review.map(item => `<div class="sc-summary-item"><strong>Questão ${item.id} · ${item.correta ? "Acerto" : "Erro ou sem resposta"}</strong><br>Marcada: ${escapeHtml(item.resposta || "Sem resposta")} — ${escapeHtml(item.respostaTexto)}<br>Pontos: ${item.pontos > 0 ? "+" : ""}${item.pontos}</div>`).join("")}
          </details>
          <details class="sc-rubric"><summary>Ver respostas discursivas para correção (${discursiveRecords.length})</summary>
            ${discursiveRecords.sort((a,b)=>a.id-b.id).map(item => { const q=questions.find(x=>x.id===item.id); return `<div class="sc-summary-item"><strong>Questão ${item.id} · Correção pendente</strong><br>${escapeHtml(item.resposta || "Sem resposta") }<details class="sc-rubric"><summary>Ver rubrica e resposta orientativa</summary>${Array.isArray(q.rubrica) ? `<ul>${q.rubrica.map(r=>`<li>${escapeHtml(r)}</li>`).join("")}</ul>` : ""}<p>${escapeHtml(q.respostaEsperada || "")}</p></details></div>`; }).join("")}
          </details>
        </div>
        <div class="sc-quiz-actions"><button id="sc-novo-participante" type="button" class="sc-primary">Registrar outro participante <span aria-hidden="true">↻</span></button><button id="sc-sair" type="button" class="sc-secondary">Fechar</button></div>`;
      summaryView.querySelector("#sc-novo-participante").addEventListener("click", prepareNewParticipant);
      summaryView.querySelector("#sc-sair").addEventListener("click", closeModal);
    }

    function prepareNewParticipant() {
      stopTimer(false);
      clearAutoAdvance(false);
      participantName = "";
      participantRole = "guest";
      participantProfile = null;
      actBreakVisible = false;
      setView("rules");
      modal.hidden = false;
      const nameInput = modal.querySelector("#sc-participant-name");
      const passwordInput = modal.querySelector("#sc-participant-password");
      if (nameInput) { nameInput.value = ""; nameInput.focus(); }
      if (passwordInput) passwordInput.value = "";
      const rulesBoard = modal.querySelector("#sc-rules-board");
      if (rulesBoard) rulesBoard.innerHTML = leaderboardMarkup();
    }

    function startGame() {
      const nameInput = modal.querySelector("#sc-participant-name");
      const passwordInput = modal.querySelector("#sc-participant-password");
      const requestedName = String(nameInput?.value || "").trim();
      if (!requestedName) {
        window.alert("Digite seu nome ou apelido antes de começar, para aparecer no placar.");
        nameInput?.focus();
        return;
      }
      participantName = requestedName.slice(0, 40);
      participantRole = identifyRole(passwordInput?.value);
      participantProfile = participantRole === "ryodan"
        ? (MEMBER_PROFILES[normalizeIdentity(participantName)] || GENERIC_RYODAN_PROFILE)
        : null;
      if (participantRole !== "professor") {
        const existing = loadLeaderboard().filter(item => participantKey(item.name) !== participantKey(participantName));
        saveLeaderboard(existing);
      }
      const rulesBoard = modal.querySelector("#sc-rules-board");
      if (rulesBoard) rulesBoard.innerHTML = leaderboardMarkup();
      stopTimer(false);
      clearAutoAdvance(false);
      autoAdvanceRemainingMs = 5000;
      actBreakVisible = false;
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
      if (viewMode === "game" && actBreakVisible) {
        // A classificação de fim de ato aguarda o clique explícito para continuar.
      } else if (viewMode === "game" && !feedbackVisible) startTimer();
      else if (viewMode === "game" && feedbackVisible) scheduleAutoAdvance(autoAdvanceRemainingMs);
      if (viewMode === "rules") modal.querySelector("#sc-comecar").focus();
      else if (viewMode === "game") modal.querySelector("#sc-close").focus();
    }

    function closeModal() {
      stopTimer(true);
      if (feedbackVisible) clearAutoAdvance(true);
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
        iniciado: hasStarted,
        participante: participantName,
        perfil: participantRole,
        placarLocal: loadLeaderboard()
      })
    };
  });
})();
