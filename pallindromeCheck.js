
let isPallindromeNum = function(num){

    //This approach beats 84% soln in time complexity : Leetcode - 1
    return num < 0 ? false : (num === Number(num.toString().split("").reverse().join("")));
}

console.log(isPallindromeNum(121));
