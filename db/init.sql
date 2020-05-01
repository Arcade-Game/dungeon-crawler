drop table if exists players
drop table if exists items
drop table if exists maps
drop table if exists monsters 
drop table if exists player_scores

create table players (
   player_id serial primary key,
   username varcher(150) not null,
   password varchar(300) not null
);

create table scores (
   score_id serial primary key,
   score integer
);

create table maps (
   map_id serial primary key,
   tile_type varchar(150)
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