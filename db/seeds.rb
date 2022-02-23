# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Destroying"

Recipe.destroy_all

puts "Seeding new data"

Recipe.create!(
    name: "Tacos",
    image: "https://i0.wp.com/www.worldofvegan.com/wp-content/uploads/2018/08/World-of-Vegan-Beefy-Vegan-Tacos-3.jpg?ssl=1",
    ingredients: "Beyond Meat or Impossible ground beef, shallot, garlic,vegetable stock, jalapenos, cilantro, pepperjack cheese, frozen or canned corn, avocado, red cabbage, lime, salt, olive oil, Siete Taco Seasoning (I use spicy), diced tomatoes, cashew yogurt, salsa verde of your choice",
    recipe: "1. dice shallot and garlic.  2. add a tablespoon or so of olice oil and drop ground beef into sauce pan and brown  3. after a minute or two, add shallot and garlic to pan",
    cuisine: "Mexican",
    course: "lunch or dinner"
)
Recipe.create!(
    name: "Spicy Ramen",
    image: "https://peasandcrayons.com/wp-content/uploads/2020/04/spicy-vegetarian-ramen-recipe-5-800x1200.jpg",
    ingredients: "3 tbsp seseame or avocado oil, 1 1/2 cups chopped dried porcini mushrooms, 4 cloves of garlic minced, 6 scallions thinly sliced, 1 cup corn, 4.5 - 6 cups vegetable broth, 3 tbsp tomato paste, 2-3 tbsp Sriracha, 2-3 tbsp soy sauce, 6-7.5 oz ramen uncooked ramen noodles ... ... ... Fried garlic + chili oil: 1/3 cup avocado oil, 4.5 cloves of garlic thinly sliced, 1.5 tbsp sesame seeds, 1.5 tbsp crushed red chili flakes ... ... ... Topping options: thinly sliced jalapeños, edamame (cooked and shelled), chopped green onions, chopped cilantro, baby bok choy, chili garlic sauce",
    recipe: "1. First make the fried garlic in chili oil.  Heat 1/4 cup oil in a medium pot over medium heat.  Once hot, add thinly slicedgarlic and pan fry, stirring often, until garlic is just beginning to turn golden (approx. 2-3 minutes).  Stir in sesame seeds and cook an additional minute until garlic is crisp (but not burned!).  Carefully transfer mixture to a small bowl and add crushed red pepper flakes.  Mix well and set aside.  2.  Bring the same pot to medium-high heat with a drizzle of oil and add garlic, chopped green onion (whites only!  save the greens for topping) and chopped dried porcini mushrooms.  Sauté until fragrant, approximately 1 minute.  3.  Add broth, soy cause, tomato paste, and Sriracha.  4.  Simmer, covered, on medium-low heat for 10-minutes.  5.  While soup simmers, prep your choice of toppings.  6.  Once your broth is fragrant and ready, strain and add back to pot, removing onion and dried mushroom bits.  7.  Give the broth a little taste and further season as desired.  8.  For thicker broth, cook your noodles directly in simmering broth.  For thinner broth, cook your noodles separately.  9.  Ready to eat!  Top ramen and broth with a drizzle of chili oil and add your toppings.  Enjoy!",
    cuisine: "Japanese",
    course: "lunch or dinner"
)

Recipe.create!(
    name: "15-minute Pasta Salad",
    image: "https://www.wearesovegan.com/wp-content/uploads/2021/11/15minveganpastasaladrecipeh3-1170x1645.jpg",
    ingredients: ""
)

Recipe.create!(
    name: "Spaghetti and Meatballs",
    image: "https://cdn.loveandlemons.com/wp-content/uploads/2020/02/spaghetti-and-meatballs-580x715.jpg"
)

puts "Donezo!"
