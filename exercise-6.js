function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var tampungAngka = [];
    var temp = '';

    for (i = 1; i <= angka; i++) {
        var hitung = i * (angka / i);
        if (hitung === angka && hitung % i === 0) {
            tampungAngka.push([i] + [angka / i]); //hasilnya iangka/i
            // tampungAngka.push([i, angka/i]) //hasilnya [i, angka/i]
        }
    }
    //cari min length
    var min = tampungAngka[0].length;
    for (var j = 1; j < tampungAngka.length; j++) {
        if (min > tampungAngka[j].length) {
            min = tampungAngka[j].length;
        }
    }
    // console.log(counter);
    return min;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2

/**
 * Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka.
 * Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut,
 * Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6.
 * Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6,
 * sehingga function akan me-return 2.
 */