var flag = false;

$(document).ready(function() {
    var contactForm = $("#contactForm");
    //We set our own custom submit function
    contactForm.on("submit", function(e) {
        //Prevent the default behavior of a form
        e.preventDefault();
        //Our AJAX POST
        $.ajax({
                type: "POST",
                url: "mail.php",
                data: {
                    //THIS WILL TELL THE FORM IF THE USER IS CAPTCHA VERIFIED.
                    captcha: grecaptcha.getResponse()
                },
                success: function(data) {
                    console.log(data);
                    if (data === 'FAILURE') {
                        console.log('Captcha validation failed');
                    }
                    if (data === 'SUCCESS') {
                        flag = true;
                    }
                },
                error: function() {
                    console.log('Error occured connecting to mail.php');
                }
            })
            ////////////
    });
});