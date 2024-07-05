//This solution holds true for condition: when the pair exist and it should be only 1 pair

let twoSum = function(nums, target){ //leetcode- 1

    //beats 27% soln in TC
    // for(let i=0;i<nums.length;i++){
    //     for(let j=i+1;j<nums.length;j++){
    //         if(nums[i]+nums[j] == target){
    //             return [i,j];
    //         }
    //     }
    // }

    //using JS objects
    //beats 94% soln in TC
    let obj = {};
    for(let i=0;i<nums.length;i++){
        let n = nums[i];
        if(obj[target-n] >=0){
            return [obj[target-n], i];
        }
        else{
            obj[n]=i;
        }
    }
    return false;
    
}

console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,5,2], 6));