# Institute for Trusted Leadership Website

A modern, responsive website built with React, Tailwind CSS, and Vite, designed from a Figma mockup.

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
website/
├── public/
│   └── assets/          # Place your SVG/images here
│       ├── leslie-martinich.jpg
│       └── luca-illustration.svg
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── OurNorthStar.jsx
│   │   ├── MeetFounder.jsx
│   │   ├── WhyWeExist.jsx
│   │   ├── OurMethodology.jsx
│   │   └── OneVision.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── vercel.json         # Vercel deployment config
```

## 🖼️ Adding Images and Icons

1. Place your SVG files and images in the `public/assets/` directory
2. Update the image paths in the components if needed:
   - `MeetFounder.jsx` - Line ~45: `leslie-martinich.jpg`
   - `OneVision.jsx` - Line ~65: `luca-illustration.svg`

## 🎨 Design Features

- **Dark Theme**: Dark green to blue gradient backgrounds
- **Responsive Layout**: 1280px max-width container with proper padding
- **Smooth Scrolling**: Navigation links with anchor support
- **Modern Typography**: Inter font family
- **Gradient Backgrounds**: Linear gradients matching Figma design

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy via GitHub

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect the Vite configuration and deploy

### Option 3: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Upload your project folder or connect your Git repository
4. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click "Deploy"

## 📝 Customization

### Colors

Edit `tailwind.config.js` to customize colors:
- `dark-green`: `#0A0A0A`
- `dark-blue`: `#00264D`

### Typography

The site uses Inter font. To change, update:
1. `index.html` - Google Fonts link
2. `tailwind.config.js` - fontFamily configuration

### Spacing and Layout

All components use Tailwind classes. Adjust padding, margins, and gaps directly in component files.

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - Programming language

## 📄 License

This project is private and proprietary.

---

Built with ❤️ for the Institute for Trusted Leadership
