//needed for CAPTCHA
function randomNum() {
    var num1Random = Math.floor(Math.random() * 10) + 1;
    var num2Random = Math.floor(Math.random() * 10) + 1;
    document.getElementById("capNum1").innerHTML = num1Random;
    document.getElementById("capNum2").innerHTML = num2Random;

}

function checkData() {
    frm = document.theForm;
    return lengthValid(frm.SNAME, 4, "full name") &&
        emailValid(frm.EMAIL, 4, "Email") &&
        lengthValid(frm.STELH, 10, "ten digits phone number") &&
        zipValid(frm.SZIP, 5, "five digits origin zip code -US only") &&
        zipValid(frm.RZIP, 5, "five digits destination zip code - US only") &&
        selectValid(frm.ROOMS, "weight")
}

function SubmitEntry() {
    if (checkData() && (CAPTCHA == true)) {
        document.theForm.action = "http://fox.hellomoving.com/wc.dll?mpdir~moduleret~ALLIANCEMS~M";
        document.theForm.submit();
    }
    //start of captcha code
    var num1 = document.getElementById("capNum1").value;
    var num2 = document.getElementById("capNum2").value;
    var sum = document.getElementById("capNum-sum").value;
    var CAPTCHA = verifyCAPTCHA();


    function verifyCAPTCHA() {
        var checkAnswer = num1 + num2;
        var answer = document.getElementById("capNum-sum").value;
        if (answer == checkAnswer) {
            return 1;
        } else {
            alert("Please verify CAPTCHA");
            return false;
        }

    }
    //end of captcha code
}

function locatezip() {
    window.open('http://fox.hellomoving.com/wc.dll?mputil~zipwc~NEW', 'EANITHING', 'toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=no,copyhistory=no,scrollbars=yes,width=550,height=500');
    self.name = "main"
}