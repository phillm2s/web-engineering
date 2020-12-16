function start_calculating_prims(){
    var current =BigInt(3); 
    while(ture){
        while(true){
            if(isPrim(current)){
                postMessage(current);  //post new prim to main loop
            }
            current++;
        }
    }
}

function isPrim(number){
    for(var i = BigInt(2); i < number; i++){
        if(number % i === BigInt(0)) {return false};
    }
    return true;
}


addEventListener(message, function(e){
    start_calculating_prims(); //wait for main loop starts this event
});



