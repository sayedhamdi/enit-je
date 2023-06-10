/*for (let i =0;i<5;i++){
    console.log(i)
}

if (true)
{
    var x = 10;
}
console.log(x);
*/
/*
function sum(x,y){
    return x + y;
}

let sum1 = function(x,y){
    return x+y
}

let sumArrow = (x,y) => {
    return x + y
}
let sumArrowShort = (x,y) => x +y

setTimeout(()=>{
    console.log(sum(1,2))
},3000)

console.log(sum(1,2))
console.log(sum1(1,2))
console.log(sumArrow(1,2))


let t  = [1,2,3]

let t1 = []



for(let i=0;i<t.length;i++){
    t1.push(t[i])
}


t1.push(4)


let t2 = [0,...t1,4,...t]

t2.push(5)

console.log("t est : " + t)
console.log("t1 est : " + t1)
console.log("t2 est : " + t2)

// array destructuring


let valeurLoula = t[0]
let valeurThenya = t[1]
let valeurTheltha = t[2]

let [loula,thenya,theltha,...be9i] = t1

console.log(valeurLoula,valeurThenya,valeurTheltha)

console.log(loula,thenya,theltha,be9i)


let personne =  {
    age : 15,
    nom : "Ahmed",
    prenom : "Mohsen",
    job : "dancer",
    maghroum : ["instagram",'tiktok',"cuisine"],
    valeurBizarre:1
}

let khouh = {
    ...personne,
    nom:"mohsen"
}

console.log(khouh,personne)


let s = "ahmedmohsen"
*/
const persons = [

    { name : "MONCEF" , age: 13} ,
    { name : "BAHIJA" , age: 23} ,
    { name : "ALA" , age: 18} ,
    
    ];


let MineurMajeur = (t)=>{
    let result = []

    for (let i=0;i<t.length;i++){
        if(t[i].age >=18){
            result.push( {...t[i],status:'majeur'})
        }else{
            result.push( {...t[i],status:'mineur'})
        }
    }
    return result
}

console.log(MineurMajeur(persons))




// callback

let calculatrice = (x,y,operation)=>{
    let res = operation(x,y);
    console.log(`resultat est ${res}`)
}

let sum = (x,y)=>x+y
let div = (x,y)=>x/y

calculatrice(4,6,div)


let ps = persons.map(function(p){
    if(p.age >=18){
        return { ...p,status:'majeur'}
    }else{
        return { ...p,status:'mineur'}
    }
})

let ps1 = persons.forEach(p=>{
    console.log("mel for each",p)
    p.name = "ali"
})
console.log(persons)
let double = x=>x*2
console.log([1,2,3,4].map(double))