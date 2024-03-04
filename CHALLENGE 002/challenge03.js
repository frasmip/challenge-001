//Verificar si es primo
const esPrimo = (num) => {
    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return num > 1
}

const printNumber = () => {
    for (i = 1; i <= 100; i++) {
        console.log(i)
    }
}

