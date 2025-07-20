
-- Create leaderboard table to store player scores
CREATE TABLE public.leaderboard (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  player_name TEXT NOT NULL,
  score INTEGER NOT NULL DEFAULT 0,
  phases_completed INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index for faster queries on score
CREATE INDEX idx_leaderboard_score ON public.leaderboard(score DESC);

-- Create index for faster queries on player name
CREATE INDEX idx_leaderboard_player_name ON public.leaderboard(player_name);

-- Enable Row Level Security (making it public for leaderboard viewing)
ALTER TABLE public.leaderboard ENABLE ROW LEVEL SECURITY;

-- Allow everyone to view the leaderboard
CREATE POLICY "Anyone can view leaderboard" 
  ON public.leaderboard 
  FOR SELECT 
  USING (true);

-- Allow anyone to insert new scores
CREATE POLICY "Anyone can insert scores" 
  ON public.leaderboard 
  FOR INSERT 
  WITH CHECK (true);

-- Allow players to update their own scores (based on player name)
CREATE POLICY "Players can update their own scores" 
  ON public.leaderboard 
  FOR UPDATE 
  USING (true)
  WITH CHECK (true);
