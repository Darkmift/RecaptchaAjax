    ////This is the validation script.modifications will result in errors.TEST AND MAKE A BACKUP BEFORE editing!!!!.
    ///flag for captcha
    var flag = false;
    //your account name
    var ACCOUNT_NAME = "DEMOSUP";
    //your account's department
    var ACCOUNT_DEPARTMENT = "A";
    //your account's server prefix
    var SERVER_NAME = "bear";

    function checkData() {
        frm = document.theForm;
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
                    alert('Captcha validation failed');
                }
                if (data === 'SUCCESS') {
                    console.log('yay');
                    return lengthValid(frm.SNAME, 4, "full name") &&
                        emailValid(frm.EMAIL, 4, "Email") &&
                        lengthValid(frm.STELH, 10, "ten digits phone number") &&
                        zipValid(frm.SZIP, 5, "five digits origin zip code -US only") &&
                        zipValid(frm.RZIP, 5, "five digits destination zip code - US only") &&
                        selectValid(frm.ROOMS, "Move size")
                }
            },
            error: function() {
                console.log('Error occured connecting to mail.php');
            }
        })


    }

    function SubmitEntry() {
        /******************** */
        //Prevent the default behavior of a form
        //console.log('Clicked');
        event.preventDefault();
        if (checkData()) {
            document.theForm.action = `http://${SERVER_NAME}.hellomoving.com/wc.dll?mpdir~moduleret~${ACCOUNT_NAME}~${ACCOUNT_DEPARTMENT}`;
            document.theForm.submit();
        } else {
            console.log('failed');
        }
    }

    function locatezip() {
        window.open(`http://${SERVER_NAME}.hellomoving.com/wc.dll?mputil~zipwc~NEW`,
            'EANITHING',
            'toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=no,copyhistory=no,scrollbars=yes,width=550,height=500');
        self.name = "main";
    }




    // //////////////////

    // //We set our own custom submit function
    // $("#btnSubmit").click(function() {
    //     //Prevent the default behavior of a form
    //     console.log('Clicked');
    //     event.preventDefault();
    //     //Our AJAX POST
    //     $.ajax({
    //         type: "POST",
    //         url: "mail.php",
    //         data: {
    //             //THIS WILL TELL THE FORM IF THE USER IS CAPTCHA VERIFIED.
    //             captcha: grecaptcha.getResponse()
    //         },
    //         success: function(data) {
    //             console.log(data);
    //             if (data === 'FAILURE') {
    //                 console.log('Captcha validation failed');
    //                 flag = false;
    //             }
    //             if (data === 'SUCCESS') {
    //                 console.log('yay');
    //                 flag = true;
    //                 ///DO STUFF
    //                 //SubmitEntry();
    //             }
    //         },
    //         error: function() {
    //             console.log('Error occured connecting to mail.php');
    //         }
    //     })
    // });