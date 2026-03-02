
import FoodCard from "./Foodcard";
const dishesData = [
  { name: 'Green papaya salad', price: 12, description: 'shrimp, chili & lime' },
  { name: 'Black pepper calamari', price: 14, description: 'Galangal dressing, roasted rice, thai basil' },
  { name: 'Tumeric spiced cauliflower', price: 11, description: 'Sesame tofu dressing, furikake' },
  { name: 'Kingfish sashimi', price: 15, description: 'Green nam jim, coconut & thai basil' },
  { name: 'Caramelised betel leaf', price: 12, description: 'Pineapple, Chili' },
  { name: 'Pacific oysters (price per piece)', price: 5, description: 'Ponzu, sriracha' },
  { name: 'Thai chicken lettuce cups', price: 13, description: 'Chilis, thai basil, crispy garlic, fried egg' }
];

const Foodcard1 = () => {
  return (
    <FoodCard
      heading="Small Bites"
      imageSrc="src/assets/smallbites.jpg"
      dishes={dishesData}
    />
  );
};

export default Foodcard1;


const secondDishesData = [
  { name: "Sesame Chicken", price: 12, description: "Chinese eggplant, sweet chili soy glaze, green onion, pineapple, ginger" },
  { name: "Chicken Wings", price: 18, description: "Thai basil, chili, peanuts, green papaya, cilantro" },
  { name: "Ribeye Bites Roasted", price: 22, description: "Shishito Peppers, Jalapeño Crème" },
  { name: "Blackened Fish Sandwich", price: 23, description: "Crunchy cabbage, wild baby arugula, tomato, house made tartar sauce, on a brioche bun" },
  { name: 'Siji Chun "Four Seasons"', price: 9, description: "Intense floral aroma and delicate fruity taste without any bitterness or dryness" },
  { name: "Black Pepper Chili Chicken", price: 12, description: "Pepper, onion, bamboo shoot, celery" }
];
export const Foodcard2 = () => {
  return (
    <FoodCard
      heading="Hot Dishes"
      imageSrc="src/assets/dishes.jpeg"
      dishes={secondDishesData}
      reverse={true}
    />
  );
};

const dessertData = [
  { name: "Dessert platter", price: 12, description: "Chef’s selection of sweets. Serves 2" },
  { name: "Fruit Plate", price: 14, description: "Seasonal selections of fruits, shaved coconut, vanilla drizzle, mint" },
  { name: "Fried Banana", price: 9, description: "Panko crusted with caramel sauce, banana brulee, caramel popcorn" },
  { name: "Sorbet", price: 7, description: "Watermelon, passion fruit, strawberry, mango, orange" },
  { name: "Thai Donut", price: 8, description: "Fried donut dipped with sweet condense milk & peanut" },
  { name: "Banana spring rolls", price: 7, description: "Honey glaze, vanilla drizzle, coconut-pineapple ice cream" }
];

export const Foodcard3 = () => {
  return (
    <FoodCard
      heading="Dessert"
      imageSrc="src/assets/Dessert.jpeg"
      dishes={dessertData}
    />
  );
};

const teaData = [
  { name: "Ti Quan Yin", price: 4, description: "Intense aroma, depth and fruitiness - ranked as one of the most famous teas in China" },
  { name: "Sencha", price: 5, description: "Shiny needlelike tea leaves that yield a slightly grassy, clean refreshing brew, the most popular tea in Japan" },
  { name: "Gunpowder", price: 6, description: "Green pellets of rolled tea leaves that produces a pleasant smokey flavor" },
  { name: 'Zhenghe Bai Mudan "White Peony"', price: 4, description: "Fresh bamboo aroma, lightly sweet flavor with notes of melon and grape" },
  { name: "Hong Tao", price: 4, description: "Peachy flavor, goes well with dessert" },
  { name: "Jin Xuan", price: 5, description: "Creamy smooth texture, incredible milk aroma and taste with a naturally sweet flavor. Goes well with spicy foods" }
];

export const Foodcard4 = () => {
  return (
    <FoodCard
      heading="Tea"
      imageSrc="src/assets/tea.jpg"
      dishes={teaData}
      reverse={true}
    />
  );
};