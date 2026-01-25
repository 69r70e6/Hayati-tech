# Hayati Tech - Portfolio Website

A professional, modern portfolio website for Hayati Tech, a web development company.

## Features

### 🎨 Design
- **Modern & Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Gradient Theme**: Beautiful gradient backgrounds with primary and secondary colors
- **Smooth Animations**: Engaging animations and transitions throughout

### 📄 Sections

1. **Navigation Bar** - Sticky header with smooth scrolling navigation
2. **Hero Section** - Eye-catching landing section with call-to-action
3. **About Us** - Company information with key statistics and features
4. **Services** - 6 main service offerings with icons
5. **Portfolio** - Showcase of 6 completed projects with descriptions
6. **Contact** - Contact information and inquiry form
7. **Footer** - Company information and social links

### ✨ Interactive Features

- Mobile-responsive hamburger menu
- Smooth scroll navigation
- Form validation and submission handling
- Scroll animations for portfolio items and services
- Counter animation for statistics
- Hover effects on cards and buttons
- Social media links

## File Structure

```
hayati-tech-portfolio/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css     # Main stylesheet
│   ├── js/
│   │   └── script.js      # JavaScript functionality
│   └── images/            # Directory for images
└── README.md              # This file
```

## How to Use

1. **Open the Website**
   - Simply open `index.html` in your web browser

2. **Customize the Content**
   - Edit company information in the About section
   - Update contact details in the Contact section
   - Add your actual projects to the Portfolio section
   - Modify phone number and email to your company's details

3. **Add Images**
   - Place company images, project screenshots, and team photos in the `assets/images/` folder
   - Update the placeholder divs in the portfolio section with actual images

4. **Customize Colors**
   - Edit the CSS variables in `assets/css/styles.css`:
     ```css
     :root {
         --primary-color: #667eea;
         --secondary-color: #764ba2;
         /* ... other colors ... */
     }
     ```

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and CSS Grid
- **JavaScript (ES6+)** - Interactive features
- **Font Awesome** - Icon library (loaded from CDN)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Option 1: Static Hosting (Recommended)
- GitHub Pages
- Netlify
- Vercel
- AWS S3

### Option 2: Traditional Web Server
- Upload all files to your web hosting via FTP
- Ensure `.html`, `.css`, and `.js` files are in the correct structure

## Customization Tips

### Change Brand Colors
Edit the CSS variables in `assets/css/styles.css` (lines 8-17)

### Update Company Information
- Logo/Company Name: Line 42 in `index.html`
- Contact details: Contact section (line ~280)
- Address, phone, email: Update with your actual information

### Add Projects
- Duplicate a portfolio item and update the content
- Replace placeholder colors with actual project images

### Modify Services
- Edit the Services section to match your offerings
- Change icons by updating Font Awesome classes

## Performance Optimization

The website includes:
- Optimized CSS with minimal file size
- Lazy loading for scroll animations
- Smooth performance on all devices
- Fast loading times

## Future Enhancements

Consider adding:
- Backend form submission (Node.js/PHP)
- Blog section
- Team member profiles
- Client testimonials
- Dark mode toggle
- Multi-language support
- Booking system

## Support & Updates

For more information about Hayati Tech or to update this website, contact:
- Email: hello@hayatitech.com
- Phone: +1 (555) 123-4567

---

**Created for Hayati Tech**
Building the future of web development
