function formValidation() {

    var email = document.form1.Email.value;
    var name = document.form1.Name.value;
    var addr = document.form1.Address.value;
    var mess = document.form1.Message.value;
    var wordLen = 10;

    var name1 = true;
    var email1 = true;
    var addr1 = true;
    var mess1 = true;

    if (!inputAlphabet(name, "* Za Ime i Prezime uneti samo slova ")) {
        name1 = false;
    }

    if (!textAlphanumeric(addr, "* Za adresu uneti slova ili brojeve ")) {
        addr1 = false;
    }

    if (!emailValidation(email, "* Uneti validan email ")) {
        email1 = false;
    }

    if (!checkWordLen(mess, "* Uneti do " + wordLen + " re"+"\u010D"+"i u komentaru ")) {
        mess1 = false;
    }

    if (name1 && addr1 && email1 && mess1) {
        alert("Hvala na komentaru !");
        passing();
        return true;
    }
    else {
        return false;
    }


    function passing() {
        var firstDate = document.getElementsByName("Name");
        var secondDate = document.getElementsByName("Address");
        var threeDate = document.getElementsByName("Email");
        var fourDate = document.getElementsByName("Message");
        var queryString = "?para1=" + firstDate + "&para2=" + secondDate + "&para3=" + threeDate + "&para4=" + fourDate;
        window.location.href = "ispis.html" + queryString;
    }


    function inputAlphabet(inputtext, alertMsg) {
        var pattern = /^[a-zA-Z\s]+$/;
        if (pattern.test(inputtext)) {
            document.getElementById('kom1').style.color = "white";
            document.getElementById('kom1').innerHTML = "* Ime i Prezime (unose se slova)";
            return true;
        } else {
            document.getElementById('kom1').style.color = "red";
            document.getElementById('kom1').innerHTML = alertMsg;
            return false;
        }
    }


    function textAlphanumeric(inputtext, alertMsg) {
        var pattern = /^[0-9a-zA-Z\s]+$/;
        if (pattern.test(inputtext)) {
            document.getElementById('kom2').style.color = "white";
            document.getElementById('kom2').innerHTML = "* Adresa (unose se slova ili brojevi)";

            return true;
        } else {
            document.getElementById('kom2').style.color = "red";
            document.getElementById('kom2').innerText = alertMsg;
            return false;
        }
    }

    function emailValidation(inputtext, alertMsg) {
        var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+$/;
        if (pattern.test(inputtext.trim())) {
            document.getElementById('kom3').style.color = "white";
            document.getElementById('kom3').innerHTML = "* Email(unosi se validan email)";
            return true;
        } else {
            document.getElementById('kom3').style.color = "red";
            document.getElementById('kom3').innerText = alertMsg;
            return false;
        }
    }


    function checkWordLen(inputtext, alertMsg) {
        var len = inputtext.trim().split(/[\.\,\?\!\;\s]+/);
        if (len.length  > wordLen) {
            document.getElementById('kom4').style.color = "red";
            document.getElementById('kom4').innerText = alertMsg;
            return false;
        }
        else {
            document.getElementById('kom4').style.color = "white";
            document.getElementById('kom4').innerHTML = "* Komentar(unosi se do 10 re"+"\u010D"+"i)";
            return true;
        }

    }
}
