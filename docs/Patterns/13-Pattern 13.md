# Pattern 13 - Incremental Number Triangle Pattern

### Difficulty: `Easy`

## Problem Statement

You are given an integer **n**. You need to **recreate the pattern** shown below for any value of N.

The pattern should be an **incremental number triangle** where:
1. Numbers are arranged in a right triangle format
2. Each row i contains i+1 numbers (starting from row 0)
3. Numbers increment continuously across rows (1, 2, 3, 4, 5, ...)
4. No resetting of numbers at the beginning of each row

## Examples

```txt
Example 1:
Input:  n = 4
Output:
1 
2 3 
4 5 6 
7 8 9 10 

Example 2:
Input:  n = 5
Output:
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 

Example 3:
Input:  n = 3
Output:
1 
2 3 
4 5 6 

Example 4:
Input:  n = 1
Output:
1 

Example 5:
Input:  n = 2
Output:
1 
2 3 
```

## Constraints

- 1 ≤ n ≤ 20
- Print the pattern in the function given to you.

## `1. Brute Force Approach`

### Algorithm / Intuition

## Solution1: Global Counter Approach

## Intuition:

The incremental number triangle differs from typical triangle patterns because numbers continue sequentially across row boundaries. Instead of resetting at each row, we maintain a global counter that increments with each printed number. This creates a continuous sequence (1, 2, 3, 4, ...) arranged in triangular form. The key insight is using a single counter variable that persists across all rows and positions.

## Approach:

- Initialize a global counter variable starting from 1.
- Use an outer loop to iterate through rows (from 0 to n-1).
- For each row i, use an inner loop to print i+1 numbers.
- For each position, print the current counter value and increment it.
- Add a space after each number and a newline after each row.

## DryRun:

Input: n = 5

```
Initialize: counter = 1

Row 0: i = 0, j from 0 to 0 (1 number)
  j = 0: print counter=1, counter becomes 2
  Output: "1 "

Row 1: i = 1, j from 0 to 1 (2 numbers)
  j = 0: print counter=2, counter becomes 3
  j = 1: print counter=3, counter becomes 4
  Output: "2 3 "

Row 2: i = 2, j from 0 to 2 (3 numbers)
  j = 0: print counter=4, counter becomes 5
  j = 1: print counter=5, counter becomes 6
  j = 2: print counter=6, counter becomes 7
  Output: "4 5 6 "

Row 3: i = 3, j from 0 to 3 (4 numbers)
  j = 0: print counter=7, counter becomes 8
  j = 1: print counter=8, counter becomes 9
  j = 2: print counter=9, counter becomes 10
  j = 3: print counter=10, counter becomes 11
  Output: "7 8 9 10 "

Row 4: i = 4, j from 0 to 4 (5 numbers)
  j = 0: print counter=11, counter becomes 12
  j = 1: print counter=12, counter becomes 13
  j = 2: print counter=13, counter becomes 14
  j = 3: print counter=14, counter becomes 15
  j = 4: print counter=15, counter becomes 16
  Output: "11 12 13 14 15 "

Final Output:
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 
```

## Code.

## Java

```java
class Solution {
  public void pattern13(int n) {
    int counter = 1; // Global counter for continuous numbering
    for (int i = 0; i < n; i++) {
      // Each row i has (i+1) numbers
      for (int j = 0; j <= i; j++) {
        System.out.print(counter + " "); // Print current counter value
        counter++; // Increment for next position
      }
      System.out.println(); // New line after each row
    }
  }
}
```

## JavaScript

```javascript
class Solution {
  pattern13(n) {
    let counter = 1; // Global counter for continuous numbering
    for (let i = 0; i < n; i++) {
      // Each row i has (i+1) numbers
      for (let j = 0; j <= i; j++) {
        process.stdout.write(counter + " "); // Print current counter value
        counter++; // Increment for next position
      }
      console.log(); // New line after each row
    }
  }
}
```

## Python

```python
class Solution:
    def pattern13(self, n):
        counter = 1  # Global counter for continuous numbering
        for i in range(0, n):
            # Each row i has (i+1) numbers
            for j in range(0, i + 1):
                print(counter, end=" ")  # Print current counter value
                counter += 1  # Increment for next position
            print()  # New line after each row
```

## Complexity Analysis

### Time Complexity: O(n²)

The outer loop runs n times, and for each row i, the inner loop runs i+1 times. Total numbers printed = 1+2+3+...+n = n(n+1)/2 = O(n²).

### Space Complexity: O(1)

We only use a constant amount of extra space for the counter variable and loop variables. The output space is not counted in auxiliary space complexity.

---

## Alternative Approaches

### Mathematical Formula Approach

## Java

```java
class Solution {
    public void pattern13(int n) {
        for (int i = 0; i < n; i++) {
            // Calculate starting number for row i
            int startNum = (i * (i + 1)) / 2 + 1;
            for (int j = 0; j <= i; j++) {
                System.out.print((startNum + j) + " ");
            }
            System.out.println();
        }
    }
}
```

### JavaScript

```javascript
class Solution {
    pattern13(n) {
        for (let i = 0; i < n; i++) {
            // Calculate starting number for row i
            const startNum = (i * (i + 1)) / 2 + 1;
            for (let j = 0; j <= i; j++) {
                process.stdout.write((startNum + j) + " ");
            }
            console.log();
        }
    }
}
```

### Python

```python
class Solution:
    def pattern13(self, n):
        for i in range(n):
            # Calculate starting number for row i
            start_num = (i * (i + 1)) // 2 + 1
            for j in range(i + 1):
                print(start_num + j, end=" ")
            print()
```

---

### Generator-based Approach (Python)

```python
class Solution:
    def pattern13(self, n):
        def number_generator():
            num = 1
            while True:
                yield num
                num += 1
        
        gen = number_generator()
        for i in range(n):
            for j in range(i + 1):
                print(next(gen), end=" ")
            print()
```

---

## Edge Cases to Consider

1. **n = 1:** Should print a single "1 "
2. **n = 2:** Should create a small triangle with continuous numbering
3. **Small Values:** Verify correct incremental pattern across rows
4. **Larger Values:** Ensure numbers continue incrementing properly
5. **Maximum Constraint Value:** n = 20 should work efficiently

## Pattern Analysis

**Pattern Characteristics:**

- **Shape:** Right Triangle
- **Content:** Continuous incremental numbers with spaces
- **Numbering:** Global counter, no row-based reset
- **Dimensions:** n rows, with row i containing i+1 numbers
- **Alignment:** Left-aligned triangle

**Key Observations:**

- Row 0 has 1 number, Row 1 has 2 numbers, ..., Row i has i+1 numbers
- Numbers flow continuously: 1, 2, 3, 4, 5, 6, ...
- Total numbers in first n rows = 1+2+3+...+n = n(n+1)/2
- Each row starts where the previous row ended (no gaps)
- Last number in pattern = n(n+1)/2

## Mathematical Pattern

**Row Structure:**
- **Row 0:** 1 number (starts at 1)
- **Row 1:** 2 numbers (starts at 2)  
- **Row 2:** 3 numbers (starts at 4)
- **Row i:** i+1 numbers (starts at sum of previous row lengths + 1)

**Starting Number Formula for Row i:**
`startNum = (i * (i + 1)) / 2 + 1`

This represents the sum of first i natural numbers plus 1.

**Number at Position (i,j):**
`number = startNum + j = (i * (i + 1)) / 2 + 1 + j`

## Key Difference from Previous Patterns

| Aspect     | Pattern 3       | Pattern 11      | Pattern 13                   |
| ---------- | --------------- | --------------- | ---------------------------- |
| Content    | Row-based nums  | Binary (0,1)    | Continuous incrementing nums |
| Numbering  | 1,2,3 per row   | Alternating     | Global counter (1,2,3,4...)  |
| Reset      | Each row resets | Each row resets | No reset across rows         |
| Logic      | Simple i+1      | Alternation     | Global state management      |
| Pattern    | 1,12,123        | 1,01,101        | 1,23,456                     |

## Follow-up Questions

1. **Reverse Incremental:** How would you create a decreasing number triangle?
2. **Centered Incremental:** How to center this pattern like Pattern 7?
3. **Custom Starting Number:** How to start from a number other than 1?
4. **Skip Pattern:** How to increment by 2 or other values instead of 1?

## Related Patterns

This pattern introduces global state management:

- **Pattern 3:** Row-based sequential numbers
- **Pattern 11:** Alternating binary with row-based reset
- **Pattern 13:** Global incremental numbering (current)
- **Future patterns:** More complex global state patterns

## Summary

| Approach          | Time Complexity | Space Complexity | Pros                                    | Cons                               |
| ----------------- | --------------- | ---------------- | --------------------------------------- | ---------------------------------- |
| Global Counter    | O(n²)           | O(1)             | Simple, intuitive, easy to understand  | Requires state variable            |
| Mathematical      | O(n²)           | O(1)             | Stateless, purely functional           | Complex formula derivation         |
| Generator         | O(n²)           | O(1)             | Clean separation of concerns           | Language-specific feature          |

**Recommended Solution:** Your global counter approach is the most intuitive and educational. It clearly demonstrates state management across nested loops.

## Tips for Incremental Pattern Problems

1. **Global State:** Understand when to use variables that persist across loop iterations
2. **Counter Management:** Practice maintaining counters across multiple nested loops
3. **Row Calculation:** Learn to calculate how many elements per row
4. **Mathematical Insight:** Derive formulas for starting positions when possible
5. **State vs Stateless:** Compare stateful and mathematical approaches

## Debugging Tips

1. **Counter Tracking:** Trace counter value through execution to verify correctness
2. **Row Length:** Ensure each row i has exactly i+1 numbers
3. **Continuity Check:** Verify no gaps or duplicates in number sequence
4. **Starting Values:** Confirm each row starts with the correct number
5. **Edge Cases:** Test with n=1 and n=2 for basic functionality

## Pattern Variations to Practice

1. **Pattern 13a:** Incremental triangle starting from different number (e.g., 0 or 10)
2. **Pattern 13b:** Incremental triangle with step size 2 (1, 3, 5, 7, ...)
3. **Pattern 13c:** Reverse incremental (largest numbers first)
4. **Pattern 13d:** Centered incremental triangle
5. **Pattern 13e:** Incremental diamond (combination with inverted triangle)

## Common Mistakes to Avoid

1. **Row Reset:** Accidentally resetting counter at the beginning of each row
2. **Wrong Increment:** Incrementing at wrong time or missing increments
3. **Loop Boundary:** Using wrong range in inner loop (i instead of i+1)
4. **Initial Value:** Starting counter from 0 instead of 1
5. **State Management:** Losing track of counter across loop iterations

## Connection to Mathematical Concepts

- **Triangular Numbers:** Total count follows triangular number sequence
- **Arithmetic Sequences:** Numbers form a simple arithmetic progression
- **Summation Formulas:** Row starting positions use sum of natural numbers
- **State Machines:** Counter represents state that changes with each transition
- **Combinatorial Patterns:** Demonstrates how sequential arrangement creates patterns

## Advanced Considerations

1. **Large Numbers:** Handling overflow for very large n values
2. **Memory Optimization:** Avoiding unnecessary variable declarations
3. **Performance:** Comparing counter vs formula-based approaches
4. **Generalization:** Extending to different increment values or starting points
5. **Parallel Processing:** Challenges of maintaining global state in concurrent environments

## Pattern Extensions

1. **Multi-dimensional:** Creating 3D incremental patterns
2. **Custom Sequences:** Using Fibonacci, prime numbers, or other sequences
3. **Conditional Increments:** Skipping certain numbers based on conditions
4. **Mixed Patterns:** Combining incremental with other pattern types
5. **Interactive Patterns:** User-controlled increment values and starting points

## Real-world Applications

1. **Data Labeling:** Assigning unique sequential IDs to data arranged in patterns
2. **Matrix Indexing:** Creating sequential indices for triangular matrices
3. **Database Design:** Sequential numbering in hierarchical structures
4. **Game Development:** Level numbering, item IDs in triangular arrangements
5. **Educational Tools:** Teaching number sequences and counting concepts

## Algorithm Efficiency Analysis

**Your Solution Advantages:**
1. **Simplicity:** Most straightforward approach to understand
2. **State Clarity:** Clear demonstration of persistent state across loops
3. **Educational Value:** Excellent for teaching global variable concepts
4. **Debugging Friendly:** Easy to trace counter progression
5. **Memory Efficient:** Minimal memory usage with O(1) space

**Mathematical Approach Benefits:**
- **Stateless:** No persistent variables needed
- **Parallelizable:** Each position can be calculated independently
- **Mathematical Beauty:** Elegant use of triangular number formula
- **Academic Interest:** Demonstrates formula derivation skills

## Performance Comparison

```
n = 50 performance analysis:
- Counter approach: 1,275 print operations (optimal)
- Mathematical approach: 1,275 calculations + print operations
- Generator approach: 1,275 generator calls + print operations

Memory usage:
- Counter approach: O(1) - single integer variable
- Mathematical approach: O(1) - no persistent state
- Generator approach: O(1) - generator state
```

## Testing Strategy

1. **Sequence Verification:** Ensure numbers increment by exactly 1
2. **Row Length:** Verify each row has correct number of elements
3. **Continuity:** Check no gaps or duplicates in sequence
4. **Starting Points:** Confirm each row starts with expected number
5. **Total Count:** Verify total numbers = n(n+1)/2

## Global State Management Tips

1. **Variable Scope:** Understand where to declare persistent variables
2. **Initialization:** Ensure proper starting values
3. **Mutation Timing:** Increment at the right point in loops
4. **State Tracking:** Maintain awareness of variable changes
5. **Testing State:** Use debugging to trace state changes

Your implementation excellently demonstrates **global state management** in nested loops, which is a fundamental concept for many algorithmic problems. The approach is both educationally valuable and practically efficient.

**Key Learning Outcomes:**
- **Persistent State:** Managing variables across multiple loop iterations
- **Counter Patterns:** Understanding when and how to use global counters  
- **Sequential Logic:** Building continuous sequences in geometric arrangements
- **Loop Coordination:** Coordinating inner and outer loops with shared state

This pattern serves as an excellent foundation for more complex problems involving global state, sequential processing, and coordinate-based calculations in algorithmic programming.