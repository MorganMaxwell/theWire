window.onload = function () {

    function Character(job, name, picture) {
        this.job = job;
        this.name = name
        this.picture = picture;
    };
    let CDaniels = new Character("Lieutenant", "Cedric Daniels", "url");



    $("#button").click(function () {
        console.log("working button");
        let content = $("#")
        $("#daniels").html(function() {
            content += `${CDaniels.job} ${CDaniels.name}`
            return content
        });
    });
};