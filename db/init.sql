
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
   gender VARCHAR(6),
   class_id int references classes(class_id),
   hero_level INT,
   gold INT,
   deaths INT,
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



INSERT INTO items (item_name, item_type, attack, armor, rarity, price, image)
VALUES ('Iron Axe', 'weapon', 2, -1, 'common', 25, 'https://res.cloudinary.com/desyiuzzn/image/upload/v1589328802/refternu/pq6xevay9hzpqfxtq5ux.png'),
 ('Steel Axe', 'weapon', 3, -1, 'common', 50, 'https://res.cloudinary.com/desyiuzzn/image/upload/v1589339737/refternu/rceamsfs1qit4seclwwv.png'),
 ('Wooden Sword', 'weapon', 1, 0, 'common', 15,'https://res.cloudinary.com/desyiuzzn/image/upload/v1589335839/refternu/k4wvluqqfz5n7gxj9me2.png'),
 ('Iron Dagger', 'off-hand', 1, 0, 'common', 25,'https://res.cloudinary.com/desyiuzzn/image/upload/v1589339584/refternu/vsfvlakfpydhnakoligp.png'),
 ('Steel Dagger', 'off-hand', 2, 0, 'common', 50,'https://res.cloudinary.com/desyiuzzn/image/upload/v1589339790/refternu/nprv2gge8ocayy0drots.png'),
 ('Frostbite', 'weapon', 9, 0, 'Epic', 10000, 'https://res.cloudinary.com/desyiuzzn/image/upload/v1589337168/refternu/iiykiulzc3ie23psbil6.png'),
 ('Broad Sword', 'weapon', 3, 0, 'uncommon', 125, 'https://res.cloudinary.com/desyiuzzn/image/upload/v1589337583/refternu/naqao6uxwozfl2ay3gbf.png'),
 ('Falchion', 'weapon', 3, 0, 'uncommon', 125, 'https://res.cloudinary.com/desyiuzzn/image/upload/v1589338693/refternu/agcnxxykev2z4ejqv1pr.png'),
 ('Steel Shortsword', 'weapon', 3, 0, 'uncommon', 125, 'https://res.cloudinary.com/desyiuzzn/image/upload/v1589338775/refternu/lczbos5t8v89qa03ococ.png'),
 ('Iron Battleaxe', 'weapon', 4, -2, 'common', 100, 'https://res.cloudinary.com/desyiuzzn/image/upload/v1589339427/refternu/zor7zcqzwmmquxqp2saa.png'),
 ('Steel Battleaxe', 'weapon', 5, -2, 'uncommon', 175, 'https://res.cloudinary.com/desyiuzzn/image/upload/v1589339648/refternu/y0zhjairzrrzuxbygs1p.png'),
 ('Banded Leather','armor', 0, 2, 'common', 100, 'https://res.cloudinary.com/desyiuzzn/image/upload/v1589342010/refternu/dgbhz8okdhv2cdxq7x93.png'),
('Expert Crafted Banded Leather','armor', 0, 4, 'rare', 250, 'https://res.cloudinary.com/desyiuzzn/image/upload/v1589342714/refternu/xqxowjlq48pt5laurzhq.png'),
('Master Crafted Banded Leather','armor', 0, 5, 'rare', 300, 'https://res.cloudinary.com/desyiuzzn/image/upload/v1589342764/refternu/pqgoavlwipgvkboeuou4.png'),
('Chainmail','armor', 0, 6, 'rare', 1500, 'https://res.cloudinary.com/desyiuzzn/image/upload/v1589344258/refternu/cnuqu4pi8vwaqvh95aza.png')
('Quilted Armor','armor', 0, 1, 'common', 75, 'https://res.cloudinary.com/desyiuzzn/image/upload/v1589345070/refternu/jtiqhbcvajzf3rydrdgx.png'),
('Red Dragon Scale Mail','armor', 0, 15, 'legendary', 25000, 'https://res.cloudinary.com/desyiuzzn/image/upload/v1589345414/refternu/cs6eqe1t1eykup8axzaz.png'),
('Gladiator Armor','armor', 0, 5, 'uncommon', 450, 'https://res.cloudinary.com/desyiuzzn/image/upload/v1589347796/refternu/dbbgdyde0vqvtqzwfbsq.png'),
('Studded Leather','armor', 0, 3, 'uncommon', 200, 'https://res.cloudinary.com/desyiuzzn/image/upload/v1589348003/refternu/gmaanaugzawxrhxkdu8o.png'),
('Light Leather','armor', 0, 1, 'uncommon', 75, 'https://res.cloudinary.com/desyiuzzn/image/upload/v1589348638/refternu/decfiywnw3ctdbnt1ptt.png'),
('Pheonix Rising','off-hand', 0, 5, 'epic', 10000, 'https://res.cloudinary.com/desyiuzzn/image/upload/v1589349902/refternu/dgiaixfofjne1sqt8ffx.png'),
('Royal Buckler','off-hand', 0, 1, 'common', 75, 'https://res.cloudinary.com/desyiuzzn/image/upload/v1589350379/refternu/mwdvevdqnbcut7fe94rr.png'),
('Dragon''s Buckler','off-hand', 0, 2, 'uncommon', 175, 'https://res.cloudinary.com/desyiuzzn/image/upload/v1589350750/refternu/wg8k0frb2ex0dsintgxy.png'),
('Dwarven Buckler','off-hand', 0, 2, 'uncommon', 175, 'https://res.cloudinary.com/desyiuzzn/image/upload/v1589351189/refternu/tasxtogqormk7joyorvu.png');

 