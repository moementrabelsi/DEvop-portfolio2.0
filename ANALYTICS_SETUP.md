# Analytics Setup Guide

This portfolio website uses **Google Analytics 4 (GA4)** to track visitor statistics and user interactions.

## 📊 What's Being Tracked

### Page Views
- Initial page load
- Section navigation (Hero, About, Experience, etc.)
- Time spent on page

### User Interactions
- **Keyboard Shortcuts**: Usage of number keys (1-9), arrow keys, Home/End, and ? key
- **Project Views**: When users open project details
- **Contact Actions**: Clicks on email, phone, GitHub, LinkedIn links
- **Contact Form**: Form submissions
- **Easter Eggs**: Konami code activations
- **Button Clicks**: Various interactive elements

### Events Tracked
- `section_view` - When user views a section
- `button_click` - Button interactions
- `link_click` - External link clicks
- `project_view` - Project detail views
- `contact_action` - Contact method clicks
- `keyboard_shortcut` - Keyboard navigation usage
- `time_on_page` - Time spent on the site
- `easter_egg` - Secret code activations

## 🚀 Setup Instructions

### Step 1: Create a Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click **"Start measuring"** or **"Admin"** → **"Create Account"**

### Step 2: Create a Property

1. In the Admin section, click **"Create Property"**
2. Enter your property name (e.g., "DevOps Portfolio")
3. Select your time zone and currency
4. Click **"Next"**

### Step 3: Get Your Measurement ID

1. After creating the property, you'll see a **Measurement ID** (format: `G-XXXXXXXXXX`)
2. Copy this ID

### Step 4: Add Measurement ID to Your Project

1. Create a `.env` file in the root of your project (if it doesn't exist)
2. Add your measurement ID:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Important**: Replace `G-XXXXXXXXXX` with your actual measurement ID!

### Step 5: Deploy

1. Make sure your `.env` file is added to `.gitignore` (it should be by default)
2. For **Vercel deployment**, add the environment variable:
   - Go to your Vercel project settings
   - Navigate to **Settings** → **Environment Variables**
   - Add `VITE_GA_MEASUREMENT_ID` with your measurement ID
   - Redeploy your site

## 📈 Viewing Your Analytics

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property
3. Navigate to **Reports** to see:
   - **Realtime**: Current visitors
   - **Engagement**: User interactions
   - **Acquisition**: How users found your site
   - **Events**: Custom events tracked

## 🔍 Key Metrics to Monitor

- **Users**: Total number of visitors
- **Sessions**: Number of visits
- **Page views**: Total pages viewed
- **Average session duration**: How long visitors stay
- **Bounce rate**: Percentage of single-page sessions
- **Top sections**: Which sections are most viewed
- **Popular projects**: Which projects get the most views
- **Contact interactions**: How many people click contact links

## 🛠️ Custom Events

The analytics setup includes custom events for:
- Section navigation tracking
- Project detail views
- Contact form submissions
- Keyboard shortcut usage
- Easter egg discoveries

All events are automatically sent to Google Analytics and can be viewed in the **Events** report.

## 🔒 Privacy & GDPR

Google Analytics respects user privacy settings. You can:
- Enable IP anonymization in GA4 settings
- Add a privacy policy link to your site
- Configure cookie consent if required by your jurisdiction

## 📝 Notes

- Analytics only works in production (after deployment)
- The tracking script is loaded asynchronously and won't block page rendering
- All tracking is done client-side and respects user privacy settings
- No personal information is collected, only anonymous usage statistics

---

**Need Help?** Check the [Google Analytics Help Center](https://support.google.com/analytics)

