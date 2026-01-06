const MOCK_RECIPES = [
            // --- BREAKFAST (1-10) ---
            {
                id: 1,
                title: "Crispy Masala Dosa",
                image: "./images/ro1.jpeg",
                time: "40 min",
                difficulty: "Medium",
                calories: "350 kcal",
                category: "Breakfast",
                rating: 4.9,
                servings: 2,
                ingredients: ["Dosa batter", "Potatoes", "Onions", "Mustard seeds", "Turmeric", "Curry leaves", "Green chilies"],
                instructions: ["Boil and mash potatoes.", "Sauté onions, spices, and chilies, then mix with potatoes.", "Spread batter on hot griddle to make thin crepes.", "Fill with potato masala and roll.", "Serve hot with coconut chutney and sambar."]
            },
            {
                id: 2,
                title: "Steamed Idli Sambar",
                image: "./images/ro2.jpeg",
                time: "30 min",
                difficulty: "Easy",
                calories: "180 kcal",
                category: "Breakfast",
                rating: 4.8,
                servings: 3,
                ingredients: ["Rice and Urad Dal batter", "Toor Dal", "Vegetables (drumstick, carrots)", "Sambar powder", "Tamarind"],
                instructions: ["Steam the batter in idli molds for 10-12 minutes.", "Boil dal with vegetables and tamarind water.", "Add sambar powder and temper with mustard seeds.", "Serve fluffy idlis submerged in hot sambar."]
            },
            {
                id: 3,
                title: "Aloo Paratha",
                image: "./images/ro3.jpeg",
                time: "35 min",
                difficulty: "Medium",
                calories: "400 kcal",
                category: "Breakfast",
                rating: 4.9,
                servings: 2,
                ingredients: ["Whole wheat flour", "Potatoes", "Green chilies", "Garam masala", "Butter/Ghee", "Coriander"],
                instructions: ["Make a soft dough with flour.", "Prepare spicy mashed potato filling.", "Stuff filling into dough balls and roll flat.", "Cook on a tawa with ghee until golden brown.", "Serve with curd and pickle."]
            },
            {
                id: 4,
                title: "Kanda Poha",
                image: "./images/ro4.jpeg",
                time: "20 min",
                difficulty: "Easy",
                calories: "280 kcal",
                category: "Breakfast",
                rating: 4.7,
                servings: 2,
                ingredients: ["Flattened rice (Poha)", "Onions", "Peanuts", "Mustard seeds", "Turmeric", "Lemon juice", "Coriander"],
                instructions: ["Rinse poha and let it soften.", "Sauté peanuts, mustard seeds, and onions.", "Add turmeric and poha, toss gently.", "Garnish with fresh coriander and lemon juice."]
            },
            {
                id: 5,
                title: "Chole Bhature",
                image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=800",
                time: "60 min",
                difficulty: "Hard",
                calories: "550 kcal",
                category: "Breakfast",
                rating: 5.0,
                servings: 2,
                ingredients: ["Chickpeas", "Maida (flour)", "Yogurt", "Spices", "Onions", "Tomatoes"],
                instructions: ["Knead flour with yogurt and let it ferment.", "Cook chickpeas in spicy onion-tomato gravy.", "Deep fry rolled dough circles until puffy (Bhature).", "Serve hot with pickled onions."]
            },
            {
                id: 6,
                title: "Vegetable Upma",
                image: "./images/ro5.jpeg",
                time: "20 min",
                difficulty: "Easy",
                calories: "250 kcal",
                category: "Breakfast",
                rating: 4.6,
                servings: 2,
                ingredients: ["Semolina (Rava)", "Mixed vegetables", "Mustard seeds", "Ginger", "Curry leaves", "Cashews"],
                instructions: ["Roast semolina until fragrant.", "Sauté spices and vegetables.", "Add water and bring to boil.", "Stir in roasted rava and cook until fluffy."]
            },
            {
                id: 7,
                title: "Puri Bhaji",
                image: "./images/ro6.jpg",
                time: "40 min",
                difficulty: "Medium",
                calories: "450 kcal",
                category: "Breakfast",
                rating: 4.8,
                servings: 3,
                ingredients: ["Wheat flour", "Potatoes", "Mustard seeds", "Turmeric", "Green chilies", "Curry leaves"],
                instructions: ["Make stiff dough and deep fry small circles (Puris).", "Boil and cube potatoes.", "Sauté potatoes with turmeric, chilies, and mustard seeds.", "Serve the dry potato curry with hot puris."]
            },
            {
                id: 8,
                title: "Medu Vada",
                image: "./images/ro7.jpeg",
                time: "45 min",
                difficulty: "Medium",
                calories: "320 kcal",
                category: "Breakfast",
                rating: 4.7,
                servings: 4,
                ingredients: ["Urad Dal", "Green chilies", "Black pepper", "Cumin", "Ginger", "Curry leaves"],
                instructions: ["Soak and grind urad dal into thick batter.", "Mix in spices and herbs.", "Shape into donuts and deep fry until golden.", "Serve crispy with sambar and coconut chutney."]
            },
            {
                id: 9,
                title: "Onion Uttapam",
                image: "./images/ro8.jpeg",
                time: "25 min",
                difficulty: "Easy",
                calories: "290 kcal",
                category: "Breakfast",
                rating: 4.6,
                servings: 2,
                ingredients: ["Dosa batter", "Chopped onions", "Green chilies", "Coriander", "Oil/Ghee"],
                instructions: ["Pour thick batter onto griddle.", "Top generously with chopped onions and chilies.", "Cook on both sides until golden and onions caramelize.", "Serve with tomato chutney."]
            },
            {
                id: 10,
                title: "Appam with Stew",
                image: "./images/ro9.jpeg",
                time: "50 min",
                difficulty: "Medium",
                calories: "380 kcal",
                category: "Breakfast",
                rating: 4.9,
                servings: 3,
                ingredients: ["Rice flour", "Coconut milk", "Yeast/Toddy", "Vegetables", "Whole spices"],
                instructions: ["Ferment rice batter with coconut milk.", "Cook appams in a curved pan (soft center, crispy edges).", "Simmer vegetables in mild coconut milk gravy (stew).", "Serve hot."]
            },

            // --- LUNCH (11-20) ---
            {
                id: 11,
                title: "Hyderabadi Chicken Biryani",
                image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
                time: "90 min",
                difficulty: "Hard",
                calories: "650 kcal",
                category: "Lunch",
                rating: 5.0,
                servings: 4,
                ingredients: ["Basmati rice", "Chicken", "Yogurt", "Fried onions", "Saffron", "Biryani masala"],
                instructions: ["Marinate chicken with spices and yogurt.", "Par-boil basmati rice with whole spices.", "Layer chicken and rice, top with saffron and fried onions.", "Cook on 'dum' (slow steam) for 30 minutes."]
            },
            {
                id: 12,
                title: "Butter Chicken",
                image: "./images/ro10.jpeg",
                time: "50 min",
                difficulty: "Medium",
                calories: "580 kcal",
                category: "Lunch",
                rating: 4.9,
                servings: 3,
                ingredients: ["Chicken", "Tomatoes", "Cream", "Butter", "Kasuri Methi", "Spices"],
                instructions: ["Grill marinated chicken pieces.", "Simmer tomato puree with butter and spices.", "Add chicken and finish with fresh cream and dried fenugreek leaves.", "Serve with Naan."]
            },
            {
                id: 13,
                title: "Palak Paneer",
                image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?auto=format&fit=crop&q=80&w=800",
                time: "40 min",
                difficulty: "Medium",
                calories: "420 kcal",
                category: "Lunch",
                rating: 4.8,
                servings: 2,
                ingredients: ["Spinach", "Paneer (Cottage Cheese)", "Garlic", "Ginger", "Cream", "Garam masala"],
                instructions: ["Blanch and puree spinach.", "Sauté garlic and spices, add spinach puree.", "Simmer with paneer cubes.", "Stir in cream and serve with roti."]
            },
            {
                id: 14,
                title: "Rajma Chawal",
                image: "./images/ro11.jpeg",
                time: "60 min",
                difficulty: "Easy",
                calories: "450 kcal",
                category: "Lunch",
                rating: 4.8,
                servings: 3,
                ingredients: ["Red kidney beans", "Basmati Rice", "Onions", "Tomatoes", "Ginger-Garlic paste"],
                instructions: ["Pressure cook soaked kidney beans.", "Prepare onion-tomato masala gravy.", "Simmer beans in gravy until thick.", "Serve hot over steamed rice."]
            },
            {
                id: 15,
                title: "Dal Makhani",
                image: "./images/ro12.jpeg",
                time: "12 hours",
                difficulty: "Hard",
                calories: "520 kcal",
                category: "Lunch",
                rating: 5.0,
                servings: 4,
                ingredients: ["Whole Black Lentils (Urad)", "Kidney beans", "Butter", "Cream", "Tomatoes"],
                instructions: ["Soak and slow cook lentils overnight.", "Add tomato puree and butter.", "Simmer on low heat for hours for creamy texture.", "Finish with cream."]
            },
            {
                id: 16,
                title: "Bengali Fish Curry",
                image: "./images/ro13.jpeg",
                time: "40 min",
                difficulty: "Medium",
                calories: "380 kcal",
                category: "Lunch",
                rating: 4.7,
                servings: 2,
                ingredients: ["Rohu/Katla Fish", "Mustard oil", "Mustard seeds", "Green chilies", "Turmeric"],
                instructions: ["Marinate and lightly fry fish.", "Make a paste of mustard seeds and chilies.", "Cook fish in the mustard gravy.", "Serve with steamed rice."]
            },
            {
                id: 17,
                title: "Vegetable Pulao",
                image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?auto=format&fit=crop&q=80&w=800",
                time: "30 min",
                difficulty: "Easy",
                calories: "320 kcal",
                category: "Lunch",
                rating: 4.6,
                servings: 3,
                ingredients: ["Basmati rice", "Carrots", "Peas", "Beans", "Whole spices", "Ghee"],
                instructions: ["Sauté whole spices and vegetables in ghee.", "Add washed rice and water.", "Cook until rice is fluffy and vegetables are tender.", "Serve with Raita."]
            },
            {
                id: 18,
                title: "Paneer Tikka Masala",
                image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800",
                time: "50 min",
                difficulty: "Medium",
                calories: "490 kcal",
                category: "Lunch",
                rating: 4.9,
                servings: 3,
                ingredients: ["Paneer", "Yogurt", "Bell peppers", "Onions", "Tomatoes", "Tandoori masala"],
                instructions: ["Marinate paneer and veggies in yogurt spice mix.", "Grill or pan-fry until charred.", "Add to a rich orange tomato-based gravy.", "Simmer and serve."]
            },
            {
                id: 19,
                title: "Spicy Egg Curry",
                image: "./images/ro14.jpeg",
                time: "35 min",
                difficulty: "Easy",
                calories: "300 kcal",
                category: "Lunch",
                rating: 4.6,
                servings: 2,
                ingredients: ["Eggs", "Onions", "Tomatoes", "Ginger", "Garlic", "Red chili powder"],
                instructions: ["Boil and fry eggs until skin is golden.", "Prepare spicy onion-tomato gravy.", "Simmer eggs in gravy.", "Garnish with coriander."]
            },
            {
                id: 20,
                title: "Malai Kofta",
                image: "./images/ro15.jpeg",
                time: "60 min",
                difficulty: "Hard",
                calories: "550 kcal",
                category: "Lunch",
                rating: 4.9,
                servings: 3,
                ingredients: ["Potatoes", "Paneer", "Cashews", "Cream", "Raisins", "Tomatoes"],
                instructions: ["Make balls (Kofta) of mashed potato, paneer, and nuts.", "Deep fry koftas.", "Prepare a sweet and spicy creamy cashew gravy.", "Add koftas just before serving."]
            },

            // --- DINNER (21-30) ---
            {
                id: 21,
                title: "Tandoori Chicken",
                image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800",
                time: "45 min",
                difficulty: "Medium",
                calories: "400 kcal",
                category: "Dinner",
                rating: 4.9,
                servings: 2,
                ingredients: ["Chicken legs", "Yogurt", "Lemon", "Tandoori Masala", "Ginger garlic paste"],
                instructions: ["Score chicken and marinate overnight.", "Roast in tandoor or oven at high heat.", "Baste with butter.", "Serve with mint chutney and lemon wedges."]
            },
            {
                id: 22,
                title: "Lamb Rogan Josh",
                image: "./images/ro16.jpeg",
                time: "90 min",
                difficulty: "Hard",
                calories: "600 kcal",
                category: "Dinner",
                rating: 4.8,
                servings: 3,
                ingredients: ["Lamb meat", "Yogurt", "Kashmiri Chili", "Fennel powder", "Whole spices"],
                instructions: ["Sear lamb in oil.", "Slow cook with yogurt and Kashmiri spices for color.", "Simmer until meat falls off bone.", "Serve with rice or Naan."]
            },
            {
                id: 23,
                title: "Bhindi Masala",
                image: "./images/ro17.jpeg",
                time: "30 min",
                difficulty: "Easy",
                calories: "220 kcal",
                category: "Dinner",
                rating: 4.5,
                servings: 2,
                ingredients: ["Okra (Bhindi)", "Onions", "Tomatoes", "Amchur (Mango powder)", "Cumin"],
                instructions: ["Wash and thoroughly dry okra before chopping.", "Stir fry with cumin and onions.", "Add spices and cook until tender but not slimey."]
            },
            {
                id: 24,
                title: "Matar Paneer",
                image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=800",
                time: "35 min",
                difficulty: "Medium",
                calories: "380 kcal",
                category: "Dinner",
                rating: 4.7,
                servings: 3,
                ingredients: ["Green peas", "Paneer", "Tomatoes", "Onions", "Cashews"],
                instructions: ["Make a paste of onions, tomatoes and cashews.", "Cook paste with spices.", "Add peas and paneer cubes.", "Simmer until sauce coats everything."]
            },
            {
                id: 25,
                title: "Chicken Chettinad",
                image: "./images/ro18.jpeg",
                time: "50 min",
                difficulty: "Hard",
                calories: "500 kcal",
                category: "Dinner",
                rating: 4.8,
                servings: 3,
                ingredients: ["Chicken", "Roasted Coconut", "Poppy seeds", "Black pepper", "Curry leaves"],
                instructions: ["Roast and grind fresh Chettinad masala.", "Cook chicken with the masala paste.", "Simmer until spicy and aromatic.", "Serve with Parotta."]
            },
            {
                id: 26,
                title: "Dal Tadka with Naan",
                image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800",
                time: "40 min",
                difficulty: "Medium",
                calories: "450 kcal",
                category: "Dinner",
                rating: 4.9,
                servings: 2,
                ingredients: ["Toor Dal", "Garlic", "Dried Red Chilies", "Ghee", "Cumin", "Flour (for Naan)"],
                instructions: ["Boil dal until soft.", "Prepare 'Tadka' (tempering) with ghee, garlic, and chilies.", "Pour over dal.", "Serve with fresh butter Naan."]
            },
            {
                id: 27,
                title: "Keema Pav",
                image: "./images/ro19.jpeg",
                time: "40 min",
                difficulty: "Medium",
                calories: "550 kcal",
                category: "Dinner",
                rating: 4.8,
                servings: 2,
                ingredients: ["Minced Mutton/Chicken", "Onions", "Garlic", "Green peas", "Pav buns", "Spices"],
                instructions: ["Sauté onions and spices.", "Add minced meat and cook until browned.", "Stir in peas and simmer.", "Serve with buttered Pav buns."]
            },
            {
                id: 28,
                title: "Sarson Ka Saag",
                image: "./images/ro20.jpeg",
                time: "60 min",
                difficulty: "Medium",
                calories: "350 kcal",
                category: "Dinner",
                rating: 4.7,
                servings: 2,
                ingredients: ["Mustard greens", "Spinach", "Maize flour", "Butter", "Ginger", "Garlic"],
                instructions: ["Boil and blend mustard greens.", "Cook with maize flour to thicken.", "Temper with garlic and butter.", "Traditionally served with Makki di Roti."]
            },
            {
                id: 29,
                title: "Chicken Korma",
                image: "./images/ro21.jpeg",
                time: "50 min",
                difficulty: "Medium",
                calories: "580 kcal",
                category: "Dinner",
                rating: 4.8,
                servings: 3,
                ingredients: ["Chicken", "Yogurt", "Almonds/Cashews", "Cream", "Whole spices"],
                instructions: ["Marinate chicken in yogurt.", "Make a white paste of nuts.", "Cook chicken in nut paste and cream sauce.", "Mild and aromatic dish."]
            },
            {
                id: 30,
                title: "Kadai Paneer",
                image: "./images/ro22.jpeg",
                time: "35 min",
                difficulty: "Easy",
                calories: "400 kcal",
                category: "Dinner",
                rating: 4.7,
                servings: 2,
                ingredients: ["Paneer", "Bell peppers", "Coriander seeds", "Dried red chilies", "Tomatoes"],
                instructions: ["Roast and crush coriander and chilies (Kadai masala).", "Sauté veggies and paneer in wok.", "Toss with masala and tomato base.", "Serve semi-dry."]
            },

            // --- SNACKS (31-40) ---
            {
                id: 31,
                title: "Punjabi Samosa",
                image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800",
                time: "50 min",
                difficulty: "Medium",
                calories: "280 kcal",
                category: "Snack",
                rating: 4.9,
                servings: 4,
                ingredients: ["Maida", "Potatoes", "Peas", "Cumin", "Garam Masala", "Oil"],
                instructions: ["Prepare stiff dough.", "Make spicy potato-pea filling.", "Shape dough into cones and fill.", "Deep fry on low heat until crispy."]
            },
            {
                id: 32,
                title: "Pani Puri",
                image: "./images/ro23.jpeg",
                time: "30 min",
                difficulty: "Medium",
                calories: "150 kcal",
                category: "Snack",
                rating: 5.0,
                servings: 4,
                ingredients: ["Semolina Puris", "Mint", "Coriander", "Tamarind", "Potatoes", "Chickpeas"],
                instructions: ["Prepare spicy green water (Mint/Chili) and sweet tamarind water.", "Mash potatoes and chickpeas.", "Crack puri, stuff with mash, dip in water.", "Eat whole immediately."]
            },
            {
                id: 33,
                title: "Mumbai Pav Bhaji",
                image: "./images/ro24.jpeg",
                time: "40 min",
                difficulty: "Medium",
                calories: "400 kcal",
                category: "Snack",
                rating: 4.9,
                servings: 3,
                ingredients: ["Mixed vegetables", "Potatoes", "Pav Bhaji Masala", "Butter", "Pav buns", "Lemon"],
                instructions: ["Boil and mash all vegetables.", "Cook with lots of butter and masala on a large tava.", "Toast buns in butter.", "Serve bhaji topped with butter, onions and lemon."]
            },
            {
                id: 34,
                title: "Bhel Puri",
                image: "./images/ro25.jpeg",
                time: "10 min",
                difficulty: "Easy",
                calories: "200 kcal",
                category: "Snack",
                rating: 4.7,
                servings: 2,
                ingredients: ["Puffed rice", "Sev", "Onions", "Potatoes", "Tamarind chutney", "Green chutney"],
                instructions: ["Mix puffed rice, veggies, and crushed papdi.", "Toss with sweet and spicy chutneys.", "Garnish with Sev and coriander.", "Serve immediately before it gets soggy."]
            },
            {
                id: 35,
                title: "Vada Pav",
                image: "./images/ro26.jpeg",
                time: "30 min",
                difficulty: "Medium",
                calories: "300 kcal",
                category: "Snack",
                rating: 4.8,
                servings: 2,
                ingredients: ["Potatoes", "Besan (Gram flour)", "Garlic chutney", "Pav buns", "Mustard seeds"],
                instructions: ["Dip spicy potato balls in gram flour batter.", "Deep fry until golden (Vada).", "Slather bun with garlic chutney.", "Place vada inside bun."]
            },
            {
                id: 36,
                title: "Onion Pakora",
                image: "./images/ro27.jpeg",
                time: "20 min",
                difficulty: "Easy",
                calories: "250 kcal",
                category: "Snack",
                rating: 4.6,
                servings: 3,
                ingredients: ["Sliced onions", "Besan", "Rice flour", "Chili powder", "Ajwain"],
                instructions: ["Mix onions with spices and flours.", "Sprinkle water to bind (do not make batter).", "Drop loose clumps into hot oil.", "Fry until crispy and brown."]
            },
            {
                id: 37,
                title: "Khaman Dhokla",
                image: "./images/ro28.jpeg",
                time: "25 min",
                difficulty: "Medium",
                calories: "180 kcal",
                category: "Snack",
                rating: 4.7,
                servings: 4,
                ingredients: ["Gram flour (Besan)", "Yogurt", "Eno/Fruit salt", "Mustard seeds", "Green chilies"],
                instructions: ["Make a smooth batter with besan and yogurt.", "Add fruit salt and steam immediately for 15 mins.", "Cut into squares.", "Temper with mustard seeds and green chilies in sugar water."]
            },
            {
                id: 38,
                title: "Papdi Chaat",
                image: "./images/ro29.jpeg",
                time: "15 min",
                difficulty: "Easy",
                calories: "220 kcal",
                category: "Snack",
                rating: 4.8,
                servings: 2,
                ingredients: ["Crispy Papdi", "Yogurt", "Potatoes", "Chickpeas", "Chutneys", "Sev"],
                instructions: ["Arrange papdis on a plate.", "Top with potatoes and chickpeas.", "Drizzle chilled yogurt and chutneys.", "Sprinkle spice powders and Sev."]
            },
            {
                id: 39,
                title: "Khasta Kachori",
                image: "./images/ro30.jpeg",
                time: "50 min",
                difficulty: "Hard",
                calories: "350 kcal",
                category: "Snack",
                rating: 4.7,
                servings: 4,
                ingredients: ["Maida", "Moong Dal", "Fennel seeds", "Spices", "Ghee"],
                instructions: ["Make a flaky dough with ghee.", "Sauté spiced lentil filling.", "Stuff and flatten dough balls.", "Fry on very low heat until puffed and crispy."]
            },
            {
                id: 40,
                title: "Aloo Tikki",
                image: "./images/ro31.jpeg",
                time: "30 min",
                difficulty: "Medium",
                calories: "280 kcal",
                category: "Snack",
                rating: 4.8,
                servings: 3,
                ingredients: ["Potatoes", "Corn flour", "Peas", "Spices", "Chutneys"],
                instructions: ["Mash potatoes with spices and corn flour.", "Shape into patties and shallow fry.", "Serve hot with mint and tamarind chutneys."]
            }
        ];

        const CATEGORIES = ["All", "Breakfast", "Lunch", "Dinner", "Snack"];

        // --- State ---
        let state = {
            recipes: [],
            loading: true,
            searchQuery: "",
            activeCategory: "All",
            favorites: [],
            showFavoritesOnly: false,
            // New Cooking Mode State
            cookingRecipe: null,
            currentStep: 0
        };

        // --- Initialization ---
        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();
            initApp();

            // Input listeners
            document.getElementById('desktop-search').addEventListener('input', (e) => handleSearch(e.target.value));
            document.getElementById('mobile-search').addEventListener('input', (e) => handleSearch(e.target.value));
        });

        function initApp() {
            renderSkeleton();
            renderCategories();
            
            // Simulate API Fetch
            setTimeout(() => {
                state.recipes = MOCK_RECIPES;
                state.loading = false;
                renderRecipes();
            }, 1000);
        }

        // --- Core Logic ---

        function handleSearch(query) {
            state.searchQuery = query;
            renderRecipes();
            updateHeroVisibility();
        }

        function handleCategoryClick(cat) {
            state.activeCategory = cat;
            state.showFavoritesOnly = false;
            renderCategories();
            renderRecipes();
            updateHeroVisibility();
            updateNavFavoritesIcon();
        }

        function toggleShowFavorites() {
            state.showFavoritesOnly = !state.showFavoritesOnly;
            renderCategories();
            renderRecipes();
            updateHeroVisibility();
            updateNavFavoritesIcon();
        }

        function resetApp() {
            state.searchQuery = "";
            state.activeCategory = "All";
            state.showFavoritesOnly = false;
            document.getElementById('desktop-search').value = "";
            document.getElementById('mobile-search').value = "";
            renderCategories();
            renderRecipes();
            updateHeroVisibility();
            updateNavFavoritesIcon();
        }

        function toggleFavorite(e, id) {
            e.stopPropagation();
            if (state.favorites.includes(id)) {
                state.favorites = state.favorites.filter(fid => fid !== id);
            } else {
                state.favorites.push(id);
            }
            renderRecipes(); // Re-render to update heart icons
        }

        // --- Cooking Mode Logic (NEW) ---

        function startCooking(id) {
            // Close modal first
            closeModal();
            
            // Find recipe
            state.cookingRecipe = state.recipes.find(r => r.id === id);
            state.currentStep = 0;
            
            if (!state.cookingRecipe) return;

            // Initialize UI
            document.getElementById('cooking-title').textContent = state.cookingRecipe.title;
            document.getElementById('total-steps-num').textContent = state.cookingRecipe.instructions.length;
            
            // Render first step
            renderCookingStep();

            // Show UI
            const cookingMode = document.getElementById('cooking-mode');
            cookingMode.classList.remove('hidden');
            cookingMode.classList.add('flex');
            
            // Hide Overflow on body
            document.body.style.overflow = 'hidden';
            
            lucide.createIcons();
        }

        function renderCookingStep() {
            const recipe = state.cookingRecipe;
            const stepIndex = state.currentStep;
            
            // Update Progress Bar
            const progress = ((stepIndex + 1) / recipe.instructions.length) * 100;
            document.getElementById('cooking-progress-bar').style.width = `${progress}%`;
            
            // Update Step Counters
            document.getElementById('current-step-num').textContent = stepIndex + 1;
            document.getElementById('step-circle').textContent = stepIndex + 1;

            // Reset Animation
            const stepContainer = document.getElementById('step-container');
            const completionContainer = document.getElementById('completion-container');
            const nextBtn = document.getElementById('next-step-btn');
            
            // Hide completion, show step
            stepContainer.classList.remove('hidden');
            completionContainer.classList.add('hidden');
            
            // Re-trigger text animation
            stepContainer.classList.remove('animate-slide-up');
            void stepContainer.offsetWidth; // Force reflow
            stepContainer.classList.add('animate-slide-up');

            // Set Text
            document.getElementById('step-text').textContent = recipe.instructions[stepIndex];

            // Update Buttons
            document.getElementById('prev-step-btn').disabled = stepIndex === 0;
            
            if (stepIndex === recipe.instructions.length - 1) {
                nextBtn.innerHTML = `Finish <i data-lucide="check" class="w-5 h-5"></i>`;
                nextBtn.classList.replace('bg-orange-600', 'bg-green-600');
                nextBtn.classList.replace('hover:bg-orange-700', 'hover:bg-green-700');
                nextBtn.classList.replace('shadow-orange-200', 'shadow-green-200');
            } else {
                nextBtn.innerHTML = `Next Step <i data-lucide="arrow-right" class="w-5 h-5"></i>`;
                nextBtn.classList.replace('bg-green-600', 'bg-orange-600');
                nextBtn.classList.replace('hover:bg-green-700', 'hover:bg-orange-700');
                nextBtn.classList.replace('shadow-green-200', 'shadow-orange-200');
            }
            
            lucide.createIcons();
        }

        function nextStep() {
            if (state.currentStep < state.cookingRecipe.instructions.length - 1) {
                state.currentStep++;
                renderCookingStep();
            } else {
                // Show completion screen
                document.getElementById('step-container').classList.add('hidden');
                document.getElementById('completion-container').classList.remove('hidden');
                document.getElementById('cooking-progress-bar').style.width = '100%';
                
                // Trigger confetti logic here if we had a library, simpler for now
            }
        }

        function prevStep() {
            if (state.currentStep > 0) {
                state.currentStep--;
                renderCookingStep();
            } else {
                // If on completion screen, go back to last step
                const completionContainer = document.getElementById('completion-container');
                if(!completionContainer.classList.contains('hidden')){
                     completionContainer.classList.add('hidden');
                     renderCookingStep();
                }
            }
        }

        function exitCookingMode() {
            const cookingMode = document.getElementById('cooking-mode');
            cookingMode.classList.add('hidden');
            cookingMode.classList.remove('flex');
            document.body.style.overflow = 'auto';
            state.cookingRecipe = null;
        }


        // --- Rendering Helpers ---

        function updateHeroVisibility() {
            const hero = document.getElementById('hero-section');
            if (!state.showFavoritesOnly && state.activeCategory === "All" && !state.searchQuery) {
                hero.classList.remove('hidden');
            } else {
                hero.classList.add('hidden');
            }
        }

        function updateNavFavoritesIcon() {
            const btn = document.getElementById('nav-favorites-btn');
            const icon = btn.querySelector('svg');
            
            if (state.showFavoritesOnly) {
                btn.className = "p-2.5 rounded-full transition-all duration-200 bg-red-50 text-red-500 shadow-inner";
                icon.setAttribute('fill', 'currentColor');
            } else {
                btn.className = "p-2.5 rounded-full transition-all duration-200 hover:bg-slate-100 text-slate-600";
                icon.setAttribute('fill', 'none');
            }
        }

        function renderCategories() {
            const container = document.getElementById('filters-container');
            let html = '';

            // Favorites Indicator Pill
            if (state.showFavoritesOnly) {
                html += `
                    <button onclick="toggleShowFavorites()" class="flex items-center gap-2 px-5 py-2.5 bg-red-500 text-white rounded-full font-medium shadow-md shadow-red-200 whitespace-nowrap flex-shrink-0 animate-fade-in">
                        <i data-lucide="heart" class="w-4 h-4" fill="currentColor"></i>
                        Saved Recipes
                        <i data-lucide="x" class="w-4 h-4 ml-1 opacity-75"></i>
                    </button>
                `;
            }

            if (!state.showFavoritesOnly) {
                CATEGORIES.forEach(cat => {
                    const isActive = state.activeCategory === cat;
                    const classes = isActive 
                        ? "bg-slate-900 text-white shadow-lg shadow-slate-200 transform scale-105" 
                        : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 hover:border-slate-300";
                    
                    html += `
                        <button onclick="handleCategoryClick('${cat}')" class="px-6 py-2.5 rounded-full font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${classes}">
                            ${cat}
                        </button>
                    `;
                });
            }

            container.innerHTML = html;
            lucide.createIcons();
        }

        function renderSkeleton() {
            const grid = document.getElementById('recipe-grid');
            const skeletonHTML = `
                <div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full animate-pulse">
                    <div class="h-48 bg-slate-200 w-full"></div>
                    <div class="p-5 flex-1 space-y-3">
                        <div class="flex justify-between"><div class="h-4 bg-slate-200 rounded w-1/4"></div><div class="h-4 bg-slate-200 rounded w-1/4"></div></div>
                        <div class="h-6 bg-slate-200 rounded w-3/4"></div>
                        <div class="h-4 bg-slate-200 rounded w-1/2"></div>
                        <div class="mt-4 flex gap-2"><div class="h-8 bg-slate-200 rounded-full w-16"></div><div class="h-8 bg-slate-200 rounded-full w-16"></div></div>
                    </div>
                </div>
            `;
            grid.innerHTML = Array(6).fill(skeletonHTML).join('');
        }

        function renderRecipes() {
            if (state.loading) return;

            const grid = document.getElementById('recipe-grid');
            
            const filtered = state.recipes.filter(r => {
                const matchesSearch = r.title.toLowerCase().includes(state.searchQuery.toLowerCase());
                const matchesCategory = state.activeCategory === "All" || r.category === state.activeCategory;
                const matchesFav = state.showFavoritesOnly ? state.favorites.includes(r.id) : true;
                return matchesSearch && matchesCategory && matchesFav;
            });

            if (filtered.length === 0) {
                grid.innerHTML = `
                    <div class="col-span-full flex flex-col items-center justify-center py-20 text-center px-4 animate-fade-in">
                        <div class="bg-orange-50 p-6 rounded-full mb-6">
                            <i data-lucide="utensils-crossed" class="text-orange-400 w-12 h-12"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-800 mb-2">No recipes found</h3>
                        <p class="text-slate-500 max-w-md mb-8">We couldn't find any recipes matching your criteria.</p>
                        <button onclick="resetApp()" class="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full shadow-lg shadow-orange-200 transition-colors">Clear Filters</button>
                    </div>
                `;
                lucide.createIcons();
                return;
            }

            grid.innerHTML = filtered.map(recipe => {
                const isFav = state.favorites.includes(recipe.id);
                const heartClass = isFav ? "text-red-500 fill-red-500" : "text-slate-400";
                const flameClass = recipe.difficulty === "Hard" ? "text-red-400" : "text-slate-400";
                
                // Fallback for image
                const imgError = `this.onerror=null; this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800'`;

                return `
                <div onclick="openModal(${recipe.id})" class="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-orange-200 shadow-sm hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300 cursor-pointer flex flex-col h-full animate-fade-in">
                    <div class="relative h-56 overflow-hidden">
                        <img src="${recipe.image}" onerror="${imgError}" alt="${recipe.title}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                        <div class="absolute top-3 right-3">
                            <button onclick="toggleFavorite(event, ${recipe.id})" class="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors">
                                <i data-lucide="heart" class="w-5 h-5 transition-colors duration-300 ${heartClass}" ${isFav ? 'fill="currentColor"' : ''}></i>
                            </button>
                        </div>
                        <div class="absolute bottom-3 left-3">
                            <span class="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-bold uppercase tracking-wider text-slate-800 shadow-sm">${recipe.category}</span>
                        </div>
                    </div>
                    <div class="p-5 flex-1 flex flex-col">
                        <div class="flex items-center gap-1 mb-2">
                            <i data-lucide="star" class="w-4 h-4 text-yellow-400 fill-yellow-400"></i>
                            <span class="text-sm font-semibold text-slate-700">${recipe.rating}</span>
                            <span class="text-xs text-slate-400">(128)</span>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-2 line-clamp-1 group-hover:text-orange-600 transition-colors">${recipe.title}</h3>
                        <div class="flex items-center gap-4 text-slate-500 text-sm mb-4">
                            <div class="flex items-center gap-1.5"><i data-lucide="clock" class="w-4 h-4"></i> ${recipe.time}</div>
                            <div class="flex items-center gap-1.5"><i data-lucide="flame" class="w-4 h-4 ${flameClass}"></i> ${recipe.difficulty}</div>
                        </div>
                        <div class="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                            <span class="text-sm font-medium text-slate-500">${recipe.calories}</span>
                            <span class="flex items-center gap-1 text-orange-600 text-sm font-bold group-hover:translate-x-1 transition-transform">
                                View Recipe <i data-lucide="chevron-right" class="w-4 h-4"></i>
                            </span>
                        </div>
                    </div>
                </div>
                `;
            }).join('');
            
            lucide.createIcons();
        }

        // --- Modal Logic ---

        function openModal(id) {
            const recipe = state.recipes.find(r => r.id === id);
            if (!recipe) return;

            const modalOverlay = document.getElementById('modal-overlay');
            const modalContent = document.getElementById('modal-content');
            
            const imgError = `this.onerror=null; this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800'`;

            // Build ingredients HTML
            const ingredientsHTML = recipe.ingredients.map(ing => `
                <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                    <div class="w-2 h-2 rounded-full bg-orange-400"></div>
                    <span class="text-slate-700 font-medium">${ing}</span>
                </div>
            `).join('');

            // Build instructions HTML
            const instructionsHTML = recipe.instructions.map((step, idx) => `
                <div class="relative flex gap-6">
                    <div class="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm ring-4 ring-white z-10">${idx + 1}</div>
                    <p class="text-slate-600 leading-relaxed pt-1">${step}</p>
                </div>
            `).join('');

            // Fav State for Modal
            const isFav = state.favorites.includes(recipe.id);
            const favBtnClass = isFav ? "border-red-500 bg-red-50 text-red-500" : "border-slate-200 text-slate-600 hover:bg-slate-50";

            modalContent.innerHTML = `
                <div class="relative w-full md:w-2/5 h-64 md:h-auto">
                    <img src="${recipe.image}" onerror="${imgError}" alt="${recipe.title}" class="w-full h-full object-cover" />
                    <button onclick="closeModal()" class="absolute top-4 left-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition-colors md:hidden">
                        <i data-lucide="x" class="w-5 h-5"></i>
                    </button>
                </div>
                <div class="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
                    <div class="flex justify-between items-start mb-6">
                        <div>
                            <span class="text-orange-600 font-bold uppercase tracking-wider text-xs mb-2 block">${recipe.category}</span>
                            <h2 class="text-3xl font-bold text-slate-900 mb-2 leading-tight">${recipe.title}</h2>
                            <div class="flex items-center gap-4 text-sm text-slate-500">
                                <div class="flex items-center gap-1"><i data-lucide="clock" class="w-4 h-4 text-orange-500"></i> ${recipe.time}</div>
                                <div class="flex items-center gap-1"><i data-lucide="users" class="w-4 h-4 text-orange-500"></i> ${recipe.servings} Servings</div>
                                <div class="flex items-center gap-1"><i data-lucide="flame" class="w-4 h-4 text-orange-500"></i> ${recipe.calories}</div>
                            </div>
                        </div>
                        <button onclick="closeModal()" class="hidden md:block p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
                            <i data-lucide="x" class="w-6 h-6"></i>
                        </button>
                    </div>

                    <div class="space-y-8">
                        <section>
                            <h3 class="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <div class="w-1 h-6 bg-orange-500 rounded-full"></div> Ingredients
                            </h3>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">${ingredientsHTML}</div>
                        </section>
                        <section>
                            <h3 class="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <div class="w-1 h-6 bg-orange-500 rounded-full"></div> Instructions
                            </h3>
                            <div class="space-y-6 relative before:absolute before:left-3.5 before:top-0 before:h-full before:w-0.5 before:bg-slate-100">
                                ${instructionsHTML}
                            </div>
                        </section>
                    </div>

                    <div class="mt-10 pt-6 border-t border-slate-100 flex gap-3">
                        <button onclick="startCooking(${recipe.id})" class="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-orange-200 transition-colors flex items-center justify-center gap-2">
                            <i data-lucide="utensils-crossed" class="w-[18px] h-[18px]"></i> Cook this now
                        </button>
                        <button onclick="toggleFavorite(event, ${recipe.id}); openModal(${recipe.id})" class="px-5 rounded-xl border-2 font-bold transition-colors ${favBtnClass}">
                            <i data-lucide="heart" class="w-5 h-5" ${isFav ? 'fill="currentColor"' : ''}></i>
                        </button>
                    </div>
                </div>
            `;

            modalOverlay.classList.remove('hidden');
            setTimeout(() => {
                modalContent.classList.remove('opacity-0', 'scale-95');
                modalContent.classList.add('opacity-100', 'scale-100', 'animate-scale-up');
            }, 10);
            document.body.style.overflow = 'hidden';
            lucide.createIcons();
        }

        function closeModal() {
            const modalOverlay = document.getElementById('modal-overlay');
            const modalContent = document.getElementById('modal-content');

            modalContent.classList.remove('animate-scale-up'); // Prevent conflict
            modalContent.classList.remove('opacity-100', 'scale-100');
            modalContent.classList.add('opacity-0', 'scale-95');

            setTimeout(() => {
                modalOverlay.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 200); // Wait for transition
        }