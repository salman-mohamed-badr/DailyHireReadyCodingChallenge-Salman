// Diagonal Difference Challenge :
/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = .
The right-to-left diagonal = .
Their absolute difference is .

Function description

Complete the  function with the following parameter:

: a 2-D array of integers
Return

: the absolute difference in sums along the diagonals
Input Format

The first line contains a single integer, , the number of rows and columns in the square matrix .
Each of the next  lines describes a row, , and consists of  space-separated integers .

Constraints

Sample Input

STDIN      Function
-----      --------
3           arr[][] sizes n = 3, m = 3
11 2 4     arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]
4 5 6
10 8 -12
Sample Output

15
Explanation

The primary diagonal is:

11
   5
     -12
Sum across the primary diagonal: .

The secondary diagonal is:

     4
   5
10
Sum across the secondary diagonal: 
Difference: 

Note: |x| is the absolute value of x.
*/

// THE FIRST SOLUTION: 

function diagonalDifference(arr) {
    let pointer = 0;
    let secondPointer = arr.length-1;
    let leftToRightSum = 0;
    let rightToleftSum = 0;
      for (let i =0; i < arr.length; i++) {
        leftToRightSum += arr[i][pointer]
        pointer++
    }
    for (let j=0; j < arr.length ; j++ ) {
        rightToleftSum += arr[j][secondPointer];
        secondPointer--
    }
    return Math.abs(leftToRightSum - rightToleftSum);
}


// THE OPTIMAL SOLUTION :
function diagonalDifference(arr) {
  // Write your code here
  //declare the variables
    let pointer = 0 , leftToRightSum = 0 ,rightToleftSum  = 0;
    let secondPointer = arr.length - 1;
  // create for in loop to traverse the parent array and get the element that we want on every loop
    for (let i in arr) {
        leftToRightSum += arr[i][pointer]
      // here we decrement the pointer (counter)
        pointer++
    }
    // create for in loop to traverse the parent array and get the element that we want on every loop
    for (let j in arr ) {
        rightToleftSum += arr[j][secondPointer];
      // here we increment the pointer (counter)
        secondPointer--
    }
    return Math.abs(leftToRightSum - rightToleftSum);
}
