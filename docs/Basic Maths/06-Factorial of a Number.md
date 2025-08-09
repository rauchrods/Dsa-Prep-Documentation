# Factorial of a Given Number

### Difficulty: `Easy`

### **Practice Link: [GeeksforGeeks - Factorial](https://www.geeksforgeeks.org/problems/factorial5739/1)**

## Problem Statement

You are given an integer **n**. Return the value of **n!** or **n factorial**.

**Factorial of a number** is the **product of all positive integers less than or equal to that number**.

## Mathematical Definition

For any non-negative integer n:

- **n! = n × (n-1) × (n-2) × ... × 2 × 1**
- **0! = 1** (by definition)
- **1! = 1**

## Examples

```txt
Example 1:
Input:  n = 2
Output: 2
Explanation: 2! = 1 × 2 = 2.

Example 2:
Input:  n = 0
Output: 1
Explanation: 0! is defined as 1.

Example 3:
Input:  n = 5
Output: 120
Explanation: 5! = 1 × 2 × 3 × 4 × 5 = 120.

Example 4:
Input:  n = 1
Output: 1
Explanation: 1! = 1.

Example 5:
Input:  n = 4
Output: 24
Explanation: 4! = 1 × 2 × 3 × 4 = 24.
```

## Constraints

- 0 ≤ n ≤ 12 (due to integer overflow limitations)
- n is a non-negative integer

## Key Concepts

- **Factorial:** Product of all positive integers from 1 to n
- **Base Case:** 0! = 1 and 1! = 1
- **Multiplicative Accumulation:** Build result by multiplying consecutive integers
- **Integer Overflow:** Large factorials exceed standard integer limits

---

## Algorithm / Intuition

### Approach: Iterative Multiplication

The strategy is to:

1. **Initialize a result variable** to 1 (multiplicative identity)
2. **Multiply the result** by each integer from 1 to n
3. **Accumulate the product** in each iteration
4. **Return the final product**

### Core Logic:

- Start with `result = 1` (since multiplying by 1 doesn't change the value)
- For each number from 1 to n, multiply it with the current result
- This builds the factorial incrementally: 1 → 1×2 → 1×2×3 → 1×2×3×4 → ...

### Mathematical Process:

```
For n = 5:
Start: result = 1
Step 1: result = 1 × 1 = 1
Step 2: result = 1 × 2 = 2
Step 3: result = 2 × 3 = 6
Step 4: result = 6 × 4 = 24
Step 5: result = 24 × 5 = 120
Final: 5! = 120
```

### Step-by-Step Algorithm:

1. Initialize `ans = 1` to store the factorial result
2. Use a loop from `i = 1` to `i = n` (inclusive)
3. In each iteration, multiply `ans` by `i`
4. After the loop, `ans` contains n!
5. Return the result

### Why Start with 1?

- **Multiplicative Identity:** 1 × anything = anything
- **Handles Edge Cases:** When n = 0, loop doesn't execute, returns 1 (correct for 0!)
- **Base for Accumulation:** Provides starting point for multiplication chain

### DryRun Example:

Input: n = 4

```
Initial: n = 4, ans = 1

Iteration 1: i = 1
- ans = ans * i = 1 * 1 = 1

Iteration 2: i = 2
- ans = ans * i = 1 * 2 = 2

Iteration 3: i = 3
- ans = ans * i = 2 * 3 = 6

Iteration 4: i = 4
- ans = ans * i = 6 * 4 = 24

Loop ends as i > n
Answer: ans = 24 (4! = 24)
```

---

## Code Solutions

### Java

```java
class Solution {
    public int factorial(int n) {
        // Initialize result to 1 (multiplicative identity and base case for 0!)
        int ans = 1;

        // Multiply all integers from 1 to n
        for(int i = 1; i <= n; i++) {
            // Accumulate the product: ans = ans * i
            ans = ans * i;
        }

        // Return the final factorial result
        return ans;
    }
}
```

### JavaScript

```javascript
class Solution {
  factorial(n) {
    // Initialize result to 1 (multiplicative identity and base case for 0!)
    let ans = 1;

    // Multiply all integers from 1 to n
    for (let i = 1; i <= n; i++) {
      // Accumulate the product: ans = ans * i
      ans = ans * i;
    }

    // Return the final factorial result
    return ans;
  }
}
```

### Python

```python
class Solution:
    def factorial(self, n):
        # Initialize result to 1 (multiplicative identity and base case for 0!)
        ans = 1

        # Multiply all integers from 1 to n using range(1, n+1)
        for i in range(1, n + 1):
            # Accumulate the product: ans = ans * i
            ans = ans * i

        # Return the final factorial result
        return ans
```

---

## Complexity Analysis

### Time Complexity: O(n)

- We perform exactly n iterations of the loop
- Each iteration does constant time work (one multiplication)
- Total time is proportional to n

### Space Complexity: O(1)

- We use only a constant amount of extra space
- Variables: ans, i (constant space regardless of input size)

---

## Alternative Approaches

### 1. Recursive Approach

```java
// Java
class Solution {
    public int factorial(int n) {
        // Base case: 0! = 1 and 1! = 1
        if (n <= 1) return 1;

        // Recursive case: n! = n × (n-1)!
        return n * factorial(n - 1);
    }
}
```

**Pros:** Mathematical elegance, matches definition  
**Cons:** O(n) space due to recursion stack, potential stack overflow

### 2. Built-in Functions (Language Specific)

```python
# Python
import math

class Solution:
    def factorial(self, n):
        return math.factorial(n)
```

```java
// Java (using streams for educational purposes)
class Solution {
    public int factorial(int n) {
        return java.util.stream.IntStream
            .rangeClosed(1, n)
            .reduce(1, (a, b) -> a * b);
    }
}
```

### 3. While Loop Approach

```java
// Java
class Solution {
    public int factorial(int n) {
        int ans = 1;
        int i = 1;

        while (i <= n) {
            ans *= i;
            i++;
        }

        return ans;
    }
}
```

### 4. Reverse Loop (n to 1)

```java
// Java
class Solution {
    public int factorial(int n) {
        int ans = 1;

        // Loop from n down to 1
        for (int i = n; i >= 1; i--) {
            ans *= i;
        }

        return ans;
    }
}
```

---

## Factorial Values and Integer Limits

### Common Factorial Values:

```
0! = 1
1! = 1
2! = 2
3! = 6
4! = 24
5! = 120
6! = 720
7! = 5,040
8! = 40,320
9! = 362,880
10! = 3,628,800
11! = 39,916,800
12! = 479,001,600
13! = 6,227,020,800 (exceeds 32-bit int)
```

### Integer Overflow Considerations:

- **32-bit int:** Can safely store up to 12! (479,001,600)
- **64-bit long:** Can safely store up to 20!
- **Beyond that:** Need BigInteger or special handling

---

## Edge Cases to Consider

1. **n = 0:** Should return 1 (0! = 1 by definition)
2. **n = 1:** Should return 1 (1! = 1)
3. **Small values (2, 3, 4):** Basic test cases
4. **Boundary value (12):** Largest factorial fitting in 32-bit int
5. **Large values (>12):** Would cause integer overflow

## Detailed Edge Case Analysis

```java
// Edge cases with explanations
Input: 0  → Output: 1   (mathematical definition: 0! = 1)
Input: 1  → Output: 1   (1! = 1)
Input: 2  → Output: 2   (2! = 2×1 = 2)
Input: 5  → Output: 120 (5! = 5×4×3×2×1 = 120)
Input: 12 → Output: 479001600 (largest that fits in 32-bit int)
```

---

## Test Cases

```java
public void testFactorial() {
    Solution sol = new Solution();

    // Edge cases
    assert sol.factorial(0) == 1;          // 0! = 1
    assert sol.factorial(1) == 1;          // 1! = 1

    // Small values
    assert sol.factorial(2) == 2;          // 2! = 2
    assert sol.factorial(3) == 6;          // 3! = 6
    assert sol.factorial(4) == 24;         // 4! = 24
    assert sol.factorial(5) == 120;        // 5! = 120

    // Larger values
    assert sol.factorial(6) == 720;        // 6! = 720
    assert sol.factorial(10) == 3628800;   // 10! = 3,628,800
    assert sol.factorial(12) == 479001600; // 12! = 479,001,600
}
```

---

## Step-by-Step Visualization

### Visual Example: n = 5

```
Step 0: ans = 1 (initial)
Step 1: i=1, ans = 1 * 1 = 1
Step 2: i=2, ans = 1 * 2 = 2
Step 3: i=3, ans = 2 * 3 = 6
Step 4: i=4, ans = 6 * 4 = 24
Step 5: i=5, ans = 24 * 5 = 120

Result: 5! = 120
```

### Visual Example: n = 0

```
Initial: ans = 1
Loop condition: i=1, 1 <= 0? No
Loop doesn't execute
Result: 0! = 1 (correct by definition)
```

---

## Common Mistakes to Avoid

1. **Wrong Initialization:** Starting with `ans = 0` instead of `ans = 1`
2. **Off-by-One Errors:** Using `i < n` instead of `i <= n` in loop condition
3. **Forgetting Edge Cases:** Not handling n = 0 correctly
4. **Integer Overflow:** Not considering that large factorials exceed int limits
5. **Loop Range:** Using wrong range in Python (`range(1, n)` instead of `range(1, n+1)`)

---

## Optimization Techniques

### 1. Early Termination for Zero

```java
class Solution {
    public int factorial(int n) {
        if (n == 0 || n == 1) return 1;  // Handle base cases immediately

        int ans = 1;
        for (int i = 2; i <= n; i++) {   // Start from 2 since ans*1 = ans
            ans *= i;
        }
        return ans;
    }
}
```

### 2. Using Compound Assignment

```java
class Solution {
    public int factorial(int n) {
        int ans = 1;
        for (int i = 1; i <= n; i++) {
            ans *= i;  // Equivalent to ans = ans * i
        }
        return ans;
    }
}
```

---

## Mathematical Properties

### 1. Factorial Growth Rate

- Factorials grow extremely rapidly (faster than exponential)
- Each step multiplies by an increasing number
- This is why integer overflow happens quickly

### 2. Factorial Formula

- **Recursive definition:** n! = n × (n-1)!
- **Product notation:** n! = ∏(i=1 to n) i
- **Stirling's approximation:** n! ≈ √(2πn) × (n/e)^n

### 3. Applications

- **Permutations:** Number of ways to arrange n objects = n!
- **Combinations:** Used in binomial coefficients C(n,r) = n!/(r!(n-r)!)
- **Probability:** Calculating probabilities in various scenarios

---

## Extensions and Variations

### 1. Handle Large Numbers (Using BigInteger)

```java
// Java
import java.math.BigInteger;

class Solution {
    public BigInteger factorial(int n) {
        BigInteger ans = BigInteger.ONE;
        for (int i = 1; i <= n; i++) {
            ans = ans.multiply(BigInteger.valueOf(i));
        }
        return ans;
    }
}
```

### 2. Double Factorial (n!!)

```java
// Double factorial: n!! = n × (n-2) × (n-4) × ...
class Solution {
    public int doubleFactorial(int n) {
        int ans = 1;
        for (int i = n; i > 0; i -= 2) {
            ans *= i;
        }
        return ans;
    }
}
```

### 3. Factorial with Memoization

```java
// Cache results to avoid recomputation
class Solution {
    private Map<Integer, Integer> memo = new HashMap<>();

    public int factorial(int n) {
        if (n <= 1) return 1;
        if (memo.containsKey(n)) return memo.get(n);

        int result = n * factorial(n - 1);
        memo.put(n, result);
        return result;
    }
}
```

---

## Performance Comparison

| Approach  | Time Complexity | Space Complexity | Pros                        | Cons                |
| --------- | --------------- | ---------------- | --------------------------- | ------------------- |
| Iterative | O(n)            | O(1)             | Optimal space, simple       | None significant    |
| Recursive | O(n)            | O(n)             | Elegant, matches definition | Stack overflow risk |
| Built-in  | O(n)            | O(1)             | Very concise                | Less educational    |
| Memoized  | O(n)            | O(n)             | Fast for repeated calls     | Extra memory usage  |

---

## Key Learning Points

1. **Multiplicative Accumulation:** Building products through iterative multiplication
2. **Loop Design:** Proper range and boundary conditions
3. **Base Cases:** Handling edge cases like 0! = 1
4. **Integer Overflow:** Understanding limits of data types
5. **Mathematical Definitions:** Converting mathematical concepts to code

---

## Related Problems

1. **Permutations:** Calculate nPr = n!/(n-r)!
2. **Combinations:** Calculate nCr = n!/(r!(n-r)!)
3. **Fibonacci Sequence:** Another classic recursive/iterative problem
4. **Power Calculation:** Computing x^n efficiently
5. **GCD/LCM:** Other mathematical computations
6. **Prime Factorization:** Breaking numbers into prime factors

---

## Follow-up Questions

1. How would you handle very large factorials that don't fit in standard integers?
2. Can you optimize this for multiple factorial calculations?
3. How would you implement factorial modulo a prime number?
4. What's the most efficient way to calculate n!/k! for given n and k?
5. How would you implement this using only recursion?

---


## Summary

The factorial problem is a fundamental mathematical computation that demonstrates:

- **Basic loop design and accumulation patterns**
- **Handling mathematical edge cases**
- **Understanding integer overflow limitations**
- **Converting mathematical definitions to efficient code**

**Time Complexity:** O(n) - must multiply n numbers  
**Space Complexity:** O(1) - constant extra space  
**Key Insight:** Use multiplicative accumulation starting from 1

This problem serves as an excellent introduction to iterative algorithms and provides a foundation for more complex mathematical computations. The iterative approach is optimal for most practical purposes, combining simplicity, efficiency, and reliability.
