function palindrome(str) {
    // Good luck!
    return true;
  }
  
  function palindrome(str){
  str=str.replace(/[\W_]/g,"");
  var reverseStr=str. toLowerCase().split("").reverse().join("");
  if(str.toLowerCase === reverseStr)
  {
  
  
    return true;
    }
    else{
      return false;
    }
  }
  
  palindrome("eye");