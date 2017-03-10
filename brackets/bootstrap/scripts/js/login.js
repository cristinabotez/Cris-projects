var verifyCookie = function(){
    if(readCookie("username") !=null){
        return true;
        
    }
    return false;
};

if(!verifyCookie){
    location.href="index.html";
}
else{
    $('#username').html(readCookie("username"));
}

(window).on('load',function(){
            $('#log-out').on('click', function(){
            eraseCookie("username");
            location.href="index.html";
            });
            }