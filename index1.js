 const numbers=[2,1,3,2,6,4,9,5];
let Sum = 0;
 for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2 !=0){
        Sum =Sum + numbers[i];
    }
 }
 console.log(Sum);