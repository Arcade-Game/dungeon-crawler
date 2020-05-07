SELECT * FROM monsters m
JOIN monster_stats ms ON ms.monster_id = m.monster_id
WHERE m.monster_id = $1 AND level = $2;