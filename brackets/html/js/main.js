//on load - se incarca doar dupa ce se incarca toata pagina


//un selector = orice expresie css


$(window).on('load', function(){
    $('#paragraph').css('color', 'red');
    
    var getUsername = function() {
         return $('#username').val();
        
    };
    
     var getPassword = function() {
          return $('#password').val();
        
    };
     
     var sendUserTo =function(website){
         location.href=website;
     };
    
    var markIncorect = function(field){
        $('#username').css('border', '1px solid black');
        
        $('#password').css('border', '1px solid black');
        
        if(field == "username")
            $('#username').css('border', '1px dashed red');
        else
            $('#password').css('border', '1px dashed red');
        
    }
    var verify = function(){
                
        if (getUsername() == "admin" && getPassword() == "admin") {
            //alert("corect");
            
            sentUserTo("http://google.com");
            
        } else {
            //alert("incorect");
            
            if(getUsername() != "admin"){
                markIncorect("username");
            }
            
            else {
                markIncorect("password");
            }
        }
    };
    
    $('#send').on('click', function(){
        verify();
        //functie de call back; se declanseaza cand se intampla un event;
    });
    
});

//clasa
var Student = function(){
    
    var nume;
    
    this.setNume = function(nume){
        this.nume = nume;
    };
    
    this.getNume = function(){
        return this.nume;
    };
    
    this.faCurat = function(){
        alert("Doar daca imi dai 50 euro");
    };
};
//obiectul
var cris = new Student();
//proprietati
cris.nume = "Cristina";
//alert(cris.nume);

//functie
//vlad.faCurat();
vlad.setNume("Andrei");
//alert(vlad.getNume());

$.get("http://api.fixer.io/latest",{},function(response){
    alert(response.base);
});
$.post();
