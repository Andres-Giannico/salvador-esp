# 🚢 Salvador Ibiza (ES) — salvadoreiviza.es

> Sitio público en **español** para excursiones en barco y charters privados en Ibiza. URLs canónicas y sitemap apuntan al dominio **salvadoreiviza.es**; el sitio en inglés (**salvadoribiza.com**) enlaza vía `NEXT_PUBLIC_SITE_URL_EN` y mismos paths para hreflang.

[![Next.js](https://img.shields.io/badge/Next.js-15.3.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000)](https://vercel.com/)

## 🌐 Live Website

**Producción (.es)**: [https://salvadoreiviza.es](https://salvadoreiviza.es)

## 📋 Table of Contents

- [🎯 Project Overview](#-project-overview)
- [🏗️ Technical Stack](#️-technical-stack)
- [📁 Project Structure](#-project-structure)
- [⚡ Key Features](#-key-features)
- [🚀 Getting Started](#-getting-started)
- [🔧 Configuration](#-configuration)
- [📱 User Experience](#-user-experience)
- [🎨 Components](#-components)
- [📊 SEO & Analytics](#-seo--analytics)
- [🌍 Internationalization](#-internationalization)
- [🤝 Contributing](#-contributing)

## 🎯 Project Overview

Salvador Ibiza is a premium boat experience website that offers:

- **Day Trips**: 3-hour daytime adventures (2:00 PM - 5:00 PM)
- **Sunset Trips**: Magical sunset voyages (6:30 PM - 9:30 PM)
- **Private Charters**: Exclusive customizable experiences

The website serves as a booking platform, marketing tool, and information hub for tourists visiting Ibiza who want authentic Mediterranean boat experiences.

## 🏗️ Technical Stack

### **Frontend**
- **Framework**: Next.js 15.3.0 (App Router)
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion 12.7.3
- **Icons**: React Icons 5.5.0 + Lucide React 0.488.0

### **Integrations**
- **Booking System**: Turbobookings Widget
- **Payment Processing**: Stripe
- **Analytics**: Google Analytics 4 + Tag Manager
- **Maps**: Google Maps API
- **Notifications**: Sonner

### **SEO & Performance**
- **Sitemap**: Next-sitemap 4.2.3
- **Schema Markup**: React-schemaorg
- **Image Optimization**: Next.js Image component
- **Performance**: Lazy loading, code splitting

## 📁 Project Structure

```
salvador-boat/
├── src/
│   ├── app/                    # App Router pages
│   │   ├── about/             # About page
│   │   ├── boat-trips/        # Trip catalog
│   │   │   ├── day-trip/      # Day trip details
│   │   │   └── sunset-trip/   # Sunset trip details
│   │   ├── book/              # QR booking pages
│   │   │   ├── flyer/         # Flyer QR booking
│   │   │   └── trips/         # Caseta QR booking
│   │   ├── book-now/          # Main booking page
│   │   ├── blog/              # Blog articles
│   │   ├── contact/           # Contact information
│   │   ├── corporate-events/  # Corporate services
│   │   ├── faq/              # Frequently asked questions
│   │   ├── gallery/          # Photo gallery
│   │   ├── partners/         # Affiliate program
│   │   ├── private-charter/  # Private charter info
│   │   ├── routes/           # Boat routes
│   │   └── weddings/         # Wedding services
│   ├── components/           # Reusable UI components
│   │   ├── booking/          # Booking-related components
│   │   ├── gallery/          # Gallery components
│   │   ├── trips/           # Trip-specific components
│   │   └── ui/              # Generic UI components
│   ├── lib/                 # Utility functions
│   ├── services/            # External service integrations
│   └── types/               # TypeScript type definitions
├── public/                  # Static assets
│   ├── images/             # Image assets
│   ├── sitemap.xml         # Generated sitemap
│   └── robots.txt          # Crawler instructions
└── Configuration files
```

## ⚡ Key Features

### **🎫 Booking System**
- **Real-time availability** via Turbobookings integration
- **Multiple products**: Shared trips (Product 2) & Private charters (Product 3)
- **Channel tracking**: Web (11), QR Caseta (176), QR Flyer (177)
- **Payment options**: €20 deposit online, balance paid onboard
- **Instant confirmation** with voucher generation

### **🌊 Trip Experiences**

#### Daytime Experience (€80 adults, €45 children 6-12)
- **Duration**: 3 hours (2:00 PM - 5:00 PM)
- **Includes**: Unlimited drinks, Spanish tapas, paddle boards, kayaks, snorkeling
- **Route**: West Coast (Cala Conta) or North Coast (Sa Foradada)

#### Sunset Voyage (€80 adults, €45 children 6-12)
- **Duration**: 3 hours (6:30 PM - 9:30 PM)
- **Includes**: Premium bar, unlimited cava, tapas, water sports, sunset viewing
- **Highlight**: Sunset at iconic Es Vedrà or Café Mambo

#### Private Charter (Starting €1350)
- **Duration**: Customizable (minimum 3 hours)
- **Capacity**: Up to 35 guests
- **Includes**: Full water sports equipment, customized route, premium catering
- **Perfect for**: Celebrations, corporate events, weddings

### **📱 User Experience**
- **Mobile-first design** with responsive layouts
- **Fast loading** with Next.js optimizations
- **Accessibility** compliant components
- **Multi-channel booking** (web, QR codes)
- **WhatsApp integration** for instant communication

### **🔍 SEO Optimization**
- **Structured data** with Schema.org markup
- **Optimized meta tags** for all pages
- **XML sitemap** auto-generation
- **Clean URLs** with proper redirects
- **Image optimization** with WebP format

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ 
- npm or yarn package manager

### **Installation**

1. **Clone the repository**
```bash
git clone https://github.com/your-username/salvador-boat.git
cd salvador-boat
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment setup**
Copia `.env.example` a `.env.local` y ajusta valores. Mínimo relevante para SEO y dominio:

```bash
# URLs (canónico español + inglés alterno para hreflang / selector EN)
NEXT_PUBLIC_SITE_URL=https://salvadoreiviza.es
NEXT_PUBLIC_SITE_URL_EN=https://salvadoribiza.com
SITE_URL=https://salvadoreiviza.es

# Emails públicos (opcional; hay fallback en src/config/site.ts)
NEXT_PUBLIC_CONTACT_EMAIL=info@salvadoreiviza.es
NEXT_PUBLIC_PARTNERS_EMAIL=partners@salvadoreiviza.es

# Google Maps en cliente
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key

# Analytics (opcional en desarrollo)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-SP4LMTQT3E
NEXT_PUBLIC_GTM_ID=GTM-MZR67SFF
```

4. **Run development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### **Build for Production**
```bash
npm run build
npm start
```

## 🔧 Configuration

### **Booking System Configuration**

The booking system uses Turbobookings widgets with different configurations:

#### Main Website Bookings
```typescript
// Day Trip Configuration
companyId: 2
productId: 2
billingTermIds: [20]  // Day trip
channelId: 11         // Web channel

// Sunset Trip Configuration
companyId: 2
productId: 2
billingTermIds: [21]  // Sunset trip
channelId: 11         // Web channel

// Private Charter Configuration
companyId: 2
productId: 3          // Private charter product
channelId: 11         // Web channel
```

#### QR Code Bookings
```typescript
// QR Caseta (/book/trips)
channelId: 176
robots: { index: false, follow: false }

// QR Flyer (/book/flyer)
channelId: 177
robots: { index: false, follow: false }
```

### **Redirects Configuration**

The project includes 50+ SEO redirects in `next.config.js` for:
- Old domain migrations
- URL structure changes
- Legacy page redirects
- SEO optimization

### **Analytics Setup**

Google Analytics 4 implementation with:
- **Measurement ID**: G-SP4LMTQT3E
- **Google Tag Manager**: GTM-MZR67SFF
- **Cookie consent** integration
- **Enhanced ecommerce** tracking for bookings

## 📱 User Experience

### **Booking Flow**
1. **Discovery**: User browses trip options
2. **Selection**: Chooses trip type and date
3. **Configuration**: Selects number of guests
4. **Payment**: Pays €20 deposit per person
5. **Confirmation**: Receives voucher with meeting details

### **Key Conversion Points**
- Hero section with primary CTAs
- Featured trips section
- Dedicated booking pages
- Floating WhatsApp button
- Strategic call-to-action sections

### **Mobile Optimization**
- Touch-friendly navigation
- Optimized booking widgets
- Fast-loading images
- Thumb-friendly button sizes

## 🎨 Components

### **Layout Components**
- `Navbar`: Main navigation with language switching
- `Footer`: Links, contact info, social media
- `Hero`: Landing page hero section
- `WhatsAppButton`: Floating contact button

### **Booking Components**
- `TurbnbWidget`: Main booking widget integration
- `BookingModal`: Modal booking interface
- `TripCard`: Trip display cards

### **Content Components**
- `ImageGallery`: Photo galleries with lightbox
- `FAQ`: Expandable FAQ sections
- `TestimonialSlider`: Customer reviews
- `TripGallery`: Trip-specific photo galleries

### **Utility Components**
- `CookieConsentBanner`: GDPR compliance
- `WhyChooseUsCard`: Feature highlighting
- `CallToActionSection`: Conversion sections

## 📊 SEO & Analytics

### **SEO Implementation**
- **Meta tags**: Optimized for each page
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Canonical URLs**: Proper canonicalization
- **Structured Data**: Schema.org markup for boats, events, and business

### **Performance Optimization**
- **Image optimization**: WebP format with fallbacks
- **Lazy loading**: Components and images
- **Code splitting**: Automatic with Next.js
- **Caching**: Optimized cache headers

### **Analytics Tracking**
- **Page views**: All page navigation
- **Booking events**: Widget interactions
- **Contact actions**: WhatsApp, email clicks
- **Scroll depth**: Content engagement

## 🌍 Internationalization

### **Estado actual**
- **Contenido y UI**: español en este repositorio (`lang="es"` en `layout`, metadatos `es_ES`).
- **Dominio alterno EN**: enlaces y `Metadata.alternates.languages` mediante `src/config/site.ts` (`getEnglishSiteUrl`, `pageAlternates`).
- **Selector EN** en la navbar: mismo path bajo `NEXT_PUBLIC_SITE_URL_EN` (habitualmente `https://salvadoribiza.com`).
- **Reciprocidad**: el sitio inglés debe exponer el enlace/espejo hacia `.es` en su propio código (otro repo/despliegue).

## 🤝 Contributing

### **Development Workflow**
1. Create feature branch from `main`
2. Make changes following code style
3. Test on multiple devices
4. Create pull request with description
5. Review and merge

### **Code Style**
- **TypeScript**: Strict mode enabled
- **ESLint**: Configured for Next.js
- **Prettier**: Automatic formatting
- **Tailwind**: Utility-first CSS approach

### **Deployment**
- **Platform**: Vercel (automatic deployment)
- **Domain**: salvadoreiviza.es (apex y/o www según configuración DNS)
- **Env producción**: definir `NEXT_PUBLIC_SITE_URL`, `SITE_URL` y `NEXT_PUBLIC_SITE_URL_EN` como en `.env.example`
- **Monitoring**: Google Analytics / GTM según IDs en entorno

## 📄 License

This project is proprietary software for Salvador Ibiza boat experiences.

## 📞 Contact

- **Web (.es)**: [salvadoreiviza.es](https://salvadoreiviza.es)
- **Teléfonos**: +34 871 181 393 / +34 681 611 598
- **Formulario**: [Contacto](https://salvadoreiviza.es/contact)
- **WhatsApp**: +34 871 181 393

---

*Ibiza desde el mar con Salvador* 🌊⛵
