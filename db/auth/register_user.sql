INSERT INTO players (username, password)
VALUES (${username}, ${password})
RETURNING player_id, username;