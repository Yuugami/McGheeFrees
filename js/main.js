// Before Document is Ready

$("#gallery > .images:gt(0)").hide();

$("#summary").hide();

function goForwardImg() {
    $('#gallery > .images:first')
        .fadeOut(1200)
        .next()
        .fadeIn(1200)
        .end()
        .appendTo('#gallery');
}

function goBackwardImg() {
    $('#gallery > .images:first')
        .fadeOut(1200);

    $('#gallery > .images:last')
        .fadeIn(1200)
        .prependTo('#gallery');
}

// After Document is Ready

$(document).ready(function () {

    var autoOn = true,
        auto = setInterval(goForwardImg, 2100);

    //---------- Darkened Jumbotron ----------||
    $("#darken").on("mouseenter", function () {
        $(this).fadeOut();
    });
    $("#jumbotron").on("mouseleave", function () {
        $("#darken").fadeIn().css("display", "inline");
    });
    //---------- ------------------ ----------||

    $("#gallery").click(function () {
        if (autoOn) {
            clearInterval(auto);
            autoOn = false;
        } else {
            auto = setInterval(goForwardImg, 2100);
            autoOn = true;
        }
    });

    //---------- Button Logic ----------||
    $(".w3-button").click(function () {
        clearInterval(auto);
        autoOn = false;
    });

    $(".w3-display-left").hover(
        function () {
            $("span.w3-display-left").fadeIn();
        },
        function () {
            $("span.w3-display-left").fadeOut();
        }
    );



    $(".w3-display-right").hover(
        function () {
            $("span.w3-display-right").fadeIn();
        },
        function () {
            $("span.w3-display-right").fadeOut();
        }
    );

    $(".w3-display-right").click(goForwardImg);
    $(".w3-display-left").click(goBackwardImg);
    //---------- ------------ ----------||
    //---------- Iconic Button Logic ----------||
    $(".iconic").hover(
        function () {
            $(this).css("color", "blue");
        },
        function () {
            $(this).css("color", "");
        }
    );

    $(".iconic").click(function () {
        $(this)
            .css("display", "none")
            .next()
            .fadeIn(1000)
            .end()
            .appendTo("#icons-section");

        if ($("#gallery").css("display") != "none") {
//            alert("Hello");
            $("#gallery").css("display", "none");
            $("div.w3-button").css("display", "none");
            $("#summary").fadeIn();
        }
        else {
            $("#summary").css("display", "none");
            $("#gallery").fadeIn();
            $("div.w3-button").fadeIn();
        }
    });
    //---------- ------ ------ ----- ----------||
});
