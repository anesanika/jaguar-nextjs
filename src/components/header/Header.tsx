import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import headerImage from "../../assets/image/header.png";
import Animate from "../animate/Animate";

function Header() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [400, -400]);

  return (
    <header className="header w-full h-screen flex justify-center items-center text-[#2e2e2e]">
      <div className="header-content flex w-fill h-screen items-center justify-center -rotate-12">
        <motion.div
          className="header-image"
          style={{ y }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Image src={headerImage} alt="Header" width={"450"} />
        </motion.div>
        <div className="text-content -translate-x-16">
          <div className="text-block font-[montse]">
            <Animate slider={true}>
              <p className="text-small text-[16px]">JAGUAR</p>
            </Animate>
            <Animate slider={true}>
              <h1 className="text-large text-[38px] font-normal">D-TYPE</h1>
            </Animate>
          </div>
          <div className="headline">
            <Animate slider={true}>
              <h1 className="headline-text font-[montseBold] text-[100px] max-w-[750px] font-black leading-[1] ">
                Winner of 1956Le Mans24 Hours Grand Prix Endurance
              </h1>
            </Animate>
          </div>
          <div className="additional-info">
            <Animate>
              <div className="info-box border border-[#2e2e2e] p-3 flex-col max-w-[50%] tracking-[8px] text-[#686868d3] leading-10 text-lg">
                <p>second win in a roll</p>
                <p>fourth win in 6 years</p>
              </div>
            </Animate>
            <Animate>
              <div className="date-box bg-[#2e2e2e] text-[#e2e2e2] w-[50%] text-center p-6 text-[20px] mt-3">
                <p>Jul 28-29, 1956</p>
              </div>
            </Animate>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
