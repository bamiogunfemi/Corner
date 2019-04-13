/* Style Changer */

jQuery(document).ready(function(){

	

	/* Style Changer Autohide */
	jQuery('.chBut').parent().delay(1000).animate({left:'-180px'}, 500, function(){
		jQuery(this).find('.chBut').next('.chBody').css({display:'none'});
		jQuery(this).find('.chBut').addClass('closed');
	}); 
	
	
	/* Style Changer Toggle */
	jQuery('.chBut').click(function(){
		if (jQuery(this).hasClass('closed')){
			jQuery(this).next('.chBody').css({display:'block'}).parent().animate({left:0}, 500, function(){
				jQuery(this).find('.chBut').removeClass('closed');
			});
		} else {
			jQuery(this).parent().animate({left:'-180px'}, 500, function(){
				jQuery(this).find('.chBut').next('.chBody').css({display:'none'});
				jQuery(this).find('.chBut').addClass('closed');
			});
		}
		
		return false;
	});
	
	/* Window Resize Function */
	jQuery(window).resize(function(){
		if (jQuery(window).height() < 750){
			jQuery('#stlChanger').css({position:'absolute'});
		} else {
			jQuery('#stlChanger').css({position:'fixed'});
		}
	});
	
});
