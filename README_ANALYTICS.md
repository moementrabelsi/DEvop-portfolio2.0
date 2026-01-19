# 📊 Analytics Quick Start

Your portfolio now has **Google Analytics 4 (GA4)** integrated!

## ⚡ Quick Setup (3 Steps)

### 1. Get Your Google Analytics ID
- Go to [analytics.google.com](https://analytics.google.com/)
- Create an account/property if you don't have one
- Copy your **Measurement ID** (looks like `G-XXXXXXXXXX`)

### 2. Add to Environment Variables

**For Local Development:**
Create a `.env` file in the project root:
```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**For Vercel Deployment:**
1. Go to your Vercel project → **Settings** → **Environment Variables**
2. Add: `VITE_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX`
3. Redeploy

### 3. View Your Stats
- Visit [analytics.google.com](https://analytics.google.com/)
- Check **Realtime** for live visitors
- Check **Reports** for detailed statistics

## 📈 What Gets Tracked

✅ Page views and section navigation  
✅ Project detail views  
✅ Contact link clicks (Email, Phone, GitHub, LinkedIn)  
✅ Contact form submissions  
✅ Keyboard shortcuts usage  
✅ Time spent on site  
✅ Easter egg discoveries  

## 📖 Full Documentation

See `ANALYTICS_SETUP.md` for complete setup instructions and advanced configuration.

---

**Note**: Analytics only works after deployment. Local development won't send data to Google Analytics.

