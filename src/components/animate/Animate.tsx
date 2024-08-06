import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

interface Types {
  children: any;
  slider?: boolean;
}
const Animate = ({ children, slider = false }: Types) => {
  const ref = useRef(null);
  const inViews = useInView(ref, { once: true });
  const mainControl = useAnimation();
  const sliderControl = useAnimation();
  const variant = slider
    ? {
        hidden: { opacity: 0, x: -26 },
        visable: { opacity: 1, x: 0 },
      }
    : { hidden: { opacity: 0, y: 25 }, visable: { opacity: 1, y: 0 } };

  useEffect(() => {
    if (inViews) {
      mainControl.start("visable");
      if (slider) {
        sliderControl.start("visable");
      }
    }
  }, [inViews]);

  return (
    <div className="relative">
      <motion.div
        ref={ref}
        variants={variant}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {children}
      </motion.div>
      {slider ? (
        <motion.div
          variants={{
            hidden: { left: 0 },
            visable: { left: "100%" },
          }}
          transition={{ duration: 0.7 }}
          initial="hidden"
          animate={sliderControl}
          className="absolute top-1 bottom-1 left-0 right-0 bg-[#fff] z-40"
        />
      ) : null}
    </div>
  );
};

export default Animate;
