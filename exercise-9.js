function checkAB(num) {
    // you can only write your code here!
    var arrNum =[];
    for( var i=0 ; i<num.length ;i++ ){
        arrNum.push(num[i]);
    }
    for(let p = 0; p < arr.length; p++) {
        if (arr[p] === 'o') {
          positionO = p + 1
        } else if (arr[p] === 'x') {
          if (!positionO || !positionX) {
            positionX = p + 1
          } else if (Math.abs(positionO - positionX) > Math.abs(positionO - arr[p])) {
              positionX = p + 1
          }
        }
      }
      if (positionO && positionX) {
        return Math.abs(positionO - positionX)
      } else {
        return 0
      }
    return arrNum;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
// console.log(checkAB('i am sick')); // false
// console.log(checkAB('you are boring')); // true
// console.log(checkAB('barbarian')); // true
// console.log(checkAB('bacon and meat')); // false

/**
 * Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string.
 * function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b
 * yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali,
 * kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.
 */


 /**function targetTerdekat(arr) {
    // you can only write your code here!
    let positionX, positionO, jarak
    
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] === 'o') {
        positionO = i + 1
      } else if (arr[i] === 'x') {
        if (!positionO || !positionX) {
          positionX = i + 1
        } else if (Math.abs(positionO - positionX) > Math.abs(positionO - arr[i])) {
            positionX = i + 1
        }
      }
    }
    if (positionO && positionX) {
      return Math.abs(positionO - positionX)
    } else {
      return 0
    }
}
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
 */

