# Recoded Website

A modern, responsive website for Recoded - a technology recruitment and IT consulting company based in Melbourne, Australia.

## Features

- **Modern Design**: Clean, professional design with purple/pink gradient theme
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Animations**: Smooth animations using Framer Motion
- **Purple Ink Animation**: Custom CSS animations for hero section
- **Horizontal Scrolling**: Service cards with horizontal scroll on mobile
- **Form Functionality**: Contact forms with validation
- **Multiple Pages**: Landing, About, Consulting, Join Network, Refer a Friend

## Pages

1. **Landing Page** (`/`): Hero section with animations, about preview, services overview
2. **About Us** (`/about`): Detailed company information and mission
3. **IT Consulting** (`/consulting`): Consulting services and expertise
4. **Join Our Network** (`/join`): CV upload form and benefits
5. **Refer a Friend** (`/refer`): Referral program with $1,000 reward
6. **Timesheets**: Redirects to external portal

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd recoded-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
recoded-website/
├── app/
│   ├── components/          # Reusable components
│   │   ├── Navigation.tsx   # Main navigation
│   │   ├── Hero.tsx        # Hero section with animation
│   │   ├── AboutUs.tsx     # About section
│   │   ├── OurExpertise.tsx # Services section
│   │   ├── CTASection.tsx  # Call-to-action section
│   │   └── Footer.tsx      # Footer component
│   ├── about/              # About page
│   ├── consulting/         # IT Consulting page
│   ├── join/              # Join Network page
│   ├── refer/             # Refer a Friend page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── public/                # Static assets
├── package.json
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.js        # Next.js configuration
```

## Key Features Implementation

### Purple Ink Animation
- Custom CSS animations in `globals.css`
- Gradient background animations
- Floating elements with various animation delays

### Horizontal Scrolling
- Custom CSS classes for horizontal scroll
- Mobile-first approach for service cards
- Desktop grid layout as fallback

### Form Handling
- React state management for form data
- File upload functionality for CV uploads
- Form validation and user feedback

### Responsive Design
- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions

## Content Management

All content is currently hardcoded in the components. Key content areas:

- **Hero Section**: Main tagline and call-to-action
- **About Us**: Company story and mission
- **Services**: Six main service categories
- **Contact Info**: Melbourne office details
- **Forms**: CV upload and referral forms

## Design System

### Colors
- **Primary Purple**: `#8B5CF6`
- **Primary Pink**: `#EC4899`
- **Dark Text**: `#1F2937`
- **Light Background**: `#F9FAFB`

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, large sizes with gradient text
- **Body**: Regular weight, good contrast

### Components
- **Buttons**: Rounded, gradient backgrounds
- **Cards**: Rounded corners, subtle shadows
- **Forms**: Clean inputs with focus states

## Deployment

The website is ready for deployment on platforms like:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Traditional hosting** with static export

### Environment Variables

Create a `.env.local` file for any environment-specific variables:

```env
# Add any API keys or configuration here
```

## Future Enhancements

- **CMS Integration**: Add Strapi or Sanity for content management
- **Analytics**: Google Analytics or similar
- **SEO**: Enhanced meta tags and structured data
- **Performance**: Image optimization and lazy loading
- **Accessibility**: Enhanced ARIA labels and keyboard navigation
- **Backend**: API integration for form submissions
- **Email Integration**: Automated email responses

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary software owned by Recoded Pty Ltd.

## Contact

For questions about this project, contact:
- **Email**: hello@re-coded.com.au
- **Address**: 501 Bourke Street, Melbourne, Victoria 3000, Australia

---

**Built with ❤️ for Recoded** 