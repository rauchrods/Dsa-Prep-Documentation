# Reverse a Number

### Difficulty: `Easy`

### **Practice Link: [GeeksforGeeks - Reverse Digit](https://www.geeksforgeeks.org/problems/reverse-digit0316/1)**

## Problem Statement

You are given an integer **n**. Return the integer formed by placing the **digits** of n in **reverse order**.

## Examples

```txt
Example 1:
Input:  n = 25
Output: 52
Explanation: Reverse of 25 is 52.

Example 2:
Input:  n = 123
Output: 321
Explanation: Reverse of 123 is 321.

Example 3:
Input:  n = 54
Output: 45
Explanation: Reverse of 54 is 45.

Example 4:
Input:  n = 1000
Output: 1
Explanation: Reverse of 1000 is 0001, which is 1 (leading zeros are dropped).

Example 5:
Input:  n = 7
Output: 7
Explanation: Single digit number remains same when reversed.
```

## Constraints

- 1 ≤ n ≤ 10^9
- The reversed number should not have leading zeros

## Key Concepts

- **Digit Extraction:** Use modulo operator (`%`) to get the last digit
- **Number Building:** Multiply current result by 10 and add new digit
- **Digit Removal:** Use integer division to remove the last digit
- **Leading Zeros:** Automatically handled as integers don't store leading zeros

---

## Algorithm / Intuition

### Approach: Digit-by-Digit Reversal

The core idea is to extract digits from the original number (right to left) and build the reversed number by adding these digits (left to right).

**Mathematical Process:**

1. Extract the last digit using `n % 10`
2. Add this digit to the reversed number: `reverse = reverse * 10 + lastDigit`
3. Remove the last digit from original number: `n = n / 10`
4. Repeat until all digits are processed

### Step-by-Step Process:

1. Initialize `reverse = 0` to store the result
2. While the original number has digits (n > 0):
   - Extract the rightmost digit using `n % 10`
   - Build the reversed number by: `reverse = reverse * 10 + digit`
   - Remove the rightmost digit using integer division `n / 10`
3. Return the reversed number

### Mathematical Intuition:

For number 123:

- Start: reverse = 0
- Step 1: digit = 3, reverse = 0 \* 10 + 3 = 3
- Step 2: digit = 2, reverse = 3 \* 10 + 2 = 32
- Step 3: digit = 1, reverse = 32 \* 10 + 1 = 321

### DryRun Example:

Input: n = 123

```
Initial: n = 123, reverse = 0

Iteration 1:
- lastDigit = 123 % 10 = 3
- reverse = 0 * 10 + 3 = 3
- n = 123 / 10 = 12

Iteration 2:
- lastDigit = 12 % 10 = 2
- reverse = 3 * 10 + 2 = 32
- n = 12 / 10 = 1

Iteration 3:
- lastDigit = 1 % 10 = 1
- reverse = 32 * 10 + 1 = 321
- n = 1 / 10 = 0

Loop ends as n = 0
Answer: reverse = 321
```

---

## Code Solutions

### Java

```java
class Solution {
    public int reverseNumber(int n) {
        // Initialize variable to store the reversed number
        int reverse = 0;

        // Process each digit from right to left
        while(n > 0) {
            // Extract the rightmost digit
            int lastDigit = n % 10;

            // Build reversed number: shift current result left and add new digit
            reverse = reverse * 10 + lastDigit;

            // Remove the rightmost digit from original number
            n = n / 10;
        }

        // Return the completely reversed number
        return reverse;
    }
}
```

### JavaScript

```javascript
class Solution {
  reverseNumber(n) {
    // Initialize variable to store the reversed number
    let reverse = 0;

    // Process each digit from right to left
    while (n > 0) {
      // Extract the rightmost digit
      let lastDigit = n % 10;

      // Build reversed number: shift current result left and add new digit
      reverse = reverse * 10 + lastDigit;

      // Remove the rightmost digit (use Math.floor for integer division)
      n = Math.floor(n / 10);
    }

    // Return the completely reversed number
    return reverse;
  }
}
```

### Python

```python
class Solution:
    def reverseNumber(self, n):
        # Initialize variable to store the reversed number
        reverse = 0

        # Process each digit from right to left
        while n > 0:
            # Extract the rightmost digit
            lastDigit = n % 10

            # Build reversed number: shift current result left and add new digit
            reverse = reverse * 10 + lastDigit

            # Remove the rightmost digit (// is integer division in Python)
            n = n // 10

        # Return the completely reversed number
        return reverse
```

---

## Complexity Analysis

### Time Complexity: O(d) or O(log₁₀(n))

- Where d is the number of digits in n
- We process each digit exactly once
- Number of digits = ⌊log₁₀(n)⌋ + 1

### Space Complexity: O(1)

- We use only a constant amount of extra space
- Variables used: reverse, lastDigit (constant space)

---

## Alternative Approaches

### 1. String Conversion Approach

```java
// Java
class Solution {
    public int reverseNumber(int n) {
        // Convert to string, reverse, and convert back
        String numStr = String.valueOf(n);
        String reversedStr = new StringBuilder(numStr).reverse().toString();
        return Integer.parseInt(reversedStr);
    }
}
```

**Pros:** Simple and readable  
**Cons:** Uses extra space, slower for large numbers

### 2. Recursive Approach

```java
// Java
class Solution {
    public int reverseNumber(int n) {
        return reverseHelper(n, 0);
    }

    private int reverseHelper(int n, int reversed) {
        // Base case: no more digits to process
        if (n == 0) return reversed;

        // Recursive case: process current digit and recurse
        return reverseHelper(n / 10, reversed * 10 + n % 10);
    }
}
```

### 3. Using StringBuilder (Java)

```java
// Java
class Solution {
    public int reverseNumber(int n) {
        StringBuilder sb = new StringBuilder();

        while (n > 0) {
            sb.append(n % 10);
            n /= 10;
        }

        return Integer.parseInt(sb.toString());
    }
}
```

---

## Edge Cases to Consider

1. **Single Digit (n = 7):** Should return 7
2. **Trailing Zeros (n = 1000):** Should return 1 (leading zeros dropped)
3. **Palindromic Numbers (n = 121):** Should return 121
4. **Two-Digit Number (n = 25):** Should return 52
5. **Large Numbers:** Test with maximum constraint values
6. **Powers of 10 (10, 100, 1000):** Results will be 1

## Detailed Edge Case Analysis

```java
// Edge case: Trailing zeros become leading zeros (dropped)
Input: 1200 → Output: 21 (not 0021)
Input: 5000 → Output: 5 (not 0005)

// Edge case: Single digit
Input: 9 → Output: 9

// Edge case: Palindrome
Input: 121 → Output: 121
Input: 1331 → Output: 1331
```

---

## Test Cases

```java
public void testReverseNumber() {
    Solution sol = new Solution();

    // Basic cases
    assert sol.reverseNumber(25) == 52;
    assert sol.reverseNumber(123) == 321;
    assert sol.reverseNumber(54) == 45;

    // Edge cases
    assert sol.reverseNumber(7) == 7;           // Single digit
    assert sol.reverseNumber(1000) == 1;        // Trailing zeros
    assert sol.reverseNumber(121) == 121;       // Palindrome
    assert sol.reverseNumber(10) == 1;          // Power of 10

    // Larger numbers
    assert sol.reverseNumber(12345) == 54321;
    assert sol.reverseNumber(9876543) == 3456789;
}
```

---

## Step-by-Step Visualization

### Visual Example: n = 456

```
Step 1: n = 456, reverse = 0
   456 % 10 = 6  →  reverse = 0*10 + 6 = 6
   n = 456/10 = 45

Step 2: n = 45, reverse = 6
   45 % 10 = 5   →  reverse = 6*10 + 5 = 65
   n = 45/10 = 4

Step 3: n = 4, reverse = 65
   4 % 10 = 4    →  reverse = 65*10 + 4 = 654
   n = 4/10 = 0

Result: 654
```

---

## Common Mistakes to Avoid

1. **Integer Overflow:** For very large numbers, result might exceed integer limits
2. **Leading Zeros:** Remember that integers automatically drop leading zeros
3. **Negative Numbers:** Current solution doesn't handle negative numbers
4. **Division in JavaScript:** Use `Math.floor(n/10)` instead of `n/10`
5. **Python Division:** Use `//` for integer division, not `/`

---

## Extensions and Variations

### 1. Handle Negative Numbers

```java
class Solution {
    public int reverseNumber(int n) {
        boolean isNegative = n < 0;
        n = Math.abs(n);  // Work with absolute value

        int reverse = 0;
        while(n > 0) {
            reverse = reverse * 10 + n % 10;
            n /= 10;
        }

        return isNegative ? -reverse : reverse;
    }
}
```

### 2. Handle Integer Overflow

```java
class Solution {
    public int reverseNumber(int n) {
        int reverse = 0;

        while(n > 0) {
            // Check for overflow before multiplication
            if (reverse > Integer.MAX_VALUE / 10) {
                return 0;  // or throw exception
            }

            reverse = reverse * 10 + n % 10;
            n /= 10;
        }

        return reverse;
    }
}
```

---

## Key Learning Points

1. **Modulo Operation:** `n % 10` extracts the last digit
2. **Number Building:** `result * 10 + digit` builds number from left to right
3. **Integer Division:** Removes digits from right side
4. **Leading Zeros:** Automatically handled in integer representation
5. **Iterative Process:** Standard pattern for digit manipulation

---

## Related Problems

1. **Palindrome Number:** Check if number reads same forwards and backwards
2. **Add Digits:** Keep adding digits until single digit
3. **Happy Number:** Determine if number eventually reaches 1
4. **Armstrong Number:** Sum of digits raised to power equals original
5. **Reverse Integer:** Similar but with overflow handling

---

## Performance Comparison

| Approach      | Time Complexity | Space Complexity | Readability | Performance |
| ------------- | --------------- | ---------------- | ----------- | ----------- |
| Mathematical  | O(log n)        | O(1)             | Good        | Best        |
| String-based  | O(log n)        | O(log n)         | Excellent   | Good        |
| Recursive     | O(log n)        | O(log n)         | Good        | Good        |
| StringBuilder | O(log n)        | O(log n)         | Good        | Fair        |

---
