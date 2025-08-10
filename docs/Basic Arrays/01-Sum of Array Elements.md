# Sum of Array Elements

### Difficulty: `Easy`

### **Practice Links:**
- **[GeeksforGeeks - Sum of Array](https://www.geeksforgeeks.org/problems/sum-of-array2326/1)**
- **[CodeChef - Array Sum](https://www.codechef.com/learn/course/arrays/ARRAYS02/problems/DSAAGP50)**
- **[HackerEarth - Array Sum](https://www.hackerearth.com/practice/basic-programming/implementation/basics-of-implementation/practice-problems/algorithm/array-sum-2-725368ac/)**

## Problem Statement

Given an array **arr** of size **n**, the task is to find the **sum of all the elements** in the array. Return the total sum of all elements.

## Mathematical Definition

Given an array arr[0, 1, 2, ..., n-1], find:
- **Sum = arr[0] + arr[1] + arr[2] + ... + arr[n-1]**

## Examples

```txt
Example 1:
Input:  n = 5, arr = [1, 2, 3, 4, 5]
Output: 15
Explanation: Sum of all the elements is 1+2+3+4+5 = 15

Example 2:
Input:  n = 6, arr = [1, 2, 1, 5, 1]
Output: 10
Explanation: Sum of all the elements is 1+2+1+5+1 = 10

Example 3:
Input:  n = 3, arr = [2, 1]
Output: 3
Explanation: Sum of all the elements is 2+1 = 3

Example 4:
Input:  n = 1, arr = [5]
Output: 5
Explanation: Only one element, so sum is 5

Example 5:
Input:  n = 4, arr = [-1, 2, -3, 4]
Output: 2
Explanation: Sum of all elements is (-1)+2+(-3)+4 = 2
```

## Constraints

- 1 ≤ n ≤ 10^6
- -10^9 ≤ arr[i] ≤ 10^9
- Array can contain positive, negative, or zero values

## Key Concepts

- **Array Traversal:** Visiting each element exactly once
- **Accumulation:** Adding each element to a running total
- **Linear Processing:** O(n) time complexity for single pass
- **Memory Efficiency:** O(1) space complexity needed

---

## Approach 1: Iterative Solution (Recommended)

### Algorithm / Intuition

The most straightforward and efficient approach:
1. **Initialize a sum variable to 0**
2. **Iterate through each element** in the array
3. **Add each element to the sum**
4. **Return the final sum**

### Core Logic:
- Use a simple for loop to traverse the array
- Maintain a running sum by adding each element
- No need for extra space beyond the sum variable
- Single pass through the array ensures O(n) efficiency

### Step-by-Step Algorithm:
1. Initialize `sum = 0` to store the total
2. Loop from `i = 0` to `i = n-1`
3. For each index i, add `arr[i]` to sum: `sum += arr[i]`
4. Return the final sum value

### DryRun Example (Iterative):

Input: n = 5, arr = [1, 2, 3, 4, 5]

```
Initial: sum = 0, n = 5

i = 0: sum = 0 + arr[0] = 0 + 1 = 1
i = 1: sum = 1 + arr[1] = 1 + 2 = 3
i = 2: sum = 3 + arr[2] = 3 + 3 = 6
i = 3: sum = 6 + arr[3] = 6 + 4 = 10
i = 4: sum = 10 + arr[4] = 10 + 5 = 15

Final: sum = 15
Result: 15
```

### Iterative Code Solutions:

#### Java

```java
class Solution {
    public int sum(int arr[], int n) {
        // Initialize sum variable to store the total
        int sum = 0;
        
        // Iterate through each element in the array
        for (int i = 0; i < n; i++) {
            // Add current element to the running sum
            sum += arr[i];
        }
        
        // Return the final sum of all elements
        return sum;
    }
}
```

#### JavaScript

```javascript
class Solution {
    sum(arr, n) {
        // Initialize sum variable to store the total
        let sum = 0;
        
        // Iterate through each element in the array
        for (let i = 0; i < n; i++) {
            // Add current element to the running sum
            sum += arr[i];
        }
        
        // Return the final sum of all elements
        return sum;
    }
}
```

#### Python

```python
class Solution:
    def sum(self, arr, n):
        # Initialize sum variable to store the total
        sum = 0
        
        # Iterate through each element using range(n)
        for i in range(n):
            # Add current element to the running sum
            sum += arr[i]
        
        # Return the final sum of all elements
        return sum
```

### Iterative Complexity:
- **Time Complexity:** O(n) - visit each element exactly once
- **Space Complexity:** O(1) - only use constant extra space

---

## Approach 2: Recursive Solution

### Algorithm / Intuition

The recursive approach breaks down the problem:
1. **Base case:** If array is empty (n = 0), return 0
2. **Recursive case:** Return first element + sum of remaining elements
3. **Reduce the problem size** with each recursive call

### Core Logic:
- Base case handles when no elements are left to sum
- Each recursive call processes one element and reduces array size
- The recursion naturally accumulates the sum through return values

### Mathematical Representation:
```
sum(arr, n) = arr[0] + sum(arr[1...n-1], n-1)
sum(arr, 0) = 0 (base case)
```

### Step-by-Step Algorithm:
1. **Base case:** If n = 0, return 0
2. **Recursive case:** Return `arr[0] + sum(arr+1, n-1)`
3. Each call reduces the problem by one element
4. Stack unwinds to accumulate the final sum

### DryRun Example (Recursive):

Input: n = 3, arr = [2, 1, 3]

```
Call 1: sum([2,1,3], 3)
  n = 3 ≠ 0, so return 2 + sum([1,3], 2)
  
  Call 2: sum([1,3], 2)
    n = 2 ≠ 0, so return 1 + sum([3], 1)
    
    Call 3: sum([3], 1)
      n = 1 ≠ 0, so return 3 + sum([], 0)
      
      Call 4: sum([], 0)
        n = 0, return 0 (base case)
      
      Return: 3 + 0 = 3
    Return: 1 + 3 = 4
  Return: 2 + 4 = 6

Final Result: 6
```

### Recursive Code Solutions:

#### Java

```java
class Solution {
    public int sum(int arr[], int n) {
        // Base case: if no elements left, sum is 0
        if (n == 0) return 0;
        
        // Recursive case: current element + sum of remaining elements
        // arr[n-1] is the last element, reduce problem size by 1
        return arr[n-1] + sum(arr, n-1);
    }
}

// Alternative implementation using index
class Solution {
    public int sum(int arr[], int n) {
        // Start recursion from index 0
        return sumHelper(arr, 0, n);
    }
    
    private int sumHelper(int arr[], int index, int n) {
        // Base case: if index reaches array size, return 0
        if (index == n) return 0;
        
        // Recursive case: current element + sum from next index
        return arr[index] + sumHelper(arr, index + 1, n);
    }
}
```

#### JavaScript

```javascript
class Solution {
    sum(arr, n) {
        // Base case: if no elements left, sum is 0
        if (n == 0) return 0;
        
        // Recursive case: last element + sum of remaining elements
        // arr[n-1] is the last element, reduce problem size by 1
        return arr[n-1] + this.sum(arr, n-1);
    }
}

// Alternative implementation using index
class Solution {
    sum(arr, n) {
        // Start recursion from index 0
        return this.sumHelper(arr, 0, n);
    }
    
    sumHelper(arr, index, n) {
        // Base case: if index reaches array size, return 0
        if (index == n) return 0;
        
        // Recursive case: current element + sum from next index
        return arr[index] + this.sumHelper(arr, index + 1, n);
    }
}
```

#### Python

```python
class Solution:
    def sum(self, arr, n):
        # Base case: if no elements left, sum is 0
        if n == 0:
            return 0
        
        # Recursive case: last element + sum of remaining elements
        # arr[n-1] is the last element, reduce problem size by 1
        return arr[n-1] + self.sum(arr, n-1)

# Alternative implementation using index
class Solution:
    def sum(self, arr, n):
        # Start recursion from index 0
        return self.sum_helper(arr, 0, n)
    
    def sum_helper(self, arr, index, n):
        # Base case: if index reaches array size, return 0
        if index == n:
            return 0
        
        # Recursive case: current element + sum from next index
        return arr[index] + self.sum_helper(arr, index + 1, n)
```

### Recursive Complexity:
- **Time Complexity:** O(n) - each element processed once
- **Space Complexity:** O(n) - recursion stack depth equals array size

---

## Approach 3: Built-in Functions (Language Specific)

### Alternative Solutions Using Built-in Methods:

#### Java (Using Streams)

```java
import java.util.Arrays;

class Solution {
    public int sum(int arr[], int n) {
        // Use Java 8 Streams to sum array elements
        return Arrays.stream(arr, 0, n).sum();
    }
}
```

#### JavaScript (Using reduce)

```javascript
class Solution {
    sum(arr, n) {
        // Use array slice and reduce to sum elements
        return arr.slice(0, n).reduce((sum, current) => sum + current, 0);
    }
}
```

#### Python (Using built-in sum)

```python
class Solution:
    def sum(self, arr, n):
        # Use Python's built-in sum function with slice
        return sum(arr[:n])
```

---

## Complexity Analysis Summary

| Approach              | Time Complexity | Space Complexity | Recursion Stack | Best For              |
|-----------------------|-----------------|------------------|-----------------|-----------------------|
| Iterative Loop        | O(n)            | O(1)             | No              | All cases (recommended) |
| Recursive             | O(n)            | O(n)             | Yes             | Learning recursion     |
| Built-in Functions    | O(n)            | O(1)*            | No              | Quick prototyping      |

*Built-in functions may use additional space internally

---

## Edge Cases to Consider

1. **Empty Array:** n = 0, should return 0
2. **Single Element:** n = 1, return that element
3. **All Negative Numbers:** Handle negative sums correctly
4. **All Zeros:** Should return 0
5. **Large Numbers:** Watch for integer overflow
6. **Mixed Signs:** Positive and negative numbers

## Detailed Edge Case Analysis

```java
// Edge cases with step-by-step analysis
Input: n = 0, arr = []        → Output: 0 (empty array)
Input: n = 1, arr = [5]       → Output: 5 (single element)
Input: n = 3, arr = [-1,-2,-3] → Output: -6 (all negative)
Input: n = 4, arr = [0,0,0,0] → Output: 0 (all zeros)
Input: n = 5, arr = [1,-1,2,-2,0] → Output: 0 (mixed signs)
```

---

## Test Cases

```java
public void testArraySum() {
    Solution sol = new Solution();
    
    // Edge cases
    assert sol.sum(new int[]{}, 0) == 0;              // Empty array
    assert sol.sum(new int[]{5}, 1) == 5;             // Single element
    
    // Positive numbers
    assert sol.sum(new int[]{1,2,3,4,5}, 5) == 15;    // All positive
    assert sol.sum(new int[]{10,20,30}, 3) == 60;     // Larger positive
    
    // Negative numbers
    assert sol.sum(new int[]{-1,-2,-3}, 3) == -6;     // All negative
    assert sol.sum(new int[]{-5,-10}, 2) == -15;      // Negative sum
    
    // Mixed numbers
    assert sol.sum(new int[]{1,-1,2,-2}, 4) == 0;     // Mixed to zero
    assert sol.sum(new int[]{-1,2,-3,4}, 4) == 2;     // Mixed positive
    
    // Special cases
    assert sol.sum(new int[]{0,0,0}, 3) == 0;         // All zeros
    assert sol.sum(new int[]{100}, 1) == 100;         // Large single
}
```

---

## Step-by-Step Visualization

### Iterative Approach: arr = [1, -2, 3, 0, 4]

```
Initial: sum = 0, n = 5

Step 1: i = 0, sum = 0 + 1 = 1,    arr = [1, -2, 3, 0, 4]
                                          ↑
Step 2: i = 1, sum = 1 + (-2) = -1, arr = [1, -2, 3, 0, 4]
                                              ↑
Step 3: i = 2, sum = -1 + 3 = 2,   arr = [1, -2, 3, 0, 4]
                                                  ↑
Step 4: i = 3, sum = 2 + 0 = 2,    arr = [1, -2, 3, 0, 4]
                                                     ↑
Step 5: i = 4, sum = 2 + 4 = 6,    arr = [1, -2, 3, 0, 4]
                                                        ↑

Final Result: sum = 6
```

### Recursive Approach: arr = [2, 3, 1]

```
Call Stack Visualization:

sum([2,3,1], 3)
├── return 2 + sum([3,1], 2)
    ├── return 3 + sum([1], 1)
        ├── return 1 + sum([], 0)
            └── return 0 (base case)
        └── return 1 + 0 = 1
    └── return 3 + 1 = 4
└── return 2 + 4 = 6

Final Result: 6
```

---

## Common Mistakes to Avoid

1. **Integer Overflow:** For very large arrays or values, use long instead of int
2. **Wrong Loop Bounds:** Ensure loop runs from 0 to n-1, not n
3. **Uninitialized Sum:** Always initialize sum to 0
4. **Stack Overflow:** Recursive approach can cause stack overflow for large arrays
5. **Array Access:** Ensure array indices are within bounds

---

## Optimization Techniques

### 1. Early Termination (if applicable)

```java
// Not applicable for sum, but useful concept for other problems
public int sum(int arr[], int n) {
    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += arr[i];
        // No early termination possible for sum
    }
    return sum;
}
```

### 2. Overflow Protection

```java
public long sumSafe(int arr[], int n) {
    // Use long to prevent integer overflow
    long sum = 0;
    for (int i = 0; i < n; i++) {
        sum += arr[i];
    }
    return sum;
}
```

### 3. Enhanced For Loop (Java)

```java
public int sum(int arr[], int n) {
    int sum = 0;
    // Enhanced for loop for cleaner code (when n = arr.length)
    for (int element : arr) {
        sum += element;
    }
    return sum;
}
```

---

## Performance Analysis

### Time Complexity Breakdown:
```
Single loop through n elements: O(n)
Each addition operation: O(1)
Total: O(n)

For n = 1,000,000:
- Operations: ~1,000,000
- Time: Very fast (linear growth)
```

### Space Complexity Analysis:
```
Iterative: O(1) - only sum variable
Recursive: O(n) - call stack grows with input size
```

---

## Mathematical Properties

### 1. Arithmetic Sum
- **Commutative:** a + b = b + a (order doesn't matter)
- **Associative:** (a + b) + c = a + (b + c) (grouping doesn't matter)
- **Identity:** a + 0 = a (zero doesn't change sum)

### 2. Sum Properties
- **Empty Set:** Sum of empty array is 0
- **Single Element:** Sum equals that element
- **Negative Numbers:** Can result in negative sums

### 3. Overflow Considerations
- **Integer Limits:** Watch for overflow with large numbers
- **Solution:** Use bigger data types (long, BigInteger)

---

## Real-World Applications

1. **Statistics:** Calculating totals, averages, and means
2. **Financial Systems:** Computing account balances and transactions
3. **Data Analytics:** Aggregating metrics and KPIs
4. **Game Development:** Scoring systems and point calculations
5. **Scientific Computing:** Numerical analysis and simulations
6. **Inventory Management:** Stock counting and valuation

---

## Related Problems

1. **Array Average:** Sum divided by count
2. **Maximum Subarray Sum:** Kadane's algorithm
3. **Two Sum:** Find pair that sums to target
4. **Subarray Sum Equals K:** Count subarrays with specific sum
5. **Running Sum:** Cumulative sum at each position
6. **Product of Array:** Multiply instead of add

---

## Follow-up Questions

1. How would you handle integer overflow for very large sums?
2. Can you modify this to find the sum of even/odd positioned elements?
3. How would you implement this for a 2D array?
4. What if you needed to sum only elements meeting certain criteria?
5. How would you parallelize this for massive arrays?

---

## Advanced Topics

### 1. Parallel Processing

```java
import java.util.Arrays;

public int parallelSum(int arr[], int n) {
    // Use parallel streams for large arrays
    return Arrays.stream(arr, 0, n).parallel().sum();
}
```

### 2. SIMD Operations
- **Vectorization:** Process multiple elements simultaneously
- **CPU Instructions:** Utilize special CPU instructions for arrays
- **Performance:** Can significantly speed up for large arrays

### 3. Memory Optimization
- **Cache Efficiency:** Sequential access pattern is cache-friendly
- **Memory Layout:** Array elements stored contiguously in memory
- **Prefetching:** CPU can predict and preload next elements

---

## Interview Tips

### What Interviewers Look For:
1. **Correct Implementation:** Working solution with proper edge cases
2. **Code Quality:** Clean, readable, and well-commented code
3. **Complexity Analysis:** Understanding of time and space complexity
4. **Alternative Approaches:** Mentioning recursive vs iterative solutions
5. **Edge Case Handling:** Discussing empty arrays, overflow, etc.

### Common Interview Questions:
1. "What's the time complexity and why?"
2. "How would you handle integer overflow?"
3. "Can you implement this recursively?"
4. "What are the trade-offs between approaches?"
5. "How would you test this function?"

---

## Summary

The array sum problem demonstrates:

- **Fundamental array operations** and iteration patterns
- **Basic algorithm design** with clear input/output relationships
- **Multiple implementation approaches** (iterative vs recursive)
- **Complexity analysis** and optimization considerations

**Key Approaches:**
1. **Iterative:** O(n) time, O(1) space - Recommended for production
2. **Recursive:** O(n) time, O(n) space - Good for learning concepts
3. **Built-in Functions:** Language-specific optimized implementations

**Best Practices:**
- Use **iterative approach** for efficiency and simplicity
- Handle **edge cases** like empty arrays
- Consider **integer overflow** for large inputs
- Write **clean, readable code** with meaningful variable names

This problem serves as an excellent introduction to array processing and forms the foundation for more complex array algorithms. The simplicity of the problem allows focus on implementation quality, code organization, and algorithmic thinking.