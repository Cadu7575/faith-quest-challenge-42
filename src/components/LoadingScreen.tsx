
import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <div className="mb-6">
          <img 
            src="/lovable-uploads/ebf9a6d5-503e-4a4a-813b-cab50ba45b0e.png" 
            alt="Carlo Acutis Logo" 
            className="w-32 h-32 mx-auto rounded-full shadow-2xl"
          />
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">Quiz Católico</h1>
        <p className="text-blue-200">Carregando sua jornada de fé...</p>
      </div>
      
      <div className="w-80 bg-slate-800/50 rounded-full p-1">
        <div 
          className="h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 flex items-center justify-end pr-2"
          style={{ width: `${progress}%` }}
        >
          {progress > 10 && (
            <span className="text-white text-xs font-semibold">{progress}%</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
