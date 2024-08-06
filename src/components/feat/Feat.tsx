import React, { useRef } from "react";
import Image from "next/image";
import featImage from "../../assets/image/featImage.png";
import { motion, useScroll, useTransform } from "framer-motion";
import Animate from "../animate/Animate";

const Feat: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const x = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <div className="feat-container mt-[200px] py-[100px]" ref={ref}>
      <div className="feat-content w-[1200px] max-w-[100%] m-auto">
        <div className="feat-text relative -rotate-[10deg]">
          <div>
            <Animate>
              <h1 className="feat-title font-[montseBold] text-[100px] max-w-[60%] text-[#2e2e2e] font-black leading-[120px] mb-10">
                A Feast For The Eyes
              </h1>
            </Animate>
            <Animate>
              <p className="feat-description max-w-[40%] text-[#2e2e2ebe] font-[montse] text-lg leading-[35px] tracking-[2px]">
                Providing the motivation was a 3.4-liter inline six-cylinder
                (and later, a 3.8-liter), which created upwards of 300 towards
                the end of its life cycle, netting three consecutive wins at Le
                Mans between 1955 and 1957.
              </p>
            </Animate>
          </div>
          <motion.div
            className="feat-image absolute left-0 top-40 -z-10"
            style={{ x }}
          >
            <Image src={featImage} width={1000} alt="fateimage" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Feat;
