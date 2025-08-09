# Check if the Number is Armstrong

### Difficulty: `Easy`

### **Practice Links:**

- **[InterviewBit - Armstrong Number](https://www.interviewbit.com/problems/armstrong-number/)**
- **[TakeUForward - Check if a Number is Armstrong Number or Not](https://takeuforward.org/maths/check-if-a-number-is-armstrong-number-or-not/)**
- **[GeeksforGeeks - Armstrong Numbers](https://www.geeksforgeeks.org/problems/armstrong-numbers2727/1)**

## Problem Statement

You are given an integer **n**. You need to check whether it is an **armstrong number** or not. Return **true** if it is an armstrong number, otherwise return **false**.

An **armstrong number** is a number which is **equal to the sum of the digits of the number, raised to the power of the number of digits**.

## Mathematical Definition

For a number with **d** digits: **n₁n₂n₃...nₐ**

**Armstrong Number:** n₁ᵈ + n₂ᵈ + n₃ᵈ + ... + nₐᵈ = Original Number

## Examples

```txt
Example 1:
Input:  n = 153
Output: true
Explanation: Number of digits = 3.
             1³ + 5³ + 3³ = 1 + 125 + 27 = 153.
             Therefore, it is an Armstrong number.

Example 2:
Input:  n = 12
Output: false
Explanation: Number of digits = 2.
             1² + 2² = 1 + 4 = 5.
             Therefore, it is not an Armstrong number.

Example 3:
Input:  n = 370
Output: true
Explanation: Number of digits = 3.
             3³ + 7³ + 0³ = 27 + 343 + 0 = 370.
             Therefore, it is an Armstrong number.

Example 4:
Input:  n = 9474
Output: true
Explanation: Number of digits = 4.
             9⁴ + 4⁴ + 7⁴ + 4⁴ = 6561 + 256 + 2401 + 256 = 9474.
             Therefore, it is an Armstrong number.
```

## Constraints

- 1 ≤ n ≤ 10^9
- n is a positive integer

## Key Concepts

- **Digit Counting:** Calculate total number of digits in the number
- **Digit Extraction:** Extract each digit using modulo operation
- **Power Calculation:** Raise each digit to the power of digit count
- **Sum Accumulation:** Add all powered digits
- **Comparison:** Check if sum equals original number

---

## Algorithm / Intuition

### Approach: Two-Phase Process

The strategy involves:

1. **Phase 1:** Count the total number of digits in the number
2. **Phase 2:** Extract each digit, raise it to the power of digit count, and sum all results
3. **Phase 3:** Compare the calculated sum with the original number

### Core Logic:

- **Preserve Original:** Save the original number before modification
- **Count Digits:** Determine how many digits the number has
- **Extract and Power:** For each digit, calculate digit^(total_digits)
- **Accumulate Sum:** Add all powered digits
- **Final Check:** Compare sum with original number

### Mathematical Process:

```
For number 153:
1. Count digits: 153 has 3 digits
2. Extract and power:
   - 3³ = 27
   - 5³ = 125
   - 1³ = 1
3. Sum: 27 + 125 + 1 = 153
4. Compare: 153 == 153 ✓ (Armstrong number)
```

### Step-by-Step Algorithm:

1. **Save original number** in a variable (since we'll modify the input)
2. **Count total digits** using a helper function
3. **Initialize sum = 0** to accumulate powered digits
4. **While number has digits:**
   - Extract the last digit using `n % 10`
   - Calculate `digit^(total_digits)` using power function
   - Add this powered value to sum
   - Remove the last digit using `n / 10`
5. **Compare sum with saved original number**
6. **Return the comparison result**

### DryRun Example:

Input: n = 153

```
Phase 1 - Count Digits:
countDigit(153):
- n = 153, count = 0
- 153 > 0? Yes → count = 1, n = 15
- 15 > 0? Yes → count = 2, n = 1
- 1 > 0? Yes → count = 3, n = 0
- digits = 3

Phase 2 - Calculate Armstrong Sum:
Initial: n = 153, save = 153, digits = 3, sum = 0

Iteration 1:
- lastDigit = 153 % 10 = 3
- sum += 3³ = 0 + 27 = 27
- n = 153 / 10 = 15

Iteration 2:
- lastDigit = 15 % 10 = 5
- sum += 5³ = 27 + 125 = 152
- n = 15 / 10 = 1

Iteration 3:
- lastDigit = 1 % 10 = 1
- sum += 1³ = 152 + 1 = 153
- n = 1 / 10 = 0

Phase 3 - Comparison:
save (153) == sum (153) → true
Answer: true (153 is an Armstrong number)
```

---

## Code Solutions

### Java

```java
class Solution {
    public boolean isArmstrong(int n) {
        // Initialize sum to accumulate powered digits
        int sum = 0;

        // Save original number since we'll modify n during processing
        int save = n;

        // Count total number of digits in the number
        int digits = countDigit(n);

        // Extract each digit, raise to power, and accumulate sum
        while (n > 0) {
            // Extract the rightmost digit
            int lastDigit = n % 10;

            // Add digit raised to power of total digits to sum
            sum += Math.pow(lastDigit, digits);

            // Remove the rightmost digit
            n = n / 10;
        }

        // Check if calculated sum equals original number
        return save == sum;
    }

    // Helper function to count number of digits
    public int countDigit(int n) {
        // Initialize digit counter
        int count = 0;

        // Count digits by repeatedly dividing by 10
        while (n > 0) {
            count++;           // Increment digit count
            n = n / 10;        // Remove rightmost digit
        }

        // Return total number of digits
        return count;
    }
}
```

### JavaScript

```javascript
class Solution {
  // Helper function to count number of digits
  countDigit(n) {
    // Initialize digit counter
    let count = 0;

    // Count digits by repeatedly dividing by 10
    while (n > 0) {
      count++; // Increment digit count
      n = Math.floor(n / 10); // Remove rightmost digit (integer division)
    }

    // Return total number of digits
    return count;
  }

  isArmstrong(n) {
    // Initialize sum to accumulate powered digits
    let sum = 0;

    // Save original number since we'll modify n during processing
    let save = n;

    // Count total number of digits in the number
    let digits = this.countDigit(n);

    // Extract each digit, raise to power, and accumulate sum
    while (n > 0) {
      // Extract the rightmost digit
      let lastDigit = n % 10;

      // Add digit raised to power of total digits to sum
      sum += Math.pow(lastDigit, digits);

      // Remove the rightmost digit (integer division)
      n = Math.floor(n / 10);
    }

    // Check if calculated sum equals original number
    return save == sum;
  }
}
```

### Python

```python
class Solution:
    def isArmstrong(self, n):
        # Initialize sum to accumulate powered digits
        sum = 0

        # Save original number since we'll modify n during processing
        save = n

        # Count total number of digits in the number
        digits = self.countDigit(n)

        # Extract each digit, raise to power, and accumulate sum
        while n > 0:
            # Extract the rightmost digit
            lastDigit = n % 10

            # Add digit raised to power of total digits to sum
            sum += pow(lastDigit, digits)

            # Remove the rightmost digit (integer division)
            n = n // 10

        # Check if calculated sum equals original number
        return sum == save

    # Helper function to count number of digits
    def countDigit(self, n):
        # Initialize digit counter
        count = 0

        # Count digits by repeatedly dividing by 10
        while n > 0:
            count += 1      # Increment digit count
            n = n // 10     # Remove rightmost digit (integer division)

        # Return total number of digits
        return count
```

---

## Complexity Analysis

### Time Complexity: O(d) where d is the number of digits

- **Digit Counting:** O(d) - visit each digit once
- **Armstrong Calculation:** O(d) - visit each digit once, power operation is O(1) for reasonable inputs
- **Total:** O(d) + O(d) = O(d) or O(log₁₀(n))

### Space Complexity: O(1)

- We use only a constant amount of extra space
- Variables: sum, save, digits, lastDigit, count (constant space)

---

## Alternative Approaches

### 1. Single Pass with String Conversion

```java
// Java
class Solution {
    public boolean isArmstrong(int n) {
        String numStr = String.valueOf(n);
        int digits = numStr.length();
        int sum = 0;

        for (char c : numStr.toCharArray()) {
            int digit = c - '0';
            sum += Math.pow(digit, digits);
        }

        return sum == n;
    }
}
```

### 2. Recursive Digit Counting

```java
// Java
class Solution {
    public boolean isArmstrong(int n) {
        int digits = countDigitsRecursive(n);
        return armstrongSum(n, digits) == n;
    }

    private int countDigitsRecursive(int n) {
        if (n == 0) return 0;
        return 1 + countDigitsRecursive(n / 10);
    }

    private int armstrongSum(int n, int digits) {
        if (n == 0) return 0;
        int digit = n % 10;
        return (int)Math.pow(digit, digits) + armstrongSum(n / 10, digits);
    }
}
```

### 3. Using Mathematical Formula for Digit Count

```java
// Java
class Solution {
    public boolean isArmstrong(int n) {
        int original = n;
        int digits = (n == 0) ? 1 : (int)Math.log10(n) + 1;  // Mathematical digit count
        int sum = 0;

        while (n > 0) {
            int digit = n % 10;
            sum += Math.pow(digit, digits);
            n /= 10;
        }

        return sum == original;
    }
}
```

### 4. Optimized with Early Termination

```java
// Java
class Solution {
    public boolean isArmstrong(int n) {
        int original = n;
        int digits = String.valueOf(n).length();
        int sum = 0;

        while (n > 0) {
            int digit = n % 10;
            sum += Math.pow(digit, digits);

            // Early termination if sum exceeds original
            if (sum > original) return false;

            n /= 10;
        }

        return sum == original;
    }
}
```

---

## Famous Armstrong Numbers

### Complete List of Armstrong Numbers:

```
1-digit: 1, 2, 3, 4, 5, 6, 7, 8, 9
3-digit: 153, 371, 407
4-digit: 1634, 8208, 9474
5-digit: 54748, 92727, 93084
6-digit: 548834
7-digit: 1741725, 4210818, 9800817, 9926315
8-digit: 24678050, 24678051, 88593477
9-digit: 146511208, 472335975, 534494836, 912985153
10-digit: 4679307774
```

### Note: No 2-digit Armstrong numbers exist!

---

## Edge Cases to Consider

1. **Single Digit (n = 5):** 5¹ = 5 → true (all single digits are Armstrong)
2. **Two Digits (n = 12):** 1² + 2² = 1 + 4 = 5 ≠ 12 → false
3. **Three Digits (n = 153):** 1³ + 5³ + 3³ = 1 + 125 + 27 = 153 → true
4. **Contains Zero (n = 407):** 4³ + 0³ + 7³ = 64 + 0 + 343 = 407 → true
5. **Large Armstrong (n = 9474):** 9⁴ + 4⁴ + 7⁴ + 4⁴ = 6561 + 256 + 2401 + 256 = 9474 → true
6. **Non-Armstrong (n = 123):** 1³ + 2³ + 3³ = 1 + 8 + 27 = 36 ≠ 123 → false

---

## Test Cases

```java
public void testArmstrong() {
    Solution sol = new Solution();

    // Single digits (all are Armstrong)
    assert sol.isArmstrong(1) == true;
    assert sol.isArmstrong(5) == true;
    assert sol.isArmstrong(9) == true;

    // Two digits (none are Armstrong)
    assert sol.isArmstrong(10) == false;
    assert sol.isArmstrong(12) == false;
    assert sol.isArmstrong(99) == false;

    // Three digit Armstrong numbers
    assert sol.isArmstrong(153) == true;
    assert sol.isArmstrong(371) == true;
    assert sol.isArmstrong(407) == true;

    // Three digit non-Armstrong
    assert sol.isArmstrong(123) == false;
    assert sol.isArmstrong(370) == false;

    // Four digit Armstrong numbers
    assert sol.isArmstrong(1634) == true;
    assert sol.isArmstrong(8208) == true;
    assert sol.isArmstrong(9474) == true;

    // Four digit non-Armstrong
    assert sol.isArmstrong(1234) == false;
}
```

---

## Step-by-Step Visualization

### Visual Example: n = 371

```
Phase 1 - Count Digits:
371 → 37 → 3 → 0
Count: 3 digits

Phase 2 - Calculate Powers:
Step 1: digit=1, 1³=1,   sum=0+1=1,   n=37
Step 2: digit=7, 7³=343, sum=1+343=344, n=3
Step 3: digit=3, 3³=27,  sum=344+27=371, n=0

Phase 3 - Compare:
original(371) == sum(371) → true
```

### Visual Example: n = 12

```
Phase 1 - Count Digits:
12 → 1 → 0
Count: 2 digits

Phase 2 - Calculate Powers:
Step 1: digit=2, 2²=4, sum=0+4=4, n=1
Step 2: digit=1, 1²=1, sum=4+1=5, n=0

Phase 3 - Compare:
original(12) == sum(5) → false
```

---

## Common Mistakes to Avoid

1. **Not Preserving Original:** Forgetting to save the original number before modification
2. **Wrong Power Base:** Using fixed power instead of digit count
3. **Integer Overflow:** Large numbers might cause overflow in power calculations
4. **Off-by-One in Digit Count:** Incorrect digit counting logic
5. **Division Errors:** Using `/` instead of `//` in Python, forgetting `Math.floor()` in JavaScript

---

## Optimization Techniques

### 1. Early Termination

```java
// Stop if sum exceeds original (impossible to be Armstrong)
if (sum > original) return false;
```

### 2. Precomputed Powers

```java
// For small digit counts, precompute powers
int[][] powers = new int[10][5]; // digits 0-9, powers 1-4
// Fill the table once, then lookup instead of computing
```

### 3. Avoid Repeated Digit Counting

```java
// If processing multiple numbers, count digits more efficiently
int digits = (n == 0) ? 1 : (int)Math.log10(n) + 1;
```

---

## Mathematical Properties

### 1. Armstrong Number Characteristics

- **Single digits:** All are Armstrong numbers (1¹=1, 2¹=2, etc.)
- **Two digits:** No Armstrong numbers exist
- **Distribution:** Armstrong numbers become increasingly rare
- **Finite Set:** Only finite Armstrong numbers exist for each digit length

### 2. Related Concepts

- **Narcissistic Numbers:** Generalization of Armstrong numbers
- **Perfect Digital Invariant:** Numbers that are sum of some function of their digits
- **Kaprekar Numbers:** Related digit manipulation concept

---

## Performance Comparison

| Approach                 | Time Complexity | Space Complexity | Pros                      | Cons                      |
| ------------------------ | --------------- | ---------------- | ------------------------- | ------------------------- |
| Two-Pass Mathematical    | O(log n)        | O(1)             | Clear separation of logic | Two passes through digits |
| Single-Pass String       | O(log n)        | O(log n)         | Simpler logic             | Extra space for string    |
| Recursive                | O(log n)        | O(log n)         | Elegant and functional    | Stack overhead            |
| Mathematical Digit Count | O(log n)        | O(1)             | Efficient digit counting  | Less educational          |

---

## Key Learning Points

1. **Two-Phase Algorithm Design:** Separate concerns (counting vs. calculation)
2. **Digit Manipulation Patterns:** Extract, process, remove digit cycle
3. **Power Calculations:** Understanding exponentiation in number theory
4. **Preservation of Original Data:** Save input before modification
5. **Mathematical Problem Solving:** Converting mathematical definitions to algorithms

---

## Related Problems

1. **Perfect Numbers:** Numbers equal to sum of proper divisors
2. **Happy Numbers:** Numbers that eventually reach 1 through digit square sum
3. **Narcissistic Numbers:** Generalized Armstrong numbers with different functions
4. **Kaprekar Numbers:** Numbers with special digit rearrangement properties
5. **Sum of Digit Powers:** Various digit power sum problems
6. **Digital Root:** Iterative digit sum until single digit

---

## Follow-up Questions

1. How would you find all Armstrong numbers up to a given limit?
2. Can you modify this to work with different digit functions (like digit factorial)?
3. How would you handle very large numbers that cause integer overflow?
4. What's the most efficient way to check multiple numbers for Armstrong property?
5. How would you implement this using only recursion?

---

## Summary

The Armstrong number problem demonstrates:

- **Multi-phase algorithm design** (count digits, then calculate)
- **Mathematical property verification** through computation
- **Digit manipulation techniques** fundamental to number theory
- **Helper function design** for code organization and reusability

**Time Complexity:** O(log n) - proportional to number of digits  
**Space Complexity:** O(1) - constant extra space  
**Key Insight:** Separate digit counting from power calculation for clarity

This problem serves as an excellent introduction to mathematical algorithms and provides a foundation for more complex number theory problems. The two-phase approach demonstrates good algorithm design principles and the importance of breaking complex problems into manageable sub-problems.
