# Palindrome Check

### Difficulty: `Easy`

### **Practice Links:**
- **[GeeksforGeeks - Palindrome String](https://www.geeksforgeeks.org/problems/palindrome-string0817/1)**
<!-- - **[LeetCode - Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)** -->

## Problem Statement

Given a **string** `s`, return `true` if the string is a **palindrome**, otherwise `false`. A string is called **palindrome** if it reads the same forward and backward.

**Note:** Return a boolean value indicating whether the string is a palindrome.

## Mathematical Definition

For a string s of length n, s is a palindrome if and only if:
- **s[i] == s[n-1-i] for all valid i**
- **The string reads identically in both directions**

## Examples

```txt
Example 1:
Input:  s = "hannah"
Output: true
Explanation: The given string "hannah" when read backward is -> "hannah", which is same as when read forward.
Hence answer is true.

Example 2:
Input:  s = "aabbaaa"
Output: false
Explanation: The given string "aabbaaa" when read backward is -> "aaabaaa", which is not same as when read forward.
Hence answer is false.

Example 3:
Input:  s = "aabbccbbaa"
Output: true
Explanation: The given string "aabbccbbaa" when read backward is -> "aabbccbbaa", which is same as when read forward.
Hence answer is true.

Example 4:
Input:  s = "a"
Output: true
Explanation: Single character is always a palindrome.

Example 5:
Input:  s = ""
Output: true
Explanation: Empty string is considered a palindrome.
```

## Key Concepts

- **Two Pointers:** Left and right pointers moving toward center
- **Character Comparison:** Compare characters at symmetric positions
- **Early Termination:** Return false immediately when mismatch found
- **String Indexing:** Access characters using index positions

---

## Approach 1: Brute Force Solution (String Reversal)

### Algorithm / Intuition

The brute force approach creates a reversed version of the string and compares it with the original:
1. **Create reversed string** by iterating from end to beginning
2. **Compare original** with reversed string
3. **Return result** of string comparison
4. **Simple but uses extra space**

### Core Logic:
- Build reversed string character by character
- Use string comparison to check equality
- Easy to understand but not optimal for space

### Step-by-Step Algorithm:
1. Create empty string for reversed version
2. For i from n-1 to 0:
   - Append s[i] to reversed string
3. Compare original string with reversed string
4. Return comparison result

### DryRun Example (Brute Force):

Input: s = "hannah"

```
Building reversed string:
reversed = ""

i = 5: reversed += s[5] = 'h' → reversed = "h"
i = 4: reversed += s[4] = 'a' → reversed = "ha"
i = 3: reversed += s[3] = 'n' → reversed = "han"
i = 2: reversed += s[2] = 'n' → reversed = "hann"
i = 1: reversed += s[1] = 'a' → reversed = "hanna"
i = 0: reversed += s[0] = 'h' → reversed = "hannah"

Comparison:
original = "hannah"
reversed = "hannah"
original.equals(reversed) = true

Final Result: true
```

### Brute Force Code Solutions:

#### Java

```java
class Solution {
    public boolean palindromeCheck(String s) {
        // Create reversed string by building from end to beginning
        String reversed = "";
        
        // Build reversed string character by character
        for (int i = s.length() - 1; i >= 0; i--) {
            reversed += s.charAt(i);
        }
        
        // Compare original string with reversed string
        return s.equals(reversed);
    }
}
```

#### JavaScript

```javascript
class Solution {
    palindromeCheck(s) {
        // Create reversed string by building from end to beginning
        let reversed = "";
        
        // Build reversed string character by character
        for (let i = s.length - 1; i >= 0; i--) {
            reversed += s.charAt(i);
        }
        
        // Compare original string with reversed string
        return s === reversed;
    }
}
```

#### Python

```python
class Solution:
    def palindromeCheck(self, s):
        # Create reversed string by building from end to beginning
        reversed_str = ""
        
        # Build reversed string character by character
        for i in range(len(s) - 1, -1, -1):
            reversed_str += s[i]
        
        # Compare original string with reversed string
        return s == reversed_str
```

### Brute Force Complexity:
- **Time Complexity:** O(n) - one pass to build reversed string + O(n) for comparison
- **Space Complexity:** O(n) - storing reversed string

---

## Approach 2: Optimal Solution (Two Pointers - In Place)

### Algorithm / Intuition

The optimal approach uses **two pointers** to compare characters from both ends:
1. **Left pointer** starts from beginning (index 0)
2. **Right pointer** starts from end (index n-1)
3. **Compare characters** at left and right positions
4. **Move pointers** toward center until they meet
5. **Early termination** if any mismatch found

### Core Logic:
- Use two pointers moving toward each other
- Compare characters at symmetric positions
- Return false immediately on first mismatch
- Achieves O(1) space complexity

### Mathematical Reasoning:
```
Two Pointer Benefits:
- No extra space: O(1) space
- Early termination: Best case O(1) time
- Single pass: O(n) worst case time
- Symmetric comparison: check s[i] with s[n-1-i]
```

### Step-by-Step Algorithm:
1. Initialize left = 0, right = n-1
2. While left < right:
   - If s[left] != s[right], return false
   - Increment left, decrement right
3. Return true if loop completes

### DryRun Example (Optimal):

Input: s = "hannah"

```
Initial: left = 0, right = 5
String: "hannah"

Iteration 1: left = 0, right = 5
  s[0] = 'h', s[5] = 'h'
  'h' == 'h' ✓ Continue
  left = 1, right = 4

Iteration 2: left = 1, right = 4
  s[1] = 'a', s[4] = 'a'
  'a' == 'a' ✓ Continue
  left = 2, right = 3

Iteration 3: left = 2, right = 3
  s[2] = 'n', s[3] = 'n'
  'n' == 'n' ✓ Continue
  left = 3, right = 2

Termination: left = 3, right = 2 (left > right)
All comparisons passed → Return true
```

### Optimal Code Solutions:

#### Java

```java
class Solution {
    public boolean palindromeCheck(String s) {
        // Initialize two pointers: left starts from beginning, right from end
        int l = 0;
        int r = s.length() - 1;

        // Continue comparing until pointers meet in the middle
        while (l < r) {
            // If characters at current positions don't match, not a palindrome
            if (s.charAt(l) != s.charAt(r)) {
                return false;
            }
            // Move pointers toward center
            l++;
            r--;
        }

        // If all comparisons passed, string is a palindrome
        return true;
    }
}
```

#### JavaScript

```javascript
class Solution {
    palindromeCheck(s) {
        // Initialize two pointers: left starts from beginning, right from end
        let l = 0;
        let r = s.length - 1;

        // Continue comparing until pointers meet in the middle
        while (l < r) {
            // If characters at current positions don't match, not a palindrome
            if (s.charAt(l) != s.charAt(r)) {
                return false;
            }
            // Move pointers toward center
            l++;
            r--;
        }

        // If all comparisons passed, string is a palindrome
        return true;
    }
}
```

#### Python

```python
class Solution:    
    def palindromeCheck(self, s):
        # Initialize two pointers: left starts from beginning, right from end
        l = 0
        r = len(s) - 1

        # Continue comparing until pointers meet in the middle
        while l < r:
            # If characters at current positions don't match, not a palindrome
            if s[l] != s[r]:
                return False
            # Move pointers toward center
            l += 1
            r -= 1
        
        # If all comparisons passed, string is a palindrome
        return True
```

### Optimal Complexity:
- **Time Complexity:** O(n) - single pass through half the string in worst case
- **Space Complexity:** O(1) - only using constant extra space

---

## Approach 3: Built-in Methods (Language-Specific)

### Alternative Solutions Using Language Features:

#### Java (Using StringBuilder)

```java
class Solution {
    public boolean palindromeCheck(String s) {
        // Use StringBuilder to reverse string efficiently
        String reversed = new StringBuilder(s).reverse().toString();
        return s.equals(reversed);
    }
}
```

#### JavaScript (Using built-in methods)

```javascript
class Solution {
    palindromeCheck(s) {
        // Use array methods to reverse string
        let reversed = s.split('').reverse().join('');
        return s === reversed;
    }
}
```

#### Python (Using slice notation)

```python
class Solution:
    def palindromeCheck(self, s):
        # Python slice notation for reversal
        return s == s[::-1]
```

---

## Approach 4: Recursive Solution

### Algorithm / Intuition

Recursive approach compares outer characters and recursively checks inner portion:
1. **Base case:** If left >= right, return true
2. **Compare** characters at left and right positions
3. **Return false** if mismatch found
4. **Recursive call** with left+1 and right-1

### Recursive Code Solutions:

#### Java

```java
class Solution {
    public boolean palindromeCheck(String s) {
        // Call helper function with initial pointers
        return palindromeHelper(s, 0, s.length() - 1);
    }
    
    private boolean palindromeHelper(String s, int left, int right) {
        // Base case: pointers meet or cross - palindrome confirmed
        if (left >= right) {
            return true;
        }
        
        // If characters don't match, not a palindrome
        if (s.charAt(left) != s.charAt(right)) {
            return false;
        }
        
        // Recursively check the inner portion
        return palindromeHelper(s, left + 1, right - 1);
    }
}
```

### Recursive Complexity:
- **Time Complexity:** O(n) - each character compared once
- **Space Complexity:** O(n) - recursion stack depth

---

## Complexity Analysis Summary

| Approach              | Time Complexity | Space Complexity | Pros                    | Cons                    |
|-----------------------|-----------------|------------------|-------------------------|-------------------------|
| Brute Force (Reverse) | O(n)            | O(n)             | Simple logic            | Extra space usage       |
| Two Pointers          | O(n)            | O(1)             | Optimal, early exit     | None                    |
| Built-in Methods      | O(n)            | O(n)             | Concise code           | Language-dependent      |
| Recursive             | O(n)            | O(n)             | Elegant recursion      | Stack space overhead    |

---

## Edge Cases to Consider

1. **Single Character:** Always a palindrome
2. **Empty String:** Considered a palindrome
3. **Two Characters:** Same or different
4. **Odd Length:** Middle character doesn't need comparison
5. **Even Length:** All characters must be compared
6. **Case Sensitivity:** Usually case-sensitive comparison

## Detailed Edge Case Analysis

```java
// Edge cases with step-by-step analysis
Input: s = "a"           → Output: true (single character)
Input: s = ""            → Output: true (empty string)
Input: s = "ab"          → Output: false (two different chars)
Input: s = "aa"          → Output: true (two same chars)
Input: s = "aba"         → Output: true (odd length palindrome)
Input: s = "abba"        → Output: true (even length palindrome)
Input: s = "Aa"          → Output: false (case sensitive)
```

---

## Test Cases

```java
public void testPalindromeCheck() {
    Solution sol = new Solution();
    
    // Basic examples
    assertTrue(sol.palindromeCheck("hannah"));
    assertFalse(sol.palindromeCheck("aabbaaa"));
    assertTrue(sol.palindromeCheck("aabbccbbaa"));
    
    // Edge cases
    assertTrue(sol.palindromeCheck("a"));                    // Single character
    assertTrue(sol.palindromeCheck(""));                     // Empty string
    assertFalse(sol.palindromeCheck("ab"));                  // Two different chars
    assertTrue(sol.palindromeCheck("aa"));                   // Two same chars
    assertTrue(sol.palindromeCheck("aba"));                  // Odd length
    assertTrue(sol.palindromeCheck("abba"));                 // Even length
    
    // Case sensitivity
    assertFalse(sol.palindromeCheck("Aa"));                  // Different cases
    assertTrue(sol.palindromeCheck("AaA"));                  // Mixed case palindrome
    
    // Longer examples
    assertTrue(sol.palindromeCheck("racecar"));
    assertTrue(sol.palindromeCheck("madam"));
    assertFalse(sol.palindromeCheck("hello"));
    assertTrue(sol.palindromeCheck("12321"));
}
```

---

## Step-by-Step Visualization

### Two Pointers Approach: s = "hannah"

```
Initial State:
String: "hannah"
        ↑     ↑
        l=0  r=5

Iteration 1:
  s[0] = 'h', s[5] = 'h'
  'h' == 'h' ✓
  l = 1, r = 4

String: "hannah"
         ↑   ↑
         l=1 r=4

Iteration 2:
  s[1] = 'a', s[4] = 'a'
  'a' == 'a' ✓
  l = 2, r = 3

String: "hannah"
          ↑ ↑
          l=2 r=3

Iteration 3:
  s[2] = 'n', s[3] = 'n'
  'n' == 'n' ✓
  l = 3, r = 2

Termination: l > r (3 > 2)
All comparisons passed → Return true
```

### False Case Example: s = "aabbaaa"

```
Initial: l = 0, r = 6
String: "aabbaaa"

Iteration 1: s[0] = 'a', s[6] = 'a' ✓
l = 1, r = 5

Iteration 2: s[1] = 'a', s[5] = 'a' ✓
l = 2, r = 4

Iteration 3: s[2] = 'b', s[4] = 'a'
'b' != 'a' ✗ Return false immediately

Result: false (early termination)
```

---

## Mathematical Properties

### 1. Symmetry Properties
- **Character Mapping:** s[i] must equal s[n-1-i]
- **Comparison Count:** At most ⌊n/2⌋ comparisons needed
- **Early Exit:** Can terminate on first mismatch

### 2. Pointer Movement
- **Convergence:** Pointers move toward center
- **Termination:** When left >= right
- **Progress:** Each iteration reduces problem size by 2

### 3. Best/Worst Case Analysis
- **Best Case:** O(1) - first comparison fails
- **Average Case:** O(n/2) - palindrome detected halfway
- **Worst Case:** O(n/2) - complete palindrome verification

---

## Common Mistakes to Avoid

1. **Boundary Conditions:** Incorrect termination condition
2. **Index Access:** Off-by-one errors in pointer initialization
3. **Case Sensitivity:** Not handling uppercase/lowercase properly
4. **Empty String:** Forgetting to handle empty input
5. **Single Character:** Not recognizing single char as palindrome

### Common Error Examples:

```java
// Wrong: Incorrect termination condition
while (left <= right) { // Should be left < right

// Wrong: Off-by-one error
int right = s.length(); // Should be s.length() - 1

// Wrong: Not handling empty string
if (s.length() == 0) return false; // Should return true

// Wrong: Case insensitive when problem requires case sensitive
if (Character.toLowerCase(s.charAt(left)) != 
    Character.toLowerCase(s.charAt(right))) // Depends on requirements

// Correct: Proper two-pointer comparison
while (left < right) {
    if (s.charAt(left) != s.charAt(right)) {
        return false;
    }
    left++;
    right--;
}
```

---

## Performance Optimization

### 1. Early Termination Benefits

```java
// The two-pointer approach naturally provides early termination
public boolean palindromeCheck(String s) {
    int left = 0, right = s.length() - 1;
    
    while (left < right) {
        // Return false immediately on first mismatch
        if (s.charAt(left) != s.charAt(right)) {
            return false; // Early exit saves unnecessary comparisons
        }
        left++;
        right--;
    }
    return true;
}
```

### 2. Cache-Friendly Access Pattern

```java
// Access pattern is cache-friendly for small strings
// Characters are accessed from both ends moving inward
// Better memory locality compared to building reversed string
```

---

## Real-World Applications

1. **Text Validation:** Checking if words are palindromes
2. **Data Validation:** Ensuring symmetric data structures
3. **Game Development:** Word puzzles and palindrome games
4. **Bioinformatics:** DNA sequence analysis for palindromic patterns
5. **Cryptography:** Checking symmetric encryption patterns
6. **User Interface:** Real-time palindrome detection in text fields

---

## Related Problems

1. **Valid Palindrome II:** Remove at most one character to make palindrome
2. **Palindromic Substrings:** Count all palindromic substrings
3. **Longest Palindromic Substring:** Find longest palindrome in string
4. **Palindrome Partitioning:** Partition string into palindromic substrings
5. **Shortest Palindrome:** Add minimum characters to make palindrome
6. **Palindrome Number:** Check if integer is palindrome

---

## Variations and Extensions

### 1. Case-Insensitive Palindrome

```java
public boolean palindromeCheckIgnoreCase(String s) {
    int left = 0, right = s.length() - 1;
    
    while (left < right) {
        if (Character.toLowerCase(s.charAt(left)) != 
            Character.toLowerCase(s.charAt(right))) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
```

### 2. Alphanumeric Only Palindrome

```java
public boolean validPalindrome(String s) {
    int left = 0, right = s.length() - 1;
    
    while (left < right) {
        // Skip non-alphanumeric characters from left
        while (left < right && !Character.isLetterOrDigit(s.charAt(left))) {
            left++;
        }
        
        // Skip non-alphanumeric characters from right
        while (left < right && !Character.isLetterOrDigit(s.charAt(right))) {
            right--;
        }
        
        // Compare alphanumeric characters (case-insensitive)
        if (Character.toLowerCase(s.charAt(left)) != 
            Character.toLowerCase(s.charAt(right))) {
            return false;
        }
        
        left++;
        right--;
    }
    return true;
}
```

### 3. Palindrome with Deletions

```java
public boolean validPalindromeWithDeletion(String s) {
    return validPalindromeHelper(s, 0, s.length() - 1, 1);
}

private boolean validPalindromeHelper(String s, int left, int right, int deletions) {
    while (left < right) {
        if (s.charAt(left) != s.charAt(right)) {
            if (deletions == 0) return false;
            
            // Try deleting left character OR right character
            return validPalindromeHelper(s, left + 1, right, deletions - 1) ||
                   validPalindromeHelper(s, left, right - 1, deletions - 1);
        }
        left++;
        right--;
    }
    return true;
}
```

---

## Interview Tips

### 1. Clarification Questions
- "Should the palindrome check be case-sensitive?"
- "Do I need to consider only alphabetic characters or all characters?"
- "Should spaces and punctuation be ignored?"
- "What should I return for empty string?"

### 2. Solution Progression
1. **Start with brute force:** Show string reversal approach
2. **Identify optimization:** Mention space efficiency concerns
3. **Propose two pointers:** Demonstrate optimal O(1) space solution
4. **Consider edge cases:** Discuss empty string, single character

### 3. Code Quality
- **Clear variable names:** `left`, `right`, `reversed`
- **Proper bounds:** Correct pointer initialization
- **Edge case handling:** Empty string, single character
- **Early termination:** Return false immediately on mismatch

---

## Advanced Techniques

### 1. Rolling Hash for Long Strings

```java
// For very long strings, rolling hash can be more efficient
public boolean palindromeCheckRollingHash(String s) {
    if (s.length() <= 1) return true;
    
    long hash1 = 0, hash2 = 0;
    long base = 31, mod = 1000000007;
    long pow = 1;
    
    int n = s.length();
    
    // Build hash from both ends
    for (int i = 0; i < n / 2; i++) {
        hash1 = (hash1 * base + (s.charAt(i) - 'a' + 1)) % mod;
        hash2 = (hash2 + (s.charAt(n - 1 - i) - 'a' + 1) * pow) % mod;
        pow = (pow * base) % mod;
    }
    
    return hash1 == hash2;
}
```

---

This problem demonstrates the fundamental two-pointer technique for string comparison. The key insight is recognizing that palindrome verification can be achieved by comparing characters at symmetric positions, eliminating the need for extra space while providing early termination benefits.