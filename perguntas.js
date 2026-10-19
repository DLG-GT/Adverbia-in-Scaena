/*
 * Adverbia in Scaena — Banco de questões revisado
 * Versão: 2026-10-19. Banco separado do motor do quiz.
 * 76 questões objetivas + 5 discursivas. Questão 81 preservada conforme definida.
 * Carregue este arquivo antes do motor que consome window.ADVERBIA_QUESTOES.
 */
(function (global) {
  "use strict";
  const banco = {
  "projeto": "Adverbia in Scaena",
  "equipe": "幻影旅団 / Phantom Troupe",
  "versaoBanco": "2026-10-19",
  "totalQuestoes": 81,
  "distribuicao": {
    "atoI": [
      1,
      20
    ],
    "atoII": [
      21,
      40
    ],
    "atoIII": [
      41,
      60
    ],
    "atoIV": [
      61,
      80
    ],
    "especial": 81
  },
  "observacoes": [
    "Base de cada questão: provérbio, citação ou fala publicada.",
    "Questões 20, 40, 60, 80 e 81 são discursivas.",
    "As citações literárias possuem link de referência quando disponível.",
    "Os provérbios tradicionais podem ter variantes regionais; não se atribui autoria individual sem evidência.",
    "Este arquivo é o banco de conteúdo; o motor atual do site ainda precisa ser conectado a ele."
  ],
  "perguntas": [
    {
      "id": 1,
      "ato": 1,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Quem espera sempre alcança.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual leitura explica melhor o papel de “sempre” no provérbio?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Aponta o espaço em que a espera acontece."
        },
        {
          "id": "B",
          "texto": "Generaliza a persistência ao longo do tempo."
        },
        {
          "id": "C",
          "texto": "Nega que a persistência produza qualquer resultado."
        },
        {
          "id": "D",
          "texto": "Apresenta a conquista como uma hipótese incerta."
        }
      ],
      "respostaCorreta": "B",
      "habilidade": "interpretação",
      "justificativa": "“Sempre” generaliza a ideia de persistência ao longo do tempo.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 2,
      "ato": 1,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Devagar se vai ao longe.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual paráfrase preserva melhor a mensagem figurada do provérbio?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Só a velocidade alta permite chegar longe."
        },
        {
          "id": "B",
          "texto": "A distância depende exclusivamente do ponto de partida."
        },
        {
          "id": "C",
          "texto": "O avanço gradual pode gerar bons resultados."
        },
        {
          "id": "D",
          "texto": "A demora, por si só, garante o fracasso."
        }
      ],
      "respostaCorreta": "C",
      "habilidade": "paráfrase e inferência",
      "justificativa": "O provérbio valoriza o progresso constante, não a velocidade máxima.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 3,
      "ato": 1,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Citação literária",
        "texto": "Por mares nunca de antes navegados",
        "autor": "Luís Vaz de Camões",
        "obra": "Os Lusíadas",
        "url": "https://pt.wikisource.org/wiki/Os_Lus%C3%ADadas_%28grafia_atualizada%29/I",
        "nota": ""
      },
      "enunciado": "Qual ideia o conjunto “nunca de antes” reforça no verso?",
      "alternativas": [
        {
          "id": "A",
          "texto": "A viagem terminou antes do que se esperava."
        },
        {
          "id": "B",
          "texto": "Os navegantes já conheciam bem aquelas águas."
        },
        {
          "id": "C",
          "texto": "O verso indica somente a posição dos mares."
        },
        {
          "id": "D",
          "texto": "A navegação é apresentada como inédita até então."
        }
      ],
      "respostaCorreta": "D",
      "habilidade": "interpretação temporal",
      "justificativa": "“Nunca” nega ocorrência anterior; “de antes” situa essa ausência no tempo.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 4,
      "ato": 1,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Antes tarde do que nunca.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Que contraste estrutura o sentido do provérbio?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Fazer algo com atraso é preferível a não fazê-lo."
        },
        {
          "id": "B",
          "texto": "Agir cedo tem menos valor do que nunca agir."
        },
        {
          "id": "C",
          "texto": "A frase afirma que todo atraso produz bom resultado."
        },
        {
          "id": "D",
          "texto": "A decisão depende apenas do momento escolhido."
        }
      ],
      "respostaCorreta": "A",
      "habilidade": "inferência",
      "justificativa": "O provérbio compara a ação tardia à ausência completa de ação.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 5,
      "ato": 1,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "De grão em grão, a galinha enche o papo.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual efeito a expressão “de grão em grão” produz?",
      "alternativas": [
        {
          "id": "A",
          "texto": "O resultado depende de uma única contribuição."
        },
        {
          "id": "B",
          "texto": "A constância importa menos que a quantidade inicial."
        },
        {
          "id": "C",
          "texto": "Pequenas contribuições se acumulam ao longo do tempo."
        },
        {
          "id": "D",
          "texto": "Cada contribuição produz o mesmo resultado imediato."
        }
      ],
      "respostaCorreta": "C",
      "habilidade": "efeito de sentido e locução",
      "justificativa": "A repetição da estrutura sugere pequenas contribuições acumuladas.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 6,
      "ato": 1,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Quem cedo madruga, Deus ajuda.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual substituição mantém melhor a circunstância indicada por “cedo”?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Com bastante cuidado e atenção."
        },
        {
          "id": "B",
          "texto": "Nas primeiras horas do dia."
        },
        {
          "id": "C",
          "texto": "Em um lugar muito distante."
        },
        {
          "id": "D",
          "texto": "Com pouca certeza sobre o resultado."
        }
      ],
      "respostaCorreta": "B",
      "habilidade": "substituição semântica",
      "justificativa": "“Nas primeiras horas do dia” preserva o valor temporal de “cedo”.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 7,
      "ato": 1,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Mais vale um pássaro na mão do que dois voando.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Nesse provérbio, “mais” participa de uma comparação de valor. Qual opção mantém essa relação?",
      "alternativas": [
        {
          "id": "A",
          "texto": "A quantidade menor é sempre a escolha mais segura."
        },
        {
          "id": "B",
          "texto": "Duas oportunidades valem mais que uma garantia concreta."
        },
        {
          "id": "C",
          "texto": "A escolha depende somente da chance de ganhar."
        },
        {
          "id": "D",
          "texto": "A garantia concreta vale mais que a chance incerta."
        }
      ],
      "respostaCorreta": "D",
      "habilidade": "comparação e inferência",
      "justificativa": "A comparação contrapõe algo garantido a uma possibilidade menos segura.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 8,
      "ato": 1,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Água mole em pedra dura, tanto bate até que fura.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Como “tanto... até que” contribui para a mensagem?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Relaciona a repetição da ação ao resultado alcançado."
        },
        {
          "id": "B",
          "texto": "Indica que o resultado ocorre antes da ação."
        },
        {
          "id": "C",
          "texto": "Expressa dúvida sobre a resistência da pedra."
        },
        {
          "id": "D",
          "texto": "Marca apenas o lugar em que a água cai."
        }
      ],
      "respostaCorreta": "A",
      "habilidade": "relação entre estrutura e sentido",
      "justificativa": "A estrutura relaciona insistência repetida a um resultado eventual.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 9,
      "ato": 1,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Quem não tem cão caça com gato.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual interpretação corresponde melhor ao provérbio?",
      "alternativas": [
        {
          "id": "A",
          "texto": "A falta de algo exige abandonar a tarefa."
        },
        {
          "id": "B",
          "texto": "Só se deve agir com todos os recursos."
        },
        {
          "id": "C",
          "texto": "A falta de um recurso leva a alternativas."
        },
        {
          "id": "D",
          "texto": "A ausência do recurso ideal pode impedir qualquer solução."
        }
      ],
      "respostaCorreta": "C",
      "habilidade": "inferência e sentido figurado",
      "justificativa": "O provérbio sugere adaptação diante da falta de um recurso ideal.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 10,
      "ato": 1,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "De noite, todos os gatos são pardos.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Que função a expressão “de noite” exerce?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Situa o provérbio em um horário específico."
        },
        {
          "id": "B",
          "texto": "Situa a generalização em uma circunstância temporal."
        },
        {
          "id": "C",
          "texto": "Indica que a cor dos gatos muda à noite."
        },
        {
          "id": "D",
          "texto": "Apresenta uma regra válida sem considerar contexto."
        }
      ],
      "respostaCorreta": "B",
      "habilidade": "circunstância temporal",
      "justificativa": "“De noite” é uma locução adverbial de tempo.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 11,
      "ato": 1,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Onde há fumaça, há fogo.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Na expressão “onde há fumaça”, que informação “onde” introduz?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Indica a causa associada à presença de fumaça."
        },
        {
          "id": "B",
          "texto": "Descreve a maneira como a fumaça se espalha."
        },
        {
          "id": "C",
          "texto": "Marca o grau de intensidade atribuído ao fogo."
        },
        {
          "id": "D",
          "texto": "Marca o lugar ou situação da ocorrência."
        }
      ],
      "respostaCorreta": "D",
      "habilidade": "referência espacial e interpretação",
      "justificativa": "“Onde” introduz uma referência espacial; o provérbio a usa também de modo figurado.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 12,
      "ato": 1,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Quem muito fala, pouco acerta.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual análise descreve corretamente “muito” e “pouco” nesse provérbio?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Modificam verbos e quantificam as ações."
        },
        {
          "id": "B",
          "texto": "Caracterizam os sujeitos e indicam suas qualidades."
        },
        {
          "id": "C",
          "texto": "Substituem substantivos mencionados no provérbio."
        },
        {
          "id": "D",
          "texto": "Situam as ações em lugares diferentes."
        }
      ],
      "respostaCorreta": "A",
      "habilidade": "classificação contextual",
      "justificativa": "Ambas as palavras modificam verbos, indicando quantidade ou intensidade da ação.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 13,
      "ato": 1,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "A cavalo dado não se olham os dentes.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual sentido figurado é tradicionalmente atribuído ao provérbio?",
      "alternativas": [
        {
          "id": "A",
          "texto": "O presente deve ser examinado com atenção maior."
        },
        {
          "id": "B",
          "texto": "A gratuidade torna obrigatório aceitar qualquer objeto."
        },
        {
          "id": "C",
          "texto": "Não convém exigir perfeição de algo recebido gratuitamente."
        },
        {
          "id": "D",
          "texto": "A aparência do presente revela todo seu valor."
        }
      ],
      "respostaCorreta": "C",
      "habilidade": "interpretação de sentido figurado",
      "justificativa": "A imagem dos dentes do cavalo representa a avaliação exigente de um presente.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 14,
      "ato": 1,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Quem ri por último ri melhor.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual paráfrase conserva melhor a ideia do provérbio?",
      "alternativas": [
        {
          "id": "A",
          "texto": "A reação inicial determina quem vence a disputa."
        },
        {
          "id": "B",
          "texto": "O desfecho pode importar mais que a reação inicial."
        },
        {
          "id": "C",
          "texto": "Uma vitória rápida garante o melhor resultado."
        },
        {
          "id": "D",
          "texto": "A última reação é menos relevante que a primeira."
        }
      ],
      "respostaCorreta": "B",
      "habilidade": "paráfrase e inferência",
      "justificativa": "O provérbio privilegia o desfecho, não a reação imediata.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 15,
      "ato": 1,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Não deixe para amanhã o que pode fazer hoje.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual contraste temporal sustenta o conselho?",
      "alternativas": [
        {
          "id": "A",
          "texto": "O passado é comparado ao lugar de trabalho."
        },
        {
          "id": "B",
          "texto": "A frase afirma que todas as tarefas duram um dia."
        },
        {
          "id": "C",
          "texto": "O amanhã é apresentado como impossível."
        },
        {
          "id": "D",
          "texto": "A ação possível no presente é contraposta ao adiamento."
        }
      ],
      "respostaCorreta": "D",
      "habilidade": "contraste temporal",
      "justificativa": "“Hoje” e “amanhã” opõem a oportunidade atual ao adiamento.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 16,
      "ato": 1,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Longe dos olhos, longe do coração.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Como deve ser entendida a repetição de “longe” no provérbio?",
      "alternativas": [
        {
          "id": "A",
          "texto": "A distância visual sugere afastamento emocional."
        },
        {
          "id": "B",
          "texto": "O afastamento visual sempre elimina os sentimentos."
        },
        {
          "id": "C",
          "texto": "A proximidade física aumenta a distância afetiva."
        },
        {
          "id": "D",
          "texto": "O provérbio compara visão e memória de modo literal."
        }
      ],
      "respostaCorreta": "A",
      "habilidade": "metáfora e efeito de sentido",
      "justificativa": "A distância física serve de imagem para o afastamento emocional.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 17,
      "ato": 1,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Quem tudo quer, tudo perde.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Na frase, qual é a classe gramatical de “tudo”?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Advérbio de intensidade nas duas ocorrências."
        },
        {
          "id": "B",
          "texto": "Verbo que retoma a ação de querer."
        },
        {
          "id": "C",
          "texto": "Pronome indefinido de sentido abrangente."
        },
        {
          "id": "D",
          "texto": "Adjetivo que descreve o sujeito."
        }
      ],
      "respostaCorreta": "C",
      "habilidade": "classe gramatical em contexto",
      "justificativa": "“Tudo” é pronome indefinido; não é advérbio nesse provérbio.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 18,
      "ato": 1,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Em terra de cego, quem tem um olho é rei.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual interpretação melhor expressa o sentido figurado?",
      "alternativas": [
        {
          "id": "A",
          "texto": "A posição social importa mais que as habilidades."
        },
        {
          "id": "B",
          "texto": "Uma vantagem pequena pode destacar alguém no grupo."
        },
        {
          "id": "C",
          "texto": "A frase descreve uma condição física literal."
        },
        {
          "id": "D",
          "texto": "Ter apenas um olho sempre garante liderança."
        }
      ],
      "respostaCorreta": "B",
      "habilidade": "inferência contextual",
      "justificativa": "O provérbio relaciona uma vantagem relativa às condições do grupo.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 19,
      "ato": 1,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Em boca fechada não entra mosca.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual conselho implícito costuma ser associado ao provérbio?",
      "alternativas": [
        {
          "id": "A",
          "texto": "É prudente evitar presentes em qualquer situação."
        },
        {
          "id": "B",
          "texto": "Toda conversa atrai insetos de modo literal."
        },
        {
          "id": "C",
          "texto": "O silêncio deve ser absoluto em qualquer contexto."
        },
        {
          "id": "D",
          "texto": "Falar menos pode evitar problemas desnecessários."
        }
      ],
      "respostaCorreta": "D",
      "habilidade": "interpretação pragmática",
      "justificativa": "A imagem literal funciona como conselho para ter cautela ao falar.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 20,
      "ato": 1,
      "tipo": "discursiva",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "O que os olhos não veem, o coração não sente.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Explique a relação entre as duas partes do provérbio. Depois, analise a função de “não” em cada oração e diga se a frase deve ser interpretada literalmente ou de modo figurado.",
      "rubrica": [
        "Identifica as duas orações",
        "Explica a negação em ambas",
        "Reconhece a relação figurada entre percepção e sentimento"
      ],
      "respostaEsperada": "“Não” nega os verbos “veem” e “sente”. O provérbio sugere figuradamente que aquilo de que não se tem conhecimento pode causar menos impacto emocional; não é uma regra literal sobre os sentidos.",
      "tempoSegundos": 300,
      "pontosBase": null,
      "observacaoCorrecao": "Correção pelo professor: usar a rubrica; não atribuir pontuação parcial automática."
    },
    {
      "id": 21,
      "ato": 2,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Quem não arrisca, não petisca.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Como a repetição de “não” estrutura o provérbio?",
      "alternativas": [
        {
          "id": "A",
          "texto": "A falta de risco e o prêmio são independentes."
        },
        {
          "id": "B",
          "texto": "Arriscar garante recompensa sem nenhuma condição."
        },
        {
          "id": "C",
          "texto": "Relaciona a ausência de risco à ausência de recompensa."
        },
        {
          "id": "D",
          "texto": "Afirma que as duas ações não têm relação."
        }
      ],
      "respostaCorreta": "C",
      "habilidade": "negação e relação lógica",
      "justificativa": "A construção apresenta risco como condição para obter uma recompensa.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 22,
      "ato": 2,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "A pressa é inimiga da perfeição.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual análise gramatical está correta para “pressa” nessa frase?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Substantivo que nomeia uma condição."
        },
        {
          "id": "B",
          "texto": "Advérbio que modifica diretamente o verbo “é”."
        },
        {
          "id": "C",
          "texto": "Adjetivo que acompanha o nome “perfeição”."
        },
        {
          "id": "D",
          "texto": "Conjunção que une duas orações independentes."
        }
      ],
      "respostaCorreta": "A",
      "habilidade": "classe gramatical",
      "justificativa": "“Pressa” nomeia uma condição e funciona como núcleo do sujeito.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 23,
      "ato": 2,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Cada um sabe onde o sapato aperta.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "No provérbio, o trecho introduzido por “onde” contribui para: ",
      "alternativas": [
        {
          "id": "A",
          "texto": "Marca a intensidade do verbo “sabe”."
        },
        {
          "id": "B",
          "texto": "Negação de que o sapato realmente aperte."
        },
        {
          "id": "C",
          "texto": "Descreve uma ação futura e ainda incerta."
        },
        {
          "id": "D",
          "texto": "Localiza figuradamente uma dificuldade pessoal."
        }
      ],
      "respostaCorreta": "D",
      "habilidade": "referência espacial e metáfora",
      "justificativa": "“Onde” introduz uma referência de lugar usada figuradamente para falar de dificuldades particulares.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 24,
      "ato": 2,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Nem tudo que reluz é ouro.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual conclusão melhor respeita a expressão “nem tudo”?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Toda aparência brilhante revela valor verdadeiro."
        },
        {
          "id": "B",
          "texto": "Brilho não garante valor nem autenticidade."
        },
        {
          "id": "C",
          "texto": "Nem tudo que brilha tem valor real."
        },
        {
          "id": "D",
          "texto": "O ouro não costuma refletir luz."
        }
      ],
      "respostaCorreta": "B",
      "habilidade": "generalização e sentido figurado",
      "justificativa": "“Nem tudo” limita a generalização; aparência e valor não são equivalentes.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 25,
      "ato": 2,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "A palavra é de prata, o silêncio é de ouro.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Que oposição organiza a imagem desse provérbio?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Os metais definem o valor exato de cada palavra."
        },
        {
          "id": "B",
          "texto": "O silêncio é superior em todas as situações."
        },
        {
          "id": "C",
          "texto": "Fala e silêncio recebem valores simbólicos opostos."
        },
        {
          "id": "D",
          "texto": "A frase descreve metais sem relação com comunicação."
        }
      ],
      "respostaCorreta": "C",
      "habilidade": "contraste metafórico",
      "justificativa": "Prata e ouro funcionam como imagens para comparar fala e silêncio.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 26,
      "ato": 2,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Antes só do que mal acompanhado.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual é a função de “mal” na expressão “mal acompanhado”?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Modifica “acompanhado” e indica condição desfavorável."
        },
        {
          "id": "B",
          "texto": "Nomeia a companhia como um mal concreto."
        },
        {
          "id": "C",
          "texto": "Indica o momento em que a companhia chega."
        },
        {
          "id": "D",
          "texto": "Retoma uma pessoa mencionada anteriormente."
        }
      ],
      "respostaCorreta": "A",
      "habilidade": "classe gramatical em contexto",
      "justificativa": "“Mal” modifica “acompanhado” e expressa uma condição desfavorável.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 27,
      "ato": 2,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "A mentira tem perna curta.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Em sentido figurado, o que significa dizer que a mentira tem “perna curta”?",
      "alternativas": [
        {
          "id": "A",
          "texto": "A mentira é sempre contada em voz baixa."
        },
        {
          "id": "B",
          "texto": "A mentira desaparece quando é pouco repetida."
        },
        {
          "id": "C",
          "texto": "A mentira só dura poucos segundos literalmente."
        },
        {
          "id": "D",
          "texto": "A mentira não se sustenta por muito tempo."
        }
      ],
      "respostaCorreta": "D",
      "habilidade": "metáfora e inferência",
      "justificativa": "A “perna curta” representa a dificuldade de a mentira avançar sem ser descoberta.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 28,
      "ato": 2,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "O barato sai caro.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Na construção “sai caro”, qual análise é mais adequada?",
      "alternativas": [
        {
          "id": "A",
          "texto": "“Caro” é advérbio que indica tempo."
        },
        {
          "id": "B",
          "texto": "Adjetivo predicativo que avalia o resultado."
        },
        {
          "id": "C",
          "texto": "Pronome que substitui o termo “barato”."
        },
        {
          "id": "D",
          "texto": "Conjunção que introduz uma oposição."
        }
      ],
      "respostaCorreta": "B",
      "habilidade": "sintaxe e classe gramatical",
      "justificativa": "“Caro” caracteriza o resultado expresso pelo verbo de ligação ou mudança “sai” no uso idiomático.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 29,
      "ato": 2,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Cada macaco no seu galho.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual leitura figurada melhor explica o conselho?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Cada pessoa deve agir em seu âmbito."
        },
        {
          "id": "B",
          "texto": "O provérbio recomenda que macacos vivam separados."
        },
        {
          "id": "C",
          "texto": "Nenhuma pessoa deve mudar de lugar."
        },
        {
          "id": "D",
          "texto": "O galho determina a velocidade de cada ação."
        }
      ],
      "respostaCorreta": "A",
      "habilidade": "inferência e pragmática",
      "justificativa": "O provérbio recomenda respeitar limites, responsabilidades ou espaços de atuação.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 30,
      "ato": 2,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "De boas intenções o inferno está cheio.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual é a análise correta da palavra “boas”?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Advérbio que indica como o inferno está cheio."
        },
        {
          "id": "B",
          "texto": "Pronome que substitui o substantivo “intenções”."
        },
        {
          "id": "C",
          "texto": "Adjetivo que caracteriza o substantivo “intenções”."
        },
        {
          "id": "D",
          "texto": "Verbo que indica uma ação no passado."
        }
      ],
      "respostaCorreta": "C",
      "habilidade": "classe gramatical",
      "justificativa": "“Boas” concorda com o substantivo “intenções” e o caracteriza.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 31,
      "ato": 2,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Quem semeia ventos colhe tempestades.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual relação de sentido o provérbio apresenta?",
      "alternativas": [
        {
          "id": "A",
          "texto": "As consequências surgem sem relação com a ação."
        },
        {
          "id": "B",
          "texto": "O provérbio recomenda evitar o plantio em dias ventosos."
        },
        {
          "id": "C",
          "texto": "A colheita depende apenas das condições climáticas."
        },
        {
          "id": "D",
          "texto": "Atitudes provocadoras podem gerar consequências inesperadas."
        }
      ],
      "respostaCorreta": "D",
      "habilidade": "inferência causal e metáfora",
      "justificativa": "Vento e tempestade simbolizam ações e consequências relacionadas.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 32,
      "ato": 2,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "O seguro morreu de velho.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual leitura figurada combina melhor com o provérbio?",
      "alternativas": [
        {
          "id": "A",
          "texto": "A idade avançada é garantia de segurança."
        },
        {
          "id": "B",
          "texto": "A prudência ajuda a evitar riscos."
        },
        {
          "id": "C",
          "texto": "Toda pessoa cuidadosa morre jovem."
        },
        {
          "id": "D",
          "texto": "O provérbio recomenda evitar qualquer planejamento."
        }
      ],
      "respostaCorreta": "B",
      "habilidade": "interpretação de sentido figurado",
      "justificativa": "A expressão tradicional valoriza a cautela, não a idade como causa literal.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 33,
      "ato": 2,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "A ocasião faz o ladrão.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Que leitura crítica é mais adequada para esse provérbio?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Uma ocasião pode facilitar, mas não desculpa a escolha."
        },
        {
          "id": "B",
          "texto": "Qualquer oportunidade transforma a pessoa em criminosa."
        },
        {
          "id": "C",
          "texto": "A ocasião sempre justifica uma escolha indevida."
        },
        {
          "id": "D",
          "texto": "A frase informa apenas o local do roubo."
        }
      ],
      "respostaCorreta": "A",
      "habilidade": "interpretação crítica e inferência",
      "justificativa": "A leitura cuidadosa distingue a ocasião facilitadora da responsabilidade individual.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 34,
      "ato": 2,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Quem com ferro fere, com ferro será ferido.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Que papel a repetição de “com ferro” desempenha?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Compara o instrumento usado nas duas situações."
        },
        {
          "id": "B",
          "texto": "Apresenta os objetos sem relação entre si."
        },
        {
          "id": "C",
          "texto": "Repete o meio da ação na consequência figurada."
        },
        {
          "id": "D",
          "texto": "Indica o tempo em que a ação aconteceu."
        }
      ],
      "respostaCorreta": "C",
      "habilidade": "paralelismo e inferência",
      "justificativa": "A repetição cria paralelismo entre a ação inicial e a consequência.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 35,
      "ato": 2,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Cão que ladra não morde.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual interpretação evita tomar o provérbio como regra literal universal?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Todo cão barulhento é incapaz de atacar."
        },
        {
          "id": "B",
          "texto": "Latir é um sinal seguro de medo."
        },
        {
          "id": "C",
          "texto": "O provérbio descreve apenas a alimentação dos cães."
        },
        {
          "id": "D",
          "texto": "Uma ameaça ostensiva nem sempre vira ação concreta."
        }
      ],
      "respostaCorreta": "D",
      "habilidade": "interpretação e generalização",
      "justificativa": "O provérbio é uma generalização figurada, não uma lei biológica absoluta.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 36,
      "ato": 2,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Não se deve julgar um livro pela capa.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "O que “pela capa” representa na interpretação figurada?",
      "alternativas": [
        {
          "id": "A",
          "texto": "A capa é o lugar onde o livro é guardado."
        },
        {
          "id": "B",
          "texto": "A aparência não basta para avaliar o conteúdo."
        },
        {
          "id": "C",
          "texto": "É necessário começar a leitura pela última página."
        },
        {
          "id": "D",
          "texto": "A capa revela com exatidão a qualidade do texto."
        }
      ],
      "respostaCorreta": "B",
      "habilidade": "metáfora e critério de avaliação",
      "justificativa": "“Capa” representa a aparência externa; o conselho critica avaliações superficiais.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 37,
      "ato": 2,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Deus tarda, mas não falha.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual contraste é criado por “tarda, mas não falha”?",
      "alternativas": [
        {
          "id": "A",
          "texto": "A demora contrasta com a confiança no resultado."
        },
        {
          "id": "B",
          "texto": "O local é contrastado com a maneira da ação."
        },
        {
          "id": "C",
          "texto": "A frase afirma que duas ações ocorrem simultaneamente."
        },
        {
          "id": "D",
          "texto": "A segunda oração cancela completamente a primeira."
        }
      ],
      "respostaCorreta": "A",
      "habilidade": "conectivos e contraste",
      "justificativa": "“Mas” cria oposição entre demora e resultado esperado.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 38,
      "ato": 2,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Quem procura, acha.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual inferência resume melhor a ideia do provérbio?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Toda busca acontece sem esforço algum."
        },
        {
          "id": "B",
          "texto": "O resultado independe da procura realizada."
        },
        {
          "id": "C",
          "texto": "Procurar pode aumentar a chance de encontrar."
        },
        {
          "id": "D",
          "texto": "Encontrar algo impede qualquer busca futura."
        }
      ],
      "respostaCorreta": "C",
      "habilidade": "inferência",
      "justificativa": "O provérbio relaciona a ação de procurar à possibilidade de encontrar.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 39,
      "ato": 2,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Citação literária",
        "texto": "Eu muitas vezes [...] viajo até à minha janela",
        "autor": "Almeida Garrett",
        "obra": "Viagens na Minha Terra",
        "url": "https://pt.wikisource.org/wiki/Viagens_na_Minha_Terra_%281846%29/I",
        "nota": "Trecho abreviado com reticências; conferir o contexto integral na fonte."
      },
      "enunciado": "No trecho, qual é o efeito de “muitas vezes” na narração do hábito do narrador?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Restringe a experiência a uma só ocasião."
        },
        {
          "id": "B",
          "texto": "Indica a frequência do hábito narrado."
        },
        {
          "id": "C",
          "texto": "Localiza exatamente o destino final da viagem."
        },
        {
          "id": "D",
          "texto": "Nega que o narrador tenha viajado."
        }
      ],
      "respostaCorreta": "B",
      "habilidade": "frequência e voz narrativa",
      "justificativa": "“Muitas vezes” indica frequência; o contexto mostra que a viagem é imaginada no próprio quarto.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 40,
      "ato": 2,
      "tipo": "discursiva",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Fala pouco e bem, e ter-te-ão por alguém.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Interprete o conselho do provérbio. Explique a função de “pouco” e “bem” e discuta por que a frase valoriza a qualidade da fala, não apenas sua quantidade.",
      "rubrica": [
        "Classifica “pouco” em relação ao ato de falar",
        "Explica o valor de modo de “bem”",
        "Interpreta o conselho sem transformá-lo numa regra absoluta"
      ],
      "respostaEsperada": "“Pouco” indica quantidade limitada da fala e “bem” indica modo. O provérbio valoriza concisão e qualidade, mas a resposta deve reconhecer que o contexto também importa.",
      "tempoSegundos": 300,
      "pontosBase": null,
      "observacaoCorrecao": "Correção pelo professor: usar a rubrica; não atribuir pontuação parcial automática."
    },
    {
      "id": 41,
      "ato": 3,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Citação literária",
        "texto": "Passaram ainda além da Taprobana",
        "autor": "Luís Vaz de Camões",
        "obra": "Os Lusíadas",
        "url": "https://pt.wikisource.org/wiki/Os_Lus%C3%ADadas_%28grafia_atualizada%29/I",
        "nota": ""
      },
      "enunciado": "No fragmento, o que “ainda além” transmite à descrição da viagem?",
      "alternativas": [
        {
          "id": "A",
          "texto": "A travessia terminou antes de sair do porto."
        },
        {
          "id": "B",
          "texto": "Os navegantes já conheciam aquelas águas."
        },
        {
          "id": "C",
          "texto": "O verso informa apenas a posição dos mares."
        },
        {
          "id": "D",
          "texto": "Ultrapassa um limite e amplia a viagem."
        }
      ],
      "respostaCorreta": "D",
      "habilidade": "interpretação espacial e progressão",
      "justificativa": "“Ainda além” reforça a ideia de ultrapassagem e extensão do percurso.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 42,
      "ato": 3,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Citação literária",
        "texto": "Mais do que prometia a força humana",
        "autor": "Luís Vaz de Camões",
        "obra": "Os Lusíadas",
        "url": "https://pt.wikisource.org/wiki/Os_Lus%C3%ADadas_%28grafia_atualizada%29/I",
        "nota": ""
      },
      "enunciado": "Qual é a função de “mais” nessa comparação?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Indica um lugar ainda desconhecido."
        },
        {
          "id": "B",
          "texto": "Destaca feitos acima da expectativa humana."
        },
        {
          "id": "C",
          "texto": "Nega que os feitos tenham acontecido."
        },
        {
          "id": "D",
          "texto": "Expressa a frequência das viagens narradas."
        }
      ],
      "respostaCorreta": "B",
      "habilidade": "comparação de grau",
      "justificativa": "“Mais do que” estabelece comparação de grau entre os feitos e a expectativa humana.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 43,
      "ato": 3,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Não há bem que sempre dure, nem mal que nunca se acabe.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual conclusão é sustentada pelo contraste entre “sempre” e “nunca”?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Nenhum estado é apresentado como eterno."
        },
        {
          "id": "B",
          "texto": "O bem acontece apenas durante a noite."
        },
        {
          "id": "C",
          "texto": "O mal nunca pode mudar de intensidade."
        },
        {
          "id": "D",
          "texto": "Toda mudança ocorre imediatamente."
        }
      ],
      "respostaCorreta": "A",
      "habilidade": "interpretação temporal e contraste",
      "justificativa": "Os advérbios temporais reforçam a ideia de que condições não duram indefinidamente.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 44,
      "ato": 3,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Citação literária",
        "texto": "Não tive filhos, não transmiti a nenhuma criatura o legado da nossa miséria.",
        "autor": "Machado de Assis",
        "obra": "Memórias Póstumas de Brás Cubas",
        "url": "https://pt.wikisource.org/wiki/Mem%C3%B3rias_P%C3%B3stumas_de_Br%C3%A1s_Cubas/CLX",
        "nota": ""
      },
      "enunciado": "O que a repetição de “não” faz na frase final do romance?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Transforma os verbos em substantivos."
        },
        {
          "id": "B",
          "texto": "Situa as ações em lugares diferentes."
        },
        {
          "id": "C",
          "texto": "Cria negações paralelas e um tom pessimista."
        },
        {
          "id": "D",
          "texto": "Expressa incerteza sobre a existência de filhos."
        }
      ],
      "respostaCorreta": "C",
      "habilidade": "paralelismo, negação e tom",
      "justificativa": "As duas negações paralelas sustentam a conclusão pessimista do narrador.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 45,
      "ato": 3,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Fala de personagem",
        "texto": "Ao vencedor, as batatas!",
        "autor": "Quincas Borba",
        "obra": "Quincas Borba, capítulo XVIII",
        "url": "https://pt.wikisource.org/wiki/Quincas_Borba/XVIII",
        "nota": ""
      },
      "enunciado": "No contexto do romance, por que a frase se tornou uma fórmula para Rubião?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Descreve literalmente uma receita culinária."
        },
        {
          "id": "B",
          "texto": "Resume a lógica de vantagem do vencedor."
        },
        {
          "id": "C",
          "texto": "Recomenda dividir tudo de forma igual."
        },
        {
          "id": "D",
          "texto": "Anuncia o fim de qualquer disputa."
        }
      ],
      "respostaCorreta": "B",
      "habilidade": "interpretação de fala e contexto",
      "justificativa": "A fórmula resume a alegoria de disputa em que uma parte vence e fica com os recursos.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 46,
      "ato": 3,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Citação literária",
        "texto": "Sobre a nudez forte da Verdade — o manto diáfano da Fantasia",
        "autor": "Eça de Queirós",
        "obra": "A Relíquia — epígrafe",
        "url": "https://pt.wikisource.org/wiki/A_Rel%C3%ADquia",
        "nota": ""
      },
      "enunciado": "Qual oposição organiza a imagem dessa epígrafe?",
      "alternativas": [
        {
          "id": "A",
          "texto": "A oposição ocorre entre dois espaços geográficos."
        },
        {
          "id": "B",
          "texto": "O contraste se dá entre passado e futuro."
        },
        {
          "id": "C",
          "texto": "A imagem compara fala e silêncio literalmente."
        },
        {
          "id": "D",
          "texto": "Verdade exposta contrasta com fantasia que a reveste."
        }
      ],
      "respostaCorreta": "D",
      "habilidade": "metáfora e oposição",
      "justificativa": "A nudez e o manto formam uma metáfora para verdade e fantasia.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 47,
      "ato": 3,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Citação literária",
        "texto": "Uma resposta branda desvia o furor.",
        "autor": "Tradição bíblica",
        "obra": "Provérbios 15:1 — Tradução Brasileira da Bíblia",
        "url": "https://pt.wikisource.org/wiki/Tradu%C3%A7%C3%A3o_Brasileira_da_B%C3%ADblia/Prov%C3%A9rbios/XV",
        "nota": ""
      },
      "enunciado": "Qual alternativa preserva melhor o sentido sem repetir literalmente a citação?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Uma fala calma pode amenizar conflitos."
        },
        {
          "id": "B",
          "texto": "A frase garante que qualquer conflito desapareça."
        },
        {
          "id": "C",
          "texto": "O silêncio é apresentado como única resposta possível."
        },
        {
          "id": "D",
          "texto": "O efeito depende de respostas sempre longas."
        }
      ],
      "respostaCorreta": "A",
      "habilidade": "paráfrase e modalização",
      "justificativa": "A paráfrase conserva a ideia, sem transformar o conselho em garantia absoluta.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 48,
      "ato": 3,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "O peixe morre pela boca.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual aplicação figurada corresponde melhor ao provérbio?",
      "alternativas": [
        {
          "id": "A",
          "texto": "A comunicação deve ser evitada por completo."
        },
        {
          "id": "B",
          "texto": "A frase fala literalmente sobre peixes e alimentação."
        },
        {
          "id": "C",
          "texto": "Falas imprudentes podem trazer problemas."
        },
        {
          "id": "D",
          "texto": "Toda conversa provoca danos inevitáveis."
        }
      ],
      "respostaCorreta": "C",
      "habilidade": "inferência pragmática",
      "justificativa": "A imagem alerta para consequências de palavras ditas sem cuidado.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 49,
      "ato": 3,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "A esperança é a última que morre.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual sentido figurado é construído ao tratar a esperança como algo que “morre”?",
      "alternativas": [
        {
          "id": "A",
          "texto": "A esperança é tratada literalmente como pessoa."
        },
        {
          "id": "B",
          "texto": "A frase garante vida eterna às pessoas esperançosas."
        },
        {
          "id": "C",
          "texto": "A esperança desaparece antes de qualquer dificuldade."
        },
        {
          "id": "D",
          "texto": "A esperança persiste quando alternativas parecem esgotadas."
        }
      ],
      "respostaCorreta": "D",
      "habilidade": "personificação e interpretação",
      "justificativa": "O provérbio personifica a esperança e indica sua permanência simbólica.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 50,
      "ato": 3,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "O pior cego é aquele que não quer ver.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual diferença há entre não conseguir ver e “não querer ver” no sentido figurado?",
      "alternativas": [
        {
          "id": "A",
          "texto": "As duas expressões indicam apenas limitação física."
        },
        {
          "id": "B",
          "texto": "Sugere recusa em reconhecer algo disponível."
        },
        {
          "id": "C",
          "texto": "A frase trata somente da falta de iluminação."
        },
        {
          "id": "D",
          "texto": "A primeira expressão sempre indica escolha voluntária."
        }
      ],
      "respostaCorreta": "B",
      "habilidade": "interpretação e intenção",
      "justificativa": "“Não querer ver” sugere resistência deliberada a reconhecer uma realidade.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 51,
      "ato": 3,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Pau que nasce torto, morre torto.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Em “morre torto”, por que “torto” não é necessariamente um advérbio?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Porque caracteriza o estado do sujeito, funcionando como predicativo."
        },
        {
          "id": "B",
          "texto": "Porque descreve o modo de morrer, sem caracterizar o sujeito."
        },
        {
          "id": "C",
          "texto": "Porque funciona como complemento do verbo, e não como predicativo."
        },
        {
          "id": "D",
          "texto": "Porque acompanha o verbo como adjunto adverbial em qualquer uso."
        }
      ],
      "respostaCorreta": "A",
      "habilidade": "sintaxe e classe gramatical",
      "justificativa": "“Torto” caracteriza o sujeito e não modifica a maneira do verbo como um advérbio típico.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 52,
      "ato": 3,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "A galinha do vizinho é sempre mais gorda.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Que combinação ajuda a construir a ideia de comparação enviesada?",
      "alternativas": [
        {
          "id": "A",
          "texto": "“Do vizinho” e “galinha” negam a comparação."
        },
        {
          "id": "B",
          "texto": "“Sempre” indica repetição e “mais” amplia a comparação."
        },
        {
          "id": "C",
          "texto": "A frase se refere a uma única galinha literal."
        },
        {
          "id": "D",
          "texto": "“Gorda” é advérbio de tempo nessa frase."
        }
      ],
      "respostaCorreta": "C",
      "habilidade": "generalização e grau comparativo",
      "justificativa": "A generalização por “sempre” e a comparação por “mais” sustentam o provérbio.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 53,
      "ato": 3,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Quem tem boca vai a Roma.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual sentido figurado é sugerido pela expressão “vai a Roma”?",
      "alternativas": [
        {
          "id": "A",
          "texto": "O acesso a informações depende apenas de viajar."
        },
        {
          "id": "B",
          "texto": "Perguntar e comunicar-se pode ajudar a abrir caminhos."
        },
        {
          "id": "C",
          "texto": "Só quem conhece Roma consegue pedir informações."
        },
        {
          "id": "D",
          "texto": "O provérbio recomenda evitar pedidos de informação."
        }
      ],
      "respostaCorreta": "B",
      "habilidade": "interpretação de expressão idiomática",
      "justificativa": "“Ir a Roma” é entendido figuradamente como alcançar um destino com ajuda da comunicação.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 54,
      "ato": 3,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "O bom filho à casa torna.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual alternativa explica melhor a função de “à casa” na frase?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Indica a intensidade do verbo “torna”."
        },
        {
          "id": "B",
          "texto": "Expressa dúvida sobre a volta para casa."
        },
        {
          "id": "C",
          "texto": "Nega que exista um retorno possível."
        },
        {
          "id": "D",
          "texto": "Indica o destino do retorno."
        }
      ],
      "respostaCorreta": "D",
      "habilidade": "complemento espacial",
      "justificativa": "“À casa” identifica o destino do retorno e forma uma expressão de valor espacial.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 55,
      "ato": 3,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Depois da tempestade vem a bonança.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual papel “depois” desempenha no provérbio?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Ordena os fatos e sugere melhora posterior."
        },
        {
          "id": "B",
          "texto": "A expressão informa apenas o lugar da tempestade."
        },
        {
          "id": "C",
          "texto": "Nega que a tempestade tenha ocorrido no passado."
        },
        {
          "id": "D",
          "texto": "Apresenta a quantidade de acontecimentos narrados."
        }
      ],
      "respostaCorreta": "A",
      "habilidade": "tempo e inferência figurada",
      "justificativa": "“Depois” ordena temporalmente os acontecimentos e favorece a leitura de superação.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 56,
      "ato": 3,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Tudo a seu tempo.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual conselho está implícito nessa expressão?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Tudo acontece simultaneamente, sem ordem temporal."
        },
        {
          "id": "B",
          "texto": "O momento não influencia a realização das tarefas."
        },
        {
          "id": "C",
          "texto": "Há momentos adequados para diferentes acontecimentos ou tarefas."
        },
        {
          "id": "D",
          "texto": "A expressão recomenda abandonar tarefas difíceis."
        }
      ],
      "respostaCorreta": "C",
      "habilidade": "interpretação pragmática",
      "justificativa": "A expressão recomenda respeitar o momento apropriado para cada coisa.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 57,
      "ato": 3,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Citação literária",
        "texto": "Já se viam chegados junto à terra",
        "autor": "Luís Vaz de Camões",
        "obra": "Os Lusíadas",
        "url": "https://pt.wikisource.org/wiki/Os_Lus%C3%ADadas_%28grafia_atualizada%29/VII",
        "nota": ""
      },
      "enunciado": "Qual papel “já” desempenha ao abrir o verso?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Indica a localização da terra visitada."
        },
        {
          "id": "B",
          "texto": "Nega que a chegada tenha ocorrido."
        },
        {
          "id": "C",
          "texto": "Expressa hipótese sem marcar tempo."
        },
        {
          "id": "D",
          "texto": "Marca a chegada como alcançada nesse ponto."
        }
      ],
      "respostaCorreta": "D",
      "habilidade": "aspecto temporal e progressão narrativa",
      "justificativa": "“Já” situa a chegada como alcançada no estágio narrado.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 58,
      "ato": 3,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Quem conta um conto aumenta um ponto.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual fenômeno de comunicação o provérbio critica?",
      "alternativas": [
        {
          "id": "A",
          "texto": "A história fica menor ao ser transmitida."
        },
        {
          "id": "B",
          "texto": "Relatos podem ganhar ou mudar detalhes ao circular."
        },
        {
          "id": "C",
          "texto": "As histórias precisam ser contadas em ordem cronológica."
        },
        {
          "id": "D",
          "texto": "A memória impede que qualquer detalhe seja modificado."
        }
      ],
      "respostaCorreta": "B",
      "habilidade": "inferência e comunicação",
      "justificativa": "O provérbio alerta para mudanças que podem ocorrer na transmissão de relatos.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 59,
      "ato": 3,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "De médico e louco, todos temos um pouco.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual é o efeito de “todos” e “um pouco” na formulação?",
      "alternativas": [
        {
          "id": "A",
          "texto": "A frase generaliza sem limitar o grau atribuído."
        },
        {
          "id": "B",
          "texto": "Todas as pessoas têm a mesma intensidade dessa característica."
        },
        {
          "id": "C",
          "texto": "A frase generaliza a afirmação, mas limita o grau."
        },
        {
          "id": "D",
          "texto": "As expressões indicam exclusivamente lugar."
        }
      ],
      "respostaCorreta": "C",
      "habilidade": "generalização e grau",
      "justificativa": "“Todos” amplia o conjunto; “um pouco” limita o grau da característica atribuída.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 60,
      "ato": 3,
      "tipo": "discursiva",
      "fonte": {
        "tipo": "Citação literária",
        "texto": "A paisagem depende do ponto de vista.",
        "autor": "Machado de Assis",
        "obra": "Quincas Borba, capítulo XVIII",
        "url": "https://pt.wikisource.org/wiki/Quincas_Borba/XVIII",
        "nota": ""
      },
      "enunciado": "Explique como a frase se relaciona à interpretação de uma situação. Depois, analise a expressão “do ponto de vista” e diga se ela funciona como advérbio, locução adverbial ou complemento de “depende” nessa construção.",
      "rubrica": [
        "Explica a ideia de perspectiva",
        "Classifica sintaticamente “do ponto de vista” no contexto",
        "Justifica a análise usando a relação com o verbo “depende”"
      ],
      "respostaEsperada": "A frase sugere que a interpretação pode mudar conforme a perspectiva. Na construção apresentada, “do ponto de vista” é complemento preposicionado de “depende”, não um advérbio nem uma locução adverbial livre.",
      "tempoSegundos": 300,
      "pontosBase": null,
      "observacaoCorrecao": "Correção pelo professor: usar a rubrica; não atribuir pontuação parcial automática."
    },
    {
      "id": 61,
      "ato": 4,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "A palavra dada não volta atrás.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual sentido figurado “não volta atrás” transmite?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Compromisso assumido não deve ser desfeito facilmente."
        },
        {
          "id": "B",
          "texto": "As palavras retornam fisicamente ao ponto inicial."
        },
        {
          "id": "C",
          "texto": "Toda fala deve ser repetida no futuro."
        },
        {
          "id": "D",
          "texto": "O provérbio trata apenas de mudança de lugar."
        }
      ],
      "respostaCorreta": "A",
      "habilidade": "metáfora e compromisso",
      "justificativa": "“Voltar atrás” é uma expressão idiomática que indica desfazer uma decisão ou compromisso.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 62,
      "ato": 4,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "O tempo tudo cura.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Na frase, “tudo” exerce qual função?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Advérbio que descreve como o tempo passa."
        },
        {
          "id": "B",
          "texto": "Verbo que expressa a ação principal."
        },
        {
          "id": "C",
          "texto": "Adjetivo que caracteriza o substantivo “tempo”."
        },
        {
          "id": "D",
          "texto": "Pronome indefinido de sentido abrangente."
        }
      ],
      "respostaCorreta": "D",
      "habilidade": "classe gramatical e generalização",
      "justificativa": "“Tudo” é pronome indefinido e amplia a referência do objeto de “cura”.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 63,
      "ato": 4,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Quem vê cara não vê coração.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual contraste figurado é construído por “cara” e “coração”?",
      "alternativas": [
        {
          "id": "A",
          "texto": "A aparência é externa e o caráter é interior."
        },
        {
          "id": "B",
          "texto": "A aparência externa difere do caráter interior."
        },
        {
          "id": "C",
          "texto": "Duas partes do corpo aparecem em contraste literal."
        },
        {
          "id": "D",
          "texto": "A frase compara dois lugares distantes."
        }
      ],
      "respostaCorreta": "B",
      "habilidade": "metáfora e contraste",
      "justificativa": "“Cara” representa a aparência e “coração” simboliza sentimentos ou caráter.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 64,
      "ato": 4,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "A necessidade não conhece lei.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Que efeito a personificação produz nessa frase?",
      "alternativas": [
        {
          "id": "A",
          "texto": "A necessidade é apresentada como lugar físico."
        },
        {
          "id": "B",
          "texto": "A lei funciona como advérbio nessa frase."
        },
        {
          "id": "C",
          "texto": "Atribui ação humana à necessidade, destacando sua força."
        },
        {
          "id": "D",
          "texto": "A frase afirma que todas as leis deixaram de existir."
        }
      ],
      "respostaCorreta": "C",
      "habilidade": "personificação e interpretação crítica",
      "justificativa": "A personificação atribui à necessidade a capacidade humana de conhecer ou ignorar regras.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 65,
      "ato": 4,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Quando a esmola é demais, o santo desconfia.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual inferência é mais adequada para “demais” nesse provérbio?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Indica o lugar em que se oferece a esmola."
        },
        {
          "id": "B",
          "texto": "Nega que a esmola tenha sido dada."
        },
        {
          "id": "C",
          "texto": "Apresenta o santo como alguém sem suspeitas."
        },
        {
          "id": "D",
          "texto": "Indica excesso e pode despertar suspeita."
        }
      ],
      "respostaCorreta": "D",
      "habilidade": "grau e inferência pragmática",
      "justificativa": "“Demais” indica excesso; o provérbio relaciona excesso inesperado à desconfiança.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 66,
      "ato": 4,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Quando um não quer, dois não brigam.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual é a função de “quando” nesse provérbio?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Introduz a condição em que a briga não ocorre."
        },
        {
          "id": "B",
          "texto": "Intensifica a ação verbal descrita no provérbio."
        },
        {
          "id": "C",
          "texto": "Substitui o sujeito por uma referência indefinida."
        },
        {
          "id": "D",
          "texto": "Apresenta a situação em que a briga é evitada."
        }
      ],
      "respostaCorreta": "A",
      "habilidade": "conectivo e condição",
      "justificativa": "“Quando” introduz a situação em que a ausência de vontade de uma parte impede o conflito descrito.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 67,
      "ato": 4,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Gato escaldado tem medo de água fria.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual leitura figurada corresponde melhor ao provérbio?",
      "alternativas": [
        {
          "id": "A",
          "texto": "A água fria sempre provoca medo nos gatos."
        },
        {
          "id": "B",
          "texto": "Toda experiência anterior produz o mesmo resultado."
        },
        {
          "id": "C",
          "texto": "Uma experiência ruim pode gerar cautela futura."
        },
        {
          "id": "D",
          "texto": "A frase proíbe o uso de água fria."
        }
      ],
      "respostaCorreta": "C",
      "habilidade": "generalização e inferência",
      "justificativa": "O provérbio associa uma experiência ruim anterior a maior cautela posterior.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 68,
      "ato": 4,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "O hábito não faz o monge.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual sentido figurado é sugerido por “hábito” nessa frase?",
      "alternativas": [
        {
          "id": "A",
          "texto": "A rotina diária define por completo a identidade."
        },
        {
          "id": "B",
          "texto": "A aparência não garante identidade ou caráter."
        },
        {
          "id": "C",
          "texto": "O monge precisa mudar de profissão."
        },
        {
          "id": "D",
          "texto": "O hábito indica apenas uma circunstância temporal."
        }
      ],
      "respostaCorreta": "B",
      "habilidade": "polissemia e metáfora",
      "justificativa": "“Hábito” remete à roupa religiosa e à aparência externa, que não garantem identidade ou caráter.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 69,
      "ato": 4,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Citação literária",
        "texto": "Todo o mundo é um palco",
        "autor": "William Shakespeare",
        "obra": "As You Like It, ato II, cena VII (tradução livre do verso “All the world's a stage”)",
        "url": "https://www.folger.edu/explore/shakespeares-works/as-you-like-it/read/2/7/",
        "nota": ""
      },
      "enunciado": "Que recurso expressivo sustenta a comparação entre o mundo e um palco?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Compara literalmente as dimensões de edifícios."
        },
        {
          "id": "B",
          "texto": "Descreve a arquitetura de um teatro."
        },
        {
          "id": "C",
          "texto": "Nega a existência de pessoas no mundo."
        },
        {
          "id": "D",
          "texto": "A vida é figurada como uma encenação."
        }
      ],
      "respostaCorreta": "D",
      "habilidade": "metáfora e interpretação literária",
      "justificativa": "O palco representa a vida social e os diferentes papéis que as pessoas assumem.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 70,
      "ato": 4,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Mais vale prevenir que remediar.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual princípio é defendido pelo provérbio?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Corrigir só é útil depois que o problema termina."
        },
        {
          "id": "B",
          "texto": "A prevenção deve ser evitada para não causar medo."
        },
        {
          "id": "C",
          "texto": "Antecipar riscos pode evitar consequências posteriores."
        },
        {
          "id": "D",
          "texto": "A prevenção garante que nada dará errado."
        }
      ],
      "respostaCorreta": "C",
      "habilidade": "argumentação e comparação",
      "justificativa": "O provérbio compara prevenção e reparação, defendendo a primeira como preferível.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 71,
      "ato": 4,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Para bom entendedor, meia palavra basta.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual efeito é produzido pela expressão “meia palavra”?",
      "alternativas": [
        {
          "id": "A",
          "texto": "A mensagem precisa ter metade das palavras."
        },
        {
          "id": "B",
          "texto": "Quem presta atenção entende com poucas pistas."
        },
        {
          "id": "C",
          "texto": "A fala incompleta nunca pode ser entendida."
        },
        {
          "id": "D",
          "texto": "O interlocutor escuta por metade do tempo."
        }
      ],
      "respostaCorreta": "B",
      "habilidade": "metáfora e inferência",
      "justificativa": "“Meia palavra” simboliza informação parcial suficiente para quem compreende o contexto.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 72,
      "ato": 4,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Quem não chora, não mama.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual relação figurada a repetição de “não” estabelece?",
      "alternativas": [
        {
          "id": "A",
          "texto": "A falta de manifestação liga-se à falta de benefício."
        },
        {
          "id": "B",
          "texto": "A ausência de pedido garante que o benefício chegue."
        },
        {
          "id": "C",
          "texto": "A frase indica o lugar em que alguém chora."
        },
        {
          "id": "D",
          "texto": "As duas negações afirmam que o benefício já chegou."
        }
      ],
      "respostaCorreta": "A",
      "habilidade": "negação e inferência",
      "justificativa": "A construção relaciona a falta de manifestação à falta de obtenção de algo.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 73,
      "ato": 4,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Santo de casa não faz milagre.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual interpretação é mais adequada no uso figurado?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Pessoas religiosas não realizam ações importantes."
        },
        {
          "id": "B",
          "texto": "Milagres sempre acontecem longe de casa."
        },
        {
          "id": "C",
          "texto": "Pessoas próximas nem sempre recebem reconhecimento."
        },
        {
          "id": "D",
          "texto": "Quem mora em casa nunca resolve problemas."
        }
      ],
      "respostaCorreta": "C",
      "habilidade": "interpretação contextual",
      "justificativa": "A expressão pode criticar a falta de reconhecimento dado a alguém familiar ou próximo.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 74,
      "ato": 4,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Casa de ferreiro, espeto de pau.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual contradição é destacada pelo provérbio?",
      "alternativas": [
        {
          "id": "A",
          "texto": "O ferreiro trabalha exclusivamente com madeira."
        },
        {
          "id": "B",
          "texto": "Todo espeto precisa ser feito de metal."
        },
        {
          "id": "C",
          "texto": "A casa impede qualquer trabalho profissional."
        },
        {
          "id": "D",
          "texto": "Quem sabe fazer pode não aplicar isso em casa."
        }
      ],
      "respostaCorreta": "D",
      "habilidade": "contraste e inferência",
      "justificativa": "O provérbio contrasta a habilidade profissional com a falta de aplicação em casa.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 75,
      "ato": 4,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "A exceção confirma a regra.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual leitura crítica evita interpretar o provérbio como uma verdade lógica absoluta?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Uma exceção sempre prova qualquer regra universal."
        },
        {
          "id": "B",
          "texto": "Uma exceção não comprova sozinha toda regra geral."
        },
        {
          "id": "C",
          "texto": "As regras deixam de existir quando há exceções."
        },
        {
          "id": "D",
          "texto": "A exceção ocorre com mais frequência que a regra."
        }
      ],
      "respostaCorreta": "B",
      "habilidade": "argumentação e generalização",
      "justificativa": "A frase deve ser entendida com cautela: uma exceção, sozinha, não demonstra toda regra universal.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 76,
      "ato": 4,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Caiu na rede, é peixe.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual estratégia expressiva aparece nessa frase curta?",
      "alternativas": [
        {
          "id": "A",
          "texto": "O que caiu na rede é tratado como ganho."
        },
        {
          "id": "B",
          "texto": "A frase descreve uma pesca literal, sem sentido figurado."
        },
        {
          "id": "C",
          "texto": "A rede representa um problema impossível de resolver."
        },
        {
          "id": "D",
          "texto": "O provérbio pergunta se os peixes foram capturados."
        }
      ],
      "respostaCorreta": "A",
      "habilidade": "sentido figurado e concisão",
      "justificativa": "A frase usa a imagem da pesca para representar a aceitação prática do que foi obtido.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 77,
      "ato": 4,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Depois de casa roubada, trancas à porta.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual crítica está implícita nesse provérbio?",
      "alternativas": [
        {
          "id": "A",
          "texto": "As trancas nunca ajudam a proteger uma casa."
        },
        {
          "id": "B",
          "texto": "Toda casa será roubada em algum momento."
        },
        {
          "id": "C",
          "texto": "Prevenir só depois do dano pode ser tarde."
        },
        {
          "id": "D",
          "texto": "A casa é o único lugar que exige cuidado."
        }
      ],
      "respostaCorreta": "C",
      "habilidade": "inferência temporal e crítica",
      "justificativa": "A sequência temporal critica medidas que só aparecem depois de o prejuízo acontecer.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 78,
      "ato": 4,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "O que vai, volta.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual sentido figurado pode ser associado ao provérbio?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Toda coisa retorna fisicamente ao lugar de origem."
        },
        {
          "id": "B",
          "texto": "Toda viagem repete exatamente o percurso inicial."
        },
        {
          "id": "C",
          "texto": "Nada muda ao longo do tempo."
        },
        {
          "id": "D",
          "texto": "Ações podem gerar consequências que retornam ao autor."
        }
      ],
      "respostaCorreta": "D",
      "habilidade": "inferência e causalidade",
      "justificativa": "O provérbio costuma representar a ideia de retorno de ações ou consequências.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 79,
      "ato": 4,
      "tipo": "multipla_escolha",
      "fonte": {
        "tipo": "Provérbio tradicional",
        "texto": "Quem guarda, sempre tem.",
        "autor": "Tradição oral; sem autoria individual confirmada",
        "obra": "Provérbios populares em português",
        "url": null,
        "nota": "Formulação popular corrente; existem variantes regionais."
      },
      "enunciado": "Qual interpretação combina melhor com “sempre” nesse provérbio?",
      "alternativas": [
        {
          "id": "A",
          "texto": "Generaliza a vantagem de guardar recursos ao longo do tempo."
        },
        {
          "id": "B",
          "texto": "Indica um local específico para guardar objetos."
        },
        {
          "id": "C",
          "texto": "Nega a possibilidade de economizar qualquer recurso."
        },
        {
          "id": "D",
          "texto": "Transforma “tem” em advérbio de modo nessa frase."
        }
      ],
      "respostaCorreta": "A",
      "habilidade": "frequência e interpretação",
      "justificativa": "“Sempre” apresenta como regra geral a vantagem de guardar recursos.",
      "tempoSegundos": 30,
      "pontosBase": 100
    },
    {
      "id": 80,
      "ato": 4,
      "tipo": "discursiva",
      "fonte": {
        "tipo": "Fala de personagem",
        "texto": "Talvez não saibam que cheguei.",
        "autor": "Rubião",
        "obra": "Quincas Borba, capítulo CXCV",
        "url": "https://pt.wikisource.org/wiki/Quincas_Borba/CXCV",
        "nota": ""
      },
      "enunciado": "Na fala de Rubião, explique como “talvez” e “não” atuam juntos. Depois, reescreva a fala de modo que expresse certeza de que as pessoas sabem da chegada, mantendo o restante o mais próximo possível do original. Explique a mudança de sentido.",
      "rubrica": [
        "Classifica “talvez” como marca de possibilidade",
        "Explica o escopo da negação de “não”",
        "Reescreve preservando a referência à chegada, mas mudando a modalidade"
      ],
      "respostaEsperada": "“Talvez” apresenta a situação como incerta; “não” nega o conhecimento das pessoas. Uma reescrita possível é “Certamente sabem que cheguei”, que troca a possibilidade por certeza e remove a negação.",
      "tempoSegundos": 300,
      "pontosBase": null,
      "observacaoCorrecao": "Correção pelo professor: usar a rubrica; não atribuir pontuação parcial automática."
    },
    {
      "id": 81,
      "ato": "Especial",
      "tipo": "discursiva",
      "fonte": {
        "tipo": "Citação literária",
        "texto": "O Inferno são as outras pessoas.",
        "autor": "Título de episódio",
        "obra": "Classroom of the Elite, temporada 1, episódio 5 (título em português)",
        "url": "https://www.crunchyroll.com/watch/G6P5D15K6/hell-is-other-people",
        "nota": ""
      },
      "enunciado": "Leia o título de episódio de Classroom of the Elite: “O Inferno são as outras pessoas.”\n\n a) Identifique a classe gramatical de cada palavra da frase.\n b) Existe algum advérbio nesse título? Justifique sua resposta.\n c) Explique por que “outras” não é um advérbio nesse contexto, apesar de modificar o sentido de “pessoas”.\n d) Relacione o título a pelo menos dois outros títulos de episódios da série que contenham advérbios ou expressões adverbiais. Explique como esses elementos modificam o sentido dos respectivos títulos.",
      "rubrica": [
        "Classifica as palavras corretamente",
        "Justifica a ausência de advérbio",
        "Distingue “outras” de advérbio",
        "Analisa dois títulos reais adicionais com atenção às suas fontes"
      ],
      "respostaEsperada": "O título, isoladamente, não contém advérbio. “O” e “as” são artigos; “inferno” e “pessoas” são substantivos; “são” é verbo; “outras” é determinante/pronome indefinido adjetivo conforme a nomenclatura adotada. “Outras” acompanha o substantivo “pessoas”, mas não modifica verbo, adjetivo ou advérbio. A parte final exige consultar e identificar precisamente outros títulos da série.",
      "tempoSegundos": 300,
      "pontosBase": null,
      "observacaoCorrecao": "Correção pelo professor: usar a rubrica; não atribuir pontuação parcial automática."
    }
  ]
};
  global.ADVERBIA_QUESTOES = banco;
  if (typeof module !== "undefined" && module.exports) module.exports = banco;
})(typeof window !== "undefined" ? window : globalThis);
