# Count all Digits of a Number

### Difficulty: `Easy`

### **Practice Link: [LeetCode/GeeksforGeeks](#)**

## Problem Statement

You are given an integer **n**. You need to **return the number of digits** in the number.

The number will have **no** leading zeroes, except when the number is **0** itself.

## Examples

```txt
Example 1:
Input:  n = 4
Output: 1
Explanation: There is only 1 digit in 4.

Example 2:
Input:  n = 14
Output: 2
Explanation: There are 2 digits in 14.

Example 3:
Input:  n = 234
Output: 3
Explanation: There are 3 digits in 234.

Example 4:
Input:  n = 0
Output: 1
Explanation: 0 has 1 digit.
```

## Constraints

- 0 ≤ n ≤ 5000
- n will contain no leading zeroes except when it is 0 itself.

## `1. Brute Force Approach`

### Algorithm / Intuition

## Solution1: Division by 10

## Intuition:

We can count the digits by repeatedly dividing the number by 10 until it becomes 0. Each division represents removing one digit from the right side of the number.

## Approach:

- Handle the special case when n = 0 (return 1 as 0 has 1 digit).
- Initialize a counter variable to 0.
- Use a while loop to divide n by 10 until n becomes 0.
- Increment the counter in each iteration.
- Return the counter.

## DryRun:

Input: n = 234

```
Initial: n = 234, count = 0
Iteration 1: n = 234/10 = 23, count = 1
Iteration 2: n = 23/10 = 2, count = 2  
Iteration 3: n = 2/10 = 0, count = 3
Loop ends as n = 0
Answer: count = 3
```

## Code.

## Java

```java
class Solution {
    public int countDigit(int n) {
      
    
      if(n==0) return 1;
       
       int count = 0;

      while(n>0){
        count++;
        n= n/10;
      }

      return count;
    }
}
```

## JavaScript

```javascript
class Solution {
  countDigit(n) {
    if (n == 0) return 1;

    let count = 0;

    while (n > 0) {
      count++;
      n = Math.floor(n / 10);
    }

    return count;
  }
}
```

## Python

```python
import math

class Solution:
    def countDigit(self, n):

        if n==0:
            return 1

        count = 0

        while n>0:
            count+=1
            n = math.floor(n/10)
    
        return count
```

## Complexity Analysis

### Time Complexity: O(digits) or O(log₁₀(n))

The number of iterations depends on the number of digits in n, which is logarithmic to the value of n.

### Space Complexity: O(1)

We only use a constant amount of extra space for the counter variable.

---

## `2. Optimal Approach`

### Algorithm / Intuition

## Solution2: Using Logarithm

## Intuition:

The number of digits in a positive integer n can be calculated using the mathematical formula: `floor(log₁₀(n)) + 1`. This works because log₁₀(n) tells us the power of 10 that gives us n.

## Approach:

- Handle the special case when n = 0 (return 1).
- Use the formula: `floor(log₁₀(n)) + 1`
- Return the result.

## Code.

## Java

```java
class Solution {
    public int countDigit(int n) {
        if (n == 0) return 1;
        
        return (int) Math.floor(Math.log10(n)) + 1;
    }
}
```

## JavaScript

```javascript
class Solution {
  countDigit(n) {
    if (n == 0) return 1;
    
    return Math.floor(Math.log10(n)) + 1;
  }
}
```

## Python

```python
import math

class Solution:
    def countDigit(self, n):
        if n == 0:
            return 1
            
        return math.floor(math.log10(n)) + 1
```

## Complexity Analysis

### Time Complexity: O(1)

Logarithm calculation is considered a constant time operation.

### Space Complexity: O(1)

No extra space is used.

---

## Alternative Approaches (Using Built-in Functions)

### Java
```java
class Solution {
    public int countDigit(int n) {
        return String.valueOf(n).length();
    }
}
```

### JavaScript
```javascript
class Solution {
  countDigit(n) {
    return n.toString().length;
  }
}
```

### Python
```python
class Solution:
    def countDigit(self, n):
        return len(str(n))
```

---

## Edge Cases to Consider

1. **Zero:** The number 0 has exactly 1 digit
2. **Single Digit Numbers (1-9):** Should return 1
3. **Powers of 10 (10, 100, 1000):** Common boundary cases
4. **Maximum Constraint Value:** n = 5000 should return 4
5. **Negative Numbers:** Not applicable per problem constraints

## Follow-up Questions

1. **Handle Negative Numbers:** How would you modify the solution for negative integers?
2. **Count Specific Digits:** How to count occurrences of a particular digit?
3. **Sum of Digits:** How to calculate the sum of all digits instead of count?
4. **Reverse the Number:** How to reverse the digits of the number?

## Summary

| Approach | Time Complexity | Space Complexity | Pros | Cons |
|----------|----------------|------------------|------|------|
| Division by 10 | O(log n) | O(1) | Easy to understand, works for all cases | Slightly slower for large numbers |
| Logarithm | O(1) | O(1) | Fastest approach | May have precision issues with very large numbers |
| String Conversion | O(log n) | O(log n) | Most readable and concise | Uses extra space for string |

**Recommended Solution:** Use the division by 10 approach (Brute Force) for reliability and clarity, or the logarithm approach for optimal time complexity when precision is not a concern.