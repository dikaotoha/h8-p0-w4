function ubahHuruf(kata) {
    var temp = '';
    // you can only write your code here!
    for (i = 0; i < kata.length; i++) {

        temp += String.fromCharCode(kata.charCodeAt(i) + 1);
    }
    return temp;
}


// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu

// contoh huruf tambah 1
// var hurufW = ['a', 'b'];
// hurufW.shift();
// console.log(hurufW);
// console.log(String.fromCharCode(hurufW.charCodeAt(0) + 1));