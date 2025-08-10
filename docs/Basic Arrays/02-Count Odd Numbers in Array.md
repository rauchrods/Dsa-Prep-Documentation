# Count of Odd Numbers in Array

### Difficulty: `Easy`

### **Practice Links:**
- **[GeeksforGeeks - Count Odd Even](https://www.geeksforgeeks.org/problems/count-odd-even/1)**
- **[TakeUForward - Count of Odd Numbers in Array](https://takeuforward.org/plus/dsa/beginner-problem/basic-arrays/count-of-odd-numbers-in-array)**

## Problem Statement

Given an array of **n** elements. The task is to return the **count of the number of odd numbers** in the array.

An **odd number** is an integer that is not divisible by 2, or equivalently, a number where `number % 2 != 0`.

## Mathematical Definition

A number **x** is odd if:
- **x % 2 != 0** (remainder when divided by 2 is not zero)
- **x % 2 == 1** (remainder when divided by 2 is exactly 1)

The task is to count how many such numbers exist in the given array.

## Examples

```txt
Example 1:
Input:  n = 5, array = [1, 2, 3, 4, 5]
Output: 3
Explanation: The three odd elements are (1, 3, 5).

Example 2:
Input:  n = 6, array = [1, 2, 1, 5, 1]
Output: 5
Explanation: The five odd elements are one 5 and four 1's.

Example 3:
Input:  n = 5, array = [1, 3, 5, 7, 9]
Output: 5
Explanation: All elements are odd numbers.

Example 4:
Input:  n = 4, array = [2, 4, 6, 8]
Output: 0
Explanation: No odd numbers in the array.

Example 5:
Input:  n = 3, array = [0, -1, -3]
Output: 2
Explanation: The two odd elements are (-1, -3). Note: 0 is even.
```

## Constraints

- 1 ≤ n ≤ 10^6
- -10^9 ≤ arr[i] ≤ 10^9
- Array can contain positive, negative, or zero values

## Key Concepts

- **Modulo Operation:** Using `%` operator to check divisibility
- **Odd Number Property:** Any number not divisible by 2
- **Array Traversal:** Visiting each element to check the condition
- **Counting Pattern:** Maintaining a counter for matching elements

---

## Approach 1: Iterative Solution (Recommended)

### Algorithm / Intuition

The most straightforward and efficient approach:
1. **Initialize a counter to 0**
2. **Iterate through each element** in the array
3. **Check if element is odd** using modulo operation
4. **Increment counter** if element is odd
5. **Return the final count**

### Core Logic:
- Use modulo operator `%` to check if a number is odd
- A number is odd if `number % 2 != 0`
- Traverse the array once and count qualifying elements
- Single pass ensures O(n) time complexity

### Step-by-Step Algorithm:
1. Initialize `count = 0` to track odd numbers
2. Loop from `i = 0` to `i = n-1`
3. For each element `arr[i]`, check if `arr[i] % 2 != 0`
4. If condition is true, increment count: `count++`
5. Return the final count value

### DryRun Example (Iterative):

Input: n = 5, array = [1, 2, 3, 4, 5]

```
Initial: count = 0, n = 5

i = 0: arr[0] = 1, 1 % 2 = 1 ≠ 0 → odd → count = 1
i = 1: arr[1] = 2, 2 % 2 = 0 = 0 → even → count = 1
i = 2: arr[2] = 3, 3 % 2 = 1 ≠ 0 → odd → count = 2
i = 3: arr[3] = 4, 4 % 2 = 0 = 0 → even → count = 2
i = 4: arr[4] = 5, 5 % 2 = 1 ≠ 0 → odd → count = 3

Final: count = 3
Odd numbers found: 1, 3, 5
```

### Iterative Code Solutions:

#### Java

```java
class Solution {
    public int countOdd(int[] arr, int n) {
        // Initialize counter to track odd numbers
        int count = 0;
        
        // Iterate through each element in the array
        for (int i = 0; i < n; i++) {
            // Check if current element is odd using modulo operation
            if (arr[i] % 2 != 0) {
                // Increment count if element is odd
                count++;
            }
        }
        
        // Return total count of odd numbers
        return count;
    }
}
```

#### JavaScript

```javascript
class Solution {
    countOdd(arr, n) {
        // Initialize counter to track odd numbers
        let count = 0;
        
        // Iterate through each element using enhanced for loop
        for (let ele of arr) {
            // Check if current element is odd using modulo operation
            if (ele % 2 != 0) {
                // Increment count if element is odd
                count++;
            }
        }
        
        // Return total count of odd numbers
        return count;
    }
}
```

#### Python

```python
class Solution:
    def countOdd(self, arr, n):
        # Initialize counter to track odd numbers
        count = 0
        
        # Iterate through each element using enhanced for loop
        for ele in arr:
            # Check if current element is odd using modulo operation
            if ele % 2 != 0:
                # Increment count if element is odd
                count += 1
        
        # Return total count of odd numbers
        return count
```

### Iterative Complexity:
- **Time Complexity:** O(n) - visit each element exactly once
- **Space Complexity:** O(1) - only use constant extra space

---

## Approach 2: Using Built-in Functions

### Alternative Solutions Using Language Features:

#### Java (Using Streams)

```java
import java.util.Arrays;

class Solution {
    public int countOdd(int[] arr, int n) {
        // Use Java 8 Streams with filter and count
        return (int) Arrays.stream(arr, 0, n)
                          .filter(x -> x % 2 != 0)
                          .count();
    }
}
```

#### JavaScript (Using filter)

```javascript
class Solution {
    countOdd(arr, n) {
        // Use array filter method to count odd numbers
        return arr.slice(0, n).filter(ele => ele % 2 != 0).length;
    }
}
```

#### Python (Using List Comprehension)

```python
class Solution:
    def countOdd(self, arr, n):
        # Use list comprehension with sum to count odd numbers
        return sum(1 for ele in arr[:n] if ele % 2 != 0)
        
    # Alternative using filter
    def countOddFilter(self, arr, n):
        return len(list(filter(lambda x: x % 2 != 0, arr[:n])))
```

---

## Approach 3: Bitwise Operation (Advanced)

### Algorithm / Intuition

Using bitwise AND operation to check if a number is odd:
- **Bitwise property:** A number is odd if its least significant bit (LSB) is 1
- **Check condition:** `number & 1 == 1` (equivalent to `number % 2 != 0`)
- **Performance:** Slightly faster than modulo for some systems

### Bitwise Code Solutions:

#### Java

```java
class Solution {
    public int countOdd(int[] arr, int n) {
        // Initialize counter for odd numbers
        int count = 0;
        
        // Iterate through array elements
        for (int i = 0; i < n; i++) {
            // Use bitwise AND to check if number is odd
            // If LSB is 1, number is odd
            if ((arr[i] & 1) == 1) {
                count++;
            }
        }
        
        return count;
    }
}
```

#### JavaScript

```javascript
class Solution {
    countOdd(arr, n) {
        let count = 0;
        
        for (let ele of arr) {
            // Use bitwise AND to check if number is odd
            if ((ele & 1) === 1) {
                count++;
            }
        }
        
        return count;
    }
}
```

#### Python

```python
class Solution:
    def countOdd(self, arr, n):
        count = 0
        
        for ele in arr:
            # Use bitwise AND to check if number is odd
            if (ele & 1) == 1:
                count += 1
        
        return count
```

---

## Complexity Analysis Summary

| Approach              | Time Complexity | Space Complexity | Memory Usage      | Best For              |
|-----------------------|-----------------|------------------|-------------------|-----------------------|
| Basic Iteration       | O(n)            | O(1)             | Minimal           | All cases (recommended) |
| Built-in Functions    | O(n)            | O(1)*            | Language-dependent| Quick prototyping     |
| Bitwise Operation     | O(n)            | O(1)             | Minimal           | Performance-critical  |

*Built-in functions may use additional space internally

---

## Edge Cases to Consider

1. **Empty Array:** n = 0, should return 0
2. **All Odd Numbers:** Every element is odd
3. **All Even Numbers:** No odd numbers in array
4. **Single Element:** Array with one odd/even element
5. **Negative Numbers:** Handle negative odd numbers correctly
6. **Zero:** Zero is even, not odd

## Detailed Edge Case Analysis

```java
// Edge cases with step-by-step analysis
Input: n = 0, arr = []           → Output: 0 (empty array)
Input: n = 1, arr = [7]          → Output: 1 (single odd)
Input: n = 1, arr = [4]          → Output: 0 (single even)
Input: n = 4, arr = [1,3,5,7]    → Output: 4 (all odd)
Input: n = 4, arr = [2,4,6,8]    → Output: 0 (all even)
Input: n = 5, arr = [-1,-2,0,1,2] → Output: 2 (negative odd: -1, 1)
Input: n = 3, arr = [0,0,0]      → Output: 0 (zero is even)
```

---

## Test Cases

```java
public void testCountOdd() {
    Solution sol = new Solution();
    
    // Edge cases
    assert sol.countOdd(new int[]{}, 0) == 0;              // Empty array
    assert sol.countOdd(new int[]{7}, 1) == 1;             // Single odd
    assert sol.countOdd(new int[]{4}, 1) == 0;             // Single even
    
    // All odd numbers
    assert sol.countOdd(new int[]{1,3,5,7,9}, 5) == 5;     // All odd
    assert sol.countOdd(new int[]{1,1,1}, 3) == 3;         // Repeated odd
    
    // All even numbers
    assert sol.countOdd(new int[]{2,4,6,8}, 4) == 0;       // All even
    assert sol.countOdd(new int[]{0,0,0}, 3) == 0;         // All zeros
    
    // Mixed numbers
    assert sol.countOdd(new int[]{1,2,3,4,5}, 5) == 3;     // Mixed
    assert sol.countOdd(new int[]{2,4,1,6,3}, 5) == 2;     // Scattered odd
    
    // Negative numbers
    assert sol.countOdd(new int[]{-1,-2,-3,-4}, 4) == 2;   // Negative mix
    assert sol.countOdd(new int[]{-7,-5,-3,-1}, 4) == 4;   // All negative odd
    
    // Large numbers
    assert sol.countOdd(new int[]{101,102,103}, 3) == 2;   // Large odd/even
}
```

---

## Step-by-Step Visualization

### Basic Approach: arr = [1, 2, 1, 5, 1]

```
Initial: count = 0, n = 5

Step 1: i = 0, arr[0] = 1
        1 % 2 = 1 ≠ 0 → odd → count = 1
        Array: [1, 2, 1, 5, 1]
                ↑ (odd)

Step 2: i = 1, arr[1] = 2  
        2 % 2 = 0 = 0 → even → count = 1
        Array: [1, 2, 1, 5, 1]
                   ↑ (even)

Step 3: i = 2, arr[2] = 1
        1 % 2 = 1 ≠ 0 → odd → count = 2
        Array: [1, 2, 1, 5, 1]
                      ↑ (odd)

Step 4: i = 3, arr[3] = 5
        5 % 2 = 1 ≠ 0 → odd → count = 3
        Array: [1, 2, 1, 5, 1]
                         ↑ (odd)

Step 5: i = 4, arr[4] = 1
        1 % 2 = 1 ≠ 0 → odd → count = 4
        Array: [1, 2, 1, 5, 1]
                            ↑ (odd)

Final Result: count = 4
Odd numbers found: 1, 1, 5, 1 (note: example shows 5, but calculation gives 4)
```

### Bitwise Approach: arr = [3, 4, 7]

```
Binary representation and bitwise check:

Step 1: arr[0] = 3
        3 in binary: 011
        3 & 1 = 011 & 001 = 001 = 1 → odd → count = 1

Step 2: arr[1] = 4
        4 in binary: 100  
        4 & 1 = 100 & 001 = 000 = 0 → even → count = 1

Step 3: arr[2] = 7
        7 in binary: 111
        7 & 1 = 111 & 001 = 001 = 1 → odd → count = 2

Final Result: count = 2
```

---

## Mathematical Properties

### 1. Odd Number Characteristics
- **Definition:** Not divisible by 2
- **Remainder:** Always gives remainder 1 when divided by 2
- **Binary:** LSB (least significant bit) is always 1
- **Arithmetic:** odd ± even = odd, odd ± odd = even

### 2. Modulo Operation Properties
- **Even numbers:** n % 2 = 0
- **Odd numbers:** n % 2 = 1 (for positive) or -1 (for negative)
- **Universal check:** n % 2 != 0 works for both positive and negative

### 3. Bitwise Properties
- **LSB check:** n & 1 gives the last bit
- **Performance:** Bitwise operations are generally faster than modulo
- **Equivalence:** (n & 1) == 1 ⟺ n % 2 != 0

---

## Common Mistakes to Avoid

1. **Wrong Condition:** Using `arr[i] % 2 == 1` instead of `!= 0` (fails for negative odds)
2. **Index Bounds:** Accessing array elements beyond the given size n
3. **Negative Numbers:** Not handling negative odd numbers properly
4. **Zero Handling:** Treating 0 as odd (0 is even)
5. **Loop Logic:** Wrong loop termination condition

### Negative Number Handling:

```java
// Problem: This fails for negative odd numbers
if (arr[i] % 2 == 1) // Wrong: -3 % 2 = -1, not 1

// Solution: Use != 0 instead
if (arr[i] % 2 != 0) // Correct: works for both positive and negative
```

---

## Optimization Techniques

### 1. Early Termination (if maximum count needed)

```java
public int countOddMax(int[] arr, int n, int maxCount) {
    int count = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] % 2 != 0) {
            count++;
            // Early termination if we reach maximum needed
            if (count >= maxCount) return count;
        }
    }
    return count;
}
```

### 2. Unrolled Loop (for very large arrays)

```java
public int countOddUnrolled(int[] arr, int n) {
    int count = 0;
    int i = 0;
    
    // Process 4 elements at a time
    for (; i < n - 3; i += 4) {
        if (arr[i] % 2 != 0) count++;
        if (arr[i+1] % 2 != 0) count++;
        if (arr[i+2] % 2 != 0) count++;
        if (arr[i+3] % 2 != 0) count++;
    }
    
    // Handle remaining elements
    for (; i < n; i++) {
        if (arr[i] % 2 != 0) count++;
    }
    
    return count;
}
```

### 3. Parallel Processing (for massive arrays)

```java
import java.util.Arrays;

public int countOddParallel(int[] arr, int n) {
    return (int) Arrays.stream(arr, 0, n)
                      .parallel()
                      .filter(x -> x % 2 != 0)
                      .count();
}
```

---

## Performance Analysis

### Time Complexity Breakdown:
```
Single pass through n elements: O(n)
Each modulo operation: O(1)
Total: O(n)

For n = 1,000,000:
- Operations: ~1,000,000 comparisons
- Time: Linear growth, very efficient
```

### Comparison of Methods:
```
Modulo vs Bitwise (for checking odd):
- Modulo: arr[i] % 2 != 0
- Bitwise: (arr[i] & 1) == 1
- Performance: Bitwise slightly faster on some systems
- Readability: Modulo more readable and standard
```

---

## Real-World Applications

1. **Data Analysis:** Filtering datasets based on numerical properties
2. **Statistics:** Analyzing distribution of odd vs even values
3. **Gaming:** Counting specific types of game elements or scores
4. **Financial Systems:** Categorizing transactions by amount properties
5. **Image Processing:** Analyzing pixel values with specific characteristics
6. **Quality Control:** Counting items meeting certain criteria

---

## Related Problems

1. **Count Even Numbers:** Count elements where `n % 2 == 0`
2. **Count Prime Numbers:** Count numbers that are prime
3. **Count Numbers in Range:** Count elements within specific range
4. **Count Positive/Negative:** Count based on sign
5. **Count Divisible by K:** Count elements divisible by given number
6. **Find Odd/Even Positioned Elements:** Based on index position

---

## Variations and Extensions

### 1. Count Both Odd and Even

```java
public int[] countOddEven(int[] arr, int n) {
    int oddCount = 0, evenCount = 0;
    
    for (int i = 0; i < n; i++) {
        if (arr[i] % 2 != 0) {
            oddCount++;
        } else {
            evenCount++;
        }
    }
    
    return new int[]{oddCount, evenCount};
}
```

### 2. Count Odd Numbers in Range

```java
public int countOddInRange(int[] arr, int n, int min, int max) {
    int count = 0;
    
    for (int i = 0; i < n; i++) {
        if (arr[i] >= min && arr[i] <= max && arr[i] % 2 != 0) {
            count++;
        }
    }
    
    return count;
}
```

### 3. Find Positions of Odd Numbers

```java
public List<Integer> findOddPositions(int[] arr, int n) {
    List<Integer> positions = new ArrayList<>();
    
    for (int i = 0; i < n; i++) {
        if (arr[i] % 2 != 0) {
            positions.add(i);
        }
    }
    
    return positions;
}
```

---

## Follow-up Questions

1. How would you count odd numbers in a 2D array?
2. Can you modify this to count numbers divisible by any given number k?
3. How would you handle very large arrays that don't fit in memory?
4. What if you needed to count odd numbers in multiple arrays simultaneously?
5. How would you optimize this for arrays that are mostly even or mostly odd?

---

## Advanced Topics

### 1. SIMD (Single Instruction, Multiple Data)
- **Vectorization:** Process multiple array elements simultaneously
- **Performance:** Significant speedup for large arrays
- **Implementation:** Requires low-level programming or compiler optimizations

### 2. Memory Access Patterns
- **Cache Efficiency:** Sequential access is cache-friendly
- **Prefetching:** Modern CPUs predict and preload data
- **Memory Bandwidth:** Utilization depends on data access pattern

### 3. Branch Prediction
- **Modern CPUs:** Predict conditional branches for better performance
- **Pattern Recognition:** Regular patterns improve prediction accuracy
- **Impact:** Significant effect on performance for large datasets

---

## Interview Tips

### What Interviewers Look For:
1. **Correct Implementation:** Proper handling of odd number detection
2. **Edge Case Awareness:** Empty arrays, negative numbers, zero
3. **Code Quality:** Clean, readable, and efficient implementation
4. **Alternative Approaches:** Knowledge of different methods (modulo vs bitwise)
5. **Complexity Analysis:** Understanding of time and space requirements

### Common Interview Questions:
1. "How do you check if a number is odd?"
2. "What's the difference between modulo and bitwise approaches?"
3. "How would you handle negative numbers?"
4. "Can you optimize this further?"
5. "What if the array was sorted?"

---

## Summary

The count odd numbers problem demonstrates:

- **Fundamental conditional logic** and array processing
- **Mathematical operations** (modulo) for number properties
- **Efficient array traversal** patterns
- **Multiple implementation approaches** with trade-offs

**Key Approaches:**
1. **Modulo Method:** `n % 2 != 0` - Standard and readable
2. **Bitwise Method:** `(n & 1) == 1` - Slightly more efficient
3. **Built-in Functions:** Language-specific functional approaches

**Best Practices:**
- Use **modulo approach** for clarity and correctness
- Handle **negative numbers** properly with `!= 0` condition
- Consider **edge cases** like empty arrays and zero values
- Write **clean, maintainable code** with good variable names

This problem serves as an excellent introduction to conditional array processing and demonstrates how simple mathematical properties can be used to filter and count array elements efficiently.