
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
            VALUES ('Warrior', 100, 1, 1, 4, 0), 
            ('Ranger', 80, 1, 0, 2, 4), 
            ('Rogue', 60, 2, 0, 0, 5);

create table save_files (
   file_id serial primary key,
   player_id int references players(player_id),
   hero_name VARCHAR(20),
   class_id int references classes(class_id),
   hero_level INT,
   gold INT,
   deaths INT
);

create table items (
   item_id serial primary key,
   item_type VARCHAR(50),
   item_name VARCHAR(50),
   attack INT NOT NULL,
   armor integer not null,
   rarity VARCHAR(15),
   image text
);

      INSERT INTO items (item_name, item_type, attack, armor, image)
         VALUES ('Mail Curass', 'armor' ,0, 4, 'https://cdn.clipart.email/41df5b4f6c69ce452ca2b60cadf62840_chest-plate-armor-png-clipart-763252-pikpng_840-728.jpeg' );


create table equipped_items (
   file_id int references save_files(file_id),
   item_id int references items(item_id)
);

INSERT INTO equipped_items (file_id, item_id)
VALUES (3,3);

create table inventory_items (
   file_id int references save_files(file_id),
   item_id int references items(item_id)
);
      INSERT INTO inventory_items (file_id, item_id)
      VALUES (3,1), (3,2);

create table saved_monsters (
   file_id int references save_files(file_id),
   monster_id int references monsters(monster_id),
   monster_level INT
);

create table monsters (
   monster_id SERIAL PRIMARY KEY,
   name VARCHAR(30),
   image TEXT
);
         INSERT INTO monsters (name, image)
         VALUES ('Goblin','https://www.google.com/url?sa=i&url=https%3A%2F%2Fdlpng.com%2Fpng%2F6354566&psig=AOvVaw2ANxtAwytsg5ocElFVPbCV&ust=1588714284932000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMDpiIyUm-kCFQAAAAAdAAAAABAD'),
         ('Skeleton', NULL);

CREATE TABLE monster_stats (
   monster_id INT REFERENCES monsters(monster_id),
   level INT,
   health INT,
   attack  INT NOT NULL,
   armor INT NOT NULL,
   strength INT,
   agility INT
);
         INSERT INTO monster_stats (monster_id, level, health, attack, armor, strength, agility)
         VALUES (1, 1, 3, 1, 1, 1, 2), 
         (2, 1, 5, 2, 2, 2, 2), 
         (1, 2, 4, 2, 1, 1, 4);




