SELECT sf.file_id, i.item_id, item_name, item_type, attack, armor, price, image FROM save_files sf
JOIN equipped_items ei ON ei.file_id = sf.file_id
JOIN items i ON i.item_id = ei.item_id
WHERE sf.file_id = $1;