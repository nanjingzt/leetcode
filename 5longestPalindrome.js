var longestPalindrome  = function (s) {
    var t = s.split("").join("#"); 
    var c = 1, e = 0, cs = 0;
    t = "~" + t + "#";

    for (var j = 1, lenj = t.length - 1; j < lenj; j++, c = 1) {
        while (t[j + c] === t[j - c]){
            c++;
        }

        if (c > e) {
            e = c;
            cs = j;
        }
    }
    var start = cs - e + 1;
    var end = cs + e;
    var result = t.slice(start,end).replace(/#/g, "").replace(/~/g, ""); 
    return result;
};
