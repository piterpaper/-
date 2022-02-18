function num(num) {
    const sieve = [];
    const primes = [];

    for (let i = 2; i <= num; i++) {
        if (!sieve[i]) {
            primes.push(i);
            for (let j = i * i; j <= num; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}
console.log(num(85));
