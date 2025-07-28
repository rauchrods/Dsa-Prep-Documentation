# Pattern 2 - Right Triangle Star Pattern

### Difficulty: Easy

## Problem Statement

You are given an integer **n**. You need to **recreate the pattern** shown below for any value of N.

The pattern should be a **right triangle of stars** where the first row contains 1 star, the second row contains 2 stars, and so on until the nth row contains n stars.

## Examples

```txt
Example 1:
Input:  n = 4
Output:
*
**
***
****

Example 2:
Input:  n = 5
Output:
*
**
***
****
*****

Example 3:
Input:  n = 3
Output:
*
**
***

Example 4:
Input:  n = 1
Output:
*
```

## Constraints

- 1 ≤ n ≤ 20
- Print the pattern in the function given to you.

## Brute Force Approach

### Algorithm / Intuition

## Solution1: Nested Loop Approach

## Intuition:

To create a right triangle pattern of stars, we need to print n rows where the ith row contains stars equal to the row number. This can be achieved using nested loops - the outer loop handles the rows and the inner loop prints the appropriate number of stars for each row.

## Approach:

- Use an outer loop to iterate through rows from 0 to n-1.
- For each row i, use an inner loop to print stars from 0 to i inclusive.
- The inner loop runs from 0 to i, printing one star in each iteration.
- After completing each row, print a newline to move to the next row.

## DryRun:

Input: n = 4

```
Row 0: Print stars from j=0 to j<=0 → Print 1 star: *
Row 1: Print stars from j=0 to j<=1 → Print 2 stars: **
Row 2: Print stars from j=0 to j<=2 → Print 3 stars: ***
Row 3: Print stars from j=0 to j<=3 → Print 4 stars: ****

Final Output:
*
**
***
****
```

## Code.

## Java

```java
class Solution {
    public void pattern2(int n) {

         for (int i=0; i<n;i++){
            for(int j=0;j<=i;j++){
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
  pattern2(n) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j <= i; j++) {
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
    def pattern2(self, n):
         for i in range(n):
            for j in range(i+1):
                print("*", end="")
            print();
```

## Complexity Analysis

### Time Complexity: O(n²)

The outer loop runs n times, and for each iteration i, the inner loop runs i+1 times. Total iterations = 1 + 2 + 3 + ... + n which equals n times (n+1) divided by 2, resulting in O(n²).

### Space Complexity: O(1)

We only use a constant amount of extra space for loop variables. The output space is not counted in auxiliary space complexity.

---

## Alternative Approaches

### Using String Multiplication

## Java

```java
class Solution {
    public void pattern2(int n) {
        for (int i = 1; i <= n; i++) {
            System.out.println("*".repeat(i));
        }
    }
}
```

### JavaScript

```javascript
class Solution {
  pattern2(n) {
    for (let i = 1; i <= n; i++) {
      console.log("*".repeat(i));
    }
  }
}
```

### Python

```python
class Solution:
    def pattern2(self, n):
        for i in range(1, n+1):
            print("*" * i)
```

### Using StringBuilder for Java

```java
class Solution {
    public void pattern2(int n) {
        StringBuilder sb = new StringBuilder();
        for (int i = 1; i <= n; i++) {
            sb.append("*");
            System.out.println(sb.toString());
        }
    }
}
```

---

## Edge Cases to Consider

1. **n = 1:** Should print a single star
2. **Small Values like n = 2, 3:** Verify correct triangle formation
3. **Larger Values:** Ensure pattern maintains right triangle shape
4. **Maximum Constraint Value:** n = 20 should work efficiently

## Pattern Analysis

**Pattern Characteristics:**

- **Shape:** Right Triangle
- **Alignment:** Left-aligned
- **Growth:** Each row has one more star than the previous row
- **Total Stars:** Sum of numbers from 1 to n

**Key Observations:**

- Row i starting from 0 has i+1 stars
- Row i starting from 1 has i stars
- Each row starts from the leftmost position
- No spaces before the stars in any row

**Mathematical Relationship:**

- Stars in row i equals i + 1 when using 0-indexed
- Total stars equals n times n+1 divided by 2

## Follow-up Questions

1. **Left Triangle:** How would you create a left-aligned triangle with spaces?
2. **Inverted Triangle:** How to create a decreasing triangle pattern?
3. **Numbers Instead of Stars:** How to replace stars with row numbers?
4. **Hollow Triangle:** How to print only the outline of the triangle?

## Related Patterns

This pattern serves as a foundation for:

- **Pattern 3:** Left Triangle with spaces
- **Pattern 4:** Inverted Right Triangle
- **Pattern 5:** Number Triangle
- **Pattern 6:** Floyd's Triangle

## DryRun Detailed:

Input: n = 5

```
Row 0: j runs from 0 to 0 → Print 1 star  → *
Row 1: j runs from 0 to 1 → Print 2 stars → **
Row 2: j runs from 0 to 2 → Print 3 stars → ***
Row 3: j runs from 0 to 3 → Print 4 stars → ****
Row 4: j runs from 0 to 4 → Print 5 stars → *****

Output:
*
**
***
****
*****
```

## Summary

| Approach      | Time Complexity | Space Complexity | Pros                           | Cons                         |
| ------------- | --------------- | ---------------- | ------------------------------ | ---------------------------- |
| Nested Loops  | O(n²)           | O(1)             | Clear logic, educational value | Requires nested loops        |
| String Repeat | O(n²)           | O(n)             | Concise and readable           | Uses extra space for strings |
| StringBuilder | O(n²)           | O(n)             | Efficient string building      | More complex implementation  |

**Recommended Solution:** Use the nested loop approach for better understanding of pattern logic and optimal space complexity. This approach helps build strong foundation for more complex triangular patterns.

## Tips for Triangle Patterns

1. **Row-Column Relationship:** Understand how many elements each row should have
2. **Loop Bounds:** Pay attention to loop conditions - less than vs less than or equal to
3. **Index Management:** Be careful with 0-indexed vs 1-indexed thinking
4. **Pattern Growth:** Observe how the pattern grows with each row
5. **Visualization:** Draw the pattern on paper for better understanding
