const Marks=[90,98,82,78,80];
 
let LargestNumber =Marks[0];

for(let i =1;i<Marks.length;i++){
    if(Marks[i]>LargestNumber){
        LargestNumber=Marks[i];

    }
}
console.log(LargestNumber);