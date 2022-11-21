
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!


 CREATE TABLE "plants" (
	"id" SERIAL PRIMARY KEY,
	"common_name" varchar(500) NOT NULL,
	"botanical_name" varchar(500) NOT NULL,
	"soil_type" varchar(500) NOT NULL,
	"spacing" varchar(200) NOT NULL,
	"plant_location" varchar(500) NOT NULL,
	"inundation_amount" INT NOT NULL,
	"image" varchar(255) NOT NULL,
	"sunlight_amount" (255) NOT NULL,
	"hummingbirds" BOOLEAN,
	"deer_resistant" BOOLEAN,
	"butterflies" BOOLEAN,
	"birds" BOOLEAN,
	"pollinators" BOOLEAN,
);


CREATE TABLE "uploads" (
	"id" SERIAL PRIMARY KEY,
	"image_url" varchar(1000) NOT NULL, 
	"description" varchar(1000),
	"user_id" INT REFERENCES "user"
);

CREATE TABLE "plants_user" (
	"id" SERIAL PRIMARY KEY,
	"user_id" serial NOT NULL,
	"plant_id" serial NOT NULL
);

CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"size" int,
	"depth" int,
	"garden_location" varchar(1000),
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


INSERT INTO "plants" ("common_name", "botanical_name", "soil_type", "spacing", "plant_location", "inundation_amount", "image", "sunlight_amount", "hummingbirds", "deer-resistant", "butterflies", "birds", "pollinators")
VALUES ('Maidenhair Fern', 'Adiantum pedatum', 'loam', '18"', 'bottom', 6, 'images/maidenhairfern.jpg', 'medium shade', false, false, false, false, false),
('Big Bluestem', 'Andropogon gerardii', 'loam', '24"', 'back', 6, 'images/bigbluestem.jpg', 'light shade', false, false, true, true, false),
('Columbine', 'Aguilegia canadensis', 'loam', '18"', 'front', 3, 'images/columbine.jpg', 'mixed sun shade', true, true, true, false, false),
('Spikenard', 'Aralia racemosa', 'loam', '24"', 'side', 6, 'images/spikenard.png', 'full shade', false, false, false, false, false),
('Black Chokeberry', 'Aronia melanocarpa', 'all soils', '36"', 'bottom', 6, 'images/blackchokeberry.jpg', 'medium shade', false, false, false, true, false),
('Wild Ginger', 'Asarum canadense', 'loam', '15"', 'back', 0, 'images/wildginger.jpg', 'medium shade', false, false, false, false, false),
('Marsh Milkweed', 'Asclepias incarnata', 'loam', '15"', 'back', 12, 'images/marshmilkweed.jpg', 'medium shade', false, false, true, false, false),
('Butterfly Milkweed', 'Asclepias tuberosa', 'all soils', '24"', 'side', 3, 'images/butterflymilkweed.jpg', 'mixed sun shade', false, false, true, false, false),
('Large Leaf Aster', 'Aster macrophyllus', 'all soils', '24"', 'side', 3, 'images/largeleafaster.jpg', 'medium shade', false, false, true, false, false),
('Sky Blue Aster', 'Aster oolentangiensis', 'all soils', '15"', 'front', 3, 'images/skyblueaster.jpg', 'mixed sun shade', false, false, true, false, false),
('Purple Daisy Aster', 'Aster patens', 'loam', '18"', 'front', 3, 'images/purpledaisyaster.jpg', 'mixed sun shade', false, false, true, false, false),
('Silky Aster', 'Aster sericeus', 'sand', '15"', 'front', 3, 'images/silkyaster.jpg', 'full sun', false, false, true, false, false),
('Lady Fern', 'Athyrium filix-femina', 'all soils', '18"', 'bottom', 9, 'images/ladyfern.jpg', 'full shade', false, false, true, false, false),
('Sideoats Grama', 'Bouteloua curtipendula', 'sand', '15"', 'side', 3, 'images/sideoatsgrama.jpg', 'full sun', false, false, false, false, false),
('Harebells', 'Campanula rotundifolia', 'all soils', '12"', 'front', 0, 'images/harebells.jpg', 'mixed sun shade', false, false, false, false, false),
('Emorys Sedge', 'Carex emoryi', 'all soils', '18"', 'bottom', 12, 'images/emorysedge.jpg', 'mixed sun shade', false, false, true, false, false),
('Hop Sedge', 'Carex lupulina', 'all soils', '18"', 'back', 9, 'images/hopsedge.jpg', 'medium shade', false, false, false, false, false),
('Sun Sedge', 'Carex pennsylvanica', 'sand', '12"', 'front', 0, 'images/sunsedge.jpg', 'mixed sun shade', false, false, false, false, false),
('Fox Sedge', 'Carex vulpinoidea', 'all soils', '18"', 'bottom', 12, 'images/sunsedge.jpg', 'light shade', false, false, false, false, false),
('Turtlehead', 'Chelone glabra', 'all soils', '18"', 'bottom', 12, 'images/turtlehead.jpg', 'medium shade', false, false, true, false, true),
('Purple Prairie Clover', 'Dalea purpurea', 'sand', '16"', 'side', 0, 'images/purpleprairieclover.jpg', 'full sun', false, false, true, false, false),
('Purple Coneflower', 'Echinacea purpurea', 'all soils', '18"', 'side', 6, 'images/purpleconeflowers.png', 'mixed sun shade', false, true, true, true, false),
('Joe-Pye Weed', 'Eupatorium maculatum', 'all soils', '24"', 'bottom', 12, 'images/joepyeweed.jpg', 'full sun', false, false, true, false, false),
('Wild Geranium', 'Geranium maculatum', 'all soils', '15"', 'front', 3, 'images/wildgeranium.jpg', 'medium shade', false, true, false, false, false),
('Prairie Smoke', 'Geum Triflorum', 'all soils', '15"', 'front', 0, 'images/prairiesmoke.jpg', 'mixed sun shade', false, false, false, false, false),
('Sneezeweed', 'Helenium autumnale', 'clay', '18"', 'bottom', 0, 'images/sneezeweed.jpg', 'mixed sun shade', false, false, true, false, false),
('Ox-eye sunflower', 'Heliopsis helianthoides', 'all soils', '24"', 'back', 6, 'images/oxeyesunflower.jpg', 'mixed sun shade', false, false, true, false, false),
('Sharp-lobed hepatica', 'Hepatica acultiloba', 'loam', '12"', 'front', 0, 'images/sharplobedhepatica.jpg', 'medium shade', false, false, false, false, false),
('Alum root Coral Bells', 'Heuchera richardsonii', 'sand', '18"', 'side', 3, 'images/alumrootcoralbells.jpg', 'mixed sun shade', false, false, false, false, false),
('Smooth Hydrangea', 'Hydrangea arborescens', 'all soils', '4ft', 'back', 6, 'images/hydrangea.jpg', 'light shade', false, false, false, false, false),
('Blue Flag Iris', 'Iris versicolor', 'clay', '18"', 'bottom', 12, 'images/blueflagiris.png', 'light shade', true, false, true, false, false),
('Soft Rush', 'Juncus effusus', 'clay', '18"', 'bottom', 12, 'images/softrush.jpg', 'light shade', false, false, false, true, false),
('Creeping Juniper', 'Juniperus horizontalis', 'sand', '12"', 'front', 3, 'images/creepingjuniper.png', 'light shade', false, false, false, false, false),
('Rough Blazingstar', 'Liatris aspera', 'sand', '15"', 'side', 3, 'images/roughblazingstar.jpg', 'light shade', false, false, true, true, false),
('Meadow Blazingstar', 'Liatris liglistylis', 'loam', '18"', 'bottom', 6, 'images/meadowblazingstar.jpg', 'light shade', false, false, true, true, false),
('Prairie Blazingstar', 'Liatris pycnostachya', 'all soils', '18"', 'bottom', 9, 'images/prairieblazingstar.jpg', 'full sun', false, false, true, true, false),
('Great Blue Lobelia', 'Lobelia siphilitica', 'all soils', '15"', 'bottom', 9, 'images/greatbluelobelia.jpg', 'mixed sun shade', false, false, true, false, true),
('False Solomans Seal', 'Mainthemum racemosum', 'all soils', '18"', 'side', 6, 'images/falsesolomansseal.jpg', 'medium shade', false, false, false, false, false),
('Ostrich Fern', 'Matteuccia struthiopteris', 'loam', '48"', 'bottom', 12, 'images/ostrichfern.jpg', 'medium shade', false, false, false, false, false),
('Sensitive Fern', 'Onoclea sensibilis', 'loam', '18"', 'bottom', 12, 'images/sensitivefern.jpg', 'mixed sun shade', false, false, false, false, false),
('Solomons Seal', 'Polygonatum biflorum', 'loam', '18"', 'back', 12, 'images/solomonsseal.jpg', 'medium shade', false, false, false, false, false),
('Yellow Coneflower', 'Ratibida pinnata', 'all soils', '18"', 'back', 6, 'images/yellowconeflower.jpg', 'full sun', false, false, true, true, false),
('Black Eyed Susan', 'Rudbeckia hirta', 'all soils', '18"', 'side', 0, 'images/blackeyedsusan.png', 'full sun', false, false, true, true, false),
('Greenheaded Coneflower', 'Rudbeckia laciniata', 'all soils', '18"', 'bottom', 12, 'images/greenheadedconeflower.jpg', 'mixed sun shade', false, false, true, true, false),
('Showy Goldrenrod', 'Solidago speciosa', 'all soils', '18"', 'side', 6, 'images/showygoldenrod,jpg', '', false, false, true, false, false),
('Wood Grass', 'Soghastrum nutans', 'all soils', '18"', 'bottom', 9, 'images/woodgrass.png', 'light shade', false, false, false, true, false),
('Ironweed', 'Vernonia fasiculata', 'all soils', '18"', 'bottom', 12, 'images/ironweed.jpg', 'light shade', false, false, true, false, false),
('Culvers Root', 'Vernoicastrum virginicum', 'all soils', '24"', 'bottom', 12, 'images/culversroot.jpg', 'light shade', false, false, true, false, false),
('Nannyberry', 'Viburnum lentago', 'all soils', '10ft', 'bottom', 12, 'images/nannyberry.png', 'mixed sun shade', false, false, false, true, false);