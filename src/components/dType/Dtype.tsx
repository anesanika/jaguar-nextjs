import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import dtype from "../../assets/image/dtype.png";
import Animate from "../animate/Animate";

const Dtype: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const x = useTransform(scrollYProgress, [0, 1], [200, -300]);

  return (
    <div className="mt-[200px] py-[100px]" ref={ref}>
      <div className="w-[1200px] max-w-[100%] m-auto">
        <div className="dtype-cont relative -rotate-[10deg]">
          <Animate>
            <div className="dtypetext-cont flex flex-col items-end">
              <h1 className="font-[montseBold] text-[100px] max-w-[60%] text-[#2e2e2e] font-black leading-[120px] mb-10">
                D-Type
              </h1>
              <p className="max-w-[40%] text-[#2e2e2ebe] font-[montse] text-lg leading-[35px] tracking-[2px]">
                A tribute to the most iconic racing car in the history of
                motorsport.
              </p>
            </div>
          </Animate>

          <motion.div
            className="image-cont absolute w-full left-0 top-10 -z-10"
            style={{ x }}
          >
            <Image
              src={dtype}
              width={1000}
              alt="fateimage"
              loading="lazy"
              layout="responsive"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dtype;
