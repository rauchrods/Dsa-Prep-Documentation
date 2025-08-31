# Largest Odd Number in a String

### Difficulty: `Easy`

### **Practice Links:**

- **[LeetCode - Largest Odd Number in String](https://leetcode.com/problems/largest-odd-number-in-string/description/)**

## Problem Statement

Given a string `s` representing a large integer, the task is to return the **largest-valued odd integer** (as a string) that is a **substring** of the given string `s`.

The number returned should **not have leading zeros**. But the given input string may have leading zero. (If no odd number is found, then return empty string.)

**Note:** Return the result as a string without leading zeros.

## Mathematical Definition

For a string s representing a number:

- **Find the largest odd substring** that can be formed
- **Remove leading zeros** from the result
- **Return empty string** if no odd number exists
- **Odd number:** A number whose last digit is 1, 3, 5, 7, or 9

## Examples

```txt
Example 1:
Input:  s = "5347"
Output: "5347"
Explanation: The odd numbers formed by given strings are -> 5, 3, 53, 347, 5347.
So the largest among all the possible odd numbers for given string is 5347.

Example 2:
Input:  s = "021463"
Output: "21463"
Explanation: The different odd numbers that can be formed by the given string are -> 1, 3, 21, 63, 463, 1463, 21463.
We cannot include 021463 as the number contains leading zero.
So largest odd number in given string is 21463.

Example 3:
Input:  s = "0032579"
Output: "32579"
Explanation: After removing leading zeros and finding the largest odd substring.

Example 4:
Input:  s = "24680"
Output: ""
Explanation: No odd digits present, so return empty string.

Example 5:
Input:  s = "1357"
Output: "1357"
Explanation: All digits are odd, so the entire string is the answer.
```

## Key Concepts

- **Substring Extraction:** Finding substrings that form odd numbers
- **Leading Zero Removal:** Eliminating leading zeros from result
- **Odd Number Identification:** Numbers ending with odd digits (1,3,5,7,9)
- **String Manipulation:** Working with string slicing and indexing
- **Greedy Approach:** Finding the largest possible odd number

---

## Approach 1: Brute Force Solution (Generate All Substrings)

### Algorithm / Intuition

The brute force approach generates all possible substrings and finds the largest odd one:

1. **Generate all substrings** of the input string
2. **Filter odd substrings** by checking last digit
3. **Remove leading zeros** from each valid substring
4. **Find the largest** among all valid odd numbers
5. **Return the result** as string

### Core Logic:

- Iterate through all possible substring combinations
- Check if substring represents an odd number
- Keep track of the largest valid odd number found
- Handle leading zeros appropriately

### Step-by-Step Algorithm:

1. Initialize maxOdd as empty string
2. For each starting position i:
   - For each ending position j from i to n:
     - Extract substring s[i:j+1]
     - If last digit is odd:
       - Remove leading zeros
       - Compare with current maxOdd
       - Update maxOdd if larger
3. Return maxOdd

### DryRun Example (Brute Force):

Input: s = "021463"

```
Generating all substrings and checking:

Substrings starting at index 0:
"0" -> even (skip)
"02" -> even (skip)
"021" -> odd, remove leading zeros -> "21"
"0214" -> even (skip)
"02146" -> even (skip)
"021463" -> odd, remove leading zeros -> "21463"

Substrings starting at index 1:
"2" -> even (skip)
"21" -> odd -> "21"
"214" -> even (skip)
"2146" -> even (skip)
"21463" -> odd -> "21463"

Substrings starting at index 2:
"1" -> odd -> "1"
"14" -> even (skip)
"146" -> even (skip)
"1463" -> odd -> "1463"

Substrings starting at index 3:
"4" -> even (skip)
"46" -> even (skip)
"463" -> odd -> "463"

Substrings starting at index 4:
"6" -> even (skip)
"63" -> odd -> "63"

Substrings starting at index 5:
"3" -> odd -> "3"

Valid odd numbers: ["21", "21463", "21", "21463", "1", "1463", "463", "63", "3"]
Largest: "21463"
```

### Brute Force Code Solutions:

#### Java

```java
class Solution {
    public String largeOddNum(String s) {
        String maxOdd = "";
        int n = s.length();

        // Generate all possible substrings
        for (int i = 0; i < n; i++) {
            for (int j = i; j < n; j++) {
                String substring = s.substring(i, j + 1);

                // Check if substring represents an odd number
                if (isOdd(substring)) {
                    // Remove leading zeros
                    String cleaned = removeLeadingZeros(substring);

                    // Update maxOdd if current is larger
                    if (isLarger(cleaned, maxOdd)) {
                        maxOdd = cleaned;
                    }
                }
            }
        }

        return maxOdd;
    }

    private boolean isOdd(String num) {
        if (num.isEmpty()) return false;
        char lastDigit = num.charAt(num.length() - 1);
        return (lastDigit - '0') % 2 == 1;
    }

    private String removeLeadingZeros(String num) {
        int i = 0;
        while (i < num.length() && num.charAt(i) == '0') {
            i++;
        }
        return i == num.length() ? "" : num.substring(i);
    }

    private boolean isLarger(String num1, String num2) {
        if (num2.isEmpty()) return !num1.isEmpty();
        if (num1.isEmpty()) return false;
        if (num1.length() != num2.length()) {
            return num1.length() > num2.length();
        }
        return num1.compareTo(num2) > 0;
    }
}
```

#### JavaScript

```javascript
class Solution {
  largeOddNum(s) {
    let maxOdd = "";
    let n = s.length;

    // Generate all possible substrings
    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        let substring = s.substring(i, j + 1);

        // Check if substring represents an odd number
        if (this.isOdd(substring)) {
          // Remove leading zeros
          let cleaned = this.removeLeadingZeros(substring);

          // Update maxOdd if current is larger
          if (this.isLarger(cleaned, maxOdd)) {
            maxOdd = cleaned;
          }
        }
      }
    }

    return maxOdd;
  }

  isOdd(num) {
    if (num.length === 0) return false;
    let lastDigit = parseInt(num[num.length - 1]);
    return lastDigit % 2 === 1;
  }

  removeLeadingZeros(num) {
    let i = 0;
    while (i < num.length && num[i] === "0") {
      i++;
    }
    return i === num.length ? "" : num.substring(i);
  }

  isLarger(num1, num2) {
    if (num2 === "") return num1 !== "";
    if (num1 === "") return false;
    if (num1.length !== num2.length) {
      return num1.length > num2.length;
    }
    return num1 > num2;
  }
}
```

#### Python

```python
class Solution:
    def largeOddNum(self, s):
        max_odd = ""
        n = len(s)

        # Generate all possible substrings
        for i in range(n):
            for j in range(i, n):
                substring = s[i:j+1]

                # Check if substring represents an odd number
                if self.is_odd(substring):
                    # Remove leading zeros
                    cleaned = self.remove_leading_zeros(substring)

                    # Update max_odd if current is larger
                    if self.is_larger(cleaned, max_odd):
                        max_odd = cleaned

        return max_odd

    def is_odd(self, num):
        if not num:
            return False
        last_digit = int(num[-1])
        return last_digit % 2 == 1

    def remove_leading_zeros(self, num):
        i = 0
        while i < len(num) and num[i] == '0':
            i += 1
        return "" if i == len(num) else num[i:]

    def is_larger(self, num1, num2):
        if num2 == "":
            return num1 != ""
        if num1 == "":
            return False
        if len(num1) != len(num2):
            return len(num1) > len(num2)
        return num1 > num2
```

### Brute Force Complexity:

- **Time Complexity:** O(n³) - O(n²) substrings × O(n) string operations
- **Space Complexity:** O(n) - storing substrings and result

---

## Approach 2: Optimal Solution (Two Pointers - Greedy)

### Algorithm / Intuition

The optimal approach uses **greedy strategy** with **two pointers**:

1. **Find rightmost odd digit** - this ensures maximum length
2. **Find leftmost non-zero digit** - this removes leading zeros
3. **Extract substring** between these positions
4. **Single pass solution** with O(1) space

### Core Logic:

- The largest odd number must end at the rightmost odd digit
- To maximize value, we want the longest possible number
- Remove leading zeros by finding first non-zero character
- Greedy approach ensures optimal result

### Mathematical Reasoning:

```
Greedy Strategy Benefits:
- Rightmost odd digit: Ensures maximum possible length
- Remove leading zeros: Ensures valid number format
- Single pass: O(n) time complexity
- No extra space: O(1) space complexity
```

### Step-by-Step Algorithm:

1. Find the rightmost odd digit position (end pointer)
2. If no odd digit found, return empty string
3. Find the leftmost non-zero digit before end (start pointer)
4. Return substring from start to end (inclusive)

### DryRun Example (Optimal):

Input: s = "021463"

```
Step 1: Find rightmost odd digit (end pointer)
String: "021463"
Index:   012345

end = 5 (start from right)
s[5] = '3' -> 3 % 2 = 1 (odd) ✓
end = 5

Step 2: Find leftmost non-zero digit (start pointer)
String: "021463"
Index:   012345

start = 0
s[0] = '0' -> skip (leading zero)
start = 1
s[1] = '2' -> not zero, stop
start = 1

Step 3: Extract substring
s.substring(1, 6) = "21463"

Final Result: "21463"
```

### Optimal Code Solutions:

#### Java

```java
class Solution {
    public String largeOddNum(String s) {
        int n = s.length();

        // Find the rightmost odd digit to ensure maximum length
        int end = n - 1;
        while (end > -1 && s.charAt(end) % 2 == 0) {
            end--;
        }

        // If no odd digit found, return empty string
        if (end == -1) {
            return "";
        }

        // Find the leftmost non-zero digit to remove leading zeros
        int start = 0;
        while (start < end && s.charAt(start) == '0') {
            start++;
        }

        // Return substring from start to end (inclusive)
        return s.substring(start, end + 1);
    }
}
```

#### JavaScript

```javascript
class Solution {
  largeOddNum(s) {
    let n = s.length;

    // Find the rightmost odd digit to ensure maximum length
    let end = n - 1;
    while (end > -1 && s[end] % 2 == 0) {
      end--;
    }

    // If no odd digit found, return empty string
    if (end == -1) {
      return "";
    }

    // Find the leftmost non-zero digit to remove leading zeros
    let start = 0;
    while (start < end && s[start] == "0") {
      start++;
    }

    // Return substring from start to end (inclusive)
    return s.substring(start, end + 1);
  }
}
```

#### Python

```python
class Solution:
    def largeOddNum(self, s):
        # Find the rightmost odd digit to ensure maximum length
        end = len(s) - 1
        while end > -1 and int(s[end]) % 2 == 0:
            end -= 1

        # If no odd digit found, return empty string
        if end == -1:
            return ""

        # Find the leftmost non-zero digit to remove leading zeros
        start = 0
        while start < end and s[start] == '0':
            start += 1

        # Return substring from start to end (inclusive)
        return s[start:end + 1]
```

### Optimal Complexity:

- **Time Complexity:** O(n) - single pass through the string
- **Space Complexity:** O(1) - only using constant extra space

---

## Approach 3: Built-in Methods (Language-Specific)

### Alternative Solutions Using Language Features:

#### Java (Using StringBuilder and streams)

```java
class Solution {
    public String largeOddNum(String s) {
        // Find rightmost odd digit
        int lastOddIndex = -1;
        for (int i = s.length() - 1; i >= 0; i--) {
            if (Character.getNumericValue(s.charAt(i)) % 2 == 1) {
                lastOddIndex = i;
                break;
            }
        }

        if (lastOddIndex == -1) return "";

        // Remove leading zeros and return
        String result = s.substring(0, lastOddIndex + 1);
        return result.replaceFirst("^0+(?!$)", "");
    }
}
```

#### JavaScript (Using array methods)

```javascript
class Solution {
  largeOddNum(s) {
    // Find rightmost odd digit
    let lastOddIndex = -1;
    for (let i = s.length - 1; i >= 0; i--) {
      if (parseInt(s[i]) % 2 === 1) {
        lastOddIndex = i;
        break;
      }
    }

    if (lastOddIndex === -1) return "";

    // Remove leading zeros using regex
    let result = s.substring(0, lastOddIndex + 1);
    return result.replace(/^0+(?!$)/, "");
  }
}
```

#### Python (Using string methods)

```python
class Solution:
    def largeOddNum(self, s):
        # Find rightmost odd digit
        last_odd_index = -1
        for i in range(len(s) - 1, -1, -1):
            if int(s[i]) % 2 == 1:
                last_odd_index = i
                break

        if last_odd_index == -1:
            return ""

        # Remove leading zeros using lstrip
        result = s[:last_odd_index + 1]
        return result.lstrip('0') or '0'
```

---

## Approach 4: Recursive Solution

### Algorithm / Intuition

Recursive approach breaks the problem into smaller subproblems:

1. **Base case:** If string is empty or no odd digits
2. **Find odd digits** recursively
3. **Combine results** to form largest odd number

### Recursive Code Solutions:

#### Java

```java
class Solution {
    public String largeOddNum(String s) {
        return findLargestOddRecursive(s, s.length() - 1, 0);
    }

    private String findLargestOddRecursive(String s, int end, int start) {
        // Find rightmost odd digit
        if (end < 0) return "";

        if ((s.charAt(end) - '0') % 2 == 1) {
            // Found odd digit, now find start position
            return removeLeadingZeros(s, start, end);
        }

        // Recursively search for odd digit
        return findLargestOddRecursive(s, end - 1, start);
    }

    private String removeLeadingZeros(String s, int start, int end) {
        if (start > end) return "";
        if (s.charAt(start) != '0') {
            return s.substring(start, end + 1);
        }
        return removeLeadingZeros(s, start + 1, end);
    }
}
```

### Recursive Complexity:

- **Time Complexity:** O(n) - each character processed once
- **Space Complexity:** O(n) - recursion stack depth

---

## Complexity Analysis Summary

| Approach              | Time Complexity | Space Complexity | Pros               | Cons                 |
| --------------------- | --------------- | ---------------- | ------------------ | -------------------- |
| Brute Force           | O(n³)           | O(n)             | Simple logic       | Very inefficient     |
| Two Pointers (Greedy) | O(n)            | O(1)             | Optimal, intuitive | None                 |
| Built-in Methods      | O(n)            | O(1)             | Concise code       | Language-dependent   |
| Recursive             | O(n)            | O(n)             | Elegant recursion  | Stack space overhead |

---

## Edge Cases to Consider

1. **No Odd Digits:** All digits are even
2. **All Odd Digits:** Entire string is the answer
3. **Leading Zeros:** String starts with multiple zeros
4. **Single Digit:** String contains only one digit
5. **All Zeros:** String contains only zeros
6. **Mixed Cases:** Combination of various scenarios

## Detailed Edge Case Analysis

```java
// Edge cases with step-by-step analysis
Input: s = "24680"        → Output: "" (no odd digits)
Input: s = "13579"        → Output: "13579" (all odd digits)
Input: s = "000135"       → Output: "135" (leading zeros removed)
Input: s = "5"            → Output: "5" (single odd digit)
Input: s = "6"            → Output: "" (single even digit)
Input: s = "0000"         → Output: "" (all zeros)
Input: s = "102030"       → Output: "" (ends with even)
Input: s = "102031"       → Output: "102031" (ends with odd)
```

---

## Test Cases

```java
public void testLargeOddNum() {
    Solution sol = new Solution();

    // Basic examples
    assertEquals("5347", sol.largeOddNum("5347"));
    assertEquals("21463", sol.largeOddNum("021463"));
    assertEquals("32579", sol.largeOddNum("0032579"));
    assertEquals("", sol.largeOddNum("24680"));

    // Edge cases
    assertEquals("1", sol.largeOddNum("1"));              // Single odd digit
    assertEquals("", sol.largeOddNum("2"));               // Single even digit
    assertEquals("", sol.largeOddNum("0000"));            // All zeros
    assertEquals("13579", sol.largeOddNum("13579"));      // All odd digits
    assertEquals("", sol.largeOddNum("24680"));           // All even digits
    assertEquals("135", sol.largeOddNum("000135"));       // Leading zeros
    assertEquals("1", sol.largeOddNum("0001"));           // Single digit with leading zeros

    // Complex cases
    assertEquals("12345", sol.largeOddNum("123456"));     // Mixed digits ending odd
    assertEquals("", sol.largeOddNum("123456"));          // Mixed digits ending even
    assertEquals("9", sol.largeOddNum("0009"));           // Leading zeros with single odd
}
```

---

## Step-by-Step Visualization

### Two Pointers Approach: s = "021463"

```
Step 1: Find rightmost odd digit (end pointer)
String: "0 2 1 4 6 3"
Index:   0 1 2 3 4 5
                   ↑
                 end=5

Check from right to left:
s[5] = '3' → 3 % 2 = 1 (odd) ✓ Found!
end = 5

Step 2: Find leftmost non-zero digit (start pointer)
String: "0 2 1 4 6 3"
Index:   0 1 2 3 4 5
         ↑         ↑
       start=0   end=5

Check from left:
s[0] = '0' → leading zero, skip
start = 1
s[1] = '2' → not zero, stop
start = 1

Step 3: Extract result
substring(1, 6) = "21463"

Final: "21463"
```

### Edge Case: s = "24680" (No odd digits)

```
Step 1: Find rightmost odd digit
String: "2 4 6 8 0"
Index:   0 1 2 3 4
               ↑
             end=4

Check from right to left:
s[4] = '0' → 0 % 2 = 0 (even)
s[3] = '8' → 8 % 2 = 0 (even)
s[2] = '6' → 6 % 2 = 0 (even)
s[1] = '4' → 4 % 2 = 0 (even)
s[0] = '2' → 2 % 2 = 0 (even)

No odd digit found → end = -1
Return ""
```

---

## Mathematical Properties

### 1. Greedy Strategy

- **Rightmost odd position:** Maximizes length of result
- **Leftmost non-zero:** Ensures no leading zeros
- **Optimal substructure:** Local optimal choices lead to global optimum

### 2. Number Properties

- **Odd numbers:** End with digits 1, 3, 5, 7, 9
- **Leading zeros:** Don't affect numerical value but must be removed
- **Substring property:** Any substring of a valid number is also valid

### 3. String Operations

- **Single pass efficiency:** O(n) time complexity
- **In-place processing:** O(1) space complexity
- **Early termination:** Stop when odd digit found

---

## Common Mistakes to Avoid

1. **Wrong search direction:** Searching from left for last odd digit
2. **Leading zero handling:** Not removing leading zeros properly
3. **Empty result:** Not handling case when no odd digits exist
4. **Index bounds:** Off-by-one errors in substring extraction
5. **Character conversion:** Incorrect digit to integer conversion

### Common Error Examples:

```java
// Wrong: Searching from left for odd digit
for (int i = 0; i < n; i++) { // Should search from right
    if (s.charAt(i) % 2 == 1) {
        end = i; // This won't give maximum length
        break;
    }
}

// Wrong: Not handling empty result
return s.substring(start, end + 1); // Could be invalid if end = -1

// Wrong: Incorrect character to digit conversion
if (s.charAt(i) % 2 == 1) // Should be (s.charAt(i) - '0') % 2 == 1

// Wrong: Not removing leading zeros properly
while (start < n && s.charAt(start) == '0') { // Should be start < end

// Correct: Proper implementation
int end = n - 1;
while (end > -1 && (s.charAt(end) - '0') % 2 == 0) {
    end--;
}
if (end == -1) return "";

int start = 0;
while (start < end && s.charAt(start) == '0') {
    start++;
}
return s.substring(start, end + 1);
```

---

## Performance Optimization

### 1. Early Termination Benefits

```java
// The greedy approach provides excellent early termination
public String largeOddNum(String s) {
    int end = s.length() - 1;

    // Early exit if no odd digit found
    while (end > -1 && (s.charAt(end) - '0') % 2 == 0) {
        end--;
    }

    if (end == -1) {
        return ""; // Early termination saves unnecessary work
    }

    // Continue only if odd digit exists
    // ... rest of the logic
}
```

### 2. Efficient Character Processing

```java
// Direct character arithmetic is faster than conversion
char digit = s.charAt(i);
boolean isOdd = (digit - '0') % 2 == 1; // Faster than Integer.parseInt()
```

---

## Real-World Applications

1. **Financial Systems:** Finding largest valid account numbers
2. **Database Queries:** Extracting maximum values from string fields
3. **Data Processing:** Cleaning and validating numerical strings
4. **Game Development:** Score processing and leaderboard systems
5. **Text Processing:** Extracting numerical information from documents
6. **Validation Systems:** Input sanitization and format checking

---

## Related Problems

1. **Largest Number:** Arrange digits to form largest number
2. **Remove K Digits:** Remove k digits to make smallest number
3. **Valid Number:** Validate if string represents valid number
4. **String to Integer (atoi):** Convert string to integer
5. **Compare Version Numbers:** Compare two version number strings
6. **Add Strings:** Add two numbers represented as strings

---
