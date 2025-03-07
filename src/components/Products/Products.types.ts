export interface ProductType {
    image: string;
    title: string;
    description: string;
    availableSize: string[];
    nutritionFacts: { name: string; value: string }[];
  }