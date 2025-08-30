# Jewels and Stones

### Difficulty: `Easy`

### **Practice Links:**
- **[LeetCode - Jewels and Stones](https://leetcode.com/problems/jewels-and-stones/)**

## Problem Statement

You're given strings `jewels` representing the types of stones that are jewels, and `stones` representing the stones you have. Each character in `stones` is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are **case sensitive**, so `"a"` is considered a different type of stone from `"A"`.

## Mathematical Definition

For strings jewels and stones, count the number of characters in stones that also appear in jewels:
- **Case sensitive matching required**

## Examples

```txt
Example 1:
Input:  jewels = "aA", stones = "aAAbbbb"
Output: 3
Explanation: The stones "a", "A", "A" are jewels. Total count = 3.

Example 2:
Input:  jewels = "z", stones = "ZZ"
Output: 0
Explanation: No stones match jewels (case sensitive).

Example 3:
Input:  jewels = "aAbBcC", stones = "aabbcc"
Output: 6
Explanation: All stones "a", "a", "b", "b", "c", "c" are jewels.

Example 4:
Input:  jewels = "Aa", stones = "aAABBb"
Output: 4
Explanation: Stones "a", "A", "A" match jewels. "B", "B", "b" don't match.

Example 5:
Input:  jewels = "xyz", stones = "abc"
Output: 0
Explanation: No common characters between jewels and stones.
```

## Constraints

- 1 ≤ jewels.length, stones.length ≤ 50
- jewels and stones consist of only English letters
- All the characters of jewels are **unique**

## Key Concepts

- **Set/Hash Set:** Efficient lookup for character membership
- **Case Sensitivity:** 'a' and 'A' are different characters
- **Character Iteration:** Process each character in strings
- **Counting:** Track total matches found

---

## Approach 1: Brute Force Solution

### Algorithm / Intuition

The brute force approach checks each stone against every jewel type:
1. **For each stone** in the stones string
2. **Search through all jewels** to see if current stone is a jewel
3. **Increment counter** if match found
4. **Return total count** of matching stones

### Core Logic:
- Nested loops to compare each stone with each jewel
- Linear search for each stone character
- Simple but inefficient for larger inputs

### Step-by-Step Algorithm:
1. Initialize `count = 0`
2. For each character `stone` in stones:
   - For each character `jewel` in jewels:
     - If `stone == jewel`, increment count and break inner loop
3. Return `count`

### DryRun Example (Brute Force):

Input: jewels = "aA", stones = "aAAbbbb"

```
Initial: count = 0

stone = 'a' (index 0):
  Check jewel 'a': 'a' == 'a' ✓ → count = 1, break
  
stone = 'A' (index 1):
  Check jewel 'a': 'A' != 'a' ✗
  Check jewel 'A': 'A' == 'A' ✓ → count = 2, break
  
stone = 'A' (index 2):
  Check jewel 'a': 'A' != 'a' ✗
  Check jewel 'A': 'A' == 'A' ✓ → count = 3, break
  
stone = 'b' (index 3):
  Check jewel 'a': 'b' != 'a' ✗
  Check jewel 'A': 'b' != 'A' ✗ → no increment
  
stone = 'b' (index 4):
  Check jewel 'a': 'b' != 'a' ✗
  Check jewel 'A': 'b' != 'A' ✗ → no increment
  
stone = 'b' (index 5):
  Check jewel 'a': 'b' != 'a' ✗
  Check jewel 'A': 'b' != 'A' ✗ → no increment
  
stone = 'b' (index 6):
  Check jewel 'a': 'b' != 'a' ✗
  Check jewel 'A': 'b' != 'A' ✗ → no increment

Final: count = 3
```

### Brute Force Code Solutions:

#### Java

```java
class Solution {
    public int numJewelsInStones(String jewels, String stones) {
        // Initialize counter for matching stones
        int count = 0;
        
        // Check each stone against all jewel types
        for (int i = 0; i < stones.length(); i++) {
            char stone = stones.charAt(i);
            
            // Search for current stone in jewels string
            for (int j = 0; j < jewels.length(); j++) {
                char jewel = jewels.charAt(j);
                
                // If stone matches any jewel type, count it
                if (stone == jewel) {
                    count++;
                    break; // Found match, no need to check other jewels
                }
            }
        }
        
        return count;
    }
}
```

#### JavaScript

```javascript
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    // Initialize counter for matching stones
    let count = 0;
    
    // Check each stone against all jewel types
    for (let i = 0; i < stones.length; i++) {
        let stone = stones[i];
        
        // Search for current stone in jewels string
        for (let j = 0; j < jewels.length; j++) {
            let jewel = jewels[j];
            
            // If stone matches any jewel type, count it
            if (stone === jewel) {
                count++;
                break; // Found match, no need to check other jewels
            }
        }
    }
    
    return count;
};
```

#### Python

```python
class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        # Initialize counter for matching stones
        count = 0
        
        # Check each stone against all jewel types
        for stone in stones:
            # Search for current stone in jewels string
            for jewel in jewels:
                # If stone matches any jewel type, count it
                if stone == jewel:
                    count += 1
                    break  # Found match, no need to check other jewels
        
        return count
```

### Brute Force Complexity:
- **Time Complexity:** O(n × m) where n = stones.length, m = jewels.length
- **Space Complexity:** O(1) - only using constant extra space

---

## Approach 2: Optimal Solution (Hash Set)

### Algorithm / Intuition

The optimal approach uses a **hash set** to efficiently check jewel membership:
1. **First pass:** Store all jewel characters in a hash set
2. **Second pass:** For each stone, check if it exists in jewel set
3. **Constant time lookup** makes this approach much faster
4. **Single scan** through stones with O(1) jewel lookup

### Core Logic:
- Use hash set for O(1) average lookup time
- Build jewel set once, then process all stones
- Eliminate nested loops for better performance

### Mathematical Reasoning:
```
Hash Set Benefits:
- Insert: O(1) average time
- Lookup: O(1) average time  
- No repeated linear searches needed
- Clear separation: build set first, then count
```

### Step-by-Step Algorithm:
1. Create empty hash set
2. For each character in jewels string:
   - Add character to hash set
3. Initialize `count = 0`
4. For each character in stones string:
   - If character exists in hash set, increment count
5. Return count

### DryRun Example (Optimal):

Input: jewels = "aA", stones = "aAAbbbb"

```
Phase 1 - Build jewel set:
jewelSet = {}

char = 'a': jewelSet = {'a'}
char = 'A': jewelSet = {'a', 'A'}

Phase 2 - Count matching stones:
count = 0

stone = 'a': 'a' in jewelSet ✓ → count = 1
stone = 'A': 'A' in jewelSet ✓ → count = 2  
stone = 'A': 'A' in jewelSet ✓ → count = 3
stone = 'b': 'b' in jewelSet ✗ → count = 3
stone = 'b': 'b' in jewelSet ✗ → count = 3
stone = 'b': 'b' in jewelSet ✗ → count = 3
stone = 'b': 'b' in jewelSet ✗ → count = 3

Final Result: 3
```

### Optimal Code Solutions:

#### Java

```java
class Solution {
    public int numJewelsInStones(String jewels, String stones) {
        // Create hash set to store all jewel characters for O(1) lookup
        Set<Character> jewelset = new HashSet<>();
        
        // Initialize counter for matching stones
        int count = 0;
        
        // First pass: Build jewel set from jewels string
        for (char ch : jewels.toCharArray()) {
            jewelset.add(ch);
        }
        
        // Second pass: Check each stone against jewel set
        for (char ch : stones.toCharArray()) {
            // If current stone is a jewel type, increment counter
            if (jewelset.contains(ch))
                count++;
        }
        
        return count;
    }
}
```

#### JavaScript

```javascript
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    // Create hash set to store all jewel characters for O(1) lookup
    let set = new Set();
    
    // First pass: Build jewel set from jewels string
    for (let ch of jewels) {
        set.add(ch);
    }
    
    // Initialize counter for matching stones
    let count = 0;
    
    // Second pass: Check each stone against jewel set
    for (let ch of stones) {
        // If current stone is a jewel type, increment counter
        if (set.has(ch)) {
            count++;
        }
    }
    
    return count;
};
```

#### Python

```python
class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        # Create hash set to store all jewel characters for O(1) lookup
        jewelSet = set()
        count = 0
        
        # First pass: Build jewel set from jewels string
        for char in jewels:
            jewelSet.add(char)
        
        # Second pass: Check each stone against jewel set
        for char in stones:
            # If current stone is a jewel type, increment counter
            if (char in jewelSet):
                count += 1
        
        return count
```

### Optimal Complexity:
- **Time Complexity:** O(n + m) where n = stones.length, m = jewels.length
- **Space Complexity:** O(m) for storing jewel characters in hash set

---

## Approach 3: Using Built-in Functions

### Alternative Solutions Using Language Features:

#### Java (Using Streams)

```java
import java.util.stream.Collectors;

class Solution {
    public int numJewelsInStones(String jewels, String stones) {
        // Convert jewels to character set using streams
        Set<Integer> jewelSet = jewels.chars().boxed().collect(Collectors.toSet());
        
        // Count stones that are jewels using streams
        return (int) stones.chars().filter(jewelSet::contains).count();
    }
}
```

#### JavaScript (Using filter and includes)

```javascript
var numJewelsInStones = function(jewels, stones) {
    // Use filter and includes for functional approach
    return stones.split('').filter(stone => jewels.includes(stone)).length;
};
```

#### Python (Using sum and generator expression)

```python
class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        # Convert jewels to set and use sum with generator expression
        jewel_set = set(jewels)
        return sum(1 for stone in stones if stone in jewel_set)
```

---

## Approach 4: Character Array/ASCII Approach

### Algorithm / Intuition

For problems with limited character set (English letters), use array indexing:
1. **Create boolean array** of size 128 (ASCII characters)
2. **Mark jewel characters** as true in array
3. **Check stones** using array indexing
4. **Faster than hash set** due to direct array access

### ASCII-Based Code Solutions:

#### Java

```java
class Solution {
    public int numJewelsInStones(String jewels, String stones) {
        // Create boolean array for ASCII characters (0-127)
        boolean[] isJewel = new boolean[128];
        
        // Mark all jewel characters as true
        for (char c : jewels.toCharArray()) {
            isJewel[c] = true;
        }
        
        int count = 0;
        // Check each stone using direct array access
        for (char c : stones.toCharArray()) {
            if (isJewel[c]) {
                count++;
            }
        }
        
        return count;
    }
}
```

### ASCII Complexity:
- **Time Complexity:** O(n + m) - similar to hash set but potentially faster
- **Space Complexity:** O(1) - fixed size array (128 elements)

---

## Complexity Analysis Summary

| Approach              | Time Complexity | Space Complexity | Pros                    | Cons                    |
|-----------------------|-----------------|------------------|-------------------------|-------------------------|
| Brute Force           | O(n × m)        | O(1)             | Simple, no extra space  | Slow for large inputs   |
| Hash Set (Optimal)    | O(n + m)        | O(m)             | Fast, clear logic       | Hash set overhead       |
| ASCII Array           | O(n + m)        | O(1)             | Fastest, fixed space    | Limited to ASCII        |
| Built-in Functions    | O(n + m)        | O(m)             | Concise code           | Language-dependent      |

---

## Edge Cases to Consider

1. **Empty Strings:** Handle empty jewels or stones
2. **No Matches:** No stones are jewels
3. **All Matches:** All stones are jewels
4. **Case Sensitivity:** 'a' vs 'A' are different
5. **Single Characters:** Strings with one character
6. **Duplicate Jewels:** Though constraints say unique, handle gracefully

## Detailed Edge Case Analysis

```java
// Edge cases with step-by-step analysis
Input: jewels = "", stones = "abc"     → Output: 0 (no jewels)
Input: jewels = "a", stones = ""       → Output: 0 (no stones)
Input: jewels = "abc", stones = "xyz"  → Output: 0 (no matches)
Input: jewels = "aA", stones = "aA"    → Output: 2 (all match)
Input: jewels = "a", stones = "A"      → Output: 0 (case sensitive)
Input: jewels = "z", stones = "z"      → Output: 1 (single match)
```

---

## Test Cases

```java
public void testNumJewelsInStones() {
    Solution sol = new Solution();
    
    // Basic examples
    assert sol.numJewelsInStones("aA", "aAAbbbb") == 3;          // Mixed case
    assert sol.numJewelsInStones("z", "ZZ") == 0;                // Case sensitive
    
    // Edge cases
    assert sol.numJewelsInStones("", "abc") == 0;                // Empty jewels
    assert sol.numJewelsInStones("a", "") == 0;                  // Empty stones
    assert sol.numJewelsInStones("abc", "xyz") == 0;             // No matches
    
    // All matches
    assert sol.numJewelsInStones("abc", "abcabc") == 6;          // All stones are jewels
    assert sol.numJewelsInStones("aA", "aA") == 2;               // Exact match
    
    // Case sensitivity
    assert sol.numJewelsInStones("a", "aA") == 1;                // Only lowercase matches
    assert sol.numJewelsInStones("A", "aA") == 1;                // Only uppercase matches
    
    // Single characters
    assert sol.numJewelsInStones("x", "x") == 1;                 // Single match
    assert sol.numJewelsInStones("x", "y") == 0;                 // Single no match
    
    // Repeated stones
    assert sol.numJewelsInStones("a", "aaaa") == 4;              // Multiple same stones
    assert sol.numJewelsInStones("ab", "ababab") == 6;           // Multiple different stones
}
```

---

## Step-by-Step Visualization

### Hash Set Approach: jewels = "aA", stones = "aAAbbbb"

```
Phase 1 - Building Jewel Set:

Step 1: char = 'a'
        jewelSet = {'a'}

Step 2: char = 'A'  
        jewelSet = {'a', 'A'}

Phase 2 - Counting Matching Stones:

Initial: count = 0

Step 1: stone = 'a' → 'a' in jewelSet ✓ → count = 1
Step 2: stone = 'A' → 'A' in jewelSet ✓ → count = 2  
Step 3: stone = 'A' → 'A' in jewelSet ✓ → count = 3
Step 4: stone = 'b' → 'b' in jewelSet ✗ → count = 3
Step 5: stone = 'b' → 'b' in jewelSet ✗ → count = 3
Step 6: stone = 'b' → 'b' in jewelSet ✗ → count = 3
Step 7: stone = 'b' → 'b' in jewelSet ✗ → count = 3

Final Result: 3
```

### Case Sensitivity Example: jewels = "a", stones = "aA"

```
Phase 1 - Building Jewel Set:
jewelSet = {'a'}

Phase 2 - Counting:

Step 1: stone = 'a' → 'a' in jewelSet ✓ → count = 1
Step 2: stone = 'A' → 'A' in jewelSet ✗ → count = 1

Final Result: 1 (case sensitivity matters)
```

---

## Mathematical Properties

### 1. Character Matching
- **Exact Match Required:** Character must be identical (case-sensitive)
- **Membership Test:** Each stone checked against jewel set
- **Counting Principle:** Sum of individual matches

### 2. Set Operations
- **Set Construction:** O(m) time to build jewel set
- **Membership Query:** O(1) average time for hash set lookup
- **Total Operations:** n membership queries where n = stones.length

### 3. Case Sensitivity Impact
- **Different Characters:** 'a' ≠ 'A' in ASCII (97 vs 65)
- **Separate Tracking:** Uppercase and lowercase treated independently
- **No Conversion:** Direct character comparison without case conversion

---

## Common Mistakes to Avoid

1. **Case Sensitivity:** Forgetting that 'a' and 'A' are different
2. **Set Building:** Not storing jewels in set for efficient lookup
3. **String Indexing:** Using inefficient string methods repeatedly
4. **Empty Input:** Not handling empty strings properly
5. **Early Exit:** Missing break statement in brute force approach

### Common Error Examples:

```java
// Wrong: Case insensitive comparison
if (Character.toLowerCase(stone) == Character.toLowerCase(jewel)) // Incorrect

// Wrong: Not using set for efficiency
for (char jewel : jewels.toCharArray()) { // O(n*m) instead of O(n+m)
    if (stone == jewel) count++;
}

// Wrong: Multiple jewels.contains() calls
for (char stone : stones.toCharArray()) {
    if (jewels.contains(String.valueOf(stone))) count++; // Inefficient
}

// Correct: Use hash set
Set<Character> jewelSet = new HashSet<>();
for (char jewel : jewels.toCharArray()) {
    jewelSet.add(jewel);
}
for (char stone : stones.toCharArray()) {
    if (jewelSet.contains(stone)) count++;
}
```

---

## Optimization Techniques

### 1. Early Termination (Limited Benefit)

```java
// If we know maximum possible count
public int numJewelsInStonesOptimized(String jewels, String stones, int maxExpected) {
    Set<Character> jewelSet = new HashSet<>();
    for (char c : jewels.toCharArray()) {
        jewelSet.add(c);
    }
    
    int count = 0;
    for (char c : stones.toCharArray()) {
        if (jewelSet.contains(c)) {
            count++;
            if (count == maxExpected) return count; // Early exit
        }
    }
    return count;
}
```

### 2. Bit Manipulation (For Limited Character Set)

```java
// Using bitwise operations for English letters only
public int numJewelsInStonesBitwise(String jewels, String stones) {
    long jewelMask = 0;
    
    // Set bits for jewel characters
    for (char c : jewels.toCharArray()) {
        if (c >= 'a' && c <= 'z') {
            jewelMask |= 1L << (c - 'a');
        } else if (c >= 'A' && c <= 'Z') {
            jewelMask |= 1L << (c - 'A' + 26);
        }
    }
    
    int count = 0;
    for (char c : stones.toCharArray()) {
        int bit = 0;
        if (c >= 'a' && c <= 'z') {
            bit = c - 'a';
        } else if (c >= 'A' && c <= 'Z') {
            bit = c - 'A' + 26;
        }
        
        if ((jewelMask & (1L << bit)) != 0) {
            count++;
        }
    }
    
    return count;
}
```

---

## Performance Analysis

### Time Complexity Breakdown:
```
Hash Set Approach:
- Building jewel set: O(m) where m = jewels.length
- Counting stones: O(n) where n = stones.length
- Total: O(n + m)

Space Usage:
- Hash set storage: O(m) for jewel characters
- Additional variables: O(1)
- Total space: O(m)
```

### Comparison of Approaches:
```
For jewels.length = 50, stones.length = 50:
- Brute Force: ~2,500 character comparisons
- Hash Set: ~100 operations (50 inserts + 50 lookups)
- ASCII Array: ~100 operations with faster access
```

---

## Real-World Applications

1. **Character Classification:** Identifying special characters in text
2. **Data Validation:** Checking if input contains valid characters
3. **Text Processing:** Filtering characters based on criteria
4. **Game Development:** Counting specific item types in inventory
5. **Security:** Validating allowed characters in passwords
6. **Parsing:** Tokenizing based on character sets

---

## Related Problems

1. **Unique Characters:** Check if string has unique characters
2. **Character Frequency:** Count frequency of each character
3. **Valid Anagram:** Check if two strings are anagrams
4. **Intersection of Arrays:** Find common elements in arrays
5. **Longest Substring:** Find longest substring with specific characters
6. **Valid Palindrome:** Check palindrome with character filtering

---

## Variations and Extensions

### 1. Count Each Jewel Type Separately

```java
public Map<Character, Integer> countEachJewelType(String jewels, String stones) {
    Set<Character> jewelSet = new HashSet<>();
    for (char c : jewels.toCharArray()) {
        jewelSet.add(c);
    }
    
    Map<Character, Integer> jewelCount = new HashMap<>();
    for (char c : stones.toCharArray()) {
        if (jewelSet.contains(c)) {
            jewelCount.put(c, jewelCount.getOrDefault(c, 0) + 1);
        }
    }
    
    return jewelCount;
}
```

### 2. Find Most Valuable Stone Type

```java
public char mostValuableStoneType(String jewels, String stones) {
    Set<Character> jewelSet = new HashSet<>();
    for (char c : jewels.toCharArray()) {
        jewelSet.add(c);
    }
    
    Map<Character, Integer> count = new HashMap<>();
    for (char c : stones.toCharArray()) {
        if (jewelSet.contains(c)) {
            count.put(c, count.getOrDefault(c, 0) + 1);
        }
    }
    
    return count.entrySet().stream()
                .max(Map.Entry.comparingByValue())
                .map(Map.Entry::getKey)
                .orElse('\0');
}
```

### 3. Case Insensitive Version

```java
public int numJewelsInStonesCaseInsensitive(String jewels, String stones) {
    Set<Character> jewelSet = new HashSet<>();
    
    // Add both uppercase and lowercase versions
    for (char c : jewels.toCharArray()) {
        jewelSet.add(Character.toLowerCase(c));
        jewelSet.add(Character.toUpperCase(c));
    }
    
    int count = 0;
    for (char c : stones.toCharArray()) {
        if (jewelSet.contains(c)) {
            count++;
        }
    }
    
    return count;
}
```

---

## Interview Tips

### 1. Clarification Questions
- "Are the comparisons case-sensitive?"
- "Can jewels string contain duplicate characters?"
- "What's the expected range of input sizes?"
- "Should I optimize for time or space?"

### 2. Solution Progression
1. **Start with brute force:** Show understanding of problem
2. **Identify inefficiency:** Explain why nested loops are slow
3. **Propose hash set:** Demonstrate knowledge of data structures
4. **Consider alternatives:** ASCII array for character-limited inputs

### 3. Code Quality
- **Clear variable names:** `jewelSet`, `count`, `stone`
- **Proper comments:** Explain each phase of algorithm
- **Handle edge cases:** Empty strings, no matches
- **Clean structure:** Separate building set from counting

---

This problem demonstrates the fundamental concept of using appropriate data structures (hash sets) to optimize lookup operations, transforming an O(n×m) brute force solution into an efficient O(n+m) solution. The case sensitivity requirement adds an important detail that tests attention to problem constraints.