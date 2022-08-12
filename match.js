const products=[
   {id:1,name:'iphone',price:122},
   {id:2,name:'macbok laptop',price:3122},
   {id:3,name:'xaimon phone',price:4122},
   {id:4,name:'pic phone',price:5122},
   {id:5,name:'laptop core ic',price:6122},
   {id:6,name:'pro book laptop',price:7122},
   {id:7,name:'phone one',price:8122}
];

function match(products,search){
    let match1=[]
    for(const product of products){
       if(product.name.toLowerCase().includes(search.toLowerCase())){
        match1.push(product)
       }
    }
    return match1
}
const check=match(products,'LAPTOP');
console.log(check);