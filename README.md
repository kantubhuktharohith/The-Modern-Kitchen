# The-Modern-Kitchen

# Culinara 🍳

**Culinara** is a modern, responsive web application designed for recipe discovery and cooking assistance. It features a beautiful UI, instant search filtering, a favorites system, and an immersive "Cooking Mode" that guides users step-by-step through recipe preparation.

![Project Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🌟 Key Features

* **Recipe Discovery:** Browse a grid of curated recipes with details on time, difficulty, calories, and ratings.
* **Smart Filtering & Search:** Instantly filter recipes by category (Breakfast, Lunch, Dinner, Snacks) or search by recipe title in real-time.
* **Detailed Recipe View:** A beautiful modal overlay displaying ingredients, serving sizes, and comprehensive instructions.
* **Cooking Mode:** An interactive, distraction-free overlay that guides you through the recipe one step at a time with a progress bar.
* **Favorites System:** Save your favorite recipes for quick access later.
* **Responsive Design:** Fully optimized for desktops, tablets, and mobile devices.
* **Smooth Animations:** Custom CSS animations for fading, sliding, and scaling elements for a polished user experience.

## 🛠️ Tech Stack

This project is built using pure **Vanilla JavaScript** without the need for heavy frameworks or build steps.

* **HTML5:** Semantic markup.
* **CSS3 & Tailwind CSS:** Styling is handled via Tailwind CSS (CDN) for utility classes, combined with `style.css` for custom animations and scrollbars.
* **JavaScript (ES6+):** Handles state management, UI rendering, modal logic, and the "Cooking Mode" interactivity.
* **Lucide Icons:** Lightweight and beautiful icons.
* **Google Fonts:** Uses the 'Inter' typeface.

## 📂 Project Structure

text
/
├── index.html      # Main HTML structure
├── style.css       # Custom animations and global overrides
├── script.js       # Application logic and mock data
├── images/         # Recipe images (referenced in script.js)
└── README.md       # Project documentation
🚀 Getting Started
Since this project uses the Tailwind CSS CDN and Vanilla JS, there is no complex build process (like npm install).

Prerequisites
A modern web browser (Chrome, Firefox, Safari, Edge).

An active internet connection (to load Tailwind CSS and Lucide Icons via CDN).

Installation
Clone the repository:

Bash

git clone [https://github.com/your-username/culinara-recipe-app.git](https://github.com/your-username/culinara-recipe-app.git)
Navigate to the project folder:

Bash

cd culinara-recipe-app
Add Images:

Create a folder named images in the root directory.

Add your recipe images (e.g., ro1.jpeg, ro2.jpeg, etc.) to match the paths in script.js, or update the MOCK_RECIPES array in script.js to point to your own image URLs.

Run the App:

Simply open index.html in your web browser.

Tip: For the best experience, use a local server like Live Server (VS Code Extension) or Python's http.server to avoid CORS issues with local file protocols, although this specific code should work directly via file path.

🧩 Configuration
Modifying Recipes
The application uses a local mock database located in script.js. To add or change recipes, look for the MOCK_RECIPES constant:

JavaScript

const MOCK_RECIPES = [
    {
        id: 1,
        title: "Your New Recipe",
        image: "path/to/image.jpg",
        time: "30 min",
        // ... other details
    },
    // ...
];
📸 Screenshots
(Add screenshots of the Dashboard, Modal, and Cooking Mode here)

🤝 Contributing
Contributions, issues, and feature requests are welcome!

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
Distributed under the MIT License. See LICENSE for more information.

Note: This project currently uses mock data. In a production environment, script.js would be updated to fetch data from a real backend API.


### Next Steps for you:
1.  **Create an `images` folder:** Your code references local images (e.g., `./images/ro1.jpeg`). You will need to create this folder and add images, or update the `MOCK_RECIPES` in `script.js` to use public URLs (like Unsplash) so the images load for anyone who clones the repo.
2.  **Screenshots:** Take a screenshot of the main grid and the "Cooking Mode" and add them to the README to make it attractive.
