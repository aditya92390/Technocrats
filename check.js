document.getElementById("submit").addEventListener("click",function(event){
    event.preventDefault();
    
    checkData();
});

var board_name = document.getElementById("Board_Club");
var TIME = document.getElementById("TIME");
var pass1 = document.getElementById("Date");
var pass2 = document.getElementById("Event Type");

function checkData(){
    var board_nameValue = board_name.value.trim();
    var TIMEValue = TIME.value.trim();
    var pass1Value = pass1.value.trim();
    var pass2Value = pass2.value.trim();
    
    if(usernameValue==""){
        setError(board_name,"Board/Club can't be blank");
    }else{
        setSuccess(board_nameValue);
    }

    if(emailValue==""){
        setError(TIMEValue,"Timing can't be blank");
    }
    else if(!isEmail(TIMElValue)){
        setError(TIMEValue,"Timing is not Valid");
    }
    else{
        setSuccess(TIMEValue);
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
