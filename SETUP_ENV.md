# Environment Setup

## Create .env.local file

Create a `.env.local` file in the root directory of the project with the following content:

```
RESEND_API_KEY=re_Q8Sn6yFj_CxPc1AqpVG5eLiJuuA7gCADk

# For testing - use your own email
RECIPIENT_EMAIL=your-test-email@gmail.com
```

This file should be in the same directory as your `package.json` file.

## Testing Email Setup

Since you don't have access to `hello@re-coded.com.au`, add your own email to test:
1. Set `RECIPIENT_EMAIL` to your email address
2. All form submissions will go to your test email
3. When ready for production, remove this line (defaults to client's email)

## Alternative Solutions (If Resend Doesn't Work)

### 1. FormSubmit (No Backend Required)
```html
<!-- Replace form action with -->
<form action="https://formsubmit.co/your-email@example.com" method="POST">
```
- Free, no registration needed
- Just change the email in the URL
- Add `_next` hidden field for redirect

### 2. Web3Forms (Simple API)
```javascript
const response = await fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    access_key: 'YOUR_ACCESS_KEY',
    ...formData
  })
})
```
- Get free key at web3forms.com
- No domain verification needed

### 3. EmailJS (Client-Side)
```javascript
emailjs.send('service_id', 'template_id', formData, 'public_key')
```
- Works directly from browser
- No server needed
- Free tier available

## Debugging Tips

1. Check browser console for detailed errors
2. Check terminal/server logs for API errors
3. Try sending without attachments first
4. Verify Resend dashboard for failed attempts

## Important Notes

1. The `.env.local` file is already in `.gitignore`, so it won't be committed to version control
2. This API key enables email functionality for both forms:
   - Join Our Network (with CV upload)
   - Refer a Friend

## Features Now Available

1. **Drag & Drop Resume Upload**
   - Drag and drop PDF/Word files directly
   - Visual feedback during drag
   - File size validation (max 5MB)

2. **Auto-Submit on Upload**
   - When basic info is filled (name & email), the form auto-submits when a resume is uploaded
   - If info is missing, user gets a friendly reminder to fill it first

3. **Enhanced User Experience**
   - Loading states
   - Success notifications
   - Error handling
   - File removal option

## Testing

After creating the `.env.local` file:

1. Restart your development server: `npm run dev`
2. Test the forms at:
   - `/join` - Join Our Network
   - `/refer` - Refer a Friend

Emails will be sent to the email specified in `RECIPIENT_EMAIL` environment variable. 