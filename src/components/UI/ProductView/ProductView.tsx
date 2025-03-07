import { ProductType } from "../../Products/Products.types";
import ProductNutritionFacts from "./ProductNutritionFacts";

const ProductView = (props: ProductType) => {
  return (
    <div className="flex flex-col gap-4 p-4 w-full max-w-4xl mx-auto">
      {/* Product Image & Details */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={props.image}
          className="w-60 h-60 sm:w-80 sm:h-80 md:w-100 md:h-100 lg:w-100 lg:h-100 bg-black rounded-2xl"
          alt={props.title}
        />
        <div className="flex flex-col text-center md:text-left w-full">
          <div className="font-semibold text-xl sm:text-2xl md:text-3xl m-3">
            {props.title}
          </div>
          <div className="font-normal text-lg sm:text-xl m-3 mb-1">
            Available Size
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 m-3">
            {props.availableSize.map((item, index) => (
              <div
                key={index}
                className="text-sm sm:text-md md:text-lg text-center p-1 px-3 rounded-2xl font-semibold bg-[#D20A1B] text-white"
              >
                • {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ingredients Section */}
      <div className="mt-5">
        <div className="font-medium text-xl sm:text-2xl">Ingredients</div>
        <div className="font-normal text-sm mt-3 sm:text-lg text-justify">
          {props.description}
        </div>
      </div>

      {/* Nutrition Facts Section */}
      <div className="mt-5">
        <div className="font-medium text-xl sm:text-2xl">Nutrition Facts</div>
        <div className="font-normal text-sm sm:text-lg text-justify border-gray-100 border p-3 mt-3 rounded-2xl shadow-xl">
          {props.nutritionFacts.map((item, index) => (
            <ProductNutritionFacts
              key={index}
              name={item.name}
              value={item.value}
              isLastIndex={index === props.nutritionFacts.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductView;
