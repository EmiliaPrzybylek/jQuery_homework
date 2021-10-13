"use strict";

$(function(){
    
      
    $("a").on("click", (e) => {
        e.preventDefault();
        
        
        if ($("#pass").attr('type') === 'password') {
            
            $("#pass").attr("type","text");
            $("a").text("Ukryj znaki")
            
        }
        else {
            
            $("#pass").attr("type","password");
            $("a").text("Pokaż znaki");
            
        }
    
        
        $("#znaki").text($("input").val().length); 
        
    });
});