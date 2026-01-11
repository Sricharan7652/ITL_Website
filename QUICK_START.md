# Quick Start Guide

## 🚀 Getting Started (5 minutes)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Add Your Images
Place your SVG/images in the `public/assets/` folder:
- `leslie-martinich.jpg` (or .png, .webp) - for the Meet Our Founder section
- `luca-illustration.svg` - for the LUCA card illustration

### Step 3: Run Locally
```bash
npm run dev
```
Open `http://localhost:5173` in your browser

### Step 4: Build for Production
```bash
npm run build
```

## 🌐 Deploy to Vercel

### Option A: Vercel CLI (Recommended)
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy
vercel
```

### Option B: GitHub Integration
1. Push code to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite and deploys!

### Option C: Vercel Dashboard
1. Go to https://vercel.com
2. Click "Add New Project"
3. Upload your project folder OR connect Git repo
4. Settings are auto-configured in `vercel.json`
5. Click "Deploy"

## 📁 Project Structure
```
website/
├── public/
│   └── assets/          ← Place your images here
├── src/
│   ├── components/      ← All React components
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

## 🎨 Design Matches
✅ Dark gradient backgrounds (green to blue)
✅ All 7 sections from Figma
✅ Responsive layout (1280px max-width)
✅ Exact typography and spacing
✅ Icon placeholders ready for your SVGs

## 🔧 Customization
- Colors: Edit `tailwind.config.js`
- Typography: Edit `index.html` (Google Fonts)
- Content: Edit individual component files in `src/components/`

## 🐛 Troubleshooting
- **Images not showing?** Make sure files are in `public/assets/` folder
- **Build errors?** Run `npm install` again
- **Port already in use?** Change port in `vite.config.js`

---

Ready to deploy! 🎉
