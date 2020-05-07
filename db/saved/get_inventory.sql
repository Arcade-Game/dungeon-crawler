SELECT sf.file_id, item_name, attack, armor, image FROM save_files sf
JOIN inventory_items ii ON ii.file_id = sf.file_id
JOIN items i ON i.item_id = ii.item_id
WHERE player_id = $1;
