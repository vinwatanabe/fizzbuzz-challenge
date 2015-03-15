$(document).ready(function(){
	for (count = 1; count <= 100; count ++){
		if(count % 3 ===0 && count % 5 ===0){
			$('.page').append('FizzBuzz ');
		}
		else if(count % 3 === 0){
			$('.page').append('Fizz ');
		}
		else if(count % 5 === 0){
			$('.page').append('Buzz ');
		}
		else{
			$('.page').append(count + ' ');
		}
	}
});