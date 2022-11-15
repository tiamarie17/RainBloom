
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

 CREATE TABLE "plants" (
	"id" SERIAL PRIMARY KEY,
	"common_name" varchar(500) NOT NULL,
	"botanical_name" varchar(500) NOT NULL,
	"soil_type" varchar(500) NOT NULL,
	"spacing" varchar(200) NOT NULL,
	"plant_location" varchar(500) NOT NULL,
	"inundation_amount" INT NOT NULL,
	"image" varchar(255) NOT NULL
);


CREATE TABLE "uploads" (
	"id" SERIAL PRIMARY KEY,
	"image_url" varchar(1000) NOT NULL,
	"description" varchar(1000) NOT NULL,
	"garden_id" INT NOT NULL
);

CREATE TABLE "plants_garden_design" (
	"id" SERIAL PRIMARY KEY,
	"garden_id" serial NOT NULL,
	"plant_id" serial NOT NULL,
	"plants_in_garden" varchar(1000) NOT NULL
);

CREATE TABLE "garden_design" (
	"id" SERIAL PRIMARY KEY,
	"size" int NOT NULL,
	"depth" int NOT NULL,
	"garden_location" varchar(1000) NOT NULL,
	"user_id" int NOT NULL
);