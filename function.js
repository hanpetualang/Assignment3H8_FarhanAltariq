function hide(){
    document.getElementById("field").style.visibility = 'hidden';
}
hide();
function showForm(){
    document.getElementById("field").style.visibility = "visible";
}
// Using onchange
function changeName(){
    var name = document.getElementById("name");
    var change = document.getElementById("nameInput").value;
    name.innerHTML = change;
}
function changeRole(){
    var avail = document.getElementById("role");
    var change = document.getElementById("roleInput").value;
    avail.innerHTML = change;
}
function changeAvail(){
    var avail = document.getElementById("avail");
    var change = document.getElementById("availInput").value;
    avail.innerHTML = change;
}
function changeAge(){
    var age = document.getElementById("age");
    var change = document.getElementById("ageInput").value;
    age.innerHTML = change;
}
function changeLoc(){
    var loc = document.getElementById("loc");
    var change = document.getElementById("locInput").value;
    loc.innerHTML = change;
}
function changeExp(){
    var exp = document.getElementById("exp");
    var change = document.getElementById("expInput").value;
    exp.innerHTML = change;
}
function changeEmail(){
    var email = document.getElementById("email");
    var change = document.getElementById("emailInput").value;
    email.innerHTML = change;
}
// Using click
function changeAllData(){
    changeName();
    changeRole();
    changeAvail();
    changeAge();
    changeLoc();
    changeExp();
    changeEmail();
    hide();
}