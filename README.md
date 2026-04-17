# S K Ismail Portfolio - Backend Setup

## Quick Start

1. **Install Dependencies**
```bash
npm install
```

2. **Setup Environment**
- Copy `.env.example` to `.env`
- Add your Gmail credentials:
  ```
  EMAIL_USER=your-email@gmail.com
  EMAIL_PASS=your-app-password
  ```

3. **Run Backend**
```bash
npm start
# or for development
npm run dev
```

4. **Open Portfolio**
- Backend: http://localhost:3000
- Your portfolio will be served with working contact form!

## Features Added

✅ **Contact Form Processing**
- Sends emails to your Gmail
- Auto-reply to visitors
- Form validation

✅ **Analytics API**
- Track portfolio visits
- Resume download stats

✅ **Professional Setup**
- Express.js server
- Email automation
- Error handling

## Gmail Setup (Important!)

1. Enable 2-Factor Authentication
2. Generate App Password:
   - Google Account → Security → App passwords
   - Select "Mail" and generate password
3. Use this app password in `.env` file

## Next Steps

- Deploy to Heroku/Railway for live hosting
- Add MongoDB for data storage
- Implement admin dashboard
- Add visitor analytics dashboard
