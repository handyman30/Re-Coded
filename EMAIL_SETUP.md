# Email Setup Instructions

This website uses Resend for sending emails. Follow these steps to set up email functionality:

## 1. Create a Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

## 2. Get Your API Key

1. Once logged in, go to [API Keys](https://resend.com/api-keys)
2. Click "Create API Key"
3. Give it a name (e.g., "Recoded Website")
4. Copy the API key

## 3. Set Up Environment Variables

Create a `.env.local` file in the root directory with:

```
RESEND_API_KEY=re_YOUR_API_KEY_HERE
```

## 4. Domain Verification (For Production)

To send emails from `hello@re-coded.com.au`, you need to verify the domain:

1. Go to [Domains](https://resend.com/domains)
2. Click "Add Domain"
3. Enter `re-coded.com.au`
4. Add the DNS records provided by Resend to your domain
5. Wait for verification (usually takes a few minutes)

## 5. Update Email Addresses

Once the domain is verified, update the 'from' email in:
- `app/api/contact/join/route.ts`
- `app/api/contact/refer/route.ts`

Change from:
```typescript
from: 'Recoded Website <onboarding@resend.dev>'
```

To:
```typescript
from: 'Recoded <hello@re-coded.com.au>'
```

## Testing

For testing, you can use the default `onboarding@resend.dev` email which is provided by Resend for development.

## Current Implementation

The website has two forms that send emails:

1. **Join Our Network** (`/join`)
   - Sends application details with CV attachment
   - Sends confirmation email to applicant

2. **Refer a Friend** (`/refer`)
   - Sends referral details
   - Sends confirmation email to referrer

Both forms include:
- Client-side validation
- Loading states
- Success/error notifications
- Automatic form reset on success

## Email Templates

Emails are sent in HTML format with:
- Professional formatting
- Clear subject lines
- Relevant information organized in sections
- Confirmation emails to users 