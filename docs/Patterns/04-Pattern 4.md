# Pattern 4 - Repeated Number Triangle Pattern

### Difficulty: `Easy`

## Problem Statement

You are given an integer **n**. You need to **recreate the pattern** shown below for any value of N.

The pattern should be a **right triangle of repeated numbers** where each row **i** contains the number **i** repeated **i times**.

## Examples

```txt
Example 1:
Input:  n = 4
Output:
1
22
333
4444

Example 2:
Input:  n = 5
Output:
1
22
333
4444
55555

Example 3:
Input:  n = 3
Output:
1
22
333

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

To create a repeated number triangle pattern, we need to print n rows, where row i contains the number i repeated i times. This forms a right triangle where each row displays the same number (equal to the row number) multiple times. This can be achieved using nested loops - the outer loop handles the rows and the inner loop handles the repetitions of the current row number.

## Approach:

- Use an outer loop to iterate through rows (from 1 to n).
- Use an inner loop to iterate j times (from 1 to current row number i).
- In the inner loop, print the current row number i (not j).
- After completing each row (inner loop), print a newline to move to the next row.

## DryRun:

Input: n = 5

```
Row 1: Print number 1, 1 time:  1
Row 2: Print number 2, 2 times: 22
Row 3: Print number 3, 3 times: 333
Row 4: Print number 4, 4 times: 4444
Row 5: Print number 5, 5 times: 55555

Final Output:
1
22
333
4444
55555
```

## Code.

## Java

```java
class Solution {
  public void pattern4(int n) {
    for (int i = 1; i <= n; i++) {
      for (int j = 1; j <= i; j++) {
        System.out.print(i);
      }
      System.out.println();
    }
  }
}
```

## JavaScript

```javascript
class Solution {
  pattern4(n) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
        process.stdout.write(i.toString());
      }
      console.log();
    }
  }
}
```

## Python

```python
class Solution:
    def pattern4(self, n):
        for i in range(1,n+1):
            for j in range(1,i+1):
                print(i, end="")
            print();
```

## Complexity Analysis

### Time Complexity: O(n²)

We have nested loops where the outer loop runs n times and the inner loop runs 1, 2, 3, ..., n times respectively. Total iterations = 1 + 2 + 3 + ... + n = n(n+1)/2 = O(n²).

### Space Complexity: O(1)

We only use a constant amount of extra space for loop variables. The output space is not counted in auxiliary space complexity.

---

## Alternative Approaches

### Using String Multiplication

## Java

```java
class Solution {
    public void pattern4(int n) {
        for (int i = 1; i <= n; i++) {
            String row = String.valueOf(i).repeat(i);
            System.out.println(row);
        }
    }
}
```

### JavaScript

```javascript
class Solution {
  pattern4(n) {
    for (let i = 1; i <= n; i++) {
      const row = i.toString().repeat(i);
      console.log(row);
    }
  }
}
```

### Python

```python
class Solution:
    def pattern4(self, n):
        for i in range(1, n+1):
            row = str(i) * i
            print(row)
```

---

## Edge Cases to Consider

1. **n = 1:** Should print a single "1"
2. **Small Values (n = 2, 3):** Verify correct triangle formation with repeated numbers
3. **Larger Values:** Ensure pattern maintains right triangle shape with proper repetitions
4. **Maximum Constraint Value:** n = 20 should work efficiently
5. **Double Digit Numbers:** For n > 9, ensure proper handling of multi-digit numbers

## Pattern Analysis

**Pattern Characteristics:**

- **Shape:** Right Triangle
- **Dimensions:** n rows, with row i having i elements
- **Fill:** Repeated row numbers (1, 22, 333, ...)
- **Growth:** Each row adds one more occurrence of the row number

**Key Observations:**

- Row i contains the number i repeated i times
- Each row has exactly i characters (for single-digit numbers)
- Total numbers printed = 1 + 2 + 3 + ... + n = n(n+1)/2
- No spaces between repeated numbers in each row

## Mathematical Pattern

For any row i:
- **Number to Print:** i
- **Repetitions:** i times
- **Row Content:** i repeated i times
- **Row Length:** i characters (for single digits)

## Key Difference from Pattern 3

| Aspect | Pattern 3 | Pattern 4 |
|--------|-----------|-----------|
| Row 1 | 1 | 1 |
| Row 2 | 12 | 22 |
| Row 3 | 123 | 333 |
| Logic | Print j (column index) | Print i (row index) |
| Sequence | Sequential numbers | Repeated same number |

## Follow-up Questions

1. **Reverse Pattern:** How would you create a decreasing version (n, n-1, ..., 1)?
2. **Different Characters:** How to use letters instead of numbers?
3. **Spaced Version:** How to add spaces between repeated numbers?
4. **Multi-digit Handling:** How does the pattern look for n > 9?

## Related Patterns

This pattern builds upon triangular concepts:

- **Pattern 1:** Square of Stars (constant character, square shape)
- **Pattern 3:** Sequential Number Triangle (different numbers per row)
- **Pattern 5:** Reverse patterns
- **Pattern 6:** Alphabetical versions

## Summary

| Approach         | Time Complexity | Space Complexity | Pros                                     | Cons                              |
| ---------------- | --------------- | ---------------- | ---------------------------------------- | --------------------------------- |
| Nested Loops     | O(n²)           | O(1)             | Simple, direct, space optimal           | Two loops needed                  |
| String Repeat    | O(n²)           | O(n)             | More concise, built-in string functions | Uses extra space, language dependent |

**Recommended Solution:** Use the nested loop approach for better understanding of pattern logic and optimal space complexity. This approach clearly shows the relationship between row number and repetitions.

## Tips for Repeated Number Pattern Problems

1. **Identify Repetition Logic:** Understand what number repeats and how many times
2. **Row-Column Relationship:** Recognize when to use row index vs column index
3. **Loop Control:** Ensure inner loop runs exactly i times for row i
4. **Output Format:** Consider spacing and alignment requirements
5. **Multi-digit Considerations:** Plan for numbers greater than 9

## Debugging Tips

1. **Check Inner Loop Variable:** Ensure you're printing i (row number), not j (column index)
2. **Verify Repetition Count:** Each row i should print number i exactly i times
3. **Loop Boundaries:** Confirm loops start from 1 and go to n and i respectively
4. **Newline Placement:** Ensure println() is called after completing each row

## Pattern Variations to Practice

1. **Pattern 4a:** Same pattern but with spaces between repeated numbers
2. **Pattern 4b:** Right-aligned repeated number triangle
3. **Pattern 4c:** Repeated character triangle (A, BB, CCC, ...)
4. **Pattern 4d:** Reverse repeated number triangle (starting from n)
5. **Pattern 4e:** Hollow repeated number triangle (only borders)

