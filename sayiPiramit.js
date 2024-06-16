function sayiPyramid(rows) {
    let num = 1
    for (let i = 0; i < rows; i++) {
        let row = ""
        for (let j = 0; j < rows - i - 1; j++) {
            row += " "
        }
        for (let k = 0; k < i; k++) {
            row += num + " ";   
            num++

        }
        console.log(row)
    }
    }
sayiPyramid(5)


