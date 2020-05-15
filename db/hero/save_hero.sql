UPDATE save_files 
SET gold = $2, deaths = $3, honor = $4
WHERE file_id = $1;