import MyButton from "../UI/MyButton/MyButton";

const HomePage = () => {
  return (
    <section
      id="Home"
      className="w-full h-screen md:bg-[url('/background4.jpg')] bg-[url('/background5.jpg')] bg-cover bg-center relative "
    >
      <div className="absolute hidden lg:flex top-[35%] left-[12%] flex-col gap-10 justify-center items-center">
        <img src="./full-logo.png" className="w-100" alt="" />
        <MyButton text="Explore All Products" />
      </div>
    </section>
  );
};

export default HomePage;
