export const categories = [
  {
    id: 1,
    name: "Pizza",
    image: require("../assets/images/pizzaIcon.png"),
  },
  {
    id: 2,
    name: "Burger",
    image: require("../assets/images/pasta.png"),
  },
  {
    id: 3,
    name: "Italian",
    image: require("../assets/images/pasta.png"),
  },
  {
    id: 4,
    name: "Chinese",
    image: require("../assets/images/pizzaIcon.png"),
  },
  {
    id: 5,
    name: "Noodles",
    image: require("../assets/images/pizzaIcon.png"),
  },
  {
    id: 6,
    name: "Sweets",
    image: require("../assets/images/pizzaIcon.png"),
  },
];

export const featured = {
  id: 1,
  title: "Hot and Spicy",
  description: "soft and tender fried chicken",
  restaurants: [
    {
      id: 1,
      name: "Papa Johns",
      image:
        "https://cdn.discordapp.com/attachments/1167827877224534166/1168023784259850310/3ac2b39ad528f8c8c5dc77c59abb683d.png?ex=655041eb&is=653dcceb&hm=88479c56948e899c9eb0bf34722cdc0a06697d7742e71683891c4fd985137941&",
      description: "Hot and spicy pizzas",
      lng: -85.5324269,
      lat: 38.2145602,
      address: "434 second street",
      stars: 4,
      reviews: "4.4k",
      category: "Fast Food",
      dishes: [
        {
          id: 1,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image:
            "https://cdn.discordapp.com/attachments/1167827877224534166/1168024043362988193/Super-Easy-Cheesy-Garlic-Bread-3-500x375.png?ex=65504228&is=653dcd28&hm=851ba344162742b1439ba7b4c262c623e74de8842814bd20a3d09c7873effb42&",
        },
        // {
        //   id: 2,
        //   name: "pizza",
        //   description: "cheezy garlic pizza",
        //   price: 10,
        //   image: require("../assets/images/pizzaDish.png"),
        // },
        // {
        //   id: 3,
        //   name: "pizza",
        //   description: "cheezy garlic pizza",
        //   price: 10,
        //   image: require("../assets/images/pizzaDish.png"),
        // },
      ],
    },
    {
      id: 6,
      name: "Tokyo Tavern",
      image:
        "https://cdn.discordapp.com/attachments/1167827877224534166/1168019724119060573/the-tavern-dining-area.png?ex=65503e22&is=653dc922&hm=1043686a95e9f7eb94ea100b41d2d96071bec7db819b9dd26f5a51995efbe58c&",
      description: "Experience the taste of Tokyo",
      lng: -118.2437,
      lat: 34.0522,
      address: "789 Sushi St, Los Angeles, CA",
      stars: 4.7,
      reviews: "5.2k",
      category: "Japanese",
      dishes: [
        {
          id: 1,
          name: "Sushi Platter",
          description: "An assortment of fresh sushi",
          price: 25,
          image:
            "https://cdn.discordapp.com/attachments/1167827877224534166/1168020124821880913/Midori_Sushi_1000x667-900x600.png?ex=65503e82&is=653dc982&hm=1a3c2ea16363c0b96abf40858d4a097278e34f59f822636de762681beb52ce85&",
        },
        // {
        //   id: 2,
        //   name: "Tempura",
        //   description: "Lightly battered and fried vegetables and shrimp",
        //   price: 15,
        //   image: "https://example.com/images/tempura.png",
        // },
        // {
        //   id: 3,
        //   name: "Ramen",
        //   description: "Rich, flavorful broth with noodles, meat, and veggies",
        //   price: 18,
        //   image: "https://example.com/images/ramen.png",
        // },
      ],
    },
    {
      id: 7,
      name: "Seoul Spice",
      image:
        "https://cdn.discordapp.com/attachments/1167827877224534166/1168020262726422568/41514.png?ex=65503ea3&is=653dc9a3&hm=a0d8d02d98743df85480882ad8930a365ab9f6519cdc20a7e7cfc8e4784b2156&",
      description: "Korean cuisine with a modern twist",
      lng: -77.0369,
      lat: 38.8951,
      address: "101 K-Food Ln, Washington, DC",
      stars: 4.8,
      reviews: "4.1k",
      category: "Korean",
      dishes: [
        {
          id: 1,
          name: "Bibimbap",
          description:
            "A bowl of warm rice topped with veggies and a fried egg",
          price: 16,
          image:
            "https://cdn.discordapp.com/attachments/1167827877224534166/1168020714905944104/Bibimbap_3.png?ex=65503f0f&is=653dca0f&hm=7b420d78777af3c1cb3c3b93d91369622d97b81ae629121510dcbbe429209691&",
        },
        // {
        //   id: 2,
        //   name: "Kimchi Stew",
        //   description: "Spicy stew made with kimchi, tofu, and pork",
        //   price: 14,
        //   image: "https://example.com/images/kimchiStew.png",
        // },
        // {
        //   id: 3,
        //   name: "Korean BBQ",
        //   description: "Grilled meat served with a variety of side dishes",
        //   price: 25,
        //   image: "https://example.com/images/koreanBBQ.png",
        // },
      ],
    },
    {
      id: 8,
      name: "Bangkok Bites",
      image:
        "https://cdn.discordapp.com/attachments/1167827877224534166/1168020869596069978/117126037_1158185471226275_3178096849830461411_o.png?ex=65503f34&is=653dca34&hm=f1e529b1d2b9bec16f9196ecd90ddd6507b320f11409ac717757f6124f8a262b&",
      description: "Authentic Thai cuisine",
      lng: -118.4089,
      lat: 34.103,
      address: "456 Thai St, Pasadena, CA",
      stars: 4.2,
      reviews: "3.1k",
      category: "Thai",
      dishes: [
        {
          id: 1,
          name: "Pad Thai",
          description: "Stir-fried rice noodle dish",
          price: 15,
          image:
            "https://cdn.discordapp.com/attachments/1167827877224534166/1168021126019031050/Pad-Thai-SQ.png?ex=65503f71&is=653dca71&hm=e63c517aca306c96da123b3c023c01e7a6ddd3dcb2c8ce70d70e09c14337980e&",
        },
        // {
        //   id: 2,
        //   name: "Green Curry",
        //   description: "Spicy and sweet curry with chicken and vegetables",
        //   price: 17,
        //   image: "https://example.com/images/greenCurry.png",
        // },
        // {
        //   id: 3,
        //   name: "Tom Yum Soup",
        //   description: "Hot and sour Thai soup usually cooked with shrimp",
        //   price: 12,
        //   image: "https://example.com/images/tomYumSoup.png",
        // },
      ],
    },
    {
      id: 9,
      name: "Cancun Cantina",
      image:
        "https://cdn.discordapp.com/attachments/1167827877224534166/1168021296592994365/cancun-cantina.png?ex=65503f99&is=653dca99&hm=77dd54b7a42c77c4ad71083e47db348c582d1a0e6b92e71cfd237ca05e479ff5&",
      description: "Fiesta of flavors from Mexico",
      lng: -104.9903,
      lat: 39.7392,
      address: "303 Taco Ln, Denver, CO",
      stars: 4.6,
      reviews: "2.8k",
      category: "Mexican",
      dishes: [
        {
          id: 1,
          name: "Tacos Al Pastor",
          description: "Marinated pork tacos with pineapple",
          price: 12,
          image:
            "https://cdn.discordapp.com/attachments/1167827877224534166/1168021510057898024/Tacos-al-Pastor-Culinary-Hill-1200x800-1-500x500.png?ex=65503fcc&is=653dcacc&hm=3f48111fa17a857c91ee2a8c43df778f860fd6049d8ada307a0847a463e3dded&",
        },
        // {
        //   id: 2,
        //   name: "Guacamole",
        //   description:
        //     "Freshly mashed avocados mixed with onions, tomatoes, and cilantro",
        //   price: 8,
        //   image: "https://example.com/images/guacamole.png",
        // },
        // {
        //   id: 3,
        //   name: "Churros",
        //   description: "Sweet dough pastry with sugar and cinnamon",
        //   price: 6,
        //   image: "https://example.com/images/churros.png",
        // },
      ],
    },
    {
      id: 10,
      name: "Beijing Bites",
      image:
        "https://cdn.discordapp.com/attachments/1167827877224534166/1168021828296515635/image.png?ex=65504018&is=653dcb18&hm=a27e9b2da3c6fad060a11e6a70461cb2dcef509f9cd109b9e08844bf13541aaf&",
      description: "Delicious Chinese cuisine",
      lng: -122.4194,
      lat: 37.7749,
      address: "567 Dimsum Dr, San Francisco, CA",
      stars: 4.5,
      reviews: "4.7k",
      category: "Chinese",
      dishes: [
        {
          id: 1,
          name: "Kung Pao Chicken",
          description:
            "Spicy stir-fried chicken with peanuts, vegetables, and chili peppers",
          price: 16,
          image:
            "https://cdn.discordapp.com/attachments/1167827877224534166/1168022024753524746/2020_04_27_takeout_style_kung_pao_chicken_7.png?ex=65504047&is=653dcb47&hm=b0dbec0d45d91ab3ab3612c6a09a906fe3eb93c6026ff9bbf3e3841373c2088b&",
        },
        // {
        //   id: 2,
        //   name: "Spring Rolls",
        //   description: "Crispy rolls with vegetable filling",
        //   price: 10,
        //   image: "https://example.com/images/springRolls.png",
        // },
        // {
        //   id: 3,
        //   name: "Beef and Broccoli",
        //   description: "Stir-fried beef and broccoli in a savory sauce",
        //   price: 18,
        //   image: "https://example.com/images/beefAndBroccoli.png",
        // },
      ],
    },
    {
      id: 11,
      name: "Pasta Paradiso",
      image:
        "https://cdn.discordapp.com/attachments/1167827877224534166/1168022185575714866/22b72fc0-d27f-419a-9447-54270f7e443b.png?ex=6550406d&is=653dcb6d&hm=16c59e0c0944e96b659cd10d02196278fb3e32d8ffbdf0da22328a10f8fea966&",
      description: "Heavenly Italian cuisine",
      lng: -73.9352,
      lat: 40.7306,
      address: "123 Spaghetti St, New York, NY",
      stars: 4.9,
      reviews: "7.3k",
      category: "Italian",
      dishes: [
        {
          id: 1,
          name: "Spaghetti Carbonara",
          description:
            "Classic pasta dish with egg, cheese, pancetta, and pepper",
          price: 20,
          image:
            "https://cdn.discordapp.com/attachments/1167827877224534166/1168022332456058960/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.png?ex=65504090&is=653dcb90&hm=e2a5e3c75f0ba8560170a5a6975cc9f15856348f5d0550225161dfb86b114e8e&",
        },
        // {
        //   id: 2,
        //   name: "Margherita Pizza",
        //   description:
        //     "Pizza with fresh tomatoes, mozzarella, fresh basil, and extra-virgin olive oil",
        //   price: 15,
        //   image: "https://example.com/images/margheritaPizza.png",
        // },
        // {
        //   id: 3,
        //   name: "Tiramisu",
        //   description:
        //     "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese",
        //   price: 8,
        //   image: "https://example.com/images/tiramisu.png",
        // },
      ],
    },
    {
      id: 12,
      name: "Mumbai Masala",
      image:
        "https://cdn.discordapp.com/attachments/1167827877224534166/1168022497749377075/image.png?ex=655040b8&is=653dcbb8&hm=b6c5408c3c7fab1a4733f1842fc471b03b0f294477eaf859654635191fe36af3&",
      description: "Spices of India in every bite",
      lng: -80.1917902,
      lat: 25.7616798,
      address: "456 Curry Ln, Miami, FL",
      stars: 4.4,
      reviews: "3.6k",
      category: "Indian",
      dishes: [
        {
          id: 1,
          name: "Butter Chicken",
          description: "Creamy tomato curry with tender pieces of chicken",
          price: 17,
          image:
            "https://cdn.discordapp.com/attachments/1167827877224534166/1168022848196063283/thumbnail-Butter-Chicken-scaled.png?ex=6550410b&is=653dcc0b&hm=58b491843c49ce10859f9abbef681d8111ae1516e7eb65e5931148434d3c2a18&",
        },
        // {
        //   id: 2,
        //   name: "Naan",
        //   description: "Soft and fluffy Indian bread",
        //   price: 3,
        //   image: "https://example.com/images/naan.png",
        // },
        // {
        //   id: 3,
        //   name: "Chana Masala",
        //   description: "Spicy chickpea curry",
        //   price: 14,
        //   image: "https://example.com/images/chanaMasala.png",
        // },
      ],
    },
    {
      id: 13,
      name: "Parisian Patisserie",
      image:
        "https://cdn.discordapp.com/attachments/1167827877224534166/1168023074902392953/gerald-mulot-shop-display.png?ex=65504141&is=653dcc41&hm=9c62c267f27e2d45848537c347ffc0af69a4472ff5170640b2ac4635b24b012f&",
      description: "Sweet and savory French delights",
      lng: -71.0589,
      lat: 42.3601,
      address: "789 Croissant Cr, Boston, MA",
      stars: 4.8,
      reviews: "4.8k",
      category: "French",
      dishes: [
        {
          id: 1,
          name: "Croissant",
          description: "Flaky and buttery pastry",
          price: 5,
          image:
            "https://cdn.discordapp.com/attachments/1167827877224534166/1168023252828950578/croissant-sq2.png?ex=6550416c&is=653dcc6c&hm=bfcac9d443e808b2e6b5ab817f554fae029eb9b082d7f92f723f47eb1e51bfe5&",
        },
        // {
        //   id: 2,
        //   name: "Quiche Lorraine",
        //   description: "Savory pie filled with bacon, cheese, and custard",
        //   price: 12,
        //   image: "https://example.com/images/quicheLorraine.png",
        // },
        // {
        //   id: 3,
        //   name: "Macarons",
        //   description: "Sweet meringue-based confection",
        //   price: 11,
        //   image: "https://example.com",
        // },
      ],
    },
  ],
};
