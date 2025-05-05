// const na3: string[] = [
// 	"nrg",
// 	"complexity",
// 	"evo",
// 	"shopify",
// 	"ssg",
// 	"omlette",
// 	"lamp",
// 	"str",
// 	"pirates",
// 	"kcp",
// 	"rev",
// 	"wtp",
// 	"stepbros",
// 	"glam",
// 	"zoo",
// 	"mex",
// ];

// const na3b: string[] = [
// 	"tu",
// 	"9l",
// 	"dg",
// 	"net",
// 	"geng",
// 	"wsup",
// 	"tall",
// 	"tech",
// 	"gas",
// 	"wrst",
// 	"lot8",
// 	"100x",
// 	"arsy",
// 	"an",
// 	"pine",
// 	"nor",
// ];

// const naTest: string[] = [
// 	"g2",
// 	"geng",
// 	"og",
// 	"ssg",
// 	"luminosity",
// 	"m80",
// 	"cloud9",
// 	"shopify",
// 	"snowmen",
// 	"dignitas",
// 	"moist",
// 	"nrg",
// 	"spate",
// 	"zero2one",
// 	"gbuffo",
// 	"incorrect",
// ];

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

const eu4 = [
	["Ninjas", "nip"],
	["Dignitas", "dignitas"],
	["Vitality", "vitality"],
	["Synergy", "synergy"],
	["F4WD", "f4wd"],
	["JJROX", "jjrox"],
	["Smokey Bacon", "smokey_bacon"],
	["Geekay", "geekay_esports"],
	["Karmine Corp", "karmine_corp"],
	["Team BSK", "team_bsk"],
	["Atom Unity", "atom_unity"],
	["Gentlemates", "mates"],
	["Dopamine", "dopamine"],
	["Team BDS", "bds"],
	["100%", "100"],
	["Tokyo Tigers", "tokyo_tigers"]
];

const na4gslA: Team[] = [
	{ name: "geng", path: "geng" },
	{ name: "The Ultimates", path: "the_ultimates" },
	{ name: "Spacestation Gaming", path: "ssg" },
	{ name: "Shopify Rebellion", path: "shopify" },
	{ name: "Strictly Business", path: "default_dark" },
	{ name: "Team Evo", path: "evo" },
	{ name: "simtawk+1", path: "default_dark" },
	{ name: "Power Rangers", path: "default_dark" },
];

const na4gslB: Team[] = [
	{ name: "NRG", path: "nrg" },
	{ name: "Complexity", path: "complexity" },
	{ name: "Pirates", path: "poab" },
	{ name: "The Boys", path: "default_dark" },
	{ name: "nah", path: "nah" },
	{ name: "9Lives", path: "9lives" },
	{ name: "Deleted Gaming", path: "deleted_xd" },
	{ name: "Wassup", path: "default_dark" },
];

export const na4combined = [...na4gslA, ...na4gslB];

const eu4gslA: Team[] = [
	{ name: "Ninjas", path: "nip" },
	{ name: "Vitality", path: "vitality" },
	{ name: "F4WD", path: "f4wd" },
	{ name: "Smokey Bacon", path: "smokey_bacon" },
	{ name: "Karmine Corp", path: "karmine_corp" },
	{ name: "Atom Unity", path: "atom_unity" },
	{ name: "Dopamine", path: "default_dark" },
	{ name: "100%", path: "100" },
];

const eu4gslB: Team[] = [
	{ name: "Dignitas", path: "dignitas" },
	{ name: "Synergy", path: "synergy" },
	{ name: "JJROX", path: "jjrox" },
	{ name: "Geekay", path: "geekay_esports" },
	{ name: "Team BSK", path: "bsk" },
	{ name: "Gentlemates", path: "mates" },
	{ name: "Team BDS", path: "bds" },
	{ name: "Tokyo Tigers", path: "tokyo_tigers" },
];

const eu4test1: Team[] = [
	{ name: "Ninjas", path: "nip" },
	{ name: "Synergy", path: "synergy" },
	{ name: "F4WD", path: "f4wd" },
	{ name: "Geekay", path: "geekay_esports" },
	{ name: "Karmine Corp", path: "karmine_corp" },
	{ name: "Gentlemates", path: "mates" },
	{ name: "Dopamine", path: "default_dark" },
	{ name: "Tokyo Tigers", path: "tokyo_tigers" },

]

const eu4test2: Team[] = [
	{ name: "Dignitas", path: "dignitas" },
	{ name: "Vitality", path: "vitality" },
	{ name: "JJROX", path: "jjrox" },
	{ name: "Smokey Bacon", path: "smokey_bacon" },
	{ name: "Team BSK", path: "bsk" },
	{ name: "Atom Unity", path: "atom_unity" },
	{ name: "Team BDS", path: "bds" },
	{ name: "100%", path: "100" },
]

const res2: Team[] = []
const res1 = eu4test1.map((team, index) => {
	if (index % 2 === 0) {
		res2.push(eu4test2[index])
		return team
	} else {
		res2.push(team)
		return eu4test2[index]
	}
})
console.log("res1")
console.log(res1)
console.log("res2")
console.log(res2)


export const eu4combined = [...eu4gslA, ...eu4gslB];

const sam4gslA: Team[] = [
	{ name: "Godfidence", path: "godfidence" },
	{ name: "Team Secret", path: "team_secret" },
	{ name: "Latino Heat", path: "latino_heat" },
	{ name: "The Jungle", path: "default_dark" },
	{ name: "Moonrise", path: "default_dark" },
	{ name: "Genesis", path: "genesis" },
	{ name: "Brave Soldiers", path: "brave_soldiers" },
	{ name: "Cappuccino's", path: "default_dark" },
]

const sam4gslB: Team[] = [
	{ name: "Corinthians", path: "corinthians"},
	{ name: "Furia", path: "furia"},
	{ name: "Amethyst", path: "default_dark"},
	{ name: "Overlooked", path: "overlooked"},
	{ name: "FOFOS", path: "default_dark"},
	{ name: "Team Reds", path: "reds"},
	{ name: "Gratia", path: "default_dark"},
	{ name: "Papo De Visao", path: "papo"},
]

export const sam4Combined  = [...sam4gslA, ...sam4gslB];

const na4 = [
	"geng",
	"complexity",
	"nrg",
	"the_ultimates",
	"ssg",
	"the_boys",
	"poab",
	"shopify",
	"strictly",
	"9lives",
	"team evo",
	"nah",
	"wassup",
	"power rangers",
	"simtawk",
	"deleted",
];

export const paths = major1;
