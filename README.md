# Microsoft Copilot Front-End Portfolio Website <br> 
Brian McCarthy Developer Portfolio
**Website Name:** Microsoft Copilot Front-End Portfolio Website  
**Deployed Website**: https://briangator.github.io/web-dev-practice-pf-js/ <br> 
**Project Name**: web-dev-practice-pf-js
**Project URL**: https://github.com/BrianGator/web-dev-practice-pf-js
**Written by Brian McCarthy**

## Table of Contents

- [Project Overview](#project-overview)
- [Project Files](#project-files)
- [Languages Used](#languages-used)
- [Technologies Used](#technologies-used)
- [Methodologies Used](#methodologies-used)
- [Requirements Covered](#requirements-covered)
- [How to Use](#how-to-use)
- [How the Code Works](#how-the-code-works)
- [JavaScript Functions](#javascript-functions)
- [Code Samples](#code-samples)
- [Testing Checklist](#testing-checklist)
- [Author](#author)

## Project Overview

This project is a modern, polished, responsive portfolio website created for the Microsoft Copilot front-end development activities. The website demonstrates semantic HTML, accessibility, SEO, responsive CSS, and JavaScript interactivity.

The site includes:

- Header and navigation menu
- Hero section
- About Me section
- Projects section with project cards
- Project category filter
- Lightbox image preview
- Skills section
- Accessible contact form
- Real-time form validation
- Responsive hamburger navigation
- Hero section with author attribution

## Project Files

| File | Purpose |
| --- | --- |
| [index.html](index.html) | Main HTML page containing semantic page structure, portfolio sections, accessibility features, and SEO metadata. |
| [styles.css](styles.css) | CSS stylesheet for layout, colors, responsive design, navigation, cards, forms, and mobile breakpoint styling. |
| [script.js](script.js) | JavaScript file for hamburger menu behavior, smooth navigation support, project filtering, lightbox image preview, and form validation. |
| [README.md](README.md) | Project documentation explaining the website, technologies, requirements, code, and usage instructions. |

## Languages Used

- HTML5
- CSS3
- JavaScript

## Technologies Used

- Microsoft Copilot-assisted coding workflow
- Visual Studio Code or any modern IDE
- Browser Developer Tools
- Semantic HTML
- ARIA accessibility attributes
- CSS Flexbox
- CSS Grid
- CSS media queries
- JavaScript DOM manipulation
- Form validation
- Responsive web design

## Methodologies Used

- Semantic HTML structure
- Mobile-first responsive design concepts
- Accessibility-focused development
- SEO-friendly metadata and heading hierarchy
- Progressive enhancement
- Component-based section organization
- Manual browser testing
- Cross-browser compatibility review
- Debugging with browser console tools

## Requirements Covered

| Requirement | How It Is Covered |
| --- | --- |
| HTML portfolio structure | `index.html` includes header, navigation, main content, sections, articles, figures, form, and footer. |
| Accessibility features | Images include descriptive `alt` text, form inputs use labels, navigation uses ARIA attributes, and a skip link is included. |
| CSS styling | `styles.css` applies full-page styling, layout, typography, color scheme, cards, forms, buttons, and footer design. |
| JavaScript interactivity | `script.js` adds hamburger menu behavior, project filtering, lightbox preview, and form validation. |
| Responsive design | CSS media query at `768px` changes the layout for mobile screens and displays a hamburger menu. |

## How to Use

1. Download or copy the project files.
2. Keep `index.html`, `styles.css`, `script.js`, and `README.md` in the same folder.
3. Open `index.html` in a browser such as Microsoft Edge, Chrome, or Firefox.
4. Test the navigation links, project filters, project image lightbox, and contact form.
5. Resize the browser window to confirm the responsive mobile layout works correctly.

## How the Code Works

### HTML

The HTML file creates the structure of the portfolio website. It uses semantic elements such as:

- `<header>` for the site header and hero area
- `<nav>` for navigation
- `<main>` for primary page content
- `<section>` for major content areas
- `<article>` for individual project cards
- `<figure>` and `<figcaption>` for project images
- `<form>` for the contact form
- `<footer>` for author attribution

The page also includes SEO metadata in the `<head>` section:

```html
<meta
  name="description"
  content="Brian McCarthy Developer Portfolio showcasing front-end projects, QA experience, technical skills, and contact information."
/>
<title>Brian McCarthy Developer Portfolio</title>
```

### CSS

The CSS file controls the visual design. It uses CSS variables for consistent colors, spacing, and border radius values. It also includes a responsive breakpoint at `768px` so the navigation changes into a mobile hamburger menu.

```css
@media (max-width: 768px) {
  .menu-toggle {
    display: inline-flex;
  }

  .nav-menu {
    display: none;
    flex-direction: column;
  }

  .nav-menu.open {
    display: flex;
  }
}
```

### JavaScript

The JavaScript file adds interactivity to the portfolio. It listens for user actions such as button clicks, keyboard input, image clicks, and form submissions.

## JavaScript Functions

| Function | Purpose |
| --- | --- |
| `toggleMenu()` | Opens and closes the mobile navigation menu. |
| `closeMenu()` | Closes the mobile navigation menu after a link is selected. |
| `filterProjects(category)` | Shows projects that match the selected category. |
| `openLightbox(image)` | Opens a larger preview of a selected project image. |
| `closeLightbox()` | Closes the project image preview. |
| `validateName()` | Checks that the name field contains at least two characters. |
| `validateEmail()` | Checks that the email field uses a valid email format. |
| `validateMessage()` | Checks that the message field contains at least ten characters. |
| `validateForm()` | Runs all form validation checks before allowing a successful form message. |

## Code Samples

### Accessible Navigation Button

```html
<button
  class="menu-toggle"
  id="menu-toggle"
  type="button"
  aria-label="Toggle navigation menu"
  aria-controls="nav-menu"
  aria-expanded="false"
>
  <span class="hamburger" aria-hidden="true"></span>
</button>
```

This button supports screen readers with `aria-label`, identifies the controlled menu with `aria-controls`, and updates its open or closed state with `aria-expanded`.

### Project Card Structure

```html
<article class="project-card" data-category="frontend">
  <figure>
    <img
      src="https://placehold.co/800x500/1f2937/ffffff?text=Responsive+Portfolio"
      alt="Preview image for a responsive portfolio website project"
      class="project-image"
    />
    <figcaption>Responsive portfolio website</figcaption>
  </figure>
  <div class="project-content">
    <h3>Responsive Portfolio Website</h3>
    <p>A semantic one-page portfolio with responsive navigation.</p>
  </div>
</article>
```

This structure uses semantic HTML and includes descriptive alternative text for accessibility.

### Project Filter Function

```javascript
function filterProjects(category) {
  projectCards.forEach((card) => {
    const cardCategory = card.dataset.category;
    const shouldShow = category === "all" || cardCategory === category;
    card.hidden = !shouldShow;
  });
}
```

This function checks each project card's category and hides cards that do not match the selected filter.

### Contact Form Validation

```javascript
function validateEmail() {
  const emailInput = document.querySelector("#email");
  const error = document.querySelector("#email-error");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailInput.value.trim())) {
    error.textContent = "Please enter a valid email address.";
    return false;
  }

  error.textContent = "";
  return true;
}
```

This function validates email input and gives real-time feedback to the user.

## Testing Checklist

Use this checklist before submitting the final project:

- [ ] Open `index.html` in a browser.
- [ ] Confirm the CSS styling loads correctly.
- [ ] Confirm the JavaScript file loads without console errors.
- [ ] Click each navigation link.
- [ ] Resize the browser below `768px` and test the hamburger menu.
- [ ] Test each project filter button.
- [ ] Click project images and confirm the lightbox opens.
- [ ] Press `Escape` and confirm the lightbox closes.
- [ ] Submit the contact form empty and confirm validation messages appear.
- [ ] Enter valid contact form data and confirm the success message appears.
- [ ] Test in at least two browsers, such as Edge and Chrome.
- [ ] Confirm all images include descriptive `alt` text.
- [ ] Confirm the page displays “Written by Brian McCarthy.”

## Author

Written by Brian McCarthy.
