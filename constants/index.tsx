// export const categories = [
//   {
//       id: 1,
//       name: 'Pizza',
//       image: require('../assets/images/pizzaIcon.png'),
//   },
//   {
//       id: 2,
//       name: 'Burger',
//       image: require('../assets/images/pizzaIcon.png'),
//   },
//   {
//       id: 3,
//       name: 'Italian',
//       image: require('../assets/images/pizzaIcon.png'),
//   },
//   {
//       id: 4,
//       name: 'Chinese',
//       image: require('../assets/images/pizzaIcon.png'),
//   },
//   {
//       id: 5,
//       name: 'Noodles',
//       image: require('../assets/images/pizzaIcon.png'),
//   },
//   {
//       id: 6,
//       name: 'Sweets',
//       image: require('../assets/images/pizzaIcon.png'),
//   },

// ]

// export const featured = {
//   id: 1,
//   title: 'Hot and Spicy',
//   description: 'soft and tender fried chicken',
//   restaurants: [
//       {
//           id: 1,
//           name: 'Papa Johns',
//           image: require('../assets/images/pizza.png'),
//           description: 'Hot and spicy pizzas',
//           lng: -85.5324269,
//           lat: 38.2145602,
//           address: '434 second street',
//           stars: 4,
//           reviews: '4.4k',
//           category: 'Fast Food',
//           dishes: [
//               {
//                  id: 1,
//                  name: 'pizza',
//                  description: 'cheezy garlic pizza',
//                  price: 10,
//                  image:  require('../assets/images/pizzaDish.png')
//               },
//               {
//                  id: 2,
//                  name: 'pizza',
//                  description: 'cheezy garlic pizza',
//                  price: 10,
//                  image:  require('../assets/images/pizzaDish.png')
//               },
//               {
//                  id: 3,
//                  name: 'pizza',
//                  description: 'cheezy garlic pizza',
//                  price: 10,
//                  image:  require('../assets/images/pizzaDish.png')
//               },
//           ]

//       },
//       {
//           id: 2,
//           name: 'Papa Johns',
//           image: require('../assets/images/pizza.png'),
//           description: 'Hot and spicy pizzas',
//           lng: -85.5324269,
//           lat: 38.2145602,
//           address: '434 second street',
//           stars: 4,
//           reviews: '4.4k',
//           category: 'Fast Food',
//           dishes: [
//               {
//                  id: 1,
//                  name: 'pizza',
//                  description: 'cheezy garlic pizza',
//                  price: 10,
//                  image:  require('../assets/images/pizzaDish.png')
//               },
//               {
//                  id: 2,
//                  name: 'pizza',
//                  description: 'cheezy garlic pizza',
//                  price: 10,
//                  image:  require('../assets/images/pizzaDish.png')
//               },
//               {
//                  id: 3,
//                  name: 'pizza',
//                  description: 'cheezy garlic pizza',
//                  price: 10,
//                  image:  require('../assets/images/pizzaDish.png')
//               },
//           ]

//       },
//       {
//           id: 3,
//           name: 'Papa Johns',
//           image: require('../assets/images/pizza.png'),
//           description: 'Hot and spicy pizzas',
//           lng: -85.5324269,
//           lat: 38.2145602,
//           address: '434 second street',
//           stars: 4,
//           reviews: '4.4k',
//           category: 'Fast Food',
//           dishes: [
//               {
//                  id: 1,
//                  name: 'pizza',
//                  description: 'cheezy garlic pizza',
//                  price: 10,
//                  image:  require('../assets/images/pizzaDish.png')
//               },
//               {
//                  id: 2,
//                  name: 'pizza',
//                  description: 'cheezy garlic pizza',
//                  price: 10,
//                  image:  require('../assets/images/pizzaDish.png')
//               },
//               {
//                  id: 3,
//                  name: 'pizza',
//                  description: 'cheezy garlic pizza',
//                  price: 10,
//                  image:  require('../assets/images/pizzaDish.png')
//               },
//           ]

//       }
//   ]
// }

export interface Category {
  id: number;
  name: string;
  image: any; // Update the type to the appropriate image type if known
}

export const categories: Category[] = [
  {
    id: 1,
    name: 'Pizza',
    image: require('../assets/images/pizzaIcon.png'),
  },
  {
    id: 2,
    name: 'Burger',
    image: require('../assets/images/pizzaIcon.png'),
  },
  {
    id: 3,
    name: 'Italian',
    image: require('../assets/images/pizzaIcon.png'),
  },
  {
    id: 4,
    name: 'Chinese',
    image: require('../assets/images/pizzaIcon.png'),
  },
  {
    id: 5,
    name: 'Noodles',
    image: require('../assets/images/pizzaIcon.png'),
  },
  {
    id: 6,
    name: 'Sweets',
    image: require('../assets/images/pizzaIcon.png'),
  },
];

export interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  image: any; // Update the type to the appropriate image type if known
}

export interface Restaurant {
  id: number;
  name: string;
  image: any; // Update the type to the appropriate image type if known
  description: string;
  lng: number;
  lat: number;
  address: string;
  stars: number;
  reviews: string;
  category: string;
  dishes: Dish[];
}

export interface Featured {
  id: number;
  title: string;
  description: string;
  restaurants: Restaurant[];
}

export const featured: Featured = {
  id: 1,
  title: 'Hot and Spicy',
  description: 'soft and tender fried chicken',
  restaurants: [
    {
      id: 1,
      name: 'Papa Johns',
      image: require('../assets/images/pizza.png'),
      description: 'Hot and spicy pizzas',
      lng: -85.5324269,
      lat: 38.2145602,
      address: '434 second street',
      stars: 4,
      reviews: '4.4k',
      category: 'Fast Food',
      dishes: [
        {
          id: 1,
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../assets/images/pizzaDish.png'),
        },

        {
          id: 2,
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../assets/images/pizzaDish.png'),
        },
        {
          id: 3,
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../assets/images/pizzaDish.png'),
        },

    
      ],
    },

    {
                  id: 2,
                  name: 'Papa Johns',
                  image: require('../assets/images/pizza.png'),
                  description: 'Hot and spicy pizzas',
                  lng: -85.5324269,
                  lat: 38.2145602,
                  address: '434 second street',
                  stars: 4,
                  reviews: '4.4k',
                  category: 'Fast Food',
                  dishes: [
                      {
                         id: 1,
                         name: 'pizza',
                         description: 'cheezy garlic pizza',
                         price: 10,
                         image:  require('../assets/images/pizzaDish.png')
                      },
                      {
                         id: 2,
                         name: 'pizza',
                         description: 'cheezy garlic pizza',
                         price: 10,
                         image:  require('../assets/images/pizzaDish.png')
                      },
                      {
                         id: 3,
                         name: 'pizza',
                         description: 'cheezy garlic pizza',
                         price: 10,
                         image:  require('../assets/images/pizzaDish.png')
                      },
                  ]
        
              },
              {
                  id: 3,
                  name: 'Papa Johns',
                  image: require('../assets/images/pizza.png'),
                  description: 'Hot and spicy pizzas',
                  lng: -85.5324269,
                  lat: 38.2145602,
                  address: '434 second street',
                  stars: 4,
                  reviews: '4.4k',
                  category: 'Fast Food',
                  dishes: [
                      {
                         id: 1,
                         name: 'pizza',
                         description: 'cheezy garlic pizza',
                         price: 10,
                         image:  require('../assets/images/pizzaDish.png')
                      },
                      {
                         id: 2,
                         name: 'pizza',
                         description: 'cheezy garlic pizza',
                         price: 10,
                         image:  require('../assets/images/pizzaDish.png')
                      },
                      {
                         id: 3,
                         name: 'pizza',
                         description: 'cheezy garlic pizza',
                         price: 10,
                         image:  require('../assets/images/pizzaDish.png')
                      },

  ],
}
  ]
};
