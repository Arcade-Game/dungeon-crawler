SELECT file_id, hero_name, gold, class_name, health, attack, armor, strength, agility FROM save_files sf
JOIN classes c ON c.class_id = sf.class_id
WHERE file_id = $1;