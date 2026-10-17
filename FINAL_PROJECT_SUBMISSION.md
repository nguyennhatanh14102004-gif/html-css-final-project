# Final Project Submission — Discover Vietnam

## Website and source code
- Website (GitHub Pages URL; check deployment): https://nguyennhatanh14102004-gif.github.io/html-css-final-project/
- Source: https://github.com/nguyennhatanh14102004-gif/html-css-final-project
- CSS: https://github.com/nguyennhatanh14102004-gif/html-css-final-project/blob/main/style.css

## Project description
Discover Vietnam is a three-page website introducing Vietnamese nature, culture and food. The homepage presents the theme and featured experiences. The gallery page offers interactive previews of six destinations. The food page introduces traditional dishes.

## Responsive layout
The stylesheet uses CSS Grid for the hero, cards and gallery; Flexbox for food cards and navigation. A media query at 800px changes multi-column grids to a single column. The viewport meta tag supports mobile layouts.

## Four additional features
1. **Interactive gallery:** Image mouseover and keyboard focus call `upDate(this)`, while mouseout and blur call `unDo()` to reset the preview.
2. **Keyboard access:** A skip-to-content link and focusable gallery images with visible focus styling.
3. **Responsive design:** CSS Grid, Flexbox and a mobile breakpoint at 800px.
4. **Visual effects:** Hover transitions, image effects, rounded cards and responsive hero typography using `clamp()`.

## Validation evidence
The HTML files use HTML5 doctype, viewport metadata, semantic elements and descriptive image alt attributes. **A passing W3C validation result has not yet been independently confirmed.** To provide proof, validate each page at https://validator.w3.org/ and attach screenshots of the results. Also attach desktop/mobile screenshots of the site and a screenshot of `style.css`.

## Project files
- `index.html`: home page
- `gallery.html`: interactive gallery
- `food.html`: food page
- `style.css`: styling and responsive media query
- `gallery.js`: gallery interaction script referenced by gallery page

## Conclusion
This project demonstrates multi-page HTML structure, responsive CSS, interactive image previews, and accessibility-minded navigation. Validation and published-site screenshots should accompany the final submission.
