//////////////////1///////////////////
//erreyin ici dolu olsa  axrincini ici bos olsa -1
// function sonElemaniGetir(arr) {
//     if (arr.length > 0) {
//         return arr[arr.length - 1];
//     } else {
//         return -1;
//     }
// }
//var myArray = [1, 2, 3, 4, 5];
// var result = sonElemaniGetir(myArray);
// console.log(result);  

// var emptyArray = [];

// var resultEmpty = sonElemaniGetir(emptyArray);
// console.log(resultEmpty);




// 5)  n=7
// 1
// 1 2 
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6 
// 1 2 3 4 5 6 7 
//   var string = ''

//   for (let i = 1; i<=n; i++) {
    
    //     for (let j = 1; j <= i; j++) {
        //       j += string + ' ' 
        //     }
        //     string += '\n'  
        //   }
        //   return string  
        // }
        // console.log(drawPyramid(7))
        
        
        







        
        // 6)  a = 4,b = 5
        // **
        // **
        // **
        // **
        // **
        
        // var a = 4;
        // var b = 5;
        // var star = "";
        
        // for (var i = 0; i < b; i++) {
        //     for (var j = 0; j < a; j++) {
        //         star += "* ";
        //     }
        //     star += "\n";
        // }
        // console.log(star);
        










// 7)  mix array verilib icinde stringleri ekrana cixardın
//         var arr = [1, 'alma', 4, 'heyva', 5, 'armud'];

// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'string') {
//         console.log(arr[i]);
//     }
// }

   





// 8)  mix(yəni string,null,{} və.s) array verilib  icinde ededleri ekrana cixardın 

// var arr = [1, 'alma', 4, 'heyva', 5, 'armud'];
// for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number') {
//             console.log(arr[i]);
//         }
//     }
        
        
        
        






// 9)  bir array və içində bir neçə elementlər var içerisinde sonu 9’olan neçə element var
//     let myArray = [22, 19, 69, 79, 0, 2, 56, 89, 119, 149];

// let j = 1;

// for (let i = 0; i < myArray.length-1; i++) {
//     if (myArray[i] % 10 === 9) {
//         j++;
//     }
// }

// console.log("9la bitenler :" + j);





//10)  input ile daxil olunan ededin sade yoksa mürekkep oldugunu tapin

// var  n=+prompt("eded daxil")
// var say=0
// for (let i=0;i<=n;i++){
//  if( n%i==0){
//     say=say+1
//  }
// }
// if(say>=3){
//   console.log("murekeb")
// }
// else{
//   console.log("sade")
// }



//////////////////////////////////////////////////////////
// let arr = [20,30,66,50,32,90];
// let number = 30;
// let arr2 = []

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > number) {
//         arr2.push(arr[i])
//     }
// }
// // console. log(arr2)
// for (let i = 0; i < arr2.length; i++) {
//     for (let j = i; j < arr2.length; j++) {
//         if (arr2[i] > arr2[j]) {
//             let temp = arr2[i];
//             arr2[i] = arr2[j];
//             arr2[j] = temp;
//         }
//     }
// }
// console.log(arr2);


////////////////////////////////////////////
// var a=+prompt("4 reqemli eded daxil et")
//  var i=0
//  a/10==i
//  var n=0
//  a/100==n


// if (i%2==0 || n%2==0){
//     console.log("cut")
// }
// else if(i%2==0 || n%2!=0){
//     console.log("tek ve cut ");
// }
// else{
//     console.log("tek")
// }






//cabd=n

// let n = +prompt("Dörtrəqəmli bir ədəd daxil edin:");


//     let a = Math.floor((n/10)%10);
//     let b = (n %100);
//     let cavab;

//     if (a % 2 === 0 && b % 2 === 0) {
//         cavab = "Hər ikisi cutdur.";
//     } else if (a % 2 !== 0 && b % 2 === 0) {
//         cavab = "Biri təkdir, biri cutdur.";
//     } else if (a % 2 === 0 && b % 2 !== 0) {
//         cavab = "Biri cutdur, biri təkdir.";
//     } else {
//         cavab = "Hər ikisi də təkdir.";
//     }

//     console.log(cavab);

//n=cabn   n/100   n/10
// let n = +prompt("Dörtrəqəmli bir ədəd daxil edin:");

// // Sayının onlar basamağı
// let b= Math.floor(n % 100);
// // Sayının yüzler basamağı
// let a= n %10;
// let cavab;


// if (a % 2 === 0 && b % 2 === 0) {
//     cavab = "Hər ikisi cutdur.";
// } else if (a % 2 !== 0 && b % 2 === 0) {
//     cavab = "Biri təkdir, biri cutdur.";
// } else if (a % 2 === 0 && b % 2 !== 0) {
//     cavab = "Biri cutdur, biri təkdir.";
// } else {
//     cavab = "Hər ikisi də təkdir.";
// }

// console.log(cavab);



//11)  input ile daxil olunan ededin reqemlerinnen en boyuyunu tapin

// let n = +prompt("Bir ədəd daxil edin:");

//     let r = -1;
//     while (n > 0) {
//         let temp = n % 10;
//         if (temp > r) {
//             r = temp;
//         }
//         n = Math.floor(n / 10);
//     }

//     console.log("Ən böyük rəqəm: " + r);




function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let userInput = prompt("Bir ədəd daxil edin:");
let startingNumber = parseInt(userInput);

if (isNaN(startingNumber)) {
    console.log("Düzgün ədəd daxil etməmisiniz.");
} else {
    let n = prompt("N-i daxil edin:");
    let count = 0;
    let currentNumber = startingNumber + 1;

    while (count < n) {
        if (isPrime(currentNumber)) {
            count++;
        }
        currentNumber++;
    }

    console.log("Daxil edilmiş ədəddən sonraki ilk " + n + " sadə ədəd: " + (currentNumber - 1));
}








