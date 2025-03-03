import { motion } from "framer-motion";
import first from "../../assets/Links/1.png";
import second from "../../assets/Links/2.png";
import third from "../../assets/Links/3.png";
import fourth from "../../assets/Links/4.png";
import fifth from "../../assets/Links/5.png";
import sixth from "../../assets/Links/6.png";
import seventh from "../../assets/Links/7.png";
import eighth from "../../assets/Links/8.png";
import ninth from "../../assets/Links/9.png";
import tenth from "../../assets/Links/10.png";

const logos = [
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eighth,
  ninth,
  tenth,
];

// Helper function to calculate how many logo sets are needed
const getLogoSets = () => {
  const logoWidth = 144; // w-32 (128px) + mx-4 (16px total) = 144px per logo
  const screenWidth = window.innerWidth; // Get viewport width
  const logosPerSet = logos.length; // 10 logos
  const setWidth = logosPerSet * logoWidth; // Width of one full set of logos
  const minSets = Math.ceil((screenWidth * 2) / setWidth); // Ensure at least 2x screen width
  return Math.max(minSets, 2); // Minimum of 2 sets for seamless looping
};

const Marquee = ({ direction }) => {
  const logo_sets = getLogoSets();
  const repeatedLogos = Array(logo_sets).fill(logos).flat(); // Repeat logos dynamically

  return (
    <div className="relative overflow-hidden w-full py-4">
      <motion.div
        className="flex whitespace-nowrap"
        initial={{ x: direction === "left" ? "-50%" : 0 }}
        animate={{ x: direction === "left" ? 0 : "-50%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 15, // Adjust speed here
          ease: "linear",
        }}
      >
        {repeatedLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="logo"
            className="w-32 h-16 mx-4 object-contain flex-shrink-0"
          />
        ))}
      </motion.div>
    </div>
  );
};

const DoubleScrollingSlider = () => {
  return (
    <div className="w-full py-10">
     <h1 className="text-center text-5xl font-bold mb-6">
        Our Partners
     </h1>

      <Marquee direction="left" />
      <Marquee direction="right" />
    </div>
  );
};

export default DoubleScrollingSlider;