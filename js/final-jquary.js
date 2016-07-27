$(document).ready(function(){
	var $cambia = true

		$('.espacioglobo').click(function(){
			if($cambia){
				// $('.block0').css('background-color','#151b1f')


    		$('.block0').animate({backgroundColor:'#151b1f'}, "slow");

				// $('.img-print').css('background-image','url(img/block-6.svg)')
			$('.img-print').animate('ease-in-out', function(){
				$('.img-print').css('background-image','url(img/block-6.svg)')
				})

				// $('.img-home > img').css('opacity', '0.8')
				// $('.espacioglobo > img').attr('src','img/globo-noche.svg');

			$('.img-print').animate('slow', function(){
				$('.img-home > img').attr("src","img/home-noche.svg");
			});
	

			$('.globotitulo').html(' <h6>BUENOS NOCHES</h6>')

			$cambia = false;
			console.log('cambia false')

				
			} else{
					$cambia = true;
					// $('.block0').css('background-color','#8bceda')
					$('.block0').animate({backgroundColor:'#8bceda'}, "slow");
					$('.img-print').css('background-image','url(img/home-2.svg)')				
					$('.img-home > img').css('opacity', '1')

					$('.img-home > img').attr("src","img/home.svg");

					$('.globotitulo').html(' <h6>BUENOS DÍAS</h6>')

					console.log('cambia a true')
					};




	
		});

});