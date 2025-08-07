# Pattern 8 - Inverted Centered Star Triangle Pattern

### Difficulty: `Easy`

## Problem Statement

You are given an integer **n**. You need to **recreate the pattern** shown below for any value of N.

The pattern should be an **inverted centered equilateral triangle of stars** where each row **i** contains **2*(n-i+1)-1** stars, preceded by **i-1** spaces to create the inverted triangle effect.

## Examples

```txt
Example 1:
Input:  n = 4
Output:
*******
 *****
  ***
   *

Example 2:
Input:  n = 5
Output:
*********
 *******
  *****
   ***
    *

Example 3:
Input:  n = 3
Output:
*****
 ***
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

To create an inverted centered star triangle pattern, we need to print n rows, where each row i contains 2*(n-i+1)-1 stars preceded by i-1 leading spaces. The first row has the maximum number of stars (2*n-1) with no leading spaces, the second row has 2 fewer stars with 1 leading space, and so on. This forms an inverted symmetric equilateral triangle. This can be achieved using nested loops - the outer loop handles the rows, the first inner loop handles the leading spaces for positioning, and the second inner loop handles printing the stars.

## Approach:

- Use an outer loop to iterate through rows (from 1 to n).
- Use the first inner loop to print leading spaces (i-1 spaces for row i).
- Use the second inner loop to print stars (2*(n-i+1)-1 stars for row i).
- After completing each row, print a newline to move to the next row.

## DryRun:

Input: n = 5

```
Row 1: i = 1, Print 0 spaces + 9 stars: *********
Row 2: i = 2, Print 1 space + 7 stars:  *******
Row 3: i = 3, Print 2 spaces + 5 stars:  *****
Row 4: i = 4, Print 3 spaces + 3 stars:   ***
Row 5: i = 5, Print 4 spaces + 1 star:    *

Final Output:
*********
 *******
  *****
   ***
    *
```

## Code.

## Java

```java
class Solution {
  public void pattern8(int n) {
    for (int i = 1; i <= n; i++) {
      for (int j = 1; j < i; j++) {
        System.out.print(" ");
      }
      for (int j = 1; j < 2 * (n - i + 1); j++) {
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
  pattern8(n) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j < i; j++) {
        process.stdout.write(" ");
      }
      for (let j = 1; j < 2 * (n - i + 1); j++) {
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
    def pattern8(self, n):
        for i in range(1,n+1):
            for j in range(1,i):
                print(" ", end="")             
            for j in range(1,2*(n-i+1)):
                print("*", end="")
            print()
```

## Complexity Analysis

### Time Complexity: O(n²)

We have nested loops where the outer loop runs n times. For each row i, we print (i-1) spaces and (2*(n-i+1)-1) stars. Total operations = Σ(i=1 to n)[(i-1) + (2*(n-i+1)-1)] = Σ(i=1 to n)[i-1 + 2*n-2*i+1] = Σ(i=1 to n)[2*n-i] = 2*n² - n(n+1)/2 = O(n²).

### Space Complexity: O(1)

We only use a constant amount of extra space for loop variables. The output space is not counted in auxiliary space complexity.

---

## Alternative Approaches

### Using String Operations

## Java

```java
class Solution {
    public void pattern8(int n) {
        for (int i = 1; i <= n; i++) {
            String spaces = " ".repeat(i - 1);
            String stars = "*".repeat(2 * (n - i + 1) - 1);
            System.out.println(spaces + stars);
        }
    }
}
```

### JavaScript

```javascript
class Solution {
  pattern8(n) {
    for (let i = 1; i <= n; i++) {
      const spaces = " ".repeat(i - 1);
      const stars = "*".repeat(2 * (n - i + 1) - 1);
      console.log(spaces + stars);
    }
  }
}
```

### Python

```python
class Solution:
    def pattern8(self, n):
        for i in range(1, n + 1):
            spaces = " " * (i - 1)
            stars = "*" * (2 * (n - i + 1) - 1)
            print(spaces + stars)
```

---

## Edge Cases to Consider

1. **n = 1:** Should print a single "*" with no leading spaces
2. **Small Values (n = 2, 3):** Verify correct inverted triangle formation and positioning
3. **Larger Values:** Ensure pattern maintains symmetric inverted triangle shape
4. **Maximum Constraint Value:** n = 20 should work efficiently
5. **Spacing Accuracy:** Verify correct number of leading spaces for proper positioning

## Pattern Analysis

**Pattern Characteristics:**

- **Shape:** Inverted Centered Equilateral Triangle
- **Dimensions:** n rows, with row i having (i-1) spaces + (2*(n-i+1)-1) stars
- **Fill:** Stars (*) with leading spaces for positioning
- **Reduction:** Each row decreases by 2 stars and increases by 1 leading space

**Key Observations:**

- Row i has i-1 leading spaces and 2*(n-i+1)-1 stars
- Total width of each row = (i-1) + (2*(n-i+1)-1) = i-1 + 2*n-2*i+1 = 2*n-i
- First row has width 2*n-1 (maximum width)
- Pattern is symmetric around the vertical center
- Forms a perfect inverted equilateral triangle when properly spaced

## Mathematical Pattern

For any row i (counting from 1):

- **Leading spaces:** i - 1
- **Stars:** 2*(n - i + 1) - 1 = 2*n - 2*i + 1
- **Total width:** (i - 1) + (2*n - 2*i + 1) = 2*n - i
- **Row content:** (i-1) spaces followed by (2*n-2*i+1) stars

## Key Difference from Previous Patterns

| Aspect    | Pattern 7               | Pattern 8                        |
| --------- | ----------------------- | -------------------------------- |
| Row 1     | ___*                    | *******                          |
| Row 2     | __***                   | _*****                           |
| Row 3     | _*****                  | __***                            |
| Row 4     | *******                 | ___*                             |
| Shape     | Upward Triangle         | Inverted Triangle                |
| Alignment | Center                  | Center                           |
| Growth    | +2 stars per row        | -2 stars per row                 |
| Spaces    | Decreasing leading      | Increasing leading               |
| Direction | Top narrow, bottom wide | Top wide, bottom narrow          |

## Follow-up Questions

1. **Upward Version:** How would you create the upward centered triangle (Pattern 7)?
2. **Hollow Version:** How to create an inverted centered triangle with only border stars?
3. **Different Characters:** How to use numbers or letters instead of stars?
4. **Diamond Pattern:** How to combine Pattern 7 and Pattern 8 to create a diamond?

## Related Patterns

This pattern complements the upward triangle:

- **Pattern 7:** Upward centered triangle
- **Pattern 8:** Inverted centered triangle (current)
- **Pattern 9:** Diamond patterns (combination of Pattern 7 and Pattern 8)
- **Pattern 10+:** Complex centered patterns with spacing variations

## Summary

| Approach          | Time Complexity | Space Complexity | Pros                                       | Cons                                 |
| ----------------- | --------------- | ---------------- | ------------------------------------------ | ------------------------------------ |
| Nested Loops      | O(n²)           | O(1)             | Simple, direct, space optimal, clear logic | Three separate loops needed          |
| String Operations | O(n²)           | O(n)             | More concise, readable                     | Uses extra space, language dependent |

**Recommended Solution:** Use the nested loop approach for better understanding of pattern logic and optimal space complexity. This approach clearly shows the relationship between spaces, stars, and row positioning in an inverted triangle.

## Tips for Inverted Triangle Pattern Problems

1. **Identify Inversion Logic:** Understand how leading spaces increase while stars decrease
2. **Star Count Formula:** Recognize the 2*(n-i+1)-1 pattern for decreasing odd numbers
3. **Space Calculation:** Leading spaces = i-1 for proper positioning
4. **Symmetry Verification:** Ensure the pattern forms a proper inverted equilateral triangle
5. **Width Consistency:** Check that the pattern maintains proper alignment

## Debugging Tips

1. **Check Space Count:** Verify that row i has exactly i-1 leading spaces
2. **Verify Star Count:** Each row i should have exactly 2*(n-i+1)-1 stars
3. **Loop Boundaries:** Ensure loops use correct ranges (1 to n, 1 to i, 1 to 2*(n-i+1))
4. **Pattern Symmetry:** Visual inspection should show an inverted centered triangle
5. **Edge Cases:** Test with n=1 and n=2 to verify basic functionality

## Pattern Variations to Practice

1. **Pattern 8a:** Inverted triangle with spaces between stars
2. **Pattern 8b:** Inverted numbered triangle (987654321, 7654321, 54321, ...)
3. **Pattern 8c:** Inverted hollow triangle (only border stars)
4. **Pattern 8d:** Inverted triangle with alternating characters
5. **Pattern 8e:** Left-aligned inverted triangle (no leading spaces)

## Common Mistakes to Avoid

1. **Wrong Space Count:** Using n-i instead of i-1 for leading spaces
2. **Incorrect Star Count:** Using 2*i-1 instead of 2*(n-i+1)-1 for stars
3. **Loop Boundary Errors:** Off-by-one errors in loop conditions
4. **Missing Inversion:** Creating upward triangle instead of inverted
5. **Asymmetric Output:** Not maintaining proper alignment across rows

## Connection to Mathematical Concepts

- **Arithmetic Progression:** Stars follow the sequence 2n-1, 2n-3, 2n-5, ... (decreasing odd numbers)
- **Linear Relationships:** Spaces increase linearly while stars decrease linearly
- **Geometric Shapes:** Forms an inverted equilateral triangle when properly spaced
- **Symmetry:** Demonstrates bilateral symmetry around the vertical axis
- **Coordinate Geometry:** Each star position can be mapped to inverted triangle coordinates

## Advanced Considerations

1. **Scalability:** Handling very large values of n efficiently
2. **Memory Optimization:** Minimizing string operations for better performance
3. **Unicode Support:** Using different characters or symbols for enhanced visuals
4. **Alignment Precision:** Ensuring perfect centering across different display widths
5. **Color Support:** Adding color codes for enhanced terminal output

## Pattern Extensions

1. **Multi-level Inverted Triangles:** Creating inverted triangles within triangles
2. **Gradient Effects:** Using different characters to create depth illusion
3. **Animation Support:** Modifying for dynamic display effects
4. **3D Visualization:** Extending to create pseudo-3D inverted triangle effects
5. **Interactive Patterns:** Making the pattern responsive to user input

## Relationship with Pattern 7

Pattern 8 is the exact inverse of Pattern 7:

- **Pattern 7:** Starts narrow (top) and grows wide (bottom)
- **Pattern 8:** Starts wide (top) and shrinks narrow (bottom)
- **Combined:** Pattern 7 + Pattern 8 = Diamond Pattern
- **Complementary:** They mirror each other perfectly

## Diamond Pattern Formation

When Pattern 7 and Pattern 8 are combined (with slight modification to avoid duplicate middle row):

```
   *      (Pattern 7)
  ***
 *****
*******
 *****     (Pattern 8 without first row)
  ***
   *
```

This creates a perfect diamond shape, demonstrating how inverted patterns complement their upward counterparts.