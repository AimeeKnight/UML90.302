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

// $(document).ready(function() {
//   $("#navigation").navPlugin({
// 	  'itemWidth': 150,
// 		'itemHeight': 30,
// 		'navEffect': 'slide',
// 		'speed': 250
// 	});
// }); 