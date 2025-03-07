import { RightArrowWhite } from "../SVG/MySvg";

const MyButton = (props: { text: string }) => {
  return (
    <a
      href="#Products"
      className="text-white rounded-4xl fill-red-50 bg-[#D20A1B] p-5 flex gap-5 px-10 cursor-pointer hover:bg-red-700 transition-all"
    >
      {props.text}
      <RightArrowWhite />
    </a>
  );
};

export default MyButton;
