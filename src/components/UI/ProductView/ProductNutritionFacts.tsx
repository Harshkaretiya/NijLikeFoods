const ProductNutritionFacts = (props: {
  name: string;
  value: string;
  isLastIndex: boolean;
}) => {
  return (
    <div
      className={`flex ${
        !props.isLastIndex && "border-b border-b-gray-200"
      } p-1 gap-3`}
    >
      <div className="grow">{props.name}</div>
      <div>{props.value}</div>
    </div>
  );
};

export default ProductNutritionFacts;
