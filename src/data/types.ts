
export interface Question {
  id: string | number; // Aceitar tanto UUID string quanto number
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
