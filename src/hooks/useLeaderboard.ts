
import { useState, useEffect } from 'react';
import { supabase } from '../integrations/supabase/client';
import { toast } from 'sonner';

interface LeaderboardEntry {
  id: string;
  player_name: string;
  score: number;
  phases_completed: number;
  created_at: string;
}

export const useLeaderboard = () => {
  const [saving, setSaving] = useState(false);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchLeaderboard = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('leaderboard')
        .select('*')
        .order('score', { ascending: false })
        .limit(50);

      if (error) {
        console.error('Erro ao buscar leaderboard:', error);
        return;
      }

      setLeaderboard(data || []);
    } catch (error) {
      console.error('Erro ao buscar leaderboard:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveScore = async (playerName: string, score: number, phasesCompleted: number) => {
    setSaving(true);
    try {
      console.log('Salvando pontuação:', { playerName, score, phasesCompleted });

      // Verificar se o jogador já existe
      const { data: existingPlayer, error: fetchError } = await supabase
        .from('leaderboard')
        .select('*')
        .eq('player_name', playerName)
        .single();

      if (fetchError && fetchError.code !== 'PGRST116') {
        console.error('Erro ao buscar jogador existente:', fetchError);
        throw fetchError;
      }

      if (existingPlayer) {
        // Sempre atualizar a pontuação (mesmo que seja menor)
        const { error: updateError } = await supabase
          .from('leaderboard')
          .update({ 
            score, 
            phases_completed: phasesCompleted,
            updated_at: new Date().toISOString()
          })
          .eq('id', existingPlayer.id);

        if (updateError) {
          console.error('Erro ao atualizar pontuação:', updateError);
          throw updateError;
        }

        // Mostrar toast apenas se melhorou a pontuação
        if (score > existingPlayer.score) {
          toast.success('Nova melhor pontuação!');
        }
      } else {
        // Criar nova entrada
        const { error: insertError } = await supabase
          .from('leaderboard')
          .insert({ 
            player_name: playerName, 
            score, 
            phases_completed: phasesCompleted 
          });

        if (insertError) {
          console.error('Erro ao inserir nova pontuação:', insertError);
          throw insertError;
        }

        toast.success('Entrada no ranking criada!');
      }

      // Atualizar o leaderboard após salvar
      await fetchLeaderboard();
      console.log('Pontuação salva com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar pontuação:', error);
      toast.error('Erro ao salvar pontuação no ranking.');
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  return { saveScore, saving, leaderboard, loading, fetchLeaderboard };
};
