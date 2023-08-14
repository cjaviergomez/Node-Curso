import cors from 'cors';

const VALID_ORIGINS = [
    'http://localhost:1234',
    'http://localhost:8080',
    'https://movies.com'
]
export const corsMiddleware = ({ acceptedOrigins = VALID_ORIGINS } = {}) => cors({
    origin: (origin, callback) => {
        if(acceptedOrigins.includes(origin) || !origin) return callback(null, true)
        return callback(new Error('Not allowed by CORS'))
    }
})