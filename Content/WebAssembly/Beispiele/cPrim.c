int isPrim(number) 
{ //0==false, 1==true
    if(number <1)
    {
      return 0;
    }
  
    for(int i=2 ; i<= (number/2)+1 ; i++){
        if(number%i==0){
            return 0;
        }
    }
    return 1;
}