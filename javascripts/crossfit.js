$(document).ready(function() {
	$('.hero_description').hide();
	$('.hero h4').hover(
		function() {
			$(this).next('.hero_description').stop().slideDown();
		},
		function(){
			$(this).next('.hero_description').stop().slideUp();
		});

		var wod = [
	"10 sit-ups followed by 10 burpees – time 10 rounds of each.",
	"One mile run with 10 air squats, 10 sit-ups and 10 push-ups thrown in each and every minute.",
	"10 burpees followed by a 100m sprint – again timing 10 rounds.",
	"4 Rounds:  Hold a handstand for 30 seconds or do 5 handstand push ups, then run 400 meters.",
	"10 push-ups followed by a 100m sprint – time 10 rounds of each.",
	"100 jumping jacks, 50 push-ups, 75 air squats and 25 burpees.",
	"Do 10 vertical jumps followed by a 400 meter run – 5 rounds.",
	"Run for a half mile then complete 50 air squats – time 3 rounds.",
	"10 burpies, 100 meter sprint 10x for time",
	"3 x 20 tuck jumps, followed by 3 x 30 second handstand holds",
	"Run 1 mile with 100 air squats at midpoint, for time.",
	"Sprint for 400 meters followed by completing 20 air squats – complete a total of 3 rounds.",
	"Complete 20 rounds of 5 push ups, 5 sit ups and 5 squats.",
	"Run 1 mile, lunging 30 steps every 1 minute.",
	"10-9-8-7-6-5-4-3-2-1 Burpies and Sit ups.",
	"3 Rounds for time:  10 Handstand push ups, 200 m run.",
	"10 push-ups 100M dash 10x.",
	"Run a mile stopping each minute in order to complete 10 air squats.",
	"100 jumping jacks, 75 air squats, 50 push ups, 25 burpies.",
	"Sprint for 100 meters then complete 30 squats – total of 10 rounds.",
	"Run 1/2 mile 50 air squats – 3 rounds.",
	];

	$('button').on('click', function() {
		rand = Math.floor(Math.random() * wod.length);
  	$('.generate_wod h4').text(wod[rand]);
	});
});	