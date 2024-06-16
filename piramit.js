function pyramid(rows) {
    for (let i = 0; i < rows; i++) {
        // burda i setri nomresidir 0 dan baslayar rows qeder dongu eder ve yeni bir setir yaradar

        let row = ""
        for (let j = 0; j < rows - i - 1; j++) {
            row += " "

            // burda bosluqlarin sayisini tapar meselen 3 setirden ibaret piramitde  1 ulduz lazm olduqda mene bosluq
            //  sayisi 2 dur yeni i=0 olduqda bosluq sayisi 4 olsun deye 3-0-1=2 eder ve ya 3 ulduz olduqda bosluq sayisinin 1 olmasi ucun
            // 3-1-1=1 eder    

        }
        for (let k = 0; k < i * 2 + 1; k++) {
            row += "*"

            // burda ise her setirde uzduzlarin sayisini tapmaq uvun meselen 0 ci setirde 1 ulduz lazimdi deye   0*2+1=1 
            // ile yazmisam ve ya 1 ci setirde 3 ulduz oldugu ucun 1*2+1=3 eder
        }
        console.log(row)
    }

}
pyramid(5)

//   *
//  ***
// *****