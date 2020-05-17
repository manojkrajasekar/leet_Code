let carry = 0;
let r1 = num1.length - 1,
  r2 = num2.length - 1;
let ans = [];

while (r1 >= 0 || r2 >= 0) {
  let n1 = r1 >= 0 ? num1.charCodeAt(r1) - 48 : 0;
  let n2 = r2 >= 0 ? num2.charCodeAt(r2) - 48 : 0;
  ans = ((n1 + n2 + c) % 10) + ans;
  carry = Math.floor((n1 + n2 + c) / 10);
  r1--;
  r2--;
}

if (carry) {
  ans = carry + ans;
}
return ans;
