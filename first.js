// 1. Display Current Day and Time.
const today = new Date();
const day = today.getDay();
const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log('Today is ' + dayList[day] +'.')

const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();

const prepand = (hour >= 12) ? "PM" : "AM";
const hr = (hour >= 12) ? hour - 12 : hour;
if(hour === 0 && prepand === "PM"){
    if(minute === 0 && second === 0){
    hour = 12;
    prepand = 'Noon';
 }
else{
    hour = 12;
    prepand = 'PM';
 }
}
if(hour === 0 && prepand === "AM"){
    if(minute === 0 && second === 0){
     hour = 12;
     prepand = 'Midnight'
 }
 else{
    hour = 12;
    prepand = 'AM';
 }
}
console.log("Current time : "+ hour + prepand + " : " + minute + " : " + second)