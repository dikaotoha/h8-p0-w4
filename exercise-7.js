function urutkanAbjad(str) {
    // you can only write your code here!
    var arrStr = [];
    var result = '';
    //split str
    for (var i = 0; i < str.length; i++) {
        arrStr.push(str[i]);
    }
    //sorting str
    for (var p = 0; p < arrStr.length; p++) {
        for (var q = 0; q < arrStr.length - p - 1; q++) {
            if (arrStr[q] > arrStr[q + 1]) {
                var temp = arrStr[q];
                arrStr[q] = arrStr[q + 1];
                arrStr[q + 1] = temp;
            }
        }

    }
    //jadiin arrStr ke string ditampung ke result
    for (var x = 0; x < arrStr.length; x++) {
        result += arrStr[x];
    }
    //cetak result
    return result;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'

/** function bubbleSort(items) {
    var length = items.length;
    //Number of passes
    for (var i = 0; i < length; i++) {
        //Notice that j < (length - i)
        for (var j = 0; j < (length - i - 1); j++) {
            //Compare the adjacent positions
            if(items[j] > items[j+1]) {
                //Swap the numbers
                var tmp = items[j];  //Temporary variable to hold the current number
                items[j] = items[j+1]; //Replace current number with adjacent number
                items[j+1] = tmp; //Replace adjacent number with current number
            }
        }
    }
}*/

