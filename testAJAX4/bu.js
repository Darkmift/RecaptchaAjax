$(document).ready(function() {
    var contactForm = $("#contactForm");
    //We set our own custom submit function
    contactForm.on("submit", function(e) {
        //Prevent the default behavior of a form
        e.preventDefault();
        //Get the values from the form
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        //Our AJAX POST
        $.ajax({
                type: "POST",
                url: "mail.php",
                data: {
                    name: name,
                    email: email,
                    message: message,
                    //THIS WILL TELL THE FORM IF THE USER IS CAPTCHA VERIFIED.
                    captcha: grecaptcha.getResponse()
                },
                success: function(data) {
                    console.log(data);
                    if (data === 'FAILURE') {
                        console.log('Captcha validation failed');
                        return false;
                    }
                    if (data === 'SUCCESS') {
                        console.log('yay');
                        ///DO STUFF
                        return true;
                    }
                },
                error: function() {
                    console.log('Error occured connecting to mail.php');
                    return false;
                }
            })
            ////////////
    });
});