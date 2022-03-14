$(document).ready(function () {
    console.log("ready");
    /*  - Name/Nickname ☑️
        - Job/Title ☑️
        - Picture ☑️
        - About section
        - Related Organization(street, cops, etc)
        - Spoiler info
            - Alive?
            - Arrested?
            - Moved Away?
            - Season Relevance
    */

    function Character(job, name, picture) {
        this.job = job
        this.name = name
        this.picture = picture
    };

    let initListOfCharacters = () => {
        // TODO: use scraped data to make character objects and add to array
        let CDaniels = new Character(
            "Lieutenant",
            "Cedric Daniels",
            "./images/Cedric_Daniels.jpeg"
        );
        let OmarLittle = new Character(
            "Stick-up man",
            "Omar Little",
            "./images/Omar_Little.png"
        );

        let AvonBarksdale = new Character(
            "Drug kingpin",
            "Avon Barksdale",
            "./images/Avon_Barksdale.jpeg"
        );

        let DAngeloBarksdale = new Character(
            "Crew Chief",
            "D'Angelo Barksdale",
            "./images/D'Angelo_Barksdale.jpeg"
        );

        let characters = [];
        characters.push(CDaniels, OmarLittle, AvonBarksdale, DAngeloBarksdale);

        let columnCounter = 1;

        characters.forEach((character) => {

            let cardContainer = document.createElement('div');
            cardContainer.className = 'card';

                let cardImage = document.createElement('img');
                cardImage.className = "card-img-top";
                cardImage.setAttribute('src', character.picture);

                let cardBody = document.createElement('div');
                cardBody.className = "card-body";

                    let title = document.createElement('h5');
                    title.className = "card-title";
                    title.innerText = character.name;

                    let job = document.createElement('p');
                    job.className = 'card-text';
                    job.innerText = character.job;
                    
                cardBody.appendChild(title);
                cardBody.appendChild(job);

            cardContainer.appendChild(cardImage);
            cardContainer.appendChild(cardBody);

            document.getElementById(`col${columnCounter}`).appendChild(cardContainer);

            if (columnCounter % 3 === 0) {
                columnCounter = 0
            };
            columnCounter++;
        });
    };
    initListOfCharacters();
});
