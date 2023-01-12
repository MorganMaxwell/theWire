jQuery(document).ready(function () {
    /*  - Name/Nickname ☑️
        - org/Title ☑️
        - Picture ☑️
        - About section
        - Related org(street, cops, etc)
        - Spoiler info
            - Alive?
            - Arrested?
            - Moved Away?
            - Season Relevance

        TODO: Media in CSS should change # of columns based on resolution and rotation.
    */
   let test = [
    {
        name:"RebeccaCorbett",
        org:"journalist",
        img:"https://i.pinimg.com/originals/76/3e/ee/763eeeeb420c9af5213b4f632748bbf9.jpg"
    },
    {
        name:"AugustusHaynes",
        org:"journalist",
        img:"https://static1.srcdn.com/wordpress/wp-content/uploads/2020/06/Augustus-Haynes.jpg"
    },
    {
        name:"JamesWhiting",
        org:"journalist",
        img:"https://vignette3.wikia.nocookie.net/thewire/images/1/16/Whiting.jpg/revision/latest?cb=20080114222034"
    },
    {
        name:"ThomasKlebanow",
        org:"journalist",
        img:"https://static.tvmaze.com/uploads/images/medium_portrait/94/237240.jpg"
    },
    {
        name:"TimPhelps",
        org:"journalist",
        img:"https://static.hbo.com/content/dam/hbodata/series/the-wire/character/the-paper/tim-phelps-1920.jpg?w=1200"
    },
    {
        name: "StevenLuxenberg",
        org:"journalist",
        img:"https://i.pinimg.com/originals/76/3e/ee/763eeeeb420c9af5213b4f632748bbf9.jpg"
    },
    {
        name:"JaySpry",
        org:"journalist",
        img:"https://i.pinimg.com/originals/c4/bb/6c/c4bb6c86053e92568551bea4e4ff4643.jpg"
    },
    {
        name:"AlmaGutierrez",
        org:"journalist",
        img:"https://i.pinimg.com/originals/31/05/1e/31051e1b5f8f3589ea748ae6d5a6f1d2.jpg"
    },
    {
        name:"ScottTempleton",
        org:"journalist",
        img:"https://cdn.gelestatic.it/kataweb/tvzap/2015/09/Scott-Templeton-The-Wire.jpg"
    },
    {
        name:"JeffPrice",
        org:"journalist",
        img:"https://i.pinimg.com/originals/08/95/15/08951579300bf1b499b352b5c37b0b00.jpg"
    },
    {
        name:"BillZorzi",
        org:"journalist",
        img:"https://vignette.wikia.nocookie.net/thewire/images/3/39/Zorzi.jpg/revision/latest?cb=20080114223303"
    },
    {
        name:"MikeFletcher",
        org:"journalist",
        img:"https://i.pinimg.com/originals/82/77/6b/82776bff8bc63a78098ec21cba993da7.jpg"
    },
    {
        name:"RogerTwigg",
        org:"journalist",
        img:"https://i.pinimg.com/originals/9c/f6/bc/9cf6bc58c36000aee5d6ac014b36a674.jpg"
    }
   ]
    let journalists = [
        "RebeccaCorbett",
        "AugustusHaynes",
        "JamesWhiting",
        "ThomasKlebanow",
        "TimPhelps",
        "StevenLuxenberg",
        "JaySpry",
        "AlmaGutierrez",
        "ScottTempleton",
        "JeffPrice",
        "BillZorzi",
        "MikeFletcher",
        "RogerTwigg"
    ]

    let educators = [
        "HowardColvinBunny",
        "MarciaDonnelly",
        "MissDuquette",
        "DavidParenti",
        "RolandPryzblylewskiPrez",
        "GraceSampson",
        "ClaudellWithers",
        "NamondBrice",
        "AaronManigaultBug",
        "ZenobiaDawson",
        "TyrellDonut",
        "CrystalJudkins",
        "MichaelLee",
        "AlbertStokes",
        "DarnellTyson",
        "RandyWagstaff",
        "DuquanWeemsDukie",
        "KarimWilliams"
    ]

    let dockWorkers = [
        "FrankSobotka",
        "JoanSobotka",
        "LouisSobotka",
        "NickSobotka",
        "ZiggySobotka",
        "NatCoxson",
        "VernonMotleyOtt",
        "LittleBigRoy",
        "ThomasPakusaHorseface",
        "JohnnySpamantoFifty",
        "BigRoy",
        "Chess",
        "LaLa",
        "Maui",
        "Aimee",
        "Delores",
        "BruceDiBiago",
        "TheGreek"
    ]

    let omars = [
        "OmarLittle",
        "ButchieMostlyBlind",
        "BrandonWright",
        "Dante",
        "Renaldo",
        "JohnBailey",
        "KimmyMitchell",
        "ToshaMitchell",
        "BigGuy",
        "Donnie"
    ]

    let stansfields = [
        "MarloStanfield",
        "ChristPartlow",
        "MonkMetcalf",
        "SavinoBratton",
        "MelvinWagstaffCheese",
        "FeliciaPearsonSnoop",
        "MichaelLee",
        "DariusHillO-Dog",
        "BodieBroadus",
        "PootCarr",
        "NamondBrice",
        "DuquanWeemsDukie",
        "Fruit",
        "Jamal",
        "Justin",
        "Boo",
        "Kenard",
        "LittleKevin",
        "Spider",
        "Vinson",
        "OldFaceAndre"
    ]

    let barksdales = [
        "AvonBarksdale",
        "RussellBell",
        "SeanMcGinty",
        "SlimCharles",
        "MarquisHiltonBird",
        "WintellRoyceLittleMan",
        "Perry",
        "SavinoBratton",
        "AntonArtisStinkum",
        "RolandBriceWee-Bey",
        "Country",
        "Rico",
        "Bernard",
        "Cute",
        "Devonne",
        "Gerard",
        "Sapper",
        "D’AngeloBarksdale",
        "RonnieMo",
        "BodieBroadus",
        "Poot",
        "Sterling",
        "Wallace",
        "Puddin",
        "KevinJohnston",
        "WendellBlockerOrlando",
        "ShardeneInnes",
        "MauriceLevy",
        "BriannaBarksdale",
        "De’LondaBrice",
    ]

    let politicians = [
        "ClayDavis",
        "DamienPrice",
        "OdellWatkins",
        "NereseCampbell",
        "TommyCarcetti",
        "MarlanDaniels",
        "JerileeBennett",
        "AnthonyGray",
        "MichaelSteintorf",
        "NormanWilson",
        "EunettaPerkins",
        "ColemanParker",
        "ClarenceRoyce",
        "TheresaD’Agostino",
        "AndyKrawczyk",
        "Jen Carcetti"
    ]

    let cops = [
        "WilliamRawls",
        "CedricDaniels",
        "StanislausValchek",
        "BobbyReed",
        "WarrenFrazier",
        "ErvinBurrell",
        "RaymondFoerster",
        "JimmyAsher",
        "LesterFreamon",
        "KennethDozerman",
        "JimmyMcNulty",
        "LeanderSydnor",
        "CharlesMarimow",
        "ThomasHauk",
        "EllisCarver",
        "PatrickMahon",
        "AugustusPolk",
        "MichaelSantangelo",
        "ShakimaGreggs",
        "RolandPryzbylewski",
        "CarolineMassey",
        "JayLandsman",
        "FrankBarlow",
        "Christeson",
        "MichaelCrutchfield",
        "VernonHolley",
        "WilliamMoreland",
        "EdNorris",
        "Winona",
        "RayCole",
        "DennisMello",
        "BrianBaker",
        "BobbyBrown",
        "AaronCastor",
        "EddieWalker",
        "AnthonyColicchio",
        "LloydGarrick",
        "Lambert",
        "HowardColvin",
        "WalterCantrell",
        "ClaudeDiggins",
        "RandallFrazier",
        "BeadieRussell",
        "MarvinTaylor",
        "Torret"
    ]

    let copRelatives = [
        "Cheryl",
        "ElenaMcNulty",
        "SeanMcNulty",
        "MichaelMcNulty",
        "GaryD’Addario",
        "LeonardHamm",
        "JayLandsman",
        "EdwardNorris",
        "JimmyRood",
        "DonaldWorden",
    ]

    let fbi = [
        "TerranceFitzhugh",
        "AmandaReese",
        "KristosKoutris"
    ]

    let courts = [
        "RupertBond",
        "NadivaBryant",
        "StevenDemper",
        "IleneNathan",
        "RhondaPearlman",
        "DanielPhelan",
        "GaryDiPasquale"
    ]

    let prison = [
        "DwightTilghman"
    ]

    let characters = [journalists, educators, dockWorkers, omars, stansfields, barksdales, politicians, cops, copRelatives, fbi, courts, prison]

    let initOrgOfCharacters = (characters) => {
        let CC = 0
        characters.forEach((character) => {
            let cardContainer = document.createElement('div');
            let cardBody = document.createElement('div');
            let title = document.createElement('h5');
            let org = document.createElement('p');
            // let pic = document.createElement('img');

            cardContainer.className = 'card'
            cardBody.className = "card-body";
            title.className = `character${CC}`;
            title.innerText = character;
            org.className = 'card-text';
            org.innerText = "job";
            // pic.className = `${character}`
            // pic.setAttribute('src', character.img)

            cardBody.appendChild(title)
            cardBody.appendChild(org)
            cardContainer.appendChild(cardBody)

            CC += 1
            jQuery(".container").append(cardContainer)
        });
    };
    characters.map(initOrgOfCharacters)

});

