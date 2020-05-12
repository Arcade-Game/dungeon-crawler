UPDATE save_files 
SET gold = $2, deaths = $3
WHERE file_id = $1;