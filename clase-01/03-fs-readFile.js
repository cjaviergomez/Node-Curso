const fs = require('node:fs')

console.log('Leyendo el primer archivo...')
fs.readFile('./file.txt', 'utf-8', (err, text) => { // <---- ejecutas este callback
  console.log('primer texto:', text)
})

console.log('--> Hacer cosas mientras lee el file...')

console.log('Leyendo el segundo file...')
fs.readFile('./file2.txt', 'utf-8', (err, text) => {
  console.log('segundo texto:', text)
})