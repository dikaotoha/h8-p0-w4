function countProfit(shoppers) {
    let listBarang = [
        ['Sepatu Stacattu', 1500000, 10],
        ['Baju Zoro', 500000, 2],
        ['Sweater Uniklooh', 175000, 1]
    ];
    // you can only write your code here!
    // var arrShopper = [];
    // for (var i = 0; i < listBarang.length; i++) {
    //     arrShopper.push([]);
    //     for (var j = 0; j < shoppers.length; j++) {
    //         if (shoppers[j]['product'] === listBarang[i][0]) {
    //             arrShopper[i].push(shoppers[j]['name'])
    //         }
    //     }

    // }

    var arrResult = [];


    for (i = 0; i < listBarang.length; i++) {
        // console.log('loop')
        var objProduct = {};
        objProduct['product'] = listBarang[i][0];
        objProduct['shoppers'] = []
        objProduct['leftover'] = 0;
        objProduct['totalProfit'] = 0;
        // console.log(objProduct)
        var sisa = 0;
        for (var j = 0; j < shoppers.length; j++) {
            if (shoppers[j]['product'] === listBarang[i][0]) {
                objProduct['shoppers'].push(shoppers[j]['name'])
                sisa += shoppers[j]['amount']
            }
        }
        if (shoppers[i]['amount'] > listBarang[i][2]) {
            objProduct['leftover'] = listBarang[i][2];
            objProduct['totalProfit'] = 0;

        } else {
            objProduct['leftover'] = listBarang[i][2] - sisa;
            var hasilKali = sisa * listBarang[i][1]
            objProduct['totalProfit'] = hasilKali;
        }

        arrResult.push(objProduct)
        // console.log(objProduct['leftover'])
    }

    return arrResult;
}

// TEST CASES
console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Stacattu',
    amount: 2
}, {
    name: 'Vanessa',
    product: 'Sepatu Stacattu',
    amount: 3
}, {
    name: 'Rani',
    product: 'Sweater Uniklooh',
    amount: 2
}]));

//
/**
 * {
 *  'Sepatu Stacattu': ['windi', 'vanesa'],
 *  'Baju Zoro': [].
 *  'Sweater Uniklooh': ['Rani']
 * }
 */

//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]