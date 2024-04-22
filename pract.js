// Two pointer solution

// const arr = [3, 12, 4, 1];

// var sum =0
// fdgfdfd fdgfgfg rtrt retretrebt tr

// console.log("hi devleoepr")

function targetFunction() {
  var arr1 = [2, 3, 4];
  var target = 6;
  var left = 0;
  var right = arr1.length - 1;
  var sum;
  while (left <= right) {
    sum = arr1[left] + arr1[right];
    if (sum === target) {
      console.log("Pair found: [" + left + ", " + right + "]");
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  console.log("No pair found.");
  return [-1, -1];
}

const newarr = targetFunction();
console.log(newarr);
