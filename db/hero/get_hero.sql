SELECT file_id, hero_name, gender, gold, deaths, class_name, honor, health, attack, armor, strength, agility FROM save_files sf
JOIN classes c ON c.class_id = sf.class_id
WHERE file_id = $1;