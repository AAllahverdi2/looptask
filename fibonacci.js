// fibonoccide gelen deyer ozunden evvelki 2 deyerin cemine beraber olamldir
function fibonacci(eded) {
    let fib = [0, 1]
    // burda baslangic deyer 0 ve 1 vermisem(fibonoccinin ilk elementleri) onun ucun for dingusun o dan deyil uje 2 den baslatmsam ve verdiyim ededin qeder donmesini demisem
    for (let i = 2; i < eded; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
        // burda is deyerin ozunnen evvel 2 sinin cemine beraber olmasini demisem
    }
    return fib
}
console.log(fibonacci(10))