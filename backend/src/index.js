import connectDB from './database.js'
import app from './app.js'
import { PORT } from './config.js'

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server on port http://localhost:${PORT}`);
  })
})
