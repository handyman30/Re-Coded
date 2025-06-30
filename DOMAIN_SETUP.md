# Domain Setup Guide (GoDaddy → Netlify)

## What Needs to Be Done

Now that you have the GoDaddy login details, here's what needs to be set up:

### 1. Add Custom Domain in Netlify

First, in your Netlify dashboard:
1. Go to your site's settings
2. Click on "Domain management"
3. Click "Add custom domain"
4. Enter `re-coded.com.au`
5. Netlify will provide you with DNS settings

### 2. Update DNS in GoDaddy

Log into GoDaddy and navigate to the domain management for `re-coded.com.au`:

#### Option A: Using Netlify DNS (Recommended)
1. In GoDaddy, change the nameservers to Netlify's:
   - `dns1.p05.nsone.net`
   - `dns2.p05.nsone.net`
   - `dns3.p05.nsone.net`
   - `dns4.p05.nsone.net`
2. This gives Netlify full control over the DNS

#### Option B: Using GoDaddy DNS
1. Keep GoDaddy's nameservers
2. Add these DNS records:
   - **A Record**: `@` → Netlify's IP (shown in Netlify dashboard)
   - **CNAME Record**: `www` → `[your-site-name].netlify.app`

### 3. SSL Certificate

Once DNS is configured:
- Netlify will automatically provision an SSL certificate
- This usually takes 10-30 minutes after DNS propagation

### 4. Email Configuration for Resend

To send emails from `hello@re-coded.com.au`, add these DNS records in your DNS provider:

1. **SPF Record** (TXT):
   ```
   Type: TXT
   Name: @
   Value: v=spf1 include:_spf.resend.com ~all
   ```

2. **DKIM Records** (CNAME):
   Resend will provide specific DKIM records when you add the domain in their dashboard

3. **Optional - DMARC Record** (TXT):
   ```
   Type: TXT
   Name: _dmarc
   Value: v=DMARC1; p=none; rua=mailto:hello@re-coded.com.au
   ```

### 5. Update Environment Variables

Once the domain is verified in both Netlify and Resend:

**In Netlify Dashboard:**
```
RESEND_API_KEY=re_Q8Sn6yFj_CxPc1AqpVG5eLiJuuA7gCADk
RECIPIENT_EMAIL=hello@re-coded.com.au  # Remove this for production
```

**In Resend Dashboard:**
1. Go to Domains
2. Add `re-coded.com.au`
3. Follow their DNS verification process

### 6. Update Code for Production

Once domain is verified in Resend, update the email 'from' addresses:

In `app/api/contact/join/route.ts` and `app/api/contact/refer/route.ts`:
```typescript
from: 'Recoded <hello@re-coded.com.au>'  // Instead of onboarding@resend.dev
```

## Timeline

- DNS propagation: 5 minutes to 48 hours (usually within 1 hour)
- SSL certificate: 10-30 minutes after DNS propagation
- Email domain verification: Immediate after DNS records are added

## Testing

After setup:
1. Visit `https://re-coded.com.au` to test the site
2. Test form submissions to ensure emails are working
3. Check SSL certificate is active (padlock in browser) 