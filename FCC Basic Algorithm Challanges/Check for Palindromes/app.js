
function palindrome(str) {
  const symbols = /\W|_/g;
  str = str.replace(symbols, '').toLowerCase();
  let palindromic = str.replace(symbols, '').toLowerCase();
  palindromic = palindromic.split('').reverse().join('');
  
  if(palindromic === str) {
    console.log('TRUE');
  } else {
    console.log('FALSE');
  }
}

palindrome("A man, a plan, a canal. Panama");
// palindrome("_eye") should return true.
// palindrome("race car") should return true.
// palindrome("not a palindrome") should return false.
// palindrome("A man, a plan, a canal. Panama") should return true.
// palindrome("never odd or even") should return true.
// palindrome("nope") should return false.
// palindrome("almostomla") should return false.
// palindrome("My age is 0, 0 si ega ym.") should return true.
// palindrome("1 eye for of 1 eye.") should return false.
// palindrome("0_0 (: /-\ :) 0-0") should return true.
// palindrome("five|\_/|four") should return false.