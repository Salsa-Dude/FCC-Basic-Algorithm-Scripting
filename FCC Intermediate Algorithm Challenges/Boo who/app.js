
function booWho(bool) {
  
  if(bool === true || bool === false) {
    return true;
  } else {
    return false;
  }
}

console.log(booWho(false));
// booWho(false) should return true.
// booWho([1, 2, 3]) should return false.
// booWho([].slice) should return false.
// booWho({ "a": 1 }) should return false.
// booWho(1) should return false.
// booWho(NaN) should return false.
// booWho("a") should return false.
// booWho("true") should return false.
// booWho("false") should return false.