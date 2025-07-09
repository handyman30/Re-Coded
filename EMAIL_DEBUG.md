# Email Debugging Guide

## Current Issue: External emails not sending

Charlie can send to other recoded emails (internal), but external emails are failing. This suggests the issue is with the **Resend email service**, not the HostGator mail server.

## Quick Debug Steps

### 1. Test Email Configuration
Visit this URL to test your email setup:
```
https://your-netlify-site.netlify.app/api/test-email
```

This will tell you:
- ✅ If Resend API key is configured
- ✅ If emails can be sent
- ✅ Any specific error messages

### 2. Check Netlify Environment Variables
In your Netlify dashboard:
1. Go to Site Settings → Environment Variables
2. Verify `RESEND_API_KEY` is set to: `re_Q8Sn6yFj_CxPc1AqpVG5eLiJuuA7gCADk`

### 3. Check Resend Dashboard
1. Go to [https://resend.com](https://resend.com)
2. Log in and check:
   - **API Keys**: Verify the key is active
   - **Domains**: Check if `re-coded.com.au` is verified
   - **Logs**: Look for failed email attempts

## Common Issues & Solutions

### Issue 1: API Key Not Configured
**Symptoms**: "Email service is not configured" error
**Solution**: Add `RESEND_API_KEY` to Netlify environment variables

### Issue 2: Domain Not Verified
**Symptoms**: Emails sent but not delivered
**Solution**: 
1. In Resend dashboard, add `re-coded.com.au` domain
2. Add DNS records (SPF, DKIM) to GoDaddy
3. Wait for verification

### Issue 3: Sending Limits Reached
**Symptoms**: "Rate limit exceeded" errors
**Solution**: 
- Free Resend plan: 100 emails/day
- Check usage in Resend dashboard
- Upgrade plan if needed

### Issue 4: Wrong "From" Email
**Current**: `onboarding@resend.dev` (development)
**Should be**: `hello@re-coded.com.au` (production)

## DNS Records Needed for Resend

Add these to GoDaddy DNS:

### SPF Record (TXT)
```
Type: TXT
Name: @
Value: v=spf1 include:_spf.resend.com ~all
```

### DKIM Records (CNAME)
Resend will provide specific DKIM records when you add the domain.

### DMARC Record (TXT) - Optional
```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=none; rua=mailto:hello@re-coded.com.au
```

## Immediate Fixes

### Option 1: Use Development Email (Quick Fix)
The current code uses `onboarding@resend.dev` which should work immediately.

### Option 2: Update to Production Email
Once domain is verified, update the "from" email in:
- `app/api/contact/join/route.ts`
- `app/api/contact/refer/route.ts`
- `app/api/contact/consulting/route.ts`

Change from:
```typescript
from: 'Recoded Website <onboarding@resend.dev>'
```

To:
```typescript
from: 'Recoded <hello@re-coded.com.au>'
```

## Testing Steps

1. **Test the API endpoint**: Visit `/api/test-email`
2. **Test form submissions**: Try the join/refer forms
3. **Check browser console**: Look for error messages
4. **Check Netlify logs**: Go to Functions tab in Netlify dashboard

## Alternative Solutions

If Resend continues to have issues:

### Option 1: FormSubmit (No Backend)
```html
<form action="https://formsubmit.co/hello@re-coded.com.au" method="POST">
```

### Option 2: Web3Forms
```javascript
// Use the existing web3forms route
```

### Option 3: EmailJS (Client-side)
```javascript
// Send emails directly from browser
```

## Next Steps

1. **Test the `/api/test-email` endpoint**
2. **Check Netlify environment variables**
3. **Verify Resend dashboard configuration**
4. **Add DNS records if domain not verified**
5. **Update "from" email once verified**

## Contact Information

- **Resend Support**: [https://resend.com/support](https://resend.com/support)
- **Netlify Support**: [https://netlify.com/support](https://netlify.com/support)
- **GoDaddy DNS**: Log into GoDaddy account to manage DNS records 