import cors, { CorsOptions } from 'cors'

const WHITE_LIST = ['http://localhost:5173']

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true)

    if (WHITE_LIST.includes(origin)) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
}

export default cors(corsOptions)
