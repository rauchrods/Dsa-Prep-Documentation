# Count of Prime Numbers till N

### Difficulty: `Easy`

### **Practice Links:**
- **[LeetCode - Count Primes](https://leetcode.com/problems/count-primes/)**

## Problem Statement

You are given an integer **n**. You need to find out the number of prime numbers in the range **[1, n]** (inclusive). Return the **number of prime numbers** in the range.

A **prime number** is a number which has **no divisors except 1 and itself**.

## Mathematical Definition

A positive integer **n** is prime if:
- **n > 1**
- **n has exactly two positive divisors: 1 and n**

The task is to count how many such numbers exist in the range [1, n].

## Examples

```txt
Example 1:
Input:  n = 6
Output: 3
Explanation: Prime numbers in the range [1, 6] are 2, 3, 5.

Example 2:
Input:  n = 10
Output: 4
Explanation: Prime numbers in the range [1, 10] are 2, 3, 5, 7.

Example 3:
Input:  n = 20
Output: 8
Explanation: Prime numbers in the range [1, 20] are 2, 3, 5, 7, 11, 13, 17, 19.

Example 4:
Input:  n = 1
Output: 0
Explanation: 1 is not a prime number, so count is 0.

Example 5:
Input:  n = 2
Output: 1
Explanation: Only 2 is prime in the range [1, 2].
```

## Constraints

- 1 ≤ n ≤ 5 × 10^6
- n is a positive integer

## Known Prime Counts

Some known prime counts for reference:
- **π(10) = 4** (primes: 2, 3, 5, 7)
- **π(100) = 25** 
- **π(1000) = 168**
- **π(10000) = 1229**

Where π(n) represents the prime counting function.

## Key Concepts

- **Prime Counting Function:** π(n) = number of primes ≤ n
- **Primality Testing:** Checking if individual numbers are prime
- **Batch Processing:** Counting multiple primes efficiently
- **Optimization:** Using mathematical properties to reduce computation

---

## Approach 1: Brute Force Solution

### Algorithm / Intuition

The straightforward approach is to:
1. **Iterate through all numbers from 1 to n**
2. **Check each number for primality** using basic prime checking
3. **Count all prime numbers** found

### Core Logic:
- Loop through all numbers from 1 to n
- For each number, use the basic O(k) prime checking algorithm
- Count how many numbers return true for the prime check
- Return the total count

### Step-by-Step Algorithm:
1. Initialize `count = 0` to track prime numbers
2. Loop from `i = 1` to `i = n` (inclusive)
3. For each i, call `isPrime(i)`
4. If `isPrime(i)` returns true, increment count
5. Return the final count

### DryRun Example (Brute Force):

Input: n = 10

```
Initial: n = 10, count = 0

i = 1: isPrime(1) = false → count = 0
i = 2: isPrime(2) = true  → count = 1
i = 3: isPrime(3) = true  → count = 2
i = 4: isPrime(4) = false → count = 2
i = 5: isPrime(5) = true  → count = 3
i = 6: isPrime(6) = false → count = 3
i = 7: isPrime(7) = true  → count = 4
i = 8: isPrime(8) = false → count = 4
i = 9: isPrime(9) = false → count = 4
i = 10: isPrime(10) = false → count = 4

Final: count = 4
Prime numbers found: 2, 3, 5, 7
```

### Brute Force Code Solutions:

#### Java

```java
class Solution {
    public int primeUptoN(int n) {
        // Initialize counter for prime numbers
        int count = 0;
        
        // Check each number from 1 to n for primality
        for (int i = 1; i <= n; i++) {
            // If current number is prime, increment count
            if (isPrime(i)) count++;
        }
        
        // Return total count of prime numbers
        return count;
    }
    
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
    primeUptoN(n) {
        // Initialize counter for prime numbers
        let count = 0;
        
        // Check each number from 1 to n for primality
        for (let i = 1; i <= n; i++) {
            // If current number is prime, increment count
            if (this.isPrime(i)) count++;
        }
        
        // Return total count of prime numbers
        return count;
    }
    
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
import math

class Solution:
    def primeUptoN(self, n):
        # Initialize counter for prime numbers
        count = 0
        
        # Check each number from 1 to n for primality using range(1, n+1)
        for i in range(1, n + 1):
            # If current number is prime, increment count
            if self.isPrime(i):
                count += 1
        
        # Return total count of prime numbers
        return count
    
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
- **Time Complexity:** O(n²) - for each number up to n, check all numbers up to it
- **Space Complexity:** O(1) - constant extra space

---

## Approach 2: Optimized Prime Checking

### Algorithm / Intuition

We can optimize the prime checking function using the **square root optimization**:
- Instead of checking all numbers up to n-1, only check up to √n
- This reduces the inner loop complexity from O(k) to O(√k)
- Overall complexity improves from O(n²) to O(n√n)

### Core Logic:
- Use the same outer loop to iterate through all numbers
- Optimize the `isPrime()` function to only check divisors up to √n
- This gives significant performance improvement for larger numbers

### Mathematical Reasoning:
```
For checking if n is prime:
If n has a divisor d > √n, then n/d < √n
So we only need to check divisors up to √n
```

### Step-by-Step Algorithm:
1. Initialize `count = 0`
2. Loop from `i = 1` to `i = n`
3. For each i, call optimized `isPrime(i)` (O(√i) instead of O(i))
4. If prime, increment count
5. Return count

### DryRun Example (Optimized):

Input: n = 10

```
Initial: n = 10, count = 0

i = 1: isPrime(1) = false (edge case) → count = 0
i = 2: isPrime(2) = true (no divisors to check) → count = 1
i = 3: isPrime(3) = true (no divisors to check) → count = 2
i = 4: isPrime(4) = false (√4=2, 4%2=0) → count = 2
i = 5: isPrime(5) = true (√5≈2.2, check 2: 5%2≠0) → count = 3
i = 6: isPrime(6) = false (√6≈2.4, check 2: 6%2=0) → count = 3
i = 7: isPrime(7) = true (√7≈2.6, check 2: 7%2≠0) → count = 4
i = 8: isPrime(8) = false (√8≈2.8, check 2: 8%2=0) → count = 4
i = 9: isPrime(9) = false (√9=3, check 2,3: 9%3=0) → count = 4
i = 10: isPrime(10) = false (√10≈3.1, check 2: 10%2=0) → count = 4

Final: count = 4
```

### Optimized Code Solutions:

#### Java

```java
class Solution {
    public int primeUptoN(int n) {
        // Initialize counter for prime numbers
        int count = 0;
        
        // Check each number from 1 to n for primality
        for (int i = 1; i <= n; i++) {
            // If current number is prime, increment count
            if (isPrime(i)) count++;
        }
        
        // Return total count of prime numbers
        return count;
    }
    
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
    primeUptoN(n) {
        // Initialize counter for prime numbers
        let count = 0;
        
        // Check each number from 1 to n for primality
        for (let i = 1; i <= n; i++) {
            // If current number is prime, increment count
            if (this.isPrime(i)) count++;
        }
        
        // Return total count of prime numbers
        return count;
    }
    
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
    def primeUptoN(self, n):
        # Initialize counter for prime numbers
        count = 0
        
        # Check each number from 1 to n for primality using range(1, n+1)
        for i in range(1, n + 1):
            # If current number is prime, increment count
            if self.isPrime(i):
                count += 1
        
        # Return total count of prime numbers
        return count
    
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
- **Time Complexity:** O(n√n) - for each number up to n, check up to √n
- **Space Complexity:** O(1) - constant extra space

---

## Approach 3: Sieve of Eratosthenes (Most Efficient)

### Algorithm / Intuition

The **Sieve of Eratosthenes** is the most efficient algorithm for finding all primes up to n:
- Create a boolean array to mark numbers as prime/composite
- Start with 2, mark all its multiples as composite
- Move to the next unmarked number, repeat the process
- Count remaining unmarked numbers

### Core Logic:
- Initialize boolean array where `isPrime[i] = true` means i is prime
- Mark 0 and 1 as non-prime
- For each prime p, mark all multiples of p as composite
- Count remaining primes

### Step-by-Step Algorithm:
1. Create boolean array `isPrime[n+1]`, initialize all as true
2. Set `isPrime[0] = isPrime[1] = false`
3. For i = 2 to √n:
   - If `isPrime[i]` is true:
     - Mark all multiples of i as false
4. Count all indices where `isPrime[i]` is true

### Sieve Code Example:

```java
class Solution {
    public int primeUptoN(int n) {
        if (n < 2) return 0;
        
        // Create boolean array to mark primes
        boolean[] isPrime = new boolean[n + 1];
        Arrays.fill(isPrime, true);
        
        // 0 and 1 are not prime
        isPrime[0] = isPrime[1] = false;
        
        // Sieve of Eratosthenes
        for (int i = 2; i * i <= n; i++) {
            if (isPrime[i]) {
                // Mark all multiples of i as composite
                for (int j = i * i; j <= n; j += i) {
                    isPrime[j] = false;
                }
            }
        }
        
        // Count primes
        int count = 0;
        for (int i = 2; i <= n; i++) {
            if (isPrime[i]) count++;
        }
        
        return count;
    }
}
```

### Sieve Complexity:
- **Time Complexity:** O(n log log n) - much more efficient than previous approaches
- **Space Complexity:** O(n) - boolean array of size n

---

## Complexity Analysis Summary

| Approach                    | Time Complexity | Space Complexity | Best For              |
|----------------------------|-----------------|------------------|-----------------------|
| Brute Force                | O(n²)           | O(1)             | Very small n (< 100)  |
| Optimized Prime Check      | O(n√n)          | O(1)             | Medium n (< 10^4)     |
| Sieve of Eratosthenes      | O(n log log n)  | O(n)             | Large n (≥ 10^4)      |

---

## Edge Cases to Consider

1. **n = 1:** No primes in range [1,1], return 0
2. **n = 2:** Only 2 is prime, return 1  
3. **n < 1:** Invalid input (based on constraints)
4. **Large n:** Use Sieve for optimal performance
5. **Memory constraints:** Consider space-time trade-offs

## Detailed Edge Case Analysis

```java
// Edge cases with step-by-step analysis
Input: 1  → Output: 0 (no primes in [1,1])
Input: 2  → Output: 1 (only 2 is prime)
Input: 3  → Output: 2 (primes: 2, 3)
Input: 4  → Output: 2 (primes: 2, 3)
Input: 5  → Output: 3 (primes: 2, 3, 5)
Input: 10 → Output: 4 (primes: 2, 3, 5, 7)
```

---

## Test Cases

```java
public void testPrimeCount() {
    Solution sol = new Solution();
    
    // Edge cases
    assert sol.primeUptoN(1) == 0;       // No primes
    assert sol.primeUptoN(2) == 1;       // Only 2
    
    // Small numbers
    assert sol.primeUptoN(3) == 2;       // 2, 3
    assert sol.primeUptoN(5) == 3;       // 2, 3, 5
    assert sol.primeUptoN(6) == 3;       // 2, 3, 5
    assert sol.primeUptoN(10) == 4;      // 2, 3, 5, 7
    
    // Larger numbers
    assert sol.primeUptoN(20) == 8;      // 2,3,5,7,11,13,17,19
    assert sol.primeUptoN(100) == 25;    // Known result
    assert sol.primeUptoN(1000) == 168;  // Known result
}
```

---

## Performance Analysis

### Execution Time Comparison:

```
For n = 10,000:
- Brute Force: ~50,000,000 operations
- Optimized: ~316,000 operations  
- Sieve: ~10,000 operations
```

### When to Use Each Approach:

1. **Brute Force:** Only for very small n (< 100) or when space is critical
2. **Optimized:** Good balance for medium n (100 - 10,000)
3. **Sieve:** Best for large n (> 10,000) when space allows

---

## Step-by-Step Visualization

### Optimized Approach: n = 6

```
Check numbers 1 through 6:

i=1: isPrime(1) → false (edge case) → count = 0
i=2: isPrime(2) → check up to √2≈1.4 → no checks needed → true → count = 1
i=3: isPrime(3) → check up to √3≈1.7 → no checks needed → true → count = 2  
i=4: isPrime(4) → check up to √4=2 → 4%2=0 → false → count = 2
i=5: isPrime(5) → check up to √5≈2.2 → 5%2≠0 → true → count = 3
i=6: isPrime(6) → check up to √6≈2.4 → 6%2=0 → false → count = 3

Result: 3 primes found (2, 3, 5)
```

---

## Mathematical Properties

### 1. Prime Number Theorem
- **Asymptotic Density:** π(n) ≈ n/ln(n) for large n
- **Growth Rate:** Primes become less dense as numbers increase
- **Distribution:** No simple formula for exact count

### 2. Prime Gaps
- **Twin Primes:** Primes differing by 2 (3,5), (5,7), (11,13)
- **Prime Gaps:** Gaps between consecutive primes grow larger
- **Bertrand's Postulate:** Always a prime between n and 2n for n > 1

### 3. Computational Limits
- **Memory:** Sieve needs O(n) space
- **Time:** Even optimized approaches become slow for very large n
- **Approximations:** For very large n, use approximation formulas

---

## Common Mistakes to Avoid

1. **Off-by-one errors:** Ensure range is inclusive [1, n]
2. **Edge case n=1:** Remember to return 0
3. **Efficiency choice:** Use appropriate algorithm for input size
4. **Integer overflow:** Be careful with large numbers
5. **Memory limits:** Sieve may not fit in memory for very large n

---

## Optimization Techniques

### 1. Early Termination in Sieve

```java
for (int i = 2; i * i <= n; i++) {
    // Only need to check up to √n
    if (isPrime[i]) {
        for (int j = i * i; j <= n; j += i) {
            isPrime[j] = false;
        }
    }
}
```

### 2. Skip Even Numbers

```java
// After handling 2, only check odd numbers
for (int i = 3; i <= n; i += 2) {
    if (isPrime(i)) count++;
}
```

### 3. Segmented Sieve

```java
// For very large n, divide into segments
// Process each segment with regular sieve
// Useful when n is too large for single array
```

---

## Real-World Applications

1. **Cryptography:** RSA key generation requires large prime counts
2. **Hash Functions:** Prime numbers in hash table sizing
3. **Random Number Generation:** Prime-based pseudorandom algorithms
4. **Mathematical Research:** Number theory and prime distribution studies
5. **Algorithm Analysis:** Complexity analysis of prime-related algorithms
6. **Computer Security:** Prime numbers in security protocols

---

## Related Problems

1. **Nth Prime Number:** Find the nth prime number
2. **Prime Factorization:** Find all prime factors of a number
3. **Goldbach Conjecture:** Express even numbers as sum of two primes
4. **Twin Primes:** Find all twin prime pairs up to n
5. **Prime Gaps:** Analyze gaps between consecutive primes
6. **Segmented Sieve:** Handle very large ranges efficiently

---

## Follow-up Questions

1. How would you handle very large n (beyond memory limits)?
2. Can you modify this to find the sum of all primes up to n?
3. How would you implement a segmented sieve for huge ranges?
4. What's the space-time trade-off between different approaches?
5. How would you parallelize the prime counting algorithm?

---

## Advanced Topics

### 1. Segmented Sieve
- **Purpose:** Handle very large n that don't fit in memory
- **Method:** Divide range into segments, process each segment
- **Complexity:** Same time, reduced space

### 2. Prime Number Theorem Applications
- **Approximation:** π(n) ≈ n/ln(n) for quick estimates
- **Error Bounds:** More precise approximations exist
- **Practical Use:** When exact count isn't needed

### 3. Parallel Prime Counting
- **Thread Safety:** Divide work among multiple cores
- **Load Balancing:** Distribute ranges efficiently
- **Synchronization:** Combine results from different threads

---

## Summary

The prime counting problem demonstrates:

- **Algorithm progression** from naive to highly optimized approaches
- **Space-time trade-offs** between different solutions
- **Mathematical optimization** using number theory insights
- **Practical considerations** for different input sizes

**Key Approaches:**
1. **Brute Force:** O(n²) - Simple but inefficient
2. **Optimized:** O(n√n) - Better for medium inputs  
3. **Sieve:** O(n log log n) - Best for large inputs

**Algorithm Selection:**
- Use **optimized** approach for general cases and space constraints
- Use **Sieve of Eratosthenes** for large n when space allows
- Consider **segmented sieve** for extremely large n

This problem serves as an excellent introduction to prime-related algorithms and demonstrates how mathematical insights and algorithmic techniques can dramatically improve performance. The progression from O(n²) to O(n log log n) showcases the power of specialized algorithms for mathematical problems.