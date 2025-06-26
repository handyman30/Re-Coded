# Environment Setup

## Create .env.local file

Create a `.env.local` file in the root directory of the project with the following content:

```
RESEND_API_KEY=re_SwyVDDAp_D9LDWR8w7LoCV9TM3cyTaBC7
```

This file should be in the same directory as your `package.json` file.

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

Emails will be sent to `hello@re-coded.com.au` 