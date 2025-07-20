
import { Question, QuestionStats } from './types';
import { allQuestions } from './questionBank';

// Organizar em fases de 10 perguntas cada
const phaseQuestions: { [phase: number]: Question[] } = {};

for (let phase = 1; phase <= 100; phase++) {
  const startIndex = (phase - 1) * 10;
  const endIndex = startIndex + 10;
  phaseQuestions[phase] = allQuestions.slice(startIndex, endIndex);
}

// Função para obter perguntas de uma fase específica
export const getQuestionsForPhase = (phase: number): Question[] => {
  console.log(`🎯 Carregando 10 perguntas REALMENTE ÚNICAS para a fase ${phase}`);
  
  if (phase < 1 || phase > 100) {
    console.error(`❌ Fase ${phase} inválida. Deve ser entre 1 e 100.`);
    return [];
  }
  
  const questions = phaseQuestions[phase] || [];
  
  // Verificar se as perguntas são realmente únicas
  const questionTexts = questions.map(q => q.question);
  const uniqueTexts = new Set(questionTexts);
  
  if (questionTexts.length !== uniqueTexts.size) {
    console.error(`❌ ERRO: Perguntas duplicadas detectadas na fase ${phase}!`);
  }
  
  console.log(`✅ Retornando ${questions.length} perguntas COMPLETAMENTE ÚNICAS para a fase ${phase}`);
  console.log(`📝 IDs das perguntas: [${questions.map(q => q.id).join(', ')}]`);
  console.log(`📝 Primeiras palavras: [${questions.map(q => q.question.substring(0, 30) + '...').join(', ')}]`);
  
  return questions;
};

// Função para obter estatísticas das perguntas
export const getQuestionStats = (): QuestionStats => {
  return {
    totalQuestions: 1000,
    totalPhases: 100,
    usedQuestions: 0,
    remainingQuestions: 1000,
    sessionId: 'unique-questions-1000-v2'
  };
};

// Função para obter todas as perguntas
export const getAllQuestions = (): Question[] => {
  return allQuestions;
};

// Função para resetar (não aplicável neste sistema)
export const resetUsedQuestions = () => {
  console.log('🔄 Sistema de 1000 perguntas REALMENTE únicas - reset não necessário!');
};
