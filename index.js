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

    let initListOfCharacters = () => {

        // TODO: use scraped data to make character objects and add to array
        function Character(job, name, picture) {
            this.job = job
            this.name = name
            this.picture = picture
        };

        let CDaniels = new Character(
            "Lieutenant",
            "Cedric Daniels",
            "./images/CDaniels.jpeg"
        );

        let characters = [];
        characters.push(CDaniels);

        characters.forEach((character) => {

            let cardContainer = document.createElement('div');
            cardContainer.className = 'card';

                let cardImage = document.createElement('img');
                cardImage.className = "card-img-top";
                cardImage.setAttribute('src', character.picture)

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

            document.getElementById("test").replaceWith(cardContainer);
        });
    };
    initListOfCharacters();
});
