# Return the Largest Digit in a Number

### Difficulty: `Easy`

## Problem Statement

You are given an integer **n**. Return the **largest digit** present in the number.

## Examples

```txt
Example 1:
Input:  n = 25
Output: 5
Explanation: The largest digit in 25 is 5.

Example 2:
Input:  n = 99
Output: 9
Explanation: The largest digit in 99 is 9.

Example 3:
Input:  n = 1
Output: 1
Explanation: Single digit number, so the largest (and only) digit is 1.

Example 4:
Input:  n = 3782
Output: 8
Explanation: The digits are 3, 7, 8, 2. The largest is 8.

Example 5:
Input:  n = 10203
Output: 3
Explanation: The digits are 1, 0, 2, 0, 3. The largest is 3.
```

## Constraints

- 1 ≤ n ≤ 10^9
- n is a positive integer (no negative numbers)

## Key Concepts

- **Digit Extraction:** Use modulo operator (`%`) to get individual digits
- **Maximum Tracking:** Keep track of the largest digit seen so far
- **Digit Removal:** Use integer division to process all digits
- **Comparison:** Update maximum when a larger digit is found

---

## Algorithm / Intuition

### Approach: Digit-by-Digit Maximum Tracking

The strategy is to:
1. **Extract each digit** from right to left using modulo operation
2. **Compare each digit** with the current maximum
3. **Update the maximum** whenever a larger digit is found
4. **Continue until all digits are processed**
5. **Return the maximum digit found**

### Core Logic:
- Start with `maxDigit = 0` (since 0 is the smallest possible digit)
- For each digit extracted, check if it's larger than current maximum
- Keep updating the maximum as we find larger digits
- The final maximum will be the largest digit in the entire number

### Mathematical Process:
```
For number 3782:
Digits: 3, 7, 8, 2
Process: Start with max = 0
- Check 2: max = max(0, 2) = 2
- Check 8: max = max(2, 8) = 8  
- Check 7: max = max(8, 7) = 8
- Check 3: max = max(8, 3) = 8
Result: 8
```

### Step-by-Step Algorithm:
1. Initialize `maxDigit = 0` to track the largest digit found
2. While the number has digits (n > 0):
   - Extract the rightmost digit using `n % 10`
   - Compare this digit with current maximum
   - Update maximum if current digit is larger
   - Remove the rightmost digit using `n / 10`
3. Return the maximum digit found

### DryRun Example:

Input: n = 3782

```
Initial: n = 3782, maxDigit = 0

Iteration 1:
- lastDigit = 3782 % 10 = 2
- 2 > 0? Yes → maxDigit = 2
- n = 3782 / 10 = 378

Iteration 2:
- lastDigit = 378 % 10 = 8
- 8 > 2? Yes → maxDigit = 8
- n = 378 / 10 = 37

Iteration 3:
- lastDigit = 37 % 10 = 7
- 7 > 8? No → maxDigit remains 8
- n = 37 / 10 = 3

Iteration 4:
- lastDigit = 3 % 10 = 3
- 3 > 8? No → maxDigit remains 8
- n = 3 / 10 = 0

Loop ends as n = 0
Answer: maxDigit = 8
```

---

## Code Solutions

### Java

```java
class Solution {
    public int largestDigit(int n) {
        // Initialize maximum digit to 0 (smallest possible digit)
        int maxDigit = 0;
        
        // Process each digit from right to left
        while (n > 0) {
            // Extract the rightmost digit
            int lastDigit = n % 10;
            
            // Update maximum if current digit is larger
            if (lastDigit > maxDigit) {
                maxDigit = lastDigit;
            }
            
            // Remove the rightmost digit
            n = n / 10;
        }
        
        // Return the largest digit found
        return maxDigit;
    }
}
```

### JavaScript

```javascript
class Solution {
    largestDigit(n) {
        // Initialize maximum digit to 0 (smallest possible digit)
        let maxDigit = 0;
        
        // Process each digit from right to left
        while (n > 0) {
            // Extract the rightmost digit
            let lastDigit = n % 10;
            
            // Update maximum if current digit is larger
            if (lastDigit > maxDigit) {
                maxDigit = lastDigit;
            }
            
            // Remove the rightmost digit (use Math.floor for integer division)
            n = Math.floor(n / 10);
        }
        
        // Return the largest digit found
        return maxDigit;
    }
}
```

### Python

```python
class Solution:
    def largestDigit(self, n):
        # Initialize maximum digit to 0 (smallest possible digit)
        maxDigit = 0
        
        # Process each digit from right to left
        while n > 0:
            # Extract the rightmost digit
            lastDigit = n % 10
            
            # Update maximum if current digit is larger
            if lastDigit > maxDigit:
                maxDigit = lastDigit
            
            # Remove the rightmost digit (// is integer division in Python)
            n = n // 10
        
        # Return the largest digit found
        return maxDigit
```

---

## Complexity Analysis

### Time Complexity: O(d) or O(log₁₀(n))
- Where d is the number of digits in n
- We visit each digit exactly once
- Number of digits = ⌊log₁₀(n)⌋ + 1

### Space Complexity: O(1)
- We use only a constant amount of extra space
- Variables: maxDigit, lastDigit (constant space regardless of input size)

---

## Alternative Approaches

### 1. String Conversion Approach

```java
// Java
class Solution {
    public int largestDigit(int n) {
        String numStr = String.valueOf(n);
        int maxDigit = 0;
        
        for (char c : numStr.toCharArray()) {
            int digit = c - '0';  // Convert char to int
            maxDigit = Math.max(maxDigit, digit);
        }
        
        return maxDigit;
    }
}
```

**Pros:** Simple and readable  
**Cons:** Uses extra space for string

### 2. Using Built-in Functions

```java
// Java
class Solution {
    public int largestDigit(int n) {
        return String.valueOf(n)
                     .chars()
                     .map(c -> c - '0')
                     .max()
                     .orElse(0);
    }
}
```

```python
# Python
class Solution:
    def largestDigit(self, n):
        return int(max(str(n)))
```

**Pros:** Very concise  
**Cons:** Less educational, uses more memory

### 3. Recursive Approach

```java
// Java
class Solution {
    public int largestDigit(int n) {
        // Base case: single digit
        if (n < 10) return n;
        
        // Recursive case: max of last digit and max of remaining digits
        return Math.max(n % 10, largestDigit(n / 10));
    }
}
```

### 4. Early Termination Optimization

```java
// Java - Stop early if we find digit 9
class Solution {
    public int largestDigit(int n) {
        int maxDigit = 0;
        
        while (n > 0 && maxDigit < 9) {  // Stop if we find 9
            int digit = n % 10;
            maxDigit = Math.max(maxDigit, digit);
            n /= 10;
        }
        
        return maxDigit;
    }
}
```

---

## Edge Cases to Consider

1. **Single Digit (n = 7):** Should return 7
2. **All Same Digits (n = 5555):** Should return 5
3. **Contains Zero (n = 1023):** Should return 3 (0 doesn't affect max)
4. **Largest Possible Digit (n = 192):** Should return 9
5. **Decreasing Order (n = 9876):** Should return 9 (first digit)
6. **Increasing Order (n = 1234):** Should return 4 (last digit checked first)
7. **Mixed with Zeros (n = 50903):** Should return 9

## Detailed Edge Case Analysis

```java
// Edge cases with step-by-step analysis
Input: 1     → Output: 1 (single digit)
Input: 5555  → Output: 5 (all digits same)
Input: 1023  → Output: 3 (process: 3→0→2→1, max=3)
Input: 9001  → Output: 9 (process: 1→0→0→9, max=9)
Input: 102   → Output: 2 (process: 2→0→1, max=2)
```

---

## Test Cases

```java
public void testLargestDigit() {
    Solution sol = new Solution();
    
    // Basic examples
    assert sol.largestDigit(25) == 5;
    assert sol.largestDigit(99) == 9;
    assert sol.largestDigit(1) == 1;
    
    // Edge cases
    assert sol.largestDigit(3782) == 8;      // Mixed digits
    assert sol.largestDigit(10203) == 3;     // Contains zeros
    assert sol.largestDigit(5555) == 5;      // All same digits
    assert sol.largestDigit(9876543210L) == 9; // Large number
    
    // Order variations
    assert sol.largestDigit(123456789) == 9; // Increasing
    assert sol.largestDigit(987654321) == 9; // Decreasing
    assert sol.largestDigit(192837465) == 9; // Random order
}
```

---

## Step-by-Step Visualization

### Visual Example: n = 25

```
Step 1: n = 25, maxDigit = 0
   25 % 10 = 5
   5 > 0? Yes → maxDigit = 5
   n = 25/10 = 2

Step 2: n = 2, maxDigit = 5
   2 % 10 = 2
   2 > 5? No → maxDigit remains 5
   n = 2/10 = 0

Loop ends as n = 0
Result: maxDigit = 5
```

### Visual Example: n = 99

```
Step 1: n = 99, maxDigit = 0
   99 % 10 = 9
   9 > 0? Yes → maxDigit = 9
   n = 99/10 = 9

Step 2: n = 9, maxDigit = 9
   9 % 10 = 9
   9 > 9? No → maxDigit remains 9
   n = 9/10 = 0

Loop ends as n = 0
Result: maxDigit = 9
```

---

## Optimization Techniques

### 1. Early Termination

```java
class Solution {
    public int largestDigit(int n) {
        int maxDigit = 0;
        
        while (n > 0) {
            int digit = n % 10;
            maxDigit = Math.max(maxDigit, digit);
            
            // Early termination: 9 is the largest possible digit
            if (maxDigit == 9) return 9;
            
            n /= 10;
        }
        
        return maxDigit;
    }
}
```

### 2. Using Math.max()

```java
class Solution {
    public int largestDigit(int n) {
        int maxDigit = 0;
        
        while (n > 0) {
            maxDigit = Math.max(maxDigit, n % 10);
            n /= 10;
        }
        
        return maxDigit;
    }
}
```

---

## Common Mistakes to Avoid

1. **Wrong Initialization:** Starting with -1 or Integer.MIN_VALUE instead of 0
2. **Missing Math.floor():** In JavaScript, use `Math.floor(n/10)` for integer division
3. **Wrong Division Operator:** In Python, use `//` instead of `/` for integer division
4. **Forgetting Edge Cases:** Not testing with single digits or numbers containing 0
5. **Inefficient String Conversion:** Converting to string when mathematical approach is better

---

## Performance Comparison

| Approach           | Time Complexity | Space Complexity | Pros                          | Cons                     |
|-------------------|-----------------|------------------|-------------------------------|--------------------------|
| Mathematical      | O(log n)        | O(1)             | Optimal space, fast           | More code than built-ins |
| String Conversion | O(log n)        | O(log n)         | Simple to understand          | Extra space for string   |
| Built-in Max      | O(log n)        | O(log n)         | Very concise                  | Less educational         |
| Recursive         | O(log n)        | O(log n)         | Elegant, functional style     | Stack space overhead     |

---

## Key Learning Points

1. **Digit Extraction Pattern:** `n % 10` gets the last digit
2. **Maximum Tracking:** Initialize with smallest possible value (0)
3. **Comparison Logic:** Update maximum only when larger digit found
4. **Integer Division:** Remove processed digits with `n / 10`
5. **Early Termination:** Can stop when maximum possible value (9) is found

---

## Related Problems

1. **Find Minimum Digit:** Return the smallest digit in a number
2. **Sum of Digits:** Calculate sum of all digits
3. **Count Specific Digit:** Count occurrences of a particular digit
4. **Digital Root:** Keep summing digits until single digit
5. **Sort Digits:** Arrange digits in ascending/descending order
6. **Remove Digit:** Remove a digit to get maximum/minimum number

---

## Follow-up Questions

1. How would you find the smallest digit instead?
2. What if you need both largest and smallest digits?
3. How would you find the second largest digit?
4. Can you solve this without converting to string?
5. How would you handle negative numbers?
6. What's the most efficient approach for very large numbers?

---

## Extensions

### 1. Find Both Min and Max Digits

```java
class Solution {
    public int[] findMinMaxDigits(int n) {
        int minDigit = 9, maxDigit = 0;
        
        while (n > 0) {
            int digit = n % 10;
            minDigit = Math.min(minDigit, digit);
            maxDigit = Math.max(maxDigit, digit);
            n /= 10;
        }
        
        return new int[]{minDigit, maxDigit};
    }
}
```

### 2. Find Second Largest Digit

```java
class Solution {
    public int secondLargestDigit(int n) {
        int largest = -1, secondLargest = -1;
        
        while (n > 0) {
            int digit = n % 10;
            
            if (digit > largest) {
                secondLargest = largest;
                largest = digit;
            } else if (digit > secondLargest && digit != largest) {
                secondLargest = digit;
            }
            
            n /= 10;
        }
        
        return secondLargest;
    }
}
```

---

## Summary

Finding the largest digit in a number is a fundamental digit manipulation problem that demonstrates:

- **Basic digit extraction techniques**
- **Maximum value tracking patterns**
- **Efficient single-pass algorithms**
- **Edge case handling for special numbers**

**Time Complexity:** O(log n) - proportional to number of digits  
**Space Complexity:** O(1) - constant extra space  
**Key Insight:** Process digits one by one and maintain running maximum

This problem serves as an excellent introduction to digit manipulation and provides a foundation for more complex number processing algorithms. The mathematical approach is optimal and demonstrates fundamental programming concepts that apply to many similar problems.