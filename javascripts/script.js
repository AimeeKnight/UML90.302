$(document).ready(function() {
	$('.dropdown').hide();
		$('.parent').hover(
	    function () {
	        $('.dropdown').stop().slideDown();
	    },
	    function () {
	        $('.dropdown').stop().slideUp();
	    }
	);
});