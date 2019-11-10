function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var jarakAwal = 0;


    var arrAngkot = [];
    for (var i = 0; i < arrPenumpang.length; i++) {
        var objPenumpang = {};
        objPenumpang['penumpang'] = arrPenumpang[i][0];
        objPenumpang['naikDari'] = arrPenumpang[i][1];
        objPenumpang['tujuan'] = arrPenumpang[i][2];

        // console.log(objPenumpang)
        for (var j = 0; j < rute.length; j++) {
            // console.log('loop j')
            if (rute[j] === arrPenumpang[i][1]) {
                jarakAwal = j;
                // console.log(jarakAwal)
            }
            if (rute[j] === arrPenumpang[i][2]) {
                var bayar = j - jarakAwal;
                objPenumpang['bayar'] = bayar * 2000;
                // console.log(bayar, 'bayar')
            }
        }

        arrAngkot.push(objPenumpang);
    }
    return arrAngkot;
}

//TEST CASE
console.log(naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B'],

]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]