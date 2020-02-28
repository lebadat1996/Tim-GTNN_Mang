function minArray(arr) {
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
let arr1 = [1,2,3,4,-9,5,6];
let min = minArray(arr1);
document.getElementById("array").innerHTML = min;