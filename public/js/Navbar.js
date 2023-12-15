
$(document).ready(function () {
    var isHovered = false;

    $("#account-link").mouseover(function () {
        $("#account-dropdown").fadeIn(200);
        isHovered = true;
    });

    $("#account-dropdown").mouseover(function () {
        isHovered = true;
    });

    $("#account-link, #account-dropdown").mouseout(function () {
        isHovered = false;
        setTimeout(function () {
            if (!isHovered) {
                $("#account-dropdown").fadeOut(200);
            }
        }, 500);
    });
});
