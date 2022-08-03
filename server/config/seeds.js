const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Men' },
    { name: 'Women' },
    { name: 'New Season' },
    { name: 'Accessories' },
    { name: 'Vintage' },
    { name: 'Old Season'},
    { name: 'Special Edition'}
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Future Suit',
      price: '1800',
      category: [ 'Men', 'Clothing' ],
      images: 'model-1.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      highlights: [
        'Designed by the best European Artists of this decade',
        'Natural materials',
        'Ethically sourced',
        'Ultra-soft',
      ],
      details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Sed sed risus pretium quam vulputate dignissim. Hac habitasse platea dictumst quisque sagittis purus sit amet. Eget nullam non nisi est sit amet facilisis. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Dui vivamus arcu felis bibendum ut tristique et.',
      reviews: { average: 3, totalCount: 97 }
    },
    {
      name: 'Elegance a la France',
      price: '2100',
      category: [ 'Men', 'Clothing' ],
      images: 'model-2.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      highlights: [
        'Designed by the best European Artists of this decade',
        'Natural materials',
        'Ethically sourced',
        'Ultra-soft',
      ],
      details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Sed sed risus pretium quam vulputate dignissim. Hac habitasse platea dictumst quisque sagittis purus sit amet. Eget nullam non nisi est sit amet facilisis. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Dui vivamus arcu felis bibendum ut tristique et.',
      reviews: { average: 4, totalCount: 197 }
    },
    {
      name: 'Pavani',
      price: '1100',
      category: [ 'Men', 'Clothing' ],
      images: 'model-3.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      highlights: [
        'Designed by the best European Artists of this decade',
        'Natural materials',
        'Ethically sourced',
        'Ultra-soft',
      ],
      details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Sed sed risus pretium quam vulputate dignissim. Hac habitasse platea dictumst quisque sagittis purus sit amet. Eget nullam non nisi est sit amet facilisis. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Dui vivamus arcu felis bibendum ut tristique et.',
      reviews: { average: 4, totalCount: 150 }
    },
    {
      name: 'Gianca Glamuer',
      price: '1900',
      category: [ 'Men', 'Clothing' ],
      images: 'model-4.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      highlights: [
        'Designed by the best European Artists of this decade',
        'Natural materials',
        'Ethically sourced',
        'Ultra-soft',
      ],
      details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Sed sed risus pretium quam vulputate dignissim. Hac habitasse platea dictumst quisque sagittis purus sit amet. Eget nullam non nisi est sit amet facilisis. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Dui vivamus arcu felis bibendum ut tristique et.',
      reviews: { average: 4, totalCount: 126 }
    },
    {
      name: 'Le Valverde',
      price: '1250',
      category: [ 'Men', 'Clothing' ],
      images:  'model-5.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      highlights: [
        'Designed by the best European Artists of this decade',
        'Natural materials',
        'Ethically sourced',
        'Ultra-soft',
      ],
      details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Sed sed risus pretium quam vulputate dignissim. Hac habitasse platea dictumst quisque sagittis purus sit amet. Eget nullam non nisi est sit amet facilisis. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Dui vivamus arcu felis bibendum ut tristique et.',
      reviews: { average: 2, totalCount: 110 }
    },
    {
      name: 'Toronto Inverno',
      price: '1790',
      category: [ 'Men', 'Clothing' ],
      images: 'model-6.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      highlights: [
        'Designed by the best European Artists of this decade',
        'Natural materials',
        'Ethically sourced',
        'Ultra-soft',
      ],
      details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Sed sed risus pretium quam vulputate dignissim. Hac habitasse platea dictumst quisque sagittis purus sit amet. Eget nullam non nisi est sit amet facilisis. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Dui vivamus arcu felis bibendum ut tristique et.',
      reviews: { average: 2, totalCount: 10 }
    },
    {
      name: 'Old School',
      price: '2200',
      category: [ 'Men', 'Clothing' ],
      images: 'model-7.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      highlights: [
        'Designed by the best European Artists of this decade',
        'Natural materials',
        'Ethically sourced',
        'Ultra-soft',
      ],
      details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Sed sed risus pretium quam vulputate dignissim. Hac habitasse platea dictumst quisque sagittis purus sit amet. Eget nullam non nisi est sit amet facilisis. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Dui vivamus arcu felis bibendum ut tristique et.',
      reviews: { average: 4, totalCount: 10 }
    },
    {
      name: 'Old School',
      price: '2200',
      category: [ 'Men', 'Clothing' ],
      images:'model-8.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      highlights: [
        'Designed by the best European Artists of this decade',
        'Natural materials',
        'Ethically sourced',
        'Ultra-soft',
      ],
      details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Sed sed risus pretium quam vulputate dignissim. Hac habitasse platea dictumst quisque sagittis purus sit amet. Eget nullam non nisi est sit amet facilisis. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Dui vivamus arcu felis bibendum ut tristique et.',
      reviews: { average: 4, totalCount: 10 }
    },
    {
      name: 'Beleza',
      price: '1200',
      category: [ 'Men', 'Clothing' ],
      images:  'model-6.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      highlights: [
        'Designed by the best European Artists of this decade',
        'Natural materials',
        'Ethically sourced',
        'Ultra-soft',
      ],
      details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Sed sed risus pretium quam vulputate dignissim. Hac habitasse platea dictumst quisque sagittis purus sit amet. Eget nullam non nisi est sit amet facilisis. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Dui vivamus arcu felis bibendum ut tristique et.',
      reviews: { average: 3, totalCount: 70 }
    },
    {
      name: 'Beleza o Rio',
      price: '1500',
      category: [ 'Men', 'Clothing' ],
      images:  'model-3.jpg',
      description:
        'Beleza o Rio was Designed by Giovani Guresci inspired by one of his trips to La Patagonia, he wanted to create an artistic resemblance of the beauty of the mountains combined with simplicity a mix that reminds everyone wearing it of the little but beautiful things in life.',
      highlights: [
        'Designed by the best European Artists of this decade',
        'Natural materials',
        'Ethically sourced',
        'Ultra-soft',
      ],
      details:
      'Beleza o Rio was Designed by Giovani Guresci inspired by one of his trips to La Patagonia, he wanted to create an artistic resemblance of the beauty of the mountains combined with simplicity a mix that reminds everyone wearing it of the little but beautiful things in life.',
      reviews: { average: 4, totalCount: 117 }
    },
    {
      name: 'Old School',
      price: '2200',
      category: [ 'Men', 'Clothing' ],
      images:'model-8.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      highlights: [
        'Designed by the best European Artists of this decade',
        'Natural materials',
        'Ethically sourced',
        'Ultra-soft',
      ],
      details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Sed sed risus pretium quam vulputate dignissim. Hac habitasse platea dictumst quisque sagittis purus sit amet. Eget nullam non nisi est sit amet facilisis. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Dui vivamus arcu felis bibendum ut tristique et.',
      reviews: { average: 4, totalCount: 10 }
    },
    {
      name: 'Beleza',
      price: '1200',
      category: [ 'Men', 'Clothing' ],
      images:  'model-6.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      highlights: [
        'Designed by the best European Artists of this decade',
        'Natural materials',
        'Ethically sourced',
        'Ultra-soft',
      ],
      details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Sed sed risus pretium quam vulputate dignissim. Hac habitasse platea dictumst quisque sagittis purus sit amet. Eget nullam non nisi est sit amet facilisis. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Dui vivamus arcu felis bibendum ut tristique et.',
      reviews: { average: 3, totalCount: 70 }
    },
   
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[2]._id, products[1]._id]
      }
    ],
    wishlist: [
      {
        products: [products[0]._id, products[3]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
