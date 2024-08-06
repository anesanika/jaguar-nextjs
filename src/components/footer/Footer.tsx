import React from "react";
import Animate from "../animate/Animate";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-10 px-5 mt-[500px] border-t border-[#2e2e2e] font-[montse] tracking-[2px] text-[#474747]">
      <div className="contnet">
        <div className="footer-cont flex w-full justify-between items-center">
          <Animate slider={true}>
            <h1>Copyied By Nika Anesaini</h1>
          </Animate>

          <Animate slider={true}>
            <a
              className="underline"
              download="anesianinika.pdf"
              href="../../../public/anesianinika.pdf"
            >
              MY PROPOSAL
            </a>
          </Animate>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
