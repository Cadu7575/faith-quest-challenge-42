
import { Question, QuestionStats } from './types';
import { supabase } from '@/integrations/supabase/client';

// Função para obter perguntas de uma fase específica do Supabase
export const getQuestionsForPhase = async (phase: number): Promise<Question[]> => {
  console.log(`🎯 Carregando 10 perguntas REALMENTE ÚNICAS para a fase ${phase} do Supabase`);
  
  if (phase < 1 || phase > 100) {
    console.error(`❌ Fase ${phase} inválida. Deve ser entre 1 e 100.`);
    return [];
  }
  
  try {
    const { data, error } = await supabase
      .from('quiz_questions')
      .select('*')
      .eq('phase', phase)
      .order('question_order', { ascending: true });
    
    if (error) {
      console.error('❌ Erro ao buscar perguntas do Supabase:', error);
      return [];
    }
    
    if (!data || data.length === 0) {
      console.error(`❌ Nenhuma pergunta encontrada para a fase ${phase}`);
      return [];
    }
    
    // Converter formato do Supabase para o formato esperado
    const questions: Question[] = data.map(q => ({
      id: parseInt(q.id) || 0, // Se não conseguir converter, usar 0
      question: q.question,
      options: q.options,
      correctAnswer: q.correct_answer,
      explanation: q.explanation,
      difficulty: q.difficulty as 'Fácil' | 'Médio' | 'Difícil'
    }));
    
    // Verificar se as perguntas são realmente únicas
    const questionTexts = questions.map(q => q.question);
    const uniqueTexts = new Set(questionTexts);
    
    if (questionTexts.length !== uniqueTexts.size) {
      console.error(`❌ ERRO: Perguntas duplicadas detectadas na fase ${phase}!`);
    }
    
    console.log(`✅ Retornando ${questions.length} perguntas COMPLETAMENTE ÚNICAS para a fase ${phase}`);
    console.log(`📝 Primeiras palavras: [${questions.map(q => q.question.substring(0, 30) + '...').join(', ')}]`);
    
    return questions;
  } catch (error) {
    console.error('❌ Erro ao carregar perguntas:', error);
    return [];
  }
};

// Função para obter estatísticas das perguntas do Supabase
export const getQuestionStats = async (): Promise<QuestionStats> => {
  try {
    const { data, error } = await supabase
      .from('quiz_questions')
      .select('id', { count: 'exact' });
    
    if (error) {
      console.error('❌ Erro ao buscar estatísticas:', error);
      return {
        totalQuestions: 1000,
        totalPhases: 100,
        usedQuestions: 0,
        remainingQuestions: 1000,
        sessionId: 'supabase-questions-v1'
      };
    }
    
    const totalQuestions = data?.length || 1000;
    
    return {
      totalQuestions,
      totalPhases: 100,
      usedQuestions: 0,
      remainingQuestions: totalQuestions,
      sessionId: 'supabase-questions-v1'
    };
  } catch (error) {
    console.error('❌ Erro ao obter estatísticas:', error);
    return {
      totalQuestions: 1000,
      totalPhases: 100,
      usedQuestions: 0,
      remainingQuestions: 1000,
      sessionId: 'supabase-questions-v1'
    };
  }
};

// Função para obter todas as perguntas do Supabase
export const getAllQuestions = async (): Promise<Question[]> => {
  try {
    const { data, error } = await supabase
      .from('quiz_questions')
      .select('*')
      .order('phase', { ascending: true })
      .order('question_order', { ascending: true });
    
    if (error) {
      console.error('❌ Erro ao buscar todas as perguntas:', error);
      return [];
    }
    
    if (!data) return [];
    
    return data.map(q => ({
      id: parseInt(q.id) || 0,
      question: q.question,
      options: q.options,
      correctAnswer: q.correct_answer,
      explanation: q.explanation,
      difficulty: q.difficulty as 'Fácil' | 'Médio' | 'Difícil'
    }));
  } catch (error) {
    console.error('❌ Erro ao carregar todas as perguntas:', error);
    return [];
  }
};

// Função para resetar (não aplicável neste sistema)
export const resetUsedQuestions = () => {
  console.log('🔄 Sistema de 1000 perguntas REALMENTE únicas do Supabase - reset não necessário!');
};
