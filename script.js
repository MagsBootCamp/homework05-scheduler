

//NOW TIME: THE TIME MUST BE "NOW"
//Could use the JQuery moment function moment().format() 
//The page will load the curretn ('now') time and run functions that require the 'now' time, such as TIMEBLOCKS (refer below)
$( document ).ready(function() {

     let currentDay = (moment().format('DD MM YYYY'));

        console.log(currentDay);

});





//TIMEBLOCKS
//Time blocks are to be color-coded by past, present and future
//Need to create a function that:
// (1) On the page loading
// (2) Checks the now time (viz moment().format(DD MM YYYY))
// (3) Then compares the time (59 minute period) assigned to each row (viz each time-block e.g. 9am - 9:59am)
// (4) If the now time falls within the 59 minute period of a row it uses the css class '.present' and background color of that row will be red.
// (5) If the now time is ahead of the 59 minute period it uses the css class '.past' and background color of all rows of a time prior to now will be grey.
// (6) If the now time is earlier than the 59 minute period it uses the css class '.future' and background color of all rows later to now will be green.




//ENTER EVENT
//Need to enable a row to have data entered by user. This should occur by the user clicking in the row or  on existing string in the row.
// (1) The user selects a row (time) to enter an event. Need an eventListener for the row to enable entry of text upon the user clicking in the row.
// (2) The user enters the event.
// (3) The user then clicks on a "save" button at the end of the row
// (4) The string (event info) is then saved to the variabale for the row. These must be var or let and not const as can be changed by the user.

$('row').on('click', () => {
    //the row allows for the user to enter their event. Button clicked to submit and save - located at the end of the row. String saved against var.

})


//SAVE EVENT
//Need a function to assign the event entered to the variable and save to the ......
// (1) Connect to the class="btn btn-primary" ( CSS id saveBtn) 

























