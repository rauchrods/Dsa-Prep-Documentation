# Pattern 1 - Square Star Pattern

### Difficulty: `Easy`

## Problem Statement

You are given an integer **n**. You need to **recreate the pattern** shown below for any value of N.

The pattern should be a **square of stars** where each row contains exactly **n stars**, and there are exactly **n rows**.

## Examples

```txt
Example 1:
Input:  n = 4
Output:
****
****
****
****

Example 2:
Input:  n = 5
Output:
*****
*****
*****
*****
*****

Example 3:
Input:  n = 3
Output:
***
***
***

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

To create a square pattern of stars, we need to print n rows, where each row contains exactly n stars. This can be achieved using nested loops - the outer loop handles the rows and the inner loop handles the columns (stars in each row).

## Approach:

- Use an outer loop to iterate through rows (from 0 to n-1).
- Use an inner loop to iterate through columns (from 0 to n-1).
- In the inner loop, print a star (\*) for each column.
- After completing each row (inner loop), print a newline to move to the next row.

## DryRun:

Input: n = 4

```
Row 0: Print 4 stars: ****
Row 1: Print 4 stars: ****
Row 2: Print 4 stars: ****
Row 3: Print 4 stars: ****

Final Output:
****
****
****
****
```

## Code.

## Java

```java
class Solution {
    public void pattern1(int n) {

        for (int i=0; i<n;i++){
            for(int j=0;j<n;j++){
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
  pattern1(n) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
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
    def pattern1(self, n):

        for i in range(n):
            for j in range(n):
                print("*", end="")
            print();
```

## Complexity Analysis

### Time Complexity: O(n²)

We have nested loops where both outer and inner loops run n times, resulting in n × n = n² iterations.

### Space Complexity: O(1)

We only use a constant amount of extra space for loop variables. The output space is not counted in auxiliary space complexity.

---

## Alternative Approaches

### Using String Multiplication

## Java

```java
class Solution {
    public void pattern1(int n) {
        String row = "*".repeat(n);
        for (int i = 0; i < n; i++) {
            System.out.println(row);
        }
    }
}
```

### JavaScript

```javascript
class Solution {
  pattern1(n) {
    const row = "*".repeat(n);
    for (let i = 0; i < n; i++) {
      console.log(row);
    }
  }
}
```

### Python

```python
class Solution:
    def pattern1(self, n):
        row = "*" * n
        for i in range(n):
            print(row)
```

---

## Edge Cases to Consider

1. **n = 1:** Should print a single star
2. **Small Values (n = 2, 3):** Verify correct square formation
3. **Larger Values:** Ensure pattern maintains square shape
4. **Maximum Constraint Value:** n = 20 should work efficiently

## Pattern Analysis

**Pattern Characteristics:**

- **Shape:** Square
- **Dimensions:** n × n
- **Fill:** Complete (solid square)
- **Symmetry:** Both horizontal and vertical symmetry

**Key Observations:**

- Each row has exactly n stars
- Total number of rows = n
- Total stars printed = n × n
- No spaces or gaps within the pattern

## Follow-up Questions

1. **Hollow Square:** How would you modify to print only the border?
2. **Different Characters:** How to use different characters instead of stars?
3. **Rectangular Pattern:** How to create an m × n rectangle pattern?
4. **Pattern with Numbers:** How to replace stars with numbers?

## Related Patterns

This is the foundation pattern for many other star patterns:

- **Pattern 2:** Right Triangle
- **Pattern 3:** Left Triangle
- **Pattern 4:** Hollow Square
- **Pattern 5:** Diamond Pattern

## Summary

| Approach      | Time Complexity | Space Complexity | Pros                                  | Cons                        |
| ------------- | --------------- | ---------------- | ------------------------------------- | --------------------------- |
| Nested Loops  | O(n²)           | O(1)             | Simple to understand, direct approach | Two loops needed            |
| String Repeat | O(n²)           | O(n)             | More concise code                     | Uses extra space for string |

**Recommended Solution:** Use the nested loop approach for better understanding of pattern logic and optimal space complexity. This approach also helps in building foundation for more complex patterns.

## Tips for Pattern Problems

1. **Identify the Structure:** Always analyze rows, columns, and what to print
2. **Start Simple:** Begin with basic nested loops
3. **Trace Through:** Manually trace for small values (n=2,3)
4. **Look for Patterns:** Find mathematical relationships in complex patterns
5. **Practice Variations:** Try hollow, numbered, or character-based versions
