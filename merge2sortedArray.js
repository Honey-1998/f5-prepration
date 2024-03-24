function mergeArrays(arr1, arr2, n1, n2, arr3) {
      var i = 0, j = 0, k = 0;
       
      // traverse the arr1 and insert its element in arr3
      while (i < n1) {
          arr3[k++] = arr1[i++];
      }
 
      // now traverse arr2 and insert in arr3
      while (j < n2) {
          arr3[k++] = arr2[j++];
      }
 
      // sort the whole array arr3
      arr3.sort();
  }
  var arr1 = [1, 3, 5, 7];
  var n1 = arr1.length;
  var arr2 = [2, 4, 6, 8];
  var n2 = arr2.length;
  var arr3 = new Array(n1 + n2);
  mergeArrays(arr1, arr2, n1, n2, arr3);
 
  console.log("Array after merging");
  for (var i = 0; i < n1 + n2; i++)
      process.stdout.write(arr3[i] + " ");
 


// or=================================================================================================================================================
// Two pointer solution
// Start by comparing the largest numbers between the two arrays and add to the end of nums1
var merge = function(nums1, m, nums2, n) {
    while (n) {
       if (nums1[m - 1] > nums2[n - 1]) {
         nums1[m + n - 1] = nums1[--m];  
       } else {
         nums1[m + n - 1] = nums2[--n];   
       }
     }
     return nums1;
   };
