# 🎯 Hire-Sphere

A full-stack job application tracking platform built with the MERN stack (MongoDB, Express, React, Node.js). Hire-Sphere helps job seekers manage their applications and allows employers to post job openings and review applications.

## ✨ Features

### For Job Seekers
- 📝 User registration and authentication
- 🔍 Browse available job listings
- 📄 Apply to jobs with resume upload
- 📊 Track application status
- 👤 Manage profile and applications

### For Employers
- 🏢 Post job openings
- 📋 View and manage posted jobs
- 👥 Review job applications
- 📎 Download applicant resumes

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **Axios** - HTTP client
- **React Hot Toast** - Notifications
- **Vite** - Build tool

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Cloudinary** - File storage
- **Cookie Parser** - Cookie handling

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** - Choose one option:
  - [MongoDB Community Edition](https://www.mongodb.com/try/download/community) (Local)
  - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (Cloud - Free tier)
  - Docker: `docker run -d -p 27017:27017 --name mongodb mongo:latest`
- **npm** or **yarn** package manager

## 🚀 Installation & Setup

### 1. Clone the Repository

\`\`\`bash
git clone <repository-url>
cd Hire-Sphere-main
\`\`\`

### 2. Backend Setup

\`\`\`bash
# Navigate to backend directory
cd Backend

# Install dependencies
npm install

# Configure environment variables
# Edit config.env with your settings (see Configuration section below)

# Start the backend server
npm run dev
\`\`\`

The backend will run on `http://localhost:4000`

### 3. Frontend Setup

Open a new terminal:

\`\`\`bash
# Navigate to frontend directory
cd Frontend

# Install dependencies
npm install

# Start the development server
npm run dev
\`\`\`

The frontend will run on `http://localhost:5173`

## ⚙️ Configuration

### Backend Environment Variables

Edit `Backend/config.env`:

\`\`\`env
# Server Configuration
PORT=4000
FRONTEND_URL=http://localhost:5173

# Database Configuration
MONGO_URI=mongodb://127.0.0.1:27017/hireland

# JWT Configuration
JWT_SECRET_KEY=your_secret_key_here
JWT_EXPIRE=5d
COOKIE_EXPIRE=5

# Cloudinary Configuration (for file uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
\`\`\`

### Getting Cloudinary Credentials (Optional)

1. Sign up at [Cloudinary](https://cloudinary.com)
2. Go to Dashboard
3. Copy Cloud Name, API Key, and API Secret
4. Update `config.env` with these values

**Note**: File uploads won't work without valid Cloudinary credentials.

## 📁 Project Structure

\`\`\`
Hire-Sphere-main/
├── Backend/
│   ├── controllers/        # Request handlers
│   │   ├── applicationController.js
│   │   ├── jobController.js
│   │   └── userController.js
│   ├── database/          # Database connection
│   │   └── dbConnection.js
│   ├── middlewares/       # Custom middleware
│   │   ├── auth.js
│   │   ├── catchAsyncErrors.js
│   │   └── error.js
│   ├── models/            # Mongoose schemas
│   │   ├── applicationSchema.js
│   │   ├── jobSchema.js
│   │   └── userSchema.js
│   ├── routes/            # API routes
│   │   ├── applicationRouter.js
│   │   ├── jobRouter.js
│   │   └── userRouter.js
│   ├── utils/             # Utility functions
│   ├── app.js             # Express app configuration
│   ├── server.js          # Server entry point
│   ├── config.env         # Environment variables
│   └── package.json
│
└── Frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Application/   # Application components
    │   │   ├── Auth/          # Login/Register
    │   │   ├── Home/          # Homepage
    │   │   ├── Job/           # Job listings & details
    │   │   ├── Layout/        # Navbar, Footer
    │   │   ├── NotFound/      # 404 page
    │   │   └── slices/        # Redux slices
    │   ├── App.jsx            # Main app component
    │   ├── App.css            # Global styles
    │   ├── main.jsx           # Entry point
    │   └── store.js           # Redux store
    ├── public/                # Static assets
    ├── index.html
    ├── vite.config.js
    └── package.json
\`\`\`

## 🔌 API Endpoints

### User Routes (`/api/user`)
- `POST /register` - Register new user
- `POST /login` - User login
- `GET /logout` - User logout
- `GET /getUser` - Get current user (protected)

### Job Routes (`/api/job`)
- `GET /getall` - Get all jobs
- `POST /post` - Post a new job (protected, employer only)
- `GET /getmyjobs` - Get employer's jobs (protected)
- `PUT /update/:id` - Update job (protected, employer only)
- `DELETE /delete/:id` - Delete job (protected, employer only)
- `GET /:id` - Get single job details

### Application Routes (`/api/application`)
- `GET /employer/getall` - Get all applications for employer (protected)
- `GET /jobseeker/getall` - Get all applications for job seeker (protected)
- `DELETE /delete/:id` - Delete application (protected)
- `POST /post` - Submit job application (protected, job seeker only)

## 🎨 Frontend Routes

- `/` - Homepage
- `/login` - Login page
- `/register` - Registration page
- `/job/getall` - Browse all jobs
- `/job/:id` - Job details
- `/job/post` - Post a job (employer only)
- `/job/me` - My posted jobs (employer only)
- `/application/:id` - Apply to a job
- `/application/me` - My applications (job seeker only)

## 🧪 Testing the Application

### 1. Start Both Servers

Make sure both backend and frontend are running:
- Backend: `http://localhost:4000`
- Frontend: `http://localhost:5173`

### 2. Register a User

1. Go to `http://localhost:5173/register`
2. Choose role (Job Seeker or Employer)
3. Fill in the form and submit

### 3. Login

1. Go to `http://localhost:5173/login`
2. Enter credentials
3. You'll be redirected to the homepage

### 4. Test Features

**As Employer:**
- Post a new job
- View your posted jobs
- Review applications

**As Job Seeker:**
- Browse jobs
- Apply to jobs
- View your applications

## 🐛 Troubleshooting

### MongoDB Connection Error

**Error**: `Operation buffering timed out after 10000ms`

**Solution**: Make sure MongoDB is running
\`\`\`bash
# Check MongoDB service (Windows)
Get-Service -Name MongoDB

# Start MongoDB service
net start MongoDB

# Or run MongoDB manually
mongod
\`\`\`

### CORS Errors

**Error**: `Access to XMLHttpRequest has been blocked by CORS policy`

**Solution**: 
- Verify `FRONTEND_URL` in `Backend/config.env` matches your frontend URL
- Restart the backend server

### Port Already in Use

**Error**: `Port 4000 is already in use`

**Solution**:
\`\`\`bash
# Find process using the port
netstat -ano | findstr :4000

# Kill the process (replace PID with actual process ID)
taskkill /PID <PID> /F
\`\`\`

## 📝 Development Scripts

### Backend
\`\`\`bash
npm start       # Start production server
npm run dev     # Start development server with nodemon
\`\`\`

### Frontend
\`\`\`bash
npm run dev     # Start development server
npm run build   # Build for production
npm run preview # Preview production build
npm run lint    # Run ESLint
\`\`\`

## 🔒 Security Notes

- Change `JWT_SECRET_KEY` to a strong, random string in production
- Never commit `config.env` to version control
- Use environment variables for sensitive data
- Enable HTTPS in production
- Implement rate limiting for API endpoints

## 📄 License

This project is licensed under the ISC License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

If you encounter any issues or have questions, please open an issue in the repository.

---

**Happy Job Hunting! 🎉**
