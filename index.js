$(document).ready(function(){
    $(".prog").accordion();
    $("#projects").tabs({
        event:"mouseover",
        collapsible:true
    });
   $("#standings").click(function(){
       $("#standings").effect({
           effect:"explode",
           easing:"easeInExpo",
           pieces:100,
           duration:10000
       });
   });
  
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
    var atposition=email.indexOf("@");
    var dotposition=email.lastIndexOf(".");
    if(atposition<1|| dotposition +2 || dotposition+2>=email.length);
    {
        alert("please enter a valid email");
        return false;
    }
}
$(function(){
    $("#registerbtn").click(function(){
        $("#register").dialog({width:400,modal:true,
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
$(function(){
    $("#signin").click(function(){
        $("#signin-dialogue").dialog({width:400,height:220,modal:true,buttons:{
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
    $("#username1").tooltip({
        content:"enter your name"
       
        
    });
  //resetting accordion header styles
  $("#rog").click(function(){
      if(this.id=="rog"){
          $("#rog").addClass("new","slow");
      }else{
          $("#rog").removeClass("new","fast");
      }
  })

});
function tip(){
    $("#android").tooltip({
        content:"the app ui on android phones"
    });
    $("#iphone").tooltip({
        content:"the app ui on iphones phones"
    });
}document.getElementById("android").addEventListener("mouseover",tip);
func