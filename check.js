document.getElementById("submit").addEventListener("click",function(event){
    event.preventDefault();
    
    checkData();
});

var username = document.getElementById("Board/Club");
var email = document.getElementById("Timing");
var pass1 = document.getElementById("Date");
var pass2 = document.getElementById("Event Type");

function checkData(){
    var usernameValue = username.value.trim();
    var emailValue = email.value.trim();
    var pass1Value = pass1.value.trim();
    var pass2Value = pass2.value.trim();
    
    if(usernameValue==""){
        setError(username,"Board/Club can't be blank");
    }else{
        setSuccess(usernameValue);
    }

    if(emailValue==""){
        setError(emailValue,"Timing can't be blank");
    }
    else if(!isEmail(emailValue)){
        setError(emailValue,"Timing is not Valid");
    }
    else{
        setSuccess(emailValue);
    }


    if(pass1Value==""){
        setError(pass1,"Date can't be blank");
    }else{
        setSuccess(pass1);
    }


    if(pass2Value==""){
        setError(pass2,"Event Type can't be blank");
    }
    else if(pass1Value!==pass2Value){
        setError(pass2,"Event Type does not match");
    }
    else{
        setSuccess(pass2);
    }


}


function setError(u, msg){
  var parentBox =  u.parentElement;
  parentBox.className="input-field error";
var span =  parentBox.querySelector("span");
var fa = parentBox.querySelector(".fa");
span.innerText=msg;
fa.className="fa fa-exclamation-circle";
}

function setSuccess(u){
    var parentBox =  u.parentElement;
    parentBox.className="input-field success";
    var fa = parentBox.querySelector(".fa");
    fa.className="fa fa-check-circle";
}

function isEmail(e){
    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(e);}