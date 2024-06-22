import React from "react";
import Logo from "./Logo";
import illustration from '../images/illustration1.png'
import {
  FaFacebookF,
  FaInstagram,
  FaMedium,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer flex justify-between items-start">
      <div className="logoText w-[410px] flex-col justify-between">
        <div className="footerLogo">
          <Logo width="230px" height="230px" />
        </div>
        <p className="footerLogoText">
          Turn Your Vision into a Visual Masterpiece
        </p>
      </div>
      <div className="pages w-[210px] pt-[1.5rem]">
        <h4 className="pageTxt font-bold text-[1.5rem] pb-[2rem] text-[#5e164d]">Pages</h4>
        <div>
          <ul className="flex flex-col justify-between">
            <li className="text-[1.3rem] pb-[10px] pageTxt glowHover">  <a href="#about-me">About Me</a></li>
            <li className="text-[1.3rem] pb-[10px]  pageTxt glowHover"><a href="#projects">Projects</a></li>
           </ul>
        </div>
      </div>
      <div className="socialMedia w-[180px] pt-[1.5rem] ">
        <h4 className="pageTxt font-bold text-[1.5rem] pb-[2rem] text-[#5e164d]">Social Icons</h4>
        <div>
          <ul className="flex flex-row justify-between">
            <li className="text-[1.5rem] pb-[10px] pageTxt glowHover">
              <FaFacebookF />
            </li>
            <li className="text-[1.5rem] pb-[10px] pageTxt glowHover">
              <FaInstagram />
            </li>
            <li className="text-[1.5rem] pb-[10px] pageTxt glowHover">
              <FaMedium />
            </li>
            <li className="text-[1.5rem] pb-[10px] pageTxt glowHover">
              <FaPinterestP />
            </li>
            <li className="text-[1.5rem] pb-[10px] pageTxt glowHover">
              <FaXTwitter />
            </li>
          </ul>
        </div>
      </div>
      <div className="Footerillustration pt-[2.5rem] w-[200px]">
        <img src={illustration} alt="" width="230px" height="230px" />
      </div>
    </div>
  );
}

export default Footer;
