$(document).ready(function () {
    console.log("testing");

/*
    - Name/Nickname
    - Job/Title
    - Picture
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
    }
    let CDaniels = new Character("Lieutenant", "Cedric Daniels", "./pictures/CDaniels.jpg");

    $("#button").click(function () {
        console.log(CDaniels.name)
    })
})