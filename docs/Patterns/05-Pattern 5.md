# Pattern 5 - Inverted Right Triangle Star Pattern

### Difficulty: `Easy`

## Problem Statement

You are given an integer **n**. You need to **recreate the pattern** shown below for any value of N.

The pattern should be an **inverted right triangle of stars** where each row **i** (counting from top) contains **n-i+1** stars, creating a decreasing triangle pattern.

## Examples

```txt
Example 1:
Input:  n = 4
Output:
****
***
**
*

Example 2:
Input:  n = 5
Output:
*****
****
***
**
*

Example 3:
Input:  n = 3
Output:
***
**
*

Example 4:
Input:  n = 1
Output:
*
```

## Constraints

- 1 ≤ n ≤ 20
- Print the pattern in the function given to you.

## `1. Brute Force Approach`

### Algorithm / Intuition

## Solution1: Nested Loop Approach

## Intuition:

To create an inverted right triangle star pattern, we need to print n rows, where the first row contains n stars, the second row contains n-1 stars, and so on until the last row contains 1 star. This forms an inverted right triangle that decreases in size from top to bottom. This can be achieved using nested loops - the outer loop handles the rows (decreasing from n to 1) and the inner loop handles printing the stars for each row.

## Approach:

- Use an outer loop to iterate through rows (from n down to 1).
- Use an inner loop to print stars for the current row (from 1 to current row value i).
- In the inner loop, print a star "*".
- After completing each row (inner loop), print a newline to move to the next row.

## DryRun:

Input: n = 5

```
Row 1: i = 5, Print 5 stars:  *****
Row 2: i = 4, Print 4 stars:  ****
Row 3: i = 3, Print 3 stars:  ***
Row 4: i = 2, Print 2 stars:  **
Row 5: i = 1, Print 1 star:   *

Final Output:
*****
****
***
**
*
```

## Code.

## Java

```java
class Solution {
  public void pattern5(int n) {
    for (int i = n; i > 0; i--) {
      for (int j = 1; j <= i; j++) {
        System.out.print("*");
      }
      System.out.println();
    }
  }
}
```

## JavaScript

```javascript
class Solution {
  pattern5(n) {
    for (let i = n; i > 0; i--) {
      for (let j = 1; j <= i; j++) {
        process.stdout.write("*");
      }
      console.log();
    }
  }
}
```

## Python

```python
class Solution:
    def pattern5(self, n):
        for i in range (n,0,-1):
            for j in range (i):
                print("*", end="")
            print();
```

## Complexity Analysis

### Time Complexity: O(n²)

We have nested loops where the outer loop runs n times and the inner loop runs n, n-1, n-2, ..., 1 times respectively. Total iterations = n + (n-1) + (n-2) + ... + 1 = n(n+1)/2 = O(n²).

### Space Complexity: O(1)

We only use a constant amount of extra space for loop variables. The output space is not counted in auxiliary space complexity.

---

## Alternative Approaches

### Using String Multiplication

## Java

```java
class Solution {
    public void pattern5(int n) {
        for (int i = n; i > 0; i--) {
            String row = "*".repeat(i);
            System.out.println(row);
        }
    }
}
```

### JavaScript

```javascript
class Solution {
  pattern5(n) {
    for (let i = n; i > 0; i--) {
      const row = "*".repeat(i);
      console.log(row);
    }
  }
}
```

### Python

```python
class Solution:
    def pattern5(self, n):
        for i in range(n, 0, -1):
            row = "*" * i
            print(row)
```

---

## Edge Cases to Consider

1. **n = 1:** Should print a single "*"
2. **Small Values (n = 2, 3):** Verify correct inverted triangle formation
3. **Larger Values:** Ensure pattern maintains inverted right triangle shape
4. **Maximum Constraint Value:** n = 20 should work efficiently
5. **Loop Termination:** Ensure the loop properly decrements and terminates at 1

## Pattern Analysis

**Pattern Characteristics:**

- **Shape:** Inverted Right Triangle
- **Dimensions:** n rows, with row i (from top) having n-i+1 stars
- **Fill:** Stars (*) only
- **Reduction:** Each row has one less star than the previous row

**Key Observations:**

- First row has n stars, last row has 1 star
- Each row has exactly i stars where i decreases from n to 1
- Total stars printed = n + (n-1) + (n-2) + ... + 1 = n(n+1)/2
- No spaces between stars in each row

## Mathematical Pattern

For any row position r (counting from 1):
- **Stars in row r:** n - r + 1
- **Alternative view:** If loop variable i goes from n to 1, then stars = i
- **Row Content:** i consecutive stars
- **Row Length:** i characters

## Key Difference from Previous Patterns

| Aspect | Pattern 1 | Pattern 2 | Pattern 3 | Pattern 4 | Pattern 5 |
|--------|-----------|-----------|-----------|-----------|-----------|
| Row 1 | ***** | * | 1 | 1 | ***** |
| Row 2 | ***** | ** | 12 | 22 | **** |
| Row 3 | ***** | *** | 123 | 333 | *** |
| Shape | Square | Right Triangle | Right Triangle | Right Triangle | Inverted Right Triangle |
| Growth | Constant | Increasing | Increasing | Increasing | Decreasing |

## Follow-up Questions

1. **Left-Aligned Inverted Triangle:** How would you right-align this pattern?
2. **Hollow Version:** How to create an inverted triangle with only border stars?
3. **Different Characters:** How to use numbers or letters instead of stars?
4. **Spaced Version:** How to add spaces between stars?

## Related Patterns

This pattern complements triangular concepts:

- **Pattern 1:** Square of Stars (constant size)
- **Pattern 2:** Right Triangle (increasing size)
- **Pattern 3:** Sequential Number Triangle (increasing with numbers)
- **Pattern 4:** Repeated Number Triangle (increasing with repeated numbers)
- **Pattern 6:** Right-aligned variations

## Summary

| Approach         | Time Complexity | Space Complexity | Pros                                     | Cons                              |
| ---------------- | --------------- | ---------------- | ---------------------------------------- | --------------------------------- |
| Nested Loops     | O(n²)           | O(1)             | Simple, direct, space optimal           | Two loops needed                  |
| String Repeat    | O(n²)           | O(n)             | More concise, built-in string functions | Uses extra space, language dependent |

**Recommended Solution:** Use the nested loop approach for better understanding of pattern logic and optimal space complexity. This approach clearly shows the relationship between decreasing row values and star count.

## Tips for Inverted Triangle Pattern Problems

1. **Identify Decreasing Logic:** Understand how the pattern decreases with each row
2. **Loop Direction:** Use decrementing loops (n to 1) for natural row progression
3. **Boundary Conditions:** Ensure loops terminate correctly at 1, not 0
4. **Count Verification:** Each row should have exactly i stars where i decreases
5. **Visual Debugging:** Trace through small examples (n=3) to verify logic

## Debugging Tips

1. **Check Loop Direction:** Ensure outer loop decrements from n to 1
2. **Verify Star Count:** Each row i should print exactly i stars
3. **Loop Boundaries:** Confirm outer loop condition is `i > 0` or equivalent
4. **Inner Loop Range:** Ensure inner loop runs from 1 to i (or 0 to i-1)
5. **Newline Placement:** Ensure newline is printed after completing each row

## Pattern Variations to Practice

1. **Pattern 5a:** Right-aligned inverted triangle (with leading spaces)
2. **Pattern 5b:** Inverted triangle with spaces between stars
3. **Pattern 5c:** Inverted triangle with numbers (n, n-1, n-2, ...)
4. **Pattern 5d:** Hollow inverted triangle (only border stars)
5. **Pattern 5e:** Inverted triangle with alternating characters

## Common Mistakes to Avoid

1. **Wrong Loop Direction:** Using incrementing loops instead of decrementing
2. **Off-by-One Errors:** Starting from n+1 or ending at 0 instead of 1
3. **Incorrect Inner Loop:** Using fixed bounds instead of variable i
4. **Missing Newlines:** Forgetting to print newline after each row
5. **Wrong Variable Usage:** Printing j instead of stars in the inner loop

## Connection to Mathematical Concepts

- **Arithmetic Sequence:** The number of stars forms a decreasing arithmetic sequence: n, n-1, n-2, ..., 1
- **Triangular Numbers:** Total stars = sum of first n natural numbers = n(n+1)/2
- **Inverse Relationship:** This pattern is the inverse of Pattern 2 (regular right triangle)
- **Symmetry:** Can be combined with Pattern 2 to create diamond shapes

