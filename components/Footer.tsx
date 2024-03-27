import { FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="max-container padding-container   px-6 pt-24 pb-8 text-black ">
      <div className="flexCenter flex-col gap-6">
        <div className="flexCenter gap-4">
          <p className="bold-18 text-indigo-500">Sahil Khatiwada</p>
        </div>
        <ul className="flexCenter gap-4">
          {FOOTER_LINKS.map((link) => (
            <li key={link.key} className="cursor-pointer">
              {link.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4 mt-10 text-indigo-500 ">
        {SOCIALS.map((social) => (
          <Image
            key={social.key}
            src={social.imgURL}
            alt="social"
            width={24}
            height={24}
            className="cursor-pointer group-hover:bg-indigo-500  rounded-full"
          />
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-black-30 ">
        &copy; 2024 Sahil Khatiwada. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
