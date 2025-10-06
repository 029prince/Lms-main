import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/mongodb.js';
import { clerkWebhooks, stripeWebhooks } from './controllers/webhooks.js';
import educatorRouter from './routes/educatorRoutes.js';
import { clerkMiddleware } from '@clerk/express';
import connectCloudinary from './configs/cloudinary.js';
import courseRouter from './routes/courseRoute.js';
import userRouter from './routes/userRoute.js';

// Initialize Express
const app = express();

// Connect to database and cloudinary
await connectDB();
await connectCloudinary();

// ✅ CORS Configuration
//const allowedOrigins = ['https://lms-frontend-ivory-phi.vercel.app'];
//const allowedOrigins = ['http://localhost:5173/'];
app.use(cors())

// Clerk Middleware
app.use(clerkMiddleware());

// Routes
app.get('/', (req, res) => {
  res.send("API is working");
});

app.post('/clerk', express.json(), clerkWebhooks);
app.use('/api/educator', express.json(), educatorRouter);
app.use('/api/course', express.json(), courseRouter);
app.use('/api/user', express.json(), userRouter);
app.post('/stripe', express.raw({ type: 'application/json' }), stripeWebhooks);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
