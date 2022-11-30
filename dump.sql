--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6
-- Dumped by pg_dump version 14.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: plants; Type: TABLE; Schema: public; Owner: tiatheisen
--

CREATE TABLE public.plants (
    id integer NOT NULL,
    common_name character varying(500) NOT NULL,
    botanical_name character varying(500) NOT NULL,
    soil_type character varying(500) NOT NULL,
    spacing character varying(200) NOT NULL,
    plant_location character varying(500) NOT NULL,
    inundation_amount integer NOT NULL,
    image character varying(255) NOT NULL,
    sunlight_amount character varying(255) NOT NULL,
    hummingbirds boolean,
    deerresistant boolean,
    butterflies boolean,
    birds boolean,
    pollinators boolean
);


ALTER TABLE public.plants OWNER TO tiatheisen;

--
-- Name: plants_id_seq; Type: SEQUENCE; Schema: public; Owner: tiatheisen
--

CREATE SEQUENCE public.plants_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.plants_id_seq OWNER TO tiatheisen;

--
-- Name: plants_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tiatheisen
--

ALTER SEQUENCE public.plants_id_seq OWNED BY public.plants.id;


--
-- Name: plants_user; Type: TABLE; Schema: public; Owner: tiatheisen
--

CREATE TABLE public.plants_user (
    id integer NOT NULL,
    user_id integer NOT NULL,
    plant_id integer NOT NULL,
    notes character varying(1000),
    depth integer,
    design character varying(1000)
);


ALTER TABLE public.plants_user OWNER TO tiatheisen;

--
-- Name: plants_user_id_seq; Type: SEQUENCE; Schema: public; Owner: tiatheisen
--

CREATE SEQUENCE public.plants_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.plants_user_id_seq OWNER TO tiatheisen;

--
-- Name: plants_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tiatheisen
--

ALTER SEQUENCE public.plants_user_id_seq OWNED BY public.plants_user.id;


--
-- Name: plants_user_plant_id_seq; Type: SEQUENCE; Schema: public; Owner: tiatheisen
--

CREATE SEQUENCE public.plants_user_plant_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.plants_user_plant_id_seq OWNER TO tiatheisen;

--
-- Name: plants_user_plant_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tiatheisen
--

ALTER SEQUENCE public.plants_user_plant_id_seq OWNED BY public.plants_user.plant_id;


--
-- Name: plants_user_user_id_seq; Type: SEQUENCE; Schema: public; Owner: tiatheisen
--

CREATE SEQUENCE public.plants_user_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.plants_user_user_id_seq OWNER TO tiatheisen;

--
-- Name: plants_user_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tiatheisen
--

ALTER SEQUENCE public.plants_user_user_id_seq OWNED BY public.plants_user.user_id;


--
-- Name: uploads; Type: TABLE; Schema: public; Owner: tiatheisen
--

CREATE TABLE public.uploads (
    id integer NOT NULL,
    image_url character varying(1000) NOT NULL,
    description character varying(1000),
    user_id integer
);


ALTER TABLE public.uploads OWNER TO tiatheisen;

--
-- Name: uploads_id_seq; Type: SEQUENCE; Schema: public; Owner: tiatheisen
--

CREATE SEQUENCE public.uploads_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.uploads_id_seq OWNER TO tiatheisen;

--
-- Name: uploads_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tiatheisen
--

ALTER SEQUENCE public.uploads_id_seq OWNED BY public.uploads.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: tiatheisen
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    size integer,
    depth integer,
    garden_location character varying(1000),
    username character varying(80) NOT NULL,
    password character varying(1000) NOT NULL
);


ALTER TABLE public."user" OWNER TO tiatheisen;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: tiatheisen
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO tiatheisen;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tiatheisen
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: plants id; Type: DEFAULT; Schema: public; Owner: tiatheisen
--

ALTER TABLE ONLY public.plants ALTER COLUMN id SET DEFAULT nextval('public.plants_id_seq'::regclass);


--
-- Name: plants_user id; Type: DEFAULT; Schema: public; Owner: tiatheisen
--

ALTER TABLE ONLY public.plants_user ALTER COLUMN id SET DEFAULT nextval('public.plants_user_id_seq'::regclass);


--
-- Name: plants_user user_id; Type: DEFAULT; Schema: public; Owner: tiatheisen
--

ALTER TABLE ONLY public.plants_user ALTER COLUMN user_id SET DEFAULT nextval('public.plants_user_user_id_seq'::regclass);


--
-- Name: plants_user plant_id; Type: DEFAULT; Schema: public; Owner: tiatheisen
--

ALTER TABLE ONLY public.plants_user ALTER COLUMN plant_id SET DEFAULT nextval('public.plants_user_plant_id_seq'::regclass);


--
-- Name: uploads id; Type: DEFAULT; Schema: public; Owner: tiatheisen
--

ALTER TABLE ONLY public.uploads ALTER COLUMN id SET DEFAULT nextval('public.uploads_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: tiatheisen
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Data for Name: plants; Type: TABLE DATA; Schema: public; Owner: tiatheisen
--

COPY public.plants (id, common_name, botanical_name, soil_type, spacing, plant_location, inundation_amount, image, sunlight_amount, hummingbirds, deerresistant, butterflies, birds, pollinators) FROM stdin;
1	Maidenhair Fern	Adiantum pedatum	loam	18"	bottom	6	images/maidenhairfern.jpg	medium shade	f	f	f	f	f
2	Big Bluestem	Andropogon gerardii	loam	24"	back	6	images/bigbluestem.jpg	light shade	f	f	t	t	f
3	Columbine	Aguilegia canadensis	loam	18"	front	3	images/columbine.jpg	mixed sun shade	t	t	t	f	f
4	Spikenard	Aralia racemosa	loam	24"	side	6	images/spikenard.png	full shade	f	f	f	f	f
5	Black Chokeberry	Aronia melanocarpa	all soils	36"	bottom	6	images/blackchokeberry.jpg	medium shade	f	f	f	t	f
6	Wild Ginger	Asarum canadense	loam	15"	back	0	images/wildginger.jpg	medium shade	f	f	f	f	f
7	Marsh Milkweed	Asclepias incarnata	loam	15"	back	12	images/marshmilkweed.jpg	medium shade	f	f	t	f	f
8	Butterfly Milkweed	Asclepias tuberosa	all soils	24"	side	3	images/butterflymilkweed.jpg	mixed sun shade	f	f	t	f	f
9	Large Leaf Aster	Aster macrophyllus	all soils	24"	side	3	images/largeleafaster.jpg	medium shade	f	f	t	f	f
10	Sky Blue Aster	Aster oolentangiensis	all soils	15"	front	3	images/skyblueaster.jpg	mixed sun shade	f	f	t	f	f
11	Purple Daisy Aster	Aster patens	loam	18"	front	3	images/purpledaisyaster.jpg	mixed sun shade	f	f	t	f	f
12	Silky Aster	Aster sericeus	sand	15"	front	3	images/silkyaster.jpg	full sun	f	f	t	f	f
13	Lady Fern	Athyrium filix-femina	all soils	18"	bottom	9	images/ladyfern.jpg	full shade	f	f	t	f	f
14	Sideoats Grama	Bouteloua curtipendula	sand	15"	side	3	images/sideoatsgrama.jpg	full sun	f	f	f	f	f
15	Harebells	Campanula rotundifolia	all soils	12"	front	0	images/harebells.jpg	mixed sun shade	f	f	f	f	f
16	Emorys Sedge	Carex emoryi	all soils	18"	bottom	12	images/emorysedge.jpg	mixed sun shade	f	f	t	f	f
17	Hop Sedge	Carex lupulina	all soils	18"	back	9	images/hopsedge.jpg	medium shade	f	f	f	f	f
18	Sun Sedge	Carex pennsylvanica	sand	12"	front	0	images/sunsedge.jpg	mixed sun shade	f	f	f	f	f
19	Fox Sedge	Carex vulpinoidea	all soils	18"	bottom	12	images/sunsedge.jpg	light shade	f	f	f	f	f
20	Turtlehead	Chelone glabra	all soils	18"	bottom	12	images/turtlehead.jpg	medium shade	f	f	t	f	t
21	Purple Prairie Clover	Dalea purpurea	sand	16"	side	0	images/purpleprairieclover.jpg	full sun	f	f	t	f	f
22	Purple Coneflower	Echinacea purpurea	all soils	18"	side	6	images/purpleconeflowers.png	mixed sun shade	f	t	t	t	f
23	Joe-Pye Weed	Eupatorium maculatum	all soils	24"	bottom	12	images/joepyeweed.jpg	full sun	f	f	t	f	f
24	Wild Geranium	Geranium maculatum	all soils	15"	front	3	images/wildgeranium.jpg	medium shade	f	t	f	f	f
25	Prairie Smoke	Geum Triflorum	all soils	15"	front	0	images/prairiesmoke.jpg	mixed sun shade	f	f	f	f	f
26	Sneezeweed	Helenium autumnale	clay	18"	bottom	0	images/sneezeweed.jpg	mixed sun shade	f	f	t	f	f
27	Ox-eye sunflower	Heliopsis helianthoides	all soils	24"	back	6	images/oxeyesunflower.jpg	mixed sun shade	f	f	t	f	f
28	Sharp-lobed hepatica	Hepatica acultiloba	loam	12"	front	0	images/sharplobedhepatica.jpg	medium shade	f	f	f	f	f
29	Alum root Coral Bells	Heuchera richardsonii	sand	18"	side	3	images/alumrootcoralbells.jpg	mixed sun shade	f	f	f	f	f
30	Smooth Hydrangea	Hydrangea arborescens	all soils	4ft	back	6	images/hydrangea.jpg	light shade	f	f	f	f	f
31	Blue Flag Iris	Iris versicolor	clay	18"	bottom	12	images/blueflagiris.png	light shade	t	f	t	f	f
32	Soft Rush	Juncus effusus	clay	18"	bottom	12	images/softrush.jpg	light shade	f	f	f	t	f
33	Creeping Juniper	Juniperus horizontalis	sand	12"	front	3	images/creepingjuniper.png	light shade	f	f	f	f	f
34	Rough Blazingstar	Liatris aspera	sand	15"	side	3	images/roughblazingstar.jpg	light shade	f	f	t	t	f
35	Meadow Blazingstar	Liatris liglistylis	loam	18"	bottom	6	images/meadowblazingstar.jpg	light shade	f	f	t	t	f
36	Prairie Blazingstar	Liatris pycnostachya	all soils	18"	bottom	9	images/prairieblazingstar.jpg	full sun	f	f	t	t	f
37	Great Blue Lobelia	Lobelia siphilitica	all soils	15"	bottom	9	images/greatbluelobelia.jpg	mixed sun shade	f	f	t	f	t
38	False Solomans Seal	Mainthemum racemosum	all soils	18"	side	6	images/falsesolomansseal.jpg	medium shade	f	f	f	f	f
39	Ostrich Fern	Matteuccia struthiopteris	loam	48"	bottom	12	images/ostrichfern.jpg	medium shade	f	f	f	f	f
40	Sensitive Fern	Onoclea sensibilis	loam	18"	bottom	12	images/sensitivefern.jpg	mixed sun shade	f	f	f	f	f
41	Solomons Seal	Polygonatum biflorum	loam	18"	back	12	images/solomonsseal.jpg	medium shade	f	f	f	f	f
42	Yellow Coneflower	Ratibida pinnata	all soils	18"	back	6	images/yellowconeflower.jpg	full sun	f	f	t	t	f
43	Black Eyed Susan	Rudbeckia hirta	all soils	18"	side	0	images/blackeyedsusan.png	full sun	f	f	t	t	f
45	Showy Goldrenrod	Solidago speciosa	all soils	18"	side	6	images/showygoldenrod,jpg		f	f	t	f	f
46	Wood Grass	Soghastrum nutans	all soils	18"	bottom	9	images/woodgrass.png	light shade	f	f	f	t	f
47	Ironweed	Vernonia fasiculata	all soils	18"	bottom	12	images/ironweed.jpg	light shade	f	f	t	f	f
48	Culvers Root	Vernoicastrum virginicum	all soils	24"	bottom	12	images/culversroot.jpg	light shade	f	f	t	f	f
49	Nannyberry	Viburnum lentago	all soils	10ft	bottom	12	images/nannyberry.png	mixed sun shade	f	f	f	t	f
44	Greenheaded Coneflower	Rudbeckia laciniata	all soils	18"	bottom	12	images/greenheadedconeflower.jpg	mixed sun shade	f	f	t	t	f
\.


--
-- Data for Name: plants_user; Type: TABLE DATA; Schema: public; Owner: tiatheisen
--

COPY public.plants_user (id, user_id, plant_id, notes, depth, design) FROM stdin;
3	1	22	Pollinators and birds love this plant!	\N	\N
1	1	8	Monarchs love this!	\N	\N
11	1	21		\N	\N
12	1	16	\N	\N	\N
2	1	10	Deer really love to eat this	\N	\N
\.


--
-- Data for Name: uploads; Type: TABLE DATA; Schema: public; Owner: tiatheisen
--

COPY public.uploads (id, image_url, description, user_id) FROM stdin;
2	public/uploads/plant_pic-1raingarden.png	coneflowers blooming	1
9	public/uploads/plant_pic-1monarchs.png	monarchs enjoying the garden!	1
12	public/uploads/plant_pic-1blueaster.png	blue aster	1
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: tiatheisen
--

COPY public."user" (id, size, depth, garden_location, username, password) FROM stdin;
1	\N	\N	\N	Tia	$2a$10$9pSXQMleCbsKBkdGNCOd2uKFWvKfHmWS4zgrFgnViDSsiSg4g4n7S
2	\N	\N	\N	Ron	$2a$10$tirL5fuvM0RMYm.C8j4WK.W13MGO0iVrXJz4nirtlMkcLVbUQurqq
\.


--
-- Name: plants_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tiatheisen
--

SELECT pg_catalog.setval('public.plants_id_seq', 49, true);


--
-- Name: plants_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tiatheisen
--

SELECT pg_catalog.setval('public.plants_user_id_seq', 12, true);


--
-- Name: plants_user_plant_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tiatheisen
--

SELECT pg_catalog.setval('public.plants_user_plant_id_seq', 1, false);


--
-- Name: plants_user_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tiatheisen
--

SELECT pg_catalog.setval('public.plants_user_user_id_seq', 1, false);


--
-- Name: uploads_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tiatheisen
--

SELECT pg_catalog.setval('public.uploads_id_seq', 12, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tiatheisen
--

SELECT pg_catalog.setval('public.user_id_seq', 4, true);


--
-- Name: plants plants_pkey; Type: CONSTRAINT; Schema: public; Owner: tiatheisen
--

ALTER TABLE ONLY public.plants
    ADD CONSTRAINT plants_pkey PRIMARY KEY (id);


--
-- Name: plants_user plants_user_pkey; Type: CONSTRAINT; Schema: public; Owner: tiatheisen
--

ALTER TABLE ONLY public.plants_user
    ADD CONSTRAINT plants_user_pkey PRIMARY KEY (id);


--
-- Name: uploads uploads_pkey; Type: CONSTRAINT; Schema: public; Owner: tiatheisen
--

ALTER TABLE ONLY public.uploads
    ADD CONSTRAINT uploads_pkey PRIMARY KEY (id);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: tiatheisen
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: user user_username_key; Type: CONSTRAINT; Schema: public; Owner: tiatheisen
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_username_key UNIQUE (username);


--
-- Name: uploads uploads_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tiatheisen
--

ALTER TABLE ONLY public.uploads
    ADD CONSTRAINT uploads_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- PostgreSQL database dump complete
--

