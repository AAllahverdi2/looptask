function karakterPr(rows) {
    const herf = 'ABCDEFGHJKZXNM';

    for (let i = 0; i < rows; i++) {
        let row = '';

        for (let j = 0; j < rows - i - 1; j++) {
            row += ' ';
        }

        for (let j = 0; j <= i; j++) {
            row += herf[j];
        }

        for (let j = i - 1; j >= 0; j--) {
            row += herf[j];
        }

        console.log(row);
    }
}

karakterPr(15);
