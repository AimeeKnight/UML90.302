var miles = 0; 
var calories = 0;
var time_goal = 36; //minutes
var current_time = 0; //minutes
var time_left = time_goal; //minutes

while (current_time < time_goal) {
current_time++;
calories+=11;
time_left = time_goal - current_time;
console.log(time_left + ' minutes remaining and ' + calories + ' calories burned.');

  if (current_time % 9 == 0) {
    miles++;
  } 
  if (current_time == time_goal) {
    console.log('You ran ' + miles + ' miles!');
  } 
}

// Initialize miles to zero
// Initialize calories to zero
// Initialize time_goal to 36 (value in minutes)
// Initialize current_time to 0 (value in minutes)
// Initialize time_left to the same value as time_goal

// while current_time is less than time_goal  
// add one to current_time   
// add eleven to calories  
// compute time_goal minus current_time and save the value as time_goal (overwriting previous value for time_goal)   
// generate string with time_left concatenated with " minutes remaining"  
// concatenate onto that string, calories concatenated with " calories burned"  
// process sting as an html paragraph

//     if the current_time divided by nine has a remainder of zero     
//         add one to miles
//     else if current_time is equal to the time_goal     
//         generate string with "You ran " concatenated with miles, then concatenated with " miles!"      
//         process sting as an html paragraph

