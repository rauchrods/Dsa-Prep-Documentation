# Highest Occurring Element in an Array

### Difficulty: `Easy`

### **Practice Links:**
- **[TakeUForward - Find the Highest/Lowest Frequency Element](https://takeuforward.org/arrays/find-the-highest-lowest-frequency-element/)**
- **[GeeksforGeeks - Most Frequent Element in an Array](https://www.geeksforgeeks.org/problems/most-frequent-element-in-an-array/1)**

## Problem Statement

Given an array of **n integers**, find the **most frequent element** in it i.e., the element that occurs the **maximum number of times**. If there are **multiple elements** that appear a maximum number of times, find the **smallest of them**.

## Mathematical Definition

For an array arr[0, 1, 2, ..., n-1], find element x such that:
- **Frequency(x) = maximum frequency among all elements**
- **If multiple elements have same maximum frequency, return the smallest element**

## Examples

```txt
Example 1:
Input:  arr = [1, 2, 2, 3, 3, 3]
Output: 3
Explanation: The number 3 appears the most (3 times). It is the most frequent element.

Example 2:
Input:  arr = [4, 4, 5, 5, 6]
Output: 4
Explanation: Both 4 and 5 appear twice, but 4 is smaller. So, 4 is the most frequent element.

Example 3:
Input:  arr = [7]
Output: 7
Explanation: Single element array, so 7 is the most frequent element.

Example 4:
Input:  arr = [1, 2, 3, 4, 5]
Output: 1
Explanation: All elements appear once, so smallest element 1 is returned.

Example 5:
Input:  arr = [5, 3, 5, 3, 1, 1, 1]
Output: 1
Explanation: Element 1 appears 3 times, which is maximum frequency.
```

## Constraints

- 1 ≤ n ≤ 10^6
- -10^9 ≤ arr[i] ≤ 10^9
- Array can contain positive, negative, or zero values
- Duplicate elements are allowed

## Key Concepts

- **Frequency Counting:** Track how many times each element appears
- **Hash Map/Dictionary:** Efficient storage for frequency mapping
- **Tie-Breaking:** When multiple elements have same max frequency, choose smallest
- **Single Pass:** Count frequencies and find maximum in separate phases

---

## Approach 1: Brute Force Solution

### Algorithm / Intuition

The brute force approach counts frequency of each element by scanning the entire array:
1. **For each unique element** in the array
2. **Count its frequency** by scanning the entire array
3. **Track maximum frequency** and corresponding element
4. **Handle tie-breaking** by choosing smaller element

### Core Logic:
- Nested loops to count frequency of each element
- For each element, scan entire array to count occurrences
- Keep track of element with maximum frequency
- If frequencies are equal, choose smaller element

### Step-by-Step Algorithm:
1. Initialize `maxFreq = 0` and `result = first element`
2. For each index i from 0 to n-1:
   - Initialize `currentFreq = 0`
   - For each index j from 0 to n-1:
     - If `arr[j] == arr[i]`, increment `currentFreq`
   - If `currentFreq > maxFreq` OR (`currentFreq == maxFreq` AND `arr[i] < result`):
     - Update `maxFreq = currentFreq` and `result = arr[i]`
3. Return `result`

### DryRun Example (Brute Force):

Input: arr = [4, 4, 5, 5, 6]

```
Initial: maxFreq = 0, result = 4

i = 0, arr[0] = 4:
  Count frequency of 4:
  j = 0: arr[0] = 4 == 4 → currentFreq = 1
  j = 1: arr[1] = 4 == 4 → currentFreq = 2  
  j = 2: arr[2] = 5 != 4 → currentFreq = 2
  j = 3: arr[3] = 5 != 4 → currentFreq = 2
  j = 4: arr[4] = 6 != 4 → currentFreq = 2
  
  currentFreq = 2 > maxFreq = 0 → Update: maxFreq = 2, result = 4

i = 1, arr[1] = 4:
  Count frequency of 4: (same as above)
  currentFreq = 2, but we've already processed 4

i = 2, arr[2] = 5:
  Count frequency of 5:
  j = 0: arr[0] = 4 != 5 → currentFreq = 0
  j = 1: arr[1] = 4 != 5 → currentFreq = 0
  j = 2: arr[2] = 5 == 5 → currentFreq = 1
  j = 3: arr[3] = 5 == 5 → currentFreq = 2
  j = 4: arr[4] = 6 != 5 → currentFreq = 2
  
  currentFreq = 2 == maxFreq = 2 AND 5 > 4 → No update

i = 3, arr[3] = 5: (already processed)
i = 4, arr[4] = 6:
  Count frequency of 6:
  Only appears once → currentFreq = 1 < maxFreq = 2 → No update

Final: result = 4
```

### Brute Force Code Solutions:

#### Java

```java
class Solution {
    public int mostFrequentElement(int[] nums) {
        // Initialize with first element as candidate
        int maxFreq = 0;
        int result = nums[0];
        
        // Check frequency of each element in the array
        for (int i = 0; i < nums.length; i++) {
            // Count frequency of current element nums[i]
            int currentFreq = 0;
            
            // Scan entire array to count occurrences of nums[i]
            for (int j = 0; j < nums.length; j++) {
                if (nums[j] == nums[i]) {
                    currentFreq++;
                }
            }
            
            // Update result if current element has higher frequency
            // or same frequency but smaller value
            if (currentFreq > maxFreq) {
                maxFreq = currentFreq;
                result = nums[i];
            } else if (currentFreq == maxFreq && nums[i] < result) {
                result = nums[i];
            }
        }
        
        return result;
    }
}
```

#### JavaScript

```javascript
class Solution {
    mostFrequentElement(nums) {
        // Initialize with first element as candidate
        let maxFreq = 0;
        let result = nums[0];
        
        // Check frequency of each element in the array
        for (let i = 0; i < nums.length; i++) {
            // Count frequency of current element nums[i]
            let currentFreq = 0;
            
            // Scan entire array to count occurrences of nums[i]
            for (let j = 0; j < nums.length; j++) {
                if (nums[j] === nums[i]) {
                    currentFreq++;
                }
            }
            
            // Update result if current element has higher frequency
            // or same frequency but smaller value
            if (currentFreq > maxFreq) {
                maxFreq = currentFreq;
                result = nums[i];
            } else if (currentFreq === maxFreq && nums[i] < result) {
                result = nums[i];
            }
        }
        
        return result;
    }
}
```

#### Python

```python
class Solution:
    def mostFrequentElement(self, nums):
        # Initialize with first element as candidate
        maxFreq = 0
        result = nums[0]
        
        # Check frequency of each element in the array
        for i in range(len(nums)):
            # Count frequency of current element nums[i]
            currentFreq = 0
            
            # Scan entire array to count occurrences of nums[i]
            for j in range(len(nums)):
                if nums[j] == nums[i]:
                    currentFreq += 1
            
            # Update result if current element has higher frequency
            # or same frequency but smaller value
            if currentFreq > maxFreq:
                maxFreq = currentFreq
                result = nums[i]
            elif currentFreq == maxFreq and nums[i] < result:
                result = nums[i]
        
        return result
```

### Brute Force Complexity:
- **Time Complexity:** O(n²) - nested loops checking each element
- **Space Complexity:** O(1) - only using constant extra space

---

## Approach 2: Optimal Solution (Hash Map)

### Algorithm / Intuition

The optimal approach uses a **hash map** to efficiently count frequencies:
1. **First pass:** Count frequency of each element using hash map
2. **Second pass:** Find element with maximum frequency
3. **Tie-breaking:** When frequencies are equal, choose smaller element
4. **Single scan** for each phase ensures O(n) time complexity

### Core Logic:
- Use hash map to store element → frequency mapping
- Single pass to build frequency map
- Single pass through map to find maximum frequency element
- Efficient O(n) time with O(n) space trade-off

### Mathematical Reasoning:
```
Hash Map Benefits:
- Insert/Update: O(1) average time
- Lookup: O(1) average time  
- No repeated counting needed
- Clear separation of concerns: count first, then find max
```

### Step-by-Step Algorithm:
1. Create empty hash map
2. For each element in array:
   - If element exists in map, increment its count
   - Else, add element with count 1
3. Initialize `maxFreq = 1` and `result = first element`
4. For each entry in hash map:
   - If frequency > maxFreq, update both maxFreq and result
   - If frequency == maxFreq and element < result, update result
5. Return result

### DryRun Example (Optimal):

Input: arr = [4, 4, 5, 5, 6]

```
Phase 1 - Build frequency map:
map = {}

i = 0, nums[0] = 4: map = {4: 1}
i = 1, nums[1] = 4: map = {4: 2}  
i = 2, nums[2] = 5: map = {4: 2, 5: 1}
i = 3, nums[3] = 5: map = {4: 2, 5: 2}
i = 4, nums[4] = 6: map = {4: 2, 5: 2, 6: 1}

Phase 2 - Find maximum frequency:
maxFreq = 1, ans = 4

Entry (4, 2): 
  2 > 1 → Update: maxFreq = 2, ans = 4

Entry (5, 2):
  2 == 2 AND 5 > 4 → No update

Entry (6, 1):
  1 < 2 → No update

Final: ans = 4
```

### Optimal Code Solutions:

#### Java

```java
class Solution {
    public int mostFrequentElement(int[] nums) {
        // Create hash map to store frequency of each element
        Map<Integer, Integer> map = new HashMap<>();
        
        // First pass: Build frequency map
        for (int i = 0; i < nums.length; i++) {
            // Check if element already exists in map
            if (map.containsKey(nums[i])) {
                // Increment existing frequency by 1
                map.put(nums[i], map.get(nums[i]) + 1);
            } else {
                // Add new element with frequency 1
                map.put(nums[i], 1);
            }
        }
        
        // Initialize with minimum possible frequency and first element
        int maxFreq = 1;
        int ans = nums[0];
        
        // Second pass: Find element with maximum frequency
        for (int key : map.keySet()) {
            // If current element has higher frequency, update result
            if (map.get(key) > maxFreq) {
                maxFreq = map.get(key);
                ans = key;
            }
            // If frequencies are equal, choose smaller element (tie-breaking)
            if (map.get(key) == maxFreq && key < ans) {
                ans = key;
            }
        }
        
        return ans;
    }
}
```

#### JavaScript

```javascript
class Solution {
    mostFrequentElement(nums) {
        // Create hash map to store frequency of each element
        let map = new Map();
        
        // First pass: Build frequency map
        for (let num of nums) {
            // Check if element already exists in map
            if (map.has(num)) {
                // Increment existing frequency by 1
                map.set(num, map.get(num) + 1);
            } else {
                // Add new element with frequency 1
                map.set(num, 1);
            }
        }
        
        // Initialize with minimum possible frequency and first element
        let maxFreq = 1;
        let ans = nums[0];
        
        // Second pass: Find element with maximum frequency
        for (const [key, value] of map) {
            // If current element has higher frequency, update result
            if (value > maxFreq) {
                maxFreq = value;
                ans = key;
            }
            // If frequencies are equal, choose smaller element (tie-breaking)
            if (value == maxFreq && key < ans) {
                ans = key;
            }
        }
        
        return ans;
    }
}
```

#### Python

```python
class Solution:
    def mostFrequentElement(self, nums):
        # Create hash map to store frequency of each element
        map = {}
        
        # First pass: Build frequency map
        for num in nums:
            # Check if element already exists in map using get()
            if map.get(num):
                # Increment existing frequency by 1
                map[num] += 1
            else:
                # Add new element with frequency 1
                map[num] = 1
        
        # Initialize with minimum possible frequency and first element
        maxFreq = 1
        ans = nums[0]
        
        # Second pass: Find element with maximum frequency
        for key, value in map.items():
            # If current element has higher frequency, update result
            if value > maxFreq:
                maxFreq = value
                ans = key
            # If frequencies are equal, choose smaller element (tie-breaking)
            if value == maxFreq and key < ans:
                ans = key
        
        return ans
```

### Optimal Complexity:
- **Time Complexity:** O(n) - single pass to build map + single pass through map
- **Space Complexity:** O(k) where k is number of unique elements (worst case O(n))

---

## Approach 3: Using Built-in Functions

### Alternative Solutions Using Language Features:

#### Java (Using Streams and Collections)

```java
import java.util.*;
import java.util.stream.*;
import java.util.function.Function;

class Solution {
    public int mostFrequentElement(int[] nums) {
        // Use streams to count frequencies and find maximum
        return Arrays.stream(nums)
                     .boxed()
                     .collect(Collectors.groupingBy(
                         Function.identity(), 
                         Collectors.counting()))
                     .entrySet()
                     .stream()
                     .max(Comparator.comparing((Map.Entry<Integer, Long> entry) -> entry.getValue())
                                   .thenComparing(entry -> -entry.getKey())) // Negative for smallest first
                     .map(Map.Entry::getKey)
                     .orElse(nums[0]);
    }
}
```

#### JavaScript (Using reduce and Object.entries)

```javascript
class Solution {
    mostFrequentElement(nums) {
        // Build frequency map using reduce
        const freqMap = nums.reduce((map, num) => {
            map[num] = (map[num] || 0) + 1;
            return map;
        }, {});
        
        // Find element with maximum frequency using Object.entries
        return Object.entries(freqMap)
                     .reduce((result, [key, freq]) => {
                         const num = parseInt(key);
                         if (freq > result.maxFreq || 
                             (freq === result.maxFreq && num < result.element)) {
                             return { element: num, maxFreq: freq };
                         }
                         return result;
                     }, { element: nums[0], maxFreq: 0 }).element;
    }
}
```

#### Python (Using Counter from collections)

```python
from collections import Counter

class Solution:
    def mostFrequentElement(self, nums):
        # Use Counter to build frequency map
        freq_counter = Counter(nums)
        
        # Find element with maximum frequency
        max_freq = max(freq_counter.values())
        
        # Among elements with max frequency, find the smallest
        candidates = [num for num, freq in freq_counter.items() if freq == max_freq]
        
        return min(candidates)
```

---

## Approach 4: Sorting-Based Solution

### Algorithm / Intuition

Sort the array and count consecutive elements:
1. **Sort the array** to group identical elements together
2. **Count consecutive identical elements** using a single pass
3. **Track maximum frequency** and corresponding element
4. **Handle tie-breaking** during the counting process

### Sorting-Based Code Solutions:

#### Java

```java
import java.util.Arrays;

class Solution {
    public int mostFrequentElement(int[] nums) {
        // Sort array to group identical elements together
        Arrays.sort(nums);
        
        int maxFreq = 1;
        int result = nums[0];
        int currentFreq = 1;
        
        // Count frequencies of consecutive identical elements
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] == nums[i - 1]) {
                // Same element, increment frequency
                currentFreq++;
            } else {
                // Different element, check if previous was maximum
                if (currentFreq > maxFreq) {
                    maxFreq = currentFreq;
                    result = nums[i - 1];
                }
                // Reset frequency for new element
                currentFreq = 1;
            }
        }
        
        // Check last group
        if (currentFreq > maxFreq) {
            result = nums[nums.length - 1];
        }
        
        return result;
    }
}
```

### Sorting Complexity:
- **Time Complexity:** O(n log n) - dominated by sorting
- **Space Complexity:** O(1) - if sorting is in-place, O(log n) for recursion stack

---

## Complexity Analysis Summary

| Approach              | Time Complexity | Space Complexity | Pros                    | Cons                    |
|-----------------------|-----------------|------------------|-------------------------|-------------------------|
| Brute Force           | O(n²)           | O(1)             | Simple, no extra space  | Too slow for large arrays |
| Hash Map (Optimal)    | O(n)            | O(k)             | Fast, clear logic       | Extra space needed      |
| Sorting-Based         | O(n log n)      | O(1)             | No hash map needed      | Slower than hash map    |
| Built-in Functions    | O(n)            | O(k)             | Concise code           | Language-dependent      |

---

## Edge Cases to Consider

1. **Single Element:** Array with one element
2. **All Same Elements:** Every element has same value
3. **All Different Elements:** Each element appears exactly once
4. **Negative Numbers:** Handle negative values correctly
5. **Large Arrays:** Performance with many elements
6. **Multiple Ties:** Several elements with same maximum frequency

## Detailed Edge Case Analysis

```java
// Edge cases with step-by-step analysis
Input: [7]                  → Output: 7 (single element)
Input: [3, 3, 3, 3]         → Output: 3 (all same)
Input: [1, 2, 3, 4, 5]      → Output: 1 (all different, return smallest)
Input: [-1, -2, -1, -3]     → Output: -1 (negative numbers)
Input: [5, 5, 3, 3]         → Output: 3 (tie, return smaller)
Input: [0, 0, 1, 1, 2]      → Output: 0 (include zero)
```

---

## Test Cases

```java
public void testMostFrequentElement() {
    Solution sol = new Solution();
    
    // Edge cases
    assert sol.mostFrequentElement(new int[]{7}) == 7;                    // Single element
    assert sol.mostFrequentElement(new int[]{3, 3, 3}) == 3;              // All same
    assert sol.mostFrequentElement(new int[]{1, 2, 3, 4}) == 1;           // All different
    
    // Basic frequency cases
    assert sol.mostFrequentElement(new int[]{1, 2, 2, 3, 3, 3}) == 3;     // Clear winner
    assert sol.mostFrequentElement(new int[]{4, 4, 5, 5, 6}) == 4;        // Tie-breaking
    
    // Negative numbers
    assert sol.mostFrequentElement(new int[]{-1, -2, -1, -3}) == -1;      // Negative most frequent
    assert sol.mostFrequentElement(new int[]{-5, -5, -3, -3}) == -5;      // Negative tie-breaking
    
    // Mixed positive/negative
    assert sol.mostFrequentElement(new int[]{-1, 0, 1, -1, 0, 0}) == 0;   // Zero most frequent
    assert sol.mostFrequentElement(new int[]{-2, -2, 3, 3}) == -2;        // Negative wins tie
    
    // Larger arrays
    assert sol.mostFrequentElement(new int[]{1, 1, 2, 2, 3, 3, 1}) == 1;  // Multiple occurrences
    assert sol.mostFrequentElement(new int[]{5, 3, 5, 3, 1, 1, 1}) == 1;  // Clear winner
}
```

---

## Step-by-Step Visualization

### Hash Map Approach: arr = [1, 2, 2, 3, 3, 3]

```
Phase 1 - Building Frequency Map:

Step 1: num = 1
        map = {1: 1}

Step 2: num = 2  
        map = {1: 1, 2: 1}

Step 3: num = 2
        map = {1: 1, 2: 2}

Step 4: num = 3
        map = {1: 1, 2: 2, 3: 1}

Step 5: num = 3
        map = {1: 1, 2: 2, 3: 2}

Step 6: num = 3
        map = {1: 1, 2: 2, 3: 3}

Phase 2 - Finding Maximum Frequency:

Initial: maxFreq = 1, ans = 1

Check (1, 1): 1 == 1, no change
Check (2, 2): 2 > 1 → maxFreq = 2, ans = 2  
Check (3, 3): 3 > 2 → maxFreq = 3, ans = 3

Final Result: 3
```

### Tie-Breaking Example: arr = [4, 4, 5, 5, 6]

```
Phase 1 - Building Frequency Map:
map = {4: 2, 5: 2, 6: 1}

Phase 2 - Finding Maximum with Tie-Breaking:

Initial: maxFreq = 1, ans = 4

Check (4, 2): 2 > 1 → maxFreq = 2, ans = 4
Check (5, 2): 2 == 2 AND 5 > 4 → No update (ans stays 4)
Check (6, 1): 1 < 2 → No update

Final Result: 4 (smaller element wins the tie)
```

---

## Mathematical Properties

### 1. Frequency Analysis
- **Maximum Frequency:** At most n (all elements same)
- **Minimum Frequency:** At least 1 (element appears once)
- **Average Frequency:** n / (number of unique elements)

### 2. Tie-Breaking Rules
- **Primary Criterion:** Maximum frequency
- **Secondary Criterion:** Smallest element value
- **Deterministic:** Always produces same result for same input

### 3. Hash Map Properties
- **Load Factor:** Affects performance of hash operations
- **Collision Handling:** Chaining vs open addressing
- **Space-Time Tradeoff:** O(n) space for O(1) average lookup

---

## Common Mistakes to Avoid

1. **Wrong Tie-Breaking:** Choosing larger element instead of smaller
2. **Initialization Error:** Wrong initial values for maxFreq or result
3. **Hash Map Logic:** Incorrect frequency counting or updates
4. **Edge Case Missing:** Not handling single element or empty arrays
5. **Integer Overflow:** With very large frequencies (unlikely in practice)

### Common Error Examples:

```java
// Wrong: Choosing larger element in tie
if (map.get(key) == maxFreq && key > ans) { // Should be key < ans
    ans = key;
}

// Wrong: Starting maxFreq at 0
int maxFreq = 0; // Should be 1, since every element appears at least once

// Wrong: Not handling map correctly
map.put(nums[i], map.get(nums[i]) + 1); // NullPointerException if key not present

// Correct: Check before incrementing
if (map.containsKey(nums[i])) {
    map.put(nums[i], map.get(nums[i]) + 1);
} else {
    map.put(nums[i], 1);
}
```

---

## Optimization Techniques

### 1. Early Termination (Limited Applicability)

```java
// If we know maximum possible frequency
public int mostFrequentElementOptimized(int[] nums, int knownMaxFreq) {
    Map<Integer, Integer> map = new HashMap<>();
    int maxFreq = 1;
    int result = nums[0];
    
    for (int num : nums) {
        map.put(num, map.getOrDefault(num, 0) + 1);
        
        // Early termination if we reach known maximum
        if (map.get(num) == knownMaxFreq) {
            return num;
        }
    }
    
    // Continue with normal logic...
    return result;
}
```

### 2. Memory-Efficient Counting (For Limited Range)

```java
// If array values are in a known small range [min, max]
public int mostFrequentElementArray(int[] nums, int min, int max) {
    int range = max - min + 1;
    int[] freq = new int[range];
    
    // Count frequencies using array indexing
    for (int num : nums) {
        freq[num - min]++;
    }
    
    // Find maximum frequency
    int maxFreq = 0;
    int result = min;
    
    for (int i = 0; i < range; i++) {
        if (freq[i] > maxFreq) {
            maxFreq = freq[i];
            result = i + min;
        }
    }
    
    return result;
}
```

### 3. Single-Pass Optimization

```java
// Track maximum during frequency counting
public int mostFrequentElementSinglePass(int[] nums) {
    Map<Integer, Integer> map = new HashMap<>();
    int maxFreq = 1;
    int result = nums[0];
    
    for (int num : nums) {
        int newFreq = map.getOrDefault(num, 0) + 1;
        map.put(num, newFreq);
        
        // Update maximum during counting
        if (newFreq > maxFreq || (newFreq == maxFreq && num < result)) {
            maxFreq = newFreq;
            result = num;
        }
    }
    
    return result;
}
```

---

## Performance Analysis

### Time Complexity Breakdown:
```
Hash Map Approach:
- Building frequency map: O(n)
- Finding maximum: O(k) where k = unique elements
- Total: O(n + k) = O(n)

Space Usage:
- Hash map storage: O(k) entries
- Each entry: key + value ≈ 8 bytes (Java)
- Total space: O(k) where k ≤ n
```

### Comparison of Approaches:
```
For n = 1,000,000:
- Brute Force: ~1,000,000,000,000 operations (too slow)
- Hash Map: ~1,000,000 operations (very fast)  
- Sorting: ~20,000,000 operations (acceptable)
```

---

## Real-World Applications

1. **Data Analytics:** Finding most common values in datasets
2. **Text Processing:** Most frequent words or characters
3. **Log Analysis:** Most common error codes or events
4. **E-commerce:** Most popular products or categories
5. **Social Media:** Trending topics or hashtags
6. **Quality Control:** Most common defect types

---

## Related Problems

1. **K Most Frequent Elements:** Find top K frequent elements
2. **Least Frequent Element:** Find element with minimum frequency
3. **Frequency of Each Element:** Return frequency map
4. **Mode in Statistics:** Statistical mode calculation
5. **Top K Frequent Words:** String version with lexicographic ordering
6. **Group Anagrams:** Frequency-based string grouping

---

## Variations and Extensions

### 1. Find All Most Frequent Elements

```java
public List<Integer> allMostFrequentElements(int[] nums) {
    Map<Integer, Integer> freq = new HashMap<>();
    
    // Build frequency map
    for (int num : nums) {
        freq.put(num, freq.getOrDefault(num, 0) + 1);
    }
    
    // Find maximum frequency
    int maxFreq = Collections.max(freq.values());
    
    // Collect all elements with maximum frequency
    List<Integer> result = new ArrayList<>();
    for (Map.Entry<Integer, Integer> entry : freq.entrySet()) {
        if (entry.getValue() == maxFreq) {
            result.add(entry.getKey());
        }
    }
    
    return result;
}
```

### 2. K Most Frequent Elements

```java
public int[] topKFrequent(int[] nums, int k) {
    Map<Integer, Integer> freq = new HashMap<>();
    
    // Build frequency map
    for (int num : nums) {
        freq.put(num, freq.getOrDefault(num, 0) + 1);
    }
    
    // Use min-heap to maintain top K elements
    PriorityQueue<Map.Entry<Integer, Integer>> heap = new PriorityQueue<>(
        (a, b) -> a.getValue().compareTo(b.getValue())
    );
    
    for (Map.Entry<Integer, Integer> entry : freq.entrySet()) {
        heap.offer(entry);
        if (heap.size() > k) {
            heap.poll();
        }
    }
    
    // Extract results