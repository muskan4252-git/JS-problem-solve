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

// 19.
