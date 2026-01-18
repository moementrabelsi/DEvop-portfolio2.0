# DevOps Portfolio - Nintendo Retro Edition 🎮

An interactive, retro-inspired portfolio website with a Nintendo aesthetic showcasing DevOps engineering skills and experience.

## Features

- 🎮 **Nintendo Retro Design** - Pixel art aesthetics with classic Nintendo color scheme
- ✨ **Interactive Animations** - Smooth transitions and hover effects
- ⌨️ **Keyboard Shortcuts** - Navigate quickly with keyboard commands
- 🎯 **Easter Eggs** - Hidden Konami code activation
- 📱 **Fully Responsive** - Works on all devices
- 🎯 **Modern Tech Stack** - Built with React and Vite
- 🎨 **Custom Styling** - Unique retro UI components
- 🖱️ **Interactive Elements** - Clickable skills, hover effects, and more

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Custom retro styling with animations
- **Press Start 2P** - Retro pixel font

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd DEvop-portfolio2.0
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   └── Navigation.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Sections

- **Hero** - Introduction with typing animation
- **About** - Personal background and highlights
- **Experience** - Interactive timeline of work experience
- **Education** - Academic background
- **Certifications** - Professional certifications and in-progress studies
- **Skills** - Tools, technologies, languages, and hobbies
- **Contact** - Contact form and information

## Keyboard Shortcuts

Press `?` anytime to view all available shortcuts:

- **1-7** - Navigate to sections (1=Hero, 2=About, 3=Experience, 4=Education, 5=Certifications, 6=Skills, 7=Contact)
- **↑ ↓** - Navigate between sections
- **Home** - Scroll to top
- **End** - Scroll to bottom
- **?** - Show/hide shortcuts help
- **ESC** - Close modals
- **Ctrl + ← →** - Navigate experience timeline (when in Experience section)
- **Konami Code** (↑↑↓↓←→←→BA) - Activate easter egg! 🎮

## Interactive Features

- **Clickable Skills** - Click on skill tags to see them pop
- **Hover Effects** - Hover over elements for visual feedback
- **Experience Timeline** - Click timeline items or use keyboard to navigate
- **Smooth Scrolling** - All navigation uses smooth scroll animations
- **Easter Eggs** - Try the Konami code for a surprise!

## Customization

To customize the portfolio with your own information:

1. Update the data in each component file (Experience.jsx, Education.jsx, Skills.jsx, etc.)
2. Modify contact information in Contact.jsx
3. Adjust colors in `src/index.css` CSS variables
4. Update the hero section in Hero.jsx

## Deployment

### Vercel (Recommended)

1. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your repository: `moementrabelsi/DEvop-portfolio2.0`

2. **Configure Project:**
   - Framework Preset: **Vite**
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)
   - Install Command: `npm install` (auto-detected)

3. **Deploy:**
   - Click "Deploy"
   - Vercel will automatically build and deploy your portfolio
   - Your site will be live at `your-project-name.vercel.app`

4. **Custom Domain (Optional):**
   - Go to Project Settings → Domains
   - Add your custom domain

### Other Deployment Options

- **Netlify** - Connect your GitHub repo and deploy
- **GitHub Pages** - Use the build output from `dist` folder
- **AWS S3 + CloudFront** - For cloud-native deployment

## License

This project is open source and available for personal use.

## Contact

**Abdelmoemen Trabelsi**
- Email: abdelmoementrabelsi@gmail.com
- GitHub: [moementrabelsi](https://github.com/moementrabelsi)
- LinkedIn: [abdelmoemen-trabelsi-devops](https://www.linkedin.com/in/abdelmoemen-trabelsi-devops/)

---

Built with ❤️ and retro vibes 🎮

