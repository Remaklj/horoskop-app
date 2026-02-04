# 🌟 Dnevni Horoskop - Web Aplikacija

[![Verzija](https://img.shields.io/badge/verzija-1.0.0-blue.svg)](https://github.com/Remaklj/horoskop-app/releases/tag/v1.0.0)
[![Live Demo](https://img.shields.io/badge/demo-live-success.svg)](https://horoskop-app-nine.vercel.app)
[![Vercel](https://img.shields.io/badge/deployed%20on-Vercel-black.svg)](https://horoskop-app-nine.vercel.app)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

Moderna web aplikacija za čitanje dnevnog, nedeljnog i mesečnog horoskopa sa personalizacijom i dodatnim funkcijama.

## 🔗 Live Aplikacija

**🌐 [https://horoskop-app-nine.vercel.app](https://horoskop-app-nine.vercel.app)**

> **Verzija 1.0** - Prva stabilna verzija! Više update-a uskoro! ✨

## ✨ Funkcionalnosti

- **Dnevni horoskop** - Personalizovani horoskop za 12 horoskopskih znakova
- **Izbor pola** - Muški ili ženski horoskop
- **Srećni elementi** - Srećan broj, boja, vreme i kamenje
- **Nedeljni i mesečni horoskop** - Dugoročne prognoze
- **Kompatibilnost** - Provera kompatibilnosti između dva znaka
- **Natalna karta** - Osnovni kalkulator natalne karte (Sunce, Mesec, Ascendent)
- **Istorija** - Čuvanje istorije pročitanih horoskopa
- **Notifikacije** - Dnevna podsetnika za čitanje horoskopa

## 📸 Pregled

Aplikacija nudi prekrasan, šareni dizajn sa:
- 🎨 12 jedinstvenih boja za svaki horoskopski znak
- ✨ Glatke animacije i tranzicije
- 📱 Potpuno responsive dizajn (mobile, tablet, desktop)
- 🌈 Gradijenti i modern UI elementi
- 🔔 Browser notifikacije za dnevne horoskope

## 🚀 Tehnologije

- **Next.js 14** - React framework sa App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Ikone
- **Aztro API** - Eksterni API za horoskope
- **LocalStorage** - Čuvanje omiljenih postavki i istorije
- **Web Notifications API** - Browser notifikacije

## 📦 Instalacija

```bash
# Kloniranje repozitorijuma (ili otvaranje foldera)
cd horoskop-app

# Instalacija paketa
npm install

# Pokretanje development servera
npm run dev
```

Otvori [http://localhost:3000](http://localhost:3000) u browser-u.

## 🎨 Struktura projekta

```
horoskop-app/
├── app/                        # Next.js App Router stranice
│   ├── page.tsx               # Homepage - izbor znaka
│   ├── layout.tsx             # Glavni layout sa navigacijom
│   ├── horoskop/[znak]/       # Dynamic route za horoskop
│   ├── kompatibilnost/        # Kompatibilnost znakova
│   ├── natalna-karta/         # Natalna karta kalkulator
│   └── istorija/              # Istorija horoskopa
├── components/                 # React komponente
│   ├── ZnakSelector.tsx       # Grid sa 12 znakova
│   ├── PolSelector.tsx        # Muški/ženski toggle
│   ├── DnevniHoroskop.tsx     # Prikaz dnevnog horoskopa
│   ├── SrecniElementi.tsx     # Srećni broj, boja, vreme
│   ├── NedeljniMesecni.tsx    # Tabs za nedeljni/mesečni
│   ├── KompatibilnostCard.tsx # Kartica kompatibilnosti
│   ├── HistorijaList.tsx      # Lista istorije
│   └── NotifikacijeSetup.tsx  # Setup za notifikacije
├── lib/                        # Helper funkcije i API
│   ├── constants.ts           # Horoskopski znaci i konstante
│   ├── horoscope-api.ts       # API klijent za horoskope
│   ├── storage.ts             # LocalStorage helper
│   ├── notifications.ts       # Web Notifications helper
│   └── natal-chart.ts         # Natalna karta logika
└── public/                     # Statički fajlovi
```

## 🎯 Kako koristiti

1. **Početna strana** - Izaberi pol (muški/ženski) i klikni na svoj horoskopski znak
2. **Horoskop stranica** - Vidi dnevni, nedeljni i mesečni horoskop
3. **Kompatibilnost** - Proveri kompatibilnost sa drugim znacima
4. **Natalna karta** - Unesi datum, vreme i mesto rođenja za natalnu kartu
5. **Istorija** - Pregled svih pročitanih horoskopa
6. **Notifikacije** - Uključi dnevna podsetnika (dozvoli browser notifikacije)

## 🌈 Dizajn

Aplikacija koristi šarenu paletu boja sa gradijentima i animacijama. Svaki horoskopski znak ima svoju jedinstvenu boju:

- Ovan: Crvena (#FF6B6B)
- Bik: Tirkizna (#4ECDC4)
- Blizanci: Žuta (#FFE66D)
- Rak: Zelena (#95E1D3)
- Lav: Koralna (#F38181)
- Devica: Ljubičasta (#AA96DA)
- Vaga: Roze (#FCBAD3)
- Škorpija: Plava (#A8D8EA)
- Strelac: Bordo (#AA4465)
- Jarac: Tamno ljubičasta (#6C5B7B)
- Vodolija: Pink (#C06C84)
- Ribe: Zlatna (#F8B500)

## 🔧 API

Aplikacija koristi **Aztro API** za dnevne horoskope. API endpoint:

```
POST https://aztro.sameerkumar.website/?sign=aries&day=today
```

Za nedeljne i mesečne horoskope koriste se generisani tekstovi (može se integrisati drugi API ili GPT).

## 📱 Responsive dizajn

Aplikacija je potpuno responsive i radi na svim uređajima:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🚧 Buduća poboljšanja

- [ ] Integracija sa OpenAI GPT za generisanje personalizovanih horoskopa
- [ ] Detaljnija natalna karta sa efemeridama
- [ ] Tarot karte dnevno izvlačenje
- [ ] Share funkcionalnost (deljenje na social media)
- [ ] Dark mode opcija
- [ ] Progresivna web app (PWA) za instalaciju
- [ ] Backend integracija (Supabase) za čuvanje podataka
- [ ] Korisnički nalozi i login

## 🚀 Deployment

### Vercel (Preporučeno)

Najlakši način za deployment je korišćenje [Vercel platforme](https://vercel.com):

1. Pushuj kod na GitHub
2. Importuj projekat u Vercel
3. Vercel će automatski detektovati Next.js i deployvati aplikaciju

```bash
# Ili koristi Vercel CLI
npm install -g vercel
vercel
```

### Drugi hosting servisi

Aplikacija može da se deploy-uje na bilo koju platformu koja podržava Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🐛 Problemi i podrška

Ako naiđeš na probleme:

1. Proveri da li imaš najnoviju verziju Node.js (18+)
2. Obriši `node_modules` i `package-lock.json`, pa ponovo instaliraj pakete
3. Očisti Next.js cache: `rm -rf .next`

## 📄 Licenca

MIT License - slobodno koristite i prilagođavajte za vaše potrebe!

## 👨‍💻 Autor

Napravljeno sa ❤️ za ljubitelje astrologije

---

✨ **Uživaj u čitanju horoskopa!** ✨
