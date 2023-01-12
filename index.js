jQuery(document).ready(function () {
    /*  - Name/Nickname ☑️
        - organization/Title ☑️
        - Picture ☑️
        - About section
        - Related Organization(street, cops, etc)
        - Spoiler info
            - Alive?
            - Arrested?
            - Moved Away?
            - Season Relevance

        TODO: Media in CSS should change # of columns based on resolution and rotation.
    */
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

    let initListOfCharacters = (characters) => {
        // let CDaniels = new Character(
        //     "Lieutenant",
        //     "Cedric Daniels",
        //     "./images/Cedric_Daniels.jpeg"
        // );
        let CC = 0
        characters.forEach((character) => {
            CC += 1
            let cardContainer = document.createElement('div');
            cardContainer.className = 'card'
                // let cardImage = document.createElement('img');
                // cardImage.className = "card-img-top";
                // cardImage.setAttribute('src', character.picture);
                let cardBody = document.createElement('div');
                cardBody.className = "card-body";

                    let title = document.createElement('h5');
                    let organization = document.createElement('p');

                    title.className = `character${CC}`;
                    organization.className = 'card-text';

                    title.innerText = character;
                    organization.innerText = "this p tag left intentionally blank";
                    
                cardBody.appendChild(title)
                cardBody.appendChild(organization)
            cardContainer.appendChild(cardBody)

            console.log(cardBody)
            jQuery(".container").append(cardContainer)
        });
    };
    initListOfCharacters(barksdales);
});

