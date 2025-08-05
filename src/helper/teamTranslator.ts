export const major1: string[] = [
	"karmine_corp",
	"nrg",
	"falcons",
	"vitality",
	"furia",
	"dignitas",
	"the_ultimates",
	"geekay_esports",
	"wildcard",
	"geng",
	"team_secret",
	"twisted_minds",
	"helfie_chiefs",
	"complexity",
	"luminosity",
	"fut_esports",
];

export type TeamBasic = {
	type: "default";
	name: string;
	path: string;
};

export type TeamWithPlayerInfo = {
	type: "additional-info";
	name: string;
	abbreviatedName: string;
	path: string;
	players: string[];
	color: string;
};

export type Team = TeamBasic | TeamWithPlayerInfo;

function tc(name: string, path: string): Team {
	return { type: "default", name: name, path: path };
}

const lookup: Map<string, Team> = new Map();
// EU
lookup.set("Ninjas in Pyjamas", tc("Ninjas in Pyjamas", "nip"));
lookup.set("Dignitas", tc("Dignitas", "dignitas_2025"));
lookup.set("Team Vitality", tc("Team Vitality", "vitality"));
lookup.set("Synergy", tc("Synergy", "synergy"));
lookup.set("F4WD", tc("F4WD", "f4wd"));
lookup.set("JJROX", tc("JJROX", "jjrox"));
lookup.set("Smokey Bacon Association", tc("Smokey Bacon", "smokey_bacon"));
lookup.set("Geekay Esports", tc("Geekay Esports", "geekay_esports"));
lookup.set("Karmine Corp", tc("Karmine Corp", "karmine_corp"));
lookup.set("Team BSK", tc("Team BSK", "bsk"));
lookup.set("Atom Unity", tc("Atom Unity", "atom_unity"));
lookup.set("Gentle Mates Alpine", tc("Gentle Mates Alpine", "mates"));
lookup.set("Dopamine", tc("Dopamine", "default_dark"));
lookup.set("Team BDS", tc("Team BDS", "bds"));
lookup.set("100%", tc("100%", "100"));
lookup.set("Tokyo Tigers", tc("Tokyo Tigers", "tokyo_tigers"));
lookup.set("CALIENTE", tc("CALIENTE", "caliente"));
lookup.set("$ATM", tc("$ATM", "default_dark"));
lookup.set("Chippy Chips", tc("Chippy Chips", "default_dark"));
lookup.set("Bobrito Bandito", tc("Bobrito Bandito", "default_dark"));
lookup.set(
	"Los Leones de Montepinar",
	tc("Los Leones de Monte...", "default_dark")
);
// LCQ
lookup.set("German Hermanos", tc("German Hermanos", "default_dark"));
lookup.set("Red Devils", tc("Red Devils", "default_dark"));
lookup.set("Hogan Mode", tc("Hogan Mode", "hogan_mode"));
lookup.set("2 Danes 1 Bruv", tc("2 Danes 1 Bruv", "default_dark"));
lookup.set("Pirots 3", tc("Pirots 3", "default_dark"));
lookup.set("123", tc("123", "default_dark"));
lookup.set("Sick!", tc("Sick!", "sick"));
lookup.set("Low Block", tc("Low Block", "low_block"));
lookup.set("Team TSK", tc("Team TSK", "tsk"));

// NA
lookup.set("Gen.G Mobil1 Racing", tc("Gen.G Mobil1 Racing", "geng"));
lookup.set("Complexity Gaming", tc("Complexity Gaming", "complexity"));
lookup.set("The Ultimates", tc("The Ultimates", "the_ultimates"));
lookup.set("NRG", tc("NRG", "nrg"));
lookup.set("Spacestation Gaming", tc("Spacestation Gaming", "ssg"));
lookup.set("The Boys", tc("The Boys", "default_dark"));
lookup.set("Shopify Rebellion", tc("Shopify Rebellion", "shopify"));
lookup.set("Pirates on a Boat", tc("Pirates on a Boat", "poab"));
lookup.set("Strictly Business", tc("Strictly Business", "default_dark"));
lookup.set("9Lives", tc("9Lives", "9lives"));
lookup.set("Team Evo", tc("Team Evo", "evo"));
lookup.set("nah", tc("nah", "nah"));
lookup.set("simtawk+1", tc("simtawk+1", "default_dark"));
lookup.set("WASSUP", tc("WASSUP", "default_dark"));
lookup.set("Power Rangers", tc("Power Rangers", "default_dark"));
lookup.set("Deleted Gaming", tc("Deleted Gaming", "deleted_xd"));
lookup.set("Schnitzelhaus", tc("Schnitzelhaus", "default_dark"));
lookup.set("S.O.S.", tc("S.O.S.", "sos"));
lookup.set("Lil Step Bros", tc("Lil Step Bros", "step_bros"));
lookup.set("Bubble Sort", tc("Bubble Sort", "default_dark"));
lookup.set(
	"Netherlamericanada",
	tc("Netherlamericanada", "netherlamericanada")
);
// LCQ
lookup.set("NPL", tc("NPL", "default_dark"));
lookup.set("Carl", tc("Carl", "default_dark"));
lookup.set("100X35 Esports", tc("100X35 Esports", "100x35"));
lookup.set("pepegashake", tc("pepegashake", "default_dark"));
lookup.set("BOTB", tc("BOTB", "default_dark"));
lookup.set("psycho rangers", tc("psycho rangers", "default_dark"));
lookup.set("G.A.S.", tc("G.A.S.", "default_dark"));
lookup.set("norms", tc("norms", "default_dark"));
lookup.set("Ratopia", tc("Ratopia", "default_dark"));
lookup.set("Affinity", tc("Affinity", "affinity"));
lookup.set("hey bro", tc("hey bro", "hey_bro"));

// SAM
lookup.set("Godfidence", tc("Godfidence", "godfidence"));
lookup.set("Corinthians Esports", tc("Corinthians Esports", "corinthians"));
lookup.set("Team Secret", tc("Team Secret", "team_secret"));
lookup.set("FURIA", tc("FURIA", "furia"));
lookup.set("Latino Heat", tc("Latino Heat", "latino_heat"));
lookup.set("Amethyst", tc("Amethyst", "default_dark"));
lookup.set("The Jungle", tc("The Jungle", "default_dark"));
lookup.set("Overlooked", tc("Overlooked", "overlooked"));
lookup.set("Moonrise", tc("Moonrise", "default_dark"));
lookup.set("FOFOS", tc("FOFOS", "default_dark"));
lookup.set("Genesis", tc("Genesis", "genesis"));
lookup.set("Team Reds", tc("Team Reds", "reds"));
lookup.set(
	"Team Brave Soldiers Esports",
	tc("Brave Soldiers", "brave_soldiers")
);
lookup.set("Gratia", tc("Gratia", "default_dark"));
lookup.set("Manchester City", tc("Cappuccino's", "default_dark"));
lookup.set("Papo de Visão", tc("Papo de Visão", "papo"));
lookup.set(
	"True Neutral Academy Black",
	tc("True Neutral Black", "true_neutral")
);
lookup.set("Fear of God", tc("Fear of God", "default_dark"));
lookup.set("TDL", tc("TDL", "default_dark"));
lookup.set("Kovya Godfidence", tc("Kovya Godfidence", "default_dark"));
lookup.set("Sunset", tc("Sunset", "sunset"));
lookup.set("Fofuchinhos", tc("Fofuchinhos", "default_dark"));
lookup.set("TamO ChoClo FC", tc("TamO ChoClo FC", "default_dark"));

// MENA
lookup.set("Team Falcons", tc("Team Falcons", "falcons"));
lookup.set("Al Qadsiah", tc("Al Qadsiah", "al_qadsiah"));
lookup.set("RBN", tc("RBN", "rbn"));
lookup.set("000", tc("000", "default_dark"));
lookup.set("VVV", tc("VVV", "vvv"));
lookup.set("Infamous", tc("Infamous", "infamous"));
lookup.set("INVADERS BLUES", tc("INVADERS BLUES", "invaders_blues"));
lookup.set("The Vicious", tc("The Vicious", "the_vicious"));
lookup.set("Twisted Minds", tc("Twisted Minds", "twisted_minds"));
lookup.set("sleeping", tc("sleeping", "sleeping"));
lookup.set("Team Vision", tc("Team Vision", "team_vision"));
lookup.set("F16 Esports", tc("F16 Esports", "f16_esports"));
lookup.set("zmr", tc("zmr", "default_dark"));
lookup.set("House Targaryen", tc("House Targaryen", "default_dark"));
lookup.set("Hkm", tc("Hkm", "default_dark"));
lookup.set("ROC Esports", tc("ROC Esports", "roc_esports"));
lookup.set("777", tc("777", "777"));
lookup.set("OFF", tc("OFF", "default_dark"));
lookup.set("Be Right Back", tc("Be Right Back", "default_dark"));
lookup.set("MDW", tc("MDW", "default_dark"));
lookup.set(
	"qwperotiyfkgmkzldgbsdm",
	tc("qwperotiyfkgmkzld...", "default_dark")
);
lookup.set("EKW", tc("EKW", "default_dark"));

lookup.set("ZNTRX", tc("ZNTRX", "zntrx"));
lookup.set("Team Reds", tc("Team Reds", "reds"));
lookup.set("We Don't Know", tc("We Don't Know", "default_dark"));
lookup.set("Blues", tc("Blues", "default_dark"));
lookup.set("Tam", tc("Tam", "default_dark"));
lookup.set("Revolution", tc("Revolution", "revolution"));
lookup.set("CLS", tc("CLS", "default_dark"));
lookup.set("NOM", tc("NOM", "default_dark"));

// OCE
lookup.set("PWR", tc("PWR", "pwr"));
lookup.set("TSM", tc("TSM", "tsm"));
lookup.set("Wildcard", tc("Wildcard", "wildcard"));
lookup.set("HSP", tc("HSP", "default_dark"));
lookup.set("Huh?", tc("Huh?", "default_dark"));
lookup.set("jim", tc("jim", "default_dark"));
lookup.set("big boost", tc("big boost", "default_dark"));
lookup.set("Nookles Pookles", tc("Nookles Pookles", "default_dark"));
lookup.set("Helfie Chiefs", tc("Chiefs", "helfie_chiefs"));
lookup.set("I'm fine in the west", tc("I'm fine in the west", "default_dark"));
lookup.set("Prime Pettys Pups", tc("Prime Pettys Pups", "default_dark"));
lookup.set("Tsurani", tc("Tsurani", "default_dark"));
lookup.set("R.T.T.", tc("R.T.T.", "default_dark"));
lookup.set("SKRIMZWORLD", tc("SKRIMZWORLD", "skrimzworld"));
lookup.set("Fishing For Wins", tc("Fishing For Wins", "default_dark"));
lookup.set("Wolves Gaming", tc("Wolves Gaming", "wolves_gaming"));
lookup.set("Three Chiches", tc("Three Chiches", "default_dark"));
lookup.set("fiburgerbeast", tc("fiburgerbeast", "default_dark"));
lookup.set("run it back", tc("run it back", "default_dark"));
lookup.set("retired", tc("retired", "default_dark"));
lookup.set("Chins up", tc("Chins up", "default_dark"));
lookup.set(
	"Freshies from down under",
	tc("Freshies from down...", "default_dark")
);
lookup.set("focotter", tc("focotter", "default_dark"));
lookup.set("waffle kickers", tc("waffle kickers", "default_dark"));
lookup.set("lenks emote", tc("lenks emote", "default_dark"));
lookup.set("Oogway and Friends", tc("Oogway and Friends", "default_dark"));
lookup.set("No Hat No Play", tc("No Hat No Play", "default_dark"));
lookup.set("angusbeefburgerhall", tc("angusbeefburgerhall", "default_dark"));
lookup.set("LOUDer", tc("LOUDer", "default_dark"));

// APAC
lookup.set("Luminosity Gaming", tc("Luminosity Gaming", "luminosity"));
lookup.set("God Speed", tc("God Speed", "god_speed"));
lookup.set("KOI", tc("KOI", "koi"));
lookup.set("KINOTROPE gaming", tc("KINOTROPE gaming", "kinotrope"));
lookup.set("Dreamstation", tc("Dreamstation", "dreamstation"));
lookup.set("Jungle Juicers", tc("Jungle Juicers", "jungle_juicers"));
lookup.set("TTG", tc("TTG", "default_dark"));
lookup.set("NJZ", tc("NJZ", "default_dark"));
lookup.set("ReaL Adrenaline", tc("ReaL Adrenaline", "default_dark"));
lookup.set("SENZA Esports", tc("SENZA Esports", "senza_esports"));
lookup.set("Pxress’s Habibtis", tc("Pxress’s Habibtis", "pxresss_habibtis"));
lookup.set("Zen Esports", tc("Zen Esports", "zen_esports"));
lookup.set("Praise", tc("Praise", "praise"));
lookup.set("sial", tc("sial", "default_dark"));
lookup.set("ROUNDS", tc("ROUNDS", "rounds"));
lookup.set("Team Phoenix", tc("Team Phoenix", "team_phoenix"));
lookup.set("Animated Dragons", tc("Animated Dragons", "default_dark"));
lookup.set("Blue Torch", tc("Blue Torch", "blue_torch"));
lookup.set(
	"Can't believe admins changed our name",
	tc("Can't believe admins...", "default_dark")
);
lookup.set("Winter Soldiers", tc("Winter Soldiers", "default_dark"));
lookup.set("Virtus.pro", tc("Virtus.pro", "virtus_pro"));
lookup.set("Movistar KOI", tc("Movistar KOI", "movistar_koi"));
lookup.set("boba tea", tc("boba tea", "default_dark"));
lookup.set("Error404.", tc("Error404.", "default_dark"));
lookup.set("Crazy boy", tc("Crazy boy", "default_dark"));
lookup.set("Big Dawgs", tc("Big Dawgs", "default_dark"));
lookup.set(
	"Tu-tu-du-du Verstappen",
	tc("Tu-tu-du-du Verstap...", "default_dark")
);

// SSA
lookup.set("FUT Esports", tc("FUT Esports", "fut_esports"));
lookup.set("Old Dog New Tricks", tc("Old Dog New Tricks", "default_dark"));
lookup.set("Akimbo Esports", tc("Akimbo Esports", "akimbo_esports"));
lookup.set("le bosh", tc("le bosh", "le_bosh"));
lookup.set("Cristobal Colon", tc("Cristobal Colon", "cristobal_colon"));
lookup.set("Limitless", tc("Limitless", "limitless"));
lookup.set("77Blocks", tc("77Blocks", "77blocks"));
lookup.set("Hey (with rizz)", tc("Hey (with rizz)", "hey_with_rizz"));
lookup.set("We love farming", tc("We love farming", "default_dark"));
lookup.set("Omen Esports", tc("Omen Esports", "omen_esports"));
lookup.set("CosmiCo Esports", tc("CosmiCo Esports", "cosmico_esports"));
lookup.set("Relentless", tc("Relentless", "relentless"));
lookup.set("Rapaziada 1906", tc("Rapaziada 1906", "rapaziada_1906"));
lookup.set("Crazy Time", tc("Crazy Time", "crazy_time"));
lookup.set("Goober Gang", tc("Goober Gang", "default_dark"));
lookup.set("123", tc("123", "default_dark"));
lookup.set("Str1ve eSports", tc("Str1ve eSports", "str1ve_esports"));
lookup.set("We'll Have a Look", tc("We'll Have a Look", "default_dark"));
lookup.set("GeneSix", tc("GeneSix", "genesix"));
lookup.set("Pomino's Dizza", tc("Pomino's Dizza", "default_dark"));
lookup.set("Poney No Jutsu", tc("Poney No Jutsu", "poney_no_jutsu"));
lookup.set("Triple B", tc("Triple B", "default_dark"));
lookup.set("Antisociales", tc("Antisociales", "default_dark"));
lookup.set("traduis si tu pues", tc("traduis si tu pues", "default_dark"));
lookup.set(
	"Death Cloud Esports",
	tc("Death Cloud Esports", "death_cloud_esports")
);
lookup.set("Unity", tc("Unity", "unity"));
lookup.set(
	"White Rabbit Gaming",
	tc("White Rabbit Gaming", "white_rabbit_gaming")
);

// 1v1 MENA
lookup.set("Nwpo", tc("Nwpo", "saudi_arabia"));
lookup.set("Nadr", tc("Nadr", "saudi_arabia"));
lookup.set("Rw9", tc("Rw9", "saudi_arabia"));
lookup.set("DrKnown", tc("DrKnown", "saudi_arabia"));
lookup.set("Nush", tc("Nush", "saudi_arabia"));
lookup.set("Trook", tc("Trook", "saudi_arabia"));
lookup.set("Willie", tc("Willie", "saudi_arabia"));
lookup.set("Ghaazi", tc("Ghaazi", "saudi_arabia"));
lookup.set("vFbi", tc("vFbi", "saudi_arabia"));
lookup.set("nmj", tc("nmj", "saudi_arabia"));
lookup.set("Kiileerrz", tc("Kiileerrz", "saudi_arabia"));
lookup.set("inav", tc("inav", "kuwait"));
lookup.set("Trk511", tc("Trk511", "saudi_arabia"));
lookup.set("Abdullah", tc("Abdullah", "saudi_arabia"));
lookup.set("M6R", tc("M6R", "saudi_arabia"));
lookup.set("ops", tc("ops", "saudi_arabia"));

// 1v1 NA
lookup.set("Wahvey", tc("Wahvey", "united_states"));
lookup.set("aZapatos", tc("aZapatos", "mexico"));
lookup.set("Scrzbbles", tc("Scrzbbles", "united_states"));
lookup.set("diaz", tc("diaz", "brazil"));
lookup.set("Firstkiller", tc("Firstkiller", "united_states"));
lookup.set("tawk", tc("tawk", "canada"));
lookup.set("Chronic", tc("Chronic", "united_states"));
lookup.set("AYYJAYY", tc("AYYJAYY", "united_states"));
lookup.set("Retals", tc("Retals", "united_states"));
lookup.set("Wizz", tc("Wizz", "united_states"));
lookup.set("MiistSB", tc("MiistSB", "united_states"));
lookup.set("reveal", tc("reveal", "united_states"));
lookup.set("Evoh", tc("Evoh", "united_states"));
lookup.set("Tricky", tc("Tricky", "united_states"));
lookup.set("S5-Cosmic", tc("S5-Cosmic", "united_states"));
lookup.set("Kehvn", tc("Kehvn", "united_states"));

// 1v1 OCE
lookup.set("Rezears", tc("Rezears", "germany"));
lookup.set("Kuipier", tc("Kuipier", "australia"));
lookup.set("Tatagane123", tc("Tatagane123", "australia"));
lookup.set("gus", tc("gus", "australia"));
lookup.set("Interlude19", tc("Interlude19", "australia"));
lookup.set("Ben.", tc("Ben.", "australia"));
lookup.set("Caleb", tc("Caleb", "australia"));
lookup.set("Lucifer", tc("Lucifer", "australia"));
lookup.set("Torsos", tc("Torsos", "australia"));
lookup.set("Vexon", tc("Vexon", "australia"));
lookup.set("Akame", tc("Akame", "chile"));
lookup.set("Evample", tc("Evample", "australia"));
lookup.set("Shorez", tc("Shorez", "australia"));
lookup.set("nachi", tc("nachi", "australia"));
lookup.set("memerly", tc("memerly", "australia"));
lookup.set("Pengoli", tc("Pengoli", "australia"));

// 1v1 SSA
lookup.set("Nuqqet", tc("Nuqqet", "england"));
lookup.set("Revezy", tc("Revezy", "england"));
lookup.set("Lazybear", tc("Lazybear", "portugal"));
lookup.set("motion", tc("motion", "england"));
lookup.set("Sweaty_Clarence", tc("Sweaty_Clarence", "south_africa"));
lookup.set("ivan", tc("ivan", "spain"));
lookup.set("kamz", tc("kamz", "south_africa"));
lookup.set("Snowyy", tc("Snowyy", "south_africa"));
lookup.set("2Die4", tc("2Die4", "south_africa"));
lookup.set("Ravi", tc("Ravi", "south_africa"));
lookup.set("AbuLba", tc("AbuLba", "egypt"));
lookup.set("Lickse", tc("Lickse", "portugal"));
lookup.set("Wiiilooo", tc("Wiiilooo", "france"));
lookup.set("gunz", tc("gunz", "south_africa"));
lookup.set("Declan", tc("Declan", "south_africa"));
lookup.set("Striker", tc("Striker", "germany"));

function getCombined(teams1: string[], teams2: string[]) {
	const res1 = teams1.map((team) => lookup.get(team) as Team);
	const res2 = teams2.map((team) => lookup.get(team) as Team);
	return [...res1, ...res2];
}

function getTranslated(teams: string[]) {
	return teams.map((team) => {
		if (!lookup.get(team)) {
			console.log(team);
		}
		return lookup.get(team) as Team;
	});
}

export const major1Teams: Team[] = [
	{ type: "default", name: "karmine_corp", path: "karmine_corp" },
	{ type: "default", name: "nrg", path: "nrg" },
	{ type: "default", name: "falcons", path: "falcons" },
	{ type: "default", name: "vitality", path: "vitality" },
	{ type: "default", name: "furia", path: "furia" },
	{ type: "default", name: "dignitas", path: "dignitas" },
	{ type: "default", name: "the_ultimates", path: "the_ultimates" },
	{ type: "default", name: "geekay_esports", path: "geekay_esports" },
	{ type: "default", name: "wildcard", path: "wildcard" },
	{ type: "default", name: "geng", path: "geng" },
	{ type: "default", name: "team_secret", path: "team_secret" },
	{ type: "default", name: "twisted_minds", path: "twisted_minds" },
	{ type: "default", name: "helfie_chiefs", path: "helfie_chiefs" },
	{ type: "default", name: "complexity", path: "complexity" },
	{ type: "default", name: "luminosity", path: "luminosity" },
	{ type: "default", name: "fut_esports", path: "fut_esports" },
];

export const na4Combined = getTranslated([
	"Gen.G Mobil1 Racing",
	"Complexity Gaming",
	"The Ultimates",
	"NRG",
	"Spacestation Gaming",
	"The Boys",
	"Shopify Rebellion",
	"Pirates on a Boat",
	"Strictly Business",
	"9Lives",
	"Team Evo",
	"nah",
	"simtawk+1",
	"WASSUP",
	"Power Rangers",
	"Deleted Gaming",
]);

export const na5Combined = getTranslated([
	"Schnitzelhaus",
	"Spacestation Gaming",
	"Gen.G Mobil1 Racing",
	"The Ultimates",
	"NRG",
	"S.O.S.",
	"Shopify Rebellion",
	"Complexity Gaming",
	"The Boys",
	"Strictly Business",
	"simtawk+1",
	"Team Evo",
	"Deleted Gaming",
	"Lil Step Bros",
	"Pirates on a Boat",
	"Bubble Sort",
]);

export const na6Combined = getTranslated([
	"NRG",
	"The Ultimates",
	"Spacestation Gaming",
	"Gen.G Mobil1 Racing",
	"Complexity Gaming",
	"9Lives",
	"S.O.S.",
	"Shopify Rebellion",
	"Team Evo",
	"The Boys",
	"Schnitzelhaus",
	"Strictly Business",
	"Bubble Sort",
	"Netherlamericanada",
	"WASSUP",
	"Deleted Gaming",
]);

export const naLcq = getTranslated([
	"Complexity Gaming",
	"Shopify Rebellion",
	"NPL",
	"The Boys",
	"Carl",
	"100X35 Esports",
	"pepegashake",
	"BOTB",
	"psycho rangers",
	"G.A.S.",
	"norms",
	"Ratopia",
	"Affinity",
	"Pirates on a Boat",
	"Lil Step Bros",
	"hey bro",
]);

export const na1v1 = getTranslated([
	"Wahvey",
	"aZapatos",
	"Scrzbbles",
	"diaz",
	"Firstkiller",
	"tawk",
	"Chronic",
	"AYYJAYY",
	"Retals",
	"Wizz",
	"MiistSB",
	"reveal",
	"Evoh",
	"Tricky",
	"S5-Cosmic",
	"Kehvn",
]);

export const eu4Combined = getTranslated([
	"Ninjas in Pyjamas",
	"Dignitas",
	"Team Vitality",
	"Synergy",
	"F4WD",
	"JJROX",
	"Smokey Bacon Association",
	"Geekay Esports",
	"Karmine Corp",
	"Team BSK",
	"Atom Unity",
	"Gentle Mates Alpine",
	"Dopamine",
	"Team BDS",
	"100%",
	"Tokyo Tigers",
]);

export const eu5Combined = getTranslated([
	"Dignitas",
	"Team Vitality",
	"Ninjas in Pyjamas",
	"Geekay Esports",
	"Karmine Corp",
	"Gentle Mates Alpine",
	"Smokey Bacon Association",
	"Dopamine",
	"Team BSK",
	"CALIENTE",
	"100%",
	"$ATM",
	"Synergy",
	"Chippy Chips",
	"F4WD",
	"Bobrito Bandito",
]);

export const eu6Combined = getTranslated([
	"Team Vitality",
	"Dignitas",
	"Geekay Esports",
	"Karmine Corp",
	"Ninjas in Pyjamas",
	"F4WD",
	"Synergy",
	"Gentle Mates Alpine",
	"Team BSK",
	"100%",
	"CALIENTE",
	"Dopamine",
	"Los Leones de Montepinar",
	"$ATM",
	"Team BDS",
	"Chippy Chips",
]);

export const euLcq = getTranslated([
	"German Hermanos",
	"Ninjas in Pyjamas",
	"Team BSK",
	"Gentle Mates Alpine",
	"Tokyo Tigers",
	"Red Devils",
	"Chippy Chips",
	"Hogan Mode",
	"2 Danes 1 Bruv",
	"CALIENTE",
	"Team BDS",
	"Pirots 3",
	"123",
	"Sick!",
	"Low Block",
	"Team TSK",
]);

export const sam4Combined = getTranslated([
	"Godfidence",
	"Corinthians Esports",
	"Team Secret",
	"FURIA",
	"Latino Heat",
	"Amethyst",
	"The Jungle",
	"Overlooked",
	"Moonrise",
	"FOFOS",
	"Genesis",
	"Team Reds",
	"Team Brave Soldiers Esports",
	"Gratia",
	"Manchester City",
	"Papo de Visão",
]);

export const sam5Combined = getTranslated([
	"Team Secret",
	"Amethyst",
	"Moonrise",
	"Corinthians Esports",
	"Godfidence",
	"Team Brave Soldiers Esports",
	"Overlooked",
	"Genesis",
	"Team Reds",
	"FURIA",
	"True Neutral Academy Black",
	"Latino Heat",
	"Fear of God",
	"Papo de Visão",
	"TDL",
	"Gratia",
]);

export const sam6Combined = getTranslated([
	"FURIA",
	"Kovya Godfidence",
	"Sunset",
	"Corinthians Esports",
	"Fofuchinhos",
	"Team Secret",
	"Amethyst",
	"Moonrise",
	"Team Brave Soldiers Esports",
	"Overlooked",
	"Papo de Visão",
	"Latino Heat",
	"Genesis",
	"TamO ChoClo FC",
	"Gratia",
	"True Neutral Academy Black",
]);

export const mena4Combined = getTranslated([
	"Team Falcons",
	"Twisted Minds",
	"Al Qadsiah",
	"sleeping",
	"RBN",
	"Team Vision",
	"000",
	"F16 Esports",
	"VVV",
	"zmr",
	"Infamous",
	"House Targaryen",
	"INVADERS BLUES",
	"Hkm",
	"The Vicious",
	"ROC Esports",
]);

export const mena5Combined = getTranslated([
	"Team Falcons",
	"ROC Esports",
	"Twisted Minds",
	"Team Vision",
	"OFF",
	"Be Right Back",
	"sleeping",
	"Infamous",
	"000",
	"The Vicious",
	"MDW",
	"Al Qadsiah",
	"777",
	"qwperotiyfkgmkzldgbsdm",
	"F16 Esports",
	"EKW",
]);

export const mena6Combined = getTranslated([
	"ZNTRX",
	"Team Reds",
	"Twisted Minds",
	"ROC Esports",
	"Al Qadsiah",
	"Team Vision",
	"OFF",
	"The Vicious",
	"Team Falcons",
	"We Don't Know",
	"Blues",
	"Tam",
	"Revolution",
	"CLS",
	"NOM",
	"RBN",
]);

export const mena1v1 = getTranslated([
	"Nwpo",
	"Nadr",
	"Rw9",
	"DrKnown",
	"Nush",
	"Trook",
	"Willie",
	"Ghaazi",
	"vFbi",
	"nmj",
	"Kiileerrz",
	"inav",
	"Trk511",
	"Abdullah",
	"M6R",
	"ops",
]);

export const oce4Combined = getTranslated([
	"PWR",
	"Helfie Chiefs",
	"TSM",
	"I'm fine in the west",
	"Wildcard",
	"Prime Pettys Pups",
	"HSP",
	"Tsurani",
	"Huh?",
	"R.T.T.",
	"jim",
	"SKRIMZWORLD",
	"big boost",
	"Fishing For Wins",
	"Nookles Pookles",
	"Wolves Gaming",
]);

export const oce5Combined = getTranslated([
	"Wildcard",
	"Helfie Chiefs",
	"TSM",
	"PWR",
	"SKRIMZWORLD",
	"Prime Pettys Pups",
	"Three Chiches",
	"I'm fine in the west",
	"Tsurani",
	"retired",
	"fiburgerbeast",
	"Chins up",
	"R.T.T.",
	"Nookles Pookles",
	"run it back",
	"Freshies from down under",
]);

export const oce6Combined = getTranslated([
	"Wildcard",
	"TSM",
	"PWR",
	"Helfie Chiefs",
	"I'm fine in the west",
	"retired",
	"SKRIMZWORLD",
	"focotter",
	"waffle kickers",
	"lenks emote",
	"Oogway and Friends",
	"Tsurani",
	"No Hat No Play",
	"Chins up",
	"angusbeefburgerhall",
	"LOUDer",
]);

export const oce1v1 = getTranslated([
	"Rezears",
	"Kuipier",
	"Tatagane123",
	"gus",
	"Interlude19",
	"Ben.",
	"Caleb",
	"Lucifer",
	"Torsos",
	"Vexon",
	"Akame",
	"Evample",
	"Shorez",
	"nachi",
	"memerly",
	"Pengoli",
]);

export const apac4Combined = getTranslated([
	"Luminosity Gaming",
	"God Speed",
	"KOI",
	"KINOTROPE gaming",
	"Dreamstation",
	"Jungle Juicers",
	"TTG",
	"NJZ",
	"ReaL Adrenaline",
	"SENZA Esports",
	"Pxress’s Habibtis",
	"Zen Esports",
	"Praise",
	"sial",
	"ROUNDS",
	"Team Phoenix",
]);

export const apac5Combined = getTranslated([
	"KINOTROPE gaming",
	"ROUNDS",
	"KOI",
	"Luminosity Gaming",
	"Dreamstation",
	"Animated Dragons",
	"God Speed",
	"Pxress’s Habibtis",
	"SENZA Esports",
	"NJZ",
	"ReaL Adrenaline",
	"Blue Torch",
	"Jungle Juicers",
	"Can't believe admins changed our name",
	"Winter Soldiers",
	"Zen Esports",
]);

export const apac6Combined = getTranslated([
	"Virtus.pro",
	"Movistar KOI",
	"Dreamstation",
	"KINOTROPE gaming",
	"SENZA Esports",
	"Zen Esports",
	"Pxress’s Habibtis",
	"Blue Torch",
	"boba tea",
	"Error404.",
	"Team Phoenix",
	"Crazy boy",
	"ROUNDS",
	"Big Dawgs",
	"Jungle Juicers",
	"Tu-tu-du-du Verstappen",
]);

export const ssa4Combined = getTranslated([
	"FUT Esports",
	"Old Dog New Tricks",
	"Akimbo Esports",
	"le bosh",
	"Hey (with rizz)",
	"Limitless",
	"77Blocks",
	"Cristobal Colon",
	"We love farming",
	"Omen Esports",
	"CosmiCo Esports",
	"Relentless",
	"Rapaziada 1906",
	"Crazy Time",
	"Goober Gang",
	"123",
]);

export const ssa5Combined = getTranslated([
	"FUT Esports",
	"Hey (with rizz)",
	"Str1ve eSports",
	"Limitless",
	"We'll Have a Look",
	"CosmiCo Esports",
	"le bosh",
	"77Blocks",
	"GeneSix",
	"Relentless",
	"Pomino's Dizza",
	"We love farming",
	"Cristobal Colon",
	"Poney No Jutsu",
	"Triple B",
	"Antisociales",
]);

export const ssa6Combined = getTranslated([
	"CosmiCo Esports",
	"le bosh",
	"Hey (with rizz)",
	"77Blocks",
	"Poney No Jutsu",
	"Pomino's Dizza",
	"traduis si tu pues",
	"FUT Esports",
	"Death Cloud Esports",
	"GeneSix",
	"Omen Esports",
	"Str1ve eSports",
	"Rapaziada 1906",
	"Unity",
	"Limitless",
	"White Rabbit Gaming",
]);

export const ssa1v1 = getTranslated([
	"Nuqqet",
	"Revezy",
	"Lazybear",
	"motion",
	"Sweaty_Clarence",
	"ivan",
	"kamz",
	"Snowyy",
	"2Die4",
	"Ravi",
	"AbuLba",
	"Lickse",
	"Wiiilooo",
	"gunz",
	"Declan",
	"Striker",
]);

// Team data for each team in major2Teams, including players, abbreviated name, and team color
const major2TeamData: Record<
	string,
	{ players: string[]; abbreviatedName: string; color: string }
> = {
	"Karmine Corp": {
		players: ["Vatira", "Atow", "Drali"],
		abbreviatedName: "Karmine Corp",
		color: "#00ccff",
	},
	NRG: {
		players: ["Atomic", "Beastmode", "Daniel"],
		abbreviatedName: "NRG",
		color: "#F63B00",
	},
	"Team Falcons": {
		players: ["trk511", "Rw9", "Kiileerrz"],
		abbreviatedName: "Falcons",
		color: "#00BD6D",
	},
	Dignitas: {
		players: ["stizzy", "ApparentlyJack", "Joreuz"],
		abbreviatedName: "Dignitas",
		color: "#87F6FA",
	},
	FURIA: {
		players: ["yANXNZ", "Lostt", "DRUFINHO"],
		abbreviatedName: "Furia",
		color: "#FFF",
	},
	"Team Vitality": {
		players: ["zen", "M0nkey M00n", "ExoTiik"],
		abbreviatedName: "Vitality",
		color: "#FEFF00",
	},
	"Spacestation Gaming": {
		players: ["Scrzbbles", "reveal", "kofyr"],
		abbreviatedName: "SSG",
		color: "#F5B11B",
	},
	"Gentle Mates Alpine": {
		players: ["Seikoo", "juicy", "yujin"],
		abbreviatedName: "M8s",
		color: "#FFF",
	},
	Wildcard: {
		players: ["Fever", "Torsos", "bananahead"],
		abbreviatedName: "Wildcard",
		color: "#1DABF9",
	},
	"Gen.G Mobil1 Racing": {
		players: ["MaJicBear", "CHEESE.", "justin."],
		abbreviatedName: "GEN.G",
		color: "#A4822E",
	},
	"Team Secret": {
		players: ["kv1", "swiftt", "Motta"],
		abbreviatedName: "Team Secret",
		color: "#FFF",
	},
	"Twisted Minds": {
		players: ["Nwpo", "rise.", "AtomiK"],
		abbreviatedName: "Twisted Minds",
		color: "#FA4968",
	},
	TSM: {
		players: ["Superlachie", "Amphis", "kaka"],
		abbreviatedName: "TSM",
		color: "#FFF",
	},
	"The Ultimates": {
		players: ["Firstkiller", "Lj", "Chronic"],
		abbreviatedName: "The Ultimates",
		color: "#A90000",
	},
	"Virtus.pro": {
		players: ["Catalysm", "Sosa", "Sphinx"],
		abbreviatedName: "Virtus.pro",
		color: "#FE4E00",
	},
	"FUT Esports": {
		players: ["VKSailen", "Leoro", "TORRES8232"],
		abbreviatedName: "FUT Esports",
		color: "#ED1438",
	},
};

export const major2Teams: TeamWithPlayerInfo[] = getTranslated([
	"Karmine Corp",
	"NRG",
	"FURIA",
	"Team Falcons",
	"Dignitas",
	"Spacestation Gaming",
	"Team Vitality",
	"Gentle Mates Alpine",
	"Twisted Minds",
	"Gen.G Mobil1 Racing",
	"Wildcard",
	"Team Secret",
	"Virtus.pro",
	"The Ultimates",
	"TSM",
	"FUT Esports",
]).map((team) => {
	const data = major2TeamData[team.name];
	return {
		...team,
		type: "additional-info",
		players: data?.players ?? [],
		abbreviatedName: data?.abbreviatedName ?? "",
		color: data?.color ?? "#000000",
	};
});
