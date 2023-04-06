// function addBinary(a, b) {
//     const sum = parseInt(a, 2) + parseInt(b, 2);
//     return sum.toString(2);
//   }
//   const a = "1010";
//   const b = "1011";
//   const result = addBinary(a, b);
//   console.log(result); // "10101"
  
const addBinary = function(a, b) {
  let carry = 0;
  let result = "";
  let i = a.length - 1;
  let j = b.length - 1;
  
  while(i >= 0 || j >= 0 || carry > 0) {
      let sum = carry;
      if(i >= 0) {
          sum += parseInt(a[i--]);
      }
      if(j >= 0) {
          sum += parseInt(b[j--]);
      }
      result = (sum % 2) + result;
      carry = Math.floor(sum / 2);
  }
  
  return result;
}