 $(document).ready(function(){

    var $contador = true;
    var $contador2 = true;

    $('.bt-menu').click(function(){	

         if ($contador ===true) {
         	$('.nav-left').animate({left:'0'});
         	$('.nav-right').animate({right:'-100%'});
         	$contador =false;
         }else{
         	$contador =true;
         	$('.nav-left').animate({left:'-100%'});
         };
      

     console.log('estas en menu left') 
      });

  
    $('.bt-menu2').click(function(){  	
	

		$( "section" ).click(function() {
		  $( ".nav-right" ).mouseleave();
		});


    	
         if ($contador2 ===true) {
         	$('.nav-right').animate({right:'0'});
         	$('.nav-left').animate({left:'-100%'});   
         	$contador2 =false;
         }else{
         	$contador2 =true;
         	$('.nav-right').animate({right:'-100%'});
         };
        
	  });







	
	});
