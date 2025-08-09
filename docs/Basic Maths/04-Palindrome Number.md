# Palindrome Number

### Difficulty: `Easy`

### **Practice Links:**
- **[GeeksforGeeks - Palindrome](https://www.geeksforgeeks.org/problems/palindrome0746/1)**
- **[LeetCode - Palindrome Number](https://leetcode.com/problems/palindrome-number/description/)**

## Problem Statement

You are given an integer **n**. You need to check whether the number is a **palindrome** number or not. Return **true** if it's a palindrome number, otherwise return **false**.

A **palindrome** number is a number which reads the **same** both **left to right** and **right to left**.

## Examples

```txt
Example 1:
Input:  n = 121
Output: true
Explanation: When read from left to right: 121.
             When read from right to left: 121.

Example 2:
Input:  n = 123
Output: false
Explanation: When read from left to right: 123.
             When read from right to left: 321.

Example 3:
Input:  n = 1
Output: true
Explanation: Single digit numbers are palindromes.

Example 4:
Input:  n = 1221
Output: true
Explanation: When read from left to right: 1221.
             When read from right to left: 1221.

Example 5:
Input:  n = 10
Output: false
Explanation: When read from left to right: 10.
             When read from right to left: 01 = 1.
```

## Constraints

- 0 ≤ n ≤ 2^31 - 1
- The number will be non-negative

## Key Concepts

- **Palindrome:** A sequence that reads the same forwards and backwards
- **Number Reversal:** Create the reverse of a number using digit extraction
- **Digit Manipulation:** Extract and rebuild numbers using modulo and division
- **Comparison:** Check if original equals reversed number

---

## Algorithm / Intuition

### Approach: Number Reversal and Comparison

The strategy is to:
1. **Preserve the original number** by creating a copy
2. **Reverse the number** using digit extraction technique
3. **Compare** the original number with its reverse
4. **Return true** if they match, **false** otherwise

### Core Logic:
- If a number reads the same forwards and backwards, then `number == reverse(number)`
- We can reverse a number by extracting digits from right to left and building a new number from left to right

### Mathematical Process:
```
For number 121:
Original: 121
Reverse:  121  
121 == 121 → true (palindrome)

For number 123:
Original: 123
Reverse:  321
123 != 321 → false (not palindrome)
```

### Step-by-Step Algorithm:
1. Create a copy of the original number to preserve it
2. Initialize reverse = 0
3. While the number has digits:
   - Extract the last digit using `n % 10`
   - Build the reversed number: `reverse = reverse * 10 + lastDigit`
   - Remove the last digit: `n = n / 10`
4. Compare the reversed number with the original copy
5. Return the comparison result

### DryRun Example:

Input: n = 121

```
Initial: n = 121, copy = 121, reverse = 0

Iteration 1:
- lastDigit = 121 % 10 = 1
- reverse = 0 * 10 + 1 = 1
- n = 121 / 10 = 12

Iteration 2:
- lastDigit = 12 % 10 = 2
- reverse = 1 * 10 + 2 = 12
- n = 12 / 10 = 1

Iteration 3:
- lastDigit = 1 % 10 = 1
- reverse = 12 * 10 + 1 = 121
- n = 1 / 10 = 0

Loop ends as n = 0
Comparison: reverse (121) == copy (121) → true
Answer: true (121 is a palindrome)
```

---

## Code Solutions

### Java

```java
class Solution {
    public boolean isPalindrome(int n) {
        // Initialize variable to store the reversed number
        int reverse = 0;
        
        // Create a copy to preserve the original number for comparison
        int copy = n;
        
        // Reverse the number by extracting digits from right to left
        while (n > 0) {
            // Extract the rightmost digit
            int lastDigit = n % 10;
            
            // Build reversed number: shift current result left and add new digit
            reverse = reverse * 10 + lastDigit;
            
            // Remove the rightmost digit from original number
            n = n / 10;
        }
        
        // Check if reversed number equals the original number
        return reverse == copy;
    }
}
```

### JavaScript

```javascript
class Solution {
    isPalindrome(n) {
        // Initialize variable to store the reversed number
        let reverse = 0;
        
        // Create a copy to preserve the original number for comparison
        let copy = n;
        
        // Reverse the number by extracting digits from right to left
        while (n > 0) {
            // Extract the rightmost digit
            let lastDigit = n % 10;
            
            // Build reversed number: shift current result left and add new digit
            reverse = reverse * 10 + lastDigit;
            
            // Remove the rightmost digit (use Math.floor for integer division)
            n = Math.floor(n / 10);
        }
        
        // Check if reversed number equals the original number (strict equality)
        return reverse === copy;
    }
}
```

### Python

```python
class Solution:
    def isPalindrome(self, n):
        # Initialize variable to store the reversed number
        reverse = 0
        
        # Create a copy to preserve the original number for comparison
        copy = n
        
        # Reverse the number by extracting digits from right to left
        while n > 0:
            # Extract the rightmost digit
            lastDigit = n % 10
            
            # Build reversed number: shift current result left and add new digit
            reverse = reverse * 10 + lastDigit
            
            # Remove the rightmost digit (// is integer division in Python)
            n = n // 10
        
        # Check if reversed number equals the original number
        return reverse == copy
```

---

## Complexity Analysis

### Time Complexity: O(d) or O(log₁₀(n))
- Where d is the number of digits in n
- We process each digit exactly once during reversal
- Number of digits = ⌊log₁₀(n)⌋ + 1

### Space Complexity: O(1)
- We use only a constant amount of extra space
- Variables: reverse, copy, lastDigit (constant space regardless of input size)

---

## Alternative Approaches

### 1. String Conversion Approach

```java
// Java
class Solution {
    public boolean isPalindrome(int n) {
        String str = String.valueOf(n);
        String reversed = new StringBuilder(str).reverse().toString();
        return str.equals(reversed);
    }
}
```

**Pros:** Simple and readable  
**Cons:** Uses extra space for string operations

### 2. Two-Pointer String Approach

```java
// Java
class Solution {
    public boolean isPalindrome(int n) {
        String str = String.valueOf(n);
        int left = 0, right = str.length() - 1;
        
        while (left < right) {
            if (str.charAt(left) != str.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
```

### 3. Half-Reversal Optimization

```java
// Java - More efficient for large numbers
class Solution {
    public boolean isPalindrome(int n) {
        if (n < 0 || (n % 10 == 0 && n != 0)) return false;
        
        int reversed = 0;
        while (n > reversed) {
            reversed = reversed * 10 + n % 10;
            n /= 10;
        }
        
        // For odd digits: n == reversed/10, for even: n == reversed
        return n == reversed || n == reversed / 10;
    }
}
```

### 4. Recursive Approach

```java
// Java
class Solution {
    public boolean isPalindrome(int n) {
        return n == reverse(n, 0);
    }
    
    private int reverse(int n, int reversed) {
        if (n == 0) return reversed;
        return reverse(n / 10, reversed * 10 + n % 10);
    }
}
```

---

## Edge Cases to Consider

1. **Single Digit (n = 7):** All single digits are palindromes → true
2. **Zero (n = 0):** Zero is a palindrome → true
3. **Two-Digit Palindrome (n = 11):** Should return true
4. **Two-Digit Non-Palindrome (n = 12):** Should return false
5. **Trailing Zeros (n = 10):** Should return false (reverse is 1, not 01)
6. **Even-Length Palindrome (n = 1221):** Should return true
7. **Odd-Length Palindrome (n = 12321):** Should return true
8. **Large Palindromes:** Test with maximum constraint values

## Detailed Edge Case Analysis

```java
// Edge cases with explanations
Input: 0     → Output: true  (single digit)
Input: 5     → Output: true  (single digit)
Input: 10    → Output: false (reverse: 01 = 1, 10 ≠ 1)
Input: 11    → Output: true  (11 = 11)
Input: 121   → Output: true  (odd-length palindrome)
Input: 1221  → Output: true  (even-length palindrome)
Input: 12321 → Output: true  (odd-length palindrome)
Input: 123   → Output: false (123 ≠ 321)
```

---

## Test Cases

```java
public void testPalindrome() {
    Solution sol = new Solution();
    
    // Single digits (all should be true)
    assert sol.isPalindrome(0) == true;
    assert sol.isPalindrome(7) == true;
    
    // Two digits
    assert sol.isPalindrome(11) == true;   // Palindrome
    assert sol.isPalindrome(12) == false;  // Not palindrome
    assert sol.isPalindrome(10) == false;  // Trailing zero
    
    // Multi-digit palindromes
    assert sol.isPalindrome(121) == true;    // Odd-length
    assert sol.isPalindrome(1221) == true;   // Even-length
    assert sol.isPalindrome(12321) == true;  // Odd-length
    
    // Non-palindromes
    assert sol.isPalindrome(123) == false;
    assert sol.isPalindrome(1000) == false;
    
    // Larger palindromes
    assert sol.isPalindrome(1234321) == true;
    assert sol.isPalindrome(9876789) == false;
}
```

---

## Step-by-Step Visualization

### Visual Example 1: n = 1221 (Even-length Palindrome)

```
Step 1: n = 1221, copy = 1221, reverse = 0
   1221 % 10 = 1  →  reverse = 0*10 + 1 = 1
   n = 1221/10 = 122

Step 2: n = 122, reverse = 1
   122 % 10 = 2   →  reverse = 1*10 + 2 = 12
   n = 122/10 = 12

Step 3: n = 12, reverse = 12
   12 % 10 = 2    →  reverse = 12*10 + 2 = 122
   n = 12/10 = 1

Step 4: n = 1, reverse = 122
   1 % 10 = 1     →  reverse = 122*10 + 1 = 1221
   n = 1/10 = 0

Comparison: reverse (1221) == copy (1221) → true
```

### Visual Example 2: n = 123 (Non-Palindrome)

```
Step 1: n = 123, copy = 123, reverse = 0
   123 % 10 = 3   →  reverse = 0*10 + 3 = 3
   n = 123/10 = 12

Step 2: n = 12, reverse = 3
   12 % 10 = 2    →  reverse = 3*10 + 2 = 32
   n = 12/10 = 1

Step 3: n = 1, reverse = 32
   1 % 10 = 1     →  reverse = 32*10 + 1 = 321
   n = 1/10 = 0

Comparison: reverse (321) == copy (123) → false
```

---

## Common Mistakes to Avoid

1. **Not Preserving Original:** Forgetting to create a copy before modifying n
2. **Integer Overflow:** For very large numbers, the reverse might exceed integer limits
3. **Negative Numbers:** Current solution assumes non-negative numbers
4. **Leading Zeros:** Numbers like 10 are not palindromes (reverse is 1, not 01)
5. **Wrong Division in JavaScript:** Use `Math.floor(n/10)` instead of `n/10`
6. **Equality Operator:** Use `===` in JavaScript for strict comparison

---

## Extensions and Variations

### 1. Handle Negative Numbers

```java
class Solution {
    public boolean isPalindrome(int n) {
        // Negative numbers are not palindromes
        if (n < 0) return false;
        
        int reverse = 0;
        int copy = n;
        
        while (n > 0) {
            reverse = reverse * 10 + n % 10;
            n /= 10;
        }
        
        return reverse == copy;
    }
}
```

### 2. Handle Integer Overflow

```java
class Solution {
    public boolean isPalindrome(int n) {
        // Convert to string to avoid overflow issues
        String str = String.valueOf(n);
        String reversed = new StringBuilder(str).reverse().toString();
        return str.equals(reversed);
    }
}
```

### 3. Palindrome Check Without Full Reversal

```java
class Solution {
    public boolean isPalindrome(int n) {
        if (n < 0 || (n % 10 == 0 && n != 0)) return false;
        
        int reversedHalf = 0;
        // Only reverse half the number
        while (n > reversedHalf) {
            reversedHalf = reversedHalf * 10 + n % 10;
            n /= 10;
        }
        
        // For odd digits, ignore middle digit
        return n == reversedHalf || n == reversedHalf / 10;
    }
}
```

---

## Performance Comparison

| Approach            | Time Complexity | Space Complexity | Pros                    | Cons                        |
|--------------------|-----------------|------------------|-------------------------|-----------------------------|
| Number Reversal    | O(log n)        | O(1)             | Optimal space          | Potential overflow          |
| String Conversion  | O(log n)        | O(log n)         | No overflow issues     | Extra space for strings     |
| Two Pointers       | O(log n)        | O(log n)         | Early termination      | String conversion overhead  |
| Half Reversal      | O(log n)        | O(1)             | Optimal + no overflow  | More complex logic          |

---

## Key Learning Points

1. **Number Reversal Pattern:** Essential technique for digit manipulation
2. **Preserve Original Data:** Always keep a copy when modifying input
3. **Palindrome Properties:** Reads same forwards and backwards
4. **Edge Case Handling:** Single digits, trailing zeros, negative numbers
5. **Overflow Considerations:** Be aware of integer limits for large numbers

---

## Related Problems

1. **Reverse Integer:** Reverse digits of an integer
2. **Valid Palindrome:** Check if string is palindrome (alphanumeric only)
3. **Palindromic Substrings:** Count all palindromic substrings
4. **Longest Palindromic Substring:** Find the longest palindromic substring
5. **Palindrome Linked List:** Check if linked list is palindrome
6. **Valid Palindrome II:** Check palindrome with at most one character deletion

---

## Practice Tips

1. **Start with small examples:** Test with single digits first
2. **Handle edge cases:** Consider 0, 10, 11, etc.
3. **Trace through execution:** Follow the digit extraction process step by step
4. **Understand the pattern:** This reversal technique is used in many problems
5. **Consider alternatives:** Think about string-based approaches for comparison

---

## Summary

The palindrome number problem is a fundamental application of digit manipulation techniques. The mathematical approach using number reversal is optimal for space complexity and demonstrates core programming concepts like:

- **Digit extraction using modulo**
- **Number building using multiplication**
- **Preserving original data**
- **Comparison operations**

**Time Complexity:** O(log n) - proportional to number of digits  
**Space Complexity:** O(1) - constant extra space  
**Key Insight:** A number is palindromic if it equals its reverse

This problem serves as an excellent introduction to digit manipulation and forms the foundation for more complex number theory problems in competitive programming.