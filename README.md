# Dr. Maya Reynolds - Therapy Website Redesign

![Project Preview](/public/office1.jpg) 
*(Note: Replace this path with a screenshot of your hero section if possible, otherwise delete this line)*

## 🚀 Live Demo
**[View Live Site](https://therapy-site.vercel.app)** *(Replace with your actual Vercel link)*

---

## 📖 Project Overview
This project is a **Clone & Redesign** assignment submitted for the Front-End Developer Internship at **Grow My Therapy**.

The goal was to take a generic Squarespace template ("Lilac") and completely reimagine it for a high-end clinical psychologist, **Dr. Maya Reynolds**, based on her specific profile and client needs.

### **The Design Concept: "Serene Growth"**
Instead of the original template's "soft lilac" theme, I developed a custom design system called **Serene Growth**:
* **Deep Emerald (#064e3b):** specificially chosen to signal stability, safety, and growth—key for clients dealing with anxiety.
* **Warm Stone (#fafaf9):** Replaces clinical white backgrounds to reduce eye strain and create a "sanctuary" feel.
* **Typography:** Switched to **Libre Baskerville** (Serif) for headings to establish authority and trust, paired with **Inter** for readability.

---

## 🛠️ Tech Stack
* **Framework:** Next.js 14 (App Router)
* **Styling:** Tailwind CSS v4 (Using the new CSS-first configuration)
* **Icons:** Lucide React
* **Fonts:** `next/font` (Libre Baskerville & Inter)
* **Deployment:** Vercel

---

## ✨ Key Features
1.  **Fully Responsive Mobile Navigation:**
    * Implemented a custom Hamburger Menu using React state (`useState`), ensuring seamless navigation on small screens.
2.  **SEO-Optimized Content:**
    * Local keywords ("Santa Monica", "California", "Anxiety") are woven naturally into H1/H2 headings for better search visibility.
3.  **Custom "Our Office" Section:**
    * Designed a symmetrical image gallery to showcase the physical space, creating a sense of safety before the client even arrives.
4.  **Performance Tuned:**
    * Used Next.js `<Image>` component for automatic optimization and layout shift prevention.
    * implemented `scroll-padding-top` to ensure fixed headers don't obscure content.

---

## 📂 Project Structure
```bash
├── app/
│   ├── globals.css      # Tailwind v4 Theme Variables
│   ├── layout.tsx       # Font & Metadata Setup
│   └── page.tsx         # Main Landing Page (Hero, Services, Office)
├── public/
│   ├── profile.jpg      # Dr. Reynolds Portrait
│   ├── office1.jpg      # Office Interior
│   └── office2.jpg      # Office Details
└── tailwind.config.ts   # (Deleted in favor of v4 CSS config)

---
## 📂 Getting started
npm run dev
```
## ✅ Assignment Checklist Compliance

### Part 1: Clone Accuracy
- [x] Layout matches the original "Lilac" structure (Hero -> Services -> Split Feature -> Footer).
- [x] Fully responsive grid system (Desktop to Mobile).
- [x] Consistent spacing (`py-24`, `max-w-7xl`) and margins.

### Part 2: Redesign & Theme
- [x] Replaced Lilac theme with custom **Emerald/Stone** palette.
- [x] Updated fonts to **Libre Baskerville**.
- [x] Content 100% derived from Dr. Reynolds' PDF profile.
- [x] All images replaced with intentional, high-quality assets.

### Part 3: New Section
- [x] Designed "A Calm, Grounding Space" section (not in original template).
- [x] Integrated specific office details (Natural light, Santa Monica location).
- [x] Used the required office images provided in the assignment.

---

**Developed by Yash Pathak**
