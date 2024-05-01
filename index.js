#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
function recipeBook(name, ingredients, instructions) {
    return {
        name: name,
        ingredients: ingredients,
        instructions: instructions,
    };
}
let condition = true;
console.log(chalk.blueBright.bold("Welcome to the 'Recipe corner'."));
console.log(chalk.yellowBright("\nLearn cooking with our easy-peasy yet tempting recipes."));
while (condition) {
    let recipeList = await inquirer.prompt([
        {
            message: "Please select an option:",
            type: "list",
            name: "option",
            choices: ["Pakistani", "Continental", "Fast food", "None"],
        },
    ]);
    if (recipeList.option === "Pakistani") {
        let pakRecipe = await inquirer.prompt([
            {
                message: "Please select one of the recipes to know:",
                type: "list",
                name: "pakistaniRecipes",
                choices: ["Tikka", "Biryani", "Kababs", "Karahi"],
            },
        ]);
        if (pakRecipe.pakistaniRecipes === "Tikka") {
            console.log(recipeBook("Tikka", ["Chicken", "Yoghurt", "Ginger & Garlic", "Black pepper", "Salt(as per your taste)", "Chilli flakes", "Coal"], ["1.Wash the chicken.", "2.Marinate it with all the above ingredients.", "3.Bake it in the oven or steam it on the stove.", "4.Atlast, give the coat smoke.", "5.Your tasty Tikka is ready to eat!"]));
            console.log(chalk.yellowBright("Tadaaa! Your mouth-watering Tikka is ready to enjoy!"));
        }
        else if (pakRecipe.pakistaniRecipes === "Biryani") {
            console.log(recipeBook("Biryani", ["Chicken/Beef", "Yoghurt", "Garlic & Ginger", "Tomatoes", "Fried Onions", "Red chilli powder", "Salt(as per your taste)", "Turmeric powder", "Rice"], ["1.Wash the chicken/ Beef.", "2.Marinate it with Yoghurt, all spices and tomatoes.", "3.Fry onions until its golden brown.", "4.Cook the marinated beef/chicken.", "5.Soak and boil rice.", "6.Once the rice is done, mix the marinated chicken/beef with rice and steam it for 5-10mins.", "Serve it with raita and salad!"]));
            console.log(chalk.yellowBright("Tadaaa! Your mouth-watering Biryani is ready to enjoy!"));
        }
        else if (pakRecipe.pakistaniRecipes === "Kababs") {
            console.log(recipeBook("Kabab", ["Chicken/Beef (minced)", "Onions", "Garlic & Ginger", "Green chillies", "Red chilli powder", "Salt(as per your taste)", "Turmeric powder", "Cumin and corriander (grounded)"], ["1.Wash the chicken/Beef.", "2.Chop the onions and green chillies and other spices. Then, mix it in the mixer with the chicken/beef.", "3.Add fried onions.", "4.Take small amount of beef/chicken batter and make small kababs.", "5.Soak and boil rice.", "6.Fry it and enjoy!."]));
            console.log(chalk.yellowBright("Tadaaa! Your mouth-watering Kababs are ready to enjoy!"));
        }
        else if (pakRecipe.pakistaniRecipes === "Karahi") {
            console.log(recipeBook("Karahi", ["Chicken", "Garlic & Ginger", "Tomatoes", "Red chilli powder", "Salt(as per your taste)", "Turmeric powder", "Cumin powder", "Corriander powder", "Green chillies"], ["1.Wash the chicken.", "2.Fry chicken adding ginger & garlic.", "3.Add all the above mentioned spices.", "4.Cut tomatoes into halves and put them in the chicken. Take off the skin until its soft.", "5.Cook the chicken on high flame for 5-10 mins.", "6.Serve with corriander and green chillies!"]));
            console.log(chalk.yellowBright("Tadaaa! Your mouth-watering Karahi is ready to enjoy!"));
        }
    }
    else if (recipeList.option === "Continental") {
        let contRecipe = await inquirer.prompt([
            {
                message: "Please select one of the recipes to know:",
                type: "list",
                name: "continentalRecipes",
                choices: ["Alfredo Pasta", "Singaporean rice", "Chowmein", "Sandwich"],
            },
        ]);
        if (contRecipe.continentalRecipes === "Alfredo Pasta") {
            console.log(recipeBook("Alfredo Pasta", ["Pasta", "Chicken", "Ginger & Garlic", "Black pepper", "Salt(as per your taste)", "Chilli flakes", "Bell peppers", "Milk", "Cream", "All-purpose flour", "Cheese"], ["1.Boil the pasta.", "2.Wash the chicken.", "3.Fry the chicken using oil and add all the above spices.", "4.Stir fry the bell peppers and add in the cooked chicken.", "5.For white sauce, take 2 spoons of all-purpose flour, pour some milk and add cream and cheese.", "6.Add salt, black pepper and some chilli flakes.", "7.Mix it together."]));
            console.log(chalk.yellowBright("Tadaaa! Your mouth-watering Pasta is ready to enjoy!"));
        }
        else if (contRecipe.continentalRecipes === "Singaporean rice") {
            console.log(recipeBook("Singaporean rice", ["Rice", "Noodles", "Chicken", "Ginger & Garlic", "Black pepper", "Salt(as per your taste)", "Chilli flakes", "Bell peppers", "Onions", "Soy Sauce", "Chilli sauce"], ["1.Boil the noodles and rice separately.", "2.Fry the chicken using oil and add all the above spices and sauces.", "3.Stir fry the bell peppers and onions.Add in the cooked chicken.", "5.Mix the cooked chicken with rice and spread over the dish. Then, Add some noodles."]));
            console.log(chalk.yellowBright("Tadaaa! Your mouth-watering Singaporean rice is ready to enjoy!"));
        }
        else if (contRecipe.continentalRecipes === "Chowmein") {
            console.log(recipeBook("Chowmein", ["Noodles", "Chicken", "Ginger & Garlic", "Black pepper", "Salt(as per your taste)", "Chilli flakes", "Bell peppers", "Onions", "Soy Sauce", "Chilli sauce"], ["1.Boil the noodles using oil and a pinch of salt.", "2.Fry the chicken using oil and add all the above spices and sauces.", "3.Stir fry the bell peppers and onions.Add in the cooked chicken.", "4.Add cooked chicken in noodles."]));
            console.log(chalk.yellowBright("Tadaaa! Your mouth-watering Chowmein is ready to enjoy!"));
        }
        else if (contRecipe.continentalRecipes === "Sandwich") {
            console.log(recipeBook("Sandwich", ["Bread", "Chicken", "Lettuce leaves", "Black pepper", "Salt(as per your taste)", "Chilli flakes", "Bell peppers", "Corns", "Cucumber", "Peri Peri sauce", "Mayonnaise"], ["1.Boil chicken and add sauces mentioned above.", "2.Cut the vegetables.", "3.Spread mayonnaise over the bread.", "4.Put some vegies, lettuce leaves and chicken pieces over it."]));
            console.log(chalk.yellowBright("Tadaaa! Your mouth-watering Sandwich is ready to enjoy!"));
        }
    }
    else if (recipeList.option === "Fast food") {
        let ffRecipe = await inquirer.prompt([
            {
                message: "Please select one of the recipes to know:",
                type: "list",
                name: "fastFoodRecipes",
                choices: ["Burger", "Broast", "Pizza", "Pita"],
            },
        ]);
        if (ffRecipe.fastFoodRecipes === "Burger") {
            console.log(recipeBook("Burger", ["Burger bun", "Chicken", "Ginger & Garlic", "Black pepper", "Salt(as per your taste)", "Chilli flakes", "Lettuce leaves", "Tomato Ketchup", "Mayonnaise", "Cheese"], ["1.Wash the chicken.", "2.Add all the above spices in the chicken and marinate it for atleast 45mins.", "3.Spread mayonnaise and tomato ketchup on the burger bun.", "4.Deep fry/ grill the chicken.", "5.Put the chicken patty onto the bun.", "6.Add some cheese and lettuce leaves."]));
            console.log(chalk.yellowBright("Tadaaa! Your mouth-watering Burger is ready to enjoy!"));
        }
        else if (ffRecipe.fastFoodRecipes === "Broast") {
            console.log(recipeBook("Broast", ["Chicken", "Ginger & Garlic", "Black pepper", "Salt(as per your taste)", "Chilli flakes", "All-purpose flour", "Mayonnaise", "Mustard sauce"], ["1.Wash the chicken.", "2.Add all the above spices in the chicken and marinate it for atleast 45mins.", "3.Apply all-purpose flour to the chicken and deep fry it.", "4.For sauce, mix mayonnaise and mustard sauce together. Add a pinch of salt and chilli flakes."]));
            console.log(chalk.yellowBright("Tadaaa! Your mouth-watering Broast is ready to enjoy!"));
        }
        else if (ffRecipe.fastFoodRecipes === "Pizza") {
            console.log(recipeBook("Pizza", ["Pizza dough", "Chicken", "Ginger & Garlic", "Black pepper", "Salt(as per your taste)", "Chilli flakes", "Cheese", "Pizza sauce", "Mayo garlic sauce", "Capsicums", "Olives"], ["1.Fry chicken with all the spices.", "2.Cut olives and capsicums.", "3.Spread pizza sauce and mayo garlic over the dough.", "4.Add chicken and vegies onto it.", "5.Add a good amount of cheese and bake it in the oven."]));
            console.log(chalk.yellowBright("Tadaaa! Your mouth-watering Broast is ready to enjoy!"));
        }
        else if (ffRecipe.fastFoodRecipes === "Pita") {
            console.log(recipeBook("Pita", ["Chicken", "Ginger & Garlic", "Salt(as per your taste)", "Chilli flakes", "Pita bread", "Yoghurt", "Mayonnaise", "Mustard sauce", "Cucumber"], ["1.Fry chicken with all the spices.", "2.Cut cucumbers.", "3.For sauce, mix yoghurt, mayonnaise and mustard sauce together. Add a pinch of salt and chilli flakes.", "4.Spread sauce onto the pita bread, add chicken and cucumber."]));
            console.log(chalk.yellowBright("Tadaaa! Your mouth-watering Pita is ready to enjoy!"));
        }
    }
    else if (recipeList.option === "None") {
        console.log(chalk.red("Please select an option."));
        console.log(chalk.blueBright.bold("\nThank you for considering us!"));
        break;
        console.log(chalk.blueBright("\nWant to see more recipes? "));
    }
}
;
