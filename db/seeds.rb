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

Recipe.create(
    name: "Tacos",
    image: "https://i0.wp.com/www.worldofvegan.com/wp-content/uploads/2018/08/World-of-Vegan-Beefy-Vegan-Tacos-3.jpg?ssl=1",
    ingredients: "Beyond Meat or Impossible ground beef, shallot, garlic,vegetable stock, jalapenos, cilantro, pepperjack cheese, frozen or canned corn, avocado, red cabbage, lime, salt, olive oil, Siete Taco Seasoning (I use spicy), diced tomatoes, cashew yogurt, salsa verde of your choice",
    recipe: "1. dice shallot and garlic.  2. add a tablespoon or so of olice oil and drop ground beef into sauce pan and brown  3. after a minute or two, add shallot and garlic to pan",
    cuisine: "Mexican",
    course: "lunch or dinner"
)

puts "Donezo!"
