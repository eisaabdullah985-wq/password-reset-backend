# 🔐 Password Reset Backend

This is the backend service for the Password Reset Flow application.  
It handles authentication, password reset via email, and secure token validation.

---

## 🚀 Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- crypto
- Nodemailer

---

## 🔁 Password Reset Flow
1. User submits email for password reset
2. Secure random token is generated
3. Token is hashed and stored in DB with expiry time
4. Reset link is emailed to the user
5. Token is verified on reset request
6. Password is updated and token is cleared

---

## 🔐 Security Features
- Hashed reset tokens
- Token expiry (10 minutes)
- One-time token usage
- Password hashing using bcrypt
- Protection against user enumeration