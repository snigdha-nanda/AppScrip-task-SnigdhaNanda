# AppScrip Frontend Developer Assessment

## Project Overview

This project is a responsive Product Listing Page (PLP) developed as part of the AppScrip frontend developer assessment. The application fetches product data from the Fake Store API and displays it in a clean, responsive interface with sorting and filtering capabilities.

## Technical Specifications

### Technologies Used
- **HTML5**: Semantic markup with proper SEO structure
- **CSS3**: Plain CSS with Flexbox and Grid layout (no external frameworks)
- **Vanilla JavaScript**: ES6+ features with async/await for API integration
- **Fake Store API**: External API for product data

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Features Implemented

### Core Functionality
- Product listing with API integration
- Responsive design for desktop, tablet, and mobile devices
- Product sorting (price low to high, high to low, newest, recommended)
- Mobile-responsive filter sidebar
- Loading states and error handling

### SEO Optimization
- Proper meta tags and page title
- H1 and H2 tag structure
- Schema markup implementation
- SEO-friendly image alt attributes
- Semantic HTML structure

### Performance Features
- Minimal DOM manipulation
- Efficient rendering strategies
- Error handling with graceful fallbacks
- Mobile-first responsive design

## Project Structure

```
AppScrip-task-SnigdhaNanda/
├── index.html              # Main HTML file
├── styles.css              # CSS stylesheet
├── script.js               # JavaScript functionality
├── README.md               # Project documentation
└── DEVELOPMENT.md          # Development guide
```


## API Integration

The application integrates with the Fake Store API:
- **Endpoint**: `https://fakestoreapi.com/products`
- **Data Retrieved**: Product title, price, description, image, category, rating
- **Error Handling**: Graceful fallbacks for API failures

## Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px  
- **Mobile**: Below 768px

## Code Quality Standards

- Clean, readable code with proper documentation
- Semantic HTML structure
- CSS organized with clear sections and comments
- JavaScript functions with JSDoc comments
- Error handling and loading states
- Performance optimizations

## Deployment on Netlify

This application is deployed on Netlify for easy access and automatic deployments:

### Deployment Steps
1. **Connect Repository**: Link your GitHub repository to Netlify
2. **Build Settings**: 
   - Build command: (leave empty - no build required)
   - Publish directory: `/` (root directory)
3. **Deploy**: Automatic deployment on every push to main branch

### Netlify Features Used
- Automatic HTTPS
- Global CDN
- Continuous deployment from GitHub
- Custom domain support (optional)


