$(document).ready( function() 
	{
	$(".yeti").mousedown(function()
	{
	alert("Yarrrr !!!!!!");
	$(".penguin1").removeClass("img1");  
	$(".penguin2").removeClass("img2");      
	$(".penguin3").removeClass("img3");      
	$(".penguin4").removeClass("img4");      
	$(".penguin5").removeClass("img5");      
	$(".penguin6").removeClass("img6");      
	$(".penguin7").removeClass("img7");      
	$(".penguin8").removeClass("img8");      
	$(".yeti").removeClass("img9");             
	});
    $(".penguin1").click(function()
        {
	$(this).addClass("img1");
	var aNote = document.getElementById('aAudio');
         	aNote.play();
          });
	  $(".penguin2").click(function()
        {
	$(this).addClass("img2");  
	var bNote = document.getElementById('bAudio');
         	bNote.play();       
          });
  $(".penguin3").click(function()
        {
	$(this).addClass("img3");  
	var cNote = document.getElementById('cAudio');
         	cNote.play();       
          });
  $(".penguin4").click(function()
        {
	$(this).addClass("img4");  
	var dNote = document.getElementById('dAudio');
         	dNote.play();       
          });
  $(".penguin5").click(function()
        {
	$(this).addClass("img5");
	var eNote = document.getElementById('eAudio');
         	eNote.play();         
          });
  $(".penguin6").click(function()
        {
	$(this).addClass("img6"); 
	var fNote = document.getElementById('fAudio');
         	fNote.play();         
          });
  $(".penguin7").click(function()
        {
	$(this).addClass("img7");
	var gNote = document.getElementById('gAudio');
         	gNote.play();          
          });
  $(".penguin8").click(function()
        {
	$(this).addClass("img8");         
          });
    $(".yeti").click(function()
        {
	$(this).addClass("img9");         
          });
  
});