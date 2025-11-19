import { CLOUD_API_KEY, CLOUD_API_SECRET, CLOUD_NAME } from '../config.js'

import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUD_API_KEY,
  api_secret: CLOUD_API_SECRET
})

export default cloudinary