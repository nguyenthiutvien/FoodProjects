

const data = [
    {
      id: 1,
      name: "Vegan Resto",
      image: require('../assets/res4.png'),
      minutes: '1km',
      type: "restaurant"
    },
    {
      id: 2,
      name: "Healthy Food",
      image: require('../assets/res1.png'),
      minutes: '<10km',
      type: "restaurant"
    },
    {
      id: 3,
      name: "Good Food",
      image: require('../assets/res3.png'),
      minutes: '>10km',
      type: "restaurant"
    },
    {
      id: 4,
      name: "Smart Resto",
      image: require('../assets/res6.png'),
      minutes: '1km',
      type: "restaurant"
    },
    {
      id: 5,
      name: "Vegan Resto",
      image: require('../assets/res5.png'),
      minutes: '1km',
      type: "restaurant"
    },
    {
      id: 6,
      name: "Healthy Food",
      image: require('../assets/res4.png'),
      minutes: 12,
      type: "restaurant"
    }
  ,
    {
      id: 1,
      name: "Main course",
      title: "Warung Herpula",
      image: require('../assets/fruit.png'),
      restaurant: "Wijie Resto",
      price: "$5",
      type: "menu"
    },
    {
      id: 2,
      name: "Cake",
      title: "Wijie Resto",
      image: require('../assets/salad.png'),
      restaurant: "Noodles Home",
      price: "$15",
      type: "menu"
    },
    {
      id: 3,
      name: "Soup",
      title: "Noodle Home",
      image: require('../assets/banana.png'),
      restaurant: "Waring herbal",
      price: "$7",
      type: "menu"
    }  
]
  export { data };

  const dataOrder = [
    { name: "Fruit Salad", price: 5, quantity: 1 },
    { name: "Green Noodles", price: 15, quantity: 1 },
    { name: "Herbal Pancake", price: 7, quantity: 1 },
  ];
  
  export default dataOrder;