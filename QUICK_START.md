# ⚡ Quick Start Guide - Horoskop Aplikacija

## 🎯 Brzo pokretanje

```bash
# 1. Navigacija u projekat
cd horoskop-app

# 2. Instalacija paketa (ako već nisi)
npm install

# 3. Pokretanje development servera
npm run dev

# 4. Otvori browser
# http://localhost:3000
```

## 🧪 Testiranje funkcionalnosti

### 1. Homepage (/)
- ✅ Vidi grid sa 12 horoskopskih znakova
- ✅ Izaberi pol (muški/ženski)
- ✅ Klikni na bilo koji znak

### 2. Dnevni horoskop (/horoskop/[znak])
- ✅ Vidi dnevni horoskop sa opisom
- ✅ Proveri srećne elemente (broj, boja, vreme, kamenje)
- ✅ Prebaci na nedeljni/mesečni tab
- ✅ Klikni "Uključi notifikacije" (dozvoli u browser-u)

### 3. Kompatibilnost (/kompatibilnost)
- ✅ Izaberi dva horoskopska znaka
- ✅ Vidi procenat kompatibilnosti sa animacijom

### 4. Natalna karta (/natalna-karta)
- ✅ Unesi datum rođenja (npr. 15.03.1990)
- ✅ Unesi vreme (npr. 14:30)
- ✅ Unesi mesto (npr. Beograd, Srbija)
- ✅ Klikni "Izračunaj Natalnu Kartu"
- ✅ Vidi Sunčev znak, Mesečev znak i Ascendent

### 5. Istorija (/istorija)
- ✅ Vidi listu svih pročitanih horoskopa
- ✅ Filtriraj po horoskopskom znaku

## 📱 Mobile testiranje

1. Otvori Chrome DevTools (F12)
2. Klikni na Toggle Device Toolbar (Ctrl+Shift+M)
3. Izaberi mobile uređaj (iPhone, Samsung, itd.)
4. Testiranje:
   - ✅ Hamburger menu radi
   - ✅ Kartice su responsive
   - ✅ Touch gestures rade

## 🔔 Browser notifikacije

Za testiranje notifikacija:

1. Otvori stranicu horoskopa
2. Klikni "Uključi notifikacije"
3. U browser popup-u klikni "Allow"
4. Notifikacije će se pojavljivati svakog dana u 9:00

**Napomena:** Ako browser blokira notifikacije:
- Chrome: Settings → Privacy → Site Settings → Notifications
- Firefox: Settings → Privacy → Permissions → Notifications

## 🛠️ Build za produkciju

```bash
# Build aplikacije
npm run build

# Pokreni production build lokalno
npm start

# Otvori http://localhost:3000
```

## 🎨 Provera dizajna

Proveri sledeće elemente:

- [ ] Svaki horoskopski znak ima svoju jedinstvenu boju
- [ ] Hover efekti rade na karticama
- [ ] Animacije su smooth (bez trzanja)
- [ ] Loading state se prikazuje pri učitavanju
- [ ] 404 stranica se prikazuje za nepostojeće rute

## 🐛 Uobičajeni problemi

### Problem: "Module not found"
**Rešenje:** 
```bash
rm -rf node_modules package-lock.json
npm install
```

### Problem: Port 3000 je zauzet
**Rešenje:**
```bash
# Pokreni na drugom portu
npx next dev -p 3001
```

### Problem: TypeScript greške
**Rešenje:**
```bash
# Rebuild TypeScript
npm run build
```

### Problem: Horoskop API ne radi
**Rešenje:**
- API je besplatan i ponekad može biti spor
- Aplikacija ima fallback sa dummy podacima
- Sačekaj nekoliko sekundi i refresh stranicu

## ✅ Checklist pre deployment-a

- [ ] Sve stranice se učitavaju bez grešaka
- [ ] Notifikacije rade (nakon dozvole)
- [ ] Responsive dizajn radi na svim uređajima
- [ ] LocalStorage čuva omiljeni znak
- [ ] Istorija se čuva i prikazuje
- [ ] Build prolazi bez grešaka (`npm run build`)
- [ ] Linter nema grešaka (`npm run lint`)

## 🎉 Gotovo!

Aplikacija je spremna za korišćenje! Uživaj u horoskopima! ✨
