const express = require('express') // require -> commonJS
const movies = require('./movies.json')
const crypto = require('node:crypto')

const { validateMovie } = require('./schemas/movies')

const app = express()

app.use(express.json())

app.disable('x-powered-by')  // Deshabilitar cabecera de express

// Todos los recuersos que sean movies se identifican con /movies
app.get('/movies', (req, res) => {
    // Forma de trabajar con query params
    const { genre } = req.query

    if (genre) {
        const filterMoviesByGender = movies.filter(movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase()))
        return res.json(filterMoviesByGender)
    }
    res.json(movies)
})

// Forma de trabajar con path params
app.get('/movies/:id', (req, res) => { // path-to-regexp
 const { id } = req.params

 const movie = movies.find(movie => movie.id === id)

 movie ? res.json(movie) : res.status(404).json({ message: 'Movie not found'})

})

app.post('/movies', (req, res) => {
    const result = validateMovie(req.body)

    if(result.error) {
        // 422 Unprocessable Entity
        return res.status(400).json({ message: JSON.parse(result.error.message) })
    }

    // En base de datos
    const newMovie = {
        id: crypto.randomUUID, // uuid v4
        ...result.data
    }

    // ❌ Esto NO seria REST, porque estamos guardando
    // el estado de la aplicación en memoria
    movies.push(newMovie)

    res.status(201).json(newMovie)
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
})