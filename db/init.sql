drop table if exists players;
drop table if exists items;
drop table if exists monsters;
drop table if exists player_scores;

create table players (
   player_id serial primary key,
   username varchar(150) not null,
   password varchar(300) not null
);

create table scores (
   score_id serial primary key,
   score integer
);

create table player_scores (
   player_id int references players(player_id),
   score_id int references scores(score_id)
);

create table monsters (
   monster_id serial primary key,
   health integer not null,
   damage integer not null,
   armor integer not null,
   image text
);

create table items (
   item_id serial primary key,
   health integer,
   damage integer not null,
   heroric varchar(150),
   armor integer not null,
   image text
);

create table class (
   class_id primary key,
   name varchar(150)
); 

create table save_state (
   save_id serial primary key,
   player_id int references players(player_id),
   class_id int references class(class_id),
   gold integer
);

create table saved_monsters (
   save_id int references save_state(save_id),
   monster_id int references monsters(monster_id)
);

create table equiped_items (
   save_id int references save_state(save_id),
   item_id int references items(item_id)
);

create table inventory_items (
   save_id int references save_state(save_id),
   item_id int references items(item_id)
);