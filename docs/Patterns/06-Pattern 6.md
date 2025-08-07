# Pattern 6 - Inverted Sequential Number Triangle Pattern

### Difficulty: `Easy`

## Problem Statement

You are given an integer **n**. You need to **recreate the pattern** shown below for any value of N.

The pattern should be an **inverted right triangle of sequential numbers** where each row **i** (counting from top) contains sequential numbers from **1** to **n-i+1**, creating a decreasing triangle pattern with consecutive numbers.

## Examples

```txt
Example 1:
Input:  n = 4
Output:
1234
123
12
1

Example 2:
Input:  n = 5
Output:
12345
1234
123
12
1

Example 3:
Input:  n = 3
Output:
123
12
1

Example 4:
Input:  n = 1
Output:
1
```

## Constraints

- 1 ≤ n ≤ 20
- Print the pattern in the function given to you.

## `1. Brute Force Approach`

### Algorithm / Intuition

## Solution1: Nested Loop Approach

## Intuition:

To create an inverted sequential number triangle pattern, we need to print n rows, where the first row contains numbers from 1 to n, the second row contains numbers from 1 to n-1, and so on until the last row contains only the number 1. This forms an inverted right triangle that decreases in size from top to bottom, with each row displaying consecutive numbers starting from 1. This can be achieved using nested loops - the outer loop handles the rows (decreasing from n to 1) and the inner loop handles printing the sequential numbers for each row.

## Approach:

- Use an outer loop to iterate through rows (from n down to 1).
- Use an inner loop to print sequential numbers from 1 to the current row value i.
- In the inner loop, print the current column number j (which represents the sequential number).
- After completing each row (inner loop), print a newline to move to the next row.

## DryRun:

Input: n = 5

```
Row 1: i = 5, Print numbers 1 to 5:  12345
Row 2: i = 4, Print numbers 1 to 4:  1234
Row 3: i = 3, Print numbers 1 to 3:  123
Row 4: i = 2, Print numbers 1 to 2:  12
Row 5: i = 1, Print number 1:        1

Final Output:
12345
1234
123
12
1
```

## Code.

## Java

```java
class Solution {
  public void pattern6(int n) {
    for (int i = n; i > 0; i--) {
      for (int j = 1; j <= i; j++) {
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
  pattern6(n) {
    for (let i = n; i > 0; i--) {
      for (let j = 1; j <= i; j++) {
        process.stdout.write(j.toString());
      }
      console.log();
    }
  }
}
```

## Python

```python
class Solution:
    def pattern6(self, n):
        for i in range (n,0,-1):
            for j in range (1,i+1):
                print(j, end="")
            print();
```

## Complexity Analysis

### Time Complexity: O(n²)

We have nested loops where the outer loop runs n times and the inner loop runs n, n-1, n-2, ..., 1 times respectively. Total iterations = n + (n-1) + (n-2) + ... + 1 = n(n+1)/2 = O(n²).

### Space Complexity: O(1)

We only use a constant amount of extra space for loop variables. The output space is not counted in auxiliary space complexity.

---

## Alternative Approaches

### Using String Building

## Java

```java
class Solution {
    public void pattern6(int n) {
        for (int i = n; i > 0; i--) {
            StringBuilder row = new StringBuilder();
            for (int j = 1; j <= i; j++) {
                row.append(j);
            }
            System.out.println(row.toString());
        }
    }
}
```

### JavaScript

```javascript
class Solution {
  pattern6(n) {
    for (let i = n; i > 0; i--) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        row += j;
      }
      console.log(row);
    }
  }
}
```

### Python

```python
class Solution:
    def pattern6(self, n):
        for i in range(n, 0, -1):
            row = ''.join(str(j) for j in range(1, i+1))
            print(row)
```

---

## Edge Cases to Consider

1. **n = 1:** Should print a single "1"
2. **Small Values (n = 2, 3):** Verify correct inverted triangle formation with sequential numbers
3. **Larger Values:** Ensure pattern maintains inverted right triangle shape with proper sequential numbers
4. **Maximum Constraint Value:** n = 20 should work efficiently
5. **Multi-digit Numbers:** For n > 9, consider how double-digit numbers affect visual alignment

## Pattern Analysis

**Pattern Characteristics:**

- **Shape:** Inverted Right Triangle
- **Dimensions:** n rows, with row i (from top) having n-i+1 numbers
- **Fill:** Sequential numbers starting from 1 in each row
- **Reduction:** Each row has one less number than the previous row

**Key Observations:**

- First row has numbers 1 to n, last row has only number 1
- Each row starts with 1 and goes up to the current row length
- Total numbers printed = n + (n-1) + (n-2) + ... + 1 = n(n+1)/2
- No spaces between numbers in each row
- Each row is a prefix of the sequence 1, 2, 3, ..., n

## Mathematical Pattern

For any row position r (counting from 1):

- **Numbers in row r:** 1, 2, 3, ..., (n-r+1)
- **Alternative view:** If loop variable i goes from n to 1, then numbers are 1 to i
- **Row Content:** Sequential integers from 1 to i
- **Row Length:** i characters (for single digits)

## Key Difference from Previous Patterns

| Aspect  | Pattern 3      | Pattern 4      | Pattern 5               | Pattern 6               |
| ------- | -------------- | -------------- | ----------------------- | ----------------------- |
| Row 1   | 1              | 1              | **\***                  | 12345                   |
| Row 2   | 12             | 22             | \*\*\*\*                | 1234                    |
| Row 3   | 123            | 333            | \*\*\*                  | 123                     |
| Shape   | Right Triangle | Right Triangle | Inverted Right Triangle | Inverted Right Triangle |
| Growth  | Increasing     | Increasing     | Decreasing              | Decreasing              |
| Content | Sequential     | Repeated       | Stars                   | Sequential              |
| Logic   | Print j        | Print i        | Print "\*"              | Print j                 |

## Follow-up Questions

1. **Right-Aligned Version:** How would you right-align this inverted triangle?
2. **Reverse Sequence:** How to print numbers in reverse order (n to 1) in each row?
3. **Different Starting Point:** How to start each row from a different number?
4. **Spaced Version:** How to add spaces between numbers?
5. **Alphabetical Version:** How to use letters instead of numbers?

## Related Patterns

This pattern combines concepts from previous patterns:

- **Pattern 3:** Sequential Number Triangle (increasing size, sequential numbers)
- **Pattern 4:** Repeated Number Triangle (increasing size, repeated numbers)
- **Pattern 5:** Inverted Star Triangle (decreasing size, stars)
- **Pattern 7+:** Advanced variations with spacing and alignment

## Summary

| Approach        | Time Complexity | Space Complexity | Pros                          | Cons             |
| --------------- | --------------- | ---------------- | ----------------------------- | ---------------- |
| Nested Loops    | O(n²)           | O(1)             | Simple, direct, space optimal | Two loops needed |
| String Building | O(n²)           | O(n)             | More flexible for formatting  | Uses extra space |

**Recommended Solution:** Use the nested loop approach for better understanding of pattern logic and optimal space complexity. This approach clearly shows the relationship between decreasing row values and sequential number printing.

## Tips for Inverted Sequential Number Pattern Problems

1. **Identify Sequential Logic:** Understand that each row prints consecutive numbers from 1
2. **Loop Direction:** Use decrementing outer loops (n to 1) for natural row progression
3. **Inner Loop Variable:** Print j (column index) not i (row index) for sequential numbers
4. **Boundary Conditions:** Ensure loops terminate correctly and start from 1
5. **Visual Debugging:** Trace through small examples to verify sequence correctness

## Debugging Tips

1. **Check Loop Variables:** Ensure you're printing j (sequential number), not i (row number)
2. **Verify Number Sequence:** Each row should start from 1 and go up to current row length
3. **Loop Boundaries:** Confirm outer loop decrements from n to 1, inner loop goes 1 to i
4. **Sequential Order:** Numbers should appear in order: 1, 2, 3, ... within each row
5. **Newline Placement:** Ensure newline is printed after completing each row

## Pattern Variations to Practice

1. **Pattern 6a:** Right-aligned inverted sequential triangle (with leading spaces)
2. **Pattern 6b:** Inverted sequential triangle with spaces between numbers
3. **Pattern 6c:** Inverted reverse sequential triangle (n to 1 in each row)
4. **Pattern 6d:** Inverted sequential triangle starting from different base numbers
5. **Pattern 6e:** Inverted alphabetical triangle (ABC, AB, A)

## Common Mistakes to Avoid

1. **Wrong Variable Printing:** Printing i (row number) instead of j (sequential number)
2. **Incorrect Sequence:** Not starting each row from 1
3. **Loop Direction Errors:** Using incrementing loops instead of decrementing
4. **Off-by-One Errors:** Wrong loop boundaries causing missing or extra numbers
5. **Missing Sequential Logic:** Printing random numbers instead of 1, 2, 3, ... sequence

## Connection to Mathematical Concepts

- **Arithmetic Progression:** Each row contains consecutive integers forming an arithmetic sequence with common difference 1
- **Triangular Numbers:** Total numbers printed = sum of first n natural numbers = n(n+1)/2
- **Prefix Sequences:** Each row is a prefix of the sequence 1, 2, 3, ..., n
- **Inverse Growth:** Pattern size decreases while maintaining sequential order within rows
