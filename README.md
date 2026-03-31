# Personal Portfolio

A mystical-themed personal portfolio website built with React, Vite, and modern CSS.

## Features

- **Mystical Dark Theme**: Dark background with beige/cream card styling inspired by the Gemini aesthetic
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Interactive Components**: 
  - Smooth scrolling navigation
  - Skill category tabs with transitions
  - Project showcase with modal details
  - Contact form
- **Modern Tech Stack**:
  - React 18
  - Vite for fast development
  - CSS3 animations and gradients
  - React PageFlip support for future enhancements

## Project Structure

```
├── index.html              # Main HTML entry point
├── vite.config.js         # Vite configuration
├── package.json           # Dependencies and scripts
├── src/
│   ├── main.jsx          # React app entry
│   ├── App.jsx           # Main component
│   ├── components/       # React components
│   │   ├── Header.jsx    # Navigation header
│   │   ├── Hero.jsx      # Hero section
│   │   ├── About.jsx     # About me section
│   │   ├── Skills.jsx    # Skills showcase
│   │   ├── Projects.jsx  # Projects portfolio
│   │   ├── Contact.jsx   # Contact form
│   │   └── Footer.jsx    # Footer
│   └── styles/
│       └── main.css      # All styling
```

## Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

### Update Your Information

1. **About Section**: Edit [src/components/About.jsx](src/components/About.jsx)
   - Change name and bio
   - Update location, timezone, current status
   - Add your photo

2. **Skills Section**: Edit [src/components/Skills.jsx](src/components/Skills.jsx)
   - Modify skill categories and descriptions
   - Add/remove skill items

3. **Projects Section**: Edit [src/components/Projects.jsx](src/components/Projects.jsx)
   - Update project titles, descriptions, and tech stacks
   - Change emoji icons
   - Add project links

4. **Contact Section**: Edit [src/components/Contact.jsx](src/components/Contact.jsx)
   - Update email and phone
   - Add social media links
   - Configure form submission (integrate with backend service)

5. **Header Navigation**: Edit [src/components/Header.jsx](src/components/Header.jsx)
   - Customize logo text

### Theme Colors

Edit the CSS variables in [src/styles/main.css](src/styles/main.css):

```css
:root {
  --primary-dark: #0a0a0f;
  --card-bg: #d4af7f;
  --accent-gold: #c9a961;
  /* ... other colors */
}
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive down to 320px width

## License

© 2026 Personal Portfolio. All Rights Reserved.
