// Two pointer solution

// const arr = [3, 12, 4, 1];

// var sum =0
// fdgfdfd fdgfgfg rtrt retretrebt tr

// console.log("hi devleoepr")

// function targetFunction() {
//   var arr1 = [2, 3, 4];
//   var target = 6;
//   var left = 0;
//   var right = arr1.length - 1;
//   var sum;
//   while (left <= right) {
//     sum = arr1[left] + arr1[right];
//     if (sum === target) {
//       console.log("Pair found: [" + left + ", " + right + "]");
//       return [left + 1, right + 1];
//     } else if (sum < target) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   console.log("No pair found.");
//   return [-1, -1];
// }

// const newarr = targetFunction();
// console.log(newarr);

// sort an array using 2 pointer algorithms
// var arraysort = [3, 45, 1, 190, 0];
// var left = 0;
// var right = arraysort.length - 1;
// while (left < right) {
//   if (arraysort[left] < arraysort[right]) {
//     [arraysort[left], arraysort[right]] = [arraysort[right], arraysort[left]];
//   }
//   left++;
//   if (left >= right) {
//     left = 0;
//     right--;
//   }
// }
// console.log(arraysort);
//using 2 pointer algorithms Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.


// using for loop
// var nums = [0, 1, 1];
// var newarr = [];
// for (let i = 0; i < nums.length; i++) {
//   for (let j = i + 1; j < nums.length; j++) {
//     for (let k = j + 1; k < nums.length; k++) {
//       var sum = nums[i] + nums[j] + nums[k];
//       if (sum === 0) {
//         newarr.push([nums[i], nums[j], nums[k]]);
//       }
//     }
//   }
// }
// console.log(newarr);

// using 2 pointer