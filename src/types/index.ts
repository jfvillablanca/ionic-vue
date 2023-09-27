export type Profile = {
  firstName: string;
  lastName: string;
  phone: string;
  points: number;
};

export type MenuItem = {
  name: string;
  category: 'Meat' | 'Chicken' | 'Breakfast' | 'Seafood' | 'Dessert';
  price: number;
  rating: number;
  reward?: {
    tier: 'Beginner' | 'Intermediate' | 'Loyal';
    points: number;
  };
};
