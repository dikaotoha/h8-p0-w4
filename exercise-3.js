function cariMedian(arr) {
    // you can only write your code here!
    var temp = Math.round(arr.length / 2);
    if (arr.length % 2 === 0) {
        temp = (arr[temp] + arr[temp - 1]) / 2;
        return temp;
    }
    else {
        temp = arr[temp - 1];
        return temp;
    }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5