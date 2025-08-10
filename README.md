# 🎓 E-Learning Platform

A **full-featured MERN stack** online learning platform with secure authentication, video streaming, payment integration, progress tracking, and certification — built to provide a smooth learning experience for students and efficient content management for instructors.

---

## 🚀 Features

### 👤 Authentication & Authorization
- **JWT-based secure authentication** with refresh tokens
- OTP verification for additional security
- Role-based access control (Admin, Instructor, Student)

### 📹 Video Streaming
- **HLS.js integration** for optimized streaming
- Supports **100+ concurrent users**
- Adaptive bitrate for smooth playback

### 💳 Payments & Invoicing
- **Razorpay API** for secure payments
- Auto-generated invoices and payment receipts
- Email notifications for successful transactions

### 📈 Student Dashboard
- Dynamic progress tracking
- Downloadable **PDF certificates** after course completion
- Course progress persistence

### 🗄️ Content & Data Management
- **AWS S3** for secure and scalable media storage
- RESTful APIs for managing courses, lessons, and users
- Nodemailer integration for system emails

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Redux / Context API
- Tailwind CSS
- HLS.js

**Backend:**
- Node.js
- Express.js
- JWT Authentication
- Bcrypt Password Hashing

**Database:**
- MongoDB Atlas (Mongoose ODM)

**Other Integrations:**
- Razorpay API
- AWS S3
- Nodemailer

---

## 📂 Project Structure

e-learning-platform/
│
├── client/ # React frontend
│ ├── public/
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # Route-based pages
│ │ ├── redux/ # Redux store & slices
│ │ └── utils/ # Helper functions
│ └── package.json
│
├── server/ # Node.js backend
│ ├── config/ # DB, AWS, Razorpay config
│ ├── controllers/ # Route logic
│ ├── middlewares/ # Auth & error handling
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API endpoints
│ └── server.js
│
└── README.md

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Nishantjha02/E-learning-website
cd e-learning-platform
2️⃣ Install dependencies
Backend

cd server
npm install
Frontend

cd ../client
npm install
3️⃣ Environment Variables
Create a .env file in the server directory with:

env
Copy
Edit
PORT=5000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
REFRESH_TOKEN_SECRET=<your-refresh-secret>
AWS_ACCESS_KEY_ID=<your-aws-access-key>
AWS_SECRET_ACCESS_KEY=<your-aws-secret-key>
AWS_BUCKET_NAME=<your-aws-s3-bucket>
RAZORPAY_KEY_ID=<your-razorpay-key-id>
RAZORPAY_KEY_SECRET=<your-razorpay-key-secret>
EMAIL_USER=<your-email>
EMAIL_PASS=<your-email-password>
4️⃣ Run the application
Backend

bash
Copy
Edit
cd server
npm run dev
Frontend

bash
Copy
Edit
cd ../client
npm start


🤝 Contributing
Fork the repository

Create a feature branch (git checkout -b feature-name)

Commit changes (git commit -m "Add new feature")

Push to the branch (git push origin feature-name)

Open a Pull Request
