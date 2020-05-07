
drop table if exists players;
drop table if exists items;
drop table if exists monsters;
drop table if exists player_scores;

create table players (
   player_id serial primary key,
   username varchar(150) not null,
   password varchar(300) not null,
   email VARCHAR(150) NOT NULL
);

-- create table scores (
--    score_id serial primary key,
--    score integer
-- );

-- create table player_scores (
--    player_id int references players(player_id),
--    score_id int references scores(score_id)
-- );


CREATE TABLE classes (
   class_id SERIAL PRIMARY KEY,
   class_name VARCHAR(30),
   health INT,
   attack INT NOT NULL,
   armor INT NOT NULL,
   strength INT,
   agility INT
);
      INSERT INTO classes (class_name, health, attack, armor, strength, agility)
      VALUES ('Warrior', 100, 1, 1, 4, 1);
create table save_state (
   save_id serial primary key,
   player_id int references players(player_id),
   hero_name VARCHAR(20),
   class_id int references classes(class_id),
   hero_level INT,
   gold INT
);

create table items (
   item_id serial primary key,
   item_name VARCHAR(50),
   attack INT NOT NULL,
   armor integer not null,
   image text
);

create table equipped_items (
   save_id int references save_state(save_id),
   item_id int references items(item_id)
);

create table inventory_items (
   save_id int references save_state(save_id),
   item_id int references items(item_id)
);

create table saved_monsters (
   save_id int references save_state(save_id),
   monster_id int references monsters(monster_id),
   monster_level INT
);

create table monsters (
   monster_id SERIAL PRIMARY KEY,
   name VARCHAR(30),
   image TEXT
);

CREATE TABLE monster_stats (
   monster_id INT REFERENCES monsters(monster_id),
   level INT,
   health INT,
   attack  INT NOT NULL,
   armor INT NOT NULL,
   strength INT,
   agility INT
);




