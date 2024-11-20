


let a = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10]

let t = []
for(let i=0;i<a.length;i++){
    t.push(a[i]*2)
}

console.log(t)

// for(let i in a){
//     console.log(a[i])
// }

// for(let i of a){
//     console.log(i)
// }

for(let i=a.length-1;i>0;i--){
    console.log(a[i])
}

// a.forEach((item)=>{
//     console.log(item)
// })