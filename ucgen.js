function ucgen(rows) {
    for (let i = 0; i < rows; i++) {
        // burda i setri nomresidir 0 dan baslayar rows qeder dongu eder ve yeni bir setir yaradar
        let row = ""
        for (let j = 0; j < i; j++) {
            // burda j her setire dogru sayda ulduz qoyar 
            // meselen i=1 oldugda j=0 olur yeni yalnizca 1 ulduz qoyar,i=2olduqda 
            //  j=0 ve 1 olar ve 2 ci setrire 2 ulduz qoyar 
            row += "*"
        }
        console.log(row)
    }
}
ucgen(15)