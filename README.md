# SecureVault

## Overview
SecureVault is a secure client login/signup data storage system built with Node.js and MongoDB. It features encryption, advanced search filters, OTP verification for document retrieval, and file storage capabilities.

## Features
✅ **User Authentication** (Signup/Login)
✅ **AES Encryption** for sensitive data (passwords, keys, etc.)
✅ **OTP Verification** for retrieving stored files
✅ **Advanced Search Filters** (Website Type, Username, Email, etc.)
✅ **File Upload & Retrieval** (Images, PDFs)
✅ **Secure API with JWT Authentication**

## Project Structure
```
/SecureVault
│── /backend
│   │── /config
│   │   ├── db.js
│   │── /models
│   │   ├── User.js
│   │   ├── Login.js
│   │── /routes
│   │   ├── authRoutes.js
│   │   ├── fileRoutes.js
│   │── /controllers
│   │   ├── authController.js
│   │   ├── fileController.js
│   │   ├── otpController.js
│   │── /middleware
│   │   ├── authMiddleware.js
│   │── /utils
│   │   ├── encrypt.js
│   │── /uploads (for storing files)
│   │── .env
│   │── server.js
│── /mobile (React Native frontend)
│   │── /screens
│   │── /components
│   │── App.js
│── package.json
│── README.md
```

## Installation & Setup

### 1️⃣ Backend Setup
#### Clone the repository:
```sh
git clone https://github.com/your-repo/SecureVault.git
cd SecureVault/backend
```
#### Install dependencies:
```sh
npm install
```
#### Create a `.env` file and add the following variables:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/SecureVaultDB
JWT_SECRET=your_secret_key
TWILIO_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
ENCRYPTION_SECRET=your_encryption_key
```
#### Start the server:
```sh
npm start
```

### 2️⃣ React Native Frontend Setup
```sh
cd ../mobile
npm install
npm start
```

## API Endpoints
### Authentication
- **Signup:** `POST /api/auth/signup`
- **Login:** `POST /api/auth/login`
- **Send OTP:** `POST /api/auth/send-otp`
- **Verify OTP:** `POST /api/auth/verify-otp`

### File Upload & Retrieval
- **Upload File:** `POST /api/files/upload`
- **Get Files:** `GET /api/files`
- **Delete File:** `DELETE /api/files/:id`

### Advanced Search
- **Search Users:** `GET /api/auth/search?username=xyz&email=abc@example.com&websiteType=Crypto`

## Security Measures
✅ **AES Encryption** for passwords and sensitive data
✅ **JWT Authentication** for protected routes
✅ **Multer File Storage** for images/PDFs
✅ **OTP Verification** before accessing documents

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any improvements.

## License
This project is licensed under the MIT License.

---
🚀 **Developed by Jayakumar** 🚀

