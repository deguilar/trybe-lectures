const assert = require('assert');

// Imagine-se trabalhando, em seu emprego dos sonhos tendo que fazer a renderização dos dados de uma API.
// O problema, é que a API tem um retorno digamos... estranho. 
// Reconstrua cada um dos objetos para que tenham um array dos ingredientes, com nome do ingrediente como chave e medidas do mesmo como valor.

const apiResponse = [
  {
    "idMeal": "52771",
    "strMeal": "Spicy Arrabiata Penne",
    "strDrinkAlternate": null,
    "strCategory": "Vegetarian",
    "strArea": "Italian",
    "strInstructions": "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
    "strTags": "Pasta,Curry",
    "strYoutube": "https://www.youtube.com/watch?v=1IszT_guI08",
    "strIngredient1": "penne rigate",
    "strIngredient2": "olive oil",
    "strIngredient3": "garlic",
    "strIngredient4": "chopped tomatoes",
    "strIngredient5": "red chile flakes",
    "strIngredient6": "italian seasoning",
    "strIngredient7": "basil",
    "strIngredient8": "Parmigiano-Reggiano",
    "strIngredient9": "",
    "strIngredient10": "",
    "strIngredient11": "",
    "strIngredient12": "",
    "strIngredient13": "",
    "strIngredient14": "",
    "strIngredient15": "",
    "strIngredient16": null,
    "strIngredient17": null,
    "strIngredient18": null,
    "strIngredient19": null,
    "strIngredient20": null,
    "strMeasure1": "1 pound",
    "strMeasure2": "1/4 cup",
    "strMeasure3": "3 cloves",
    "strMeasure4": "1 tin ",
    "strMeasure5": "1/2 teaspoon",
    "strMeasure6": "1/2 teaspoon",
    "strMeasure7": "6 leaves",
    "strMeasure8": "spinkling",
    "strMeasure9": "",
    "strMeasure10": "",
    "strMeasure11": "",
    "strMeasure12": "",
    "strMeasure13": "",
    "strMeasure14": "",
    "strMeasure15": "",
    "strMeasure16": null,
    "strMeasure17": null,
    "strMeasure18": null,
    "strMeasure19": null,
    "strMeasure20": null,
    "strSource": null,
    "strImageSource": null,
    "strCreativeCommonsConfirmed": null,
    "dateModified": null
  },
  {
    "idMeal": "52776",
    "strMeal": "Chocolate Gateau",
    "strDrinkAlternate": null,
    "strCategory": "Dessert",
    "strArea": "French",
    "strInstructions": "Preheat the oven to 180°C/350°F/Gas Mark 4. Grease and line the base of an 8 in round spring form cake tin with baking parchment\r\nBreak the chocolate into a heatproof bowl and place over a saucepan of gently simmering water and stir until it melts. (or melt in the microwave for 2-3 mins stirring occasionally)\r\nPlace the butter and sugar in a mixing bowl and cream together with a wooden spoon until light and fluffy. Gradually beat in the eggs, adding a little flour if the mixture begins to curdle. Fold in the remaining flour with the cooled, melted chocolate and milk. Mix until smooth.\r\nSpread the mixture into the cake tin and bake for 50-55 mins or until firm in the centre and a skewer comes out cleanly. Cool for 10 minutes, then turn out and cool completely.",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg",
    "strTags": "Cake,Chocolate,Desert,Pudding",
    "strYoutube": "https://www.youtube.com/watch?v=dsJtgmAhFF4",
    "strIngredient1": "Plain chocolate",
    "strIngredient2": "Butter",
    "strIngredient3": "Milk",
    "strIngredient4": "Eggs",
    "strIngredient5": "Granulated Sugar",
    "strIngredient6": "Flour",
    "strIngredient7": "",
    "strIngredient8": "",
    "strIngredient9": "",
    "strIngredient10": "",
    "strIngredient11": "",
    "strIngredient12": "",
    "strIngredient13": "",
    "strIngredient14": "",
    "strIngredient15": "",
    "strIngredient16": null,
    "strIngredient17": null,
    "strIngredient18": null,
    "strIngredient19": null,
    "strIngredient20": null,
    "strMeasure1": "250g",
    "strMeasure2": "175g",
    "strMeasure3": "2 tablespoons",
    "strMeasure4": "5",
    "strMeasure5": "175g",
    "strMeasure6": "125g",
    "strMeasure7": "",
    "strMeasure8": "",
    "strMeasure9": "",
    "strMeasure10": "",
    "strMeasure11": "",
    "strMeasure12": "",
    "strMeasure13": "",
    "strMeasure14": "",
    "strMeasure15": "",
    "strMeasure16": null,
    "strMeasure17": null,
    "strMeasure18": null,
    "strMeasure19": null,
    "strMeasure20": null,
    "strSource": "http://www.goodtoknow.co.uk/recipes/536028/chocolate-gateau",
    "strImageSource": null,
    "strCreativeCommonsConfirmed": null,
    "dateModified": null
  }
];

const convert = (apiArr) => {};

const result = [
  {
    idMeal: '52771',
    strMeal: 'Spicy Arrabiata Penne',
    strCategory: 'Vegetarian',
    strArea: 'Italian',
    strInstructions: 'Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\n' +
      'In a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\n' +
      'Drain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    strTags: 'Pasta,Curry',
    strYoutube: 'https://www.youtube.com/watch?v=1IszT_guI08',
    ingredients: {
      'penne rigate': '1 pound',
      'olive oil': '1/4 cup',
      garlic: '3 cloves',
      'chopped tomatoes': '1 tin ',
      'red chile flakes': '1/2 teaspoon',
      'italian seasoning': '1/2 teaspoon',
      basil: '6 leaves',
      'Parmigiano-Reggiano': 'spinkling'
    }
  },
  {
    idMeal: '52776',
    strMeal: 'Chocolate Gateau',
    strCategory: 'Dessert',
    strArea: 'French',
    strInstructions: 'Preheat the oven to 180°C/350°F/Gas Mark 4. Grease and line the base of an 8 in round spring form cake tin with baking parchment\r\n' +
      'Break the chocolate into a heatproof bowl and place over a saucepan of gently simmering water and stir until it melts. (or melt in the microwave for 2-3 mins stirring occasionally)\r\n' +
      'Place the butter and sugar in a mixing bowl and cream together with a wooden spoon until light and fluffy. Gradually beat in the eggs, adding a little flour if the mixture begins to curdle. Fold in the remaining flour with the cooled, melted chocolate and milk. Mix until smooth.\r\n' +
      'Spread the mixture into the cake tin and bake for 50-55 mins or until firm in the centre and a skewer comes out cleanly. Cool for 10 minutes, then turn out and cool completely.',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg',
    strTags: 'Cake,Chocolate,Desert,Pudding',
    strYoutube: 'https://www.youtube.com/watch?v=dsJtgmAhFF4',
    ingredients: {
      'Plain chocolate': '250g',
      Butter: '175g',
      Milk: '2 tablespoons',
      Eggs: '5',
      'Granulated Sugar': '175g',
      Flour: '125g'
    },
    strSource: 'http://www.goodtoknow.co.uk/recipes/536028/chocolate-gateau'
  }
]

const ingredientsOnly = [
  [
    ['penne rigate', '1 pound'],
    ['olive oil', '1/4 cup'],
    ['garlic', '3 cloves'],
    ['chopped tomatoes', '1 tin '],
    ['red chile flakes', '1/2 teaspoon'],
    ['italian seasoning', '1/2 teaspoon'],
    ['basil', '6 leaves'],
    ['Parmigiano-Reggiano', 'spinkling']
  ],
  [
    ['Plain chocolate', '250g'],
    ['Butter', '175g'],
    ['Milk', '2 tablespoons'],
    ['Eggs', '5'],
    ['Granulated Sugar', '175g'],
    ['Flour', '125g']
  ]
];


assert.deepStrictEqual(convert(apiResponse), result);

const resultIngredientsOnly = convert(apiResponse).map(({ ingredients }) => Object.entries(ingredients));
assert.deepStrictEqual(resultIngredientsOnly, ingredientsOnly);

