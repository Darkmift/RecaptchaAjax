// document.getElementById('btnSub').addEventListener('click', function() {
//     event.preventDefault();
//     document.getElementById('errors').innerHTML = "";
//     validateForm();
// });
$('#btnSub').on("click", function() {
    event.preventDefault();
    //console.log('clicked submit'); // --> works

    var $errors = $('#errors'),
        $status = $('#status'),

        name = $('#name').val().replace(/<|>/g, ""), // prevent xss
        email = $('#email').val().replace(/<|>/g, ""),
        msg = $('#message').val().replace(/<|>/g, "");

    if (name == '' || email == '' || msg == '') {
        valid = false;
        errors = "All fields are required.";
    }

    // pretty sure the problem is here
    //console.log('captcha response: ' + grecaptcha.getResponse()); // --> captcha response: 

    if (!errors) {
        // hide the errors
        $errors.slideUp();
        // ajax to the php file to send the mail
        // $.ajax({
        //     type: "POST",
        //     url: "mail.php",
        //     data: "email=" +
        //         email +
        //         "&name=" +
        //         name +
        //         "&msg=" +
        //         msg +
        //         "&g-recaptcha-response=" +
        //         grecaptcha.getResponse()
        // }).done(function(status) {
        //     console.log(status)
        //     if (status == "ok") {
        //         // slide down the "ok" message to the user
        //         $status.text('Thanks! Your message has been sent, and I will contact you soon.');
        //         $status.slideDown();
        //         // clear the form fields
        //         $('#name').val('');
        //         $('#email').val('');
        //         $('#message').val('');
        //         console.log('Success!');
        //     }
        // });
        validate();
    } else {
        $errors.text(errors);
        $errors.slideDown();
        console.log('Error!');
    }
});


function validate() {

    var response = Recaptcha.get_response();

    $.ajax({
        type: "POST",
        url: "mail.php",
        async: false,
        data: {
            name: name,
            email: email,
            message: message,
            grecaptcha: grecaptcha.getResponse()
        },
        success: function(resp) {
            if (resp == "true") {
                document.getElementById("message").innerHTML = "Perfect!";
            } else {
                document.getElementById("message").innerHTML = "Incorrect Recaptcha! Please try again!";
                reloadRecaptcha();
            }
        }
    });
    return false;
}