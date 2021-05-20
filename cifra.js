document.addEventListener('DOMContentLoaded',function(){
	
   document.querySelector('#cifrar').addEventListener('click', function(){
   let text = document.querySelector('#textarea1').value;
   document.querySelector("#textarea2").value = cifrar(text);
   
   }
   
)

   function cifrar(text){  
	
	var validCharacters = "abcdefghijklmnopqrstuvwxyz";
	var font = ["b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a"];
	var originalText = text.toLowerCase();
	
	var result = "";
	for (var i = 0; i < originalText.length; i++) {
		var charAt = originalText.charAt(i);
		var indexOf = validCharacters.indexOf(charAt);
		if (indexOf != -1) {
				result+=font[indexOf];
		} else {
				result+=charAt;
		}
	}
	return result;
   }
  
})

document.addEventListener('DOMContentLoaded',function(){
	
	document.querySelector('#decifrar').addEventListener('click', function(){
	let text = document.querySelector('#textarea1').value;
	document.querySelector("#textarea2").value = decifrar(text);
	
	}
	
 )
 

function decifrar(text){  
	
	var validCharacters = "bcdefghijklmnopqrstuvwxyza";
	var font = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var originalText = text.toLowerCase();
	
	var result = "";
	for (var i = 0; i < originalText.length; i++) {
		var charAt = originalText.charAt(i);
		var indexOf = validCharacters.indexOf(charAt);
		if (indexOf != -1) {
				result+=font[indexOf];
		} else {
				result+=charAt;
		}
	}
	return result;
   }
})