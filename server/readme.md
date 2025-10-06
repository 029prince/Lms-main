# 🎯 SkillAura LMS – Backend API

This is the **backend** for **SkillAura**, a modern, full-stack Learning Management System (LMS) built using **Node.js**, **Express**, **MongoDB**, **Clerk**, **Cloudinary**, and **Stripe**. It powers APIs for user management, course creation, purchase handling, progress tracking, and more.

🔗 **Live Frontend**: [https://lms-frontend-ivory-phi.vercel.app](https://lms-frontend-ivory-phi.vercel.app)  
🔗 **Live Backend**: [https://lms-backend-six-mu.vercel.app](https://lms-backend-six-mu.vercel.app)

---

## 📦 Tech Stack

| Layer       | Technology            |
|-------------|------------------------|
| Runtime     | Node.js               |
| Framework   | Express.js            |
| Database    | MongoDB + Mongoose    |
| Auth        | Clerk.dev             |
| File Upload | Cloudinary + Multer   |
| Payment     | Stripe                |
| Webhooks    | Clerk & Stripe Webhooks |
| Middleware  | Custom + Clerk Auth   |

---

## 🧠 Features

### 👨‍🏫 Educator APIs
- Become an educator (`/update-role`)
- Add new courses (w/ thumbnail upload)
- Dashboard data (total earnings, students, courses)
- List all owned courses
- View enrolled students with purchase data

### 👨‍🎓 User APIs
- Purchase course via Stripe Checkout
- Get enrolled course data
- Track lecture completion
- Rate courses (1-5 stars)
- Fetch course progress (completed lectures)

### 📚 Course APIs
- Get all published courses
- Get course by ID (lectures with preview logic)

### 🔔 Webhooks
- `Stripe`: Handles payment success/failure
- `Clerk`: Syncs user data on creation/update/delete

---

## 📁 Folder Structure
```bash

├── configs/
│ ├── cloudinary.js
│ ├── mongodb.js
│ └── multer.js
├── controllers/
│ ├── courseController.js
│ ├── educatorController.js
│ ├── userController.js
│ └── webhooks.js
├── middlewares/
│ └── authMiddleware.js
├── models/
│ ├── Course.js
│ ├── User.js
│ ├── Purchase.js
│ └── courseProgress.js
├── routes/
│ ├── courseRoute.js
│ ├── educatorRoutes.js
│ └── userRoute.js
├── server.js
└── .env