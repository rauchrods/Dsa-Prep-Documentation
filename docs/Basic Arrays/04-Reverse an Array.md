# Reverse an Array

### Difficulty: `Easy`

### **Practice Links:**
- **[GeeksforGeeks - Reverse an Array](https://www.geeksforgeeks.org/problems/reverse-an-array/1)**
- **[CodeChef - Array Reverse](https://www.codechef.com/practice/course/cpp/LPCPAS13B/problems/CPPPTR2)**
- **[TakeUForward - Reverse a Given Array](https://takeuforward.org/data-structure/reverse-a-given-array/)**

## Problem Statement

Given an array **arr** of **n** elements. The task is to **reverse the given array**. The reversal of array should be **in-place**.

**In-place reversal** means modifying the original array without using extra space for another array of the same size.

## Mathematical Definition

For an array arr[0, 1, 2, ..., n-1], the reverse should be:
- **arr[n-1, n-2, n-3, ..., 1, 0]**
- **Element at position i goes to position (n-1-i)**
- **First element becomes last, last becomes first**

## Examples

```txt
Example 1:
Input:  n = 5, arr = [1, 2, 3, 4, 5]
Output: [5, 4, 3, 2, 1]
Explanation: The reverse of the array [1,2,3,4,5] is [5,4,3,2,1]

Example 2:
Input:  n = 6, arr = [1, 2, 1, 5, 1]
Output: [1, 5, 1, 2, 1]
Explanation: The reverse of the array [1,2,1,5,1] is [1,5,1,2,1]

Example 3:
Input:  n = 3, arr = [1, 2]
Output: [2, 1]
Explanation: The reverse of the array [1,2] is [2,1]

Example 4:
Input:  n = 1, arr = [7]
Output: [7]
Explanation: Single element array remains the same when reversed

Example 5:
Input:  n = 4, arr = [10, 20, 30, 40]
Output: [40, 30, 20, 10]
Explanation: Elements are reversed in order
```

## Constraints

- 1 ≤ n ≤ 10^6
- -10^9 ≤ arr[i] ≤ 10^9
- Array can contain positive, negative, or zero values
- Duplicate elements are allowed
- Reversal should be in-place

## Key Concepts

- **In-place Algorithm:** Modify original array without extra space
- **Two-Pointer Technique:** Efficient approach using start and end pointers
- **Element Swapping:** Exchange values at symmetric positions
- **Array Indexing:** Understanding position mapping in reversal

---

## Approach 1: Brute Force Solution (Extra Space)

### Algorithm / Intuition

The brute force approach uses additional space to create the reversed array:
1. **Create a new array** of the same size
2. **Copy elements in reverse order** from original to new array
3. **Copy back** from new array to original array
4. **Two separate loops** for copying operations

### Core Logic:
- Use an auxiliary array to store reversed elements
- First loop: Copy arr[i] to reverse[n-1-i]  
- Second loop: Copy reverse[i] back to arr[i]
- Simple but uses O(n) extra space

### Step-by-Step Algorithm:
1. Create auxiliary array `reverse[]` of size n
2. For `i = 0` to `n-1`: set `reverse[n-1-i] = arr[i]`
3. For `i = 0` to `n-1`: set `arr[i] = reverse[i]`
4. Original array is now reversed

### DryRun Example (Brute Force):

Input: n = 5, arr = [1, 2, 3, 4, 5]

```
Initial: arr = [1, 2, 3, 4, 5], n = 5
Create: reverse = [0, 0, 0, 0, 0]

First Loop - Copy in reverse order:
i = 0: reverse[5-0-1] = reverse[4] = arr[0] = 1
       reverse = [0, 0, 0, 0, 1]

i = 1: reverse[5-1-1] = reverse[3] = arr[1] = 2  
       reverse = [0, 0, 0, 2, 1]

i = 2: reverse[5-2-1] = reverse[2] = arr[2] = 3
       reverse = [0, 0, 3, 2, 1]

i = 3: reverse[5-3-1] = reverse[1] = arr[3] = 4
       reverse = [0, 4, 3, 2, 1]

i = 4: reverse[5-4-1] = reverse[0] = arr[4] = 5
       reverse = [5, 4, 3, 2, 1]

Second Loop - Copy back to original:
i = 0: arr[0] = reverse[0] = 5 → arr = [5, 2, 3, 4, 5]
i = 1: arr[1] = reverse[1] = 4 → arr = [5, 4, 3, 4, 5]  
i = 2: arr[2] = reverse[2] = 3 → arr = [5, 4, 3, 4, 5]
i = 3: arr[3] = reverse[3] = 2 → arr = [5, 4, 3, 2, 5]
i = 4: arr[4] = reverse[4] = 1 → arr = [5, 4, 3, 2, 1]

Final: arr = [5, 4, 3, 2, 1]
```

### Brute Force Code Solutions:

#### Java

```java
class Solution {
    public void reverse(int[] arr, int n) {
        // Create auxiliary array to store reversed elements
        int[] reverse = new int[n];
        
        // First loop: Copy elements in reverse order to auxiliary array
        for (int i = 0; i < n; i++) {
            // Element at position i goes to position (n-1-i) in reverse array
            reverse[n - i - 1] = arr[i];
        }
        
        // Second loop: Copy reversed elements back to original array
        for (int i = 0; i < n; i++) {
            // Copy each element from auxiliary array back to original
            arr[i] = reverse[i];
        }
    }
}
```

#### JavaScript

```javascript
class Solution {
    reverse(arr, n) {
        // Create auxiliary array to store reversed elements
        let reverse = [];
        
        // First loop: Copy elements in reverse order to auxiliary array
        for (let i = 0; i < n; i++) {
            // Element at position i goes to position (n-1-i) in reverse array
            reverse[n - i - 1] = arr[i];
        }
        
        // Second loop: Copy reversed elements back to original array
        for (let i = 0; i < n; i++) {
            // Copy each element from auxiliary array back to original
            arr[i] = reverse[i];
        }
    }
}
```

#### Python

```python
class Solution:
    def reverse(self, arr, n):
        # Create auxiliary array with n zeros to store reversed elements
        reverse = [0] * n
        
        # First loop: Copy elements in reverse order to auxiliary array using range(0, n)
        for i in range(0, n):
            # Element at position i goes to position (n-1-i) in reverse array
            reverse[n - i - 1] = arr[i]
        
        # Second loop: Copy reversed elements back to original array using range(0, n)
        for i in range(0, n):
            # Copy each element from auxiliary array back to original
            arr[i] = reverse[i]
```

### Brute Force Complexity:
- **Time Complexity:** O(n) - two separate loops through the array
- **Space Complexity:** O(n) - auxiliary array of size n

---

## Approach 2: Optimal Solution (In-Place Two Pointers)

### Algorithm / Intuition

The optimal approach uses **two-pointer technique** for in-place reversal:
1. **Initialize two pointers:** left at start (0) and right at end (n-1)
2. **Swap elements** at left and right positions
3. **Move pointers inward:** increment left, decrement right
4. **Continue until pointers meet** in the middle

### Core Logic:
- Use two pointers moving towards each other
- Swap elements at symmetric positions
- No extra space needed beyond a temporary variable
- Efficient single-pass algorithm

### Mathematical Reasoning:
```
For array of size n:
Position mapping: arr[i] ↔ arr[n-1-i]

Examples:
n=5: 0↔4, 1↔3, 2↔2 (middle element stays)
n=6: 0↔5, 1↔4, 2↔3

Two pointers naturally handle this mapping!
```

### Step-by-Step Algorithm:
1. Initialize `left = 0` and `right = n-1`
2. While `left < right`:
   - Swap `arr[left]` and `arr[right]`
   - Increment `left++`
   - Decrement `right--`
3. Array is now reversed in-place

### DryRun Example (Optimal):

Input: n = 5, arr = [1, 2, 3, 4, 5]

```
Initial: arr = [1, 2, 3, 4, 5], left = 0, right = 4

Iteration 1: left = 0, right = 4
            arr[0] = 1, arr[4] = 5
            Swap: arr = [5, 2, 3, 4, 1]
            Update: left = 1, right = 3

Iteration 2: left = 1, right = 3  
            arr[1] = 2, arr[3] = 4
            Swap: arr = [5, 4, 3, 2, 1]
            Update: left = 2, right = 2

Iteration 3: left = 2, right = 2
            left < right? No (2 < 2 is false)
            Loop terminates

Final: arr = [5, 4, 3, 2, 1]
Middle element (3) naturally stays in correct position
```

### Optimal Code Solutions:

#### Java

```java
class Solution {
    public void reverse(int[] arr, int n) {
        // Initialize two pointers: left at start, right at end
        int l = 0, r = n - 1;
        
        // Continue swapping until pointers meet in the middle
        while (l < r) {
            // Store left element in temporary variable for swapping
            int temp = arr[l];
            
            // Swap: move right element to left position
            arr[l] = arr[r];
            
            // Complete swap: move temp (original left) to right position  
            arr[r] = temp;
            
            // Move pointers inward for next iteration
            l++;
            r--;
        }
    }
}
```

#### JavaScript

```javascript
class Solution {
    reverse(arr, n) {
        // Initialize two pointers: left at start, right at end
        let l = 0,
            r = n - 1;
            
        // Continue swapping until pointers meet in the middle
        while (l < r) {
            // Store left element in temporary variable for swapping
            let temp = arr[l];
            
            // Swap: move right element to left position
            arr[l] = arr[r];
            
            // Complete swap: move temp (original left) to right position
            arr[r] = temp;
            
            // Move pointers inward for next iteration
            l++;
            r--;
        }
    }
}
```

#### Python

```python
class Solution:
    def reverse(self, arr, n):
        # Initialize two pointers: left at start, right at end
        l = 0
        r = n - 1
        
        # Continue swapping until pointers meet in the middle
        while l < r:
            # Store left element in temporary variable for swapping
            temp = arr[l]
            
            # Swap: move right element to left position
            arr[l] = arr[r]
            
            # Complete swap: move temp (original left) to right position
            arr[r] = temp
            
            # Move pointers inward for next iteration
            l += 1
            r -= 1
```

### Optimal Complexity:
- **Time Complexity:** O(n/2) = O(n) - swap each pair once
- **Space Complexity:** O(1) - only use constant extra space

---

## Approach 3: Using Built-in Functions (Alternative)

### Language-Specific Reverse Methods:

#### Java (Using Collections)

```java
import java.util.*;

class Solution {
    public void reverse(int[] arr, int n) {
        // Convert array to list, reverse, then copy back
        List<Integer> list = new ArrayList<>();
        
        // Add elements to list
        for (int i = 0; i < n; i++) {
            list.add(arr[i]);
        }
        
        // Use Collections.reverse()
        Collections.reverse(list);
        
        // Copy back to array
        for (int i = 0; i < n; i++) {
            arr[i] = list.get(i);
        }
    }
}
```

#### JavaScript (Using Built-in reverse)

```javascript
class Solution {
    reverse(arr, n) {
        // JavaScript arrays have built-in reverse method
        // Note: This modifies the array in-place
        arr.reverse();
        
        // If only reversing first n elements of larger array
        // arr.splice(0, n, ...arr.slice(0, n).reverse());
    }
}
```

#### Python (Using Slicing)

```python
class Solution:
    def reverse(self, arr, n):
        # Python list slicing for reversal
        # arr[:] modifies original list in-place
        arr[:] = arr[:n][::-1]
        
        # Alternative: arr.reverse() but reverses entire list
        # For first n elements: arr[:n] = arr[:n][::-1]
```

---

## Approach 4: Recursive Solution

### Algorithm / Intuition

Recursive approach for array reversal:
1. **Base case:** When left >= right, stop recursion
2. **Recursive case:** Swap elements at current positions and recurse
3. **Reduce problem size** by moving pointers inward

### Recursive Code Solutions:

#### Java

```java
class Solution {
    public void reverse(int[] arr, int n) {
        // Start recursive reversal from ends of array
        reverseRecursive(arr, 0, n - 1);
    }
    
    private void reverseRecursive(int[] arr, int left, int right) {
        // Base case: if pointers meet or cross, stop recursion
        if (left >= right) {
            return;
        }
        
        // Swap elements at current positions
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        
        // Recurse with pointers moved inward
        reverseRecursive(arr, left + 1, right - 1);
    }
}
```

#### JavaScript

```javascript
class Solution {
    reverse(arr, n) {
        // Start recursive reversal from ends of array
        this.reverseRecursive(arr, 0, n - 1);
    }
    
    reverseRecursive(arr, left, right) {
        // Base case: if pointers meet or cross, stop recursion
        if (left >= right) {
            return;
        }
        
        // Swap elements at current positions
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        
        // Recurse with pointers moved inward
        this.reverseRecursive(arr, left + 1, right - 1);
    }
}
```

#### Python

```python
class Solution:
    def reverse(self, arr, n):
        # Start recursive reversal from ends of array
        self.reverse_recursive(arr, 0, n - 1)
    
    def reverse_recursive(self, arr, left, right):
        # Base case: if pointers meet or cross, stop recursion
        if left >= right:
            return
        
        # Swap elements at current positions
        temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        
        # Recurse with pointers moved inward
        self.reverse_recursive(arr, left + 1, right - 1)
```

### Recursive Complexity:
- **Time Complexity:** O(n/2) = O(n) - each element swapped once
- **Space Complexity:** O(n/2) = O(n) - recursion stack depth

---

## Complexity Analysis Summary

| Approach              | Time Complexity | Space Complexity | In-Place | Best For              |
|-----------------------|-----------------|------------------|----------|-----------------------|
| Brute Force (Extra)   | O(n)            | O(n)             | No       | Learning concept      |
| Two Pointers (Optimal)| O(n)            | O(1)             | Yes      | All practical cases   |
| Built-in Functions    | O(n)            | O(1)*            | Yes*     | Quick prototyping     |
| Recursive             | O(n)            | O(n)             | Yes      | Academic interest     |

*Depends on implementation

---

## Edge Cases to Consider

1. **Empty Array:** n = 0, no operation needed
2. **Single Element:** n = 1, array remains unchanged
3. **Two Elements:** Simple swap operation
4. **Odd Length:** Middle element stays in place
5. **Even Length:** All elements get swapped
6. **Large Arrays:** Memory and performance considerations

## Detailed Edge Case Analysis

```java
// Edge cases with step-by-step analysis
Input: n = 0, arr = []           → Output: [] (no change needed)
Input: n = 1, arr = [5]          → Output: [5] (single element)
Input: n = 2, arr = [3, 7]       → Output: [7, 3] (simple swap)
Input: n = 3, arr = [1, 2, 3]    → Output: [3, 2, 1] (middle stays)
Input: n = 4, arr = [1, 2, 3, 4] → Output: [4, 3, 2, 1] (all swap)
```

---

## Test Cases

```java
public void testArrayReverse() {
    Solution sol = new Solution();
    
    // Edge cases
    int[] arr1 = {};
    sol.reverse(arr1, 0);
    assert Arrays.equals(arr1, new int[]{});              // Empty array
    
    int[] arr2 = {5};
    sol.reverse(arr2, 1);
    assert Arrays.equals(arr2, new int[]{5});             // Single element
    
    // Two elements
    int[] arr3 = {3, 7};
    sol.reverse(arr3, 2);
    assert Arrays.equals(arr3, new int[]{7, 3});          // Simple swap
    
    // Odd length arrays
    int[] arr4 = {1, 2, 3};
    sol.reverse(arr4, 3);
    assert Arrays.equals(arr4, new int[]{3, 2, 1});       // Odd length
    
    int[] arr5 = {1, 2, 3, 4, 5};
    sol.reverse(arr5, 5);
    assert Arrays.equals(arr5, new int[]{5, 4, 3, 2, 1}); // Larger odd
    
    // Even length arrays
    int[] arr6 = {1, 2, 3, 4};
    sol.reverse(arr6, 4);
    assert Arrays.equals(arr6, new int[]{4, 3, 2, 1});    // Even length
    
    int[] arr7 = {10, 20, 30, 40, 50, 60};
    sol.reverse(arr7, 6);
    assert Arrays.equals(arr7, new int[]{60, 50, 40, 30, 20, 10}); // Larger even
    
    // Special values
    int[] arr8 = {0, -1, 2, -3};
    sol.reverse(arr8, 4);
    assert Arrays.equals(arr8, new int[]{-3, 2, -1, 0});  // Negative numbers
    
    int[] arr9 = {5, 5, 5, 5};
    sol.reverse(arr9, 4);
    assert Arrays.equals(arr9, new int[]{5, 5, 5, 5});    // All same elements
}
```

---

## Step-by-Step Visualization

### Optimal Two-Pointer Approach: arr = [1, 2, 3, 4, 5]

```
Initial State:
Array: [1, 2, 3, 4, 5]
        ↑           ↑
        l=0         r=4

Iteration 1:
Swap arr[0] ↔ arr[4]: 1 ↔ 5
Array: [5, 2, 3, 4, 1]
           ↑       ↑
           l=1     r=3

Iteration 2:  
Swap arr[1] ↔ arr[3]: 2 ↔ 4
Array: [5, 4, 3, 2, 1]
              ↑
              l=r=2

Iteration 3:
l=2, r=2 → l < r? No (2 < 2 is false)
Loop terminates

Final Result: [5, 4, 3, 2, 1]
```

### Optimal Two-Pointer Approach: arr = [1, 2, 3, 4]

```
Initial State:
Array: [1, 2, 3, 4]
        ↑        ↑
        l=0      r=3

Iteration 1:
Swap arr[0] ↔ arr[3]: 1 ↔ 4  
Array: [4, 2, 3, 1]
           ↑  ↑
           l=1 r=2

Iteration 2:
Swap arr[1] ↔ arr[2]: 2 ↔ 3
Array: [4, 3, 2, 1]
              ↑
              l=2, r=1

Iteration 3:
l=2, r=1 → l < r? No (2 < 1 is false)
Loop terminates

Final Result: [4, 3, 2, 1]
```

---

## Mathematical Properties

### 1. Index Mapping
- **Position Transformation:** arr[i] → arr[n-1-i]
- **Symmetric Positions:** (0,n-1), (1,n-2), (2,n-3), ...
- **Middle Element:** For odd n, element at n/2 stays in place

### 2. Swap Count
- **Odd Length Array:** (n-1)/2 swaps needed
- **Even Length Array:** n/2 swaps needed  
- **General Formula:** ⌊n/2⌋ swaps total

### 3. Properties Preserved
- **Array Size:** Remains unchanged
- **Element Values:** All original elements preserved
- **Memory Layout:** Same memory locations used

---

## Common Mistakes to Avoid

1. **Index Out of Bounds:** Using wrong loop termination condition
2. **Infinite Loop:** Not updating pointers correctly
3. **Incomplete Swap:** Forgetting temporary variable in swap
4. **Wrong Condition:** Using `<=` instead of `<` in while loop
5. **Off-by-One Error:** Wrong initialization of right pointer

### Common Error Examples:

```java
// Wrong: Index out of bounds
for (int i = 0; i <= n; i++) {
    // arr[n] doesn't exist!
}

// Wrong: Infinite loop  
while (l < r) {
    swap(arr[l], arr[r]);
    // Forgot to update l++ and r--
}

// Wrong: Incomplete swap
arr[l] = arr[r];
arr[r] = arr[l]; // arr[l] was already changed!

// Correct: Use temporary variable
int temp = arr[l];
arr[l] = arr[r]; 
arr[r] = temp;
```

---

## Optimization Techniques

### 1. XOR Swap (No Temp Variable)

```java
// Advanced: Swap without temporary variable using XOR
// Note: Doesn't work if l == r (same memory location)
public void reverse(int[] arr, int n) {
    int l = 0, r = n - 1;
    while (l < r) {
        if (l != r) { // Safety check
            arr[l] = arr[l] ^ arr[r];
            arr[r] = arr[l] ^ arr[r];
            arr[l] = arr[l] ^ arr[r];
        }
        l++;
        r--;
    }
}
```

### 2. Arithmetic Swap (Integer Overflow Risk)

```java
// Advanced: Swap using arithmetic (risk of overflow)
public void reverse(int[] arr, int n) {
    int l = 0, r = n - 1;
    while (l < r) {
        if (arr[l] != arr[r]) { // Avoid when equal
            arr[l] = arr[l] + arr[r];
            arr[r] = arr[l] - arr[r];
            arr[l] = arr[l] - arr[r];
        }
        l++;
        r--;
    }
}
```

### 3. SIMD Optimization (Advanced)

```java
// For very large arrays, consider vectorized operations
// This is typically handled by JVM optimizations
public void reverseOptimized(int[] arr, int n) {
    int l = 0, r = n - 1;
    
    // Unroll loop for better performance
    while (l + 3 < r) {
        // Process multiple swaps at once
        swap(arr, l, r);
        swap(arr, l+1, r-1);
        swap(arr, l+2, r-2);
        swap(arr, l+3, r-3);
        l += 4;
        r -= 4;
    }
    
    // Handle remaining elements
    while (l < r) {
        swap(arr, l++, r--);
    }
}
```

---

## Performance Analysis

### Time Complexity Breakdown:
```
Number of swaps: ⌊n/2⌋
Each swap: O(1) time
Total: O(n/2) = O(n)

For n = 1,000,000:
- Swaps needed: 500,000  
- Very efficient linear algorithm
- Cache-friendly sequential access
```

### Space Complexity Analysis:
```
Two-pointer approach: O(1) extra space
- Only variables: l, r, temp
- No dependency on input size
- Optimal space utilization
```

---

## Real-World Applications

1. **Data Processing:** Reversing time-series data for analysis
2. **Graphics Programming:** Flipping image pixel arrays
3. **String Manipulation:** Reversing character arrays
4. **Algorithm Implementation:** Building blocks for other algorithms
5. **Data Structures:** Implementing stacks, queues, deques
6. **Cryptography:** Part of encryption/decryption processes

---

## Related Problems

1. **Rotate Array:** Shift elements by k positions
2. **Reverse Words in String:** Reverse word order, not characters
3. **Palindrome Check:** Use reversal to check if array reads same forwards/backwards
4. **Reverse Linked List:** Similar concept for linked data structures
5. **Reverse Subarray:** Reverse only a portion of the array
6. **Matrix Rotation:** 2D array reversal/rotation

---

## Variations and Extensions

### 1. Reverse Subarray

```java
public void reverseSubarray(int[] arr, int start, int end) {
    while (start < end) {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
```

### 2. Reverse in Groups

```java
public void reverseInGroups(int[] arr, int n, int k) {
    for (int i = 0; i < n; i += k) {
        int end = Math.min(i + k - 1, n - 1);
        reverseSubarray(arr, i, end);
    }
}
```

### 3. Conditional Reverse

```java
publi