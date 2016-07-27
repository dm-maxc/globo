// $(document).ready(function() {

//     $('button').click(function() {
//         $('div').fadeOut('slow');
//     });
// });





// $(document).ready(function(){
//     $('.tirar').click(function(){
//         $('.panel').slideToggle('slow')
        
//         });
//     });


// cambia el valor del primer parrafo
$(document).ready(function(){

  $('.texto').html("¡Magia de jQuery en acción!");
       

// desplegar barra 
    $('.tirar').click(function(){
        $('.panel').slideToggle('slow')
        
        });


// cuando agrandar
	$('.agrandar').click(function(){
    	$('.desp').height('600px');});
    $('.desp').css('background-color','#ff0000')


// box
    $('.box').height('200px');
    $('.box').width('200px');
	$('.box').css('background-color','#00ff00')
  	$('.box').css('border-radius','10px');




});

// variable que se agrega y borra forma dinámiaca
$(document).ready(function(){   
    $("#boton").click(function(){
        
        var Agregar = $('input[name=checkListItem]').val();
        
        $('.lista').append( '<div class="item">' + Agregar + '</div>')
        
        })    
    
    $(document).on('click', '.item', function(){
         $(this).remove();
// efecto hover
        });
  
});



$(document).ready(function(){

  $('.ehover').hover(
    function(){
        $(this).addClass('active');
    
    },
    function(){
        $(this).removeClass('active');
    });

});

// mover

$(document).ready(function(){
    
    $(document).keydown(function(){
        $('.boxm').animate({left:'+=100px'})
        
        
        });  
    
    
    
    
    });




$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			case 37:
				$('img').animate({left: "-=10px"}, 'fast');
				break;
			case 38:
			    $('img').animate({top: "-=10px"}, 'fast');
				break;
			case 39:
			     $('img').animate({left: "+=10px"}, 'fast');
			
				break;
			case 40:
			     $('img').animate({top: "+=10px"}, 'fast');
				break;
		}
	});
});




// explotar planeta jquary ui


$(document).ready(function(){
    
    $('.planeta').click(function(){
        $('.planeta').effect('explode')
        
        
        });
    
    
    
    
    });





// planeta rebota


$(document).ready(function(){
    
    $('.planeta2').click(function(){
        $('.planeta2').effect('bounce',{times:2},500);
        
        
        });
    
    
    
    
    });





$(document).ready(function(){
    
    $('.planeta3').click(function(){
        $('.planeta3').effect('slide',{times:2},500);
        
        
        });
    
    
    
    
    });


// acordión


$(document).ready(function() {
    $("#menu").accordion({collapsible: true, active: false});
});



// mover para todos lados


$(document).ready(function(){
    
    $("#auto").draggable()
    
    });
// agrandar tamaño


$(document).ready(function(){
    
    $('.tamano').resizable();
    
    
    });



// marcar la lista

// $(document).ready(function(){
    
//     $('ol').selectable()
    
//     });


$(document).ready(function(){
    
    $('ol').sortable()
    
    });



