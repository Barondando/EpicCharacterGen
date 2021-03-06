
$(function() {

    // Populate using an object literal

    WTF.init({

        heading: [
            "How about a freaking",
            "Oh man, you should be a",
			"You know what would be cool? A freaking",
			"I've got it, a",
			"You should be a"
        ],
        response: [
            "Wait no, that sucks...",
            "Ehhh, maybe not...",
            "No, that sounds awful!",
			"Ew.",
			"Actually, Mercury's already done that."
        ],
        template: [
            "@adjective @race @job from @location who @backstory",
			"@adjective @job from @location who @backstory",
            "@race @job from @location sharing a body with a @adjective @race @job, and who also @backstory"
        ],
        adjective: [
            "huge",
			"really old",
			"young",
			"handsome",
			"ugly",
			"really attractive",
			"snobby",
			"infuriatingly proud",
			"spacebound",
			"clever",
			"obnoxious",
			"powerful",
			"nice",
			"diplomatic",
			"intimidating",
			"terrifying",
			"wise",
			"lost",
			"lonely",
			"furious",
			"massive",
			"gross",
			"confused",
			"forgetful",
			"heroic",
			"famous",
			"legendary",
			"flying",
			"exiled",
			"wandering",
			"nimble",
			"gentle",
			"clumsy",
			"off-putting",
			"dedicated",
			"dark",
			"romantic",
			"dismissive",
			"enduring",
			"twirly",
			"weak",
			"backstabbing",
			"suspicious",
			"talented",
			"angry",
			"vicious",
			"motherly",
			"fatherly",
			"guarded",
			"open",
			"happy",
			"carefree",
			"morose",
			"kingly",
			"regal",
			"beggarly",
			"armored",
			"overwrought",
			"finicky",
			"filthy",
			"violent",
			"peaceful",
			"calm",
			"oblivious",
			"overdramatic",
			"intense",
			"literal",
			"tricky",
			"creepy",
			"friendly",
			"informed",
			"masterful",
			"overweight",
			"swarthy",
			"strangely dressed",
			"clean shaven",
			"isolated",
			"strong-silent",
			"quiet",
			"loud",
			"eccentric",
			"crazy",
			"insane"
        ],
        race: [
            "human",
			"elf",
			"dwarf",
			"centaur",
			"mermaid",
			"cannus",
			"canine-humanoid",
			"avial",
			"avian-humanoid",
			"dragon",
			"dragonborn",
			"fae",
			"fairy",
			"felorian",
			"feline-humanoid",
			"sillux",
			"reptilian-humanoid",
			"ursag",
			"bear-humanoid",
		   "alien",
			"AI",
			"cyborg",
			"robot",
			"hologram",
			"rabbit-humanoid",
			"gryphon",
			"golem",
			"undead",
			"zombie",
			"ghost",
			"giant",
			"titan",
			"squid",
			"demigod",
			"skeleton",
			"demon",
			"hobbit",
			"halfling"
        ],
		job: [
            "wizard",
			"witch",
			"fighter",
			"knight",
			"guardian",
			"rogue",
			"cleric",
			"ranger",
			"king",
			"queen",
			"prince",
			"princess",
			"mage",
			"archmage",
			"cult-leader",
			"priest",
			"priestess",
			"sorcerer",
			"summoner",
			"shaman",
			"shapeshifter",
			"alchemist",
			"siren",
			"bard",
			"enchanter",
			"prophet",
			"seer",
			"necromancer",
			"monk",
			"warlock",
			"super-soldier",
			"warrior",
			"spy",
			"farmer",
			"revolutionary",
			"police officer",
			"soldier",
			"president",
			"warlord",
			"dictator",
			"military dictator",
			"guerilla",
			"freedom fighter",
			"folk hero",
			"celebrity",
			"former celebrity",
			"starliner captain",
			"ship captain",
			"pirate",
			"ninja",
			"shadow being",
			"government agent",
			"man in black",
			"woman in black",
			"vampire",
			"vampire slayer",
			"demon hunter",
			"assassin",
			"actor",
			"actress",
			"adventurer",
			"treasure hunter",
			"cowboy",
			"serial killer",
			"detective",
			"Red Knight",
			"Asgardian"
        ],
		location: [
            "Earth",
			"Mars",
			"an underground civilization",
			"the ocean",
			"underwater",
			"the nation of gradok",
			"the nation of Valtor",
			"the Dwarven city of Kragtarum",
			"the realm of Aluna",
			"the realm of Asezüldin",
			"the nation of Meron",
			"the island of Turv",
			"the year 5372",
			"Victorian London",
			"a space colony 5 light-years from Earth",
			"the Mountain of Death",
			"the Valley of the Lost",
			"Atlantis",
			"the future",
			"the past",
			"the near future",
			"an parallel universe",
			"a desert kingdom",
			"the Andromeda galaxy",
			"the Moon",
			"a floating city",
			"the Nation of the Many",
			"the Nation of the Pure",
			"the Kingdom of the Rock",
			"the Nation of the Sea",
			"the Nation of the Forest",
			"the Nation of the Sky",
			"the Nation of the Skull",
			"the land of the dead",
			"the realm of shadows",
			"the realm of light",
			"the realm of the gods",
			"the North",
			"the South",
			"the West",
			"the East",
			"the Middle Ages",
			"the early 1900s",
			"the 17th century",
			"the 56th century",
			"the hive",
			"the mirrorworld",
			"the Quelmar",
			"the land of madness",
			"the high seas",
			"the Great Mountains",
			"the shadow caves",
			"the night",
			"the Compound",
			"A small nation of peace",
			"a now ruined keep on a lonely hill",
			"here and there",
			"a dangerous cliffside town",
			"a hidden burrow beneath the roots of a great tree",
			"a village hidden in the clouds",
			"a temple guarding a mysterious crystal",
			"a town underneath a bridge",
			"a nation where no one has houses, only castles",
			"the desert past all borders",
			"the top of the highest mountain",
			"the only place untouched by frost in the known world",
			"a small, unremarkable village with no dark secret at all, definitely",
			"a village that no longer exists",
			"the College of Magic nearby",
			"a single house in the middle of the deep forest",
			"a quiet, comfy shire",
			"a town split in two by a great crevasse",
			"the town that a great dragon has decided to rule",
			"savage caves in a distant mountain",
			"a bustling city of myriad people",
			"a metropolis where anything can be bought-- for the right price",
			"a quaint university in an old town",
			"the village-basket of a massive hot air balloon",
			"a city deep beneath the ocean",
			"within a labyrinth no-one has been outside for generations",
			"an ancient island that's been teleported through time to the present",
			"a colony started by a space ship crash",
			"a town inside a planetoid, hurtling where it may",
			"the city that covers a planet",
			"a spire of silver which holds mysteries unknown to any but its builders",
			"a massive construct, hollow and densely populated",
			"a king's personal holdings",
			"a giant predator's hunting ground",
			"a noble society house",
			"a hastily-constructed frontier town"
        ],
		backstory: [
            "is secretly the Red Beret",
			"is in league with the Red Beret",
			"hates magic",
			"hates elves",
			"hates mortals",
			"loves everyone",
			"gets really excited about dragons",
			"is an orphan",
			"killed their family",
			"can't remember who they are",
			"escaped their master",
			"makes AIs",
			"has reformed from their old ways",
			"wants the king dead",
			"wants the president dead",
			"wants the queen dead",
			"wants to take over the world",
			"crash landed on earth",
			"knows the truth",
			"doesn't know the truth",
			"has a cybernetic limb",
			"fights for peace",
			"has a dark past",
			"has returned to seek vengeance",
			"faked their death",
			"made up their past",
			"is lying about their identity",
			"is undercover",
			"is in disguise",
			"is the \"Greatest Fighter in all the Land\"",
			"rides dragons",
			"is in love with an elf",
			"is in love with a human",
			"despises non-humans",
			"can control fire",
			"can control water",
			"can control earth",
			"can control air",
			"can manipulate fate",
			"was exiled from their home",
			"took up piracy",
			"retired a decade ago, but must return",
			"has been forgotten",
			"is believed to be dead",
			"will rise again",
			"must save their village",
			"must avenge the king",
			"is the only one who can seal the rift",
			"crawled through the rift",
			"hates men",
			"is the Chosen One's sidekick",
			"survived an assassination attempt",
			"has to kill the president",
			"has to kill the royal family",
			"just lost their throne",
			"must train the next hero",
			"is struggling to learn magic",
			"seeks life outside of the mines",
			"wants freedom from slavery",
			"is working to crush the rebellion",
			"will die before the month is out if they do nothing",
			"has seen the end of the world",
			"has seen God",
			"has seen the Devil",
			"made a deal with a demon",
			"found a dead angel",
			"found the last dragon egg",
			"found the lost sword",
			"found the lost cave"
        ]
    });

    // Populate using a JSON file
    // WTF.init( 'sample.json' );

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see https://support.google.com/drive/answer/37579?hl=en
    //WTF.init( '0Av-P5rkdtMoGdFMySDl0UTJJclpVWWtsdWp2U2J5T3c' );

});