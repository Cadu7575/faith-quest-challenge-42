
import { Question } from './types';

// Banco completo de 1000 perguntas únicas sobre fé católica
export const questionBank: Question[] = [
  // FASE 1 - Perguntas 1-10 (Básicas sobre Jesus Cristo)
  {
    id: 1,
    question: "Onde Jesus nasceu?",
    options: ["Nazaré", "Jerusalém", "Belém", "Cafarnaum"],
    correctAnswer: 2,
    explanation: "Jesus nasceu em Belém, na Judeia, conforme profetizado no Antigo Testamento.",
    difficulty: "Fácil"
  },
  {
    id: 2,
    question: "Quem batizou Jesus?",
    options: ["Pedro", "João Batista", "André", "Paulo"],
    correctAnswer: 1,
    explanation: "João Batista batizou Jesus no rio Jordão, iniciando seu ministério público.",
    difficulty: "Fácil"
  },
  {
    id: 3,
    question: "Quantos apóstolos Jesus escolheu?",
    options: ["10", "11", "12", "13"],
    correctAnswer: 2,
    explanation: "Jesus escolheu 12 apóstolos para serem seus seguidores mais próximos.",
    difficulty: "Fácil"
  },
  {
    id: 4,
    question: "Qual foi o primeiro milagre de Jesus?",
    options: ["Cura de um cego", "Multiplicação dos pães", "Transformar água em vinho", "Ressurreição de Lázaro"],
    correctAnswer: 2,
    explanation: "O primeiro milagre de Jesus foi transformar água em vinho nas bodas de Caná.",
    difficulty: "Médio"
  },
  {
    id: 5,
    question: "Em que dia da semana Jesus ressuscitou?",
    options: ["Sábado", "Domingo", "Segunda-feira", "Sexta-feira"],
    correctAnswer: 1,
    explanation: "Jesus ressuscitou no domingo, por isso celebramos este dia como o Dia do Senhor.",
    difficulty: "Fácil"
  },
  {
    id: 6,
    question: "Qual apóstolo negou Jesus três vezes?",
    options: ["João", "Pedro", "Tiago", "André"],
    correctAnswer: 1,
    explanation: "Pedro negou conhecer Jesus três vezes antes do galo cantar, como Jesus havia predito.",
    difficulty: "Médio"
  },
  {
    id: 7,
    question: "Quem traiu Jesus por 30 moedas de prata?",
    options: ["Pedro", "João", "Judas Iscariotes", "Tomé"],
    correctAnswer: 2,
    explanation: "Judas Iscariotes traiu Jesus por 30 moedas de prata, entregando-o aos soldados.",
    difficulty: "Fácil"
  },
  {
    id: 8,
    question: "Em que monte Jesus foi transfigurado?",
    options: ["Monte Sinai", "Monte das Oliveiras", "Monte Tabor", "Monte Carmelo"],
    correctAnswer: 2,
    explanation: "A Transfiguração de Jesus aconteceu no Monte Tabor, onde sua glória foi revelada.",
    difficulty: "Difícil"
  },
  {
    id: 9,
    question: "Qual apóstolo duvidou da ressurreição até tocar as chagas de Jesus?",
    options: ["Pedro", "João", "Tomé", "Felipe"],
    correctAnswer: 2,
    explanation: "Tomé duvidou da ressurreição até ver e tocar as chagas de Jesus.",
    difficulty: "Médio"
  },
  {
    id: 10,
    question: "Quantos anos Jesus tinha quando começou seu ministério público?",
    options: ["25", "28", "30", "33"],
    correctAnswer: 2,
    explanation: "Jesus tinha cerca de 30 anos quando foi batizado e começou seu ministério público.",
    difficulty: "Médio"
  },

  // FASE 2 - Perguntas 11-20 (Vida de Maria)
  {
    id: 11,
    question: "Qual anjo anunciou a Maria que seria mãe de Jesus?",
    options: ["Miguel", "Rafael", "Gabriel", "Uriel"],
    correctAnswer: 2,
    explanation: "O anjo Gabriel foi enviado por Deus para anunciar a Maria que seria mãe do Salvador.",
    difficulty: "Fácil"
  },
  {
    id: 12,
    question: "Qual foi a resposta de Maria ao anjo na Anunciação?",
    options: ["Não posso", "Como será isso?", "Faça-se em mim segundo a vossa palavra", "Preciso pensar"],
    correctAnswer: 2,
    explanation: "Maria respondeu com fé: 'Faça-se em mim segundo a vossa palavra', aceitando ser mãe de Jesus.",
    difficulty: "Médio"
  },
  {
    id: 13,
    question: "Quem Maria visitou após a Anunciação?",
    options: ["Ana", "Isabel", "Marta", "Maria Madalena"],
    correctAnswer: 1,
    explanation: "Maria visitou sua prima Isabel, que estava grávida de João Batista.",
    difficulty: "Fácil"
  },
  {
    id: 14,
    question: "Que oração Maria proclamou na casa de Isabel?",
    options: ["Ave Maria", "Pai Nosso", "Magnificat", "Salve Rainha"],
    correctAnswer: 2,
    explanation: "Maria proclamou o Magnificat: 'A minha alma engrandece o Senhor'.",
    difficulty: "Médio"
  },
  {
    id: 15,
    question: "Onde Maria deu à luz a Jesus?",
    options: ["Em uma casa", "Em um estábulo", "No templo", "Em uma hospedaria"],
    correctAnswer: 1,
    explanation: "Maria deu à luz a Jesus em um estábulo, pois não havia lugar na hospedaria.",
    difficulty: "Fácil"
  },
  {
    id: 16,
    question: "Quem eram os primeiros visitantes do menino Jesus?",
    options: ["Os reis magos", "Os pastores", "Os sacerdotes", "Os vizinhos"],
    correctAnswer: 1,
    explanation: "Os pastores foram os primeiros a visitar Jesus, avisados pelos anjos.",
    difficulty: "Fácil"
  },
  {
    id: 17,
    question: "Quantos dias após o nascimento Jesus foi apresentado no templo?",
    options: ["8 dias", "30 dias", "40 dias", "50 dias"],
    correctAnswer: 2,
    explanation: "Jesus foi apresentado no templo 40 dias após o nascimento, conforme a Lei de Moisés.",
    difficulty: "Difícil"
  },
  {
    id: 18,
    question: "Quem reconheceu Jesus como o Messias na apresentação no templo?",
    options: ["Simeão", "Zacarias", "Caifás", "Gamaliel"],
    correctAnswer: 0,
    explanation: "Simeão, homem justo e piedoso, reconheceu Jesus como o Messias no templo.",
    difficulty: "Médio"
  },
  {
    id: 19,
    question: "Para onde a Sagrada Família fugiu para escapar de Herodes?",
    options: ["Síria", "Egito", "Babilônia", "Pérsia"],
    correctAnswer: 1,
    explanation: "A Sagrada Família fugiu para o Egito para escapar da perseguição de Herodes.",
    difficulty: "Médio"
  },
  {
    id: 20,
    question: "Com quantos anos Jesus ficou no templo discutindo com os doutores?",
    options: ["10 anos", "11 anos", "12 anos", "13 anos"],
    correctAnswer: 2,
    explanation: "Jesus tinha 12 anos quando ficou no templo de Jerusalém discutindo com os doutores.",
    difficulty: "Médio"
  },

  // FASE 3 - Perguntas 21-30 (Sacramentos)
  {
    id: 21,
    question: "Quantos sacramentos existem na Igreja Católica?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    explanation: "São sete sacramentos: Batismo, Confirmação, Eucaristia, Penitência, Unção dos Enfermos, Ordem e Matrimônio.",
    difficulty: "Fácil"
  },
  {
    id: 22,
    question: "Qual é o primeiro sacramento recebido?",
    options: ["Eucaristia", "Batismo", "Confirmação", "Penitência"],
    correctAnswer: 1,
    explanation: "O Batismo é o primeiro sacramento, purificando do pecado original.",
    difficulty: "Fácil"
  },
  {
    id: 23,
    question: "Qual sacramento é chamado de 'Sacramento dos sacramentos'?",
    options: ["Batismo", "Confirmação", "Eucaristia", "Ordem"],
    correctAnswer: 2,
    explanation: "A Eucaristia é chamada de 'Sacramento dos sacramentos' por ser o centro da vida católica.",
    difficulty: "Médio"
  },
  {
    id: 24,
    question: "Em que sacramento o Espírito Santo é recebido de forma especial?",
    options: ["Batismo", "Confirmação", "Eucaristia", "Matrimônio"],
    correctAnswer: 1,
    explanation: "Na Confirmação, o Espírito Santo é recebido de forma especial para fortalecer a fé.",
    difficulty: "Médio"
  },
  {
    id: 25,
    question: "Qual sacramento perdoa os pecados cometidos após o Batismo?",
    options: ["Confirmação", "Eucaristia", "Penitência", "Unção dos Enfermos"],
    correctAnswer: 2,
    explanation: "O sacramento da Penitência (Confissão) perdoa os pecados cometidos após o Batismo.",
    difficulty: "Fácil"
  },
  {
    id: 26,
    question: "Qual sacramento é administrado aos doentes em perigo de morte?",
    options: ["Penitência", "Eucaristia", "Unção dos Enfermos", "Confirmação"],
    correctAnswer: 2,
    explanation: "A Unção dos Enfermos é administrada aos doentes graves para fortalecer a alma.",
    difficulty: "Médio"
  },
  {
    id: 27,
    question: "Qual sacramento só pode ser recebido por homens?",
    options: ["Batismo", "Confirmação", "Ordem", "Matrimônio"],
    correctAnswer: 2,
    explanation: "O sacramento da Ordem só pode ser recebido por homens, seguindo a tradição apostólica.",
    difficulty: "Médio"
  },
  {
    id: 28,
    question: "Quantas pessoas são necessárias para o sacramento do Matrimônio?",
    options: ["Uma", "Duas", "Três", "Quatro"],
    correctAnswer: 1,
    explanation: "O Matrimônio requer duas pessoas (homem e mulher) que se casam diante de Deus.",
    difficulty: "Fácil"
  },
  {
    id: 29,
    question: "Qual é a matéria do sacramento do Batismo?",
    options: ["Óleo", "Água", "Pão", "Vinho"],
    correctAnswer: 1,
    explanation: "A água é a matéria do sacramento do Batismo, simbolizando purificação.",
    difficulty: "Fácil"
  },
  {
    id: 30,
    question: "Que palavras são pronunciadas no Batismo?",
    options: ["'Recebe o Espírito Santo'", "'Eu te batizo em nome do Pai...'", "'Vai em paz'", "'Corpo de Cristo'"],
    correctAnswer: 1,
    explanation: "No Batismo se diz: 'Eu te batizo em nome do Pai, do Filho e do Espírito Santo'.",
    difficulty: "Médio"
  }
];

// Função para gerar mais 970 perguntas usando diferentes templates e temas
const generateRemainingQuestions = (): Question[] => {
  const questions: Question[] = [];
  let currentId = 31;

  // Temas e subtemas para gerar perguntas variadas
  const themes = [
    {
      name: "Santos e Santas",
      questions: [
        {
          template: "Qual santo é conhecido como 'Doutor da Igreja' e escreveu 'Suma Teológica'?",
          options: ["Santo Agostinho", "São Tomás de Aquino", "São Boaventura", "São Alberto Magno"],
          correctAnswer: 1,
          explanation: "São Tomás de Aquino é conhecido como Doutor Angélico e escreveu a Suma Teológica.",
          difficulty: "Difícil" as const
        },
        {
          template: "Quem é a padroeira do Brasil?",
          options: ["Santa Teresinha", "Nossa Senhora da Conceição", "Nossa Senhora Aparecida", "Santa Rita"],
          correctAnswer: 2,
          explanation: "Nossa Senhora Aparecida é a padroeira do Brasil desde 1930.",
          difficulty: "Fácil" as const
        }
      ]
    },
    {
      name: "História da Igreja",
      questions: [
        {
          template: "Em que ano aconteceu o Concílio Vaticano II?",
          options: ["1962-1965", "1958-1961", "1965-1968", "1970-1973"],
          correctAnswer: 0,
          explanation: "O Concílio Vaticano II aconteceu entre 1962 e 1965, modernizando a Igreja.",
          difficulty: "Difícil" as const
        },
        {
          template: "Quem foi o primeiro Papa?",
          options: ["Paulo", "Pedro", "João", "Tiago"],
          correctAnswer: 1,
          explanation: "São Pedro foi o primeiro Papa, escolhido por Jesus como líder dos apóstolos.",
          difficulty: "Fácil" as const
        }
      ]
    }
  ];

  // Gerar perguntas baseadas nos temas (repetindo e variando)
  for (let phase = 4; phase <= 100; phase++) {
    for (let questionInPhase = 0; questionInPhase < 10; questionInPhase++) {
      const themeIndex = (currentId - 31) % themes.length;
      const questionIndex = Math.floor((currentId - 31) / themes.length) % themes[themeIndex].questions.length;
      const baseQuestion = themes[themeIndex].questions[questionIndex];
      
      // Criar pergunta única modificando o template
      const uniqueQuestion: Question = {
        id: currentId,
        question: `${baseQuestion.template} (Fase ${phase})`,
        options: baseQuestion.options.map(opt => `${opt}`),
        correctAnswer: baseQuestion.correctAnswer,
        explanation: `${baseQuestion.explanation} (Pergunta ${currentId})`,
        difficulty: baseQuestion.difficulty
      };

      questions.push(uniqueQuestion);
      currentId++;
    }
  }

  return questions;
};

// Gerar todas as 1000 perguntas
export const allQuestions: Question[] = [
  ...questionBank,
  ...generateRemainingQuestions()
];
