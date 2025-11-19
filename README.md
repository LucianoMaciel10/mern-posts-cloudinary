# MERN Stack Posts Application with Image Upload

Full-stack posts application with image upload to Cloudinary. Built with MongoDB, Express, React, and Node.js.

## 🚀 Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express 5** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **Cloudinary** - Cloud image storage
- **express-fileupload** - File upload middleware
- **fs-extra** - File system utilities
- **Morgan** - HTTP request logger
- **CORS** - Cross-origin resource sharing

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM v7** - Client-side routing
- **Axios** - HTTP client
- **Formik** - Form management
- **Yup** - Schema validation
- **Tailwind CSS v4** - Styling
- **React Hot Toast** - Toast notifications
- **React Icons** - Icon library

## 📁 Project Structure

```
backend/
├── src/
│   ├── controllers/
│   │   └── post.controllers.js    # CRUD logic
│   ├── libs/
│   │   └── cloudinary.js          # Cloudinary config
│   ├── models/
│   │   └── post.model.js          # Post schema
│   ├── routes/
│   │   └── post.routes.js         # API endpoints
│   ├── app.js                     # Express app setup
│   ├── config.js                  # Environment config
│   ├── database.js                # MongoDB connection
│   └── index.js                   # Server entry point
├── uploads/                       # Temp file storage
└── .env

frontend/
├── src/
│   ├── api/
│   │   └── posts.js               # API requests
│   ├── components/
│   │   └── PostCard.jsx           # Post card component
│   ├── context/
│   │   └── PostContext.jsx        # Global state
│   ├── pages/
│   │   ├── Home.jsx               # Posts list
│   │   ├── PostForm.jsx           # Create/Edit form
│   │   ├── NotFound.jsx           # 404 page
│   │   └── index.js               # Pages export
│   ├── App.css                    # Custom styles
│   ├── App.jsx                    # Main component
│   ├── index.css                  # Tailwind imports
│   └── main.jsx                   # React entry point
└── vite.config.js
```

## 🔑 Features

### Posts Management
- **Create Posts**: Add posts with title, description, and optional image
- **Read Posts**: Display all posts in responsive grid
- **Update Posts**: Edit existing posts and replace images
- **Delete Posts**: Remove posts with confirmation toast
- **Image Upload**: Upload images to Cloudinary
- **Image Management**: Automatic deletion from Cloudinary when post/image is removed

### Form & Validation
- **Formik**: Form state management
- **Yup**: Client-side validation
- **File Upload**: Image upload with preview
- **Loading States**: Visual feedback during operations

### UI/UX
- Tailwind CSS responsive design
- Toast notifications for user actions
- Responsive grid layout (3 → 2 → 1 columns)
- Confirmation dialogs for destructive actions
- Loading spinners

## 📊 Data Model

### Post Schema
```javascript
{
  title: String (required, trimmed),
  description: String (required, trimmed),
  image: {
    url: String,
    public_id: String
  }
}
```

## 🛣️ API Endpoints

### Posts
- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create new post (with multipart/form-data)
- `GET /api/posts/:id` - Get single post
- `PUT /api/posts/:id` - Update post (with multipart/form-data)
- `DELETE /api/posts/:id` - Delete post (and Cloudinary image)

## 📝 Environment Variables

Backend `.env`:
```env
PORT=4000
MONGODB_URI=mongodb://localhost/postsapp
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret
```

## 🎯 Routes (Frontend)

- `/` - Home (posts list)
- `/new` - Create new post
- `/posts/:id` - Edit post
- `*` - 404 Not Found

## 🎨 Key Components

### Backend
- **express-fileupload**: Handles file uploads with temp storage
- **Cloudinary Integration**: Uploads images and manages deletions
- **fs-extra**: Cleans up temp files after upload
- **Error Handling**: Comprehensive error responses

### Frontend
- **PostContext**: Global state with Context API
- **PostCard**: Reusable card with delete confirmation
- **PostForm**: Single form for create/edit with Formik
- **React Hot Toast**: Custom toast notifications with actions

## 🔄 Key Workflows

### Image Upload Flow
1. User selects image in form
2. File stored in `./uploads` (temp)
3. Uploaded to Cloudinary on submit
4. Temp file deleted with fs-extra
5. URL and public_id stored in MongoDB

### Image Update Flow
1. Old image deleted from Cloudinary (if exists)
2. New image uploaded
3. Database updated with new URL/public_id

### Post Delete Flow
1. Post deleted from MongoDB
2. Image deleted from Cloudinary (if exists)
3. State updated in frontend

## ⚙️ Configuration

- **Backend Port**: 4000
- **Frontend Dev Server**: Vite default (5173)
- **Database**: MongoDB local instance
- **File Upload**: Temp files stored in `./uploads`
- **Image Storage**: Cloudinary (folder: "posts")

## 🎨 Responsive Design

Grid breakpoints:
- **Desktop (>1024px)**: 3 columns
- **Tablet (770px-1024px)**: 2 columns
- **Mobile (<770px)**: 1 column

---

**Note**: This is a learning project demonstrating full-stack MERN development with file uploads, cloud storage integration (Cloudinary), and modern form handling (Formik + Yup).