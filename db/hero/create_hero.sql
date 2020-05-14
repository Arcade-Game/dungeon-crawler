INSERT INTO save_files(player_id, hero_name, gender, class_id, honor, hero_level, gold, deaths)
VALUES ($1, $2, $3, $4, 0, 1, 20, 0)
returning file_id;