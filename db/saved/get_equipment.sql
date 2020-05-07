SELECT sf.file_id, item_name, attack, armor, image FROM save_files sf
JOIN equipped_items ei ON ei.file_id = sf.file_id
JOIN items i ON i.item_id = ei.item_id
WHERE player_id = $1;