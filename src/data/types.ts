
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
}

export interface QuestionStats {
  totalQuestions: number;
  totalPhases: number;
  usedQuestions: number;
  remainingQuestions: number;
  sessionId: string;
}
