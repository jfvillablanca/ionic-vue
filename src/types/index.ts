export type Profile = {
  firstName: string;
  lastName: string;
  phone: string;
  points: number;
};

export const menuCategories = [
  'Meat',
  'Chicken',
  'Breakfast',
  'Seafood',
  'Dessert',
] as const;

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  category: (typeof menuCategories)[number];
  price: number;
  rating: number;
  reward?: {
    tier: 'Beginner' | 'Intermediate' | 'Loyal';
    points: number;
  };
};
