🍳 Culinara — Modern Recipe Web App

Culinara is a responsive, beautifully designed recipe web app built with Vanilla JavaScript. It helps users discover recipes, save favorites, and cook step-by-step using an immersive Cooking Mode.

✨ Live Experience


📸 Preview

🌟 Features
🔍 Smart Recipe Discovery

Browse a curated grid of recipes with:

Cooking time

Difficulty level

Calories

Ratings

⚡ Real-Time Search & Filtering

Instantly filter recipes by:

Breakfast

Lunch

Dinner

Snacks

Or search by recipe name with live results.

📖 Detailed Recipe View

Click any recipe to open a clean modal showing:

Ingredients

Serving size

Step-by-step instructions

👨‍🍳 Cooking Mode

A distraction-free guided cooking experience:

One step at a time

Progress bar

Large, readable instructions

Perfect for using while actively cooking.

❤️ Favorites System

Save recipes and access them quickly anytime.

📱 Fully Responsive

Optimized for:

Desktop

Tablet

Mobile

🎨 Smooth UI Animations

Custom CSS transitions for:

Modals

Hover effects

Step transitions

🛠 Tech Stack

No frameworks. No build process. Just clean front-end fundamentals.

Technology	Purpose
HTML5	Semantic structure
Tailwind CSS (CDN)	Utility-first styling
Custom CSS	Animations and UI polish
Vanilla JavaScript (ES6+)	App logic and state
Lucide Icons	Clean, lightweight icons
Google Fonts (Inter)	Modern typography

📂 Project Structure
/
├── index.html      # Main layout
├── style.css       # Custom styles & animations
├── script.js       # App logic and recipe data
├── images/         # Recipe images
└── README.md

🚀 Getting Started
1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/culinara-recipe-app.git
cd culinara-recipe-app
```

2️⃣ Add Recipe Images

Create an images folder in the root directory and add your recipe images.

Example:

images/
  ro1.jpeg
  ro2.jpeg

  Or update image URLs inside script.js to use online images.

  3️⃣ Run the App

Open index.html in your browser.

For best results, use a local server:

VS Code Live Server

🧩 Customizing Recipes

Recipes are stored in script.js inside the MOCK_RECIPES array.

Example:
```
const MOCK_RECIPES = [
  {
    id: 1,
    title: "Creamy Garlic Pasta",
    image: "./images/pasta.jpg",
    time: "25 min",
    difficulty: "Easy",
    calories: "450 kcal",
    rating: 4.8,
    category: "Dinner",
    ingredients: [...],
    steps: [...]
  }
];
```
You can:

Add new recipes

Edit categories

Change cooking steps

Replace images

No backend required.

🎯 Future Improvements

Ideas if you want to level this up:

Connect to a real recipe API

Add dark mode

Add user accounts + saved recipes

Voice-guided Cooking Mode

Drag-and-drop meal planner

🤝 Contributing

Contributions are welcome.

Fork the repo

Create a branch
```
git checkout -b feature/your-feature
```

Commit changes
```
git commit -m "Add new feature"
```

Push
```
git push origin feature/your-feature
```

📄 License

This project is licensed under the MIT License.

💡 Author Note

Culinara was built to show how far you can go with just HTML, CSS, and JavaScript — no frameworks, no heavy tooling, just clean fundamentals and thoughtful UX.
