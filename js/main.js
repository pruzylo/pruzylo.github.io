function main(){
	
	
	$('.winner').hide();
  
  $('.btn').on('click', function(){ 
  $('.container').fadeToggle(400);
  $('.winner').toggle();
		 });
 
}

$(document).ready(main);

