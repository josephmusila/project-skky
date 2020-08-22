$(document).ready(function(){
    $(".prog").accordion();
    $("#projects").tabs();
    $("#reach").animate
});
//testing doc overall hover
document.querySelectorAll('div')[0].onmouseover=function(e){
    var target=(e.target)?e.target:e.srcElement;
    console.log(target);
}
//form validation
function vlaidate(){
    var country=document.getElementById("country").value;
    var email=document.getElementById("email").value;
}
$(function(){
    $("#signin").click(function(){
        $("#signin-dialogue").dialog({width:500,height:220,modal:true,buttons:{
           " log in":function(){
               var username=document.getElementById("username").value;
               var password=document.getElementById("password").value;
               if(username=="" || password==" "){
                   document.getElementById("err").innerHTML="please fill the fields";
               }else{
                $("#sigin-dialogue").val("");
                $(this).dialog("close");
               }
               
           },
            "close":function(){
                $("#sigin-dialogue").val("");
                $(this).dialog("close");
            }
        }});
    });
});
$(function(){
    $("#registerbtn").click(function(){
        $("#register").dialog({width:500,modal:true,
        buttons:{
            "SUBMIT":function(){
                var username1=document.getElementById("username1").value;
                var id=document.getElementById("id").value;
                var age=document.getElementById("age").value;
                if(username1=="" || id=="" || age==""){
                   document.getElementById("err2").innerHTML="fill all fields";
                }else{
                    $("#signin-dialogue").dialog("open");
                }
               
            },
            "CANCEL":function(){
                $("#register").val("");
                $(this).dialog("close")
            }
        }});
    });
});