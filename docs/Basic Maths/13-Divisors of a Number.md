# Divisors of a Number

### Difficulty: `Easy`

### **Practice Links:**
- **[GeeksforGeeks - All Divisors of a Number](https://www.geeksforgeeks.org/problems/all-divisors-of-a-number/1)**

## Problem Statement

You are given an integer **n**. You need to find **all the divisors** of n. Return all the divisors of n as an **array or list in a sorted order**.

A number which **completely divides** another number is called its **divisor**.

## Mathematical Definition

A divisor (or factor) of an integer n is a positive integer d such that:
- **n % d = 0** (d divides n evenly with no remainder)
- **n = d × k** for some integer k

The set of all divisors includes both 1 and n itself.

## Examples

```txt
Example 1:
Input:  n = 6
Output: [1, 2, 3, 6]
Explanation: The divisors of 6 are 1, 2, 3, 6.

Example 2:
Input:  n = 8
Output: [1, 2, 4, 8]
Explanation: The divisors of 8 are 1, 2, 4, 8.

Example 3:
Input:  n = 7
Output: [1, 7]
Explanation: 7 is a prime number, so its only divisors are 1 and 7.

Example 4:
Input:  n = 12
Output: [1, 2, 3, 4, 6, 12]
Explanation: 12 = 1×12, 12 = 2×6, 12 = 3×4, so divisors are 1, 2, 3, 4, 6, 12.

Example 5:
Input:  n = 1
Output: [1]
Explanation: 1 has only one divisor: itself.
```

## Constraints

- 1 ≤ n ≤ 10^9
- n is a positive integer

## Key Mathematical Properties

### Important Divisor Properties:
- **Every number has at least 2 divisors:** 1 and itself (except 1, which has only 1 divisor)
- **Divisors come in pairs:** If d divides n, then n/d also divides n
- **Perfect squares** have an odd number of divisors (one divisor pairs with itself)
- **Prime numbers** have exactly 2 divisors: 1 and the number itself

### Divisor Pairing:
For any divisor d of n where d ≤ √n, there exists a corresponding divisor n/d where n/d ≥ √n.

## Key Concepts

- **Divisibility:** Testing if one number divides another evenly
- **Square Root Optimization:** Using divisor pairing to reduce time complexity
- **Sorting:** Ensuring output is in ascending order
- **Array Management:** Handling dynamic array sizes efficiently

---

## Approach 1: Brute Force Solution

### Algorithm / Intuition

The straightforward approach is to:
1. **Check every number from 1 to n** for divisibility
2. **Collect all numbers that divide n evenly** (remainder = 0)
3. **Return the sorted list** of divisors

### Core Logic:
- Iterate through all numbers from 1 to n
- For each number i, check if n % i == 0
- If true, add i to the result array
- Return the array of divisors

### Step-by-Step Algorithm:
1. Initialize an empty array/list to store divisors
2. Loop from `i = 1` to `i = n` (inclusive)
3. For each i, check if `n % i == 0`
4. If true, add i to the result array
5. Return the array (already sorted since we iterate in order)

### DryRun Example (Brute Force):

Input: n = 12

```
Initial: n = 12, divisors = []

i = 1:  12 % 1 = 0 ✓ → add 1 → divisors = [1]
i = 2:  12 % 2 = 0 ✓ → add 2 → divisors = [1, 2]
i = 3:  12 % 3 = 0 ✓ → add 3 → divisors = [1, 2, 3]
i = 4:  12 % 4 = 0 ✓ → add 4 → divisors = [1, 2, 3, 4]
i = 5:  12 % 5 = 2 ✗ → skip
i = 6:  12 % 6 = 0 ✓ → add 6 → divisors = [1, 2, 3, 4, 6]
i = 7:  12 % 7 = 5 ✗ → skip
i = 8:  12 % 8 = 4 ✗ → skip
i = 9:  12 % 9 = 3 ✗ → skip
i = 10: 12 % 10 = 2 ✗ → skip
i = 11: 12 % 11 = 1 ✗ → skip
i = 12: 12 % 12 = 0 ✓ → add 12 → divisors = [1, 2, 3, 4, 6, 12]

Final: divisors = [1, 2, 3, 4, 6, 12]

Verification: 
- 12 ÷ 1 = 12 ✓
- 12 ÷ 2 = 6 ✓  
- 12 ÷ 3 = 4 ✓
- 12 ÷ 4 = 3 ✓
- 12 ÷ 6 = 2 ✓
- 12 ÷ 12 = 1 ✓
```

### Brute Force Code Solutions:

#### Java

```java
class Solution {
    public int[] divisors(int n) {
        // Create temporary array with maximum possible size
        int[] temp = new int[n];
        int count = 0;
        
        // Check every number from 1 to n for divisibility
        for (int i = 1; i <= n; i++) {
            // If i divides n evenly, it's a divisor
            if (n % i == 0) {
                // Add divisor to temporary array
                temp[count] = i;
                count++;
            }
        }
        
        // Create result array with exact size and copy divisors
        int[] ans = Arrays.copyOf(temp, count);
        return ans;
    }
}
```

#### JavaScript

```javascript
class Solution {
    divisors(n) {
        // Initialize array to store divisors
        let ans = [];
        
        // Check every number from 1 to n for divisibility
        for (let i = 1; i <= n; i++) {
            // If i divides n evenly, it's a divisor
            if (n % i == 0) {
                // Add divisor to result array
                ans.push(i);
            }
        }
        
        // Return array of divisors (already sorted)
        return ans;
    }
}
```

#### Python

```python
class Solution:
    def divisors(self, n):
        # Initialize list to store divisors
        ans = []
        
        # Check every number from 1 to n for divisibility using range(1, n+1)
        for i in range(1, n + 1):
            # If i divides n evenly, it's a divisor
            if n % i == 0:
                # Add divisor to result list
                ans.append(i)
        
        # Return list of divisors (already sorted)
        return ans
```

### Brute Force Complexity:
- **Time Complexity:** O(n) - check all numbers from 1 to n
- **Space Complexity:** O(√n) - space for storing divisors (number of divisors is typically O(√n))

---

## Approach 2: Optimal Solution (Square Root Method)

### Algorithm / Intuition

The key insight is that **divisors come in pairs**:
- If `i` is a divisor of `n`, then `n/i` is also a divisor
- We only need to check up to `√n` to find all divisor pairs
- This reduces time complexity from O(n) to O(√n)

### Mathematical Foundation:

**Divisor Pairing:**
- For n = 36: if 2 is a divisor, then 36/2 = 18 is also a divisor
- For n = 36: if 3 is a divisor, then 36/3 = 12 is also a divisor
- For n = 36: if 6 is a divisor, then 36/6 = 6 is also a divisor (special case: perfect square)

**Why √n is the limit:**
- If both divisors in a pair were > √n, their product would be > n (impossible)
- If both divisors in a pair were < √n, their product would be < n (impossible)
- So one divisor ≤ √n and its pair ≥ √n

### Core Logic:
1. Check all numbers from 1 to √n
2. For each divisor i found, also add n/i (if different)
3. Handle the special case where i = √n (perfect squares)
4. Sort the result before returning

### Step-by-Step Algorithm:
1. Initialize an empty list to store divisors
2. Loop from `i = 1` to `i ≤ √n`
3. If `n % i == 0`:
   - Add i to the list
   - If `i ≠ n/i`, also add `n/i` to the list
4. Sort the list and return

### DryRun Example (Optimal):

Input: n = 36

```
Initial: n = 36, √36 = 6, divisors = []

i = 1: 36 % 1 = 0 ✓
- Add i = 1 → divisors = [1]
- n/i = 36, 1 ≠ 36 → add 36 → divisors = [1, 36]

i = 2: 36 % 2 = 0 ✓
- Add i = 2 → divisors = [1, 36, 2]
- n/i = 18, 2 ≠ 18 → add 18 → divisors = [1, 36, 2, 18]

i = 3: 36 % 3 = 0 ✓
- Add i = 3 → divisors = [1, 36, 2, 18, 3]
- n/i = 12, 3 ≠ 12 → add 12 → divisors = [1, 36, 2, 18, 3, 12]

i = 4: 36 % 4 = 0 ✓
- Add i = 4 → divisors = [1, 36, 2, 18, 3, 12, 4]
- n/i = 9, 4 ≠ 9 → add 9 → divisors = [1, 36, 2, 18, 3, 12, 4, 9]

i = 5: 36 % 5 = 1 ✗ → skip

i = 6: 36 % 6 = 0 ✓
- Add i = 6 → divisors = [1, 36, 2, 18, 3, 12, 4, 9, 6]
- n/i = 6, 6 = 6 → don't add duplicate

Loop ends at i = 6

Before sorting: [1, 36, 2, 18, 3, 12, 4, 9, 6]
After sorting: [1, 2, 3, 4, 6, 9, 12, 18, 36]

Final: divisors = [1, 2, 3, 4, 6, 9, 12, 18, 36]
```

### Optimal Code Solutions:

#### Java

```java
import java.util.*;

class Solution {
    public int[] divisors(int n) {
        // Use ArrayList for dynamic sizing
        List<Integer> divisorList = new ArrayList<>();
        
        // Check divisors only up to √n for efficiency
        for (int i = 1; i <= Math.sqrt(n); i++) {
            // If i divides n evenly, it's a divisor
            if (n % i == 0) {
                // Add the smaller divisor
                divisorList.add(i);
                
                // Add the paired divisor if it's different (avoid duplicates for perfect squares)
                if (i != n / i) {
                    divisorList.add(n / i);
                }
            }
        }
        
        // Sort the divisors in ascending order
        Collections.sort(divisorList);
        
        // Convert list to array
        return divisorList.stream().mapToInt(Integer::intValue).toArray();
    }
}
```

#### JavaScript

```javascript
class Solution {
    divisors(n) {
        // Initialize array to store divisors
        let ans = [];
        
        // Check divisors only up to √n for efficiency
        for (let i = 1; i <= Math.sqrt(n); i++) {
            // If i divides n evenly, it's a divisor
            if (n % i == 0) {
                // Add the smaller divisor
                ans.push(i);
                
                // Add the paired divisor if it's different (avoid duplicates for perfect squares)
                if (i !== n / i) {
                    ans.push(n / i);
                }
            }
        }
        
        // Sort the divisors in ascending order and return
        return ans.sort((a, b) => a - b);
    }
}
```

#### Python

```python
import math

class Solution:
    def divisors(self, n):
        # Initialize list to store divisors
        ans = []
        
        # Check divisors only up to √n for efficiency
        for i in range(1, int(math.sqrt(n)) + 1):
            # If i divides n evenly, it's a divisor
            if n % i == 0:
                # Add the smaller divisor
                ans.append(i)
                
                # Add the paired divisor if it's different (avoid duplicates for perfect squares)
                if i != n // i:
                    ans.append(n // i)
        
        # Sort the divisors in ascending order and return
        return sorted(ans)
```

### Optimal Complexity:
- **Time Complexity:** O(√n + d log d) where d is the number of divisors - √n for finding divisors, d log d for sorting
- **Space Complexity:** O(d) - space for storing d divisors

---

## Complexity Analysis Summary

| Approach                    | Time Complexity        | Space Complexity | Best For              |
|----------------------------|------------------------|------------------|-----------------------|
| Brute Force                | O(n)                   | O(d)             | Very small numbers    |
| Optimal (√n method)        | O(√n + d log d)        | O(d)             | All practical cases   |

Where d = number of divisors (typically d = O(√n) for most numbers)

---

## Edge Cases to Consider

1. **n = 1:** Only divisor is 1 itself
2. **Prime Numbers:** Only divisors are 1 and the number itself  
3. **Perfect Squares:** One divisor (√n) pairs with itself
4. **Large Numbers:** Ensure no integer overflow in calculations
5. **Powers of 2:** Many divisors, systematic pattern

## Detailed Edge Case Analysis

```java
// Edge cases with step-by-step analysis
divisors(1)  → [1]           (special case: only one divisor)
divisors(7)  → [1, 7]        (prime number: exactly 2 divisors)
divisors(16) → [1, 2, 4, 8, 16]  (perfect square: √16 = 4 pairs with itself)
divisors(2)  → [1, 2]        (smallest prime)
divisors(100) → [1, 2, 4, 5, 10, 20, 25, 50, 100]  (many divisors)
```

---

## Test Cases

```java
public void testDivisors() {
    Solution sol = new Solution();
    
    // Basic cases from examples
    assertArrayEquals(new int[]{1, 2, 3, 6}, sol.divisors(6));
    assertArrayEquals(new int[]{1, 2, 4, 8}, sol.divisors(8));
    assertArrayEquals(new int[]{1, 7}, sol.divisors(7));
    
    // Edge cases
    assertArrayEquals(new int[]{1}, sol.divisors(1));
    assertArrayEquals(new int[]{1, 2}, sol.divisors(2));
    
    // Perfect squares
    assertArrayEquals(new int[]{1, 2, 4}, sol.divisors(4));
    assertArrayEquals(new int[]{1, 3, 9}, sol.divisors(9));
    assertArrayEquals(new int[]{1, 2, 4, 5, 10, 20, 25, 50, 100}, sol.divisors(100));
    
    // Larger numbers
    assertArrayEquals(new int[]{1, 2, 3, 4, 6, 12}, sol.divisors(12));
    assertArrayEquals(new int[]{1, 3, 5, 15}, sol.divisors(15));
}
```

---

## Step-by-Step Visualization

### Brute Force: divisors(8)

```
Check all numbers 1 to 8:
i=1: 8%1=0 ✓ → add 1 → [1]
i=2: 8%2=0 ✓ → add 2 → [1, 2]
i=3: 8%3=2 ✗ → skip
i=4: 8%4=0 ✓ → add 4 → [1, 2, 4]
i=5: 8%5=3 ✗ → skip
i=6: 8%6=2 ✗ → skip
i=7: 8%7=1 ✗ → skip
i=8: 8%8=0 ✓ → add 8 → [1, 2, 4, 8]
Result: [1, 2, 4, 8]
```

### Optimal: divisors(8)

```
Check numbers 1 to √8 ≈ 2.83:
i=1: 8%1=0 ✓ → add 1, add 8/1=8 → [1, 8]
i=2: 8%2=0 ✓ → add 2, add 8/2=4 → [1, 8, 2, 4]
i=3: 3 > √8, stop

Before sorting: [1, 8, 2, 4]
After sorting: [1, 2, 4, 8]
Result: [1, 2, 4, 8] (same result, much faster!)
```

---

## Mathematical Properties and Theorems

### 1. Number of Divisors Formula
For n = p₁^α₁ × p₂^α₂ × ... × pₖ^αₖ (prime factorization):
**Number of divisors = (α₁ + 1) × (α₂ + 1) × ... × (αₖ + 1)**

### 2. Sum of Divisors Formula
**Sum of divisors = [(p₁^(α₁+1) - 1)/(p₁ - 1)] × [(p₂^(α₂+1) - 1)/(p₂ - 1)] × ...**

### 3. Divisor Properties
- **Highly composite numbers** have more divisors than any smaller number
- **Perfect numbers** equal the sum of their proper divisors
- **Abundant numbers** have sum of proper divisors > n

---

## Common Mistakes to Avoid

1. **Forgetting to sort:** Output must be in ascending order
2. **Double counting √n:** When i = n/i, don't add the same divisor twice
3. **Integer overflow:** Be careful with large numbers
4. **Missing edge cases:** Handle n = 1 correctly
5. **Wrong loop bounds:** Ensure i ≤ √n, not i < √n

---

## Optimization Techniques

### 1. Early Termination for Prime Check

```java
public boolean isPrime(int n) {
    if (n <= 1) return false;
    if (n == 2) return true;
    if (n % 2 == 0) return false;
    
    for (int i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i == 0) return false;
    }
    return true;
}
```

### 2. Using Set to Avoid Duplicates

```java
public List<Integer> divisors(int n) {
    Set<Integer> divisorSet = new TreeSet<>();  // TreeSet maintains sorted order
    
    for (int i = 1; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            divisorSet.add(i);
            divisorSet.add(n / i);
        }
    }
    
    return new ArrayList<>(divisorSet);
}
```

### 3. Counting Divisors Only

```java
public int countDivisors(int n) {
    int count = 0;
    for (int i = 1; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            if (i * i == n) count++;  // Perfect square case
            else count += 2;          // Add both divisors in the pair
        }
    }
    return count;
}
```

---

## Performance Analysis

### Time Complexity Comparison:

```
For n = 1,000,000:
- Brute Force: 1,000,000 operations
- Optimal: ~1,000 operations (√1,000,000 = 1,000)
- Speedup: 1000x faster!
```

### Space Complexity:
Both approaches use O(d) space where d is the number of divisors, but optimal approach finds them much faster.

---

## Real-World Applications

1. **Number Theory:** Studying properties of integers
2. **Cryptography:** Factorization in RSA and other algorithms
3. **Computer Graphics:** Texture tiling and repetition patterns
4. **Mathematics:** Finding factors for fraction simplification
5. **Algorithms:** Optimization problems involving divisibility
6. **Project Management:** Task scheduling based on time divisions

---

## Related Problems

1. **Count Divisors:** Just count the number of divisors
2. **Sum of Divisors:** Calculate sum of all divisors
3. **Proper Divisors:** Find divisors excluding the number itself
4. **Prime Factorization:** Find prime factors instead of all divisors
5. **Perfect Numbers:** Numbers equal to sum of proper divisors
6. **Highly Composite Numbers:** Numbers with more divisors than smaller numbers

---

## Follow-up Questions

1. How would you find only the proper divisors (excluding n itself)?
2. Can you count the divisors without storing them?
3. How would you find divisors of very large numbers efficiently?
4. What's the relationship between divisors and prime factorization?
5. How would you find the sum of all divisors?

---

## Advanced Topics

### 1. Sieve for Multiple Numbers
```java
// Find divisors for all numbers up to n
public List<List<Integer>> allDivisors(int n) {
    List<List<Integer>> result = new ArrayList<>();
    for (int i = 0; i <= n; i++) {
        result.add(new ArrayList<>());
    }
    
    for (int i = 1; i <= n; i++) {
        for (int j = i; j <= n; j += i) {
            result.get(j).add(i);
        }
    }
    
    return result;
}
```

### 2. Divisors Using Prime Factorization
```java
public List<Integer> divisorsFromPrimeFactors(Map<Integer, Integer> primeFactors) {
    List<Integer> divisors = new ArrayList<>();
    generateDivisors(primeFactors, new ArrayList<>(primeFactors.keySet()), 0, 1, divisors);
    Collections.sort(divisors);
    return divisors;
}

private void generateDivisors(Map<Integer, Integer> factors, List<Integer> primes, 
                            int index, int current, List<Integer> result) {
    if (index == primes.size()) {
        result.add(current);
        return;
    }
    
    int prime = primes.get(index);
    int power = factors.get(prime);
    
    for (int i = 0; i <= power; i++) {
        generateDivisors(factors, primes, index + 1, current, result);
        current *= prime;
    }
}
```

### 3. Parallel Divisor Finding
```java
public List<Integer> parallelDivisors(int n) {
    return IntStream.rangeClosed(1, (int) Math.sqrt(n))
                   .parallel()
                   .filter(i -> n % i == 0)
                   .flatMap(i -> i * i == n ? IntStream.of(i) : IntStream.of(i, n / i))
                   .sorted()
                   .boxed()
                   .collect(Collectors.toList());
}
```

---

## Summary

The divisors problem demonstrates:

- **Mathematical optimization** using divisor pairing properties
- **Algorithm efficiency** improvement from O(n) to O(√n)
- **Practical applications** in number theory and cryptography
- **Trade-offs** between time complexity and implementation complexity

**Key Approaches:**
1. **Brute Force:** O(n) - Simple but slow for large numbers
2. **Optimal (√n method):** O(√n) - Efficient using mathematical insights

**Algorithm Selection:**
- **Use optimal approach** for all practical applications
- **Square root optimization** is fundamental for divisor problems
- **Consider sorting overhead** in final complexity analysis

**Key Insight:** **Divisors come in pairs (d, n/d), so checking up to √n finds all divisors**

This problem beautifully illustrates how mathematical properties can lead to significant algorithmic improvements. The square root optimization is a fundamental technique used in many number theory algorithms and demonstrates the power of mathematical insight in reducing computational complexity.

The optimal solution showcases how understanding the mathematical structure of a problem (divisor pairing) can transform a linear algorithm into a much more efficient sublinear solution.