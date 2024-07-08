let maxProfit = function(priceArr){ // LeetCode - 121

    // //1st Approach : Time Limit Exceeded
    // let globalProfit =0;

    // for(let i=0;i<priceArr.length-1;i++){
    //     for(let j=i+1;j<priceArr.length;j++){

    //         let currentProfit = priceArr[j] - priceArr[i];

    //         if(currentProfit > globalProfit){
    //             globalProfit = currentProfit;
    //         }
    //     }
    // }
    // return globalProfit;

    //2nd approach : greedy algo 
    //beats 92% soln in TC

    let minStockPrice = priceArr[0] || 0;
    let maxProfit = 0;

    for(let i=1;i<priceArr.length;i++)
    {
        if(priceArr[i] < minStockPrice)
        {
            minStockPrice = priceArr[i];
        }

        //its called greedy, bcz it will calculate the profit for each element of arr
        maxProfit = Math.max(maxProfit, (priceArr[i]-minStockPrice)); 
                                                                     
    }
    return maxProfit;
}
let arr1 = [7,1,5,3,6,4];
let arr2 = [7,6,4,3,1];

console.log(maxProfit(arr1));
console.log(maxProfit(arr2));