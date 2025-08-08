# Pattern 12 - Number Crown Pattern

### Difficulty: `Easy`

## Problem Statement

You are given an integer **n**. You need to **recreate the pattern** shown below for any value of N.

The pattern should be a **number crown pattern** where each row consists of:
1. **Left part:** Sequential numbers from 1 to i (where i is the row number)
2. **Middle part:** Spaces for alignment
3. **Right part:** Sequential numbers from i down to 1

The pattern creates a symmetric "crown" or "butterfly wing" effect with numbers.

## Examples

```txt
Example 1:
Input:  n = 4
Output:
1      1
12    21
123  321
12344321

Example 2:
Input:  n = 5
Output:
1        1
12      21
123    321
1234  4321
1234554321

Example 3:
Input:  n = 3
Output:
1    1
12  21
123321

Example 4:
Input:  n = 1
Output:
1

Example 5:
Input:  n = 2
Output:
1  1
1221
```

## Constraints

- 1 ≤ n ≤ 20
- Print the pattern in the function given to you.

## `1. Brute Force Approach`

### Algorithm / Intuition

## Solution1: Three-Part Construction

## Intuition:

The number crown pattern can be visualized as having three distinct parts for each row:
1. **Left ascending sequence:** Numbers from 1 to i
2. **Middle spaces:** For symmetric alignment (decreases as row increases)
3. **Right descending sequence:** Numbers from i down to 1

The key insight is that the total width remains constant across all rows (2*n), and as the number sequences grow longer, the middle spaces decrease proportionally.

## Approach:

- Use an outer loop to iterate through rows (from 1 to n).
- For each row i:
  - **Left part:** Print numbers from 1 to i
  - **Middle part:** Print 2*(n-i) spaces for alignment
  - **Right part:** Print numbers from i down to 1
- The middle spaces ensure the pattern maintains proper crown/butterfly alignment.

## DryRun:

Input: n = 5

```
Row 1: i = 1
  Left: 1, Spaces: 2*(5-1) = 8, Right: 1
  Output: "1        1"

Row 2: i = 2
  Left: 1,2, Spaces: 2*(5-2) = 6, Right: 2,1
  Output: "12      21"

Row 3: i = 3
  Left: 1,2,3, Spaces: 2*(5-3) = 4, Right: 3,2,1
  Output: "123    321"

Row 4: i = 4
  Left: 1,2,3,4, Spaces: 2*(5-4) = 2, Right: 4,3,2,1
  Output: "1234  4321"

Row 5: i = 5
  Left: 1,2,3,4,5, Spaces: 2*(5-5) = 0, Right: 5,4,3,2,1
  Output: "1234554321"

Final Output:
1        1
12      21
123    321
1234  4321
1234554321
```

## Code.

## Java

```java
class Solution {
    public void pattern12(int n) {
        for (int i = 1; i <= n; i++) {
            // Left part: numbers from 1 to i
            for (int j = 1; j <= i; j++) {
                System.out.print(j);
            }
            
            // Middle part: spaces for alignment
            for (int j = 1; j <= 2 * (n - i); j++) {
                System.out.print(" ");
            }
            
            // Right part: numbers from i down to 1
            for (int j = i; j >= 1; j--) {
                System.out.print(j);
            }
            
            System.out.println();
        }
    }
}
```

## JavaScript

```javascript
class Solution {
    pattern12(n) {
        for (let i = 1; i <= n; i++) {
            let line = "";
            
            // Left part: numbers from 1 to i
            for (let j = 1; j <= i; j++) {
                line += j;
            }
            
            // Middle part: spaces for alignment
            for (let j = 1; j <= 2 * (n - i); j++) {
                line += " ";
            }
            
            // Right part: numbers from i down to 1
            for (let j = i; j >= 1; j--) {
                line += j;
            }
            
            console.log(line);
        }
    }
}
```

## Python

```python
class Solution:
    def pattern12(self, n):
        for i in range(1, n + 1):
            line = ""
            
            # Left part: numbers from 1 to i
            for j in range(1, i + 1):
                line += str(j)
            
            # Middle part: spaces for alignment
            for j in range(2 * (n - i)):
                line += " "
            
            # Right part: numbers from i down to 1
            for j in range(i, 0, -1):
                line += str(j)
            
            print(line)
```

## Complexity Analysis

### Time Complexity: O(n²)

The outer loop runs n times. For each row i, we perform three operations:
1. Left part: i iterations
2. Middle spaces: 2*(n-i) iterations  
3. Right part: i iterations
Total per row: i + 2*(n-i) + i = 2*n. Total: n * 2*n = O(n²).

### Space Complexity: O(n)

In the string-based approach (JS/Python), we build a string of length 2*n for each row. In Java, we use direct printing with O(1) space.

---

## Alternative Approaches

### String Building with StringBuilder (Java)

## Java

```java
class Solution {
    public void pattern12(int n) {
        for (int i = 1; i <= n; i++) {
            StringBuilder sb = new StringBuilder();
            
            // Left part
            for (int j = 1; j <= i; j++) {
                sb.append(j);
            }
            
            // Middle spaces
            for (int j = 1; j <= 2 * (n - i); j++) {
                sb.append(" ");
            }
            
            // Right part
            for (int j = i; j >= 1; j--) {
                sb.append(j);
            }
            
            System.out.println(sb.toString());
        }
    }
}
```

### Optimized String Approach

## Java

```java
class Solution {
    public void pattern12(int n) {
        for (int i = 1; i <= n; i++) {
            StringBuilder left = new StringBuilder();
            StringBuilder right = new StringBuilder();
            
            for (int j = 1; j <= i; j++) {
                left.append(j);
                right.insert(0, j); // Build right part in reverse
            }
            
            String spaces = " ".repeat(2 * (n - i));
            System.out.println(left.toString() + spaces + right.toString());
        }
    }
}
```

### JavaScript with Array Join

```javascript
class Solution {
    pattern12(n) {
        for (let i = 1; i <= n; i++) {
            const left = Array.from({length: i}, (_, k) => k + 1).join('');
            const spaces = ' '.repeat(2 * (n - i));
            const right = Array.from({length: i}, (_, k) => i - k).join('');
            
            console.log(left + spaces + right);
        }
    }
}
```

### Python with List Comprehensions

```python
class Solution:
    def pattern12(self, n):
        for i in range(1, n + 1):
            left = ''.join(str(j) for j in range(1, i + 1))
            spaces = ' ' * (2 * (n - i))
            right = ''.join(str(j) for j in range(i, 0, -1))
            
            print(left + spaces + right)
```

---

## Edge Cases to Consider

1. **n = 1:** Should print a single "1"
2. **n = 2:** Should create proper crown with minimal spacing
3. **Small Values:** Verify correct number sequences and spacing
4. **Larger Values:** Ensure pattern maintains crown/butterfly symmetry
5. **Maximum Constraint Value:** n = 20 should work efficiently

## Pattern Analysis

**Pattern Characteristics:**

- **Shape:** Crown/Butterfly wings
- **Content:** Sequential numbers (1 to i, then i to 1)
- **Dimensions:** n rows, each with total width of 2*n characters
- **Symmetry:** Horizontal symmetry around the center vertical line
- **Alignment:** Left and right parts are mirror images with space separation

**Key Observations:**

- Each row i contains numbers 1 to i on the left, and i to 1 on the right
- Middle spaces = 2*(n-i), ensuring constant total width of 2*n
- Last row has no middle spaces (forms continuous sequence 123...n...321)
- First row has maximum spacing (2*(n-1) spaces between the two 1's)
- Pattern creates symmetric "wings" that close together at the bottom

## Mathematical Pattern

**Row Structure for row i:**
- **Left sequence:** 1, 2, 3, ..., i (length: i)
- **Middle spaces:** 2*(n-i) spaces
- **Right sequence:** i, i-1, i-2, ..., 1 (length: i)
- **Total width:** i + 2*(n-i) + i = 2*n (constant across all rows)

**Space Formula:** `spaces(i) = 2 * (n - i)`
- Row 1: 2*(n-1) spaces
- Row 2: 2*(n-2) spaces
- ...
- Row n: 2*(n-n) = 0 spaces

## Key Difference from Previous Patterns

| Aspect       | Pattern 11      | Pattern 3       | Pattern 12                   |
| ------------ | --------------- | --------------- | ---------------------------- |
| Content      | Binary (0,1)    | Numbers (1,2,3) | Mirrored numbers             |
| Shape        | Right Triangle  | Right Triangle  | Crown/Butterfly              |
| Symmetry     | None            | None            | Horizontal symmetry          |
| Parts        | Single sequence | Single sequence | Three parts (left+space+right)|
| Alignment    | Left            | Left            | Symmetric crown              |
| Complexity   | Alternation     | Sequential      | Mirror sequences + spacing   |

## Follow-up Questions

1. **Inverted Crown:** How would you create an inverted crown pattern?
2. **Centered Crown:** How to center the entire crown pattern?
3. **Hollow Crown:** How to create a crown with only border numbers?
4. **Letter Crown:** How to use letters instead of numbers?

## Related Patterns

This pattern introduces symmetric mirroring concepts:

- **Pattern 3:** Basic number triangle (foundation for left part)
- **Pattern 12:** Number crown with mirroring (current)
- **Future patterns:** More complex symmetric patterns

## Summary

| Approach               | Time Complexity | Space Complexity | Pros                                    | Cons                               |
| ---------------------- | --------------- | ---------------- | --------------------------------------- | ---------------------------------- |
| Three-Part Construction| O(n²)           | O(1) / O(n)      | Clear logic, easy to understand         | Three separate loops               |
| String Building        | O(n²)           | O(n)             | Clean code, good for complex formatting | Extra memory usage                 |
| Array/List Methods     | O(n²)           | O(n)             | Functional programming style            | Less efficient, language dependent|

**Recommended Solution:** The three-part construction approach is most educational and demonstrates clear understanding of the pattern structure.

## Tips for Crown Pattern Problems

1. **Identify Three Parts:** Recognize left sequence, middle spaces, right sequence
2. **Constant Width:** Understand that total width remains constant (2*n)
3. **Space Calculation:** Master the 2*(n-i) formula for middle spacing
4. **Mirror Logic:** Practice building reverse sequences efficiently
5. **Symmetry Verification:** Ensure proper horizontal symmetry

## Debugging Tips

1. **Check Total Width:** Each row should have exactly 2*n characters
2. **Verify Sequences:** Left should be 1→i, right should be i→1
3. **Space Count:** Row i should have 2*(n-i) middle spaces
4. **Symmetry Test:** Pattern should be horizontally symmetric
5. **Edge Cases:** Test with n=1, n=2 for basic functionality

## Pattern Variations to Practice

1. **Pattern 12a:** Inverted crown (starts with full sequence, ends with single numbers)
2. **Pattern 12b:** Centered crown (add leading spaces to center the entire pattern)
3. **Pattern 12c:** Letter crown (A→i, i→A sequences)
4. **Pattern 12d:** Hollow crown (only border numbers, spaces inside)
5. **Pattern 12e:** Double crown (two crowns stacked vertically)

## Common Mistakes to Avoid

1. **Wrong Space Count:** Using n-i instead of 2*(n-i) for middle spaces
2. **Incorrect Sequences:** Not properly building ascending/descending sequences
3. **Asymmetric Pattern:** Left and right parts not being proper mirrors
4. **Variable Width:** Rows having different total widths
5. **Loop Boundaries:** Off-by-one errors in sequence generation

## Connection to Mathematical Concepts

- **Mirror Symmetry:** Demonstrates perfect horizontal reflection
- **Arithmetic Sequences:** Both ascending (1→i) and descending (i→1) progressions
- **Combinatorial Patterns:** Shows how sequences can be combined symmetrically
- **Space-Time Trade-offs:** Balancing computation vs memory in different approaches
- **String Manipulation:** Advanced text formatting and alignment

## Advanced Considerations

1. **Memory Optimization:** Choosing between direct printing vs string building
2. **Large Numbers:** Handling cases where numbers exceed single digits
3. **Unicode Support:** Using different number systems or symbols
4. **Performance:** Minimizing string operations for better efficiency
5. **Generalization:** Extending to arbitrary sequences beyond simple numbers

## Pattern Extensions

1. **Multi-Digit Numbers:** Handling sequences with 2+ digit numbers
2. **Custom Sequences:** Using Fibonacci, prime numbers, or other sequences
3. **3D Crown Effects:** Adding visual depth with spacing and symbols
4. **Animated Crowns:** Creating dynamic crown formation effects
5. **Interactive Patterns:** User-controlled sequence types and sizes

## Real-world Applications

1. **Data Visualization:** Creating symmetric data representations
2. **ASCII Art:** Building decorative borders and frames
3. **UI Design:** Creating symmetric layout patterns
4. **Educational Tools:** Teaching symmetry and sequence concepts
5. **Game Development:** Creating symmetric level designs and patterns

## Algorithm Efficiency Analysis

**Three-Part Approach Advantages:**
1. **Clear Structure:** Each part has distinct responsibility
2. **Easy Debugging:** Can test each part independently
3. **Memory Efficient:** Direct printing avoids string storage
4. **Scalable:** Works well for large values of n
5. **Educational:** Clearly shows the pattern construction logic

**Space Complexity Considerations:**
- **Java (direct print):** O(1) - no temporary storage
- **JavaScript/Python (string building):** O(n) - temporary string per row
- **StringBuilder approach:** O(n) - reusable buffer

## Performance Comparison

```
n = 100 performance analysis:
- Direct printing: ~20,000 operations (optimal)
- String building: ~20,000 operations + string overhead
- Array/List methods: ~20,000 operations + collection overhead

Memory usage:
- Direct printing: O(1) - no temporary storage
- String approaches: O(n) - temporary strings
- Collection approaches: O(n) - temporary arrays/lists
```

## Testing Strategy

1. **Symmetry Testing:** Verify left and right parts mirror each other
2. **Width Consistency:** Ensure all rows have width 2*n
3. **Sequence Verification:** Check ascending/descending number sequences
4. **Spacing Accuracy:** Verify 2*(n-i) middle spaces per row
5. **Edge Case Testing:** Test with n=1, n=2, and larger values

## Crown Pattern Mastery Tips

1. **Visualize the Structure:** Think of it as wings closing together
2. **Formula Derivation:** Understand why spaces = 2*(n-i)
3. **Symmetry First:** Always ensure mirror symmetry in design
4. **Constant Width Principle:** Maintain uniform row width
5. **Sequential Logic:** Master both forward and reverse sequence generation

This crown pattern excellently demonstrates how to combine multiple sequence types with precise spacing to create complex symmetric shapes. It's a stepping stone toward more advanced pattern problems involving multiple coordinated sequences and symmetric design principles.

The pattern teaches important programming concepts:
- **Multi-part construction:** Breaking complex patterns into manageable parts
- **Symmetric design:** Creating mirror images programmatically  
- **Space management:** Using calculated spacing for alignment
- **Sequence manipulation:** Building both forward and reverse sequences

These skills are valuable for text formatting, data visualization, and creating symmetric layouts in various programming contexts.