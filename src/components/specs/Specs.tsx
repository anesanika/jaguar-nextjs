import React from "react";
import "./Specs.css";
import Animate from "../animate/Animate";

const Specs: React.FC = () => {
  return (
    <div className="mt-[300px] p-2">
      <div className="contnet">
        <div className="py-24">
          <div>
            <Animate slider={true}>
              <h2 className="mb-20 font-[montse] tracking-[5px] text-[#686868]">
                SPECIAL SUMARY:
              </h2>
            </Animate>
            <Animate>
              <div className="list-cont flex w-full justify-between items-center">
                <ul className="font-[montse] myList">
                  <li>
                    ENGINE : <div>3.4L Inline 6</div>
                  </li>
                  <li>
                    0-100KM/H : <div>4.7 Seconds</div>
                  </li>
                  <li>
                    WEIGHT : <div>870 Kg</div>
                  </li>
                </ul>
                <ul className="font-[montse] myList">
                  <li>
                    TOP SPEED <div>278 Km/h</div>
                  </li>
                  <li>
                    DRIVETRAIN <div>Front - RWD</div>
                  </li>
                  <li>
                    MAX. POWER <div>270 BHP</div>
                  </li>
                </ul>
              </div>
            </Animate>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specs;
