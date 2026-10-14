document.addEventListener("DOMContentLoaded", () => {
  const iniciar = document.getElementById("iniciar");
  if (!iniciar) return;

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
      <div class="sc-cabecalho">
        <span class="sc-edicao">ADVERBIA IN SCAENA / 2026</span>
        <h2 id="sc-title">Como funciona<br><em>a disputa.</em></h2>
        <p>Tempo, escolhas, pontuação e correção: o que vale antes da primeira questão.</p>
      </div>
      <div class="sc-conteudo">
        <aside class="sc-lateral">
          <span>O PERCURSO</span><strong>81</strong><p>QUESTÕES NO TOTAL</p>
          <div class="sc-divisor"></div>
          <small>80 QUESTÕES EM QUATRO ATOS<br>+ UMA QUESTÃO ESPECIAL</small>
        </aside>
        <div class="sc-lista">
          <div class="sc-regra"><span class="sc-numero">01</span><div><h3>A sequência</h3><p>São 80 questões em quatro atos, com 20 por ato. A última de cada ato será discursiva. A 81ª encerra o percurso: uma questão especial, mais exigente e também discursiva.</p></div></div>
          <div class="sc-regra"><span class="sc-numero">02</span><div><h3>O tempo de resposta</h3><p>Cada questão objetiva terá 30 segundos. Nas discursivas, o limite será de cinco minutos. A votação para encerrar antes do prazo só abre quando 75% dos participantes já responderam; apenas quem respondeu poderá votar, e a votação precisa alcançar 80% de participação entre essas pessoas.</p></div></div>
          <div class="sc-regra"><span class="sc-numero">03</span><div><h3>Manter ou trocar</h3><p>O bônus de velocidade só vale se você mantiver sua primeira escolha. Se mudar a resposta dentro do tempo, perde 30% do valor daquela questão.</p></div></div>
          <div class="sc-regra"><span class="sc-numero">04</span><div><h3>Pontos e classificação</h3><p>As questões ficam gradualmente mais difíceis e valem mais pontos. A penalidade pode deixar seu total negativo. A classificação será atualizada ao fim de cada questão.</p></div></div>
          <div class="sc-regra"><span class="sc-numero">05</span><div><h3>Placar e discursivas</h3><p>Na tela principal, o placar mostra quantas pessoas escolheram cada alternativa, sem revelar quem votou. Nas discursivas, o docente marca cada resposta como certa ou errada, sem pontuação parcial.</p></div></div>
        </div>
      </div>
      <footer class="sc-rodape"><span>ADVERBIA IN SCAENA</span><span>幻影旅団 · 2026</span></footer>
    </div>`;

  const estilo = document.createElement("style");
  estilo.textContent = `
    #sc-regras[hidden]{display:none}
    #sc-regras{position:fixed;inset:0;z-index:9999;overflow-y:auto;background:#171513;color:#e8dfcf;font-family:Manrope,Arial,sans-serif;text-align:left}
    #sc-regras *{box-sizing:border-box}
    .sc-container{max-width:1120px;margin:auto;padding:20px clamp(22px,5vw,70px) 30px}
    .sc-nav{display:flex;align-items:center;justify-content:space-between;padding-bottom:15px;border-bottom:1px solid rgba(232,223,207,.22)}
    .sc-nav span,.sc-edicao,.sc-lateral>span,.sc-lateral p,.sc-lateral small,.sc-rodape,.sc-numero{font-family:"IBM Plex Mono","Courier New",monospace;letter-spacing:.1em}
    .sc-nav span{font-size:9px;color:#b3976b}
    #sc-voltar{min-height:40px;background:none;border:1px solid #6a5342;color:#e8dfcf;padding:8px 13px;font:9px "IBM Plex Mono",monospace;cursor:pointer}
    .sc-cabecalho{padding:clamp(42px,7vh,76px) 0 42px}
    .sc-edicao{color:#b3976b;font-size:8px}
    .sc-cabecalho h2{font:400 clamp(49px,7vw,83px)/.88 "Cormorant Garamond",Georgia,serif;letter-spacing:-.035em;margin:23px 0}
    .sc-cabecalho em{color:#b7ac9a;font-weight:400}
    .sc-cabecalho>p{color:#b7ac9a;font-size:12px}
    .sc-conteudo{display:grid;grid-template-columns:minmax(130px,.65fr) 2fr;gap:clamp(30px,6vw,82px);border-top:1px solid rgba(232,223,207,.22);padding-top:27px}
    .sc-lateral>span{font-size:8px;color:#8f8577}.sc-lateral strong{display:block;font:400 96px/.9 "Cormorant Garamond",Georgia,serif;margin-top:15px}.sc-lateral p{font-size:8px;color:#b3976b}
    .sc-divisor{width:31px;height:1px;background:#a45453;margin:24px 0 16px}.sc-lateral small{font-size:8px;line-height:2;color:#8f8577}
    .sc-regra{display:grid;grid-template-columns:30px 1fr;gap:13px;padding:17px 0;border-bottom:1px solid rgba(232,223,207,.15)}.sc-regra:first-child{padding-top:0}
    .sc-numero{font-size:9px;color:#a45453}.sc-regra h3{font:400 23px/1 "Cormorant Garamond",Georgia,serif;margin:0 0 8px}.sc-regra p{max-width:500px;color:#b7ac9a;font-size:12px;line-height:1.8;margin:0}
    .sc-rodape{display:flex;justify-content:space-between;gap:15px;margin-top:42px;padding:14px 0;border-top:1px solid rgba(232,223,207,.22);font-size:7px;color:#8f8577}
    @media(max-width:650px){.sc-conteudo{grid-template-columns:1fr;gap:25px}.sc-lateral strong{font-size:60px}.sc-cabecalho{padding:45px 0 35px}.sc-rodape{flex-wrap:wrap}}
  `;
  document.head.appendChild(estilo);
  document.body.appendChild(tela);

  const fechar = () => {
    tela.hidden = true;
    document.body.style.overflow = "";
    iniciar.focus();
  };
  iniciar.addEventListener("click", () => {
    tela.hidden = false;
    document.body.style.overflow = "hidden";
    document.getElementById("sc-voltar").focus();
  });
  tela.querySelector("#sc-voltar").addEventListener("click", fechar);
  tela.addEventListener("click", event => { if (event.target === tela) fechar(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape" && !tela.hidden) fechar(); });
});
