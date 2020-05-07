DELETE FROM save_state
WHERE player_id = $1 AND save_id = $1;