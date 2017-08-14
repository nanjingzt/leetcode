/*
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

意思就是数字被逆序拆分保存在链表的各个节点中，现有两条链表，要将这两条链表相加返回新的链表。
以示例来说原数字为342和465，所以相加结果为807。
*/

var addTwoNumbers = function(l1, l2) {  
  const res = test(l1,l2,[],false);
  return res;
};  

var test = function(l1,l2,res,overflow=false){
    res = res||[];
    l1=l1||{val:0,next:null};//这里判断传入的数组是否存在
    l2=l2||{val:0,next:null};//如果不存在就给他赋值后面的对象

    //这里计算想加后的结果，Number() 函数把对象的值转换为数字
    const val = l1.val+l2.val+Number(overflow);

    if(val>=10){
        res.push(val%10);
        overflow=true;
    }else{
        res.push(val);
        overflow=false;
    }
    //所有的对象都被当作 true
    //当且仅当字符串为空时，该字符串被当作 false
    //null 和 undefined 被当作 false
    //当且仅当数字为零时，该数字被当作 false 
    if(l1.next||l2.next||overflow){
        test(l1.next,l2.next,res,overflow);
    }

    return res;
}
