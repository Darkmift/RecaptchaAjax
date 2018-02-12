////This is the validation script.modifications will result in errors.TEST AND MAKE A BACKUP BEFORE editing!!!!.

//your account name
var ACCOUNT_NAME = "DEMOSUP";
//your account's department
var ACCOUNT_DEPARTMENT = "A";
//your account's server prefix
var SERVER_NAME = "bear";

function checkData() {
    frm = document.theForm;
    return lengthValid(frm.SNAME, 4, "full name") &&
        emailValid(frm.EMAIL, 4, "Email") &&
        lengthValid(frm.STELH, 10, "ten digits phone number") &&
        zipValid(frm.SZIP, 5, "five digits origin zip code -US only") &&
        zipValid(frm.RZIP, 5, "five digits destination zip code - US only") && selectValid(frm.ROOMS, "Move size")
}

function SubmitEntry() {
    if (checkData()) {
        document.theForm.action = `http://${SERVER_NAME}.hellomoving.com/wc.dll?mpdir~moduleret~${ACCOUNT_NAME}~${ACCOUNT_DEPARTMENT}`;
        document.theForm.submit();
    }
}

function locatezip() {
    window.open(`http://${SERVER_NAME}.hellomoving.com/wc.dll?mputil~zipwc~NEW`,
        'EANITHING',
        'toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=no,copyhistory=no,scrollbars=yes,width=550,height=500');
    self.name = "main";
}


































// function verifyCAPTCHA() {
//     var checkAnswer = num1 + num2;
//     var answer = document.getElementById("capNum-sum").value;
//     if (answer == checkAnswer) {
//         return 1;
//     } else {
//         alert("Please verify CAPTCHA");
//         return false;
//     }
// }