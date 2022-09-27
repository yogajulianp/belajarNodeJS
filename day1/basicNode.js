//basic Nodejs programing
//nodejs --> javaScript --> turunan keluarga c
// 1. variable/type
    var x = 10;
    var nama = "indonesia"
    var y = 5.4

    //JS 2015
    let m = 4;
    let n = 5.8
    let s = "Hello";

    const k = 2;
    const l = "Hello"

    console.log(x,nama,y)
   
// 2. operator
    var hasil = x + 10;
    x = x - 7;
    console.log(hasil, x)

    let hasil2 = m + 10;
    m = m - 7;
    console.log(hasil2, m)

    const hasil3 = k + 10;
    // k = k -7 ; // ini error karena k const
    console.log(hasil3, k)

    // + - / * % ++ -- aritmatika operator
    var kk = 10;
    kk++ // kk = kk + 1
    kk +=5 ; // kk = kk +5

    // comparison operators
    // = assigment
    // == === != !== >  <  >=  <=
    var a = 5;
    var b = 7;
    console.log(a == b);
    console.log(a != b);
    console.log(a > b);
    console.log(a >= b);
    console.log(a >= b);
    console.log(a < b);
    console.log(a <= b);

    //logical 
    // AND --> && OR --> || NOT --!
    console.log( ( a == b ) && (a < b));
    console.log( ( a== b) || (a<b));
    console.log( !(a == b));

// 3. conditional statement
    let nilai = 10;
    if (nilai > 5) {
        console.log("nilai > 5")
    }else {
        console.log("bukan nilai > 5")
    }

    // ? statement ? true : false
    let hasil4 = nilai > 6 ? "betul nilai > 6" : "bukan nilai > 6"
    console.log(hasil4)


// 4. looping
    //classical for
    // for(init; kondisi; inc/dec)
    for (let index=0; index < 5; index++) {
        console.log(index)
    }

    //while , ngecek di depan
    let p = 10;
    while (p < 15) {
        console.log(p);
        p++
    }

    p = 10;
    do {
        console.log(p)
        p++;
    } while (p < 15)

    var process = require('process');
    process.stdout.write("hello \n")

// 5. break & continue
    for (let index = 0; index < 10; index++) {
        if (index == 6) {
            continue;
        }
        if (index == 9) {
            break;
        }
        console.log(index)
    }

// 6. function
//untuk bisa digunakan kembali

    function say() {
        console.log("say() was called")
    }
    say()

    function jumlah(a,b) {
        let c = a + b
        return c;
    }

    let hasil5 = jumlah (20, 5)
    console.log(hasil5)



// 7. array
    let users = ["user1","user2", "user3", "user4" ]
    console.log(users)

// 8. object

