/*
sort函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字。比较函数应该具有两个参数 a 和 b，其返回值如下：
若返回值<=-1，则表示 A 在排序后的序列中出现在 B 之前。
若返回值>-1 && <1，则表示 A 和 B 具有相同的排序顺序。
若返回值>=1，则表示 A 在排序后的序列中出现在 B 之后。
*/

var findMedianSortedArrays = function(nums1, nums2) {
  var s = nums1.concat(nums2);
  s.sort(function(a, b) {
    return a - b;
  });

  var len = s.length;
  if (len & 1) return s[~~(len / 2)];
  else return (s[len / 2 - 1] + s[len / 2]) / 2;
};
