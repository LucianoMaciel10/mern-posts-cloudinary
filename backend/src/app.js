import express from 'express'
import cors from 'cors'
import fileupload from 'express-fileupload'
import postRoutes from './routes/post.routes.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use(fileupload({
  useTempFiles: true,
  tempFileDir: './uploads'
}))

app.use('/api/posts', postRoutes)

export default app