console.log("funciona JQ")


$(document).ready(function(){;
  
  
  
  $(this).ready(function(){
    
   
    $(".titulo").slideToggle("9000");
    $(".titulo ").css({"display":"flex"});
    /*$("div:not(#header_animation, .titulo)").css("display","none");*/

  });

  

  

   console.log("evento solo se ejecuta una vez")

    
  

    

  $(".titulo h1").click(function(){

    $(".titulo h1").hide();
    $(".titulo h2").slideToggle();

   
  });

  $(".titulo h2").click(function(){

    $("#header_animation").hide();
    

    $("#header_estatico").slideToggle("slow");
    
    




  })

  
  
    


  


    
/*MENU DESPLEGABLE */

  $("#menu_mouseover").mouseover(function(){

     

      console.log("estoy haciendo mouseover en menu")
      

        $("#menu_desplegable").slideToggle("swing", function(){
        
        console.log ("efecto slidetoggle con slow realizado")
       });
         $("#opciones1").hide();
         $("#opciones2").hide();
         $("#opciones3").hide();
         $("#opciones4").hide();

         $("#opciones1").show(1000);
         $("#opciones2").show(2000);
         $("#opciones3").show(3000);
         $("#opciones4").show(5000);
     





    })


    $("#opciones1 a").hover(function(){
      console.log ("estoy haciendo hover para ser rojo")
      $(this).css("color", "red");
      }, function(){
      $(this).css("color", "#101822");
    });
    $("#opciones1 a").hover(function(){
      console.log("estoy haciendo hover para ser menos opaco")
      $(this).css("opacity", "50%");
      }, function(){
      $(this).css("opacity", "100%");
    });
    $("#opciones1 a").hover(function(){
      console.log("estoy haciendo hover para ser más grande")
      $(this).css("font-size", "60px");
      }, function(){
      $(this).css("font-size", "50px");
    });


    $("#opciones2 a").hover(function(){
      console.log ("estoy haciendo hover para ser rojo")
      $(this).css("color", "red");
      }, function(){
      $(this).css("color", "#101822");
    });
    $("#opciones2 a").hover(function(){
      console.log("estoy haciendo hover para ser menos opaco")
      $(this).css("opacity", "50%");
      }, function(){
      $(this).css("opacity", "100%");
    });
    $("#opciones2 a").hover(function(){
      console.log("estoy haciendo hover para ser más grande")
      $(this).css("font-size", "60px");
      }, function(){
      $(this).css("font-size", "50px");
    });


    $("#opciones3 a").hover(function(){
      console.log ("estoy haciendo hover para ser rojo")
      $(this).css("color", "red");
      }, function(){
      $(this).css("color", "#101822");
    });
    $("#opciones3 a").hover(function(){
      console.log("estoy haciendo hover para ser menos opaco")
      $(this).css("opacity", "50%");
      }, function(){
      $(this).css("opacity", "100%");
    });
    $("#opciones3 a").hover(function(){
      console.log("estoy haciendo hover para ser más grande")
      $(this).css("font-size", "60px");
      }, function(){
      $(this).css("font-size", "50px");
    });

    $("#opciones4 a").hover(function(){
      
      console.log ("estoy haciendo hover para ser rojo")
      $(this).css("color", "red");
      }, function(){
      $(this).css("color", "#101822");
    });
    $("#opciones4 a").hover(function(){
      console.log("estoy haciendo hover para ser menos opaco")
      $(this).css("opacity", "50%");
      }, function(){
      $(this).css("opacity", "100%");
    });
    $("#opciones4 a").hover(function(){
      console.log("estoy haciendo hover para ser más grande")
      $(this).css("font-size", "60px");
      }, function(){
      $(this).css("font-size", "50px");
    });


    $(function(){
      $(window).scroll(function(){
        console.log("oculto menu al hacer scroll")
      if ($(window).scrollTop() >= 120)
      {
      $("#menu_desplegable").hide("slow");
      }
      else
      {
      $("#información").show();
      }
      });
      });

      
    $(function(){
      $(window).scroll(function(){
        console.log("oculto DIV WE_ARE al hacer scroll")
      if ($(window).scrollTop() >=1980.800048828125)
      {
      $("#we_are h1, h2").show("slow");
      }
      else{
        $("#we_are h1, h2").hide("slow");
      }
    
      });
      });

/*MENU RESPONSIVE */
      

    $("#abrir").click(function() {


      if($("#abrir").attr("class") == "fas fa-bars"){
        console.log("funciona")
          $("#abrir").removeClass("fas fa-bars").addClass("fas fa-times");
        }else{
          $("#abrir").removeClass("fas fa-times").addClass("fas fa-bars");
        }



      //Elimina la clase on de todos los botones
      $("#abrir").removeClass('on');
  
      //Plegamos todo el contenido que esta abierto
       $("#menu_responsive").slideUp('slow');




      
     

  
      //Si el siguiente slide no esta abierto lo abrimo
      if($(this).next().is(':hidden') == true) {
  
        //Añade la clase on en el botón
        $(this).addClass('on');
  
        //Abre el slide
        $(this).next().slideDown('slow');
       

      
       }
  
     });

     $('.dropdownContent').hide();




    

      



    








  

         







   




  

    

    

     


        





  
    
    

});