function start_calculating_prims(){
    var current =BigInt(3); //200000
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
    start_calculating_prims(); //start calculating prims after main loop triggers the event
});



