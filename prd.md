# Product Requirements Document (PRD) - NJ Pro Tiling Website

## 1. Client Overview
- **Business Name**: NJ Pro Tiling
- **Owner**: Najib
- **Service Niche**: Premium wall & floor tiling, waterproofing, kitchen splashbacks, bathroom renovations, outdoor/patio tiling, and tile repairs.
- **Brand Identity**: Modern, clean, trustworthy, premium craftsmanship.
- **Color Palette**: Silver/metallic greys, dark charcoal, and a striking electric blue accent (derived from the NJ Pro Tiling logo).
- **Core Action/Conversion**: Get a Free Quote & Call/WhatsApp contact.

## 2. Problem Statement
NJ Pro Tiling needs a high-converting, professional, media-heavy website that showcases their high-quality tiling work, builds trust, and generates leads. The website must stand out and match or exceed premium competitors like `tilecloud.com.au` and `beaumont-tiles.com.au` in visual polish and user experience.

## 3. Solution Design & Architecture
We will build a Next.js (App Router) website using TypeScript, Tailwind CSS, and Framer Motion. 
The project structure will be clean and modular, utilizing reusable UI components for galleries, forms, modals, and before/after sliders.

### Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form (with validation) + client-side state (prepared for Resend/Formspree integrations)
- **Deployment & SEO**: Responsive, SEO-optimized, metadata-rich, and structured LocalBusiness schema.

## 4. Site Map & Page Breakdown

1. **Home Page**
   - **Hero Section**: High-impact background (video/large image loop), main value proposition, primary call to action ("Get a Free Quote" / "View Our Work").
   - **Contact Strip**: Quick-access phone, email, and location.
   - **Services Overview**: Teaser cards for core services leading to the Services page.
   - **Why Choose Us**: Trust badges (Licensed, Fully Insured, 100% Satisfaction Guarantee, Years of Experience).
   - **Featured Portfolio Preview**: Grid of selected high-quality project photos.
   - **Testimonials Slide**: Key customer reviews.
   - **Final Call to Action (CTA) Banner**.

2. **About Us Page**
   - **Company Story**: Najib's journey, focus on professional tiling, and dedication to precision.
   - **Mission & Vision**: Providing durable, stunning finishes.
   - **Trust Elements**: Detailed breakdown of insurance, structural warranty, and Australian tiling standards compliance.
   - **Certifications & Licensing**: Clear display of credentials and standard compliance symbols.

3. **Services Page**
   - Comprehensive detail page showing cards for:
     - Floor Tiling (porcelain, ceramic, stone, large-format)
     - Wall Tiling
     - Bathroom Tiling (renovations)
     - Kitchen Splashbacks
     - Outdoor & Patio Tiling
     - Waterproofing (compliant with AS 3740)
     - Tile Repair & Regrouting
   - Each card includes professional service description, material tips, and a dedicated CTA button.

4. **Portfolio / Gallery Page**
   - **Filterable Grid**: Category tags (All, Bathrooms, Kitchens, Floors, Outdoor, Commercial).
   - **Media Handling**: Elegant grid showcasing NJ Pro Tiling's local portfolio images and videos.
   - **Before/After Slider**: Interactive slider demonstrating transformation of spaces.
   - **Lightbox Gallery**: Fullscreen image zoom and HTML5 video playback support for project videos.

5. **Testimonials Page**
   - Dedicated feed of customer reviews with 5-star ratings, details of the project type completed, and project photos.
   - Trustworthy integration with a "Submit a Review" link or form.

6. **Contact Page**
   - Simple, validated contact form (Name, Email, Phone, Project Type, Message).
   - Business details (phone link, WhatsApp click-to-chat, email link, Sydney location, operational hours).
   - Mock Embedded Google Map showing service area.

7. **Get a Quote Page**
   - Form-focused lead generation page:
     - Project Type selection (dropdown)
     - Space size / Area estimation (m²)
     - Suburb/Location
     - Timeline urgency
     - File upload support (mock for photos of existing area)
     - Detailed description.
   - Form validation with error handling and success state.

## 5. Media Asset Strategy
The site will reference local media files available in the workspace (`WhatsApp Image...` and `WhatsApp Video...`). We will rename/move these into `public/images/portfolio/` and `public/videos/portfolio/` to act as direct, high-quality media sources on the website rather than generic placeholders.

## 6. Non-Functional Requirements & SEO
- **Responsive**: Mobile-first grid layouts.
- **Accessibility**: ARIA labels, semantic HTML structure, proper contrast ratios.
- **SEO**:
  - Open Graph (OG) tags for social sharing.
  - Custom page titles & meta descriptions.
  - JSON-LD LocalBusiness Schema representing NJ Pro Tiling (Sydney, Australia).
  - Clean semantic headers (H1 to H6).
