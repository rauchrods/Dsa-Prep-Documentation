# GCD of Two Numbers

### Difficulty: `Easy`

### **Practice Links:**
- **[GeeksforGeeks - GCD of Two Numbers](https://www.geeksforgeeks.org/problems/gcd-of-two-numbers3459/1)**
- **[TakeUForward - Find GCD of Two Numbers](https://takeuforward.org/data-structure/find-gcd-of-two-numbers/)**
- **[HackerEarth - GCD Problem](https://www.hackerearth.com/problem/algorithm/gcd-17-8064d146-635f817b/)**

## Problem Statement

You are given two integers **n1** and **n2**. You need to find the **Greatest Common Divisor (GCD)** of the two given numbers. Return the **GCD of the two numbers**.

The **Greatest Common Divisor (GCD)** of two integers is the **largest positive integer that divides both** of the integers.

## Mathematical Definition

The GCD of two integers a and b is the largest positive integer d such that:
- **d divides a** (a % d = 0)
- **d divides b** (b % d = 0)
- **d is the maximum** among all such common divisors

**Notation:** GCD(a, b) or gcd(a, b)

## Examples

```txt
Example 1:
Input:  n1 = 4, n2 = 6
Output: 2
Explanation: Divisors of n1 = 1, 2, 4. Divisors of n2 = 1, 2, 3, 6.
             Greatest Common divisor = 2.

Example 2:
Input:  n1 = 9, n2 = 8
Output: 1
Explanation: Divisors of n1 = 1, 3, 9. Divisors of n2 = 1, 2, 4, 8.
             Greatest Common divisor = 1.

Example 3:
Input:  n1 = 6, n2 = 12
Output: 6
Explanation: Divisors of n1 = 1, 2, 3, 6. Divisors of n2 = 1, 2, 3, 4, 6, 12.
             Greatest Common divisor = 6.

Example 4:
Input:  n1 = 15, n2 = 25
Output: 5
Explanation: Divisors of n1 = 1, 3, 5, 15. Divisors of n2 = 1, 5, 25.
             Greatest Common divisor = 5.

Example 5:
Input:  n1 = 17, n2 = 19
Output: 1
Explanation: Both are prime numbers, so GCD = 1 (coprime numbers).
```

## Constraints

- 1 ≤ n1, n2 ≤ 10^9
- n1 and n2 are positive integers

## Key Mathematical Properties

### Important GCD Properties:
- **GCD(a, b) = GCD(b, a)** (Commutative property)
- **GCD(a, 0) = a** (Any number with 0)
- **GCD(a, b) ≤ min(a, b)** (GCD cannot exceed smaller number)
- **GCD(a, b) × LCM(a, b) = a × b** (Relationship with LCM)

### Special Cases:
- **Coprime Numbers:** GCD(a, b) = 1 when numbers share no common factors
- **Multiple Relationship:** If a divides b, then GCD(a, b) = a

## Key Concepts

- **Common Divisors:** Numbers that divide both inputs evenly
- **Euclidean Algorithm:** Efficient method using modular arithmetic
- **Subtraction Method:** Alternative approach using repeated subtraction
- **Optimization:** Reducing time complexity from O(min(a,b)) to O(log(min(a,b)))

---

## Approach 1: Brute Force Solution

### Algorithm / Intuition

The straightforward approach is to:
1. **Find all divisors** of both numbers up to their minimum
2. **Identify common divisors** among them
3. **Return the largest** common divisor found

### Core Logic:
- Iterate through all numbers from 1 to min(n1, n2)
- For each number i, check if it divides both n1 and n2
- Keep track of the largest such divisor
- Return the maximum common divisor found

### Step-by-Step Algorithm:
1. Initialize `gcd = 0` and `min = min(n1, n2)`
2. Loop from `i = 1` to `i = min` (inclusive)
3. For each i, check if `n1 % i == 0 && n2 % i == 0`
4. If true, update `gcd = i` (keep the largest)
5. Return the final `gcd` value

### DryRun Example (Brute Force):

Input: n1 = 12, n2 = 18

```
Initial: n1 = 12, n2 = 18, min = 12, gcd = 0

i = 1: 12 % 1 = 0 && 18 % 1 = 0 ✓ → gcd = 1
i = 2: 12 % 2 = 0 && 18 % 2 = 0 ✓ → gcd = 2
i = 3: 12 % 3 = 0 && 18 % 3 = 0 ✓ → gcd = 3
i = 4: 12 % 4 = 0 && 18 % 4 = 2 ✗ → no update
i = 5: 12 % 5 = 2 && 18 % 5 = 3 ✗ → no update
i = 6: 12 % 6 = 0 && 18 % 6 = 0 ✓ → gcd = 6
i = 7: 12 % 7 = 5 && 18 % 7 = 4 ✗ → no update
i = 8: 12 % 8 = 4 && 18 % 8 = 2 ✗ → no update
i = 9: 12 % 9 = 3 && 18 % 9 = 0 ✗ → no update
i = 10: 12 % 10 = 2 && 18 % 10 = 8 ✗ → no update
i = 11: 12 % 11 = 1 && 18 % 11 = 7 ✗ → no update
i = 12: 12 % 12 = 0 && 18 % 12 = 6 ✗ → no update

Final: gcd = 6
Common divisors found: 1, 2, 3, 6
Greatest = 6
```

### Brute Force Code Solutions:

#### Java

```java
class Solution {
    public int GCD(int n1, int n2) {
        // Find the minimum of the two numbers as upper bound for checking
        int min = Math.min(n1, n2);
        
        // Initialize GCD to 0
        int gcd = 0;
        
        // Check all numbers from 1 to min for common divisors
        for (int i = 1; i <= min; i++) {
            // If i divides both n1 and n2, it's a common divisor
            if (n1 % i == 0 && n2 % i == 0) {
                // Update gcd to the current common divisor (keeping the largest)
                gcd = i;
            }
        }
        
        // Return the greatest common divisor found
        return gcd;
    }
}
```

#### JavaScript

```javascript
class Solution {
    GCD(n1, n2) {
        // Find the minimum of the two numbers as upper bound for checking
        let min = Math.min(n1, n2);
        
        // Initialize GCD to 0
        let gcd = 0;
        
        // Check all numbers from 1 to min for common divisors
        for (let i = 1; i <= min; i++) {
            // If i divides both n1 and n2, it's a common divisor
            if (n1 % i == 0 && n2 % i == 0) {
                // Update gcd to the current common divisor (keeping the largest)
                gcd = i;
            }
        }
        
        // Return the greatest common divisor found
        return gcd;
    }
}
```

#### Python

```python
class Solution:
    def GCD(self, n1, n2):
        # Initialize GCD to 0
        gcd = 0
        
        # Find the minimum of the two numbers as upper bound for checking
        minN = min(n1, n2)
        
        # Check all numbers from 1 to minN for common divisors using range(1, minN+1)
        for i in range(1, minN + 1):
            # If i divides both n1 and n2, it's a common divisor
            if n1 % i == 0 and n2 % i == 0:
                # Update gcd to the current common divisor (keeping the largest)
                gcd = i
        
        # Return the greatest common divisor found
        return gcd
```

### Brute Force Complexity:
- **Time Complexity:** O(min(n1, n2)) - check all numbers up to the smaller number
- **Space Complexity:** O(1) - constant extra space

---

## Approach 2: Euclidean Algorithm (Optimal)

### Algorithm / Intuition

The **Euclidean Algorithm** is based on the key insight:
- **GCD(a, b) = GCD(b, a % b)** when a > b
- This reduces the problem size dramatically in each step
- Continue until one number becomes 0, then the other is the GCD

### Mathematical Foundation:

The algorithm uses the principle:
```
GCD(a, b) = GCD(b, a mod b)
```

**Why this works:**
- Any common divisor of a and b also divides (a - b)
- By repeatedly subtracting the smaller from the larger, we eventually reach the GCD
- Modulo operation is equivalent to repeated subtraction but much faster

### Core Logic (Subtraction Method):
- While both numbers are positive:
  - Subtract the smaller number from the larger one
  - Continue until one becomes 0 or both become equal
- Return the non-zero number

### Step-by-Step Algorithm:
1. While both n1 > 0 and n2 > 0:
2. If n1 > n2: subtract n2 from n1 (n1 = n1 - n2)
3. Else if n2 > n1: subtract n1 from n2 (n2 = n2 - n1)  
4. Else if n1 == n2: return n1 (both are equal, that's the GCD)
5. When one becomes 0, return the maximum of n1 and n2

### DryRun Example (Euclidean Algorithm):

Input: n1 = 48, n2 = 18

```
Initial: n1 = 48, n2 = 18

Step 1: n1 > n2 (48 > 18) → n1 = 48 - 18 = 30 → (30, 18)
Step 2: n1 > n2 (30 > 18) → n1 = 30 - 18 = 12 → (12, 18)
Step 3: n2 > n1 (18 > 12) → n2 = 18 - 12 = 6  → (12, 6)
Step 4: n1 > n2 (12 > 6)  → n1 = 12 - 6 = 6   → (6, 6)
Step 5: n1 == n2 (6 == 6) → return 6

Final: GCD = 6

Verification: 48 = 6 × 8, 18 = 6 × 3
Common factors of 8 and 3 = 1, so GCD(48,18) = 6 ✓
```

### Euclidean Algorithm Code Solutions:

#### Java

```java
class Solution {
    public int GCD(int n1, int n2) {
        // Continue until one of the numbers becomes 0
        while (n1 > 0 && n2 > 0) {
            // If n1 is greater, subtract n2 from n1
            if (n1 > n2) {
                n1 = n1 - n2;
            } 
            // If n2 is greater, subtract n1 from n2
            else if (n2 > n1) {
                n2 = n2 - n1;
            } 
            // If both are equal, that's our GCD
            else return n1;
        }
        
        // Return the non-zero number (one becomes 0, other is GCD)
        return Math.max(n1, n2);
    }
}
```

#### JavaScript

```javascript
class Solution {
    GCD(n1, n2) {
        // Continue until one of the numbers becomes 0
        while (n1 > 0 && n2 > 0) {
            // If n1 is greater, subtract n2 from n1
            if (n1 > n2) {
                n1 = n1 - n2;
            } 
            // If n2 is greater, subtract n1 from n2
            else if (n2 > n1) {
                n2 = n2 - n1;
            } 
            // If both are equal, that's our GCD
            else return n1;
        }
        
        // Return the non-zero number (one becomes 0, other is GCD)
        return Math.max(n1, n2);
    }
}
```

#### Python

```python
class Solution:
    def GCD(self, n1, n2):
        # Continue until one of the numbers becomes 0
        while n1 > 0 and n2 > 0:
            # If n1 is greater, subtract n2 from n1
            if n1 > n2:
                n1 = n1 - n2
            # If n2 is greater, subtract n1 from n2
            elif n2 > n1:
                n2 = n2 - n1
            # If both are equal, that's our GCD
            else:
                return n1
        
        # Return the non-zero number (one becomes 0, other is GCD)
        return max(n1, n2)
```

### Euclidean Algorithm Complexity:
- **Time Complexity:** O(log(min(n1, n2))) - logarithmic reduction in problem size
- **Space Complexity:** O(1) - constant extra space

---

## Approach 3: Optimized Euclidean (Modulo Method)

### Algorithm / Intuition

Instead of repeated subtraction, we can use the **modulo operation**:
- **GCD(a, b) = GCD(b, a % b)**
- This is much faster than subtraction for large numbers
- Base case: **GCD(a, 0) = a**

### Optimized Recursive Implementation:

```java
class Solution {
    public int GCD(int n1, int n2) {
        // Base case: if one number is 0, return the other
        if (n2 == 0) return n1;
        
        // Recursive case: GCD(a, b) = GCD(b, a % b)
        return GCD(n2, n1 % n2);
    }
}
```

### Optimized Iterative Implementation:

```java
class Solution {
    public int GCD(int n1, int n2) {
        // Continue until one number becomes 0
        while (n2 != 0) {
            int temp = n2;
            n2 = n1 % n2;  // Replace n2 with remainder
            n1 = temp;      // Replace n1 with old n2
        }
        return n1;  // When n2 becomes 0, n1 is the GCD
    }
}
```

### Modulo Method Complexity:
- **Time Complexity:** O(log(min(n1, n2))) - same as subtraction method but much faster in practice
- **Space Complexity:** O(1) - constant space for iterative, O(log(min(n1, n2))) for recursive due to call stack

---

## Complexity Analysis Summary

| Approach                    | Time Complexity      | Space Complexity | Best For              |
|----------------------------|----------------------|------------------|-----------------------|
| Brute Force                | O(min(n1, n2))       | O(1)             | Very small numbers    |
| Euclidean (Subtraction)    | O(log(min(n1, n2)))  | O(1)             | General use           |
| Euclidean (Modulo)         | O(log(min(n1, n2)))  | O(1)             | Large numbers         |

---

## Edge Cases to Consider

1. **Equal Numbers:** GCD(a, a) = a
2. **One is Multiple of Other:** GCD(a, ka) = a where k is integer
3. **Coprime Numbers:** GCD(a, b) = 1 when no common factors
4. **One Number is 1:** GCD(a, 1) = 1 always
5. **Large Numbers:** Euclidean algorithm handles efficiently

## Detailed Edge Case Analysis

```java
// Edge cases with step-by-step analysis
GCD(12, 12) → 12  (identical numbers)
GCD(15, 5)  → 5   (one divides the other)
GCD(7, 11)  → 1   (coprime - both prime)
GCD(100, 1) → 1   (any number with 1)
GCD(0, 5)   → 5   (zero with any number)
```

---

## Test Cases

```java
public void testGCD() {
    Solution sol = new Solution();
    
    // Basic cases
    assert sol.GCD(4, 6) == 2;       // Example from problem
    assert sol.GCD(9, 8) == 1;       // Coprime numbers
    assert sol.GCD(6, 12) == 6;      // One divides other
    
    // Edge cases
    assert sol.GCD(12, 12) == 12;    // Identical numbers
    assert sol.GCD(17, 19) == 1;     // Two primes
    assert sol.GCD(100, 1) == 1;     // With 1
    
    // Larger numbers
    assert sol.GCD(48, 18) == 6;     // Standard case
    assert sol.GCD(1071, 462) == 21; // Larger example
    assert sol.GCD(270, 192) == 6;   // Another example
}
```

---

## Step-by-Step Visualization

### Brute Force: GCD(12, 8)

```
Check divisors 1 to min(12, 8) = 8:
i=1: 12%1=0 ✓, 8%1=0 ✓ → gcd = 1
i=2: 12%2=0 ✓, 8%2=0 ✓ → gcd = 2  
i=3: 12%3=0 ✓, 8%3=2 ✗ → no update
i=4: 12%4=0 ✓, 8%4=0 ✓ → gcd = 4
i=5: 12%5=2 ✗, 8%5=3 ✗ → no update
i=6: 12%6=0 ✓, 8%6=2 ✗ → no update
i=7: 12%7=5 ✗, 8%7=1 ✗ → no update
i=8: 12%8=4 ✗, 8%8=0 ✓ → no update
Result: GCD = 4
```

### Euclidean Algorithm: GCD(12, 8)

```
Initial: (12, 8)
Step 1: 12 > 8 → 12 - 8 = 4 → (4, 8)
Step 2: 8 > 4 → 8 - 4 = 4 → (4, 4)
Step 3: 4 == 4 → return 4
Result: GCD = 4 (much faster!)
```

---

## Mathematical Properties and Theorems

### 1. Fundamental Properties
- **Commutative:** GCD(a, b) = GCD(b, a)
- **Associative:** GCD(GCD(a, b), c) = GCD(a, GCD(b, c))
- **Distributive:** GCD(ka, kb) = k × GCD(a, b)

### 2. Bézout's Identity
For any integers a and b, there exist integers x and y such that:
**ax + by = GCD(a, b)**

### 3. Relationship with LCM
**GCD(a, b) × LCM(a, b) = a × b**

This can be used to find LCM once GCD is known:
**LCM(a, b) = (a × b) / GCD(a, b)**

---

## Common Mistakes to Avoid

1. **Wrong termination condition:** Ensure proper handling when one number becomes 0
2. **Integer overflow:** Be careful with large numbers in LCM calculations
3. **Negative numbers:** Problem typically assumes positive integers
4. **Edge case handling:** Remember GCD(a, 0) = a
5. **Infinite loops:** Ensure the algorithm always terminates

---

## Optimization Techniques

### 1. Early Termination

```java
// If numbers are coprime, return 1 early
if (gcd == 1) return 1;  // No need to check further
```

### 2. Binary GCD Algorithm (Stein's Algorithm)

```java
// For very large numbers, avoid division
public int binaryGCD(int a, int b) {
    if (a == 0) return b;
    if (b == 0) return a;
    
    // Remove common factors of 2
    int shift = Integer.numberOfTrailingZeros(a | b);
    a >>= Integer.numberOfTrailingZeros(a);
    b >>= Integer.numberOfTrailingZeros(b);
    
    // Continue with odd numbers only
    while (a != b) {
        if (a > b) {
            a = (a - b) >> Integer.numberOfTrailingZeros(a - b);
        } else {
            b = (b - a) >> Integer.numberOfTrailingZeros(b - a);
        }
    }
    
    return a << shift;
}
```

### 3. Memoization for Multiple Queries

```java
// Cache results for repeated GCD calculations
private Map<String, Integer> gcdCache = new HashMap<>();

public int GCD(int a, int b) {
    String key = Math.min(a, b) + "," + Math.max(a, b);
    return gcdCache.computeIfAbsent(key, k -> euclideanGCD(a, b));
}
```

---

## Performance Analysis

### Time Complexity Comparison:

```
For GCD(1000000, 999999):
- Brute Force: ~1,000,000 operations
- Euclidean: ~45 operations (log₂(1000000) ≈ 20)
- Modulo Method: ~20 operations
```

### When to Use Each Approach:

1. **Brute Force:** Educational purposes, very small numbers
2. **Euclidean (Subtraction):** When avoiding division operations
3. **Euclidean (Modulo):** Standard choice for most applications

---

## Real-World Applications

1. **Fraction Simplification:** Reduce fractions to lowest terms
2. **Cryptography:** RSA key generation and modular arithmetic
3. **Computer Graphics:** Pixel grid calculations and scaling
4. **Music Theory:** Finding harmonic relationships between frequencies
5. **Scheduling:** Finding common periods in cyclic processes
6. **Data Structures:** Hash table sizing and load balancing

---

## Related Problems

1. **LCM of Two Numbers:** Using GCD to find Least Common Multiple
2. **GCD of Array:** Extending to multiple numbers
3. **Extended Euclidean Algorithm:** Finding coefficients in Bézout's identity
4. **Coprime Numbers:** Checking if GCD equals 1
5. **Fraction Operations:** Using GCD for addition/subtraction of fractions
6. **Modular Arithmetic:** GCD in solving linear congruences

---

## Follow-up Questions

1. How would you find GCD of multiple numbers efficiently?
2. Can you implement the Extended Euclidean Algorithm?
3. How would you find LCM using the GCD result?
4. What's the relationship between GCD and prime factorization?
5. How would you handle negative numbers?

---

## Advanced Topics

### 1. Extended Euclidean Algorithm
- **Purpose:** Find integers x, y such that ax + by = GCD(a, b)
- **Applications:** Solving linear Diophantine equations
- **Complexity:** Same as regular Euclidean algorithm

### 2. Binary GCD (Stein's Algorithm)
- **Advantage:** Avoids division operations
- **Method:** Uses bit shifts and subtraction only
- **Use Case:** Systems where division is expensive

### 3. Polynomial GCD
- **Extension:** Finding GCD of polynomials
- **Applications:** Computer algebra systems
- **Complexity:** More complex than integer GCD

---

## Summary

The GCD problem demonstrates:

- **Algorithm evolution** from brute force to highly optimized mathematical approaches
- **Mathematical insights** leading to logarithmic time complexity
- **Practical applications** in many areas of computer science and mathematics
- **Trade-offs** between simplicity and efficiency

**Key Approaches:**
1. **Brute Force:** O(min(a,b)) - Simple but slow
2. **Euclidean Algorithm:** O(log(min(a,b))) - Optimal and elegant

**Algorithm Selection:**
- Use **Euclidean Algorithm** for all practical purposes
- Choose **subtraction method** when avoiding division
- Use **modulo method** for fastest performance

This problem serves as an excellent introduction to number theory and demonstrates how ancient mathematical algorithms (Euclidean algorithm dates back to 300 BC) remain relevant and optimal in modern computing. The dramatic improvement from O(n) to O(log n) showcases the power of mathematical insight in algorithm design.