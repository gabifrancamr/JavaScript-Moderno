//Operador de Coalescência Nula
//ignora Null e undefined

let a = 0

let b = a || 42

console.log(a, b)

b = a ?? 42

console.log({a, b})

let c = null ?? 42

console.log({c})