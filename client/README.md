# 🎓 SkillAura LMS – Frontend

Welcome to **SkillAura**, a modern and interactive **Learning Management System** built for students and educators. This is the **frontend** application developed in **React** and styled with **Tailwind CSS**, integrated with **Clerk** for authentication and **Stripe** for secure payments.

🌐 **Live Demo**: [https://lms-frontend-ivory-phi.vercel.app](https://lms-frontend-ivory-phi.vercel.app)  
🔗 **Live Backend**: [https://lms-backend-six-mu.vercel.app](https://lms-backend-six-mu.vercel.app)

---


## 🚀 Features Overview


### 👨‍🎓 Student Features:
- **Browse and Explore** published courses.
- **Search** courses using keywords.
- **View Course Details** and preview free lectures.
- **Enroll & Purchase** courses securely via Stripe.
- **Watch Lectures** via embedded YouTube player.
- **Mark lectures as completed** to track progress.
- **Rate Courses** after completion.
- **My Enrollments** page to view all purchased courses.

### 👨‍🏫 Educator Features:
- **Educator Dashboard** with total earnings and enrolled students.
- **Add Courses** with structured chapters and lectures.
- **Upload thumbnails** via Cloudinary integration.
- **Manage My Courses** (draft/published).
- **Track Students** who purchased each course.

---

## ⚙️ Technologies Used

| Category            | Tools & Libraries                              |
|---------------------|-------------------------------------------------|
| **Frontend**        | React, Vite, Tailwind CSS                      |
| **Routing**         | React Router DOM                               |
| **Auth**            | Clerk.dev                                      |
| **Payment**         | Stripe                                         |
| **Video Embeds**    | YouTube Embed API                              |
| **State Management**| React Context API                              |
| **API Calls**       | Axios                                          |
| **Notifications**   | React Toastify                                 |
| **Rich Text**       | Quill Editor (Educator Add Course)             |

---

## 📁 Project Structure

```bash
src/
│
├── assets/                 # Icons, logos, dummy data
├── components/             # UI components (Navbar, Footer, Rating)
│   ├── student/
│   └── educator/
│
├── context/
│   └── AppContext.jsx      # Centralized state (user, courses, etc.)
│
├── pages/
│   ├── student/            # Student-facing pages
│   └── educator/           # Educator-facing dashboard
│
├── App.jsx                 # Route config and layout logic
└── main.jsx                # Root rendering with Clerk and Router
