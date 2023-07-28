// Esto sólo en los módulos nativos
// que no tienen promesas nativas

// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

import { readFile } from 'node:fs/promises'

console.log('Leyendo el primer file...')
const text = await readFile('./file.txt', 'utf-8')
console.log('primer texto:', text)
console.log('--> Hacer cosas mientras lee el file...')

console.log('Leyendo el segundo file...')
const secondText = await readFile('./file2.txt', 'utf-8')
console.log('segundo texto:', secondText)