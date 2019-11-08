function changeMe(arr) {
    // you can only write your code here!
    var profile = {};
    if (arr.length === 0) {
        console.log('\"\"')
    }
    for (i = 0; i < arr.length; i++) {
        console.log(i + 1 + '.' + arr[i][0] + ' ' + arr[i][1])
        profile['firstName'] = arr[i][0];
        profile['lastName'] = arr[i][1];
        profile['gender'] = arr[i][2];
        if (arr[i][3] == undefined) {
            profile['age'] = 'Invalid Birth Year';
        } else {
            profile['age'] = 2019 - arr[i][3];
        }
        console.log(profile)

    }

    // 

    // console.log(profile)

}
// for (j = 0; j < arr.length; j++) {
//     profile['firstName'] = arr[j][0];
//     profile['lastName'] = arr[j][1];
//     profile['gender'] = arr[j][2];
//     profile['age'] = 2019 - arr[j][3];
// }
// TEST CASES
//fungsi ini akan menampilkan object literal yang memiliki property firstName, lastName, gender dan age.
// Nilai age didapatkan dari tahun sekarang dikurang tahun lahir.
// Jika tahun lahir tidak diisi atau tahun lahir lebih besar dibandingkan tahun sekarang maka age akan berisi 'Invalid Birth Year'n 
changeMe([
    ['Christ', 'Evans', 'Male', 1982],
    ['Robert', 'Downey', 'Male']
]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""