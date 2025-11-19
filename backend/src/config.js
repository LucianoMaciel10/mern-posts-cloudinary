import dotenv from 'dotenv'
dotenv.config()

export const PORT = process.env.PORT || 4000
export const URI = process.env.MONGODB_URI || 'mongodb://localhost/postsapp'
export const CLOUD_NAME = process.env.CLOUD_NAME || 'da2dlmoen'
export const CLOUD_API_KEY = process.env.CLOUD_API_KEY || '253529366749748';
export const CLOUD_API_SECRET = process.env.CLOUD_API_SECRET || 'lipWuZsXU_okSJ_tc80FuXU9g-k';