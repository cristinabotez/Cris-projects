$('.login-button').on('click',function(){
    var u = $('#username').val();
    var p = $('#password').val();
    if(verifyLogin(u,p)){
        createCookie("username",u,1);
        location.href="loggedin.html";
        
    }
    else {
        alert("Invalid credentials");
    }
    
    
    
});

var verifyLogin = function(u,p){
    if(u == "admin" && p =="admin"){
        return true;
    }
    else {
        return false;
    }
    
};