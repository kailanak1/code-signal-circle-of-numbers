# Code Signal Circle of Numbers 

> Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).

> Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

## Solution 
1. Find the halfway point by dividing the distance by 2 (round up)
```
let halfway = Math.round(n/2)
```
2. Add the halfway point to the firstNumber
```
let total = firstNumber + halfway
```
3. If the number is less than the total, that's the answer. If not, subtract the distance from the total

```
  if(total >= n){
        return total - n
    } else {
        return total
    }
```
