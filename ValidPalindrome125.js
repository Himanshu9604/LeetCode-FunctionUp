// let str="A man, a plan, a canal: Panama"
// let s=str.split(" ").join("")
// let len=str.length
// function Palindrome(){
//     for(let i=0;i<len/2;i++){
//         if(str[i]!==str[len-i-1]){
//             return false;
//         }
//     }
//     return true
// }
// console.log(Palindrome("A man, a plan, a canal: Panama"));
// console.log(s);



var isPalindrome = function(s) {
    s=s.toLowerCase().replace(/[^a-z0-9]/g, '');

    for(let i=0;i<s.length/2;i++){
        if(s[i]!==s[s.length-i-1]){
            return false;
        }
    }
    return true
}

console.log(isPalindrome("race a car"));
