---
sidebar_position: 1
---

# Largest Element in an Array
 ### Difficulty: `Easy`


### ***Practice Link : [Geeks for Geeks ](https://www.geeksforgeeks.org/problems/largest-element-in-array4009/0?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=largest-element-in-array)***

## Examples.


```txt
Example 1:
Input:
 arr[] = {2,5,1,3,0};
Output:
 5
Explanation:
 5 is the largest element in the array. 

Example2:
Input:
 arr[] = {8,10,5,7,9};
Output:
 10
Explanation:
 10 is the largest element in the array.
```


## `1. Brute Force Approach`

### Algorithm / Intuition.

## Solution1: Sorting.

## Intuition:
We can sort the array in ascending order, hence the largest element will be at the last index of the array.

## Approach: 
- Sort the array in ascending order.
- Print the (size of the array -1)th index.

## DryRun:
Before sorting: arr[] = {2,5,1,3,0};

After sorting: arr[] = {0,1,2,3,5};

Hence answer : arr[sizeofthearray-1] =5


## Code.
 ## Java
 ```java
class Solution {
    public static int largest(int[] arr) {
        
        Arrays.sort(arr);
        
        return arr[arr.length -1];
    }
}
```


 ## JavaScript
 ```javascript
class Solution {
    /**
    * @param number[] arr

    * @returns number
    */
    largest(arr) {
        
        arr.sort((a,b)=> a-b);
        
        return arr[arr.length -1]
    }
}
```

 ## Python
 ```python

from typing import List


class Solution:
    def largest(self, arr : List[int]) -> int:
        arr.sort()
        return arr[-1]
```

## Complexity Analysis

### Time Complexity: O(N*log(N))

### Space Complexity: O(n)





