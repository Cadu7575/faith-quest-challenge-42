
import { useState, useEffect, useCallback } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import AvatarSelection from '../components/AvatarSelection';
import QuizGame from '../components/QuizGame';
import Leaderboard from '../components/Leaderboard';

type GameState = 'loading' | 'avatar-selection' | 'playing' | 'leaderboard';

interface Avatar {
  gender: 'boy' | 'girl';
  skinColor: string;
  name: string;
}

interface GameProgress {
  avatar: Avatar;
  currentPhase: number;
  score: number;
  currentQuestion: number;
}

const Index = () => {
  const [gameState, setGameState] = useState<GameState>('loading');
  const [avatar, setAvatar] = useState<Avatar | null>(null);
  const [gameProgress, setGameProgress] = useState<GameProgress | null>(null);

  // Load saved progress on component mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('quiz-progress');
    if (savedProgress) {
      try {
        const progress = JSON.parse(savedProgress) as GameProgress;
        setGameProgress(progress);
        setAvatar(progress.avatar);
      } catch (error) {
        console.error('Error loading saved progress:', error);
        localStorage.removeItem('quiz-progress');
      }
    }
  }, []);

  const handleLoadingComplete = () => {
    if (gameProgress && avatar) {
      setGameState('playing');
    } else {
      setGameState('avatar-selection');
    }
  };

  const handleAvatarComplete = (selectedAvatar: Avatar) => {
    setAvatar(selectedAvatar);
    const initialProgress: GameProgress = {
      avatar: selectedAvatar,
      currentPhase: 1,
      score: 0,
      currentQuestion: 0
    };
    setGameProgress(initialProgress);
    localStorage.setItem('quiz-progress', JSON.stringify(initialProgress));
    setGameState('playing');
  };

  // Memoize the progress update function to prevent infinite loops
  const handleProgressUpdate = useCallback((progress: GameProgress) => {
    console.log('Progress update called:', progress);
    setGameProgress(progress);
    localStorage.setItem('quiz-progress', JSON.stringify(progress));
  }, []);

  const handleViewLeaderboard = () => {
    setGameState('leaderboard');
  };

  const handleBackToGame = () => {
    if (gameProgress && avatar) {
      setGameState('playing');
    } else {
      setGameState('avatar-selection');
    }
  };

  // Remove the outer gradient background since it's now in Layout
  if (gameState === 'loading') {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  if (gameState === 'avatar-selection') {
    return <AvatarSelection onComplete={handleAvatarComplete} onViewLeaderboard={handleViewLeaderboard} />;
  }

  if (gameState === 'leaderboard') {
    return <Leaderboard onBack={handleBackToGame} />;
  }

  if (gameState === 'playing' && avatar && gameProgress) {
    return <QuizGame avatar={avatar} initialProgress={gameProgress} onProgressUpdate={handleProgressUpdate} onViewLeaderboard={handleViewLeaderboard} />;
  }

  return null;
};

export default Index;
