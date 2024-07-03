let validAnagram = function(str1, str2){  //Leetcode - 242

    //1st approach beats 58% soln in TC 
    // if(str1.length !== str2.length)
    //     return false;
    // str1 = str1.split("").sort().join("");
    // str2 = str2.split("").sort().join("");

    // return str1 === str2;

    //2nd approach using Objects : beats 78% soln in TC

    if(str1.length !== str2.length)
        return false;
    let obj1 = {};
    let obj2 = {};

    //first we added the keys with its no. of occurence eg. a = 2, n =1;
    for(let i=0;i<str1.length;i++){
        obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
        obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
    }

    //loop to compare the key-value of obj1 with obj2, to find if the no. of occurence is same

    for(let key in obj1){
        if(obj1[key] !== obj2[key])
            return false;
    }
    return true;
}

console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("cat", "rat"));