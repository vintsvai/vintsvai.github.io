$(document).ready(function(){
	let n1=1;
	let n2=1;
	let n3=1;
	let n4=1;
	let n5=1;
	let n6=1;
	let n7=1;
	let n8=1;
	let n9=1;
 $('.quest1').click(function(){
  $('.spoiler1').parent().children('div.spoiler_body').toggle('normal');
  return false;
 });
 $('.quest2').click(function(){
  $('.spoiler2').parent().children('div.spoiler_body').toggle('normal');
  return false;
 });
 $('.quest3').click(function(){
  $('.spoiler3').parent().children('div.spoiler_body').toggle('normal');
  return false;
 });
 $('.quest4').click(function(){
  $('.spoiler4').parent().children('div.spoiler_body').toggle('normal');
  return false;
 });
 $('.quest5').click(function(){
  $('.spoiler5').parent().children('div.spoiler_body').toggle('normal');
  return false;
 });
 $('.quest6').click(function(){
  $('.spoiler6').parent().children('div.spoiler_body').toggle('normal');
  return false;
 });
 $('.quest7').click(function(){
  $('.spoiler7').parent().children('div.spoiler_body').toggle('normal');
  return false;
 });
 $('.quest8').click(function(){
  $('.spoiler8').parent().children('div.spoiler_body').toggle('normal');
  return false;
 });
 $('.quest9').click(function(){
  $('.spoiler9').parent().children('div.spoiler_body').toggle('normal');
  return false;
 });



 $('.quest1').mouseenter(function(){
 	$('.icon1').addClass('fix11');
 });
 $('.quest1').mouseleave(function(){
 	$('.icon1').removeClass('fix11');
 });
 $('.quest1').click(function(){
 	if (n1>0)
 	{
 		$('.icon1').addClass('fix12');
	}
 	else
 	{
 		$('.icon1').removeClass('fix12');
	}
	n1=-n1;
 });


 $('.quest2').mouseenter(function(){
 	$('.icon2').addClass('fix21');
 });
 $('.quest2').mouseleave(function(){
 	$('.icon2').removeClass('fix21');
 });
 $('.quest2').click(function(){
 	if (n2>0)
 	{
 		$('.icon2').addClass('fix22');
	}
 	else
 	{
 		$('.icon2').removeClass('fix22');
	}
	n2=-n2;
 });



 $('.quest3').mouseenter(function(){
 	$('.icon3').addClass('fix31');
 });
 $('.quest3').mouseleave(function(){
 	$('.icon3').removeClass('fix31');
 });
 $('.quest3').click(function(){
 	if (n3>0)
 	{
 		$('.icon3').addClass('fix32');
	}
 	else
 	{
 		$('.icon3').removeClass('fix32');
	}
	n3=-n3;
 });

  $('.quest4').mouseenter(function(){
 	$('.icon4').addClass('fix41');
 });
 $('.quest4').mouseleave(function(){
 	$('.icon4').removeClass('fix41');
 });
 $('.quest4').click(function(){
 	if (n4>0)
 	{
 		$('.icon4').addClass('fix42');
	}
 	else
 	{
 		$('.icon4').removeClass('fix42');
	}
	n4=-n4;
 });


 $('.quest5').mouseenter(function(){
 	$('.icon5').addClass('fix51');
 });
 $('.quest5').mouseleave(function(){
 	$('.icon5').removeClass('fix51');
 });
 $('.quest5').click(function(){
 	if (n5>0)
 	{
 		$('.icon5').addClass('fix52');
	}
 	else
 	{
 		$('.icon5').removeClass('fix52');
	}
	n5=-n5;
 });



 $('.quest6').mouseenter(function(){
 	$('.icon6').addClass('fix61');
 });
 $('.quest6').mouseleave(function(){
 	$('.icon6').removeClass('fix61');
 });
 $('.quest6').click(function(){
 	if (n6>0)
 	{
 		$('.icon6').addClass('fix62');
	}
 	else
 	{
 		$('.icon6').removeClass('fix62');
	}
	n6=-n6;
 });

  $('.quest7').mouseenter(function(){
 	$('.icon7').addClass('fix71');
 });
 $('.quest7').mouseleave(function(){
 	$('.icon7').removeClass('fix71');
 });
 $('.quest7').click(function(){
 	if (n7>0)
 	{
 		$('.icon7').addClass('fix72');
	}
 	else
 	{
 		$('.icon7').removeClass('fix72');
	}
	n7=-n7;
 });


 $('.quest8').mouseenter(function(){
 	$('.icon8').addClass('fix81');
 });
 $('.quest8').mouseleave(function(){
 	$('.icon8').removeClass('fix81');
 });
 $('.quest8').click(function(){
 	if (n8>0)
 	{
 		$('.icon8').addClass('fix82');
	}
 	else
 	{
 		$('.icon8').removeClass('fix82');
	}
	n8=-n8;
 });



 $('.quest9').mouseenter(function(){
 	$('.icon9').addClass('fix91');
 });
 $('.quest9').mouseleave(function(){
 	$('.icon9').removeClass('fix91');
 });
 $('.quest9').click(function(){
 	if (n9>0)
 	{
 		$('.icon9').addClass('fix92');
	}
 	else
 	{
 		$('.icon9').removeClass('fix92');
	}
	n9=-n9;
 });
 
});