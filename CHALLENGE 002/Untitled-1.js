const esPrimo = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return num > 1
}

const printNumber = () => {
    for (let i = 1; i <= 100; i++) {
        console.log(i)
    }
}

