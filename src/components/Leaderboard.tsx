import { useState, useEffect } from 'react';
import { useLeaderboard } from '../hooks/useLeaderboard';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from './ui/table';
import { Trophy, Medal, Award, ArrowLeft, RefreshCw } from 'lucide-react';

interface LeaderboardProps {
  onBack?: () => void;
}

const Leaderboard = ({ onBack }: LeaderboardProps) => {
  const { leaderboard, loading, fetchLeaderboard } = useLeaderboard();

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const getRankIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-blue-300 font-bold">{position}</span>;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white">Carregando ranking...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Header */}
      <div className="bg-slate-800/80 backdrop-blur-lg border-b border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {onBack && (
                <button
                  onClick={onBack}
                  className="p-2 text-blue-300 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
              )}
              <img 
                src="/lovable-uploads/ebf9a6d5-503e-4a4a-813b-cab50ba45b0e.png" 
                alt="Carlo Acutis" 
                className="w-12 h-12 rounded-full border-2 border-blue-300"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))',
                  backgroundColor: 'transparent'
                }}
              />
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-white">Ranking de Jogadores</h1>
                <p className="text-blue-300">Paróquia N.S. Aparecida - Grupo de Jovens Carlo Acutis</p>
              </div>
            </div>
            
            <button
              onClick={fetchLeaderboard}
              className="p-2 text-blue-300 hover:text-white transition-colors"
              title="Atualizar ranking"
            >
              <RefreshCw className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Leaderboard Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/80 backdrop-blur-lg rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-8 h-8 text-yellow-500" />
              <h2 className="text-3xl font-bold text-white">Hall da Fama</h2>
            </div>

            {leaderboard.length === 0 ? (
              <div className="text-center py-12">
                <Trophy className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">Nenhum jogador no ranking ainda.</p>
                <p className="text-gray-500">Seja o primeiro a jogar e aparecer aqui!</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-slate-700">
                      <TableHead className="text-blue-300 font-semibold">Posição</TableHead>
                      <TableHead className="text-blue-300 font-semibold">Jogador</TableHead>
                      <TableHead className="text-blue-300 font-semibold">Pontuação</TableHead>
                      <TableHead className="text-blue-300 font-semibold">Fases</TableHead>
                      <TableHead className="text-blue-300 font-semibold">Data</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leaderboard.map((entry, index) => (
                      <TableRow 
                        key={entry.id} 
                        className={`border-slate-700 hover:bg-slate-700/50 ${
                          index < 3 ? 'bg-slate-700/30' : ''
                        }`}
                      >
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            {getRankIcon(index + 1)}
                          </div>
                        </TableCell>
                        <TableCell className="text-white font-semibold">
                          {entry.player_name}
                        </TableCell>
                        <TableCell className="text-yellow-400 font-bold text-lg">
                          {entry.score.toLocaleString()}
                        </TableCell>
                        <TableCell className="text-blue-300">
                          {entry.phases_completed}/100
                        </TableCell>
                        <TableCell className="text-gray-400">
                          {new Date(entry.created_at).toLocaleDateString('pt-BR')}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
