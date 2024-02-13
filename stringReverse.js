//Reversed string using inBuilt Function
function stringReverse(str){
    let splitStr = str.split('');
    let revArray = splitStr.reverse();
    let joinArr = revArray.join('');

    return joinArr;
}

let ans = stringReverse("Hello World");
console.log(typeof(ans));
console.log(ans);