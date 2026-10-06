$(document).ready(function(){
    $("button#continue-on").on('click', function() {
        let uname = $("#uname");
        let pword = $("#pword");
        let errormsgdiv = $(".errormsg");
        errormsgdiv.empty(); // clear out old error messages
        // clear out old highlighted boxes
        uname.removeClass("required");
        pword.removeClass("required");

        var uerrormsg = $(`<p class>Username is required to log in<p>`);
        var perrormsg = $(`<p>Password is required to log in<p>`);

        // username is required to login
        if (!uname.val()) {
            uname.addClass("required");
            errormsgdiv.append(uerrormsg);
        }

        if (!pword.val()) {
            // password is also required
            pword.addClass("required")
            errormsgdiv.append(perrormsg);
        }

        // sign in to the homepage
        if (uname.val() && pword.val()) window.location.href = "homepage.html";

    });
});
