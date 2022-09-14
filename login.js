let num=13;
let count=0;

 for (i=0;i<=num;i++){
   if (num%i==0){
      count++;
    }
}
   if (count==2){
      console.log("Num is Prime")
  }else{
      console.log("Num is not prime)