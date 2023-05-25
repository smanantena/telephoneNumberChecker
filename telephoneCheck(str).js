function telephoneCheck(str) {
    let result ;
    if(checkSepartor(str)) {
      if(checkBrackets(str)) {
        if(checkPositionBrackets(str) && checkNumberBrackets(str)) {
          result = checkGeneralCase(str);
        } else {
          result = false;
        }
      } else {
        result = checkGeneralCase(str);
      }
    } else {
      result = false;
    }
    
    return result;
  }
  
  function checkBrackets(str) {
    let result;
    let regExp = /[\(\)]/g;
    result = regExp.test(str);
    return result;
  }
  
  function checkPositionBrackets(str) {
    let result;
    let regExp = /^[1]*[ \-]*\([0-9]{3}\)/;
    result = regExp.test(str)
    return result;
  }
  
  function checkNumberBrackets(str) {
    let result;
    let regExpA = /\(/g;
    let regExpB = /\)/g;
    result = str.match(regExpA).length == 1 && str.match(regExpB).length == 1;
    return result;
  }
  
  function checkNumberQuantity(str) {
    let result;
    let regExp = /[0-9]/g;
    result = str.match(regExp);
    return result;
  }
  
  function checkBeginStr(str) {
    let result;
    let regExp = /^1/;
    result = regExp.test(str);
    return result;
  }
  
  function checkChar(str) {
    let result;
    let regExp = /[*&a-zA-Z#!?]/g;
    result = !regExp.test(str) ;
    return result;
  }
  
  function checkGeneralCase(str) {
    if(!checkChar(str)) {
      return checkChar(str);
    }
    if(checkNumberQuantity(str).length == 10 && checkSepartor(str)) {
      return true;
    } else if(checkNumberQuantity(str).length == 11 && checkSepartor(str)) {
      if(checkBeginStr(checkNumberQuantity(str)[0])) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  
  function checkSepartor(str) {
    let result;
    let regExp = /[0-9]+/g;
    if(str.length > 10) {
      if(str.length > 11) {
         result = (str.match(regExp).length == 4) || (str.match(regExp).length == 3);
      } else if (str.length == 11) {
        result = false;
      }
    } else if(str.length == 10) {
      result = str.match(/[0-9]/g).length == 10;
    }
    return result;
  }
  
  console.log("result -> ",telephoneCheck("11 555-555-5555"));
  //console.log(checkSepartor("(555)5(55?)-5555"));