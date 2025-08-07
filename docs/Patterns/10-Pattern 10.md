# Pattern 10 - Half Diamond Star Pattern

### Difficulty: `Easy`

## Problem Statement

You are given an integer **n**. You need to **recreate the pattern** shown below for any value of N.

The pattern should be a **half diamond shape made of stars** consisting of two parts:
1. **Upper part:** An ascending triangle from 1 to n stars
2. **Lower part:** A descending triangle from n-1 to 1 stars

The pattern is left-aligned and forms a half diamond or triangular wave pattern.

## Examples

```txt
Example 1:
Input:  n = 4
Output:
*
**
***
****
***
**
*

Example 2:
Input:  n = 5
Output:
*
**
***
****
*****
****
***
**
*

Example 3:
Input:  n = 3
Output:
*
**
***
**
*

Example 4:
Input:  n = 1
Output:
*

Example 5:
Input:  n = 2
Output:
*
**
*
```

## Constraints

- 1 ≤ n ≤ 20
- Print the pattern in the function given to you.

## `1. Brute Force Approach`

### Algorithm / Intuition

## Solution1: Single Loop with Conditional Logic

## Intuition:

The half diamond pattern can be created using a single loop that runs for 2*n-1 iterations. For the first n iterations (ascending part), we print i stars for row i. For the remaining n-1 iterations (descending part), we print 2*n-i stars for row i. This creates a smooth transition from ascending to descending, forming a half diamond shape. The key insight is using conditional logic to determine the number of stars based on whether we're in the ascending or descending phase.

## Approach:

- Use a single outer loop to iterate through rows (from 1 to 2*n-1).
- For each row i, determine the number of stars using conditional logic:
  - If i ≤ n: stars = i (ascending part)
  - If i > n: stars = 2*n - i (descending part)
- Use an inner loop to print the calculated number of stars.
- Print a newline after each row.

## DryRun:

Input: n = 5

```
Row 1: i = 1, i ≤ 5, stars = 1:     *
Row 2: i = 2, i ≤ 5, stars = 2:     **
Row 3: i = 3, i ≤ 5, stars = 3:     ***
Row 4: i = 4, i ≤ 5, stars = 4:     ****
Row 5: i = 5, i ≤ 5, stars = 5:     *****
Row 6: i = 6, i > 5, stars = 2*5-6 = 4: ****
Row 7: i = 7, i > 5, stars = 2*5-7 = 3: ***
Row 8: i = 8, i > 5, stars = 2*5-8 = 2: **
Row 9: i = 9, i > 5, stars = 2*5-9 = 1: *

Final Output:
*
**
***
****
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
  public void pattern10(int n) {
    for (int i = 1; i < n * 2; i++) {
      int stars = (i <= n) ?  i : 2 * n - i;
      for (int j = 1; j <= stars; j++) {
        System.out.print("*");
      }
      System.out.println("");
    }
  }
}
```

## JavaScript

```javascript
class Solution {
  pattern10(n) {
    for (let i = 1; i < n * 2; i++) {
      let stars = i <= n ? i : 2 * n - i;
      for (let j = 1; j <= stars; j++) {
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
    def pattern10(self, n):
        for i in range(1,n*2):
            stars = i if i <= n else 2 * n - i
            for j in range(1,stars+1):
                print("*", end="")             
            print()
```

## Complexity Analysis

### Time Complexity: O(n²)

The outer loop runs for 2*n-1 iterations. For each iteration, the inner loop runs for a variable number of times (from 1 to n stars). The total number of stars printed = 1+2+3+...+n+...+3+2+1 = 2*(1+2+...+n) - n = 2*n(n+1)/2 - n = n² = O(n²).

### Space Complexity: O(1)

We only use a constant amount of extra space for loop variables. The output space is not counted in auxiliary space complexity.

---

## Alternative Approaches

### Two-Part Loop Approach

## Java

```java
class Solution {
    public void pattern10(int n) {
        // Ascending part (1 to n stars)
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        
        // Descending part (n-1 to 1 stars)
        for (int i = n - 1; i >= 1; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
```

### JavaScript

```javascript
class Solution {
    pattern10(n) {
        // Ascending part
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= i; j++) {
                process.stdout.write("*");
            }
            console.log();
        }
        
        // Descending part
        for (let i = n - 1; i >= 1; i--) {
            for (let j = 1; j <= i; j++) {
                process.stdout.write("*");
            }
            console.log();
        }
    }
}
```

### Python

```python
class Solution:
    def pattern10(self, n):
        # Ascending part
        for i in range(1, n + 1):
            for j in range(1, i + 1):
                print("*", end="")
            print()
        
        # Descending part
        for i in range(n - 1, 0, -1):
            for j in range(1, i + 1):
                print("*", end="")
            print()
```

---

### Using String Operations

## Java

```java
class Solution {
    public void pattern10(int n) {
        for (int i = 1; i < n * 2; i++) {
            int stars = (i <= n) ? i : 2 * n - i;
            System.out.println("*".repeat(stars));
        }
    }
}
```

### JavaScript

```javascript
class Solution {
    pattern10(n) {
        for (let i = 1; i < n * 2; i++) {
            const stars = i <= n ? i : 2 * n - i;
            console.log("*".repeat(stars));
        }
    }
}
```

### Python

```python
class Solution:
    def pattern10(self, n):
        for i in range(1, n * 2):
            stars = i if i <= n else 2 * n - i
            print("*" * stars)
```

---

## Edge Cases to Consider

1. **n = 1:** Should print a single "*"
2. **n = 2:** Should create a small half diamond (*, **, *)
3. **Small Values:** Verify correct ascending and descending pattern
4. **Larger Values:** Ensure pattern maintains half diamond shape
5. **Maximum Constraint Value:** n = 20 should work efficiently

## Pattern Analysis

**Pattern Characteristics:**

- **Shape:** Half Diamond / Triangular Wave
- **Dimensions:** 2*n-1 total rows
- **Alignment:** Left-aligned
- **Parts:** Ascending (n rows) + Descending (n-1 rows)
- **Fill:** Stars (*) without any leading spaces

**Key Observations:**

- Total rows = 2*n - 1
- Middle row (row n) has the maximum number of stars: n
- First n rows have increasing stars (1, 2, 3, ..., n)
- Last n-1 rows have decreasing stars (n-1, n-2, ..., 1)
- No leading spaces - pattern is left-aligned
- Forms a triangular wave pattern

## Mathematical Pattern

**Ascending Part (rows 1 to n):**
- Row i: i stars

**Descending Part (rows n+1 to 2*n-1):**
- Row i (where i = n+1 to 2*n-1): 2*n-i stars

**Star Count Formula:**
```
stars(i) = {
    i,           if 1 ≤ i ≤ n
    2*n - i,     if n < i < 2*n
}
```

## Key Difference from Previous Patterns

| Aspect      | Pattern 2          | Pattern 9             | Pattern 10               |
| ----------- | ------------------ | --------------------- | ------------------------ |
| Shape       | Right Triangle     | Diamond               | Half Diamond             |
| Rows        | n                  | 2*n-1                 | 2*n-1                    |
| Max Width   | n (bottom)         | 2*n-1 (middle)        | n (middle)               |
| Alignment   | Left               | Center                | Left                     |
| Spaces      | None               | Leading spaces        | None                     |
| Pattern     | Ascending only     | Ascending + Inverted  | Ascending + Descending   |

## Follow-up Questions

1. **Right-aligned Half Diamond:** How would you right-align this pattern?
2. **Centered Half Diamond:** How to center this pattern like Pattern 9?
3. **Hollow Half Diamond:** How to create a half diamond with only border stars?
4. **Number Half Diamond:** How to use numbers instead of stars?

## Related Patterns

This pattern introduces the half diamond concept:

- **Pattern 2:** Simple ascending triangle (first part of Pattern 10)
- **Pattern 9:** Full diamond with centering
- **Pattern 10:** Half diamond without centering (current)
- **Future patterns:** More complex half diamond variations

## Summary

| Approach          | Time Complexity | Space Complexity | Pros                                    | Cons                               |
| ----------------- | --------------- | ---------------- | --------------------------------------- | ---------------------------------- |
| Single Loop       | O(n²)           | O(1)             | Elegant, unified logic, space optimal   | Requires conditional logic         |
| Two-Part Loops    | O(n²)           | O(1)             | Clear separation of ascending/descending | Two separate loop structures       |
| String Operations | O(n²)           | O(1)             | Most concise, very readable             | Language-dependent string methods  |

**Recommended Solution:** Your single loop approach with conditional logic is the most elegant and efficient solution. It demonstrates excellent understanding of pattern transitions and mathematical relationships.

## Tips for Half Diamond Pattern Problems

1. **Identify Transition Point:** Recognize where ascending changes to descending (at row n)
2. **Conditional Logic:** Master the ternary operator for star count calculation
3. **Row Count:** Remember total rows = 2*n-1, not 2*n
4. **Symmetry:** Ensure the descending part mirrors the ascending part
5. **Edge Cases:** Test with small values to verify logic

## Debugging Tips

1. **Check Row Count:** Verify loop runs exactly 2*n-1 times
2. **Verify Star Count:** For row i ≤ n, stars = i; for row i > n, stars = 2*n-i
3. **Transition Point:** Ensure row n has exactly n stars and appears only once
4. **Pattern Symmetry:** Visual inspection should show ascending then descending
5. **Edge Cases:** Test with n=1 and n=2 for basic functionality

## Pattern Variations to Practice

1. **Pattern 10a:** Right-aligned half diamond
2. **Pattern 10b:** Centered half diamond
3. **Pattern 10c:** Hollow half diamond (only border stars)
4. **Pattern 10d:** Number half diamond (1, 12, 123, ...)
5. **Pattern 10e:** Half diamond with spaces between stars

## Common Mistakes to Avoid

1. **Wrong Row Count:** Using 2*n instead of 2*n-1 for total iterations
2. **Incorrect Transition:** Wrong conditional logic leading to incorrect star counts
3. **Off-by-One Errors:** Boundary errors in loop conditions
4. **Missing Maximum:** Not having exactly n stars in the middle row
5. **Asymmetric Pattern:** Descending part not mirroring ascending part

## Connection to Mathematical Concepts

- **Triangular Wave Function:** Represents a mathematical triangular wave
- **Piecewise Functions:** Demonstrates conditional mathematical definitions
- **Symmetry:** Shows bilateral symmetry around the vertical axis through time
- **Arithmetic Sequences:** Both ascending and descending follow arithmetic progressions
- **Function Composition:** Combines two linear functions with a transition point

## Advanced Considerations

1. **Memory Optimization:** Efficient string handling for large patterns
2. **Scalability:** Handling very large values of n efficiently
3. **Performance:** Minimizing string concatenation operations
4. **Visualization:** Creating animated half diamond effects
5. **Generalization:** Extending to multiple peaks and valleys

## Pattern Extensions

1. **Multiple Half Diamonds:** Creating wave patterns with multiple peaks
2. **Nested Half Diamonds:** Half diamonds within half diamonds
3. **3D Half Diamonds:** Adding depth perception
4. **Gradient Effects:** Using different characters for visual depth
5. **Interactive Patterns:** User-controlled pattern modifications

## Real-world Applications

1. **Data Visualization:** Representing triangular wave data
2. **ASCII Art:** Creating simple graphics and borders
3. **Progress Indicators:** Visual progress bars with wave effects
4. **Game Graphics:** Simple geometric shapes in text-based games
5. **Educational Tools:** Teaching pattern recognition and mathematical sequences

## Algorithm Efficiency Analysis

**Your Solution Advantages:**
1. **Single Pass:** Only one loop required instead of two
2. **Conditional Elegance:** Clean ternary operator usage
3. **Space Optimal:** O(1) space complexity
4. **Mathematical Beauty:** Elegant formula: `stars = (i <= n) ? i : 2*n - i`
5. **Performance:** Minimal conditional checks per iteration

**Formula Derivation:**
- For ascending part: stars = i
- For descending part: we want stars = n-1, n-2, ..., 1 for rows n+1, n+2, ..., 2n-1
- When i = n+1, we want n-1 stars: 2*n - (n+1) = n-1 ✓
- When i = 2n-1, we want 1 star: 2*n - (2n-1) = 1 ✓
- General formula: stars = 2*n - i for descending part

## Performance Comparison

```
n = 1000 performance analysis:
- Your approach: ~1,000,000 operations (n²)
- Two-loop approach: ~1,000,000 operations (n²)
- String approach: ~1,000,000 operations + string overhead

Memory usage:
- Your approach: O(1) - only loop variables
- String approach: O(n) - temporary string storage
```

## Testing Strategy

1. **Unit Tests:** Test with n = 1, 2, 3, 4, 5
2. **Boundary Tests:** Test with maximum constraint (n = 20)
3. **Visual Verification:** Manual inspection of pattern shape
4. **Automated Testing:** Compare output with expected patterns
5. **Performance Tests:** Measure execution time for large inputs

Your implementation is exceptionally clean and demonstrates a deep understanding of pattern mathematics. The single loop with conditional logic is the optimal approach for this problem, showcasing both elegance and efficiency.