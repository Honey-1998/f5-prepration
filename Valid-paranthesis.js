// /**
//  * @param {string} s
//  * @return {boolean}
//  */
var isValid = function(str) {
    
 
    //to get closing to opening braces
    let obj={
      ')':'(',
      '}':'{',
      ']':'[',
    }
     
    let new_arr=[]
    for(let i=0; i<str.length;i++){
      
      if(str[i]=='('||str[i]=='{'||str[i]=='['){
        new_arr.push(str[i])
       
      }
      else if(new_arr.length==0||new_arr.pop()!= obj[str[i]]){
     
       return false;
       
      }
    }
     
    if(new_arr.length==0){
    return true
    }else{
      return false
    }
     
    };
    