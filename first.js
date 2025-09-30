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

// 5.Reverse
function simpleReverse (str){
    const rev = str.split("").reverse().join("");
    return rev;
}
const revResult = simpleReverse('Welcome');
console.log(revResult)

// 6.Hours and Minutes.
function hrToMin (time){
    let hour = Math.floor(time / 60);
    let minute = time % 60;
    return hour + ":" + minute;
}
const convertedTime = hrToMin(651);
console.log(convertedTime)

// 7.Specified Copies
function stringCopy (str,n){
    if(n < 0){
        return false;
    }
    else{
        return str.repeat(n);
    }
}
const copied = stringCopy('abc',5);
console.log(copied)

// 8. Extract First Half of Even-Length String
function firstHalf (str){
    if(str.length % 2 === 0){
        return str.slice(0,str.length / 2)
    }
    else{
        return str;
    }
}
console.log(firstHalf('JavaSript'));
console.log(firstHalf('odd'))

// 9. Remove 1st and Last Characters in String
function rmvFirstAndLast (str){
    const rmv = str.substring(1,str.length - 1);
    return rmv;
}
console.log(rmvFirstAndLast('muskan'))

// 10.String Ends with 'Script'
function endScript (str){
    if(str.substring(str.length - 6,str.length) === 'script'){
        return true;
    }
    else{
        return false;
    }
}
console.log(endScript('javascript'))

// 11.Rotate Left in Array.
 function rotateLeft (array){
    return [array[1] , array[2] , array[0]];
 }
 console.log(rotateLeft([67,90,12]))

//  12. 1st and Last Elements Are Same.
function firstLastSame (nmbr){
    let last = nmbr.length - 1;
    if(nmbr.length >= 1){
        return nmbr[0] == nmbr[last]
    }
    else{
        return false;
    }
}
console.log(firstLastSame([10,48,76,43,10]))

// 13.Swap First and Last in Array.
function swap (array){
    [array[0],array[array.length - 1]] = [array[array.length - 1],array[0]];
    return array;
}
console.log(swap([1,2,3,4,5]))

// 14.Max Difference Between Adjacent Elements.
function maxDifference (array){
    let max = -1;
    for(let i = 0; i < array.length - 1; i++){
        let temp = Math.abs(array[i] - array[i + 1]);
        max = Math.max(temp,max);
    }
    return max;
}
console.log(maxDifference([1,13,5,3]))

// 15.Max Difference Among All Pairs.
function diff_among (array){
    let max = 0;
    for(let i = 0; i < array.length; i++){
        for(let k = 0; k !== i && k < array.length; k++){
            let diff = Math.abs(array[i] - array[k]);
            max = Math.max(diff,max);
        }
    }
    return max;
}
console.log(diff_among([1, 2, 3, 8, 9]))

// 16.Arrays Share at Least One Common Element.
function check_common_element (arr1,arr2){
    for(let i = 0; i < arr1.length; i++){
        if(arr2.indexOf(arr1[i]) != -1){
            return true;
        }
    }
    return false;
}
console.log(check_common_element([1,2,3],[3,4,5]))