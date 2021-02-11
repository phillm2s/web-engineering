
self.addEventListener("message", function(e){
    console.log("worker started");
    var primCounter =0;
    for(let i=0; i < e.data; i++){
        if(isPrim(i))
            primCounter++;
    }
    console.log("work finished");
    self.postMessage(primCounter);
})

function isPrim(number){
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