# 🚀 Deployment Guide - Horoskop Aplikacija

## 📋 Pre-deployment Checklist

- [x] Svi TODO zadaci završeni
- [x] Nema TypeScript grešaka
- [x] Nema ESLint grešaka
- [x] Sve stranice se učitavaju
- [x] API integracija radi
- [x] LocalStorage persistence radi
- [x] Responsive dizajn testiran
- [x] README dokumentacija kompletna

## 🌐 Vercel Deployment (Preporučeno)

### Metoda 1: GitHub Integration

1. **Push kod na GitHub:**
```bash
cd horoskop-app
git init
git add .
git commit -m "Initial commit - Horoskop aplikacija"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/horoskop-app.git
git push -u origin main
```

2. **Povežite sa Vercel:**
   - Idi na [vercel.com](https://vercel.com)
   - Klikni "Add New Project"
   - Import GitHub repository
   - Vercel će automatski detektovati Next.js
   - Klikni "Deploy"

3. **Done!** Aplikacija je live na: `https://your-app.vercel.app`

### Metoda 2: Vercel CLI

```bash
# Instaliraj Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd horoskop-app
vercel

# Za production
vercel --prod
```

## 🔧 Environment Variables

Trenutno aplikacija ne zahteva environment varijable jer koristi javni Aztro API.

Ako želiš da dodaš custom API keys u budućnosti:

1. U Vercel dashboard idi na **Settings → Environment Variables**
2. Dodaj varijable:
   ```
   NEXT_PUBLIC_HOROSCOPE_API_URL=your_url
   NEXT_PUBLIC_HOROSCOPE_API_KEY=your_key
   ```

## 🏗️ Build Test (Pre-deployment)

```bash
# Test production build lokalno
npm run build
npm start

# Proveri na http://localhost:3000
```

Ako build prođe bez grešaka, aplikacija je spremna!

## 🌍 Alternativni Hosting Servisi

### Netlify

1. Push na GitHub
2. Povežite Netlify account
3. New Site from Git → Select Repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Deploy

### Railway

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login i deploy
railway login
railway init
railway up
```

### DigitalOcean App Platform

1. Kreiraj novi App
2. Connect GitHub repository
3. Configure build:
   - Build Command: `npm run build`
   - Run Command: `npm start`
4. Deploy

## 🔐 Custom Domain

### Vercel

1. Idi na Project Settings → Domains
2. Dodaj custom domain (npr. `horoskop.mojadomena.com`)
3. Konfiguriši DNS:
   ```
   Type: CNAME
   Name: horoskop (ili @)
   Value: cname.vercel-dns.com
   ```

### Cloudflare (Opciono)

Za bolju performansu i sigurnost:
1. Dodaj sajt na Cloudflare
2. Update nameservers kod registrara
3. Enable SSL/TLS (Full mode)
4. Enable caching rules

## 📊 Monitoring & Analytics

### Vercel Analytics

```bash
npm install @vercel/analytics
```

U `app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';

// U body dodaj:
<Analytics />
```

### Google Analytics (Opciono)

1. Kreiraj GA4 property
2. Dodaj tracking ID u environment variables
3. Dodaj Google Analytics script u layout

## 🔄 Continuous Deployment

Sa Vercel/Netlify:
- Svaki push na `main` branch automatski deploys
- Pull requests dobijaju preview URLs
- Rollback je moguć jednim klikom

## 🐛 Troubleshooting

### Problem: Build fails
```bash
# Očisti cache
rm -rf .next node_modules
npm install
npm run build
```

### Problem: API ne radi u produkciji
- Proveri da li Aztro API radi: https://aztro.sameerkumar.website/
- Fallback na dummy podatke će se automatski aktivirati

### Problem: LocalStorage ne radi
- Proveri browser settings za cookies/storage
- Aplikacija će raditi i bez storage-a, samo bez persistence

## ✅ Post-deployment

Nakon uspešnog deployment-a:

1. ✅ Testiraj sve stranice
2. ✅ Testiraj na mobile uređajima
3. ✅ Proveri SSL certifikat (https)
4. ✅ Testiraj notifikacije (allow u browser-u)
5. ✅ Proveri SEO meta tags (View Source)
6. ✅ Test performance (Lighthouse)

## 📱 Progressive Web App (PWA) - Opciono

Za PWA funkcionalnost u budućnosti:

```bash
npm install next-pwa
```

Konfigurisati manifest.json i service worker.

## 🎉 Success!

Tvoja horoskop aplikacija je sada live i dostupna celom svetu! 🌟

**Next Steps:**
- Podeli link sa prijateljima
- Prati analytics
- Dodaj nove features
- Obogati horoskope

---

🌟 **Srećno sa horoskopima!** 🌟
