// Esto sólo en los módulos nativos
// que no tienen promesas nativas

// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

// const { readFile } = require('node:fs/promises')
const fs = require('node:fs/promises')

async function init () {
  console.log('Leyendo el primer file...')
//   const text = await readFile('./file.txt', 'utf-8')
  const text = await fs.readFile('./file.txt', 'utf-8')
  console.log('primer texto:', text)
  console.log('--> Hacer cosas mientras lee el file...')
  
  console.log('Leyendo el segundo file...')
//   const secondText = await readFile('./file2.txt', 'utf-8')
  const secondText = await fs.readFile('./file2.txt', 'utf-8')
  console.log('segundo texto:', secondText)    
}

init()

// IIFE - Inmediatly Invoked Function Expression
// ;(
//   async () => {
//     console.log('Leyendo el primer file...')
//     const text = await readFile('./file.txt', 'utf-8')
//     console.log('primer texto:', text)
//     console.log('--> Hacer cosas mientras lee el file...')
    
//     console.log('Leyendo el segundo file...')
//     const secondText = await readFile('./file2.txt', 'utf-8')
//     console.log('segundo texto:', secondText)    
//   }
// )()