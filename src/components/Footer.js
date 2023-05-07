import React from "react";
import Julian from "../assets/julianPic.jpg";
import Andrea from "../assets/andreaPic.jpg";
import Benjy from "../assets/benjyPic.jpg";
import Shayan from "../assets/shayanPic.jpg";
import Twäwis from "../assets/twäwis.jpg";

const Footer = () => {
  return (
    <footer className="sm:absolute sm:bottom-0 footer items-center p-4 bg-neutral text-neutral-content flex justify-center">
      <div className="footer items-center p-4 bg-neutral text-neutral-content max-w-[1600px]">
        <div className="items-center grid-flow-col">
          <img src={Twäwis} className="w-12" />
          <p>Copyright © 2023 - All right reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <div className="avatar-group -space-x-6">
            <div className="avatar border-2">
              <div className="w-10">
                <img src={Shayan} />
              </div>
            </div>
            <div className="avatar border-2">
              <div className="w-10">
                <img src={Benjy} />
              </div>
            </div>
            <div className="avatar border-2">
              <div className="w-10">
                <img src={Andrea} />
              </div>
            </div>
            <div className="avatar border-2">
              <div className="w-10">
                <img src={Julian} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
