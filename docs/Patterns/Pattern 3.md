# Pattern 3 - Number Triangle Pattern

### Difficulty: `Easy`

## Problem Statement

You are given an integer **n**. You need to **recreate the pattern** shown below for any value of N.

The pattern should be a **right triangle of numbers** where each row **i** contains exactly **i numbers**, starting from 1 and going up to **i** in sequence.

## Examples

```txt
Example 1:
Input:  n = 4
Output:
1
12
123
1234

Example 2:
Input:  n = 5
Output:
1
12
123
1234
12345

Example 3:
Input:  n = 3
Output:
1
12
123

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

To create a number triangle pattern, we need to print n rows, where row i contains numbers from 1 to i. This forms a right triangle where each row builds upon the previous one by adding one more number. This can be achieved using nested loops - the outer loop handles the rows and the inner loop handles the numbers in each row.

## Approach:

- Use an outer loop to iterate through rows (from 1 to n).
- Use an inner loop to iterate through numbers (from 1 to current row number i).
- In the inner loop, print the current number j.
- After completing each row (inner loop), print a newline to move to the next row.

## DryRun:

Input: n = 4

```
Row 1: Print numbers 1 to 1: 1
Row 2: Print numbers 1 to 2: 12
Row 3: Print numbers 1 to 3: 123
Row 4: Print numbers 1 to 4: 1234

Final Output:
1
12
123
1234
```

## Code.

## Java

```java
class Solution {
  public void pattern3(int n) {
    for (int i = 1; i <= n; i++) {
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
  pattern3(n) {
    for (let i = 1; i <= n; i++) {
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
    def pattern3(self, n):
        for i in range(1,n+1):
            for j in range(1,i+1):
                print(j, end="")
            print();
```

## Complexity Analysis

### Time Complexity: O(n²)

We have nested loops where the outer loop runs n times and the inner loop runs 1, 2, 3, ..., n times respectively. Total iterations = 1 + 2 + 3 + ... + n = n(n+1)/2 = O(n²).

### Space Complexity: O(1)

We only use a constant amount of extra space for loop variables. The output space is not counted in auxiliary space complexity.

---

## Alternative Approaches

### Using String Building

## Java

```java
class Solution {
    public void pattern3(int n) {
        for (int i = 1; i <= n; i++) {
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
  pattern3(n) {
    for (let i = 1; i <= n; i++) {
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
    def pattern3(self, n):
        for i in range(1, n+1):
            row = ""
            for j in range(1, i+1):
                row += str(j)
            print(row)
```

---

## Edge Cases to Consider

1. **n = 1:** Should print a single "1"
2. **Small Values (n = 2, 3):** Verify correct triangle formation
3. **Larger Values:** Ensure pattern maintains right triangle shape
4. **Maximum Constraint Value:** n = 20 should work efficiently

## Pattern Analysis

**Pattern Characteristics:**

- **Shape:** Right Triangle
- **Dimensions:** n rows, with row i having i elements
- **Fill:** Sequential numbers (1, 2, 3, ...)
- **Growth:** Each row adds one more number than the previous row

**Key Observations:**

- Row i has exactly i numbers
- Each row starts from 1 and goes up to the row number
- Total numbers printed = 1 + 2 + 3 + ... + n = n(n+1)/2
- No spaces between numbers in each row

## Mathematical Pattern

For any row i:
- **Start:** 1
- **End:** i
- **Count:** i numbers
- **Sequence:** 1, 2, 3, ..., i

## Follow-up Questions

1. **Reverse Number Triangle:** How would you print numbers in descending order?
2. **Different Starting Point:** How to start from a number other than 1?
3. **Left-Aligned Triangle:** How to create a left-aligned version with spaces?
4. **Alphabetical Version:** How to replace numbers with letters (A, B, C...)?

## Related Patterns

This pattern is fundamental for understanding triangular patterns:

- **Pattern 1:** Square of Stars
- **Pattern 4:** Repeated Number Triangle (each row prints the row number)
- **Pattern 5:** Reverse Number Triangle
- **Pattern 6:** Inverted Number Triangle

## Summary

| Approach       | Time Complexity | Space Complexity | Pros                                    | Cons                           |
| -------------- | --------------- | ---------------- | --------------------------------------- | ------------------------------ |
| Nested Loops   | O(n²)           | O(1)             | Simple, direct approach, space optimal | Two loops needed               |
| String Builder | O(n²)           | O(n)             | More readable for complex formatting    | Uses extra space for row data |

**Recommended Solution:** Use the nested loop approach for optimal space complexity and clear understanding of the pattern logic. This approach directly builds the pattern character by character.

## Tips for Number Pattern Problems

1. **Identify the Sequence:** Determine what numbers appear in each row
2. **Find the Range:** Understand the start and end values for each row
3. **Loop Boundaries:** Pay attention to whether loops start from 0 or 1
4. **Number Formatting:** Consider how numbers should be displayed (spacing, alignment)
5. **Practice Variations:** Try with different number sequences or ranges

## Debugging Tips

1. **Check Loop Bounds:** Ensure i and j start and end at correct values
2. **Verify Row Length:** Each row i should have exactly i numbers
3. **Number Sequence:** Confirm each row prints 1, 2, 3, ..., i
4. **Newline Placement:** Ensure println() is called after each row completion

## Pattern Variations to Practice

1. **Pattern 3a:** Same triangle but with spaces between numbers
2. **Pattern 3b:** Right-aligned number triangle
3. **Pattern 3c:** Number triangle with leading zeros (01, 012, 0123...)
4. **Pattern 3d:** Reverse number triangle (n, n-1, ..., 1 in first row)