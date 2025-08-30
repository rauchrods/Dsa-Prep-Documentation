# Two Sum

### Difficulty: `Easy`

### **Practice Links:**
- **[LeetCode - Two Sum](https://leetcode.com/problems/two-sum/)**


## Problem Statement

Given an array of integers `nums` and an integer `target`, return **indices of the two numbers** such that they add up to `target`.

You may assume that each input would have **exactly one solution**, and you may not use the **same element twice**.

You can return the answer in any order.

## Mathematical Definition

For an array nums[0, 1, 2, ..., n-1] and target value, find indices i and j such that:
- **nums[i] + nums[j] = target**
- **i != j (different indices)**
- **Exactly one valid pair exists**

## Examples

```txt
Example 1:
Input:  nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input:  nums = [3,2,4], target = 6
Output: [1,2]
Explanation: Because nums[1] + nums[2] == 6, we return [1, 2].

Example 3:
Input:  nums = [3,3], target = 6
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 6, we return [0, 1].
```


## Key Concepts

- **Hash Map/Dictionary:** Efficient storage for value → index mapping
- **Complement Search:** For each number, search for (target - number)
- **Two-Pass vs One-Pass:** Building map first vs searching while building
- **Index Tracking:** Return indices, not values

---

## Approach 1: Brute Force Solution

### Algorithm / Intuition

The brute force approach checks every possible pair of numbers:
1. **For each element** at index i
2. **Check all subsequent elements** at index j (where j > i)
3. **If nums[i] + nums[j] == target**, return [i, j]
4. **Guaranteed to find solution** since exactly one exists

### Core Logic:
- Nested loops to examine all pairs
- Avoid checking same element twice by using j > i
- Simple but inefficient for large arrays

### Step-by-Step Algorithm:
1. For i from 0 to n-2:
   - For j from i+1 to n-1:
     - If nums[i] + nums[j] == target:
       - Return [i, j]
2. Return empty array (should never reach here due to constraints)

### DryRun Example (Brute Force):

Input: nums = [2,7,11,15], target = 9

```
i = 0, nums[0] = 2:
  j = 1, nums[1] = 7: 2 + 7 = 9 == target ✓
  Return [0, 1]

Result: [0, 1]
```

### Brute Force Code Solutions:

#### Java

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Check every possible pair of numbers
        for (int i = 0; i < nums.length - 1; i++) {
            // Start from i+1 to avoid using same element twice
            for (int j = i + 1; j < nums.length; j++) {
                // If current pair sums to target, return their indices
                if (nums[i] + nums[j] == target) {
                    return new int[]{i, j};
                }
            }
        }
        
        // Should never reach here due to problem constraints
        return new int[]{-1, -1};
    }
}
```

#### JavaScript

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Check every possible pair of numbers
    for (let i = 0; i < nums.length - 1; i++) {
        // Start from i+1 to avoid using same element twice
        for (let j = i + 1; j < nums.length; j++) {
            // If current pair sums to target, return their indices
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    
    // Should never reach here due to problem constraints
    return [-1, -1];
};
```

#### Python

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Check every possible pair of numbers
        for i in range(len(nums) - 1):
            # Start from i+1 to avoid using same element twice
            for j in range(i + 1, len(nums)):
                # If current pair sums to target, return their indices
                if nums[i] + nums[j] == target:
                    return [i, j]
        
        # Should never reach here due to problem constraints
        return [-1, -1]
```

### Brute Force Complexity:
- **Time Complexity:** O(n²) - nested loops checking all pairs
- **Space Complexity:** O(1) - only using constant extra space

---

## Approach 2: Optimal Solution (Hash Map - Two Pass)

### Algorithm / Intuition

The optimal approach uses a **hash map** to store value-to-index mappings:
1. **First pass:** Build hash map with all numbers and their indices
2. **Second pass:** For each number, check if its complement exists
3. **Complement calculation:** complement = target - current_number
4. **Index validation:** Ensure we don't use the same element twice

### Core Logic:
- Use hash map for O(1) average lookup time
- Store all values first, then search for complements
- Handle duplicate values by checking indices

### Mathematical Reasoning:
```
Hash Map Benefits:
- Insert: O(1) average time
- Lookup: O(1) average time  
- Transform search problem: find complement instead of pair
- Space-time tradeoff: O(n) space for O(n) time
```

### Step-by-Step Algorithm:
1. Create empty hash map
2. First pass - store all numbers:
   - For each index i: map[nums[i]] = i
3. Second pass - find complement:
   - For each index i:
     - Calculate complement = target - nums[i]
     - If complement exists in map AND map[complement] != i:
       - Return [i, map[complement]]

### DryRun Example (Optimal):

Input: nums = [2,7,11,15], target = 9

```
Phase 1 - Build hash map:
map = {}

i = 0, nums[0] = 2: map = {2: 0}
i = 1, nums[1] = 7: map = {2: 0, 7: 1}
i = 2, nums[2] = 11: map = {2: 0, 7: 1, 11: 2}
i = 3, nums[3] = 15: map = {2: 0, 7: 1, 11: 2, 15: 3}

Phase 2 - Find complement:
i = 0, nums[0] = 2:
  toFind = 9 - 2 = 7
  7 in map ✓ AND 0 != map[7] (which is 1) ✓
  Return [0, 1]

Final Result: [0, 1]
```

### Optimal Code Solutions:

#### Java

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Create hash map to store value -> index mapping
        HashMap<Integer, Integer> map = new HashMap<>();
        
        // Initialize result array to store the two indices
        int[] ans = new int[2];
        
        // First pass: Build hash map with all numbers and their indices
        for (int i = 0; i < nums.length; i++) {
            map.put(nums[i], i);
        }
        
        // Second pass: Find complement for each number
        for (int i = 0; i < nums.length; i++) {
            // Calculate what number we need to reach target
            int toFind = target - nums[i];
            
            // Check if complement exists and it's not the same element
            if (map.containsKey(toFind) && i != map.get(toFind)) {
                ans[0] = i;
                ans[1] = map.get(toFind);
                return ans;
            }
        }
        
        return ans;
    }
}
```

#### JavaScript

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Create hash map to store value -> index mapping
    let map = new Map();
    
    // Initialize result array to store the two indices
    let ans = [0, 0];
    
    // First pass: Build hash map with all numbers and their indices
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }
    
    // Second pass: Find complement for each number
    for (let i = 0; i < nums.length; i++) {
        // Calculate what number we need to reach target
        let toFind = target - nums[i];
        
        // Check if complement exists and it's not the same element
        if (map.has(toFind) && i != map.get(toFind)) {
            ans[0] = i;
            ans[1] = map.get(toFind);
            return ans;
        }
    }
    
    return ans;
};
```

#### Python

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Create hash map to store value -> index mapping
        map_dict = {}
        
        # Initialize result array to store the two indices
        ans = [0, 0]
        
        # First pass: Build hash map with all numbers and their indices
        for i in range(len(nums)):
            map_dict[nums[i]] = i
        
        # Second pass: Find complement for each number
        for i in range(len(nums)):
            # Calculate what number we need to reach target
            toFind = target - nums[i]
            
            # Check if complement exists and it's not the same element
            if toFind in map_dict and i != map_dict[toFind]:
                ans[0] = i
                ans[1] = map_dict[toFind]
                return ans
        
        return ans
```

### Optimal Complexity:
- **Time Complexity:** O(n) - two separate passes through array
- **Space Complexity:** O(n) - hash map storing all elements

---

## Approach 3: One-Pass Hash Map Solution

### Algorithm / Intuition

More efficient version that builds map and searches simultaneously:
1. **Single pass:** For each element, check if complement exists
2. **If complement not found:** Add current element to map
3. **If complement found:** Return indices immediately
4. **Earlier elements available:** Only need to check previously seen elements

### One-Pass Code Solutions:

#### Java

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Hash map to store value -> index mapping
        HashMap<Integer, Integer> map = new HashMap<>();
        
        // Single pass: check complement and build map simultaneously
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            
            // Check if complement exists in map (from previous elements)
            if (map.containsKey(complement)) {
                // Found the pair: complement index and current index
                return new int[]{map.get(complement), i};
            }
            
            // Add current element to map for future lookups
            map.put(nums[i], i);
        }
        
        // Should never reach here due to problem constraints
        return new int[]{-1, -1};
    }
}
```

#### JavaScript

```javascript
var twoSum = function(nums, target) {
    // Hash map to store value -> index mapping
    let map = new Map();
    
    // Single pass: check complement and build map simultaneously
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        
        // Check if complement exists in map (from previous elements)
        if (map.has(complement)) {
            // Found the pair: complement index and current index
            return [map.get(complement), i];
        }
        
        // Add current element to map for future lookups
        map.set(nums[i], i);
    }
    
    // Should never reach here due to problem constraints
    return [-1, -1];
};
```

#### Python

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Hash map to store value -> index mapping
        num_map = {}
        
        # Single pass: check complement and build map simultaneously
        for i, num in enumerate(nums):
            complement = target - num
            
            # Check if complement exists in map (from previous elements)
            if complement in num_map:
                # Found the pair: complement index and current index
                return [num_map[complement], i]
            
            # Add current element to map for future lookups
            num_map[num] = i
        
        # Should never reach here due to problem constraints
        return [-1, -1]
```

### One-Pass Complexity:
- **Time Complexity:** O(n) - single pass through array
- **Space Complexity:** O(n) - hash map storing elements

---

## Complexity Analysis Summary

| Approach              | Time Complexity | Space Complexity | Pros                    | Cons                    |
|-----------------------|-----------------|------------------|-------------------------|-------------------------|
| Brute Force           | O(n²)           | O(1)             | Simple, no extra space  | Slow for large arrays   |
| Two-Pass Hash Map     | O(n)            | O(n)             | Clear logic, fast       | Two passes needed       |
| One-Pass Hash Map     | O(n)            | O(n)             | Most efficient          | Slightly more complex   |

---

## Edge Cases to Consider

1. **Minimum Array:** Array with exactly 2 elements
2. **Duplicate Numbers:** Same number appears multiple times
3. **Negative Numbers:** Handle negative values correctly
4. **Zero Values:** Target or array elements are zero
5. **Large Numbers:** Values near constraint limits

## Detailed Edge Case Analysis

```java
// Edge cases with step-by-step analysis
Input: nums = [3,3], target = 6        → Output: [0,1] (duplicate numbers)
Input: nums = [-1,-2], target = -3     → Output: [0,1] (negative numbers)
Input: nums = [0,4], target = 4        → Output: [0,1] (zero in array)
Input: nums = [2,5], target = 7        → Output: [0,1] (minimum size)
Input: nums = [-3,4,3,90], target = 0  → Output: [0,2] (negative + positive)
```

---

## Test Cases

```java
public void testTwoSum() {
    Solution sol = new Solution();
    
    // Basic examples from problem
    assertArrayEquals(new int[]{0,1}, sol.twoSum(new int[]{2,7,11,15}, 9));
    assertArrayEquals(new int[]{1,2}, sol.twoSum(new int[]{3,2,4}, 6));
    assertArrayEquals(new int[]{0,1}, sol.twoSum(new int[]{3,3}, 6));
    
    // Edge cases
    assertArrayEquals(new int[]{0,1}, sol.twoSum(new int[]{1,2}, 3));          // Minimum size
    assertArrayEquals(new int[]{0,1}, sol.twoSum(new int[]{-1,-2}, -3));       // Negative numbers
    assertArrayEquals(new int[]{1,2}, sol.twoSum(new int[]{0,4,3}, 7));        // Zero in array
    
    // Larger arrays
    assertArrayEquals(new int[]{0,4}, sol.twoSum(new int[]{1,3,7,9,1}, 2));    // Duplicates
    assertArrayEquals(new int[]{2,3}, sol.twoSum(new int[]{5,2,8,1}, 9));      // Middle elements
    
    // Negative target
    assertArrayEquals(new int[]{0,2}, sol.twoSum(new int[]{-3,4,3,90}, 0));    // Negative + positive
}
```

---

## Step-by-Step Visualization

### Hash Map Approach: nums = [2,7,11,15], target = 9

```
Phase 1 - Building Hash Map:

Step 1: i = 0, nums[0] = 2
        map = {2: 0}

Step 2: i = 1, nums[1] = 7  
        map = {2: 0, 7: 1}

Step 3: i = 2, nums[2] = 11
        map = {2: 0, 7: 1, 11: 2}

Step 4: i = 3, nums[3] = 15
        map = {2: 0, 7: 1, 11: 2, 15: 3}

Phase 2 - Finding Complement:

Step 1: i = 0, nums[0] = 2
        toFind = 9 - 2 = 7
        7 in map ✓ AND 0 != 1 ✓
        Return [0, 1]

Final Result: [0, 1]
```

### One-Pass Example: nums = [3,2,4], target = 6

```
i = 0, nums[0] = 3:
  complement = 6 - 3 = 3
  3 not in map (empty) → Add: map = {3: 0}

i = 1, nums[1] = 2:
  complement = 6 - 2 = 4
  4 not in map → Add: map = {3: 0, 2: 1}

i = 2, nums[2] = 4:
  complement = 6 - 4 = 2
  2 in map ✓ at index 1
  Return [1, 2]

Final Result: [1, 2]
```

---

## Mathematical Properties

### 1. Complement Relationship
- **For any pair (i,j):** nums[i] + nums[j] = target
- **Complement formula:** nums[j] = target - nums[i]
- **Symmetry:** If A + B = target, then B + A = target

### 2. Hash Map Properties
- **Key-Value Mapping:** number → index
- **Overwrite Behavior:** Later occurrence overwrites earlier
- **Lookup Efficiency:** O(1) average time complexity

### 3. Index Constraints
- **Different Indices:** i ≠ j always required
- **Order Independence:** Can return [i,j] or [j,i]
- **Unique Solution:** Exactly one valid pair guaranteed

---

## Common Mistakes to Avoid

1. **Same Index Usage:** Forgetting to check i != j
2. **Value vs Index:** Returning values instead of indices
3. **Map Overwriting:** Not handling duplicate values properly
4. **Order Assumption:** Assuming specific index ordering in result
5. **Edge Case Handling:** Not testing minimum array size

### Common Error Examples:

```java
// Wrong: Using same element twice
if (map.containsKey(complement)) {
    return new int[]{i, map.get(complement)}; // Might return same index
}

// Wrong: Returning values instead of indices
return new int[]{nums[i], nums[j]};

// Wrong: Not handling duplicate values
// If array is [3,3] and target is 6, need to check indices carefully

// Correct: Always check different indices
if (map.containsKey(complement) && i != map.get(complement)) {
    return new int[]{i, map.get(complement)};
}
```

---

## Optimization Techniques

### 1. Early Return Optimization

```java
// One-pass approach naturally provides early return
public int[] twoSumOptimized(int[] nums, int target) {
    HashMap<Integer, Integer> map = new HashMap<>();
    
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        
        if (map.containsKey(complement)) {
            return new int[]{map.get(complement), i}; // Early return
        }
        
        map.put(nums[i], i);
    }
    
    return new int[]{-1, -1};
}
```

### 2. Memory-Efficient for Sorted Arrays

```java
// If array were sorted (different problem variant)
public int[] twoSumSorted(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    
    while (left < right) {
        int sum = nums[left] + nums[right];
        if (sum == target) {
            return new int[]{left, right};
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return new int[]{-1, -1};
}
```

---

## Performance Analysis

### Time Complexity Breakdown:
```
Hash Map Approach:
- Building map: O(n)
- Searching complements: O(n) 
- Each lookup: O(1) average
- Total: O(n)

Space Usage:
- Hash map entries: n key-value pairs
- Each entry: ~16 bytes (Java)
- Total space: O(n)
```

### Comparison of Approaches:
```
For n = 10,000:
- Brute Force: ~50,000,000 comparisons
- Hash Map: ~10,000 operations (much faster)

Memory usage:
- Brute Force: ~8 bytes (result array)
- Hash Map: ~160KB (hash map + result)
```

---

## Real-World Applications

1. **Financial Analysis:** Finding transactions that sum to specific amount
2. **Data Analytics:** Pairing complementary data points
3. **Resource Allocation:** Finding resource pairs that meet requirements
4. **Game Development:** Matching items with combined values
5. **Inventory Management:** Finding product combinations
6. **Cryptography:** Number theory applications in key generation

---

## Related Problems

1. **Three Sum:** Find triplets that sum to zero
2. **Four Sum:** Find quadruplets with specific sum
3. **Two Sum II (Sorted Array):** Two pointers approach
4. **Two Sum BST:** Two sum in binary search tree
5. **Subarray Sum Equals K:** Find subarrays with target sum
6. **Maximum Number of K-Sum Pairs:** Count possible pairs

---

## Variations and Extensions

### 1. Two Sum - Return All Pairs

```java
public List<int[]> twoSumAllPairs(int[] nums, int target) {
    List<int[]> result = new ArrayList<>();
    HashMap<Integer, List<Integer>> map = new HashMap<>();
    
    // Store all indices for each value
    for (int i = 0; i < nums.length; i++) {
        map.computeIfAbsent(nums[i], k -> new ArrayList<>()).add(i);
    }
    
    Set<String> seen = new HashSet<>();
    
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        
        if (map.containsKey(complement)) {
            for (int j : map.get(complement)) {
                if (i < j) { // Avoid duplicates and same index
                    String pair = i + "," + j;
                    if (!seen.contains(pair)) {
                        result.add(new int[]{i, j});
                        seen.add(pair);
                    }
                }
            }
        }
    }
    
    return result;
}
```

### 2. Two Sum - Count Pairs

```java
public int twoSumCount(int[] nums, int target) {
    HashMap<Integer, Integer> map = new HashMap<>();
    int count = 0;
    
    for (int num : nums) {
        int complement = target - num;
        
        if (map.containsKey(complement)) {
            count += map.get(complement);
        }
        
        map.put(num, map.getOrDefault(num, 0) + 1);
    }
    
    return count;
}
```

### 3. Two Sum - Closest to Target

```java
public int[] twoSumClosest(int[] nums, int target) {
    int[] result = new int[2];
    int minDiff = Integer.MAX_VALUE;
    
    for (int i = 0; i < nums.length - 1; i++) {
        for (int j = i + 1; j < nums.length; j++) {
            int diff = Math.abs(nums[i] + nums[j] - target);
            if (diff < minDiff) {
                minDiff = diff;
                result[0] = i;
                result[1] = j;
            }
        }
    }
    
    return result;
}
```

---

## Interview Tips

### 1. Clarification Questions
- "Should I return indices or values?"
- "Can I use the same element twice?"
- "Is the array sorted?"
- "Are there multiple valid solutions?"
- "What if no solution exists?"

### 2. Solution Progression
1. **Start with brute force:** Show understanding of problem
2. **Identify inefficiency:** Explain nested loop problems
3. **Propose hash map:** Demonstrate data structure knowledge
4. **Optimize to one-pass:** Show advanced optimization

### 3. Code Quality
- **Clear variable names:** `complement`, `map`, `target`
- **Proper error handling:** Handle edge cases
- **Efficient implementation:** Choose one-pass when possible
- **Test examples:** Walk through given examples

---

## Advanced Optimizations

### 1. Cache-Friendly Implementation

```java
// For better cache performance with large arrays
public int[] twoSumCacheOptimized(int[] nums, int target) {
    // Process in chunks to improve cache locality
    final int CHUNK_SIZE = 1024;
    HashMap<Integer, Integer> map = new HashMap<>(nums.length);
    
    for (int chunk = 0; chunk < nums.length; chunk += CHUNK_SIZE) {
        int end = Math.min(chunk + CHUNK_SIZE, nums.length);
        
        // Build map for chunk
        for (int i = chunk; i < end; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }
            map.put(nums[i], i);
        }
    }
    
    return new int[]{-1, -1};
}
```

---

This problem demonstrates the fundamental technique of using hash maps to optimize search operations, transforming a quadratic brute force solution into an efficient linear time algorithm. The key insight is recognizing that for each number, we can calculate its required complement and search for it directly rather than checking all possible pairs.