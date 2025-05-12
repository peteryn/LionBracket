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

export type Team = {
	name: string,
	path: string,
}

function TeamConstructor(name: string, path: string): Team {
	return { name: name, path: path };
}

const liquipediaTeamLookup: Map<string, Team> = new Map();
// EU
liquipediaTeamLookup.set("Ninjas in Pyjamas", TeamConstructor("Ninjas in Pyjamas", "nip"));
liquipediaTeamLookup.set("Dignitas", TeamConstructor("Dignitas", "dignitas_2025"));
liquipediaTeamLookup.set("Team Vitality", TeamConstructor("Team Vitality", "vitality"));
liquipediaTeamLookup.set("Synergy", TeamConstructor("Synergy", "synergy"));
liquipediaTeamLookup.set("F4WD", TeamConstructor("F4WD", "f4wd"));
liquipediaTeamLookup.set("JJROX", TeamConstructor("JJROX", "jjrox"));
liquipediaTeamLookup.set("Smokey Bacon Association", TeamConstructor("Smokey Bacon", "smokey_bacon"));
liquipediaTeamLookup.set("Geekay Esports", TeamConstructor("Geekay Esports", "geekay_esports"));
liquipediaTeamLookup.set("Karmine Corp", TeamConstructor("Karmine Corp", "karmine_corp"));
liquipediaTeamLookup.set("Team BSK", TeamConstructor("Team BSK", "bsk"));
liquipediaTeamLookup.set("Atom Unity", TeamConstructor("Atom Unity", "atom_unity"));
liquipediaTeamLookup.set("Gentle Mates Alpine", TeamConstructor("Gentle Mates Alpine", "mates"));
liquipediaTeamLookup.set("Dopamine", TeamConstructor("Dopamine", "default_dark"));
liquipediaTeamLookup.set("Team BDS", TeamConstructor("Team BDS", "bds"));
liquipediaTeamLookup.set("100%", TeamConstructor("100%", "100"));
liquipediaTeamLookup.set("Tokyo Tigers", TeamConstructor("Tokyo Tigers", "tokyo_tigers"));
liquipediaTeamLookup.set("CALIENTE", TeamConstructor("CALIENTE", "caliente"));
liquipediaTeamLookup.set("$ATM", TeamConstructor("$ATM", "default_dark"));
liquipediaTeamLookup.set("Chippy Chips", TeamConstructor("Chippy Chips", "default_dark"));
liquipediaTeamLookup.set("Bobrito Bandito", TeamConstructor("Bobrito Bandito", "default_dark"));


// NA
liquipediaTeamLookup.set("Gen.G Mobil1 Racing", TeamConstructor("Gen.G Mobil1 Racing", "geng"));
liquipediaTeamLookup.set("Complexity Gaming", TeamConstructor("Complexity Gaming", "complexity"));
liquipediaTeamLookup.set("The Ultimates", TeamConstructor("The Ultimates", "the_ultimates"));
liquipediaTeamLookup.set("NRG", TeamConstructor("NRG", "nrg"));
liquipediaTeamLookup.set("Spacestation Gaming", TeamConstructor("Spacestation Gaming", "ssg"));
liquipediaTeamLookup.set("The Boys", TeamConstructor("The Boys", "default_dark"));
liquipediaTeamLookup.set("Shopify Rebellion", TeamConstructor("Shopify Rebellion", "shopify"));
liquipediaTeamLookup.set("Pirates on a Boat", TeamConstructor("Pirates on a Boat", "poab"));
liquipediaTeamLookup.set("Strictly Business", TeamConstructor("Strictly Business", "default_dark"));
liquipediaTeamLookup.set("9Lives", TeamConstructor("9Lives", "9lives"));
liquipediaTeamLookup.set("Team Evo", TeamConstructor("Team Evo", "evo"));
liquipediaTeamLookup.set("nah", TeamConstructor("nah", "nah"));
liquipediaTeamLookup.set("simtawk+1", TeamConstructor("simtawk+1", "default_dark"));
liquipediaTeamLookup.set("WASSUP", TeamConstructor("WASSUP", "default_dark"));
liquipediaTeamLookup.set("Power Rangers", TeamConstructor("Power Rangers", "default_dark"));
liquipediaTeamLookup.set("Deleted Gaming", TeamConstructor("Deleted Gaming", "deleted_xd"));
liquipediaTeamLookup.set("Schnitzelhaus", TeamConstructor("Schnitzelhaus", "default_dark"));
liquipediaTeamLookup.set("S.O.S.", TeamConstructor("S.O.S.", "sos"));
liquipediaTeamLookup.set("Lil Step Bros", TeamConstructor("Lil Step Bros", "step_bros"));
liquipediaTeamLookup.set("Bubble Sort", TeamConstructor("Bubble Sort", "default_dark"));

// SAM
liquipediaTeamLookup.set("Godfidence", TeamConstructor("Godfidence", "godfidence"));
liquipediaTeamLookup.set("Corinthians Esports", TeamConstructor("Corinthians Esports", "corinthians"));
liquipediaTeamLookup.set("Team Secret", TeamConstructor("Team Secret", "team_secret"));
liquipediaTeamLookup.set("FURIA", TeamConstructor("FURIA", "furia"));
liquipediaTeamLookup.set("Latino Heat", TeamConstructor("Latino Heat", "latino_heat"));
liquipediaTeamLookup.set("Amethyst", TeamConstructor("Amethyst", "default_dark"));
liquipediaTeamLookup.set("The Jungle", TeamConstructor("The Jungle", "default_dark"));
liquipediaTeamLookup.set("Overlooked", TeamConstructor("Overlooked", "overlooked"));
liquipediaTeamLookup.set("Moonrise", TeamConstructor("Moonrise", "default_dark"));
liquipediaTeamLookup.set("FOFOS", TeamConstructor("FOFOS", "default_dark"));
liquipediaTeamLookup.set("Genesis", TeamConstructor("Genesis", "genesis"));
liquipediaTeamLookup.set("Team Reds", TeamConstructor("Team Reds", "reds"));
liquipediaTeamLookup.set("Team Brave Soldiers Esports", TeamConstructor("Brave Soldiers", "brave_soldiers"));
liquipediaTeamLookup.set("Gratia", TeamConstructor("Gratia", "default_dark"));
liquipediaTeamLookup.set("Manchester City", TeamConstructor("Cappuccino's", "default_dark"));
liquipediaTeamLookup.set("Papo de Visão", TeamConstructor("Papo de Visão", "papo"));

// MENA
liquipediaTeamLookup.set("Team Falcons", TeamConstructor("Team Falcons", "falcons"));
liquipediaTeamLookup.set("Al Qadsiah", TeamConstructor("Al Qadsiah", "al_qadsiah"));
liquipediaTeamLookup.set("RBN", TeamConstructor("RBN", "default_dark"));
liquipediaTeamLookup.set("000", TeamConstructor("000", "default_dark"));
liquipediaTeamLookup.set("VVV", TeamConstructor("VVV", "vvv"));
liquipediaTeamLookup.set("Infamous", TeamConstructor("Infamous", "infamous"));
liquipediaTeamLookup.set("INVADERS BLUES", TeamConstructor("INVADERS BLUES", "invaders_blues"));
liquipediaTeamLookup.set("The Vicious", TeamConstructor("The Vicious", "the_vicious"));
liquipediaTeamLookup.set("Twisted Minds", TeamConstructor("Twisted Minds", "twisted_minds"));
liquipediaTeamLookup.set("sleeping", TeamConstructor("sleeping", "sleeping"));
liquipediaTeamLookup.set("Team Vision", TeamConstructor("Team Vision", "team_vision"));
liquipediaTeamLookup.set("F16 Esports", TeamConstructor("F16 Esports", "f16_esports"));
liquipediaTeamLookup.set("zmr", TeamConstructor("zmr", "default_dark"));
liquipediaTeamLookup.set("House Targaryen", TeamConstructor("House Targaryen", "default_dark"));
liquipediaTeamLookup.set("Hkm", TeamConstructor("Hkm", "default_dark"));
liquipediaTeamLookup.set("ROC Esports", TeamConstructor("ROC Esports", "roc_esports"));
liquipediaTeamLookup.set("777", TeamConstructor("777", "777"));
liquipediaTeamLookup.set("Off", TeamConstructor("OFF", "default_dark"));
liquipediaTeamLookup.set("Be Right Back", TeamConstructor("Be Right Back", "default_dark"));
liquipediaTeamLookup.set("MDW", TeamConstructor("MDW", "default_dark"));
liquipediaTeamLookup.set("qwperotiyfkgmkzldgbsdm", TeamConstructor("qwperotiyfkgmkzld...", "default_dark"));
liquipediaTeamLookup.set("EKW", TeamConstructor("EKW", "default_dark"));

// OCE
liquipediaTeamLookup.set("PWR", TeamConstructor("PWR", "pwr"));
liquipediaTeamLookup.set("TSM", TeamConstructor("TSM", "tsm"));
liquipediaTeamLookup.set("Wildcard", TeamConstructor("Wildcard", "wildcard"));
liquipediaTeamLookup.set("HSP", TeamConstructor("HSP", "default_dark"));
liquipediaTeamLookup.set("Huh?", TeamConstructor("Huh?", "default_dark"));
liquipediaTeamLookup.set("jim", TeamConstructor("jim", "default_dark"));
liquipediaTeamLookup.set("big boost", TeamConstructor("big boost", "default_dark"));
liquipediaTeamLookup.set("Nookles Pookles", TeamConstructor("Nookles Pookles", "default_dark"));
liquipediaTeamLookup.set("Helfie Chiefs", TeamConstructor("Chiefs", "helfie_chiefs"));
liquipediaTeamLookup.set("I'm fine in the west", TeamConstructor("I'm fine in the west", "default_dark"));
liquipediaTeamLookup.set("Prime Pettys Pups", TeamConstructor("Prime Pettys Pups", "default_dark"));
liquipediaTeamLookup.set("Tsurani", TeamConstructor("Tsurani", "default_dark"));
liquipediaTeamLookup.set("R.T.T.", TeamConstructor("R.T.T.", "default_dark"));
liquipediaTeamLookup.set("SKRIMZWORLD", TeamConstructor("SKRIMZWORLD", "skrimzworld"));
liquipediaTeamLookup.set("Fishing For Wins", TeamConstructor("Fishing For Wins", "default_dark"));
liquipediaTeamLookup.set("Wolves Gaming", TeamConstructor("Wolves Gaming", "wolves_gaming"));
liquipediaTeamLookup.set("Three Chiches", TeamConstructor("Three Chiches", "default_dark"));
liquipediaTeamLookup.set("fiburgerbeast", TeamConstructor("fiburgerbeast", "default_dark"));
liquipediaTeamLookup.set("run it back", TeamConstructor("run it back", "default_dark"));
liquipediaTeamLookup.set("retired", TeamConstructor("retired", "default_dark"));
liquipediaTeamLookup.set("Chins up", TeamConstructor("Chins up", "default_dark"));
liquipediaTeamLookup.set("Freshies from down under", TeamConstructor("Freshies from down...", "default_dark"));

// APAC
liquipediaTeamLookup.set("Luminosity Gaming", TeamConstructor("Luminosity Gaming", "luminosity"));
liquipediaTeamLookup.set("God Speed", TeamConstructor("God Speed", "god_speed"));
liquipediaTeamLookup.set("KOI", TeamConstructor("KOI", "koi"));
liquipediaTeamLookup.set("KINOTROPE gaming", TeamConstructor("KINOTROPE gaming", "kinotrope"));
liquipediaTeamLookup.set("Dreamstation", TeamConstructor("Dreamstation", "dreamstation"));
liquipediaTeamLookup.set("Jungle Juicers", TeamConstructor("Jungle Juicers", "jungle_juicers"));
liquipediaTeamLookup.set("TTG", TeamConstructor("TTG", "default_dark"));
liquipediaTeamLookup.set("NJZ", TeamConstructor("NJZ", "default_dark"));
liquipediaTeamLookup.set("ReaL Adrenaline", TeamConstructor("ReaL Adrenaline", "default_dark"));
liquipediaTeamLookup.set("SENZA Esports", TeamConstructor("SENZA Esports", "senza_esports"));
liquipediaTeamLookup.set("Pxress’s Habibtis", TeamConstructor("Pxress’s Habibtis", "pxresss_habibtis"));
liquipediaTeamLookup.set("Zen Esports", TeamConstructor("Zen Esports", "zen_esports"));
liquipediaTeamLookup.set("Praise", TeamConstructor("Praise", "praise"));
liquipediaTeamLookup.set("sial", TeamConstructor("sial", "default_dark"));
liquipediaTeamLookup.set("ROUNDS", TeamConstructor("ROUNDS", "rounds"));
liquipediaTeamLookup.set("Team Phoenix", TeamConstructor("Team Phoenix", "team_phoenix"));

// SSA
liquipediaTeamLookup.set("FUT Esports", TeamConstructor("FUT Esports", "fut_esports"));
liquipediaTeamLookup.set("Old Dog New Tricks", TeamConstructor("Old Dog New Tricks", "default_dark"));
liquipediaTeamLookup.set("Akimbo Esports", TeamConstructor("Akimbo Esports", "akimbo_esports"));
liquipediaTeamLookup.set("le bosh", TeamConstructor("le bosh", "le_bosh"));
liquipediaTeamLookup.set("Cristobal Colon", TeamConstructor("Cristobal Colon", "cristobal_colon"));
liquipediaTeamLookup.set("Limitless", TeamConstructor("Limitless", "limitless"));
liquipediaTeamLookup.set("77Blocks", TeamConstructor("77Blocks", "77blocks"));
liquipediaTeamLookup.set("Hey (with rizz)", TeamConstructor("Hey (with rizz)", "hey_with_rizz"));
liquipediaTeamLookup.set("We love farming", TeamConstructor("We love farming", "default_dark"));
liquipediaTeamLookup.set("Omen Esports", TeamConstructor("Omen Esports", "omen_esports"));
liquipediaTeamLookup.set("CosmiCo Esports", TeamConstructor("CosmiCo Esports", "cosmico_esports"));
liquipediaTeamLookup.set("Relentless", TeamConstructor("Relentless", "relentless"));
liquipediaTeamLookup.set("Rapaziada 1906", TeamConstructor("Rapaziada 1906", "rapaziada_1906"));
liquipediaTeamLookup.set("Crazy Time", TeamConstructor("Crazy Time", "crazy_time"));
liquipediaTeamLookup.set("Goober Gang", TeamConstructor("Goober Gang", "default_dark"));
liquipediaTeamLookup.set("123", TeamConstructor("123", "default_dark"));
liquipediaTeamLookup.set("Str1ve eSports", TeamConstructor("Str1ve eSports", "str1ve_esports"));
liquipediaTeamLookup.set("We'll Have a Look", TeamConstructor("We'll Have a Look", "default_dark"));
liquipediaTeamLookup.set("GeneSix", TeamConstructor("GeneSix", "genesix"));
liquipediaTeamLookup.set("Pomino's Dizza", TeamConstructor("Pomino's Dizza", "default_dark"));
liquipediaTeamLookup.set("Poney No Jutsu", TeamConstructor("Poney No Jutsu", "poney_no_jutsu"));
liquipediaTeamLookup.set("Triple B", TeamConstructor("Triple B", "default_dark"));
liquipediaTeamLookup.set("Antisociales", TeamConstructor("Antisociales", "default_dark"));


function getCombined(teams1: string[], teams2: string[]) {
	const res1 = teams1.map((team) => liquipediaTeamLookup.get(team) as Team);
	const res2 = teams2.map((team) => liquipediaTeamLookup.get(team) as Team);
	return [...res1, ...res2];
}

function getTranslated(teams: string[]) {
	return teams.map((team) => liquipediaTeamLookup.get(team) as Team);
}

export const major1Teams: Team[] = [
	{ name: "karmine_corp", path: "karmine_corp" },
	{ name: "nrg", path: "nrg" },
	{ name: "falcons", path: "falcons" },
	{ name: "vitality", path: "vitality" },
	{ name: "furia", path: "furia" },
	{ name: "dignitas", path: "dignitas" },
	{ name: "the_ultimates", path: "the_ultimates" },
	{ name: "geekay_esports", path: "geekay_esports" },
	{ name: "wildcard", path: "wildcard" },
	{ name: "geng", path: "geng" },
	{ name: "team_secret", path: "team_secret" },
	{ name: "twisted_minds", path: "twisted_minds" },
	{ name: "helfie_chiefs", path: "helfie_chiefs" },
	{ name: "complexity", path: "complexity" },
	{ name: "luminosity", path: "luminosity" },
	{ name: "fut_esports", path: "fut_esports" },
];

export const na4Combined = getTranslated([
	"Gen.G Mobil1 Racing", "Complexity Gaming",
	"The Ultimates", "NRG",
	"Spacestation Gaming", "The Boys",
	"Shopify Rebellion", "Pirates on a Boat",
	"Strictly Business", "9Lives",
	"Team Evo", "nah",
	"simtawk+1", "WASSUP",
	"Power Rangers", "Deleted Gaming"
]);

export const na5Combined = getTranslated([
	"Schnitzelhaus", "Spacestation Gaming",
	"Gen.G Mobil1 Racing", "The Ultimates",
	"NRG", "S.O.S.",
	"Shopify Rebellion", "Complexity Gaming",
	"The Boys", "Strictly Business",
	"simtawk+1", "Team Evo",
	"Deleted Gaming", "Lil Step Bros",
	"Pirates on a Boat", "Bubble Sort"
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
	"Tokyo Tigers"
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
	"Bobrito Bandito"
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
	"Papo de Visão"
]);

export const mena4Combined = getTranslated([
	"Team Falcons", "Twisted Minds",
	"Al Qadsiah", "sleeping",
	"RBN", "Team Vision",
	"000", "F16 Esports",
	"VVV", "zmr",
	"Infamous", "House Targaryen",
	"INVADERS BLUES", "Hkm",
	"The Vicious", "ROC Esports"
]);

export const mena5Combined = getTranslated([
	"Team Falcons",
	"ROC Esports",
	"Twisted Minds",
	"Team Vision",
	"Off",
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
	"EKW"
]);

export const oce4Combined = getTranslated([
	"PWR", "Helfie Chiefs",
	"TSM", "I'm fine in the west",
	"Wildcard", "Prime Pettys Pups",
	"HSP", "Tsurani",
	"Huh?", "R.T.T.",
	"jim", "SKRIMZWORLD",
	"big boost", "Fishing For Wins",
	"Nookles Pookles", "Wolves Gaming"
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
	"Freshies from down under"
]);

export const apac4Combined = getTranslated([
	"Luminosity Gaming", "God Speed",
	"KOI", "KINOTROPE gaming",
	"Dreamstation", "Jungle Juicers",
	"TTG", "NJZ",
	"ReaL Adrenaline", "SENZA Esports",
	"Pxress’s Habibtis", "Zen Esports",
	"Praise", "sial",
	"ROUNDS", "Team Phoenix"
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
	"123"
]);

export const ssa5Combined = getTranslated([
	"FUT Esports", "Hey (with rizz)",
	"Str1ve eSports", "Limitless",
	"We'll Have a Look", "CosmiCo Esports",
	"le bosh", "77Blocks",
	"GeneSix", "Relentless",
	"Pomino's Dizza", "We love farming",
	"Cristobal Colon", "Poney No Jutsu",
	"Triple B", "Antisociales"
]);

export const paths = major1;
