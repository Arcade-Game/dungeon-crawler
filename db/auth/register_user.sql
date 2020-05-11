INSERT INTO players (username, password, email)
VALUES (${username}, ${password}, ${email})
RETURNING player_id;