let fibonacciSeries = function (n) {

    //2nd approach using recursion : beats 30% soln in TC, as recursion takes more time

    if (n<=1) return n;
    
    return fibonacciSeries(n-1)+fibonacciSeries(n-2);


    //1st approach: beats 80% of soln in TC leetcode - 509
    /*if (n<=1) return n;
    const arr = [0, 1]; //taking the initial 2 numbers f(0) = 0, f(1) = 1

    for(let i=2;i<=n;i++){
        arr.push(arr[i-1]+arr[i-2]);
    }
    return arr[n];*/

};

console.log("Value of the nth number in fibonacci series is : ",fibonacciSeries(10));