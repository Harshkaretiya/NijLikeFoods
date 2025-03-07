import { Gmail, Phone } from "../UI/SVG/MySvg";

const Contact = () => {
  return (
    <section
      id="Contact"
      className=" pt-30 flex flex-col justify-center items-start max-w-[900px] mx-auto px-4"
    >
      <div className="m-5 text-3xl sm:text-4xl font-normal">Contact</div>
      <div className="flex flex-col md:flex-row w-full gap-10">
        <div className="flex flex-col w-full md:w-1/2 flex-grow px-6 md:px-20 py-10 gap-10">
          <a
            href="mailto:nijlikefoods@gmail.com"
            className="w-full min-w-60 border-2 shadow-lg rounded-2xl border-gray-200"
          >
            <div className="w-14 h-14 bg-[#fee9e4] m-5 rounded-xl flex justify-center items-center">
              <Gmail />
            </div>
            <div className="m-5">
              <div className="font-semibold">Email</div>
              <div>nijlikefoods@gmail.com</div>
            </div>
          </a>

          <a
            href="tel:+919537319676"
            className="w-full min-w-60 border-2 shadow-lg rounded-2xl border-gray-200"
          >
            <div className="w-14 h-14 bg-[#d8f8e9] m-5 rounded-xl flex justify-center items-center">
              <Phone />
            </div>
            <div className="m-5">
              <div className="font-semibold">Contact</div>
              <div>+91 95373 19676</div>
            </div>
          </a>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.378141019924!2d72.9336452!3d21.256494300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f05e9545ba5%3A0x3ed7149ae0395945!2sNij%20like%20foods!5e0!3m2!1sen!2sin!4v1741107788132!5m2!1sen!2sin"
            className="rounded-2xl w-full h-[300px] md:h-[450px]"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
