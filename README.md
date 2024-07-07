# Usina Website Project

This is the finalized website project for the visual communication company called Usina. The website has been developed with multiple sections and features to provide an engaging and informative user experience.

## Table of Contents

- [Sections](#sections)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Additional Features](#additional-features)
- [Testing](#testing)
- [Instructions to Run the Project](#instructions-to-run-the-project)
- [Final Considerations](#final-considerations)
- [Deployment](#deployment)

## Sections

### Home
- Presentation section with Usina's logo and social media icons that redirect to their respective social media pages.

### About
- Describes the vision and values of Usina.

### Clients Carousel
- Displays logos of companies that have used Usina's services.

### Services Provided
- Lists all services provided by Usina. Each service redirects to a specific page detailing that service (route redirection).

### Projects
- Gallery of projects completed by Usina, including images.

### Testimonials
- Section with testimonials from satisfied clients.

### Location
- Interactive map showing Usina's headquarters.

### Footer
- Contact information and other relevant information.

## Technologies Used
- Angular 16
- Bootstrap
- SCSS
- AOS library
- Leaflet
- Vanta.js

## Project Structure
- **src**: Contains the main project files.
  - **components**: Reusable components.
  - **partials**: Specific sections (Home, About, Services, Projects, etc.).
  - **pages**: Home and detail components as the two separate pages of the project.
  - **services**: Responsible for fetching and filtering data.
  - **assets**: Images, icons, and other static files.
  - **styles**: Style files (SCSS).
  - **scss**: Folder with reusable SCSS variables.
  - **routes**: Route configuration for navigation.
  - **data**: Contains all the data such as details_data, projects, and services.
  - **models**: Contains all the interfaces used in the project.

## Additional Features
- Dynamic route redirection to specific service pages.
- Clients carousel with automatic navigation.
- Interactive map using Leaflet.
- Animated on-scroll effects using AOS library.
- Dynamic backgrounds using Vanta.js.
- Responsive layout for mobile and desktop devices.

## Testing
- Usability testing performed on different browsers (Chrome, Firefox, Safari).
- Responsiveness testing on mobile devices.
- Route redirection testing to service pages.

## Instructions to Run the Project
1. Clone the repository.
   ```bash
   git clone https://github.com/yourusername/usina-website.git

2. Navigate to the project directory.
   ```bash
   cd usina-website

3. Install the dependencies.
   ```bash
   npm install

4. Start the development server.
   ```bash
   ng serve

# Final Considerations 
This project aims to provide a smooth and intuitive user experience, highlighting the services and quality of the work done by Usina. Thank you for the opportunity to collaborate on this project.
If you have any questions or need further information, please feel free to contact us.

# Deployment
The Usina website is deployed and can be accessed at [Usina-RR](http://www.usina-rr.netlify.app).
