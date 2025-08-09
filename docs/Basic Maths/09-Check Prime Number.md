# Check for Prime Number

### Difficulty: `Easy`

### **Practice Links:**
- **[GeeksforGeeks - Prime Number](https://www.geeksforgeeks.org/problems/prime-number2314/1)**
- **[TakeUForward - Check if a number is Prime or Not](https://takeuforward.org/data-structure/check-if-a-number-is-prime-or-not/)**

## Problem Statement

You are given an integer **n**. You need to check if the number is **prime** or not. Return **true** if it is a prime number, otherwise, return **false**.

A **prime number** is a number which has **no divisors except 1 and itself**.

## Mathematical Definition

A positive integer **n** is prime if:
- **n > 1**
- **n has exactly two positive divisors: 1 and n**

Where a divisor of n is a positive integer that divides n evenly (with remainder 0).

## Examples

```txt
Example 1:
Input:  n = 5
Output: true
Explanation: The only divisors of 5 are 1 and 5. So the number 5 is prime.

Example 2:
Input:  n = 8
Output: false
Explanation: The divisors of 8 are 1, 2, 4, 8, thus it is not a prime number.

Example 3:
Input:  n = 2
Output: true
Explanation: 2 is the smallest prime number with divisors 1 and 2 only.

Example 4:
Input:  n = 1
Output: false
Explanation: By definition, 1 is not considered a prime number.

Example 5:
Input:  n = 17
Output: true
Explanation: 17 has no divisors other than 1 and 17, so it's prime.
```

## Constraints

- 1 ≤ n ≤ 10^9
- n is a positive integer

## Known Prime Numbers

The first few prime numbers are:
- **2** (the only even prime)
- **3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47...**

## Key Concepts

- **Prime Definition:** Only divisible by 1 and itself
- **Composite Numbers:** Non-prime numbers greater than 1
- **Divisibility Testing:** Check if a number divides evenly
- **Optimization:** Use square root property to reduce checks

---

## Approach 1: Brute Force Solution

### Algorithm / Intuition

The straightforward approach is to:
1. **Check all numbers from 2 to n-1** for divisibility
2. **If any number divides n**, it's not prime
3. **If no divisors found**, it's prime

### Core Logic:
- Handle edge case: n = 1 is not prime
- Iterate through all numbers from 2 to n-1
- For each number i, check if `n % i == 0` (i divides n)
- If any i divides n, return false (not prime)
- If no divisors found, return true (prime)

### Step-by-Step Algorithm:
1. If n = 1, return false (special case)
2. Loop from `i = 2` to `i = n-1`
3. For each i, check if `n % i == 0`
4. If true, return false (found divisor)
5. If loop completes, return true (no divisors found)

### DryRun Example (Brute Force):

Input: n = 7

```
Initial: n = 7

Check n = 1: No, n = 7

i = 2: 7 % 2 = 1 → not divisor, continue
i = 3: 7 % 3 = 1 → not divisor, continue  
i = 4: 7 % 4 = 3 → not divisor, continue
i = 5: 7 % 5 = 2 → not divisor, continue
i = 6: 7 % 6 = 1 → not divisor, continue

Loop completed without finding divisors
Result: true (7 is prime)
```

### Brute Force Code Solutions:

#### Java

```java
class Solution {
    public boolean isPrime(int n) {
        // Handle edge case: 1 is not prime by definition
        if (n == 1) return false;
        
        // Check all numbers from 2 to n-1 for divisibility
        for (int i = 2; i < n; i++) {
            // If i divides n evenly, n is not prime
            if (n % i == 0) return false;
        }
        
        // No divisors found, n is prime
        return true;
    }
}
```

#### JavaScript

```javascript
class Solution {
    isPrime(n) {
        // Handle edge case: 1 is not prime by definition
        if (n == 1) return false;
        
        // Check all numbers from 2 to n-1 for divisibility
        for (let i = 2; i < n; i++) {
            // If i divides n evenly, n is not prime
            if (n % i == 0) return false;
        }
        
        // No divisors found, n is prime
        return true;
    }
}
```

#### Python

```python
class Solution:
    def isPrime(self, n):
        # Handle edge case: 1 is not prime by definition
        if n == 1:
            return False
        
        # Check all numbers from 2 to n-1 for divisibility using range(2, n)
        for i in range(2, n):
            # If i divides n evenly, n is not prime
            if n % i == 0:
                return False
        
        # No divisors found, n is prime
        return True
```

### Brute Force Complexity:
- **Time Complexity:** O(n) - check all numbers from 2 to n-1
- **Space Complexity:** O(1) - constant extra space

---

## Approach 2: Optimized Solution

### Algorithm / Intuition

The key insight is that **if n has a divisor greater than √n, it must also have a corresponding divisor less than √n**:
- If `a × b = n` and `a > √n`, then `b < √n`
- We only need to check divisors up to `√n`
- This reduces time complexity from O(n) to O(√n)

### Core Logic:
- Check divisors only up to √n
- If we find any divisor in this range, n is not prime
- If no divisors found up to √n, n is prime

### Mathematical Reasoning:
```
For n = 36:
√36 = 6

Divisor pairs: (1,36), (2,18), (3,12), (4,9), (6,6)
Notice: One number in each pair ≤ 6, other ≥ 6

So checking up to √n is sufficient!
```

### Step-by-Step Algorithm:
1. Handle edge case: if n = 1, return false
2. Loop from `i = 2` to `i ≤ √n`
3. For each i, check if `n % i == 0`
4. If true, return false (found divisor)
5. If loop completes, return true (prime)

### DryRun Example (Optimized):

Input: n = 17

```
Initial: n = 17, √17 ≈ 4.12

Check n = 1: No, n = 17

i = 2: 17 % 2 = 1 → not divisor, continue
i = 3: 17 % 3 = 2 → not divisor, continue  
i = 4: 17 % 4 = 1 → not divisor, continue

i = 5: 5 > √17, loop ends

No divisors found up to √17
Result: true (17 is prime)
```

### Optimized Code Solutions:

#### Java

```java
class Solution {
    public boolean isPrime(int n) {
        // Handle edge case: 1 is not prime by definition
        if (n == 1) return false;
        
        // Check divisors only up to √n for efficiency
        for (int i = 2; i <= Math.sqrt(n); i++) {
            // If i divides n evenly, n is not prime
            if (n % i == 0) return false;
        }
        
        // No divisors found up to √n, n is prime
        return true;
    }
}
```

#### JavaScript

```javascript
class Solution {
    isPrime(n) {
        // Handle edge case: 1 is not prime by definition
        if (n == 1) return false;
        
        // Check divisors only up to √n for efficiency
        for (let i = 2; i <= Math.sqrt(n); i++) {
            // If i divides n evenly, n is not prime
            if (n % i == 0) return false;
        }
        
        // No divisors found up to √n, n is prime
        return true;
    }
}
```

#### Python

```python
import math

class Solution:
    def isPrime(self, n):
        # Handle edge case: 1 is not prime by definition
        if n == 1:
            return False
        
        # Check divisors only up to √n for efficiency using range(2, int(√n)+1)
        for i in range(2, int(math.sqrt(n)) + 1):
            # If i divides n evenly, n is not prime
            if n % i == 0:
                return False
        
        # No divisors found up to √n, n is prime
        return True
```

### Optimized Complexity:
- **Time Complexity:** O(√n) - check divisors only up to square root
- **Space Complexity:** O(1) - constant extra space

---

## Complexity Analysis Summary

| Approach      | Time Complexity | Space Complexity | Best For           |
|---------------|-----------------|------------------|--------------------|
| Brute Force   | O(n)            | O(1)             | Very small numbers |
| Optimized     | O(√n)           | O(1)             | All practical cases|

---

## Edge Cases to Consider

1. **n = 1:** Not prime by mathematical definition
2. **n = 2:** The only even prime number  
3. **n = 3:** Smallest odd prime
4. **Even Numbers > 2:** All are composite (divisible by 2)
5. **Large Primes:** Numbers like 997, 1009, etc.

## Detailed Edge Case Analysis

```java
// Edge cases with step-by-step analysis
Input: 1  → Output: false (not prime by definition)
Input: 2  → Output: true  (only even prime)
Input: 3  → Output: true  (smallest odd prime)
Input: 4  → Output: false (divisible by 2)
Input: 9  → Output: false (divisible by 3, perfect square)
Input: 11 → Output: true  (prime number)
```

---

## Test Cases

```java
public void testPrimeNumber() {
    Solution sol = new Solution();
    
    // Edge cases
    assert sol.isPrime(1) == false;      // Not prime by definition
    assert sol.isPrime(2) == true;       // Only even prime
    
    // Small primes
    assert sol.isPrime(3) == true;       // Smallest odd prime
    assert sol.isPrime(5) == true;       // Prime
    assert sol.isPrime(7) == true;       // Prime
    assert sol.isPrime(11) == true;      // Prime
    
    // Composite numbers
    assert sol.isPrime(4) == false;      // 2×2
    assert sol.isPrime(6) == false;      // 2×3
    assert sol.isPrime(8) == false;      // 2×4
    assert sol.isPrime(9) == false;      // 3×3
    assert sol.isPrime(10) == false;     // 2×5
    
    // Larger numbers
    assert sol.isPrime(97) == true;      // Prime
    assert sol.isPrime(100) == false;    // 10×10
    assert sol.isPrime(101) == true;     // Prime
}
```

---

## Step-by-Step Visualization

### Brute Force Example: n = 11

```
Check all numbers 2 to 10:
i=2: 11%2=1 ≠ 0 → continue
i=3: 11%3=2 ≠ 0 → continue  
i=4: 11%4=3 ≠ 0 → continue
i=5: 11%5=1 ≠ 0 → continue
i=6: 11%6=5 ≠ 0 → continue
i=7: 11%7=4 ≠ 0 → continue
i=8: 11%8=3 ≠ 0 → continue
i=9: 11%9=2 ≠ 0 → continue
i=10: 11%10=1 ≠ 0 → continue
Result: No divisors found → true (prime)
```

### Optimized Example: n = 11

```
Check numbers 2 to √11 ≈ 3.31:
i=2: 11%2=1 ≠ 0 → continue
i=3: 11%3=2 ≠ 0 → continue
i=4: 4 > √11, loop ends
Result: No divisors found → true (prime)
Saved: 7 iterations vs brute force!
```

---

## Mathematical Properties

### 1. Prime Number Theorem
- **Density:** Approximately n/ln(n) primes less than n
- **Distribution:** Primes become sparser as numbers increase
- **Twin Primes:** Prime pairs differing by 2 (e.g., 11,13)

### 2. Prime Characteristics
- All primes > 2 are odd
- All primes > 3 are of the form 6k±1
- No arithmetic progression of primes exists

### 3. Related Concepts
- **Composite Numbers:** Non-prime numbers > 1
- **Goldbach Conjecture:** Every even number > 2 is sum of two primes
- **Mersenne Primes:** Primes of form 2^p - 1

---

## Common Mistakes to Avoid

1. **Forgetting n = 1 case:** 1 is not prime by definition
2. **Wrong loop bounds:** Use `i ≤ √n`, not `i < √n`
3. **Floating point errors:** In some languages, be careful with sqrt()
4. **Performance oversight:** O(n) is too slow for large numbers
5. **Even number check:** All even numbers > 2 are composite

---

## Optimization Techniques

### 1. Early Even Number Check

```java
public boolean isPrime(int n) {
    if (n <= 1) return false;
    if (n == 2) return true;
    if (n % 2 == 0) return false;  // All even numbers > 2 are composite
    
    // Only check odd divisors from 3 onwards
    for (int i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i == 0) return false;
    }
    return true;
}
```

### 2. 6k±1 Optimization

```java
// All primes > 3 are of the form 6k±1
public boolean isPrime(int n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;
    
    for (int i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) return false;
    }
    return true;
}
```

### 3. Precomputed Small Primes

```java
private static final int[] SMALL_PRIMES = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29};

public boolean isPrime(int n) {
    if (n < 2) return false;
    
    // Check against small primes first
    for (int p : SMALL_PRIMES) {
        if (n == p) return true;
        if (n % p == 0) return false;
    }
    
    // Continue with regular algorithm for larger numbers
    for (int i = 31; i <= Math.sqrt(n); i += 2) {
        if (n % i == 0) return false;
    }
    return true;
}
```

---

## Performance Comparison

### Time Complexity Comparison:
```
For n = 1,000,000:
- Brute Force: ~1,000,000 operations
- Optimized: ~1,000 operations (√1,000,000 = 1,000)
- With optimizations: ~500 operations (skip even numbers)
- Speedup: Up to 2000x faster!
```

---

## Key Learning Points

1. **Square Root Optimization:** Fundamental technique for divisor problems
2. **Mathematical Insights:** Understanding prime properties for optimization
3. **Edge Case Handling:** Special cases like 1, 2, and even numbers
4. **Algorithm Trade-offs:** Balancing complexity vs performance
5. **Early Termination:** Stopping as soon as a divisor is found

---

## Related Problems

1. **Count Primes:** Count all primes up to a given number
2. **Sieve of Eratosthenes:** Generate all primes up to n efficiently
3. **Prime Factorization:** Find all prime factors of a number
4. **Next Prime:** Find the smallest prime greater than n
5. **Twin Primes:** Find prime pairs that differ by 2
6. **Goldbach Conjecture:** Express even numbers as sum of two primes

---

## Real-World Applications

1. **Cryptography:** RSA encryption relies on large prime numbers
2. **Hash Functions:** Prime numbers in hash table sizing
3. **Computer Graphics:** Prime numbers in procedural generation
4. **Number Theory:** Research in pure mathematics
5. **Random Number Generation:** Prime-based algorithms
6. **Database Systems:** Prime numbers in indexing strategies

---

## Follow-up Questions

1. How would you find all prime numbers up to a given limit efficiently?
2. Can you modify this to find the largest prime factor of a number?
3. How would you handle very large numbers (beyond int range)?
4. What's the relationship between prime checking and factorization?
5. How would you implement a probabilistic primality test?

---

## Advanced Topics

### 1. Miller-Rabin Primality Test
- **Probabilistic Algorithm:** Much faster for very large numbers
- **Applications:** Used in cryptographic libraries
- **Complexity:** O(k log³ n) where k is number of rounds

### 2. Sieve of Eratosthenes
- **Batch Processing:** Find all primes up to n
- **Time Complexity:** O(n log log n)
- **Space Complexity:** O(n)

### 3. Fermat's Little Theorem
- **Mathematical Property:** If p is prime, then a^(p-1) ≡ 1 (mod p)
- **Primality Testing:** Used in probabilistic algorithms
- **Limitations:** Carmichael numbers are exceptions

---

## Summary

The prime number problem demonstrates:

- **Mathematical property verification** through computational methods
- **Algorithm optimization** using square root insight
- **Edge case handling** in number theory problems
- **Performance trade-offs** between simplicity and efficiency

**Brute Force:** O(n) time, simple but slow for large numbers  
**Optimized:** O(√n) time, much more practical  
**Key Insight:** Only need to check divisors up to √n

This problem serves as an excellent introduction to number theory algorithms and demonstrates how mathematical insights can lead to significant performance improvements. The optimization from O(n) to O(√n) is a fundamental technique used in many mathematical problems involving divisors and factors.