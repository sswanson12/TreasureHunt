$(setupPage);

function setupPage(){
    $("#tweedyBird").on( "click" , function (){ foundTweedyBird(); });
    $("#starfire").on("click", function (){ foundStarfire(); });
    $("#dexter").on("click", function (){ foundDexter(); });
    $("#peppermintButler").on("click", function (){ foundPeppermintButler(); });
}

function foundIt(name){
    $("#foundList").append(`<br>You found ${name}!`)
}

function foundTweedyBird(){
    console.log("click registered");
    foundIt("Tweedy Bird");
}

function foundStarfire(){
    foundIt("Starfire");
}

function foundDexter(){
    foundIt("Dexter");
}

function foundPeppermintButler(){
    foundIt("Peppermint Butler")
}
