import ProductView from "../UI/ProductView/ProductView";
import { ProductType } from "./Products.types";

const Products = () => {
  const data: ProductType[] = [
    {
      image: "./product1.png",
      title: "Khajur Chutney",
      description:
        "Water, Dates, Sugar,Dry Garlic, Cor Flour, Ginger, Tamarind,Red Chilli Powder, Dry Coriander Powder,Cumin Powder, Fennel, Acidity Regulator(E-260), Stabilizing Agent (E1422 & 415)Mixed Spices, Salt, Preservative (E-211).",
      availableSize: ["6 kg", "2 kg", "1 kg", "500 g"],
      nutritionFacts: [
        { name: "Serving Size ", value: "100gm" },
        { name: "Calories", value: "181" },
        { name: "Total Fat (0% Daily Value)", value: "0g" },
        { name: "Total Carbohydrate (16% Daily Value)", value: "44g" },
        { name: "Total Sugar - Added Sugars (30% Daily Value)", value: "15g" },
        { name: "Protein (0% Daily Value)", value: "0g" },
        {
          name: " * The %  Daily Value(DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2000 calories a day is used for general nutrition advice",
          value: "",
        },
      ],
    },
  ];

  return (
    <section
      id="Products"
      className="flex flex-col mb-5 pt-20 justify-center items-start mx-auto max-w-[900px]"
    >
      <div className="font-normal text-3xl sm:text-4xl m-5">Products</div>
      <div className="flex gap-8 w-full ">
        {data.map((item, index) => {
          return (
            <ProductView
              key={index}
              image={item.image}
              title={item.title}
              availableSize={item.availableSize}
              description={item.description}
              nutritionFacts={item.nutritionFacts}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Products;
