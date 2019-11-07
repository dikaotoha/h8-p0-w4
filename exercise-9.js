function checkAB(num) {
  // you can only write your code here!
  var arrNum = [];
  var posisiA = -1;
  var posisiB = -1;
  var jarak = 0;
  //masukkin num ke 
  for (var i = 0; i < num.length; i++) {
    arrNum.push(num[i]);
  }
  for (var p = 0; p < arrNum.length; p++) {
    // console.log('loop')
    if (arrNum[p] === 'b') {
      posisiB = p;
    }
    if (arrNum[p] === 'a') {
      if (posisiA > p) {
        posisiA = p;
      }
    }
  }
  jarak = posisiA - posisiB;
  if (posisiB === -1 || Math.abs(jarak) < 3) {
    return false;
  }
  return jarak;

}
// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false

/**
 * Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string.
 * function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b
 * yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali,
 * kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.
 */