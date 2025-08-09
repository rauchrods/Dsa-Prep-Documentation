# Check for Perfect Number

### Difficulty: `Easy`

### **Practice Links:**
- **[GeeksforGeeks - Perfect Numbers](https://www.geeksforgeeks.org/problems/perfect-numbers3207/1)**
- **[LeetCode - Perfect Number](https://leetcode.com/problems/perfect-number/description/)**

## Problem Statement

You are given an integer **n**. You need to check if the number is a **perfect number** or not. Return **true** if it is a perfect number, otherwise, return **false**.

A **perfect number** is a number whose **proper divisors** (excluding the number itself) add up to the **number itself**.

## Mathematical Definition

A positive integer **n** is perfect if:
**Sum of all proper divisors of n = n**

Where **proper divisors** are all positive divisors of n except n itself.

## Examples

```txt
Example 1:
Input:  n = 6
Output: true
Explanation: Proper divisors of 6 are 1, 2, 3.
             1 + 2 + 3 = 6.

Example 2:
Input:  n = 4
Output: false
Explanation: Proper divisors of 4 are 1, 2.
             1 + 2 = 3 ≠ 4.

Example 3:
Input:  n = 28
Output: true
Explanation: Proper divisors of 28 are 1, 2, 4, 7, 14.
             1 + 2 + 4 + 7 + 14 = 28.

Example 4:
Input:  n = 1
Output: false
Explanation: 1 has no proper divisors (proper divisors exclude the number itself).

Example 5:
Input:  n = 496
Output: true
Explanation: Proper divisors of 496 are 1, 2, 4, 8, 16, 31, 62, 124, 248.
             Sum = 496.
```

## Constraints

- 1 ≤ n ≤ 10^8
- n is a positive integer

## Known Perfect Numbers

The first few perfect numbers are:
- **6** = 1 + 2 + 3
- **28** = 1 + 2 + 4 + 7 + 14  
- **496** = 1 + 2 + 4 + 8 + 16 + 31 + 62 + 124 + 248
- **8128** = Sum of its proper divisors
- **33550336** = Sum of its proper divisors

Perfect numbers are extremely rare!

## Key Concepts

- **Proper Divisors:** All positive divisors except the number itself
- **Divisor Finding:** Check if a number divides evenly (remainder = 0)
- **Sum Accumulation:** Add all found proper divisors
- **Optimization:** Use square root property to find divisors efficiently

---

## Approach 1: Brute Force Solution

### Algorithm / Intuition

The straightforward approach is to:
1. **Check all numbers from 1 to n-1** to find divisors
2. **Sum all proper divisors** found
3. **Compare sum with original number**

### Core Logic:
- Iterate through all numbers from 1 to n-1
- For each number i, check if `n % i == 0` (i is a divisor)
- If i is a divisor, add it to the sum
- Finally, check if sum equals n

### Step-by-Step Algorithm:
1. Initialize `sum = 0` to accumulate divisor sum
2. Loop from `i = 1` to `i = n-1` (proper divisors only)
3. For each i, check if `n % i == 0`
4. If true, add i to sum
5. After loop, return `sum == n`

### DryRun Example (Brute Force):

Input: n = 6

```
Initial: n = 6, sum = 0

i = 1: 6 % 1 = 0 → 1 is divisor → sum = 0 + 1 = 1
i = 2: 6 % 2 = 0 → 2 is divisor → sum = 1 + 2 = 3  
i = 3: 6 % 3 = 0 → 3 is divisor → sum = 3 + 3 = 6
i = 4: 6 % 4 = 2 → not divisor
i = 5: 6 % 5 = 1 → not divisor

Final: sum = 6, n = 6
sum == n → true (6 is perfect)
```

### Brute Force Code Solutions:

#### Java

```java
class Solution {
    public boolean isPerfect(int n) {
        // Initialize sum to accumulate proper divisors
        int sum = 0;
        
        // Check all numbers from 1 to n-1 for divisors
        for (int i = 1; i < n; i++) {
            // If i divides n evenly, it's a proper divisor
            if (n % i == 0) {
                sum += i;  // Add divisor to sum
            }
        }
        
        // Check if sum of proper divisors equals the number
        return sum == n;
    }
}
```

#### JavaScript

```javascript
class Solution {
    isPerfect(n) {
        // Initialize sum to accumulate proper divisors
        let sum = 0;
        
        // Check all numbers from 1 to n-1 for divisors
        for (let i = 1; i < n; i++) {
            // If i divides n evenly, it's a proper divisor
            if (n % i == 0) {
                sum += i;  // Add divisor to sum
            }
        }
        
        // Check if sum of proper divisors equals the number
        return sum == n;
    }
}
```

#### Python

```python
class Solution:
    def isPerfect(self, n):
        # Initialize sum to accumulate proper divisors
        sum = 0
        
        # Check all numbers from 1 to n-1 for divisors using range(1, n)
        for i in range(1, n):
            # If i divides n evenly, it's a proper divisor
            if n % i == 0:
                sum += i  # Add divisor to sum
        
        # Check if sum of proper divisors equals the number
        return sum == n
```

### Brute Force Complexity:
- **Time Complexity:** O(n) - check all numbers from 1 to n-1
- **Space Complexity:** O(1) - constant extra space

---

## Approach 2: Optimized Solution

### Algorithm / Intuition

The key insight is that **divisors come in pairs**:
- If `i` is a divisor of `n`, then `n/i` is also a divisor
- We only need to check up to `√n` to find all divisor pairs
- This reduces time complexity from O(n) to O(√n)

### Core Logic:
- Check divisors only up to √n
- For each divisor i found, also consider n/i
- Be careful not to double-count when i = n/i (perfect square case)
- Exclude n itself from the sum (proper divisors only)

### Divisor Pairing Example:
```
For n = 28:
i = 1: divisors 1 and 28/1 = 28 → add 1 (exclude 28)
i = 2: divisors 2 and 28/2 = 14 → add both 2 and 14
i = 4: divisors 4 and 28/4 = 7 → add both 4 and 7
i = 7: already covered by i = 4

Proper divisors: 1, 2, 4, 7, 14
Sum: 1 + 2 + 4 + 7 + 14 = 28 ✓
```

### Step-by-Step Algorithm:
1. Handle edge case: if n = 1, return false (no proper divisors)
2. Initialize `sum = 0`
3. Loop from `i = 1` to `i < √n`
4. For each divisor i:
   - Add i to sum
   - If n/i ≠ n and i ≠ n/i, also add n/i to sum
5. Return `sum == n`

### DryRun Example (Optimized):

Input: n = 28

```
Initial: n = 28, sum = 0, √28 ≈ 5.29

i = 1: 28 % 1 = 0 → divisor found
- Add i = 1 → sum = 1
- n/i = 28, but 28 = n, so don't add → sum = 1

i = 2: 28 % 2 = 0 → divisor found  
- Add i = 2 → sum = 1 + 2 = 3
- n/i = 14, 14 ≠ 28 and 2 ≠ 14 → add 14 → sum = 3 + 14 = 17

i = 3: 28 % 3 = 1 → not divisor

i = 4: 28 % 4 = 0 → divisor found
- Add i = 4 → sum = 17 + 4 = 21  
- n/i = 7, 7 ≠ 28 and 4 ≠ 7 → add 7 → sum = 21 + 7 = 28

i = 5: 5 ≥ √28, loop ends

Final: sum = 28, n = 28
sum == n → true (28 is perfect)
```

### Optimized Code Solutions:

#### Java

```java
class Solution {
    public boolean isPerfect(int n) {
        // Edge case: 1 has no proper divisors
        if (n == 1) return false;
        
        // Initialize sum to accumulate proper divisors
        int sum = 0;
        
        // Check divisors only up to √n for efficiency
        for (int i = 1; i < Math.sqrt(n); i++) {
            // If i divides n evenly, it's a divisor
            if (n % i == 0) {
                // Add the smaller divisor i
                sum += i;
                
                // Add the paired divisor n/i, but avoid double-counting and exclude n itself
                if (n / i != n && i != n / i) {
                    sum = sum + (n / i);
                }
            }
        }
        
        // Check if sum of proper divisors equals the number
        return sum == n;
    }
}
```

#### JavaScript

```javascript
class Solution {
    isPerfect(n) {
        // Edge case: 1 has no proper divisors
        if (n == 1) return false;
        
        // Initialize sum to accumulate proper divisors
        let sum = 0;
        
        // Check divisors only up to √n for efficiency
        for (let i = 1; i < Math.sqrt(n); i++) {
            // If i divides n evenly, it's a divisor
            if (n % i == 0) {
                // Add the smaller divisor i
                sum += i;
                
                // Add the paired divisor n/i, but avoid double-counting and exclude n itself
                if (n / i != n && i != n / i) {
                    sum = sum + n / i;
                }
            }
        }
        
        // Check if sum of proper divisors equals the number
        return sum == n;
    }
}
```

#### Python

```python
import math

class Solution:
    def isPerfect(self, n):
        # Edge case: 1 has no proper divisors
        if n == 1:
            return False
        
        # Initialize sum to accumulate proper divisors
        sum = 0
        
        # Check divisors only up to √n for efficiency (range goes up to int(√n))
        for i in range(1, int(math.sqrt(n)) + 1):
            # If i divides n evenly, it's a divisor
            if n % i == 0:
                # Add the smaller divisor i
                sum += i
                
                # Add the paired divisor n//i, but avoid double-counting and exclude n itself
                if n // i != n and i != n // i:
                    sum = sum + (n // i)
        
        # Check if sum of proper divisors equals the number
        return sum == n
```

### Optimized Complexity:
- **Time Complexity:** O(√n) - check divisors only up to square root
- **Space Complexity:** O(1) - constant extra space

---

## Complexity Analysis Summary

| Approach      | Time Complexity | Space Complexity | Best For           |
|---------------|-----------------|------------------|--------------------|
| Brute Force   | O(n)            | O(1)             | Small numbers      |
| Optimized     | O(√n)           | O(1)             | Large numbers      |

---

## Edge Cases to Consider

1. **n = 1:** No proper divisors → false
2. **n = 2:** Proper divisor: 1, sum = 1 ≠ 2 → false  
3. **Prime Numbers:** Only proper divisor is 1 → sum = 1 ≠ n → false
4. **Perfect Squares:** Be careful not to double-count √n when i = √n
5. **Large Perfect Numbers:** 496, 8128, etc.

## Detailed Edge Case Analysis

```java
// Edge cases with step-by-step analysis
Input: 1  → Output: false (no proper divisors by definition)
Input: 2  → Output: false (proper divisors: 1, sum = 1 ≠ 2)
Input: 6  → Output: true  (proper divisors: 1,2,3, sum = 6)
Input: 12 → Output: false (proper divisors: 1,2,3,4,6, sum = 16 ≠ 12)
Input: 28 → Output: true  (proper divisors: 1,2,4,7,14, sum = 28)
```

---

## Test Cases

```java
public void testPerfectNumber() {
    Solution sol = new Solution();
    
    // Edge cases
    assert sol.isPerfect(1) == false;      // No proper divisors
    assert sol.isPerfect(2) == false;      // Prime number
    
    // Perfect numbers
    assert sol.isPerfect(6) == true;       // First perfect number
    assert sol.isPerfect(28) == true;      // Second perfect number
    assert sol.isPerfect(496) == true;     // Third perfect number
    assert sol.isPerfect(8128) == true;    // Fourth perfect number
    
    // Non-perfect numbers
    assert sol.isPerfect(4) == false;      // sum = 1+2 = 3
    assert sol.isPerfect(12) == false;     // sum = 1+2+3+4+6 = 16
    assert sol.isPerfect(100) == false;    // Not perfect
    
    // Larger numbers
    assert sol.isPerfect(33550336) == true; // Fifth perfect number
}
```

---

## Step-by-Step Visualization

### Brute Force Example: n = 6

```
Check all numbers 1 to 5:
i=1: 6%1=0 ✓ → sum = 0+1 = 1
i=2: 6%2=0 ✓ → sum = 1+2 = 3  
i=3: 6%3=0 ✓ → sum = 3+3 = 6
i=4: 6%4=2 ✗ → skip
i=5: 6%5=1 ✗ → skip
Result: sum=6, n=6 → true
```

### Optimized Example: n = 6

```
Check numbers 1 to √6 ≈ 2.45:
i=1: 6%1=0 ✓ → add 1, check 6/1=6 (=n, skip) → sum = 1
i=2: 6%2=0 ✓ → add 2, check 6/2=3 (≠n, ≠2, add) → sum = 1+2+3 = 6
Result: sum=6, n=6 → true
```

---

## Mathematical Properties

### 1. Perfect Number Theorem
- **Euclid-Euler Theorem:** All even perfect numbers have the form 2^(p-1) × (2^p - 1) where 2^p - 1 is prime
- **Unknown:** Whether odd perfect numbers exist (major unsolved problem)

### 2. Perfect Number Characteristics
- All known perfect numbers are even
- Perfect numbers end in 6 or 28 (except 6 itself)
- Extremely rare: only 51 perfect numbers known as of 2018

### 3. Related Concepts
- **Abundant Numbers:** Sum of proper divisors > n
- **Deficient Numbers:** Sum of proper divisors < n
- **Amicable Numbers:** Pairs where each equals sum of other's proper divisors

---

## Common Mistakes to Avoid

1. **Including n in sum:** Perfect numbers use *proper* divisors (excluding n itself)
2. **Double-counting in optimization:** When i = n/i, don't add the same divisor twice
3. **Wrong square root handling:** Use `i < √n`, not `i <= √n` to avoid edge cases
4. **Integer division errors:** In Python, use `//` for integer division
5. **Forgetting edge case:** n = 1 has no proper divisors

---

## Optimization Techniques

### 1. Early Termination

```java
// If sum already exceeds n, it can't be perfect
if (sum > n) return false;
```

### 2. Mathematical Shortcuts

```java
// Check if n is of the form 2^(p-1) × (2^p - 1)
// This covers all known even perfect numbers
```

### 3. Precomputed Perfect Numbers

```java
// For contest/interview scenarios
private static final Set<Integer> PERFECT_NUMBERS = 
    Set.of(6, 28, 496, 8128, 33550336);

public boolean isPerfect(int n) {
    return PERFECT_NUMBERS.contains(n);
}
```

---

## Performance Comparison

### Time Complexity Comparison:
```
For n = 1,000,000:
- Brute Force: 1,000,000 operations
- Optimized: ~1,000 operations (√1,000,000 = 1,000)
- Speedup: 1000x faster!
```

---

## Key Learning Points

1. **Divisor Properties:** Understanding how divisors come in pairs
2. **Square Root Optimization:** Fundamental technique for divisor problems
3. **Edge Case Handling:** Proper divisors exclude the number itself
4. **Mathematical Definitions:** Converting number theory concepts to code
5. **Algorithm Optimization:** Trading slight complexity for major performance gains

---

## Related Problems

1. **Sum of Divisors:** Calculate sum of all divisors (including n)
2. **Count Divisors:** Count total number of divisors
3. **Abundant Numbers:** Check if sum of proper divisors > n
4. **Amicable Numbers:** Find pairs of numbers that are "friends"
5. **Deficient Numbers:** Check if sum of proper divisors < n
6. **Aliquot Sequences:** Iterative sum of proper divisors

---

## Real-World Applications

1. **Number Theory Research:** Study of perfect and related number types
2. **Mathematical Education:** Teaching divisibility and number properties
3. **Algorithm Design:** Demonstrating optimization techniques
4. **Recreational Mathematics:** Puzzles and mathematical curiosities
5. **Computer Science:** Understanding time complexity trade-offs

---

## Follow-up Questions

1. How would you find all perfect numbers up to a given limit?
2. Can you modify this to find abundant or deficient numbers?
3. How would you handle very large numbers efficiently?
4. What's the relationship between perfect numbers and Mersenne primes?
5. How would you implement this using only recursion?

---

## Summary

The perfect number problem demonstrates:

- **Mathematical property verification** through computational methods
- **Algorithm optimization** using mathematical insights (divisor pairing)
- **Edge case handling** in number theory problems
- **Trade-offs between simplicity and efficiency**

**Brute Force:** O(n) time, simple but slow  
**Optimized:** O(√n) time, more complex but much faster  
**Key Insight:** Divisors come in pairs, so we only need to check up to √n

This problem serves as an excellent introduction to divisor-based algorithms and demonstrates how mathematical insights can lead to significant performance improvements. The optimization from O(n) to O(√n) is a fundamental technique used in many number theory problems.