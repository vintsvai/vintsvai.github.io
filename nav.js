 jQuery(function($) 
 {
	    $(window).scroll(function()
	    {
	            if($(this).scrollTop()>30)
	            {
	                $('nav').addClass('fix');
	                $('nav').addClass('fix1');
	                $('nav a').addClass('fix');
	   	        }
	            else if ($(this).scrollTop()<35)
	            {
	                $('nav').removeClass('fix');	
	                $('nav').removeClass('fix1');
	                $('nav a').removeClass('fix');                
	            }
		});
   });