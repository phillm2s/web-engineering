export function jsIsPrim(number){
    //return 1 for prim and 0 for not prim
    if(number <=1){
      return 0;
    }
  
    for(let i=2 ; i<= (number/2)+1 ; i++){
        if(number%i===0){
            return 0;
        }
    }
    return 1;
}