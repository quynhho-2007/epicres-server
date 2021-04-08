"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "recipes",
      [
        {
          title: "Vietnamese springrolls",
          url:
            "https://amazingoriental.com/wp-content/uploads/2021/03/Lenterollen_1380x550px.jpg",
          description:
            "Pho is Vietnam's national noodle dish. A large bowl of beef broth based rice noodles, steeped for hours. What you taste is a rich, powerful beef flavor. Delicious in combination with fresh herbs, such as coriander, mint, basil, pepper and lime.",
          instruction:
            "In a bowl, mix the ingredients for the dipping sauce separately and set aside. Cut the cucumber and the carrot into fine strips. Blanch the shrimp until cooked and cut in half. Cook the rice vermicelli until soft and then rinse with cold water. Wash the lettuce leaves and pat them dry. Fill a large bowl with lukewarm water. Hold the rice paper with both hands and then dip it in the water for a few seconds until it is soft. Lay the sheet flat on the plate. Make sure all ingredients are centered and leave about 5 cm on each side. First place a leaf of lettuce on the skin, second the rice vermicelli, on top of the cucumber, carrot and mint. Place the shrimp on the rice paper 1.5 cm away from the lettuce. First fold the bottom in and roll it up tightly until you reach the edge of the shrimp. Then fold the sides inwards and roll it up tightly. Repeat this for the rest of the rice paper.",
          bought: 1200,
          timeToCook: 30,
          totalPrice: 5.99,
          totalCalories: 150,
          isFavorite: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Pho bo",
          url:
            "https://amazingoriental.com/wp-content/uploads/2021/02/Pho_1380x550px.jpg",
          description: "Popular northern Vietnamese dish",
          instruction:
            "Heat the oven to 200 ° C. Slice the onions and ginger and roast them for about 15 minutes until soft and golden brown. Roast the pho spices without oil in a pan for approx. 3 minutes. Then add the ginger, onions and pho spices to the spice bag. Bring 3 liters of water to the boil. Add the shank and marrow legs. Boil the bones for 10 minutes and drain the water. Then rinse the bones under the tap. Place the bones, the beef stew and the herb bag in the stockpot. Add 6 liters of cold water. Bring the water to a boil, then turn the heat to medium low. The stock will foam a bit during cooking. With the help of a fine skimmer (fat spatula), carefully scoop the foam and the fat that floats on the surface out of the pan. Add the fish sauce, sugar and salt. Let the stock simmer for 1½ hours. Then take out the beef and set aside. Boil the stock for another 1½ hours. The longer you let the soup steep, the more flavor the beef stock will get. Cook the noodles and beef balls according to the package. Cut the limes into wedges, the chili peppers into fine pieces and serve on a plate together with the mint leaves, the coriander, the basil and the bean sprouts. Fill a bowl with rice noodles, beef balls, chunks of beef, and thinly sliced beef. Bring the stock back to the boil and spoon the stock into the bowl. The hot stock will cook the thinly sliced beef. Guests can garnish and season their own soup with hoisin sauce and sriracha sauce.",
          bought: 100,
          timeToCook: 180,
          totalPrice: 6.99,
          totalCalories: 190,
          isFavorite: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Banh Xeo",
          url:
            "https://amazingoriental.com/wp-content/uploads/2021/03/Banh-Xeo_Vietnamese-Crepe_1380x550px.jpg",
          description:
            "With the ready-to-use Banh Xeo rice flour from the Vinh Thuan brand, you can make the tastiest, crunchy Vietnamese crepe in no time. A small bag of turmeric is already included in this bag.",
          instruction:
            "Batter │ Sieve the rice flour and turmeric into a mixing bowl. Pour in the coconut milk and sparkling water. Stir with a whisk into a thin, smooth batter. Set aside for approx. 30 minutes. Then add the spring onions and mix everything together. Blanch the bean sprouts for 30 seconds, then rinse with cold water. Let them drain. Heat oil in a pan. Add the shallots and shrimp. Season it with white pepper and fish sauce. Fry until tender and set aside. Crepe│ Heat 2 teaspoons of oil in a frying pan and wait a while until the pan is warm. Stir the batter every time before baking. Pour the batter into the pan with a poll spoon and spread it evenly into a thin layer over the entire pan. Fry the crepe until the top is dry. Loosen the crepe and let it bake for a while until the sides are crispy. Place the crepe on a plate. Place the bean sprouts, herbs and shrimps on 1 side of the pancake. Fold it half closed. Serve with lettuce and the perilla.",
          bought: 80,
          timeToCook: 60,
          totalPrice: 6.99,
          totalCalories: 190,
          isFavorite: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Fried rice",
          url:
            "https://therecipecritic.com/wp-content/uploads/2019/07/easy_fried_rice.jpg",
          description:
            "Fried Rice is a combination of long grained rice, mixture of warm peas, carrots and onions with scrambled eggs mixed all together! You will not be getting take out any longer!",
          instruction:
            "Preheat Skillet. Turn your skillet to medium high heat and pour sesame oil into the bottom of your skillet and add the onion, peas and carrots. Fry this until they are tender. Slide the veggies to the side. Pour the beaten eggs onto the other side. Use a spatula to scramble the eggs. Mix them together with the veggies. Add the rice. Combine it with the veggie and egg mixture. Pour the soy sauce on top and stir until it is heated throughout. Garnish with green onions.",
          bought: 40,
          timeToCook: 30,
          totalPrice: 4.99,
          totalCalories: 200,
          isFavorite: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tomatoes with scrambled eggs",
          url:
            "https://amazingoriental.com/wp-content/uploads/2021/02/Tomaten-en-roereieren_1380x550px.jpg",
          description: "Simple and delicious Chinese cuisine",
          instruction:
            "Cut the tomatoes into small blocks, the garlic fine and the spring onions into rings. Break the eggs into a bowl and beat them lightly with 1 tbsp water. Heat oil in a frying pan and then pour the egg mixture into the pan. Reduce heat to low and stir constantly so that it doesn't stick to the pan and that the egg is evenly set. Set it aside. Heat oil in the pan again and briefly fry the garlic. Then add the diced tomatoes. Stir occasionally in the pan until the tomatoes have softened. Add the puree and ketchup and mix through the tomatoes. Add the water, soy sauce, sugar and salt. Turn the heat to medium low and stir occasionally in pan until the sauce has thickened slightly. If the sauce is a bit watery, pour in a little cornstarch mixture and stir until it has thickened. Return the eggs to the pan and mix well. Finally, sprinkle the spring onions over the dish.",
          bought: 40,
          timeToCook: 90,
          totalPrice: 4.99,
          totalCalories: 200,
          isFavorite: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Sticky rice with mango",
          url:
            "https://amazingoriental.com/wp-content/uploads/2021/02/58291_Kleefrijst-met-mango1380x550-2.jpg",
          description: "Popular Thai dessert with simple ingredienst",
          instruction:
            "Wash the rice until it is clear and soak it in the water overnight.  Drain the water. Place the glutinous rice on a deep plate. Then steam it for 45 minutes in a steamer over a layer of boiling water. Bring 300 ml coconut milk, 80 g sugar and the salt to a boil. Stir well until the sugar has dissolved. Remove the pan from the heat. Add the cooked rice to the coconut milk and stir well. Let the rice rest for 30 minutes or until the coconut milk has absorbed. Add the remaining coconut milk to a pan and heat it up slowly. Then add the sugar and stir occasionally for 1 minute. Pour the sauce into a bowl and let it cool. Slice or dice the mango. Divide the sticky rice over a number of plates and sprinkle the sesame seeds on top. Serve with the sauce and the mango pieces.",
          bought: 80,
          timeToCook: 90,
          totalPrice: 3.99,
          totalCalories: 250,
          isFavorite: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Red curry with duck and lychees",
          url:
            "https://amazingoriental.com/wp-content/uploads/2021/02/Rode-curry-met-eend_1380x550px.jpg",
          description: "Nutritious and super tasty Thai curry",
          instruction:
            "Cut the red pepper into thin strips and the onion into cubes. Mix the coconut cream and coconut milk in a bowl. Pour away the moisture from the pineapple and lychees and then cut the pineapple into pieces.Preheat the oven to 200 ℃ and roast the duck for about 30 minutes until done.In the meantime, prepare the curry.Heat oil in the pan and fry the pieces of red pepper and the onion.Add the coconut cream and let it simmer over medium heat for about 5 minutes or until a layer of oil has formed on the surface.Then add the curry paste to the coconut cream and stir well. Then add the fish sauce, palm sugar, lime leaves and basil and let everything simmer for another 5 minutes.Add the lychees, pineapple and cherry tomatoes and cook for 1 to 2 minutes. Season with the fish sauce and sugar if necessary. Slice the duck and add to the curry.",
          bought: 70,
          timeToCook: 120,
          totalPrice: 7.99,
          totalCalories: 180,
          isFavorite: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Red curry with vegan chicken and tofu",
          url:
            "https://amazingoriental.com/wp-content/uploads/2021/02/Rode-curry-met-eend_1380x550px.jpg",
          description: "Popular Thai dessert with simple ingredienst",
          instruction:
            "Cut the tofu into cubes and the imitation chicken into strips. Cut the rawit into rings. Coarsely chop the red onions. Cut away the green part of the lemongrass and bruise the white part with the back of a large knife. Cut the bell pepper into 1 cm strips. Cut the large aubergine into wedges. Cut the lime in half lengthwise, use 1 half for garnish and squeeze out the juice in the other half. Heat oil in a pan. Fry the cubes of tofu until golden brown on all sides. Set it aside.Heat oil in the pan again. Add the onions and stir until translucent. Add the two different aubergines, lemongrass, imitation chicken and the curry paste. Fry it briefly and then add the coconut cream.Turn down the heat and add the rest of the vegetables. Pour in the juice of the lime. Put the lid on and let it simmer for 15 minutes. Toss every now and then. Roughly chop the cilantro and sprinkle over the curry.            ",
          bought: 60,
          timeToCook: 100,
          totalPrice: 3.99,
          totalCalories: 140,
          isFavorite: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Green Papaya salad",
          url:
            "https://amazingoriental.com/wp-content/uploads/2021/02/Salade-1380x550px.jpg",
          description:
            "Besides the meat, it is also nice to serve a salad on the table. Green papaya with various crunchy vegetables.",
          instruction:
            "Add boiling water to the rice vermicelli and let it soften. Drain the water and let it drain well. Cut the rice vermicelli into small pieces. Cut the green papaya, red cabbage, cucumber, carrot, bell pepper into fine strips. Cut the yellow radish into cubes.Put everything in a bowl and mix well.Sprinkle a few pomegranates over the salad.Delicious with one of our Asian dressings            ",
          bought: 50,
          timeToCook: 15,
          totalPrice: 3.99,
          totalCalories: 140,
          isFavorite: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Lemongrass with chicken",
          url:
            "https://amazingoriental.com/wp-content/uploads/2021/02/Citroengras-met-kip-1380x550px-1.jpg",
          description:
            "Did you know that the stems of the lemongrass are sturdy enough to use as skewers? As an added bonus point, they add even more flavor to your meat.",
          instruction:
            "Wash the lemongrass, lightly crush and set aside. Wash the chicken thighs and pat dry. Finely chop the lemongrass, onion, garlic, coriander and red pepper. Chop the chicken thighs in a food processor until chopped.Place all the marinade ingredients in a large bowl and mix well. Take 1 stem and gently squeeze the ground beef around the stem. Keep adding minced meat until you have the desired thickness. Should the filling be too soft. Then add extra panko little by little. Take a piece of plastic wrap and wrap around the ground beef. Put them in the fridge to stiffen. Repeat with the rest of the lemongrass.Roast the lemongrass for 10 minutes, turning them over halfway through the cooking time.Dip them in a sweet and sour dipping sauce.  ",
          bought: 150,
          timeToCook: 10,
          totalPrice: 9.99,
          totalCalories: 340,
          isFavorite: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Veggie Ramyun",
          url:
            "https://amazingoriental.com/wp-content/uploads/2021/02/Lotuswortel-soep_1380x550px.jpg",
          description: "Korean cuisine",
          instruction:
            "Boil the carrots, shiitake mushrooms and pak choi for about 5 minutes until tender. Drain the water and set aside. Boil 550 ml of water in a soup pan. As soon as the water boils, add the vegetable mix and the soup powder. Then add the noodles and cook the noodles for about 4½ minutes until tender.Divide the noodles between 2 bowls and spoon the soup over it.Place all toppings on top of the noodles. Place all toppings on top of the noodles.",
          bought: 100,
          timeToCook: 15,
          totalPrice: 5.99,
          totalCalories: 190,
          isFavorite: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Lotus root soup",
          url:
            "https://amazingoriental.com/wp-content/uploads/2021/02/Veggie-Ramyun-1380x550px-1.jpg",
          description: "Chinese cuisine",
          instruction:
            "Soak the dried mushrooms and tangerine peel in a bowl until they have softened. Put the dried barley in a bowl and soak for about 30 minutes. Cut the mushrooms into wedges and remove the white inside of the mandarin peel. Peel the lotus root and cut it into thick slices. Coarsely chop the carrots. Put on a pan with cold water and add the spare ribs. As soon as the water boils, let the spare ribs cook for another 5 to 8 minutes. Drain the water and rinse the spare ribs. Place the meat, carrots, lotus, sweet dates, mushrooms, barley and tangerine peel in a stockpot. Add 2 liters of cold water. Bring the water to a boil and then let it boil for about 15 minutes on high heat. Then turn the heat to medium low and let it boil for 1.5 hours. Season it with a little salt.",
          bought: 200,
          timeToCook: 120,
          totalPrice: 9.99,
          totalCalories: 350,
          isFavorite: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Ma Tai Ko",
          url:
            "https://amazingoriental.com/wp-content/uploads/2021/03/Ma-Tai-Ko_1380x550px.jpg",
          description: "Chinese cuisine",
          instruction:
            "Cut the water chestnuts into thin slices. In a bowl, mix 250g water chestnut flour with 750ml water and stir to a smooth batter. Then sieve the batter to strain out the coarse lumps. Set aside. Boil the cane sugar with the remaining water until it is dissolved. Then add the slices of water chestnuts. Then pour the batter into the sugar water and keep stirring until it has thickened. Turn down the heat and keep stirring until it turns translucent. Pour the batter into a deep dish and steam for about 30 minutes. Let it cool and cut it into slices. You can eat the cooled, steamed water chestnut cake as is, or you can bake the cake slices with a little oil on both sides until golden brown.",
          bought: 65,
          timeToCook: 30,
          totalPrice: 4.99,
          totalCalories: 450,
          isFavorite: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Grass jelly with sago and pieces of melon",
          url:
            "https://amazingoriental.com/wp-content/uploads/2021/02/grass-jelly-met-stukjes-meloen_1380x550px-scaled.jpg",
          description: "Chinese cuisine",
          instruction:
            "Make sure the coconut milk and grass jelly are cold and don't take it out of the fridge until the last minute. Cut the water and galia melon into cubes and put it covered in the refrigerator. Boil 1 liter of water in a pan. Once the water is boiling, add the sago pearls. Turn the heat to medium low and cook the sago pearls for about 10 minutes. Turn off the heat and let it simmer for 10 minutes with the lid on the pan. The sago pearls are ready when they are transparent. Rinse the pearls with cold water and drain in a colander. Set aside and let it cool. Pour the coconut milk into a bowl and add the condensed milk to taste. Mix well. Remove the grass jelly from the can and rinse it. Then cut it into pieces. Divide the sago pearls among the glass bowls. Then add 3 tablespoons of sweetened coconut milk to each bowl and then add the grass jelly and the pieces of melon.",
          bought: 43,
          timeToCook: 25,
          totalPrice: 2.99,
          totalCalories: 225,
          isFavorite: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Mantou with spam and egg",
          url:
            "https://amazingoriental.com/wp-content/uploads/2021/02/Mantou-met-spam-en-ei_ontbijt_1380x550px-2.jpg",
          description: "Chinese cuisine",
          instruction:
            "Steam the mantou according to the packaging. Cut the luncheon meat into thick slices and beat the eggs, season with salt and pepper. Wash some salad leaves and let it drain. Heat oil in a pan. Brown the luncheon meat on all sides and set aside. Heat oil in the pan and pour in the egg mixture. Divide the omelette over the entire pan, turn the heat to medium low. Slowly push the omelet in from the side with a spatula. Fold the outer halves in, remove the pan from the heat and let the omelet cook for about 30 seconds. Cut the mantou in half lengthwise. Spread the mantou with mayonnaise and ketchup. Top the mantou with a leaf of lettuce, top with the egg, a piece of luncheon meat and cheddar cheese.",
          bought: 96,
          timeToCook: 25,
          totalPrice: 6.49,
          totalCalories: 400,
          isFavorite: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Veggie Curry Chicken",
          url:
            "https://amazingoriental.com/wp-content/uploads/2021/02/vegetarische_kip_kerrie_1380x550px.jpg",
          description: "Malaysian cuisine",
          instruction:
            "Heat oil in a pan. Add the onions and stir until fragrant. Add the potatoes and the carrot and fry them for about 5 minutes. Add the garlic and then pour in the water. Boil the water for about 15 minutes on medium heat. Add the vegetarian chicken followed by the coconut milk. Then add the green beans with the pasta. Mix everything together well. Bring it back to a boil. Serve with white rice or roti.",
          bought: 112,
          timeToCook: 25,
          totalPrice: 3.39,
          totalCalories: 341,
          isFavorite: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Creamy mango coconut pudding",
          url:
            "https://amazingoriental.com/wp-content/uploads/2021/02/Romige-mangopudding_1380x550px.jpg",
          description: "Chinese cuisine",
          instruction:
            "Mix the sugar and the gelatin in a bowl. Bring water with the sugar mix to a boil. Keep stirring constantly until the sugar and gelatin has dissolved. Add the coconut milk, whole milk, whipped cream and mango puree and mix well. Let it boil for about 3 minutes on low heat. Pour the mango coconut mixture into a glass bowl and place it in the refrigerator to stiffen. Cut the mango coconut pudding into blocks.",
          bought: 38,
          timeToCook: 20,
          totalPrice: 7.39,
          totalCalories: 611,
          isFavorite: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Pei Daan So",
          url:
            "https://amazingoriental.com/wp-content/uploads/2021/02/Pei-Daan-So_1380x550px.jpg",
          description: "Chinese cuisine",
          instruction:
            "Remove the roti paratha from the freezer and let it thaw for a few minutes so that it is just foldable. Cut the roti paratha into halves. Brush the dough sheet with the lotus paste and keep the edges clear. Then sprinkle the pickled ginger over the lotus paste. Place half a pie (convex side down) in the center of the sheet. Fold the edges together and press well. Brush the convex side with egg and sprinkle some sesame seeds on top if necessary. Preheat the airfryer to 200 ° C. Place the patties in the airfryer",
          bought: 55,
          timeToCook: 25,
          totalPrice: 5.99,
          totalCalories: 287,
          isFavorite: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("recipes", null, {});
  },
};
