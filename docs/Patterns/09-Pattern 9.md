# Pattern 9 - Diamond Star Pattern

### Difficulty: `Easy`

## Problem Statement

You are given an integer **n**. You need to **recreate the pattern** shown below for any value of N.

The pattern should be a **diamond shape made of stars** consisting of two parts:
1. **Upper part:** A centered upward triangle (Pattern 7) with n rows
2. **Lower part:** An inverted centered triangle (Pattern 8) with n-1 rows (to avoid duplicate middle row)

## Examples

```txt
Example 1:
Input:  n = 4
Output:
   *
  ***
 *****
*******
 *****
  ***
   *

Example 2:
Input:  n = 5
Output:
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

Example 3:
Input:  n = 3
Output:
  *
 ***
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

## Solution1: Two-Part Approach

## Intuition:

The diamond pattern is essentially a combination of Pattern 7 (upward triangle) and Pattern 8 (inverted triangle) with a small modification. We create the upper half using Pattern 7 logic, then create the lower half using Pattern 8 logic but starting from the second row to avoid duplicating the middle row. This creates a symmetric diamond shape with the widest part in the middle.

## Approach:

**Part 1 - Upper Triangle (Pattern 7):**
- Use an outer loop to iterate through rows (from 1 to n).
- For each row i: print (n-i) spaces followed by (2*i-1) stars.

**Part 2 - Lower Triangle (Modified Pattern 8):**
- Use an outer loop to iterate through rows (from 2 to n, skipping row 1).
- For each row i: print (i-1) spaces followed by (2*(n-i+1)-1) stars.

## DryRun:

Input: n = 4

```
Upper Triangle (Pattern 7):
Row 1: i = 1, Print 3 spaces + 1 star:    *
Row 2: i = 2, Print 2 spaces + 3 stars:  ***
Row 3: i = 3, Print 1 space + 5 stars:  *****
Row 4: i = 4, Print 0 spaces + 7 stars: *******

Lower Triangle (Modified Pattern 8, starting from i = 2):
Row 2: i = 2, Print 1 space + 5 stars:  *****
Row 3: i = 3, Print 2 spaces + 3 stars:  ***
Row 4: i = 4, Print 3 spaces + 1 star:    *

Final Output:
   *
  ***
 *****
*******
 *****
  ***
   *
```

## Code.

## Java

```java
class Solution {
    public void pattern9(int n) {
        // Upper triangle (Pattern 7)
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= 2 * i - 1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        
        // Lower triangle (Modified Pattern 8, starting from i = 2)
        for (int i = 2; i <= n; i++) {
            for (int j = 1; j < i; j++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= 2 * (n - i + 1) - 1; j++) {
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
    pattern9(n) {
        // Upper triangle (Pattern 7)
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n - i; j++) {
                process.stdout.write(" ");
            }
            for (let j = 1; j <= 2 * i - 1; j++) {
                process.stdout.write("*");
            }
            console.log();
        }
        
        // Lower triangle (Modified Pattern 8, starting from i = 2)
        for (let i = 2; i <= n; i++) {
            for (let j = 1; j < i; j++) {
                process.stdout.write(" ");
            }
            for (let j = 1; j <= 2 * (n - i + 1) - 1; j++) {
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
    def pattern9(self, n):
        # Upper triangle (Pattern 7)
        for i in range(1, n + 1):
            for j in range(1, n - i + 1):
                print(" ", end="")
            for j in range(1, 2 * i):
                print("*", end="")
            print()
        
        # Lower triangle (Modified Pattern 8, starting from i = 2)
        for i in range(2, n + 1):
            for j in range(1, i):
                print(" ", end="")
            for j in range(1, 2 * (n - i + 1)):
                print("*", end="")
            print()
```

## Complexity Analysis

### Time Complexity: O(n²)

We have two main loops, each running up to n times. The upper triangle runs n iterations, and the lower triangle runs n-1 iterations. For each iteration, we perform operations proportional to n (spaces + stars). Total operations ≈ 2 * Σ(i=1 to n)[operations per row] = O(n²).

### Space Complexity: O(1)

We only use a constant amount of extra space for loop variables. The output space is not counted in auxiliary space complexity.

---

## Alternative Approaches

### Using String Operations

## Java

```java
class Solution {
    public void pattern9(int n) {
        // Upper triangle
        for (int i = 1; i <= n; i++) {
            String spaces = " ".repeat(n - i);
            String stars = "*".repeat(2 * i - 1);
            System.out.println(spaces + stars);
        }
        
        // Lower triangle
        for (int i = 2; i <= n; i++) {
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
    pattern9(n) {
        // Upper triangle
        for (let i = 1; i <= n; i++) {
            const spaces = " ".repeat(n - i);
            const stars = "*".repeat(2 * i - 1);
            console.log(spaces + stars);
        }
        
        // Lower triangle
        for (let i = 2; i <= n; i++) {
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
    def pattern9(self, n):
        # Upper triangle
        for i in range(1, n + 1):
            spaces = " " * (n - i)
            stars = "*" * (2 * i - 1)
            print(spaces + stars)
        
        # Lower triangle
        for i in range(2, n + 1):
            spaces = " " * (i - 1)
            stars = "*" * (2 * (n - i + 1) - 1)
            print(spaces + stars)
```

---

### Single Loop Approach

## Java

```java
class Solution {
    public void pattern9(int n) {
        for (int i = 1; i <= 2 * n - 1; i++) {
            int spaces, stars;
            
            if (i <= n) {
                // Upper part
                spaces = n - i;
                stars = 2 * i - 1;
            } else {
                // Lower part
                int row = i - n;  // Convert to equivalent row in lower part
                spaces = row;
                stars = 2 * (n - row) - 1;
            }
            
            for (int j = 0; j < spaces; j++) {
                System.out.print(" ");
            }
            for (int j = 0; j < stars; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
```

---

## Edge Cases to Consider

1. **n = 1:** Should print a single "*" with no additional rows
2. **n = 2:** Should create a small diamond with proper symmetry
3. **Small Values (n = 3):** Verify correct diamond formation and centering
4. **Larger Values:** Ensure pattern maintains symmetric diamond shape
5. **Maximum Constraint Value:** n = 20 should work efficiently

## Pattern Analysis

**Pattern Characteristics:**

- **Shape:** Diamond (Rhombus)
- **Dimensions:** 2*n-1 total rows
- **Parts:** Upper triangle (n rows) + Lower triangle (n-1 rows)
- **Fill:** Stars (*) with leading spaces for centering
- **Symmetry:** Both horizontal and vertical symmetry

**Key Observations:**

- Total rows = 2*n - 1
- Middle row (row n) has the maximum width: 2*n-1 stars
- Upper half follows Pattern 7 logic
- Lower half follows Pattern 8 logic (starting from row 2)
- Pattern is perfectly symmetric around the middle row

## Mathematical Pattern

**Upper Triangle (rows 1 to n):**
- Row i: (n-i) spaces + (2*i-1) stars

**Lower Triangle (rows n+1 to 2*n-1):**
- Row i (where i = n+1 to 2*n-1): 
  - Equivalent to row j = i-n+1 in Pattern 8
  - (j-1) spaces + (2*(n-j+1)-1) stars

## Key Difference from Previous Patterns

| Aspect     | Pattern 7        | Pattern 8          | Pattern 9                    |
| ---------- | ---------------- | ------------------ | ---------------------------- |
| Shape      | Upward Triangle  | Inverted Triangle  | Diamond                      |
| Rows       | n                | n                  | 2*n-1                        |
| Max Width  | 2*n-1 (bottom)   | 2*n-1 (top)        | 2*n-1 (middle)               |
| Symmetry   | None             | None               | Both horizontal & vertical   |
| Parts      | Single           | Single             | Two parts combined           |

## Follow-up Questions

1. **Hollow Diamond:** How would you create a diamond with only border stars?
2. **Number Diamond:** How to use numbers instead of stars?
3. **Different Sizes:** How to create diamonds with different upper and lower sizes?
4. **Rotated Diamond:** How to create a diamond rotated 45 degrees?

## Related Patterns

This pattern combines previous patterns:

- **Pattern 7:** Forms the upper half of the diamond
- **Pattern 8:** Forms the lower half of the diamond (modified)
- **Pattern 9:** Diamond pattern (current)
- **Pattern 10+:** More complex diamond variations

## Summary

| Approach          | Time Complexity | Space Complexity | Pros                                    | Cons                                 |
| ----------------- | --------------- | ---------------- | --------------------------------------- | ------------------------------------ |
| Two-Part Loops    | O(n²)           | O(1)             | Clear logic, easy to understand         | Two separate loop structures         |
| String Operations | O(n²)           | O(n)             | More concise, readable                  | Uses extra space, language dependent |
| Single Loop       | O(n²)           | O(1)             | Unified approach, space optimal         | More complex conditional logic       |

**Recommended Solution:** Use the two-part nested loop approach for better understanding of how diamonds are formed from triangular patterns. This approach clearly shows the relationship between Pattern 7, Pattern 8, and the diamond pattern.

## Tips for Diamond Pattern Problems

1. **Identify Two Parts:** Recognize that diamonds consist of upper and lower triangular parts
2. **Avoid Duplication:** Skip the first row of the lower part to prevent duplicate middle row
3. **Maintain Symmetry:** Ensure both parts are properly centered and symmetric
4. **Pattern Reuse:** Leverage existing triangle pattern logic
5. **Row Count:** Remember total rows = 2*n-1

## Debugging Tips

1. **Check Upper Triangle:** Verify it matches Pattern 7 exactly
2. **Check Lower Triangle:** Verify it matches Pattern 8 (starting from row 2)
3. **Middle Row:** Ensure the widest row appears exactly once
4. **Symmetry Test:** Visually confirm the diamond is symmetric
5. **Edge Cases:** Test with n=1 and n=2 for basic functionality

## Pattern Variations to Practice

1. **Pattern 9a:** Hollow diamond (only border stars)
2. **Pattern 9b:** Number diamond (1, 121, 12321, ...)
3. **Pattern 9c:** Diamond with spaces between stars
4. **Pattern 9d:** Diamond with alternating characters
5. **Pattern 9e:** Multiple diamonds side by side

## Common Mistakes to Avoid

1. **Duplicate Middle Row:** Including row 1 of Pattern 8 creates duplicate middle row
2. **Wrong Loop Bounds:** Using incorrect start/end values for the lower triangle
3. **Asymmetric Spacing:** Incorrect space calculations leading to misaligned diamond
4. **Pattern Confusion:** Mixing up Pattern 7 and Pattern 8 logic
5. **Row Count Error:** Forgetting that total rows = 2*n-1, not 2*n

## Connection to Mathematical Concepts

- **Geometric Symmetry:** Perfect bilateral and rotational symmetry
- **Arithmetic Progressions:** Stars follow 1,3,5,...,2n-1,...,5,3,1 pattern
- **Coordinate Geometry:** Each star position maps to diamond coordinates
- **Combinatorial Patterns:** Demonstrates how simple patterns combine to create complex shapes
- **Mirror Functions:** Lower half mirrors the upper half

## Advanced Considerations

1. **Memory Optimization:** Efficient string handling for large diamonds
2. **Scalability:** Handling very large values of n
3. **Unicode Support:** Using different characters for enhanced visuals
4. **Animation:** Creating animated diamond patterns
5. **3D Effects:** Adding depth perception to diamond patterns

## Pattern Extensions

1. **Multi-Diamond Patterns:** Creating multiple diamonds in sequence
2. **Nested Diamonds:** Diamonds within diamonds
3. **Diamond Grids:** 2D arrays of diamond patterns
4. **Gradient Diamonds:** Using different characters for gradient effects
5. **Interactive Diamonds:** User-controlled diamond modifications

## Relationship with Previous Patterns

**Pattern Evolution:**
- **Patterns 1-6:** Basic triangular shapes
- **Pattern 7:** Centered upward triangle
- **Pattern 8:** Centered inverted triangle
- **Pattern 9:** Diamond (Pattern 7 + modified Pattern 8)

**Combination Logic:**
```
Pattern 7:     +    Modified Pattern 8:    =    Pattern 9:
   *                     *****                     *
  ***                     ***                     ***
 *****                     *                     *****
*******                                         *******
                                                 *****
                                                  ***
                                                   *
```

## Diamond Formation Rules

1. **Upper Half:** Use Pattern 7 completely (1 to n rows)
2. **Lower Half:** Use Pattern 8 starting from row 2 (to avoid duplicate)
3. **Center Alignment:** Both parts must maintain same center alignment
4. **Symmetry Check:** Final pattern should be perfectly symmetric
5. **Row Calculation:** Total rows = n + (n-1) = 2n-1

## Performance Optimization Tips

1. **Loop Unrolling:** For very large n, consider loop optimizations
2. **String Builder:** Use StringBuilder/StringBuffer for concatenation-heavy operations
3. **Memory Pooling:** Reuse space and star strings where possible
4. **Batch Output:** Minimize individual print calls
5. **Parallel Processing:** For multiple diamonds, consider parallel generation

## Testing Strategy

1. **Boundary Testing:** Test with n=1, n=2, and maximum constraint value
2. **Symmetry Verification:** Automated checks for pattern symmetry
3. **Visual Inspection:** Manual verification of diamond shape
4. **Performance Testing:** Measure execution time for large values
5. **Memory Usage:** Monitor space complexity for string-based approaches

This diamond pattern serves as an excellent example of how simpler patterns can be combined to create more complex and visually appealing designs, demonstrating the power of modular pattern thinking in programming.