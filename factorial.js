// let fac=1;
// for(let i=5;i>=1;i--){
//      fac=fac*i

// }
// console.log(fac);
// function fac(n){
//      if(n==1){
//           return 1;
//      }
//      return n*fac(n-1);
// }
// const check=fac(5);
// console.log(check)

// function onoTo10(i){
//      if(i==5){
//           return 5;
//      }
//      return i+onoTo10(i++);
// }
// const check=onoTo10(1);
// console.log(check)

function counter(value, limit) {
     if(value === limit) {
       console.log(value);
     } else {
       console.log(value); // on the way down / going deeper (increment)
       counter(value+1,10);
       console.log(value); // on the way up / coming up from the depths (decrement)
     }
   }
   
   counter(0,10);