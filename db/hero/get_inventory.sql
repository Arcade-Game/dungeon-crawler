SELECT sf.file_id, i.item_id, item_name, item_type, attack, armor, price, image FROM save_files sf
JOIN inventory_items ii ON ii.file_id = sf.file_id
JOIN items i ON i.item_id = ii.item_id
WHERE sf.file_id = $1;
