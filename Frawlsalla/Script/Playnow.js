
function validateForm(){
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var pass = document.getElementById('password');
    var age = document.getElementById('age');
    var server = document.getElementById('servers');
    //var form = document.getElementsByName('playform');
    var check = document.getElementById('agree');

    var error = [];
    let errorCount = 0;

    if(name.value == ''){
        error.push("Please Enter Username\n");
        errorCount++;
    }

    if(email.value == ''){
        error.push("Please Enter Email\n");
        errorCount++;
    }else if (!email.contains('@')){
        error.push("Email Invalid\n");
        errorCount++;
    }

    if(pass.value == ''){
        error.push("Please Enter Password\n");
        errorCount++;
    }else if (pass.value.length < 5){
        error.push("Password must be longer than 5 characters\n");
        errorCount++;
    }

    if (age.value == null){
        error.push("Please Enter Age\n");
        errorCount++;
    }else if (age.value < 10){
        error.push("You must be older than 10 years old to play\n");
        errorCount++;
    }

    let radioCount = 0;
    var GenderMale = document.getElementById('Male');
    var GenderFemale = document.getElementById('Female');
    var GenderOthers = document.getElementById('Others');
    var GenderNon = document.getElementById('Pref');
    var Gender;

    if (GenderMale.value != ''){
        radioCount++;
        Gender = GenderMale.value;
    }
    if (GenderFemale.value != ''){
        radioCount++;
        Gender = GenderFemale.value;
    }
    if (GenderOthers.value != ''){
        radioCount++;
        Gender = GenderOthers.value;
    }
    if (GenderNon.value != ''){
        radioCount++;
        Gender = GenderNon.value;
    }
    if (radioCount == 0){
        error.push("Please select one Gender\n");
        errorCount++;
    }else if (radioCount > 1){
        error.push("Please only select one Gender\n");
        errorCount++;
    }

    if (server.value == ''){
        error.push("Please select one server to play\n");
        errorCount++;
    }

    if (!check.value.checked){
        error.push("Please check our Terms and Conditions\n");
        errorCount++;
    }

    if (errorCount != 0){
        alert(error);
        return;
    }else{
        alert("Registration Successful");
    }
}
