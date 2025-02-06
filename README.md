# Art Gallery Slideshow

## Project Description

The project represents an **art gallery** in the form of an interactive slideshow. Users can browse through images in fullscreen mode and navigate through various artworks depending on their device screen size. The project utilizes **HTML**, **CSS**, **SCSS**, and **JavaScript**.

## Features Implemented 

// **Navigation through the slideshow**
- Users can navigate between images using the **"previous"** and **"next"** buttons.
- The **"previous"** button is disabled on the first slide, and the **"next"** button is disabled on the last slide.

// **Viewing images in lightbox (modal)**
- Clicking the **fullscreen button (full-s-btn)** opens a **modal (popup)** showing the enlarged image.
- Scrolling is disabled when the modal is open to help users focus on the image.
- The modal can be closed with the **close button (close-btn)**.

// **Responsive layout for different screen resolutions**
- Slideshow items are arranged **vertically (column)** on smaller screens (≤ 965px) and **horizontally (row)** on larger screens (≥ 966px).
- The layout adjusts dynamically when the window is resized.

// **Interactive elements with hover effects**
- Buttons change color and accessibility based on context (e.g., the inactive **"previous"** button on the first slide has a different color).

## Additional Features

// **Redirecting users to a specific slide from the homepage (index.html)**
- Clicking on a portrait on the homepage redirects the user to **slideshow.html** with the parameter `?slide={index}`.
- This allows the user to directly open the corresponding image instead of starting from the first slide every time.

// **Smooth transition animations for slide content**
- When switching slides, images and their descriptions fade out and in gradually, making transitions smoother.

// **Progress bar**
- A progress indicator shows how many slides the user has already viewed.
- The percentage progress is calculated based on the current index and total number of slides.

// **Error handling for missing slides**
- If `slideIndex` exceeds the number of available slides, the application won't throw an error.

// **Keyboard support**
- **Arrow keys**: Users can navigate through slides using left and right arrow keys.
- **ESC key**: Users can close the modal with the **ESC** key.

## Technologies Used

- **HTML** – Structure of the page.
- **CSS** – Styling of the page elements.
- **SCSS** – Enhanced CSS syntax for better code organization.
- **JavaScript** – Interactivity of the page, including slideshow handling, navigation, fullscreen view, animations, and progress bar.

## How the Project Works

1. **Homepage (index.html)**:
   - The page contains portraits that users can click to go to a specific slide.
   - Clicking on a portrait redirects the user to **slideshow.html** with the query parameter `?slide={index}` to directly open the corresponding slide.

2. **Slideshow Page (slideshow.html)**:
   - Each image is displayed in a fullscreen view with the option to switch between slides using the **Previous** and **Next** buttons.
   - Slides change automatically every 15 seconds.
   - Users can navigate between slides using arrow keys and close the modal with the **ESC** key.



