# Count Number of Odd Digits in a Number

### Difficulty: `Easy`

## Problem Statement

You are given an integer **n**. You need to **return** the **number of odd digits** present in the number.

The number will have **no** leading zeroes, except when the number is **0** itself.

## Examples

```txt
Example 1:
Input:  n = 5
Output: 1
Explanation: 5 is an odd digit.

Example 2:
Input:  n = 25
Output: 1
Explanation: The only odd digit in 25 is 5.

Example 3:
Input:  n = 1357
Output: 4
Explanation: All digits (1, 3, 5, 7) are odd.

Example 4:
Input:  n = 2468
Output: 0
Explanation: All digits (2, 4, 6, 8) are even.

Example 5:
Input:  n = 0
Output: 0
Explanation: 0 is an even digit.
```

## Constraints

- 0 ≤ n ≤ 10^9
- n will contain no leading zeroes except when it is 0 itself.

## Key Concepts

- **Odd digits:** 1, 3, 5, 7, 9
- **Even digits:** 0, 2, 4, 6, 8
- **Digit extraction:** Use modulo operator (%) to get the last digit
- **Number reduction:** Use integer division to remove the last digit

---

## Algorithm / Intuition

### Approach: Digit-by-Digit Extraction

We can extract each digit from right to left by:
1. Getting the last digit using `n % 10`
2. Checking if it's odd using `digit % 2 != 0`
3. Removing the last digit using `n / 10` (integer division)
4. Repeating until n becomes 0

### Step-by-Step Process:

1. Initialize a counter to 0
2. While the number is greater than 0:
   - Extract the rightmost digit using modulo 10
   - Check if the digit is odd (remainder when divided by 2 is not 0)
   - If odd, increment the counter
   - Remove the rightmost digit by integer division by 10
3. Return the counter

### DryRun Example:

Input: n = 1357

```
Initial: n = 1357, count = 0

Iteration 1:
- digit = 1357 % 10 = 7
- 7 % 2 = 1 ≠ 0, so 7 is odd → count = 1
- n = 1357 / 10 = 135

Iteration 2:
- digit = 135 % 10 = 5
- 5 % 2 = 1 ≠ 0, so 5 is odd → count = 2
- n = 135 / 10 = 13

Iteration 3:
- digit = 13 % 10 = 3
- 3 % 2 = 1 ≠ 0, so 3 is odd → count = 3
- n = 13 / 10 = 1

Iteration 4:
- digit = 1 % 10 = 1
- 1 % 2 = 1 ≠ 0, so 1 is odd → count = 4
- n = 1 / 10 = 0

Loop ends as n = 0
Answer: count = 4
```

---

## Code Solutions

### Java

```java
class Solution {
    public int countOddDigit(int n) {
        // Initialize counter to track odd digits
        int count = 0;
        
        // Process each digit from right to left
        while (n > 0) {
            // Extract the rightmost digit
            int digit = n % 10;
            
            // Check if digit is odd (remainder when divided by 2 is not 0)
            if (digit % 2 != 0) {
                count++;  // Increment count if digit is odd
            }
            
            // Remove the rightmost digit
            n = n / 10;
        }
        
        // Return total count of odd digits
        return count;
    }
}
```

### JavaScript

```javascript
class Solution {
    countOddDigit(n) {
        // Initialize counter to track odd digits
        let count = 0;
        
        // Process each digit from right to left
        while (n > 0) {
            // Extract the rightmost digit
            let digit = n % 10;
            
            // Check if digit is odd (remainder when divided by 2 is not 0)
            if (digit % 2 != 0) {
                count++;  // Increment count if digit is odd
            }
            
            // Remove the rightmost digit (use Math.floor for integer division)
            n = Math.floor(n / 10);
        }
        
        // Return total count of odd digits
        return count;
    }
}
```

### Python

```python
class Solution:
    def countOddDigit(self, n):
        # Initialize counter to track odd digits
        count = 0
        
        # Process each digit from right to left
        while n > 0:
            # Extract the rightmost digit
            digit = n % 10
            
            # Check if digit is odd (remainder when divided by 2 is not 0)
            if (digit % 2 != 0):
                count += 1  # Increment count if digit is odd
            
            # Remove the rightmost digit (// is integer division in Python)
            n = n // 10
        
        # Return total count of odd digits
        return count
```

---

## Complexity Analysis

### Time Complexity: O(d) or O(log₁₀(n))
- Where d is the number of digits in n
- We visit each digit exactly once
- The number of digits is logarithmic to the value of n

### Space Complexity: O(1)
- We only use a constant amount of extra space
- Variables: count, digit (constant space regardless of input size)

---

## Alternative Approaches

### 1. String Conversion Approach

```java
// Java
class Solution {
    public int countOddDigit(int n) {
        String numStr = String.valueOf(n);
        int count = 0;
        
        for (char c : numStr.toCharArray()) {
            int digit = c - '0';  // Convert char to int
            if (digit % 2 != 0) {
                count++;
            }
        }
        
        return count;
    }
}
```

### 2. Recursive Approach

```java
// Java
class Solution {
    public int countOddDigit(int n) {
        // Base case
        if (n == 0) return 0;
        
        // Get last digit and check if odd
        int lastDigit = n % 10;
        int currentCount = (lastDigit % 2 != 0) ? 1 : 0;
        
        // Recursively count odd digits in remaining number
        return currentCount + countOddDigit(n / 10);
    }
}
```

---

## Edge Cases to Consider

1. **Zero (n = 0):** Should return 0 (zero is even)
2. **Single Odd Digit (n = 7):** Should return 1
3. **Single Even Digit (n = 4):** Should return 0
4. **All Odd Digits (n = 1357):** Should return 4
5. **All Even Digits (n = 2468):** Should return 0
6. **Mixed Digits (n = 12345):** Should return 3 (digits 1, 3, 5)
7. **Large Numbers:** Test with maximum constraint values

## Test Cases

```java
// Test cases for validation
public void testCountOddDigit() {
    Solution sol = new Solution();
    
    assert sol.countOddDigit(5) == 1;      // Single odd
    assert sol.countOddDigit(25) == 1;     // One odd, one even
    assert sol.countOddDigit(1357) == 4;   // All odd
    assert sol.countOddDigit(2468) == 0;   // All even
    assert sol.countOddDigit(0) == 0;      // Zero
    assert sol.countOddDigit(12345) == 3;  // Mixed digits
}
```

---

## Key Learning Points

1. **Modulo Operation:** `n % 10` extracts the rightmost digit
2. **Integer Division:** `n / 10` removes the rightmost digit
3. **Odd Check:** `digit % 2 != 0` determines if a digit is odd
4. **Loop Pattern:** Standard pattern for digit-by-digit processing
5. **Edge Case Handling:** Consider special cases like 0

---

## Related Problems

1. **Count Even Digits:** Count number of even digits in a number
2. **Sum of Digits:** Calculate sum of all digits
3. **Count Specific Digit:** Count occurrences of a particular digit
4. **Digital Root:** Keep summing digits until single digit remains
5. **Armstrong Number:** Check if number equals sum of digits raised to power of digit count

---

## Follow-up Questions

1. How would you modify this to count even digits instead?
2. What if you need to count both odd and even digits?
3. How would you handle negative numbers?
4. Can you solve this using recursion?
5. What's the most efficient way if you need to process millions of numbers?

---

## Summary

This problem demonstrates fundamental digit manipulation techniques that are building blocks for many number-theory problems. The key insight is using modulo and division operations to process digits systematically from right to left.

**Time Complexity:** O(log n) - proportional to number of digits  
**Space Complexity:** O(1) - constant extra space  
**Difficulty:** Easy - good for beginners learning digit extraction patterns