// for(let index = 0; index <= 20; index++){
//     let c= index;
//     console.log(c)

// }

// for(let i=0; i<= 10 ; i++){
//     let element = i;
//     if(element == 5){
//         console.log("5 is best number")
//     }
//     console.log (i)
// }

// for( let i=1; i<= 5; i++){
//     console.log(`outerloop: ${i}`)
    
//     for( let j=1; j<=10; j++)
//     {
//         console.log(i + '*' + j + '='+ i*j )
//     }
// }

// let myAry =[ "Batman" , "flash" , "superman" ]
// console.log(myAry.length);
//     for(let index=0; index < myAry.length; index++)
// {
//     const element = myAry[index];
//     console.log(element)
// }

// for(let i=1; i<=20; i++){
//     if(i==5){
//         console.log("we finaly find the number 5")
//         break;
//     }
//     console.log(`the value is ${i}`)
// }

for(let i=1; i<=20; i++){
    if(i==5){
        console.log("we finaly find the number 5")
        continue;
    }
    console.log(`the value is ${i}`)
}