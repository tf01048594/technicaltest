function recursionSum(arr){
    if(arr.length  === 0){
        return 0;
    }else {
        return arr[0] + recursionSum(arr.slice(1))   
    }
}
let arr = [1,2,3,4,5,6,7]
console.log("SUM:",recursionSum(arr));
