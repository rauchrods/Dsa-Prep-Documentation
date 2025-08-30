# Reverse a String II

### Difficulty: `Easy`

### **Practice Links:**
- **[LeetCode - Reverse String](https://leetcode.com/problems/reverse-string/)**
- **[GeeksforGeeks - Reverse a String](https://www.geeksforgeeks.org/problems/reverse-a-string/1)**

## Problem Statement

Given a **string**, the task is to **reverse it**. The string is represented by an array of characters **s**. Perform the reversal **in place** with **O(1) extra memory**.

**Note:** no need to return anything, modify the given list.

## Mathematical Definition

For a string s of length n, transform s such that:
- **s[i] becomes s[n-1-i] for all valid i**
- **In-place modification required**
- **O(1) extra memory constraint**

## Examples

```txt
Example 1:
Input:  s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Explanation: The given string s = "hello" and after reversing it becomes s = "olleh".

Example 2:
Input:  s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
Explanation: The given string s = "Hannah" and after reversing it becomes s = "hannaH".

Example 3:
Input:  s = ["h"]
Output: ["h"]
Explanation: Single character remains unchanged.

Example 4:
Input:  s = ["a","b"]
Output: ["b","a"]
Explanation: Two characters swap positions.

Example 5:
Input:  s = ["A","B","C","D","E"]
Output: ["E","D","C","B","A"]
Explanation: All characters reverse their positions.
```

<!-- ## Constraints

- 1 <= s.length <= 10^5
- s[i] is a printable ASCII character
- **Must modify in-place with O(1) extra memory** -->

## Key Concepts

- **Two Pointers:** Left and right pointers moving toward center
- **In-Place Modification:** Modify original array without extra space
- **Swapping:** Exchange elements at symmetric positions
- **Character Array:** Working with mutable character collections

---

## Approach 1: Brute Force Solution (Using Extra Space)

### Algorithm / Intuition

The brute force approach creates a new array and copies elements in reverse order:
1. **Create new array** of same size
2. **Copy elements** from original array in reverse order
3. **Copy back** to original array
4. **Simple but violates O(1) space constraint**

### Core Logic:
- Use additional space to store reversed version
- Two separate passes: copy reversed, then copy back
- Easy to understand but not optimal for space

### Step-by-Step Algorithm:
1. Create temporary array of size n
2. For i from 0 to n-1:
   - temp[i] = s[n-1-i]
3. For i from 0 to n-1:
   - s[i] = temp[i]

### DryRun Example (Brute Force):

Input: s = ["h","e","l","l","o"]

```
Phase 1 - Copy to temporary array:
temp = ["","","","",""]

i = 0: temp[0] = s[4] = "o" → temp = ["o","","","",""]
i = 1: temp[1] = s[3] = "l" → temp = ["o","l","","",""]
i = 2: temp[2] = s[2] = "l" → temp = ["o","l","l","",""]
i = 3: temp[3] = s[1] = "e" → temp = ["o","l","l","e",""]
i = 4: temp[4] = s[0] = "h" → temp = ["o","l","l","e","h"]

Phase 2 - Copy back to original:
i = 0: s[0] = temp[0] = "o" → s = ["o","e","l","l","o"]
i = 1: s[1] = temp[1] = "l" → s = ["o","l","l","l","o"]
i = 2: s[2] = temp[2] = "l" → s = ["o","l","l","l","o"]
i = 3: s[3] = temp[3] = "e" → s = ["o","l","l","e","o"]
i = 4: s[4] = temp[4] = "h" → s = ["o","l","l","e","h"]

Final Result: ["o","l","l","e","h"]
```

### Brute Force Code Solutions:

#### Java

```java
class Solution {
    public void reverseString(char[] s) {
        int n = s.length;
        
        // Create temporary array to store reversed string
        char[] temp = new char[n];
        
        // Copy elements in reverse order to temporary array
        for (int i = 0; i < n; i++) {
            temp[i] = s[n - 1 - i];
        }
        
        // Copy back from temporary array to original
        for (int i = 0; i < n; i++) {
            s[i] = temp[i];
        }
    }
}
```

#### JavaScript

```javascript
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let n = s.length;
    
    // Create temporary array to store reversed string
    let temp = new Array(n);
    
    // Copy elements in reverse order to temporary array
    for (let i = 0; i < n; i++) {
        temp[i] = s[n - 1 - i];
    }
    
    // Copy back from temporary array to original
    for (let i = 0; i < n; i++) {
        s[i] = temp[i];
    }
};
```

#### Python

```python
class Solution:
    def reverseString(self, s: List[str]) -> None:
        n = len(s)
        
        # Create temporary array to store reversed string
        temp = [''] * n
        
        # Copy elements in reverse order to temporary array
        for i in range(n):
            temp[i] = s[n - 1 - i]
        
        # Copy back from temporary array to original
        for i in range(n):
            s[i] = temp[i]
```

### Brute Force Complexity:
- **Time Complexity:** O(n) - two passes through array
- **Space Complexity:** O(n) - temporary array (violates constraint)

---

## Approach 2: Optimal Solution (Two Pointers - In Place)

### Algorithm / Intuition

The optimal approach uses **two pointers** to swap elements from both ends:
1. **Left pointer** starts from beginning (index 0)
2. **Right pointer** starts from end (index n-1)
3. **Swap elements** at left and right positions
4. **Move pointers** toward center until they meet

### Core Logic:
- Use two pointers moving toward each other
- Swap elements at symmetric positions
- Continue until pointers meet in middle
- Achieves O(1) space complexity

### Mathematical Reasoning:
```
Two Pointer Benefits:
- In-place swapping: O(1) space
- Single pass: O(n) time
- Symmetric positions: swap s[i] with s[n-1-i]
- Optimal for reversal problems
```

### Step-by-Step Algorithm:
1. Initialize left = 0, right = n-1
2. While left < right:
   - Store s[left] in temporary variable
   - Set s[left] = s[right]
   - Set s[right] = temporary variable
   - Increment left, decrement right
3. Stop when pointers meet

### DryRun Example (Optimal):

Input: s = ["h","e","l","l","o"]

```
Initial: left = 0, right = 4
Array: ["h","e","l","l","o"]

Iteration 1: left = 0, right = 4
  temp = s[0] = "h"
  s[0] = s[4] = "o" → ["o","e","l","l","o"]
  s[4] = temp = "h" → ["o","e","l","l","h"]
  left = 1, right = 3

Iteration 2: left = 1, right = 3
  temp = s[1] = "e"
  s[1] = s[3] = "l" → ["o","l","l","l","h"]
  s[3] = temp = "e" → ["o","l","l","e","h"]
  left = 2, right = 2

Termination: left = 2, right = 2 (left == right)
Final Result: ["o","l","l","e","h"]
```

### Optimal Code Solutions:

#### Java

```java
class Solution {
    public void reverseString(List<Character> s) {
        // your code goes here
        // Get length of the character list
        int n = s.size();
        
        // Initialize two pointers: left starts from beginning, right from end
        int l = 0;
        int r = n - 1;
        
        // Continue swapping until pointers meet in the middle
        while (l < r) {
            // Store left character in temporary variable
            char temp = s.get(l);
            
            // Move right character to left position (Use set() instead of s[l] =)
            s.set(l, s.get(r));
            
            // Move stored left character to right position
            s.set(r, temp);
            
            // Move pointers toward center
            l++;
            r--;
        }
    }
}
```

#### JavaScript

```javascript
class Solution {
    reverseString(s) {
        //your code goes here
        // Get length of the character array
        let n = s.length
        
        // Initialize two pointers: left starts from beginning, right from end
        let l = 0
        let r= n-1

        // Continue swapping until pointers meet in the middle
        while(l<r){
            // Store left character in temporary variable
            let temp = s[l]
            
            // Move right character to left position
            s[l] = s[r]
            
            // Move stored left character to right position
            s[r] = temp
            
            // Move pointers toward center
            l++
            r--
        }

        return s;
    }
}
```

#### Python

```python
class Solution: 
    def reverseString(self, s):
        # Get length of the character array
        n = len(s)
        
        # Initialize two pointers: left starts from beginning, right from end
        l = 0
        r = n-1

        # Continue swapping until pointers meet in the middle
        while(l<r):
            # Store left character in temporary variable
            temp = s[l]
            
            # Move right character to left position
            s[l] = s[r]
            
            # Move stored left character to right position
            s[r] = temp
            
            # Move pointers toward center
            l+=1
            r-=1
        

        return s
```

### Optimal Complexity:
- **Time Complexity:** O(n) - single pass through half the array
- **Space Complexity:** O(1) - only using constant extra space

---

## Approach 3: Built-in Methods (Language-Specific)

### Alternative Solutions Using Language Features:

#### Java (Using Collections.reverse)

```java
import java.util.Collections;

class Solution {
    public void reverseString(List<Character> s) {
        // Use built-in reverse method
        Collections.reverse(s);
    }
}
```

#### JavaScript (Using reverse method)

```javascript
var reverseString = function(s) {
    // JavaScript array has built-in reverse method
    s.reverse();
};
```

#### Python (Using slice notation)

```python
class Solution:
    def reverseString(self, s: List[str]) -> None:
        # Python slice notation for reversal
        s[:] = s[::-1]
```

---

## Approach 4: Recursive Solution

### Algorithm / Intuition

Recursive approach swaps outer elements and recursively reverses inner portion:
1. **Base case:** If left >= right, return
2. **Swap** elements at left and right positions
3. **Recursive call** with left+1 and right-1
4. **Stack space** makes this O(n) space complexity

### Recursive Code Solutions:

#### Java

```java
class Solution {
    public void reverseString(char[] s) {
        // Call helper function with initial pointers
        reverseHelper(s, 0, s.length - 1);
    }
    
    private void reverseHelper(char[] s, int left, int right) {
        // Base case: pointers meet or cross
        if (left >= right) {
            return;
        }
        
        // Swap characters at current positions
        char temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        
        // Recursively reverse the inner portion
        reverseHelper(s, left + 1, right - 1);
    }
}
```

### Recursive Complexity:
- **Time Complexity:** O(n) - each character processed once
- **Space Complexity:** O(n) - recursion stack depth

---

## Complexity Analysis Summary

| Approach              | Time Complexity | Space Complexity | Pros                    | Cons                    |
|-----------------------|-----------------|------------------|-------------------------|-------------------------|
| Brute Force           | O(n)            | O(n)             | Simple logic            | Violates space constraint |
| Two Pointers          | O(n)            | O(1)             | Optimal, in-place       | None                    |
| Built-in Methods      | O(n)            | O(1)             | Concise code           | Language-dependent      |
| Recursive             | O(n)            | O(n)             | Elegant recursion      | Stack space overhead    |

---

## Edge Cases to Consider

1. **Single Character:** Array with one element
2. **Two Characters:** Minimum swap case
3. **Empty Array:** Handle empty input
4. **Odd Length:** Middle element stays in place
5. **Even Length:** All elements get swapped
6. **Special Characters:** Non-alphabetic characters

## Detailed Edge Case Analysis

```java
// Edge cases with step-by-step analysis
Input: s = ["a"]           → Output: ["a"] (single character)
Input: s = ["a","b"]       → Output: ["b","a"] (two characters)
Input: s = []              → Output: [] (empty array)
Input: s = ["a","b","c"]   → Output: ["c","b","a"] (odd length)
Input: s = ["1","2","3","4"] → Output: ["4","3","2","1"] (even length)
Input: s = ["@","#","$"]   → Output: ["$","#","@"] (special characters)
```

---

## Test Cases

```java
public void testReverseString() {
    Solution sol = new Solution();
    
    // Basic examples
    char[] test1 = {'h','e','l','l','o'};
    sol.reverseString(test1);
    assertArrayEquals(new char[]{'o','l','l','e','h'}, test1);
    
    char[] test2 = {'H','a','n','n','a','h'};
    sol.reverseString(test2);
    assertArrayEquals(new char[]{'h','a','n','n','a','H'}, test2);
    
    // Edge cases
    char[] test3 = {'a'};                                        // Single character
    sol.reverseString(test3);
    assertArrayEquals(new char[]{'a'}, test3);
    
    char[] test4 = {'a','b'};                                    // Two characters
    sol.reverseString(test4);
    assertArrayEquals(new char[]{'b','a'}, test4);
    
    char[] test5 = {'1','2','3','4','5'};                        // Odd length
    sol.reverseString(test5);
    assertArrayEquals(new char[]{'5','4','3','2','1'}, test5);
    
    char[] test6 = {'A','B','C','D'};                            // Even length
    sol.reverseString(test6);
    assertArrayEquals(new char[]{'D','C','B','A'}, test6);
    
    // Special characters
    char[] test7 = {'@','#','$','%'};
    sol.reverseString(test7);
    assertArrayEquals(new char[]{'%','$','#','@'}, test7);
}
```

---

## Step-by-Step Visualization

### Two Pointers Approach: s = ["h","e","l","l","o"]

```
Initial State:
Array: ["h","e","l","l","o"]
       ↑             ↑
       l=0          r=4

Iteration 1:
  temp = s[0] = "h"
  s[0] = s[4] = "o" → ["o","e","l","l","o"]
  s[4] = temp = "h" → ["o","e","l","l","h"]
  l = 1, r = 3

Array: ["o","e","l","l","h"]
           ↑       ↑
           l=1    r=3

Iteration 2:
  temp = s[1] = "e"
  s[1] = s[3] = "l" → ["o","l","l","l","h"]
  s[3] = temp = "e" → ["o","l","l","e","h"]
  l = 2, r = 2

Array: ["o","l","l","e","h"]
               ↑
            l=r=2

Termination: l == r (pointers meet)
Final Result: ["o","l","l","e","h"]
```

### Even Length Example: s = ["a","b","c","d"]

```
Initial: l = 0, r = 3
Array: ["a","b","c","d"]

Iteration 1: Swap s[0] and s[3]
Array: ["d","b","c","a"], l = 1, r = 2

Iteration 2: Swap s[1] and s[2]  
Array: ["d","c","b","a"], l = 2, r = 1

Termination: l > r (2 > 1)
Final: ["d","c","b","a"]
```

---

## Mathematical Properties

### 1. Symmetry Operations
- **Position Mapping:** s[i] ↔ s[n-1-i]
- **Midpoint:** Element at index n/2 stays in place (odd length)
- **Swap Count:** Exactly ⌊n/2⌋ swaps needed

### 2. Pointer Movement
- **Convergence:** Pointers move toward center
- **Termination:** When left >= right
- **Progress:** Each iteration reduces problem size by 2

### 3. In-Place Constraints
- **Memory Efficiency:** Only O(1) extra space allowed
- **Direct Modification:** Modify original array
- **No Copying:** Avoid creating duplicate arrays

---

## Common Mistakes to Avoid

1. **Extra Space Usage:** Creating temporary arrays violates constraints
2. **Pointer Logic:** Incorrect termination condition 
3. **Swap Logic:** Forgetting temporary variable causes data loss
4. **Index Bounds:** Off-by-one errors in pointer initialization
5. **Return Value:** Returning array when void function expected

### Common Error Examples:

```java
// Wrong: Using extra space
char[] reversed = new char[s.length]; // Violates O(1) constraint

// Wrong: Incorrect termination condition
while (left <= right) { // Should be left < right

// Wrong: Swapping without temp variable
s[left] = s[right];
s[right] = s[left]; // s[left] already changed!

// Wrong: Off-by-one error
int right = s.length; // Should be s.length - 1

// Correct: Proper two-pointer swap
char temp = s[left];
s[left] = s[right];
s[right] = temp;
```

---

## Optimization Techniques

### 1. XOR Swap (No Temp Variable)

```java
// For integer/character arrays where XOR works
public void reverseStringXOR(char[] s) {
    int left = 0, right = s.length - 1;
    
    while (left < right) {
        // XOR swap without temporary variable
        s[left] = (char)(s[left] ^ s[right]);
        s[right] = (char)(s[right] ^ s[left]);
        s[left] = (char)(s[left] ^ s[right]);
        
        left++;
        right--;
    }
}
```

### 2. Optimized Loop (Manual Unrolling)

```java
// Process multiple swaps per iteration for better performance
public void reverseStringOptimized(char[] s) {
    int left = 0, right = s.length - 1;
    
    // Process two swaps per iteration when possible
    while (left + 1 < right) {
        // First swap
        char temp1 = s[left];
        s[left] = s[right];
        s[right] = temp1;
        
        // Second swap
        char temp2 = s[left + 1];
        s[left + 1] = s[right - 1];
        s[right - 1] = temp2;
        
        left += 2;
        right -= 2;
    }
    
    // Handle remaining single swap
    if (left < right) {
        char temp = s[left];
        s[left] = s[right];
        s[right] = temp;
    }
}
```

---

## Performance Analysis

### Time Complexity Breakdown:
```
Two Pointers Approach:
- Number of swaps: ⌊n/2⌋
- Each swap: O(1) time
- Total: O(n)

Space Usage:
- Temporary variable: 1 character
- Pointers: 2 integers
- Total: O(1) constant space
```

### Comparison of Approaches:
```
For n = 100,000:
- Brute Force: 100,000 copies + 100,000 copies back = 200,000 operations
- Two Pointers: 50,000 swaps = 50,000 operations (4x faster)

Memory usage:
- Brute Force: 100,000 extra characters
- Two Pointers: 1 temporary character
```

---

## Real-World Applications

1. **Text Processing:** Reversing words or sentences
2. **Data Transformation:** Preparing data for algorithms requiring reverse order
3. **Palindrome Checking:** Preprocessing for palindrome verification
4. **Cryptography:** Simple character permutation operations
5. **Game Development:** String manipulation for user interfaces
6. **File Processing:** Reversing lines or character sequences

---

## Related Problems

1. **Reverse Words in a String:** Reverse word order, not characters
2. **Valid Palindrome:** Check if string reads same forwards/backwards
3. **Reverse String II:** Reverse every 2k characters
4. **Reverse Only Letters:** Reverse only alphabetic characters
5. **Reverse Vowels:** Reverse only vowel positions
6. **Rotate Array:** Circular rotation instead of complete reversal

---

## Variations and Extensions

### 1. Reverse Only Alphabetic Characters

```java
public void reverseOnlyLetters(char[] s) {
    int left = 0, right = s.length - 1;
    
    while (left < right) {
        // Skip non-alphabetic characters from left
        while (left < right && !Character.isLetter(s[left])) {
            left++;
        }
        
        // Skip non-alphabetic characters from right
        while (left < right && !Character.isLetter(s[right])) {
            right--;
        }
        
        // Swap alphabetic characters
        if (left < right) {
            char temp = s[left];
            s[left] = s[right];
            s[right] = temp;
            left++;
            right--;
        }
    }
}
```

### 2. Reverse Substring

```java
public void reverseSubstring(char[] s, int start, int end) {
    // Reverse characters between start and end indices
    while (start < end) {
        char temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        start++;
        end--;
    }
}
```

### 3. Reverse Words in Place

```java
public void reverseWords(char[] s) {
    // First reverse entire string
    reverse(s, 0, s.length - 1);
    
    // Then reverse each word individually
    int start = 0;
    for (int i = 0; i <= s.length; i++) {
        if (i == s.length || s[i] == ' ') {
            reverse(s, start, i - 1);
            start = i + 1;
        }
    }
}

private void reverse(char[] s, int left, int right) {
    while (left < right) {
        char temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
}
```

---

## Interview Tips

### 1. Clarification Questions
- "Should I modify in-place or can I use extra space?"
- "Are there any constraints on the character types?"
- "Should I return the result or just modify the input?"
- "What about empty or single-character inputs?"

### 2. Solution Progression
1. **Start with brute force:** Show understanding with extra space
2. **Identify constraint:** Mention O(1) space requirement
3. **Propose two pointers:** Demonstrate optimal approach
4. **Consider alternatives:** Discuss built-in methods and trade-offs

### 3. Code Quality
- **Clear variable names:** `left`, `right`, `temp`
- **Proper bounds:** Correct pointer initialization
- **Edge case handling:** Single character, empty array
- **Clean swapping:** Use temporary variable properly

---

## Advanced Optimizations

### 1. SIMD-Inspired Batch Processing

```java
// Process multiple characters simultaneously when possible
public void reverseStringBatch(char[] s) {
    int left = 0, right = s.length - 1;
    
    // Process 4 swaps at once when array is large enough
    while (left + 3 < right) {
        // Batch swap 4 pairs simultaneously
        for (int i = 0; i < 4; i++) {
            char temp = s[left + i];
            s[left + i] = s[right - i];
            s[right - i] = temp;
        }
        left += 4;
        right -= 4;
    }
    
    // Handle remaining characters with standard approach
    while (left < right) {
        char temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
}
```

---

This problem demonstrates the fundamental two-pointer technique for in-place array manipulation. The key insight is recognizing that reversal can be achieved by swapping elements at symmetric positions, eliminating the need for extra space while maintaining optimal time complexity.