


//VARIABLES
//Establishing the variables to store the events entered by theuser and to be stored in local storage. They are stored local because.....

var nineAmEvent = ( the string entered by the user and clicks on save);

var tenAmEvent = ;

var elevenAmEvent = ;

var twelveNoonEvent = ;

var onePmEvent = ;

var twoPmEvent = ;

var threePmEvent = ;

var fourPmEvent = ;

var fivePmEvent = ;

var today = (moment())

//Console log the answers to check its operation

console.log(nineAmEvent)

console.log(tenAmEvent);

console.log(elevenAmEvent);

console.log(twelveNoonEvent);

console.log(onePmEvent);

console.log(twoPmEvent);

console.log(threePmEvent);

console.log(fourPmEvent);

console.log(fivePmEvent);

console.log(today);


//NOW TIME: THE TIME MUST BE "NOW"
//Could use the JQuery moment function moment().format() 
//The page will load the curretn ('now') time and run functions that require the 'now' time, such as TIMEBLOCKS (refer below)
/* $( document ).ready(function() {

    var currentDate = (moment().format("DD/MM/YYYY"));
    
    console.log(currentDay);

});

moment();
//this one adds the hours and minutes and seconds in
moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); */

$( document ).ready(function() {
    var today = moment();
        console.log(
         "Today's date is: " + 
            today.format('YYYY-MM-DD')
);
});

moment()

//FUNCTIONS

//TIMEBLOCK FUNCTIONS
//Time blocks are to be color-coded by past, present and future
//Need to create a function that:
// (1) On the page loading
// (2) Checks the now time (viz moment().format(DD MM YYYY))
// (3) Then compares the time (59 minute period) assigned to each row (viz each time-block e.g. 9am - 9:59am)
// (4) If the now time falls within the 59 minute period of a row it uses the css class '.present' and background color of that row will be red.
// (5) If the now time is ahead of the 59 minute period it uses the css class '.past' and background color of all rows of a time prior to now will be grey.
// (6) If the now time is earlier than the 59 minute period it uses the css class '.future' and background color of all rows later to now will be green.
// (7) Could consider disallowing entries of events into the past time blocks, or having an alert that would say "your are making an event in the past".
// As the user could want to use the scheduler as a record of events that happened after the evnt as a note, so have greater use that
// entries for future events on the day, but this wasnt asked for.




//ENTER & SAVE EVENT FUNCTION
//Need to enable each time block row to have data entered by user and stored to local storage when the user clicks a "save" button in the row.
// Event entry should occur by the user clicking in the row or on existing string in the row to amend.
// (1) The user selects a row (time) to enter an event. Need an eventListener for the row to enable entry of text upon the user clicking in the row.
// (2) The user enters the event.
// (3) The user then clicks on a "save" button at the end of the row
// (4) The string (event info) is then saved to the variable for the row. These must be var or let and not const as can be changed by the user.

$('row').on('click', () => {
    //the row allows for the user to enter their event. Button clicked to submit and save - located at the end of the row. String saved against var.

})


//SAVE EVENT
//Need a function to assign the event entered to the variable and save to the ......
// (1) Connect to the class="btn btn-primary" ( CSS id saveBtn) 



//To create a line to add text. https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_table_cellcontent

function changeContent(id, row, cell, content) {
  var x = document.getElementById(id).rows[row].cells;
  x[cell].innerHTML = content;
}

//Need to get the data stored in the local storage for each time block and show it when page loads.
$(#nineAmEvent).show();











