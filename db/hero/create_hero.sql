INSERT INTO save_files(player_id, hero_name, class_id, hero_level, gold, deaths)
VALUES ($1, $2, $3, 1, 20, 0)
returning file_id;