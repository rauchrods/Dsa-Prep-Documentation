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



## `2. Optimal Approach`

### Algorithm / Intuition.

## Solution2: Using a max variable.

## Intuition:
We can maintain a max variable that will update whenever the current value is greater than the value in the max variable.  

## Approach: 
- Create a max variable and initialize it with arr[0].
- Use a for loop and compare it with other elements of the array
- If any element is greater than the max value, update max value with the element’s value
- Print the max variable.



## Code.
 ## Java
 ```java
class Solution {
    public static int largest(int[] arr) {
        
        int max = arr[0];
        
        for(int i=0; i<arr.length; i++){
            if(arr[i]>max){
                max = arr[i];
            }
        }
        
        return max;
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
        
        let max = arr[0];
        
        for(let i=0; i<arr.length; i++){
            if(arr[i]>max){
                max = arr[i];
            }
        }
        
        return max;
    }
}
```

 ## Python
 ```python

class Solution:
    def largest(self, arr : List[int]) -> int:
        
        max = arr[0]
        
        for i in range(0, len(arr)):
            
            if arr[i] > max:
                max = arr[i]
                
        return max
```

## Complexity Analysis

### Time Complexity: O(N)

### Space Complexity: O(1)




