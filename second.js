// 17.Replace Numbers in Array.
function replace (array,old,now){
for(let i = 0; i < array.length; i++){
    if(array[i] === old){
        array[i] = now;
    }
 }
 return array
}
console.log(replace([2,5,7,8,2,5],2,9))

// 18. Minimally for Upper or Lower Case.
function changeCase (str){
    let x = 0;
    let y = 0;
    for(let i = 0; i < str.length; i++){
        if(/[A-Z]/.test(str[i])){
            x++;
        }
        else{
            y++;
        }
    }
    if(x > y)
        return str.toUpperCase();
        return str.toLowerCase();
}
console.log(changeCase('Write'))
console.log(changeCase('PHp'))

// 19.Count Inversions in Array.
function inversions (array){
    let count = 0;
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[i] > array[j])
            count++
        }
    }
    return count;
}
console.log(inversions([0, 3, 2, 9]))

// 20. Dot Product of Two 3D Vectors.
function dotVectors (vector1,vector2){
    let result = 0;
    for(let i = 0; i < 3; i++){
      result += vector1[i] * vector2[i];
    }
    return result;
}
console.log(dotVectors([1,4,6],[6,3,2]))

// 21.Check String as Correct Sentence.
function correct_sentence (str){
    let firstChar = str[0];
    let lastChar = str[str.length - 1];
    if(/[A-Z]/.test(firstChar) && lastChar === '.'){
        return true;
    }
    else{
        return false;
    }
}
console.log(correct_sentence('I love my mother.'))

// 22. Sum of Cubes 1 to n.
function cubesSum (n){
    let sum = 0;
    for(let i = 0; i <= n; i++){
        sum += Math.pow(i,3);
    }
    return sum;
}
console.log(cubesSum(3))

// 23.Celsius To Fahrenheit.
function celsiusToFahrenheit(celsius){
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
console.log(celsiusToFahrenheit(0))

// 24.Find The Largest Word in a String.
function largestWord (str){
    let largest = '';
    const words = str.split(" ");
    for(const word of words){
        if(word.length > largest.length){
            largest = word;
        }
    }
    return largest;
}
console.log(largestWord('My name is Muskan.'))

25.