# LCM of Two Numbers

### Difficulty: `Easy`

### **Practice Links:**

- **[GeeksforGeeks - LCM and GCD](https://www.geeksforgeeks.org/problems/lcm-and-gcd4516/1)**

## Problem Statement

You are given two integers **n1** and **n2**. You need to find the **Lowest Common Multiple (LCM)** of the two given numbers. Return the **LCM of the two numbers**.

The **Lowest Common Multiple (LCM)** of two integers is the **lowest positive integer that is divisible by both** the integers.

## Mathematical Definition

The LCM of two integers a and b is the smallest positive integer m such that:

- **a divides m** (m % a = 0)
- **b divides m** (m % b = 0)
- **m is the minimum** among all such common multiples

**Notation:** LCM(a, b) or lcm(a, b)

## Examples

```txt
Example 1:
Input:  n1 = 4, n2 = 6
Output: 12
Explanation: 4 × 3 = 12, 6 × 2 = 12.
             12 is the lowest integer that is divisible by both 4 and 6.

Example 2:
Input:  n1 = 3, n2 = 5
Output: 15
Explanation: 3 × 5 = 15, 5 × 3 = 15.
             15 is the lowest integer that is divisible by both 3 and 5.

Example 3:
Input:  n1 = 4, n2 = 12
Output: 12
Explanation: Multiples of 4: 4, 8, 12, 16...
             Multiples of 12: 12, 24, 36...
             Lowest common multiple = 12.

Example 4:
Input:  n1 = 7, n2 = 14
Output: 14
Explanation: Since 14 is a multiple of 7, LCM = 14.

Example 5:
Input:  n1 = 9, n2 = 12
Output: 36
Explanation: Multiples of 9: 9, 18, 27, 36...
             Multiples of 12: 12, 24, 36...
             Lowest common multiple = 36.
```

## Constraints

- 1 ≤ n1, n2 ≤ 10^9
- n1 and n2 are positive integers

## Key Mathematical Properties

### Important LCM Properties:

- **LCM(a, b) = LCM(b, a)** (Commutative property)
- **LCM(a, b) ≥ max(a, b)** (LCM is at least as large as the larger number)
- **LCM(a, b) × GCD(a, b) = a × b** (Fundamental relationship)
- **LCM(a, ka) = ka** where k is a positive integer and a divides ka

### Special Cases:

- **Coprime Numbers:** LCM(a, b) = a × b when GCD(a, b) = 1
- **Multiple Relationship:** If a divides b, then LCM(a, b) = b

## Key Concepts

- **Common Multiples:** Numbers that are multiples of both inputs
- **GCD-LCM Relationship:** LCM can be calculated using GCD efficiently
- **Brute Force:** Check multiples starting from max(a, b)
- **Optimization:** Use mathematical relationship to avoid iteration

---

## Approach 1: Brute Force Solution

### Algorithm / Intuition

The straightforward approach is to:

1. **Start from the larger number** (since LCM ≥ max(a, b))
2. **Check each number incrementally** to see if it's divisible by both
3. **Return the first number** that satisfies the condition

### Core Logic:

- Initialize starting point as max(n1, n2)
- Increment this value until we find a number divisible by both n1 and n2
- The first such number is the LCM

### Step-by-Step Algorithm:

1. Initialize `max = max(n1, n2)`
2. Start infinite loop:
3. Check if `max % n1 == 0 && max % n2 == 0`
4. If true, return `max` (found LCM)
5. If false, increment `max` and continue

### DryRun Example (Brute Force):

Input: n1 = 6, n2 = 8

```
Initial: n1 = 6, n2 = 8, max = 8

max = 8:  8 % 6 = 2 ≠ 0 → not divisible by 6 → continue
max = 9:  9 % 6 = 3 ≠ 0 → not divisible by 6 → continue
max = 10: 10 % 6 = 4 ≠ 0 → not divisible by 6 → continue
max = 11: 11 % 6 = 5 ≠ 0 → not divisible by 6 → continue
max = 12: 12 % 6 = 0 ✓ && 12 % 8 = 4 ≠ 0 → not divisible by 8 → continue
max = 13: 13 % 6 = 1 ≠ 0 → not divisible by 6 → continue
max = 14: 14 % 6 = 2 ≠ 0 → not divisible by 6 → continue
max = 15: 15 % 6 = 3 ≠ 0 → not divisible by 6 → continue
max = 16: 16 % 6 = 4 ≠ 0 → not divisible by 6 → continue
max = 17: 17 % 6 = 5 ≠ 0 → not divisible by 6 → continue
max = 18: 18 % 6 = 0 ✓ && 18 % 8 = 2 ≠ 0 → not divisible by 8 → continue
max = 19: 19 % 6 = 1 ≠ 0 → not divisible by 6 → continue
max = 20: 20 % 6 = 2 ≠ 0 → not divisible by 6 → continue
max = 21: 21 % 6 = 3 ≠ 0 → not divisible by 6 → continue
max = 22: 22 % 6 = 4 ≠ 0 → not divisible by 6 → continue
max = 23: 23 % 6 = 5 ≠ 0 → not divisible by 6 → continue
max = 24: 24 % 6 = 0 ✓ && 24 % 8 = 0 ✓ → Found LCM!

Final: LCM = 24

Verification:
- Multiples of 6: 6, 12, 18, 24...
- Multiples of 8: 8, 16, 24...
- First common multiple = 24 ✓
```

### Brute Force Code Solutions:

#### Java

```java
class Solution {
    public int LCM(int n1, int n2) {
        // Start from the larger number since LCM ≥ max(n1, n2)
        int max = Math.max(n1, n2);

        // Keep checking numbers starting from max until we find LCM
        while (true) {
            // Check if current number is divisible by both n1 and n2
            if (max % n1 == 0 && max % n2 == 0) {
                // Found the LCM - first number divisible by both
                return max;
            }
            // If not divisible by both, try the next number
            max++;
        }
    }
}
```

#### JavaScript

```javascript
class Solution {
  LCM(n1, n2) {
    // Start from the larger number since LCM ≥ max(n1, n2)
    let max = Math.max(n1, n2);

    // Keep checking numbers starting from max until we find LCM
    while (true) {
      // Check if current number is divisible by both n1 and n2
      if (max % n1 == 0 && max % n2 == 0) {
        // Found the LCM - first number divisible by both
        return max;
      }
      // If not divisible by both, try the next number
      max++;
    }
  }
}
```

#### Python

```python
class Solution:
    def LCM(self, n1, n2):
        # Start from the larger number since LCM ≥ max(n1, n2)
        maxNum = max(n1, n2)

        # Keep checking numbers starting from maxNum until we find LCM
        while True:
            # Check if current number is divisible by both n1 and n2
            if (maxNum % n1 == 0 and maxNum % n2 == 0):
                # Found the LCM - first number divisible by both
                return maxNum
            # If not divisible by both, try the next number
            maxNum += 1
```

### Brute Force Complexity:

- **Time Complexity:** O(LCM(n1, n2) - max(n1, n2)) - could be very large for some inputs
- **Space Complexity:** O(1) - constant extra space

---

## Approach 2: Optimal Solution Using GCD

### Algorithm / Intuition

The key mathematical insight is the **fundamental relationship between LCM and GCD**:

- **LCM(a, b) × GCD(a, b) = a × b**
- Therefore: **LCM(a, b) = (a × b) / GCD(a, b)**

This allows us to calculate LCM efficiently by first finding the GCD.

### Mathematical Foundation:

**Why this formula works:**

- Every common multiple of a and b must be a multiple of LCM(a, b)
- The product a × b contains all prime factors of both numbers
- GCD(a, b) represents the "overlap" of common prime factors
- Dividing by GCD removes the double-counted common factors
- Result is the smallest number containing all prime factors exactly once

### Core Logic:

1. Find GCD(n1, n2) using Euclidean algorithm
2. Calculate LCM using the formula: LCM = (n1 × n2) / GCD
3. Return the result

### Step-by-Step Algorithm:

1. Implement GCD function using Euclidean algorithm
2. Calculate `gcd = GCD(n1, n2)`
3. Calculate `lcm = (n1 × n2) / gcd`
4. Return lcm

### DryRun Example (Optimal):

Input: n1 = 12, n2 = 18

```
Step 1: Find GCD(12, 18)
Using Euclidean Algorithm:
- GCD(12, 18) → GCD(12, 18-12) → GCD(12, 6)
- GCD(12, 6) → GCD(12-6, 6) → GCD(6, 6)
- GCD(6, 6) → 6

So GCD(12, 18) = 6

Step 2: Calculate LCM using formula
LCM = (n1 × n2) / GCD
LCM = (12 × 18) / 6
LCM = 216 / 6
LCM = 36

Final: LCM = 36

Verification:
- Multiples of 12: 12, 24, 36, 48...
- Multiples of 18: 18, 36, 54...
- First common multiple = 36 ✓
- Check formula: 36 × 6 = 216 = 12 × 18 ✓
```

### Optimal Code Solutions:

#### Java

```java
class Solution {
    public int LCM(int n1, int n2) {
        // Calculate LCM using the formula: LCM(a,b) = (a × b) / GCD(a,b)
        return (n1 * n2) / GCD(n1, n2);
    }

    // Helper function to calculate GCD using Euclidean algorithm
    private int GCD(int a, int b) {
        // Continue until one number becomes 0
        while (b != 0) {
            int temp = b;
            b = a % b;  // Replace b with remainder
            a = temp;   // Replace a with old b
        }
        return a;  // When b becomes 0, a is the GCD
    }
}
```

#### JavaScript

```javascript
class Solution {
  LCM(n1, n2) {
    // Calculate LCM using the formula: LCM(a,b) = (a × b) / GCD(a,b)
    return (n1 * n2) / this.GCD(n1, n2);
  }

  // Helper function to calculate GCD using Euclidean algorithm
  GCD(a, b) {
    // Continue until one number becomes 0
    while (b != 0) {
      let temp = b;
      b = a % b; // Replace b with remainder
      a = temp; // Replace a with old b
    }
    return a; // When b becomes 0, a is the GCD
  }
}
```

#### Python

```python
import math

class Solution:
    def LCM(self, n1, n2):
        # Calculate LCM using the formula: LCM(a,b) = (a × b) / GCD(a,b)
        return (n1 * n2) // self.GCD(n1, n2)

    # Helper function to calculate GCD using Euclidean algorithm
    def GCD(self, a, b):
        # Continue until one number becomes 0
        while b != 0:
            temp = b
            b = a % b  # Replace b with remainder
            a = temp   # Replace a with old b
        return a  # When b becomes 0, a is the GCD

# Alternative using built-in function:
class Solution:
    def LCM(self, n1, n2):
        # Use Python's built-in math.gcd function
        return (n1 * n2) // math.gcd(n1, n2)
```

### Optimal Complexity:

- **Time Complexity:** O(log(min(n1, n2))) - time to calculate GCD using Euclidean algorithm
- **Space Complexity:** O(1) - constant extra space

---

## Complexity Analysis Summary

| Approach            | Time Complexity     | Space Complexity | Best For             |
| ------------------- | ------------------- | ---------------- | -------------------- |
| Brute Force         | O(LCM - max(a, b))  | O(1)             | Educational purposes |
| Optimal (Using GCD) | O(log(min(n1, n2))) | O(1)             | All practical cases  |

---

## Edge Cases to Consider

1. **Equal Numbers:** LCM(a, a) = a
2. **One Divides Other:** LCM(a, ka) = ka where k > 0
3. **Coprime Numbers:** LCM(a, b) = a × b when GCD(a, b) = 1
4. **Large Numbers:** Risk of integer overflow in multiplication
5. **One Number is 1:** LCM(a, 1) = a

## Detailed Edge Case Analysis

```java
// Edge cases with step-by-step analysis
LCM(6, 6)   → 6    (identical numbers)
LCM(3, 9)   → 9    (one divides the other)
LCM(7, 11)  → 77   (coprime numbers: 7 × 11)
LCM(12, 1)  → 12   (any number with 1)
LCM(4, 6)   → 12   (standard case)
```

---

## Test Cases

```java
public void testLCM() {
    Solution sol = new Solution();

    // Basic cases from examples
    assert sol.LCM(4, 6) == 12;      // Example 1
    assert sol.LCM(3, 5) == 15;      // Example 2 - coprime
    assert sol.LCM(4, 12) == 12;     // Example 3 - one divides other

    // Edge cases
    assert sol.LCM(6, 6) == 6;       // Identical numbers
    assert sol.LCM(7, 14) == 14;     // One divides other
    assert sol.LCM(5, 1) == 5;       // With 1

    // Larger numbers
    assert sol.LCM(12, 18) == 36;    // Standard case
    assert sol.LCM(15, 25) == 75;    // Common factors
    assert sol.LCM(17, 19) == 323;   // Two primes
}
```

---

## Step-by-Step Visualization

### Brute Force: LCM(4, 6)

```
Start from max(4, 6) = 6:
max = 6:  6 % 4 = 2 ≠ 0 → not divisible by 4 → continue
max = 7:  7 % 4 = 3 ≠ 0 → not divisible by 4 → continue
max = 8:  8 % 4 = 0 ✓ but 8 % 6 = 2 ≠ 0 → continue
max = 9:  9 % 4 = 1 ≠ 0 → not divisible by 4 → continue
max = 10: 10 % 4 = 2 ≠ 0 → not divisible by 4 → continue
max = 11: 11 % 4 = 3 ≠ 0 → not divisible by 4 → continue
max = 12: 12 % 4 = 0 ✓ && 12 % 6 = 0 ✓ → Found LCM = 12
```

### Optimal: LCM(4, 6)

```
Step 1: Find GCD(4, 6)
- GCD(4, 6) → GCD(4, 2) → GCD(0, 2) → 2

Step 2: Apply formula
LCM = (4 × 6) / 2 = 24 / 2 = 12

Result: LCM = 12 (much faster!)
```

---

## Mathematical Properties and Theorems

### 1. Fundamental Relationship

**LCM(a, b) × GCD(a, b) = a × b**

This is the most important property and forms the basis of the optimal algorithm.

### 2. Distributive Property

**LCM(ka, kb) = k × LCM(a, b)** where k > 0

### 3. Associative Property

**LCM(LCM(a, b), c) = LCM(a, LCM(b, c))**

This allows extension to multiple numbers.

### 4. Relationship with Prime Factorization

If a = p₁^α₁ × p₂^α₂ × ... × pₖ^αₖ and b = p₁^β₁ × p₂^β₂ × ... × pₖ^βₖ, then:
**LCM(a, b) = p₁^max(α₁,β₁) × p₂^max(α₂,β₂) × ... × pₖ^max(αₖ,βₖ)**

---

## Common Mistakes to Avoid

1. **Integer Overflow:** Be careful with large numbers when calculating a × b
2. **Division by Zero:** Ensure GCD is never zero (shouldn't happen with positive inputs)
3. **Incorrect Formula:** Remember it's (a × b) / GCD, not a × b × GCD
4. **Wrong Data Types:** Use appropriate data types for large results
5. **Edge Case Handling:** Consider cases like identical numbers and multiples

---

## Optimization Techniques

### 1. Overflow Prevention

```java
// Avoid overflow by dividing first
public long LCM(int a, int b) {
    return ((long) a / GCD(a, b)) * b;  // Divide first, then multiply
}
```

### 2. Using Built-in Functions

```python
import math

def LCM(a, b):
    return (a * b) // math.gcd(a, b)  # Use built-in GCD
```

### 3. Early Termination

```java
// If one divides the other, return immediately
if (a % b == 0) return a;
if (b % a == 0) return b;
```

### 4. Handling Multiple Numbers

```java
public int LCM_Multiple(int[] nums) {
    int result = nums[0];
    for (int i = 1; i < nums.length; i++) {
        result = LCM(result, nums[i]);
    }
    return result;
}
```

---

## Performance Analysis

### Time Complexity Comparison:

```
For LCM(1000000, 999999):
- Brute Force: Could check up to 999999000000 numbers (extremely slow)
- Optimal: ~45 operations (log₂(999999) ≈ 20 for GCD calculation)
```

### Space Efficiency:

Both approaches use O(1) space, but the optimal approach is dramatically faster.

---

## Related Problems

1. **GCD and LCM Together:** Many problems ask for both values
2. **LCM of Array:** Extending to multiple numbers
3. **Fraction Operations:** Using LCM for adding fractions
4. **Modular Arithmetic:** LCM in solving system of congruences
5. **Time Synchronization:** Real-world scheduling problems
6. **Number Theory:** Problems involving divisibility and multiples

---

## Advanced Topics

### 1. LCM for Multiple Numbers

```java
public int LCM_Array(int[] arr) {
    int lcm = arr[0];
    for (int i = 1; i < arr.length; i++) {
        lcm = LCM(lcm, arr[i]);
    }
    return lcm;
}
```

### 2. Big Integer Implementation

```java
import java.math.BigInteger;

public BigInteger LCM(BigInteger a, BigInteger b) {
    return a.multiply(b).divide(a.gcd(b));
}
```

### 3. Modular LCM

For very large numbers, sometimes we only need LCM modulo some number:

```java
public long LCM_Mod(long a, long b, long mod) {
    long gcd = GCD(a, b);
    return ((a / gcd) % mod * (b % mod)) % mod;
}
```

---

## Summary

The LCM problem demonstrates:

- **Mathematical relationships** that can dramatically improve algorithm efficiency
- **Trade-offs** between simple brute force and mathematical optimization
- **Practical applications** of number theory in computer science
- **The power of GCD-LCM relationship** in solving multiple problems

**Key Approaches:**

1. **Brute Force:** O(LCM) - Simple but potentially very slow
2. **Optimal (GCD-based):** O(log(min(a,b))) - Efficient and practical

**Algorithm Selection:**

- **Always use the optimal approach** for practical applications
- **Brute force** only for educational understanding
- **Consider overflow** for large numbers

**Key Formula:** **LCM(a, b) = (a × b) / GCD(a, b)**

This problem beautifully illustrates how mathematical insights can transform an exponential-time algorithm into a logarithmic-time solution. The relationship between LCM and GCD is fundamental in number theory and has applications across many areas of mathematics and computer science.

The optimal solution showcases the elegance of mathematical algorithms where understanding the underlying mathematical properties leads to dramatically more efficient solutions.
