
import { useState, useEffect, useCallback, useMemo } from 'react';
import { toast } from 'sonner';
import { getQuestionsForPhase, getQuestionStats } from '../data/questions';
import { useLeaderboard } from '../hooks/useLeaderboard';

interface Avatar {
  gender: 'boy' | 'girl';
  skinColor: string;
  name: string;
}

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
}

interface GameProgress {
  avatar: Avatar;
  currentPhase: number;
  score: number;
  currentQuestion: number;
}

interface QuizGameProps {
  avatar: Avatar;
  initialProgress?: GameProgress;
  onProgressUpdate?: (progress: GameProgress) => void;
  onViewLeaderboard?: () => void;
}

const QuizGame = ({ avatar, initialProgress, onProgressUpdate, onViewLeaderboard }: QuizGameProps) => {
  const [currentPhase, setCurrentPhase] = useState(initialProgress?.currentPhase || 1);
  const [currentQuestion, setCurrentQuestion] = useState(initialProgress?.currentQuestion || 0);
  const [score, setScore] = useState(initialProgress?.score || 0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [avatarAnimation, setAvatarAnimation] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const { saveScore, leaderboard } = useLeaderboard();

  // Calculate player's rank
  const playerRank = useMemo(() => {
    if (!leaderboard.length) return '🏆 1º';
    
    const playerEntry = leaderboard.find(entry => entry.player_name === avatar.name);
    if (!playerEntry) return '🏆 Novo';
    
    const rank = leaderboard.findIndex(entry => entry.player_name === avatar.name) + 1;
    
    if (rank === 1) return '🥇 1º';
    if (rank === 2) return '🥈 2º'; 
    if (rank === 3) return '🥉 3º';
    return `🏆 ${rank}º`;
  }, [leaderboard, avatar.name]);

  // Memoize the progress object to prevent unnecessary re-renders
  const gameProgress = useMemo(() => ({
    avatar,
    currentPhase,
    score,
    currentQuestion
  }), [avatar, currentPhase, score, currentQuestion]);

  // Update progress in parent component with a ref to prevent loops
  const updateProgress = useCallback(() => {
    if (onProgressUpdate) {
      onProgressUpdate(gameProgress);
    }
  }, [onProgressUpdate, gameProgress]);

  // Only update progress when game state actually changes
  useEffect(() => {
    updateProgress();
  }, [updateProgress]);

  const loadQuestions = useCallback((phase: number) => {
    console.log(`=== CARREGANDO 10 PERGUNTAS PARA FASE ${phase} ===`);
    
    // Mostrar estatísticas antes de carregar
    const stats = getQuestionStats();
    console.log(`📊 ESTATÍSTICAS: ${stats.usedQuestions}/${stats.totalQuestions} usadas, ${stats.remainingQuestions} restantes`);
    console.log(`🔑 Sessão: ${stats.sessionId}`);
    
    setLoading(true);
    
    try {
      // Obter 10 perguntas específicas para esta fase
      const phaseQuestions = getQuestionsForPhase(phase);
      
      if (phaseQuestions.length > 0) {
        // Verificar se não há IDs duplicados
        const ids = phaseQuestions.map(q => q.id);
        const uniqueIds = new Set(ids);
        
        if (ids.length !== uniqueIds.size) {
          console.error('❌ ERRO: Perguntas duplicadas detectadas!', ids);
          toast.error('Erro: perguntas duplicadas detectadas!');
          return;
        }
        
        setQuestions(phaseQuestions);
        console.log(`✅ ${phaseQuestions.length} perguntas carregadas com sucesso para a fase ${phase}`);
        console.log(`📝 IDs das perguntas: [${ids.join(', ')}]`);
        
        toast.success(`10 perguntas únicas carregadas para a fase ${phase}!`, {
          duration: 2000
        });
      } else {
        throw new Error('Nenhuma pergunta foi carregada');
      }
      
    } catch (error) {
      console.error('❌ ERRO ao carregar perguntas:', error);
      toast.error('Erro ao carregar perguntas.', {
        duration: 2000
      });
    } finally {
      setLoading(false);
      console.log('=== CARREGAMENTO DE PERGUNTAS FINALIZADO ===\n');
    }
  }, []);

  // Load questions when phase changes
  useEffect(() => {
    console.log(`useEffect monitoramento - Fase: ${currentPhase}, Questions: ${questions.length}`);
    
    if (questions.length === 0) {
      console.log('🚀 Disparando carregamento de perguntas...');
      loadQuestions(currentPhase);
    }
  }, [currentPhase, loadQuestions, questions.length]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    const currentQ = questions[currentQuestion];
    
    if (answerIndex === currentQ.correctAnswer) {
      // Pontos baseados na dificuldade da pergunta
      const points = currentQ.difficulty === 'Fácil' ? 1 : currentQ.difficulty === 'Médio' ? 2 : 3;
      const newScore = score + points;
      setScore(newScore);
      setAvatarAnimation('correct');
      toast.success(`Resposta correta! +${points} ponto${points > 1 ? 's' : ''}`, {
        duration: 2000
      });
      
      // Salvar pontuação após cada pergunta correta
      saveScore(avatar.name, newScore, currentPhase);
    } else {
      setAvatarAnimation('wrong');
      toast.error('Resposta incorreta!', {
        duration: 2000
      });
    }
    
    setShowExplanation(true);
    
    // Reset animation after 2 seconds
    setTimeout(() => {
      setAvatarAnimation('idle');
    }, 2000);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setAvatarAnimation('idle');
    } else {
      // End of phase
      if (currentPhase < 100) { // 100 fases = 1000 perguntas
        setCurrentPhase(prev => prev + 1);
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setShowExplanation(false);
        setAvatarAnimation('idle');
        setQuestions([]); // Clear questions to trigger new generation
        toast.success(`Fase ${currentPhase} concluída! Avançando para a fase ${currentPhase + 1}`, {
          duration: 2000
        });
      } else {
        // Game completed - save score to leaderboard
        saveScore(avatar.name, score, currentPhase);
        toast.success(`Parabéns! Você completou todas as 100 fases com ${score} pontos! Você é um verdadeiro mestre da fé católica!`, {
          duration: 4000
        });
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white">Carregando 10 perguntas únicas da fase {currentPhase}...</p>
          <p className="text-blue-300 text-sm mt-2">Sistema anti-repetição ativo!</p>
        </div>
      </div>
    );
  }

  if (questions.length === 0) return null;

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Header */}
      <div className="bg-slate-800/80 backdrop-blur-lg border-b border-slate-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img 
                src="/lovable-uploads/ebf9a6d5-503e-4a4a-813b-cab50ba45b0e.png" 
                alt="Carlo Acutis" 
                className="w-12 h-12 rounded-full border-2 border-blue-300"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))',
                  backgroundColor: 'transparent'
                }}
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold text-white">Paróquia N.S. Aparecida</h1>
              <p className="text-sm text-blue-300">Grupo de Jovens Carlo Acutis</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-lg"
                style={{ backgroundColor: avatar.skinColor }}
              >
                {avatar.gender === 'boy' ? '👦' : '👧'}
              </div>
              <span className="text-white font-semibold text-sm">{avatar.name}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar for Overall Game */}
      <div className="bg-slate-800/60 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-4">
              <span className="text-sm text-blue-300">Progresso Geral</span>
              <span className="text-sm text-blue-300">Fase {currentPhase}/100</span>
              {onViewLeaderboard && (
                <button
                  onClick={onViewLeaderboard}
                  className="px-3 py-1 bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-semibold rounded-lg transition-colors flex items-center gap-1"
                >
                  🏆 Ranking
                </button>
              )}
            </div>
            <span className="text-sm text-yellow-300 font-semibold">{playerRank}</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(currentPhase / 100) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Game Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Questions Section */}
          <div className="bg-slate-800/80 backdrop-blur-lg rounded-2xl p-8">
            {/* Header with Avatar, Question, and Score */}
            <div className="flex items-start justify-between mb-6">
              {/* Avatar Section */}
              <div className="flex flex-col items-center gap-2">
                <div className={`transition-all duration-300 ${
                  avatarAnimation === 'correct' 
                    ? 'animate-bounce scale-110' 
                    : avatarAnimation === 'wrong' 
                      ? 'animate-pulse scale-90' 
                      : ''
                }`}>
                  <div 
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-xl border-4 ${
                      avatarAnimation === 'correct' 
                        ? 'border-green-400 bg-green-100' 
                        : avatarAnimation === 'wrong' 
                          ? 'border-red-400 bg-red-100' 
                          : 'border-slate-600'
                    }`}
                    style={{ backgroundColor: avatarAnimation === 'idle' ? avatar.skinColor : undefined }}
                  >
                    {avatarAnimation === 'correct' ? '😊' : 
                     avatarAnimation === 'wrong' ? '😔' : 
                     avatar.gender === 'boy' ? '👦' : '👧'}
                  </div>
                </div>
                <span className="text-white font-semibold text-xs">{avatar.name}</span>
              </div>

              {/* Question Section - Center */}
              <div className="flex-1 mx-8">
                <div className="flex items-center gap-3 mb-4 justify-center">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    currentQ.difficulty === 'Fácil' 
                      ? 'bg-green-600 text-green-100' 
                      : currentQ.difficulty === 'Médio'
                        ? 'bg-yellow-600 text-yellow-100'
                        : 'bg-red-600 text-red-100'
                  }`}>
                    {currentQ.difficulty}
                  </span>
                  <span className="text-sm text-gray-400">
                    Pergunta {currentQuestion + 1}/10
                  </span>
                </div>
                
                <h2 className="text-xl font-bold text-white text-center">
                  {currentQ.question}
                </h2>
              </div>

              {/* Score Section */}
              <div className="flex flex-col items-center gap-2">
                <div className="text-2xl font-bold text-yellow-400">{score}</div>
                <div className="text-xs text-yellow-200">pontos</div>
              </div>
            </div>

            <div className="grid gap-4 mb-6">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                  className={`p-4 rounded-xl text-left transition-all ${
                    selectedAnswer === null
                      ? 'bg-slate-700 hover:bg-slate-600 text-white'
                      : selectedAnswer === index
                        ? index === currentQ.correctAnswer
                          ? 'bg-green-600 text-white'
                          : 'bg-red-600 text-white'
                        : index === currentQ.correctAnswer
                          ? 'bg-green-600 text-white'
                          : 'bg-slate-700 text-gray-400'
                  }`}
                >
                  <span className="font-semibold mr-3">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                </button>
              ))}
            </div>

            {showExplanation && (
              <div className="bg-blue-900/50 border border-blue-700 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-200 mb-2">
                  Explicação:
                </h3>
                <p className="text-blue-100">{currentQ.explanation}</p>
              </div>
            )}

            {showExplanation && (
              <div className="text-center">
                <button
                  onClick={handleNextQuestion}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all"
                >
                  {currentQuestion < questions.length - 1 
                    ? 'Próxima Pergunta' 
                    : currentPhase < 100 
                      ? 'Próxima Fase' 
                      : 'Finalizar Quiz'
                  }
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizGame;
