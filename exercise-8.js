function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var hurufBesar = kalimat.toUpperCase();
    var hurufKecil = kalimat.toLowerCase();
    var result = '';
    for (var i = 0; i < kalimat.length; i++) {
        if (kalimat[i] === hurufBesar[i]) {
            result += hurufKecil[i];
        }
        else {
            result += hurufBesar[i];
        }
    }
    return result;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"

/**
 * Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter berupa string.
 * Function akan me-return string tersebut dengan menukar karakter yang uppercase menjadi lowercase,
 *  dan sebaliknya. Spasi dan simbol diabaikan.
 */

/**
 * var letter = 'This Letter Is For You';
var upper  = letter.toUpperCase();
console.log(upper); // THIS LETTER IS FOR YOU

var letter = 'This Letter Is For You';
var lower  = letter.toLowerCase();
console.log(upper); // this letter is for you
 */