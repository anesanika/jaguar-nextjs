import React from "react";
import Image from "next/image";
import strocked1 from "../../assets/image/stroekd.jpg";
import strocked2 from "../../assets/image/stroekd1.jpg";
import Animate from "../animate/Animate";

const About: React.FC = () => {
  return (
    <div className="about-container mt-[300px]">
      <div className="content-wrapper max-w-[100%] w-[800px] m-auto">
        <div className="text-section py-[100px] font-[montse]">
          <Animate slider={true}>
            <h2 className="section-title mb-[30px] text-[25px] text-[#2e2e2eb6]">
              About D-type
            </h2>
          </Animate>
          <Animate>
            <p className="section-description leading-[40px] text-[17px] text-[#2e2e2ee1]">
              <span className="font-bold font-black">
                Designed by Malcom Sayer, an aviation expert, the D-Type was
                created to use the rushing atmosphere to its advantage
              </span>
              , employing a monocoque tub and fitted with stressed aluminum body
              panels. The large fin out back helped to keep the car stable while
              flying down the Mulsanne straight, and looking over the curvaceous
              body, it’s not difficult to see the genesis of modern race car
              aerodynamics.{" "}
              <span className="additional-info mt-12 inline-block">
                Easily recognized by the large aero fin sticking straight up at
                the rear, the D-Type is one of most visually stunning race cars
                of its era.{" "}
              </span>
            </p>
          </Animate>
        </div>
        <div className="image-gallery w-full flex justify-between items-center">
          <Image src={strocked1} alt="Header" width={"300"} loading="lazy" />
          <Image src={strocked2} alt="Header" width={"300"} loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default About;
