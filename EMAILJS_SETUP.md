# EmailJS Setup Guide

This guide will help you set up EmailJS to enable the contact form on your portfolio website.

## What is EmailJS?

EmailJS allows you to send emails directly from your frontend application without needing a backend server. It's perfect for contact forms on static websites.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)
3. Verify your email address

## Step 2: Add an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook**
   - **Yahoo**
   - Or any other SMTP service
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID** (e.g., `service_abc123`)

### For Gmail:
- You'll need to enable "Less secure app access" or use an App Password
- Or use OAuth2 for better security (recommended)

## Step 3: Create an Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Use the following template structure:

**Template Name:** `contact_form` (or any name you prefer)

**Subject:** `New Contact Form Message from Portfolio`

**Content:**
```
From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

**Template Variables:**
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - Message content
- `{{to_email}}` - Your email (optional, can be set in template)

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in your EmailJS dashboard
2. Find your **Public Key** (also called API Key)
3. Copy it (e.g., `abcdefghijklmnop`)

## Step 5: Configure Environment Variables

### For Local Development:

1. Create a `.env` file in the root of your project (if it doesn't exist)
2. Add the following variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

3. Replace the placeholder values with your actual EmailJS credentials

**Example:**
```env
VITE_EMAILJS_SERVICE_ID=service_gmail123
VITE_EMAILJS_TEMPLATE_ID=template_contact456
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

### For Vercel Deployment:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:
   - `VITE_EMAILJS_SERVICE_ID` = your service ID
   - `VITE_EMAILJS_TEMPLATE_ID` = your template ID
   - `VITE_EMAILJS_PUBLIC_KEY` = your public key
4. Make sure to set them for **Production**, **Preview**, and **Development** environments
5. Redeploy your application

## Step 6: Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email inbox for the message
5. Check the browser console for any errors

## Troubleshooting

### Form shows "Email service is not configured"
- Make sure all three environment variables are set
- Restart your development server after adding `.env` file
- For Vercel, make sure variables are set and you've redeployed

### "Failed to send message" error
- Check that your EmailJS service is properly connected
- Verify your template ID matches the one in EmailJS dashboard
- Check your email service (Gmail, Outlook, etc.) settings
- Look at the browser console for detailed error messages

### Email not received
- Check your spam/junk folder
- Verify the "To Email" field in your EmailJS template
- Check EmailJS dashboard → Logs to see if emails were sent
- Make sure you haven't exceeded the free tier limit (200 emails/month)

### CORS Errors
- EmailJS should handle CORS automatically
- If you see CORS errors, check that your Public Key is correct
- Make sure you're using the correct EmailJS package version

## Security Best Practices

1. **Never commit your `.env` file** - It's already in `.gitignore`
2. **Use environment variables** - Never hardcode credentials in your code
3. **Restrict Public Key** - In EmailJS dashboard, you can restrict your public key to specific domains
4. **Rate Limiting** - Consider adding rate limiting to prevent spam (EmailJS free tier has some built-in limits)

## EmailJS Free Tier Limits

- 200 emails per month
- 2 email services
- 2 email templates
- Basic support

For higher limits, consider upgrading to a paid plan.

## Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Integration](https://www.emailjs.com/docs/examples/reactjs/)
- [EmailJS Support](https://www.emailjs.com/support/)

## Need Help?

If you encounter issues:
1. Check the browser console for error messages
2. Check EmailJS dashboard → Logs for email sending status
3. Verify all environment variables are correctly set
4. Make sure your email service is properly connected in EmailJS

