/**
 *
 * Write a Node.js function isPrime(n) that takes an integer n as an argument and returns true if n is a prime number and false otherwise.
 *
 */
function isPrime(n) {
    for(let i = 2; i < (n/2) + 1; i++) {
        if(n%i === 0) return false
    }

    return true
}
  
console.log(isPrime(10));
console.log(isPrime(43));

for(let i = 1; i<14; i++) {
    console.log(i + " is", isPrime(i) ? "a" : "not a", "prime number")
}