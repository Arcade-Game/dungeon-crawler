DELETE FROM inventory_items
WHERE file_id = $1;
DELETE FROM equipped_items
WHERE file_id = $1;
DELETE FROM save_files
WHERE file_id = $1;