<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#overlay01",function(){
  
  	$('#tapholdtext').on("taphold",function(){
    	$(this).hide();
 	});                       

	$('#taptext').on("tap",function(){
    	$(this).css('color', 'red');
 	}); 

	$('#swipetext').on("swipeleft",function(){
    	$(this).css('color', 'green');
  	});  

  	$('#swipetext').on("swiperight",function(){
    	$(this).css('color', 'blue');
  	});  


});

$(document).on("pagecreate","#overlay02",function(){
  $('#submitButton').on("click", function(){
    submitText();
  });            
});            


function submitText() {
	var text = $('#textinput').val();
	alert(text);
}

function storeValue(key, value) {
	//add some code to store the key-value pair in persistant storage 
}

<script type="text/javascript">
$(function() {
 
//set up hash detection 
$(window).bind( 'hashchange', function(e) {
 var hash = '';
 var hashlenght = 0;
 hashwith = '';
 if (location.hash == ''){
 location.hash = '#pages=index';
 document.title = 'Work Index';
 }
 
 hash = location.hash;
 hashlenght = hash.length;
 hashwith = '#'+hash.substring(7, hashlenght);
 hash = location.hash.substring(7, hashlenght);
 if(hashwith != "#"+'index'){
 show_overlay(hash);
 document.title = 'Work '+hash;
 }
 else{
 close_overlay();
  
 }
  
 });
 
 $(window).trigger( 'hashchange' );
 
 $(".overlays").each(function(){
 $(this).click(function(){
 close_overlay();
 });
 });
 
});
 
function close_overlay(){
 $(".overlays").each(function(){
 if($(this).css('display') == 'block'){$(this).hide();}
 });
 location.hash = '#pages=index';
}
 
//function to show overlay
function show_overlay(aux){
 $("#"+aux).show();
}
 
//function to change hash
function change_hash(aux){
 location.hash = '#pages='+aux;
 document.title = 'Work '+aux;
}
 
</script>