
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  category?: string;
}

export interface QuestionStats {
  totalQuestions: number;
  totalPhases: number;
  usedQuestions: number;
  remainingQuestions: number;
  sessionId: string;
}
