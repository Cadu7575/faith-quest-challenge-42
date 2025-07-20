
import { useState } from 'react';

interface Avatar {
  gender: 'boy' | 'girl';
  skinColor: string;
  name: string;
}

interface AvatarSelectionProps {
  onComplete: (avatar: Avatar) => void;
  onViewLeaderboard?: () => void;
}

const AvatarSelection = ({ onComplete, onViewLeaderboard }: AvatarSelectionProps) => {
  const [selectedGender, setSelectedGender] = useState<'boy' | 'girl'>('boy');
  const [selectedSkinColor, setSelectedSkinColor] = useState('#FFDBAC');
  const [playerName, setPlayerName] = useState('');

  const skinColors = [
    '#FFDBAC', // Light
    '#F1C27D', // Medium Light
    '#E0AC69', // Medium
    '#C68642', // Medium Dark
    '#8D5524', // Dark
    '#654321'  // Very Dark
  ];

  const handleComplete = () => {
    if (!playerName.trim()) {
      alert('Por favor, digite seu nome!');
      return;
    }

    const avatar: Avatar = {
      gender: selectedGender,
      skinColor: selectedSkinColor,
      name: playerName.trim()
    };

    onComplete(avatar);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center p-4">
      <div className="bg-slate-800/80 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-4 mb-4">
            <img 
              src="/lovable-uploads/ebf9a6d5-503e-4a4a-813b-cab50ba45b0e.png" 
              alt="Carlo Acutis" 
              className="w-16 h-16 rounded-full border-2 border-blue-300"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))',
                backgroundColor: 'transparent'
              }}
            />
            <div>
              <h1 className="text-2xl font-bold text-white">Quiz Católico</h1>
              <p className="text-blue-300">Carlo Acutis</p>
            </div>
          </div>
          <h2 className="text-xl text-white mb-2">Crie seu Avatar</h2>
          <p className="text-gray-400">Personalize seu personagem para começar</p>
        </div>

        {/* Avatar Preview */}
        <div className="flex justify-center mb-6">
          <div 
            className="w-24 h-24 rounded-full flex items-center justify-center text-4xl border-4 border-blue-300"
            style={{ backgroundColor: selectedSkinColor }}
          >
            {selectedGender === 'boy' ? '👦' : '👧'}
          </div>
        </div>

        {/* Name Input */}
        <div className="mb-6">
          <label className="block text-white font-semibold mb-2">
            Seu Nome:
          </label>
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Digite seu nome aqui..."
            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
            maxLength={20}
          />
        </div>

        {/* Gender Selection */}
        <div className="mb-6">
          <label className="block text-white font-semibold mb-3">
            Escolha o Gênero:
          </label>
          <div className="flex gap-4">
            <button
              onClick={() => setSelectedGender('boy')}
              className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
                selectedGender === 'boy'
                  ? 'border-blue-400 bg-blue-600/30 text-white'
                  : 'border-slate-600 bg-slate-700 text-gray-300 hover:border-slate-500'
              }`}
            >
              👦 Menino
            </button>
            <button
              onClick={() => setSelectedGender('girl')}
              className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
                selectedGender === 'girl'
                  ? 'border-blue-400 bg-blue-600/30 text-white'
                  : 'border-slate-600 bg-slate-700 text-gray-300 hover:border-slate-500'
              }`}
            >
              👧 Menina
            </button>
          </div>
        </div>

        {/* Skin Color Selection */}
        <div className="mb-8">
          <label className="block text-white font-semibold mb-3">
            Cor da Pele:
          </label>
          <div className="grid grid-cols-6 gap-2">
            {skinColors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedSkinColor(color)}
                className={`w-10 h-10 rounded-full border-4 transition-all ${
                  selectedSkinColor === color
                    ? 'border-blue-400 scale-110'
                    : 'border-slate-600 hover:border-slate-500'
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleComplete}
            disabled={!playerName.trim()}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Começar a Jogar! 🚀
          </button>
          
          {onViewLeaderboard && (
            <button
              onClick={onViewLeaderboard}
              className="w-full py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold rounded-lg hover:from-yellow-700 hover:to-orange-700 transition-all"
            >
              🏆 Ver Ranking
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AvatarSelection;
