// .js -> por defecto utiliza CommonJS
// .mjs -> para utilizar ES Modules
// .cjs -> para utilizar CommonJS

import { multiply, sub, sum } from './sum.mjs'

console.log(sum(1, 2))
console.log(sub(1, 2))
console.log(multiply(1, 2))