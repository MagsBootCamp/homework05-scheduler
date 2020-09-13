# homework05-scheduler

User Story
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

Acceptance Criteria
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
You'll need to use the Moment.js library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

USING MOMENT.JS LIBRARY
Could I use:

// Docs: https://momentjs.com/    https://scrimba.com/casts/cwpDGhG

Make a var for now that always get triggered when you open the page so that the calendar opens up as prescribed viz: "THEN the current day is displayed at the top of the calendar"?
var now = moment();
console.log('DDMMYYYY);

To determine whether a timeblock is now, past or future and then the CSS will change the color?
Would need to add and "if" statement....viz "if" the result was <now then make color x, if >now then make clor y, if = now then make color z.

var a = moment('20170110', 'YYYYMMDD').fromNow();
console.log(a);

Other option:
var a = moment().startOf('day').fromNow();
console.log(a);
Tells you how much time has elapsed since start of day

Also could use: Getters and Setters:
moment().seconds(30) === new Date().setSeconds(30); this is a setter as prescribing 30 seconds - it is calling the function with the parameter .seconds(30)
moment().seconds()   === new Date().getSeconds(); this is a getter as not prescribing an interval/time - it is calling the function with no parameter .seconds()

moment() - a single point in time
duration() - a period of time



The values entered by the user to lock in an event changes from a var to a constant.

