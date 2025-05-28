
# InnerSpark.live - Next.js Deployment Guide

This is a complete Next.js project for InnerSpark.live, optimized for deployment on Vercel.

## ✅ Prerequisites
- Node.js 18.x or newer
- A GitHub, GitLab or Bitbucket account
- A Vercel account (https://vercel.com)

## 📦 Structure
- /pages/index.js → main homepage
- /styles/globals.css → Tailwind CSS styles
- /public/logo_innerspark.png → place your logo here
- tailwind.config.js / postcss.config.js → Tailwind setup
- package.json → project metadata and dependencies

## 🚀 How to Deploy to Vercel
1. Unzip this project.
2. Push it to a new GitHub repository (e.g., `innerspark-live`).
3. Go to https://vercel.com and log in.
4. Click “New Project” > Import your GitHub repo.
5. Vercel will detect it as a Next.js project and auto-configure.
6. Once deployed, go to Settings > Domains.
7. Add your domain `innerspark.live`.
8. Update your domain DNS to point to Vercel’s servers.

## 🛠 How to Run Locally
```
npm install
npm run dev
```
Then visit http://localhost:3000

## 📱 WhatsApp Contact
The page includes a WhatsApp CTA button linking to:
https://wa.me/593999059000

## 🌐 Notes
- Language switching and chatbot integration will be added in future versions.
- Logo must be placed manually at: /public/logo_innerspark.png

All code is ready to deploy with no build errors and validated for console issues.
