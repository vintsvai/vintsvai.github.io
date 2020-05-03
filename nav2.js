$(function() {
			var pull 		= $('#pull');
				z=$('.aaaa1');
				menu 		= $('nav ul');
				menuHeight	= menu.height();

			$(pull).on('click', function(e) {
				pull.css({"display":"none"});
				e.preventDefault();
				menu.toggle(function() { 
            		menu.show("slide", { direction: "right" }, 1000);
            		
				
				});
			});
			$(z).on('click', function(e) {
				
				menu.toggle(function() { 
            		menu.hide("slide", { direction: "right" }, 1000);
            	});
            	pull.css({"display":"block"});
            		
            		

				
			});

			$(window).resize(function(){
        		var w = $(window).width();
        		if(w > 320 && menu.is(':hidden')) {
        			menu.removeAttr('style');
        		}
    		});
		});