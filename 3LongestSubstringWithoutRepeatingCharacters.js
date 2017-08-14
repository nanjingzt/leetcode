/*
Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. 

Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

var lengthOfLongestSubstring = function(s) {
var arr = s.split('');
    var longest = 0;
    var temp = [];
    arr.forEach(function(value){
        let index_of = temp.indexOf(value);
        if(index_of!=-1){//当前元素已存在
            longest = temp.length > longest ? temp.length : longest;
            for(let i = 0;i <= index_of;i++){
                temp.shift();
            }
        }
        temp.push(value);
    });
    return temp.length > longest ? temp.length : longest;

};
