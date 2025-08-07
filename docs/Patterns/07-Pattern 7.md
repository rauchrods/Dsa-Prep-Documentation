# Pattern 7 - Centered Star Triangle Pattern

### Difficulty: `Easy`

## Problem Statement

You are given an integer **n**. You need to **recreate the pattern** shown below for any value of N.

The pattern should be a **centered equilateral triangle of stars** where each row **i** contains **2\*i-1** stars, preceded by **n-i** spaces to center the triangle.

## Examples

```txt
Example 1:
Input:  n = 4
Output:
   *
  ***
 *****
*******

Example 2:
Input:  n = 5
Output:
    *
   ***
  *****
 *******
*********

Example 3:
Input:  n = 3
Output:
  *
 ***
*****

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

To create a centered star triangle pattern, we need to print n rows, where each row i contains 2\*i-1 stars centered by leading spaces. The first row has 1 star with n-1 leading spaces, the second row has 3 stars with n-2 leading spaces, and so on. This forms a symmetric equilateral triangle. This can be achieved using nested loops - the outer loop handles the rows, the first inner loop handles the leading spaces for centering, and the second inner loop handles printing the stars.

## Approach:

- Use an outer loop to iterate through rows (from 1 to n).
- Use the first inner loop to print leading spaces (n-i spaces for row i).
- Use the second inner loop to print stars (2\*i-1 stars for row i).
- After completing each row, print a newline to move to the next row.

## DryRun:

Input: n = 5

```
Row 1: i = 1, Print 4 spaces + 1 star:     *
Row 2: i = 2, Print 3 spaces + 3 stars:   ***
Row 3: i = 3, Print 2 spaces + 5 stars:  *****
Row 4: i = 4, Print 1 space + 7 stars:  *******
Row 5: i = 5, Print 0 spaces + 9 stars: *********

Final Output:
    *
   ***
  *****
 *******
*********
```

## Code.

## Java

```java
class Solution {
  public void pattern7(int n) {
    for (int i = 1; i <= n; i++) {
      for (int j = 1; j <= n - i; j++) {
        System.out.print(" ");
      }
      for (int j = 1; j < 2*i; j++) {
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
  pattern7(n) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        process.stdout.write(" ");
      }
      for (let j = 1; j < 2 * i; j++) {
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
    def pattern7(self, n):
        for i in range(1,n+1):
            for j in range(1,n-i+1):
                print(" ", end="")
            for j in range(1,2*i):
                print("*", end="")
            print()
```

## Complexity Analysis

### Time Complexity: O(n²)

We have nested loops where the outer loop runs n times. For each row i, we print (n-i) spaces and (2*i-1) stars. Total operations = Σ(i=1 to n)[(n-i) + (2*i-1)] = Σ(i=1 to n)[n + i - 1] = n² + n(n+1)/2 - n = O(n²).

### Space Complexity: O(1)

We only use a constant amount of extra space for loop variables. The output space is not counted in auxiliary space complexity.

---

## Alternative Approaches

### Using String Operations

## Java

```java
class Solution {
    public void pattern7(int n) {
        for (int i = 1; i <= n; i++) {
            String spaces = " ".repeat(n - i);
            String stars = "*".repeat(2 * i - 1);
            System.out.println(spaces + stars);
        }
    }
}
```

### JavaScript

```javascript
class Solution {
  pattern7(n) {
    for (let i = 1; i <= n; i++) {
      const spaces = " ".repeat(n - i);
      const stars = "*".repeat(2 * i - 1);
      console.log(spaces + stars);
    }
  }
}
```

### Python

```python
class Solution:
    def pattern7(self, n):
        for i in range(1, n + 1):
            spaces = " " * (n - i)
            stars = "*" * (2 * i - 1)
            print(spaces + stars)
```

---

## Edge Cases to Consider

1. **n = 1:** Should print a single "\*" with no leading spaces
2. **Small Values (n = 2, 3):** Verify correct triangle formation and centering
3. **Larger Values:** Ensure pattern maintains symmetric triangle shape
4. **Maximum Constraint Value:** n = 20 should work efficiently
5. **Spacing Accuracy:** Verify correct number of leading spaces for proper centering

## Pattern Analysis

**Pattern Characteristics:**

- **Shape:** Centered Equilateral Triangle
- **Dimensions:** n rows, with row i having (n-i) spaces + (2\*i-1) stars
- **Fill:** Stars (\*) with leading spaces for centering
- **Growth:** Each row increases by 2 stars and decreases by 1 leading space

**Key Observations:**

- Row i has n-i leading spaces and 2\*i-1 stars
- Total width of each row = (n-i) + (2\*i-1) = n + i - 1
- Last row has width 2\*n-1 (maximum width)
- Pattern is symmetric around the vertical center
- Forms a perfect equilateral triangle when properly spaced

## Mathematical Pattern

For any row i (counting from 1):

- **Leading spaces:** n - i
- **Stars:** 2\*i - 1
- **Total width:** (n - i) + (2\*i - 1) = n + i - 1
- **Row content:** (n-i) spaces followed by (2\*i-1) stars

## Key Difference from Previous Patterns

| Aspect    | Pattern 2       | Pattern 5               | Pattern 7                     |
| --------- | --------------- | ----------------------- | ----------------------------- |
| Row 1     | \*              | **\***                  | \_\_\_\*                      |
| Row 2     | \*\*            | \*\*\*\*                | \_\_\*\*\*                    |
| Row 3     | \*\*\*          | \*\*\*                  | \_**\***                      |
| Shape     | Right Triangle  | Inverted Right Triangle | Centered Equilateral Triangle |
| Alignment | Left            | Left                    | Center                        |
| Growth    | +1 star per row | -1 star per row         | +2 stars per row              |
| Spaces    | None            | None                    | Leading spaces for centering  |

## Follow-up Questions

1. **Inverted Version:** How would you create an inverted centered triangle?
2. **Hollow Version:** How to create a centered triangle with only border stars?
3. **Different Characters:** How to use numbers or letters instead of stars?
4. **Diamond Pattern:** How to combine this with an inverted version to create a diamond?

## Related Patterns

This pattern introduces centering concepts:

- **Pattern 1-6:** Basic triangles and shapes without centering
- **Pattern 8:** Inverted centered triangles
- **Pattern 9:** Diamond patterns (combination of upward and downward triangles)
- **Pattern 10+:** Complex centered patterns with spacing variations

## Summary

| Approach          | Time Complexity | Space Complexity | Pros                                       | Cons                                 |
| ----------------- | --------------- | ---------------- | ------------------------------------------ | ------------------------------------ |
| Nested Loops      | O(n²)           | O(1)             | Simple, direct, space optimal, clear logic | Three separate loops needed          |
| String Operations | O(n²)           | O(n)             | More concise, readable                     | Uses extra space, language dependent |

**Recommended Solution:** Use the nested loop approach for better understanding of pattern logic and optimal space complexity. This approach clearly shows the relationship between spaces, stars, and row positioning.

## Tips for Centered Triangle Pattern Problems

1. **Identify Centering Logic:** Understand how leading spaces create the centering effect
2. **Star Count Formula:** Recognize the 2\*i-1 pattern for odd number of stars
3. **Space Calculation:** Leading spaces = n - i for proper centering
4. **Symmetry Verification:** Ensure the pattern forms a proper equilateral triangle
5. **Width Consistency:** Check that the pattern maintains proper alignment

## Debugging Tips

1. **Check Space Count:** Verify that row i has exactly n-i leading spaces
2. **Verify Star Count:** Each row i should have exactly 2\*i-1 stars
3. **Loop Boundaries:** Ensure loops use correct ranges (1 to n, 1 to n-i, 1 to 2\*i-1)
4. **Pattern Symmetry:** Visual inspection should show a centered triangle
5. **Edge Cases:** Test with n=1 and n=2 to verify basic functionality

## Pattern Variations to Practice

1. **Pattern 7a:** Centered triangle with spaces between stars
2. **Pattern 7b:** Centered numbered triangle (1, 123, 12345, ...)
3. **Pattern 7c:** Centered hollow triangle (only border stars)
4. **Pattern 7d:** Centered triangle with alternating characters
5. **Pattern 7e:** Right-aligned triangle (spaces after stars instead of before)

## Common Mistakes to Avoid

1. **Wrong Space Count:** Using i instead of n-i for leading spaces
2. **Incorrect Star Count:** Using i instead of 2\*i-1 for stars
3. **Loop Boundary Errors:** Off-by-one errors in loop conditions
4. **Missing Centering:** Forgetting to add leading spaces
5. **Asymmetric Output:** Not maintaining proper alignment across rows

## Connection to Mathematical Concepts

- **Arithmetic Progression:** Stars follow the sequence 1, 3, 5, 7, ... (odd numbers)
- **Linear Relationships:** Spaces decrease linearly while stars increase linearly
- **Geometric Shapes:** Forms an equilateral triangle when properly spaced
- **Symmetry:** Demonstrates bilateral symmetry around the vertical axis
- **Coordinate Geometry:** Each star position can be mapped to triangle coordinates

## Advanced Considerations

1. **Scalability:** Handling very large values of n efficiently
2. **Memory Optimization:** Minimizing string operations for better performance
3. **Unicode Support:** Using different characters or symbols for enhanced visuals
4. **Alignment Precision:** Ensuring perfect centering across different display widths
5. **Color Support:** Adding color codes for enhanced terminal output

## Pattern Extensions

1. **Multi-level Triangles:** Creating triangles within triangles
2. **Gradient Effects:** Using different characters to create depth illusion
3. **Animation Support:** Modifying for dynamic display effects
4. **3D Visualization:** Extending to create pseudo-3D triangle effects
5. **Interactive Patterns:** Making the pattern responsive to user input
