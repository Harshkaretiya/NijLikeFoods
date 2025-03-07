const AboutUs = () => {
  return (
    <section
      id="AboutUs"
      className="min-h-screen pt-20 flex flex-col justify-center items-center max-w-[900px] mx-auto px-4"
    >
      {/* Title */}
      <div className="text-3xl sm:text-4xl font-normal m-5 mb-10 flex w-full ">
        About Us
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row w-full gap-6">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="./nijlikelogo.png"
            className="w-full max-w-[400px] h-auto rounded-2xl object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col w-full md:w-1/2">
          <div className="text-lg sm:text-2xl grow font-light m-5 md:m-10 md:mt-1 text-center md:text-left">
            Bringing Flavor to Every Bite for Over 4 Years!
          </div>
          <div className="text-md sm:text-lg self-center md:self-end mr-5 md:mr-10 font-bold text-[#D20A1B]">
            Owner of Nij Like Foods
          </div>
          <div className="text-md sm:text-lg m-5 md:m-10 md:mt-0 self-center md:self-end">
            Atul Delvadiya
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
