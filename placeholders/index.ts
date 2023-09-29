import { Profile, MenuItem } from '../src/types';
import { general } from '../src/assets';
const { avatar } = general;

export const profile: Profile = {
  firstName: 'Chou',
  lastName: 'Tzuyu',
  phone: '+63 912 345 6789',
  points: 0,
  email: 'chou@email.com',
  image: avatar,
  addresses: [
    {
      type: 'home',
      streetName: 'No.21 St. Agustin Street',
      barangay: 'Brgy. De Jose',
      city: 'Delgado City',
      zipCode: 2234,
      country: 'Philippines',
      isDefault: true,
    },
    {
      type: 'work',
      streetName: '3rd flr Anyeong Bldg. Seareal',
      city: 'St. Joaquin City',
      zipCode: 3456,
      country: 'Philippines',
      isDefault: false,
    },
  ],
};

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Steak Fries Veggies',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim.',
    category: 'Meat',
    price: 175,
    rating: 4.5,
    reward: {
      tier: 'Beginner',
      points: 20,
    },
  },
  {
    id: '2',
    name: 'Chicken Salad',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim.',
    category: 'Chicken',
    price: 172,
    rating: 4,
  },
  {
    id: '3',
    name: 'Sorvetes Primavera',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim.',
    category: 'Dessert',
    price: 185,
    rating: 5,
  },
  {
    id: '4',
    name: 'Fried Chicken',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim.',
    category: 'Chicken',
    price: 175,
    rating: 3.5,
  },
];
