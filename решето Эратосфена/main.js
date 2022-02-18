function num(num) {
    const seive = [];
    const primes = [];

    for (let i = 2; i <= num; i++) {
        if (!seive[i]) {
            primes.push(i);
            for (let j = i * i; j <= num; j += i) {
                seive[j] = true;
            }
        }
    }
    return primes;
}
console.log(num(85));