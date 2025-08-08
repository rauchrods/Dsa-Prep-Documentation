# Pattern 11 - Binary Triangle Pattern

### Difficulty: `Easy`

## Problem Statement

You are given an integer **n**. You need to **recreate the pattern** shown below for any value of N.

The pattern should be a **binary triangle** where:
1. Each row i contains i+1 binary digits (0 or 1)
2. Even-indexed rows (0, 2, 4, ...) start with 1
3. Odd-indexed rows (1, 3, 5, ...) start with 0
4. Within each row, binary digits alternate (1→0→1→0... or 0→1→0→1...)

## Examples

```txt
Example 1:
Input:  n = 4
Output:
1 
0 1 
1 0 1 
0 1 0 1 

Example 2:
Input:  n = 5
Output:
1 
0 1 
1 0 1 
0 1 0 1 
1 0 1 0 1 

Example 3:
Input:  n = 3
Output:
1 
0 1 
1 0 1 

Example 4:
Input:  n = 1
Output:
1 

Example 5:
Input:  n = 2
Output:
1 
0 1 
```

## Constraints

- 1 ≤ n ≤ 20
- Print the pattern in the function given to you.

## `1. Brute Force Approach`

### Algorithm / Intuition

## Solution1: Alternating Binary Pattern

## Intuition:

The binary triangle pattern follows a specific alternating rule both across rows and within rows. The key insight is that even-indexed rows start with 1, while odd-indexed rows start with 0. Within each row, the binary digits alternate. This can be achieved by determining the starting digit based on row parity (even/odd) and then alternating within each row using the formula `start = 1 - start` to flip between 0 and 1.

## Approach:

- Use an outer loop to iterate through rows (from 0 to n-1).
- For each row i, determine the starting binary digit:
  - If i is even (i % 2 == 0): start = 1
  - If i is odd (i % 2 == 1): start = 0
- Use an inner loop to print i+1 binary digits in the current row.
- After printing each digit, alternate it using `start = 1 - start`.
- Print a space after each digit and a newline after each row.

## DryRun:

Input: n = 5

```
Row 0: i = 0 (even), start = 1
  j = 0: print 1, start = 1-1 = 0
  Output: "1 "

Row 1: i = 1 (odd), start = 0
  j = 0: print 0, start = 1-0 = 1
  j = 1: print 1, start = 1-1 = 0
  Output: "0 1 "

Row 2: i = 2 (even), start = 1
  j = 0: print 1, start = 1-1 = 0
  j = 1: print 0, start = 1-0 = 1
  j = 2: print 1, start = 1-1 = 0
  Output: "1 0 1 "

Row 3: i = 3 (odd), start = 0
  j = 0: print 0, start = 1-0 = 1
  j = 1: print 1, start = 1-1 = 0
  j = 2: print 0, start = 1-0 = 1
  j = 3: print 1, start = 1-1 = 0
  Output: "0 1 0 1 "

Row 4: i = 4 (even), start = 1
  j = 0: print 1, start = 1-1 = 0
  j = 1: print 0, start = 1-0 = 1
  j = 2: print 1, start = 1-1 = 0
  j = 3: print 0, start = 1-0 = 1
  j = 4: print 1, start = 1-1 = 0
  Output: "1 0 1 0 1 "

Final Output:
1 
0 1 
1 0 1 
0 1 0 1 
1 0 1 0 1 
```

## Code.

## Java

```java
class Solution {
  public void pattern11(int n) {
    for (int i = 0; i < n; i++) {
      int start = i % 2 == 0 ? 1 : 0;
      for (int j = 0; j <= i; j++) {
        System.out.print(start + " ");
        start = 1 - start;
      }
      System.out.println();
    }
  }
}
```

## JavaScript

```javascript
class Solution {
    pattern11(n) {
        for (let i = 0; i < n; i++) {
      let start = i % 2 == 0 ? 1 : 0;
      for (let j = 0; j <= i; j++) {
        process.stdout.write(start + " ");
        start = 1 - start;
      }
      console.log();
    }
    }
}
```

## Python

```python
class Solution:
    def pattern11(self, n):
        for i in range (0,n):
            start = 1 if i % 2 == 0 else 0
            for j in range (0,i+1):
                print(start, end=" ")
                start = 1-start
            print()
```

## Complexity Analysis

### Time Complexity: O(n²)

The outer loop runs n times, and for each row i, the inner loop runs i+1 times. Total operations = Σ(i=0 to n-1)(i+1) = Σ(j=1 to n)j = n(n+1)/2 = O(n²).

### Space Complexity: O(1)

We only use a constant amount of extra space for loop variables and the alternating binary digit. The output space is not counted in auxiliary space complexity.

---

## Alternative Approaches

### Mathematical Formula Approach

## Java

```java
class Solution {
    public void pattern11(int n) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j <= i; j++) {
                // Formula: (i + j) % 2 gives alternating pattern
                // XOR with 1 when i is odd to flip the pattern
                int digit = ((i + j) % 2) ^ (i % 2);
                System.out.print(digit + " ");
            }
            System.out.println();
        }
    }
}
```

### JavaScript

```javascript
class Solution {
    pattern11(n) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j <= i; j++) {
                const digit = ((i + j) % 2) ^ (i % 2);
                process.stdout.write(digit + " ");
            }
            console.log();
        }
    }
}
```

### Python

```python
class Solution:
    def pattern11(self, n):
        for i in range(n):
            for j in range(i + 1):
                digit = ((i + j) % 2) ^ (i % 2)
                print(digit, end=" ")
            print()
```

---

### String Building Approach

## Java

```java
class Solution {
    public void pattern11(int n) {
        for (int i = 0; i < n; i++) {
            StringBuilder row = new StringBuilder();
            int start = i % 2 == 0 ? 1 : 0;
            for (int j = 0; j <= i; j++) {
                row.append(start).append(" ");
                start = 1 - start;
            }
            System.out.println(row.toString());
        }
    }
}
```

---

## Edge Cases to Consider

1. **n = 1:** Should print a single "1 "
2. **n = 2:** Should create correct alternating pattern for 2 rows
3. **Small Values:** Verify correct binary alternation and row starting digits
4. **Larger Values:** Ensure pattern maintains alternating binary sequence
5. **Maximum Constraint Value:** n = 20 should work efficiently

## Pattern Analysis

**Pattern Characteristics:**

- **Shape:** Right Triangle
- **Content:** Binary digits (0 and 1) with spaces
- **Dimensions:** n rows, with row i containing i+1 digits
- **Alternation Rules:**
  - Row parity determines starting digit (even→1, odd→0)
  - Within each row, digits alternate between 0 and 1

**Key Observations:**

- Row 0 starts with 1: "1 "
- Row 1 starts with 0: "0 1 "  
- Row 2 starts with 1: "1 0 1 "
- Row 3 starts with 0: "0 1 0 1 "
- Pattern continues with alternating starting digits
- Each row has exactly i+1 binary digits (where i starts from 0)

## Mathematical Pattern

**Row Starting Digits:**
- Even rows (0, 2, 4, ...): start = 1
- Odd rows (1, 3, 5, ...): start = 0
- Formula: `start = (i % 2 == 0) ? 1 : 0`

**Digit Alternation:**
- Within each row: current_digit = 1 - previous_digit
- Alternative formula: `digit = ((i + j) % 2) ^ (i % 2)`

**Row Structure:**
- Row i: contains (i+1) binary digits with spaces

## Key Difference from Previous Patterns

| Aspect     | Pattern 2     | Pattern 10     | Pattern 11                   |
| ---------- | ------------- | -------------- | ---------------------------- |
| Content    | Stars (*)     | Stars (*)      | Binary digits (0, 1)         |
| Shape      | Right Triangle| Half Diamond   | Right Triangle               |
| Rows       | n             | 2*n-1         | n                            |
| Logic      | Simple count  | Conditional    | Row parity + alternation     |
| Spacing    | No spaces     | No spaces      | Space after each digit       |
| Variation  | None          | Ascending/Desc | Binary alternation           |

## Follow-up Questions

1. **Inverted Binary Triangle:** How would you create an inverted binary triangle?
2. **Centered Binary Triangle:** How to center this pattern like Pattern 7?
3. **Reverse Starting Pattern:** How to make odd rows start with 1 and even rows start with 0?
4. **Different Base:** How to extend this to ternary (0,1,2) or other base systems?

## Related Patterns

This pattern introduces binary content with alternation:

- **Pattern 1-2:** Basic triangular shapes with single content type
- **Pattern 3:** Number triangles with sequential content
- **Pattern 11:** Binary triangles with alternating content (current)
- **Future patterns:** More complex content-based patterns

## Summary

| Approach          | Time Complexity | Space Complexity | Pros                                    | Cons                               |
| ----------------- | --------------- | ---------------- | --------------------------------------- | ---------------------------------- |
| Alternating Logic | O(n²)           | O(1)             | Clear, intuitive, easy to understand   | Requires state variable            |
| Mathematical Formula | O(n²)        | O(1)             | No state variables, purely functional  | Less intuitive, harder to debug   |
| String Building   | O(n²)           | O(n)             | Clean output formatting                 | Uses extra space                   |

**Recommended Solution:** Your alternating logic approach is the most intuitive and educational. It clearly demonstrates the binary alternation concept and is easy to understand and debug.

## Tips for Binary Pattern Problems

1. **Identify Alternation Rules:** Understand both row-level and within-row alternation
2. **Parity Checking:** Master the use of `i % 2` for even/odd detection
3. **State Toggle:** Learn the `start = 1 - start` technique for binary alternation
4. **Index Awareness:** Be careful with 0-based vs 1-based indexing
5. **Spacing:** Don't forget spaces between digits for readability

## Debugging Tips

1. **Check Starting Digits:** Verify even rows start with 1, odd rows start with 0
2. **Verify Alternation:** Ensure digits alternate correctly within each row
3. **Count Digits:** Each row i should have exactly i+1 digits
4. **Output Format:** Confirm spaces are printed after each digit
5. **Edge Cases:** Test with n=1 and n=2 for basic functionality

## Pattern Variations to Practice

1. **Pattern 11a:** Inverted binary triangle (starts with n digits, decreases)
2. **Pattern 11b:** Centered binary triangle with leading spaces
3. **Pattern 11c:** Binary triangle with reverse starting pattern (odd→1, even→0)
4. **Pattern 11d:** Ternary triangle (0, 1, 2 alternation)
5. **Pattern 11e:** Binary diamond (combination of upward and inverted binary triangles)

## Common Mistakes to Avoid

1. **Wrong Starting Digit:** Confusing even/odd row starting patterns
2. **Incorrect Alternation:** Not properly flipping binary digits within rows
3. **Index Confusion:** Using 1-based indexing instead of 0-based
4. **Missing Spaces:** Forgetting spaces between binary digits
5. **Loop Boundary:** Using `j < i` instead of `j <= i` for inner loop

## Connection to Mathematical Concepts

- **Binary Systems:** Fundamental understanding of base-2 representation
- **Modular Arithmetic:** Using modulo operator for parity checking
- **Boolean Logic:** Binary alternation mirrors boolean operations
- **Bitwise Operations:** XOR operations for mathematical formula approach
- **State Machines:** Each row represents a state with specific transition rules

## Advanced Considerations

1. **Memory Optimization:** Avoiding unnecessary string concatenations
2. **Scalability:** Handling very large values of n efficiently
3. **Generic Base Systems:** Extending to any base (not just binary)
4. **Bit Manipulation:** Using bitwise operations for alternation
5. **Pattern Recognition:** Understanding the mathematical formula behind alternation

## Pattern Extensions

1. **Multi-Base Patterns:** Extending to ternary, quaternary systems
2. **Complex Alternations:** Different alternation rules (every 2 positions, etc.)
3. **2D Binary Patterns:** Creating binary rectangles and diamonds
4. **Weighted Alternation:** Non-uniform probability distributions
5. **Interactive Patterns:** User-controlled alternation rules

## Real-world Applications

1. **Checkerboard Patterns:** Creating alternating visual patterns
2. **Test Data Generation:** Generating binary test sequences
3. **Digital Logic Design:** Understanding binary state alternation
4. **Game Development:** Creating tile patterns and textures
5. **Data Structures:** Understanding alternating data organization

## Algorithm Efficiency Analysis

**Your Solution Advantages:**
1. **Intuitive Logic:** Easy to understand and explain
2. **State Management:** Clear demonstration of state variable usage
3. **Readable Code:** Self-documenting through clear variable names
4. **Educational Value:** Excellent for teaching binary concepts
5. **Debugging Friendly:** Easy to trace through execution

**Binary Alternation Formula:**
- `start = 1 - start` is equivalent to `start = start == 0 ? 1 : 0`
- This technique works for any binary alternation (0↔1, true↔false)
- More efficient than conditional statements

## Performance Comparison

```
n = 1000 performance analysis:
- Your approach: ~500,500 operations (n² digits printed)
- Mathematical approach: ~500,500 operations + formula calculations
- String approach: ~500,500 operations + string overhead

Memory usage:
- Your approach: O(1) - only loop variables and state
- Mathematical approach: O(1) - purely functional
- String approach: O(n) - temporary string storage per row
```

## Testing Strategy

1. **Binary Verification:** Confirm each digit is 0 or 1
2. **Alternation Testing:** Verify correct alternation within rows
3. **Starting Pattern:** Check even/odd row starting digits
4. **Row Length:** Ensure each row has correct number of digits
5. **Format Testing:** Verify proper spacing and newlines

