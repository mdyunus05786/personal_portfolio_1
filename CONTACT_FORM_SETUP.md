# Contact Form Setup Instructions

Your contact form is configured to send emails directly to you without needing a backend server. It uses **Web3Forms**, a free service that handles form submissions and emails.

## Setup Steps

### 1. Get Your Web3Forms Access Key

1. Visit [https://web3forms.com/](https://web3forms.com/)
2. Click "Get Started for Free"
3. Enter your email address (this is where form submissions will be sent)
4. Verify your email
5. Copy your Access Key from the dashboard

### 2. Update the Contact Component

1. Open `src/components/Contact.tsx`
2. Find line 32 where it says:
   ```typescript
   access_key: 'YOUR_ACCESS_KEY_HERE',
   ```
3. Replace `YOUR_ACCESS_KEY_HERE` with your actual Web3Forms access key
4. Save the file

### 3. Update Your Contact Information

In the same file (`Contact.tsx`), update your personal details:

- **Email**: Update the email link and text (around line 85)
- **Phone**: Update the phone number (around line 95)
- **Location**: Update your city/country (around line 105)

### 4. Test the Form

1. Run your development server: `npm run dev`
2. Navigate to the Contact section
3. Fill out the form with test data
4. Submit the form
5. Check your email inbox (the one you used for Web3Forms)
6. You should receive the form submission via email

## Features

- ✅ No backend required
- ✅ Free for up to 250 submissions per month
- ✅ Spam protection included
- ✅ Email notifications with all form data
- ✅ Loading state while submitting
- ✅ Success/error messages
- ✅ Form resets after successful submission

## Troubleshooting

**Form not sending emails?**
- Double-check your Access Key is correct
- Verify your Web3Forms email is verified
- Check browser console for any errors
- Make sure you have an internet connection

**Need more submissions?**
- Web3Forms offers paid plans for higher volumes
- Alternatively, you can use EmailJS or Formspree (requires different setup)

## Alternative Services

If you prefer a different service, here are alternatives:

1. **EmailJS** - https://www.emailjs.com/ (free tier: 200 emails/month)
2. **Formspree** - https://formspree.io/ (free tier: 50 submissions/month)
3. **Getform** - https://getform.io/ (free tier: 50 submissions/month)
