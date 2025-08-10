# Check if the Array is Sorted

### Difficulty: `Easy`

### **Practice Links:**
- **[GeeksforGeeks - Check if an Array is Sorted](https://www.geeksforgeeks.org/problems/check-if-an-array-is-sorted0701/1)**
- **[TakeUForward - Check if an Array is Sorted](https://takeuforward.org/data-structure/check-if-an-array-is-sorted/)**

## Problem Statement

Given an array **arr** of size **n**, the task is to check if the given array is sorted in **(ascending / increasing / non-decreasing)** order. If the array is sorted then return **True**, else return **False**.

An array is considered sorted in ascending order if:
- **Every element** in the array is **smaller than or equal** to its next element
- **arr[i] ≤ arr[i+1]** for all valid indices i

## Mathematical Definition

An array arr[0, 1, 2, ..., n-1] is sorted in ascending order if:
- **arr[0] ≤ arr[1] ≤ arr[2] ≤ ... ≤ arr[n-1]**
- **For all i (0 ≤ i < n-1): arr[i] ≤ arr[i+1]**

## Examples

```txt
Example 1:
Input:  n = 5, arr = [1, 2, 3, 4, 5]
Output: True
Explanation: The given array is sorted i.e Every element in the array is smaller than or 
equals to its next values, So the answer is True.

Example 2:
Input:  n = 5, arr = [5, 4, 6, 7, 8]
Output: False
Explanation: The given array is Not sorted i.e Every element in the array is not smaller than 
or equal to its next values. So the answer is False. Here element 5 is not smaller than or 
equal to its future elements.

Example 3:
Input:  n = 4, arr = [1, 1, 2, 2]
Output: True
Explanation: Array with duplicate elements can still be sorted (non-decreasing).

Example 4:
Input:  n = 1, arr = [5]
Output: True
Explanation: Single element array is always sorted.

Example 5:
Input:  n = 3, arr = [3, 2, 1]
Output: False
Explanation: Array is sorted in descending order, not ascending.
```

## Constraints

- 1 ≤ n ≤ 10^6
- -10^9 ≤ arr[i] ≤ 10^9
- Array can contain positive, negative, or zero values
- Duplicate elements are allowed

## Key Concepts

- **Sorted Array Property:** Each element ≤ next element
- **Early Termination:** Stop as soon as violation is found
- **Adjacent Element Comparison:** Compare consecutive elements
<!-- - **Non-decreasing Order:** Allows equal elements (≤ instead of <) -->

---

## Approach 1: Brute Force Solution

### Algorithm / Intuition

The brute force approach checks all possible pairs to ensure sorting property:
1. **For each element** at position i
2. **Check all elements** from position i+1 to n-1
3. **Ensure all subsequent elements** are greater than or equal to current element
4. **If any violation found**, return false

### Core Logic:
- Nested loops to compare each element with all subsequent elements
- For element at index i, check arr[i] ≤ arr[j] for all j > i
- If any arr[i] > arr[j] where i < j, array is not sorted
- More comparisons than necessary, but conceptually straightforward

### Step-by-Step Algorithm:
1. For `i = 0` to `i = n-2`
2. For `j = i+1` to `j = n-1`
3. If `arr[i] > arr[j]`, return false
4. If all comparisons pass, return true

### DryRun Example (Brute Force):

Input: n = 4, arr = [1, 3, 2, 4]

```
Initial: n = 4, checking all pairs

i = 0, arr[0] = 1:
  j = 1: arr[0] = 1 ≤ arr[1] = 3 ✓
  j = 2: arr[0] = 1 ≤ arr[2] = 2 ✓  
  j = 3: arr[0] = 1 ≤ arr[3] = 4 ✓

i = 1, arr[1] = 3:
  j = 2: arr[1] = 3 > arr[2] = 2 ✗ (violation found!)
  
Return False immediately
Array is not sorted because 3 > 2
```

### Brute Force Code Solutions:

#### Java

```java
class Solution {
    boolean arraySortedOrNot(int[] arr, int n) {
        // Check all possible pairs to ensure sorting property
        for (int i = 0; i < n - 1; i++) {
            // For each element, check all subsequent elements
            for (int j = i + 1; j < n; j++) {
                // If any element is greater than a later element, not sorted
                if (arr[i] > arr[j]) {
                    return false;
                }
            }
        }
        
        // All pairs satisfied the sorting condition
        return true;
    }
}
```

#### JavaScript

```javascript
class Solution {
    arraySortedOrNot(arr, n) {
        // Check all possible pairs to ensure sorting property
        for (let i = 0; i < n - 1; i++) {
            // For each element, check all subsequent elements
            for (let j = i + 1; j < n; j++) {
                // If any element is greater than a later element, not sorted
                if (arr[i] > arr[j]) {
                    return false;
                }
            }
        }
        
        // All pairs satisfied the sorting condition
        return true;
    }
}
```

#### Python

```python
class Solution:
    def arraySortedOrNot(self, arr, n):
        # Check all possible pairs to ensure sorting property
        for i in range(n - 1):
            # For each element, check all subsequent elements
            for j in range(i + 1, n):
                # If any element is greater than a later element, not sorted
                if arr[i] > arr[j]:
                    return False
        
        # All pairs satisfied the sorting condition
        return True
```

### Brute Force Complexity:
- **Time Complexity:** O(n²) - nested loops checking all pairs
- **Space Complexity:** O(1) - constant extra space

---

## Approach 2: Optimal Solution (Recommended)

### Algorithm / Intuition

The optimal approach leverages the fact that **we only need to check adjacent elements**:
1. **If array is sorted**, then every adjacent pair satisfies arr[i] ≤ arr[i+1]
2. **If any adjacent pair violates** this condition, array is not sorted
3. **Single pass** through the array is sufficient
4. **Early termination** as soon as violation is found

### Core Logic:
- Compare each element with its immediate next element
- If arr[i] > arr[i+1] for any i, return false immediately
- If all adjacent pairs are in order, array is sorted
- Much more efficient than checking all pairs

### Mathematical Reasoning:
```
If arr[i] ≤ arr[i+1] for all i, then:
arr[0] ≤ arr[1] ≤ arr[2] ≤ ... ≤ arr[n-1]

This is the definition of a sorted array!
No need to check non-adjacent pairs.
```

### Step-by-Step Algorithm:
1. Loop from `i = 1` to `i = n-1`
2. For each i, check if `arr[i] < arr[i-1]`
3. If condition is true, return false immediately
4. If loop completes without violation, return true

### DryRun Example (Optimal):

Input: n = 5, arr = [1, 2, 3, 4, 5]

```
Initial: n = 5, checking adjacent elements

i = 1: arr[1] = 2, arr[0] = 1
       2 < 1? No → continue

i = 2: arr[2] = 3, arr[1] = 2  
       3 < 2? No → continue

i = 3: arr[3] = 4, arr[2] = 3
       4 < 3? No → continue

i = 4: arr[4] = 5, arr[3] = 4
       5 < 4? No → continue

Loop completed without violations
Return True (array is sorted)
```

### Optimal Code Solutions:

#### Java

```java
class Solution {
    boolean arraySortedOrNot(int[] arr, int n) {
        // Check adjacent elements for sorting violation
        for (int i = 1; i < n; i++) {
            // If current element is smaller than previous element
            // then array is not sorted in ascending order
            if (arr[i] < arr[i - 1]) {
                return false;
            }
        }
        
        // No violations found, array is sorted
        return true;
    }
}
```

#### JavaScript

```javascript
class Solution {
    arraySortedOrNot(arr, n) {
        // Check adjacent elements for sorting violation
        for (let i = 1; i < n; i++) {
            // If current element is smaller than previous element
            // then array is not sorted in ascending order
            if (arr[i] < arr[i - 1]) {
                return false;
            }
        }
        
        // No violations found, array is sorted
        return true;
    }
}
```

#### Python

```python
class Solution:
    def arraySortedOrNot(self, arr, n):
        # Check adjacent elements for sorting violation using range(1, n)
        for i in range(1, n):
            # If current element is smaller than previous element
            # then array is not sorted in ascending order
            if arr[i] < arr[i - 1]:
                return False
        
        # No violations found, array is sorted
        return True
```

### Optimal Complexity:
- **Time Complexity:** O(n) - single pass through array
- **Space Complexity:** O(1) - constant extra space

---

## Approach 3: Recursive Solution

### Algorithm / Intuition

Recursive approach breaks the problem into smaller subproblems:
1. **Base case:** Array of size 1 or 2 can be checked directly
2. **Recursive case:** Check if last two elements are in order AND rest of array is sorted
3. **Divide and conquer** approach to the sorting check

### Recursive Code Solutions:

#### Java

```java
class Solution {
    boolean arraySortedOrNot(int[] arr, int n) {
        // Start recursive check from the beginning
        return isSortedRecursive(arr, n, 0);
    }
    
    private boolean isSortedRecursive(int[] arr, int n, int index) {
        // Base case: if we've checked all adjacent pairs
        if (index == n - 1) {
            return true;
        }
        
        // Check current adjacent pair and recurse for rest
        return arr[index] <= arr[index + 1] && 
               isSortedRecursive(arr, n, index + 1);
    }
}

// Alternative recursive implementation
class Solution {
    boolean arraySortedOrNot(int[] arr, int n) {
        // Base case: single element or empty array is sorted
        if (n <= 1) return true;
        
        // Check first two elements and recurse for rest
        return arr[0] <= arr[1] && 
               arraySortedOrNot(Arrays.copyOfRange(arr, 1, n), n - 1);
    }
}
```

#### JavaScript

```javascript
class Solution {
    arraySortedOrNot(arr, n) {
        // Start recursive check from the beginning
        return this.isSortedRecursive(arr, n, 0);
    }
    
    isSortedRecursive(arr, n, index) {
        // Base case: if we've checked all adjacent pairs
        if (index == n - 1) {
            return true;
        }
        
        // Check current adjacent pair and recurse for rest
        return arr[index] <= arr[index + 1] && 
               this.isSortedRecursive(arr, n, index + 1);
    }
}
```

#### Python

```python
class Solution:
    def arraySortedOrNot(self, arr, n):
        # Start recursive check from the beginning
        return self.is_sorted_recursive(arr, n, 0)
    
    def is_sorted_recursive(self, arr, n, index):
        # Base case: if we've checked all adjacent pairs
        if index == n - 1:
            return True
        
        # Check current adjacent pair and recurse for rest
        return (arr[index] <= arr[index + 1] and 
                self.is_sorted_recursive(arr, n, index + 1))
```

### Recursive Complexity:
- **Time Complexity:** O(n) - each element checked once
- **Space Complexity:** O(n) - recursion stack depth

---

## Complexity Analysis Summary

| Approach              | Time Complexity | Space Complexity | Early Termination | Best For              |
|-----------------------|-----------------|------------------|-------------------|-----------------------|
| Brute Force           | O(n²)           | O(1)             | Yes               | Understanding concept |
| Optimal (Adjacent)    | O(n)            | O(1)             | Yes               | All practical cases   |
| Recursive             | O(n)            | O(n)             | Yes               | Academic interest     |

---

## Edge Cases to Consider

1. **Empty Array:** n = 0, considered sorted by definition
2. **Single Element:** n = 1, always sorted
3. **Two Elements:** Direct comparison sufficient
4. **All Same Elements:** [3,3,3,3] is sorted (non-decreasing)
5. **Reverse Sorted:** [5,4,3,2,1] should return false
6. **Nearly Sorted:** Only one element out of place

## Detailed Edge Case Analysis

```java
// Edge cases with step-by-step analysis
Input: n = 0, arr = []           → Output: True (empty array is sorted)
Input: n = 1, arr = [5]          → Output: True (single element)
Input: n = 2, arr = [3, 5]       → Output: True (ascending pair)
Input: n = 2, arr = [5, 3]       → Output: False (descending pair)
Input: n = 4, arr = [2, 2, 2, 2] → Output: True (all equal elements)
Input: n = 5, arr = [5, 4, 3, 2, 1] → Output: False (reverse sorted)
Input: n = 5, arr = [1, 2, 4, 3, 5] → Output: False (one out of place)
```

---

## Test Cases

```java
public void testArraySorted() {
    Solution sol = new Solution();
    
    // Edge cases
    assert sol.arraySortedOrNot(new int[]{}, 0) == true;              // Empty array
    assert sol.arraySortedOrNot(new int[]{5}, 1) == true;             // Single element
    
    // Two elements
    assert sol.arraySortedOrNot(new int[]{1, 2}, 2) == true;          // Ascending pair
    assert sol.arraySortedOrNot(new int[]{2, 1}, 2) == false;         // Descending pair
    assert sol.arraySortedOrNot(new int[]{3, 3}, 2) == true;          // Equal pair
    
    // Sorted arrays
    assert sol.arraySortedOrNot(new int[]{1,2,3,4,5}, 5) == true;     // Strictly increasing
    assert sol.arraySortedOrNot(new int[]{1,1,2,2,3}, 5) == true;     // Non-decreasing
    assert sol.arraySortedOrNot(new int[]{-3,-1,0,2,5}, 5) == true;   // With negatives
    
    // Unsorted arrays
    assert sol.arraySortedOrNot(new int[]{5,4,6,7,8}, 5) == false;    // Early violation
    assert sol.arraySortedOrNot(new int[]{1,2,1,3,4}, 5) == false;    // Middle violation
    assert sol.arraySortedOrNot(new int[]{1,2,3,2,5}, 5) == false;    // Late violation
    
    // Special cases
    assert sol.arraySortedOrNot(new int[]{5,4,3,2,1}, 5) == false;    // Reverse sorted
    assert sol.arraySortedOrNot(new int[]{0,0,0,0}, 4) == true;       // All zeros
    assert sol.arraySortedOrNot(new int[]{-5,-5,-5}, 3) == true;      // All same negative
}
```

---

## Step-by-Step Visualization

### Optimal Approach: arr = [5, 4, 6, 7, 8]

```
Initial: n = 5, checking adjacent pairs

Step 1: i = 1
        Compare arr[1] = 4 with arr[0] = 5
        4 < 5? Yes → Violation found!
        Array: [5, 4, 6, 7, 8]
                ↑  ↑
                5 > 4 (not sorted)

Return False immediately
No need to check remaining elements
```

### Optimal Approach: arr = [1, 2, 3, 4, 5]

```
Initial: n = 5, checking adjacent pairs

Step 1: i = 1
        Compare arr[1] = 2 with arr[0] = 1
        2 < 1? No → continue
        Array: [1, 2, 3, 4, 5]
                ↑  ↑ (1 ≤ 2 ✓)

Step 2: i = 2
        Compare arr[2] = 3 with arr[1] = 2
        3 < 2? No → continue
        Array: [1, 2, 3, 4, 5]
                   ↑  ↑ (2 ≤ 3 ✓)

Step 3: i = 3
        Compare arr[3] = 4 with arr[2] = 3
        4 < 3? No → continue
        Array: [1, 2, 3, 4, 5]
                      ↑  ↑ (3 ≤ 4 ✓)

Step 4: i = 4
        Compare arr[4] = 5 with arr[3] = 4
        5 < 4? No → continue
        Array: [1, 2, 3, 4, 5]
                         ↑  ↑ (4 ≤ 5 ✓)

All checks passed → Return True
```

---

## Mathematical Properties

### 1. Sorting Definition
- **Ascending Order:** a₁ ≤ a₂ ≤ a₃ ≤ ... ≤ aₙ
- **Strictly Increasing:** a₁ < a₂ < a₃ < ... < aₙ  
- **Non-decreasing:** Allows equal elements (what we check)

### 2. Transitivity Property
- **If a ≤ b and b ≤ c, then a ≤ c**
- **Adjacent checks are sufficient** for full array verification
- **No need to check non-adjacent pairs**

### 3. Array Properties
- **Empty array:** Considered sorted by convention
- **Single element:** Always sorted
- **Duplicate elements:** Can exist in sorted array

---

## Common Mistakes to Avoid

1. **Wrong Comparison:** Using `>` instead of `<` in condition
2. **Index Bounds:** Starting loop from 0 instead of 1
3. **Strict vs Non-strict:** Forgetting that equal elements are allowed
4. **Early Return:** Not returning false immediately upon finding violation
5. **Edge Cases:** Not handling empty arrays or single elements

### Common Error Examples:

```java
// Wrong: Checking arr[i] > arr[i+1] causes index out of bounds
for (int i = 0; i < n; i++) {
    if (arr[i] > arr[i + 1]) return false; // Error when i = n-1
}

// Wrong: Using strict inequality
for (int i = 1; i < n; i++) {
    if (arr[i] <= arr[i - 1]) return false; // Fails for [1,1,2]
}

// Correct: Use < for the check
for (int i = 1; i < n; i++) {
    if (arr[i] < arr[i - 1]) return false;
}
```

---

## Optimization Techniques

### 1. Early Termination (Already Implemented)

```java
// The optimal solution already uses early termination
for (int i = 1; i < n; i++) {
    if (arr[i] < arr[i - 1]) {
        return false; // Exit immediately on first violation
    }
}
```

### 2. Compiler Optimizations

```java
// Modern compilers can optimize simple loops
// No manual optimization needed for this problem
public boolean arraySortedOrNot(int[] arr, int n) {
    for (int i = 1; i < n; i++) {
        if (arr[i] < arr[i - 1]) return false;
    }
    return true;
}
```

### 3. SIMD-Friendly Implementation

```java
// For very large arrays, consider unrolling
public boolean arraySortedOrNotUnrolled(int[] arr, int n) {
    int i = 1;
    
    // Process 4 comparisons at a time
    for (; i < n - 3; i += 4) {
        if (arr[i] < arr[i-1] || arr[i+1] < arr[i] || 
            arr[i+2] < arr[i+1] || arr[i+3] < arr[i+2]) {
            return false;
        }
    }
    
    // Handle remaining elements
    for (; i < n; i++) {
        if (arr[i] < arr[i-1]) return false;
    }
    
    return true;
}
```

---

## Performance Analysis

### Time Complexity Breakdown:
```
Best Case: O(1) - First two elements out of order
Average Case: O(n) - Need to check most/all elements  
Worst Case: O(n) - Array is sorted, check all elements

For n = 1,000,000:
- Best case: 1 comparison
- Worst case: ~1,000,000 comparisons
- Very efficient due to early termination
```

### Cache Performance:
```
Sequential Access Pattern:
- Excellent cache locality
- CPU prefetching works well
- Memory bandwidth efficiently utilized
```

---

## Real-World Applications

1. **Data Validation:** Verifying input data is properly ordered
2. **Database Systems:** Checking if columns are sorted for optimization
3. **Algorithm Preprocessing:** Many algorithms require sorted input
4. **Quality Assurance:** Validating sorting algorithm implementations  
5. **Data Analysis:** Verifying time-series data is chronologically ordered
6. **File Systems:** Checking directory listings are alphabetically sorted

---

## Related Problems

1. **Check if Array is Sorted and Rotated:** Modified version with rotation
2. **Find Unsorted Subarray:** Find the shortest subarray to sort
3. **Merge Sorted Arrays:** Assumes input arrays are sorted
4. **Binary Search:** Requires sorted array as prerequisite
5. **Sort Colors:** Sorting problem with specific constraints
6. **Remove Duplicates from Sorted Array:** Assumes sorted input

---

## Variations and Extensions

### 1. Check Descending Order

```java
public boolean isDescendingSorted(int[] arr, int n) {
    for (int i = 1; i < n; i++) {
        if (arr[i] > arr[i - 1]) {
            return false;
        }
    }
    return true;
}
```

### 2. Check Strictly Increasing

```java
public boolean isStrictlyIncreasing(int[] arr, int n) {
    for (int i = 1; i < n; i++) {
        if (arr[i] <= arr[i - 1]) {
            return false;
        }
    }
    return true;
}
```

### 3. Find First Unsorted Position

```java
public int findFirstUnsortedPosition(int[] arr, int n) {
    for (int i = 1; i < n; i++) {
        if (arr[i] < arr[i - 1]) {
            return i;
        }
    }
    return -1; // Array is sorted
}
```

### 4. Count Violations

```java
public int countSortingViolations(int[] arr, int n) {
    int count = 0;
    for (int i = 1; i < n; i++) {
        if (arr[i] < arr[i - 1]) {
            count++;
        }
    }
    return count;
}
```

---

## Follow-up Questions

1. How would you check if a 2D matrix is sorted row-wise and column-wise?
2. Can you modify this to work with custom comparators?
3. How would you handle very large arrays that don't fit in memory?
4. What if you needed to check sorting with a specific tolerance for floating-point numbers?
5. How would you parallelize this check for massive datasets?

---

## Advanced Topics

### 1. Generic Implementation

```java
public <T extends Comparable<T>> boolean isSorted(T[] arr, int n) {
    for (int i = 1; i < n; i++) {
        if (arr[i].compareTo(arr[i - 1]) < 0) {
            return false;
        }
    }
    return true;
}
```

### 2. Custom Comparator

```java
public boolean isSorted(int[] arr, int n, Comparator<Integer> comp) {
    for (int i = 1; i < n; i++) {
        if (comp.compare(arr[i], arr[i - 1]) < 0) {
            return false;
        }
    }
    return true;
}
```

### 3. Parallel Checking

```java
public boolean isSortedParallel(int[] arr, int n) {
    return IntStream.range(1, n)
                   .parallel()
                   .allMatch(i -> arr[i] >= arr[i - 1]);
}
```

---

## Interview Tips

### What Interviewers Look For:
1. **Efficient Solution:** O(n) time complexity with early termination
2. **Correct Logic:** Proper adjacent element comparison
3. **Edge Case Handling:** Empty arrays, single elements, duplicates
4. **Code Quality:** Clean, readable implementation
5. **Alternative Approaches:** Knowledge of brute force and optimal solutions

### Common Interview Questions:
1. "What's the most efficient way to check if an array is sorted?"
2. "How do you handle duplicate elements?"
3. "Can you implement this recursively?"
4. "What if we needed to check descending order instead?"
5. "How would you find the position of the first unsorted element?"

### Follow-up Challenges:
1. **Modify for descending order**
2. **Handle floating-point precision issues**
3. **Implement with custom comparator**
4. **Check if array is sorted and rotated**
5. **Find minimum swaps to make array sorted**

---

## Summary

The check if array is sorted problem demonstrates:

- **Fundamental array processing** and adjacent element comparison
- **Optimization through early termination** and avoiding unnecessary work
- **Mathematical properties** of sorted sequences
- **Edge case considerations** in algorithm design

**Key Approaches:**
1. **Brute Force:** O(n²) - Check all pairs (educational)
2. **Optimal:** O(n) - Check adjacent pairs only (recommended)
3. **Recursive:** O(n) time, O(n) space - Academic interest

**Best Practices:**
- Use **adjacent comparison** for O(n) efficiency
- Implement **early termination** for better average case
- Handle **edge cases** like empty arrays and single elements
- Consider **equal elements** (non-decreasing vs strictly increasing)

This problem serves as an excellent introduction to array analysis and demonstrates how understanding mathematical properties (transitivity of ordering) can lead to significant algorithmic improvements from O(n²) to O(n).