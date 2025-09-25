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

// 2. Find Years When Jan 1 is Sunday.
function findSundayYears (startYear,lastYear){
    for(let year = startYear; year <= lastYear; year++){
        const day = new Date(year,0,1);
        if(day.getDay() === 0){
            console.log("1st January is being a sunday "+ year)
        }
    }
}
findSundayYears(2014,2050);
//3. One is Positive and one is Negative
function positiveNegative (x,y){
    if((x < 0 && y > 0) || (x > 0 && y < 0)){
        return true;
    }
    else{
        return false;
    }
}
console.log(positiveNegative(2,-2))

// 4.Check Rightmost Digits
function rightmost (x,y,z){
    if(x % 10 === y % 10 || x % 10 === z % 10 || y % 10 === z % 10){
        return true;
    }
    else{
        return false;
    }
}
const rightmostFind = rightmost(12,62,90);
console.log(rightmostFind)