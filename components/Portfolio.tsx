import { PORTFOLIO } from "@/constants";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const Portfolio = () => {
  return (
    <section className="max-container padding-container mt-7 gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="text-center bold-18 uppercase tracking-[1rem] text-blue-500 pb-20">
        Portfolio
      </div>
      <ul className="mt-12 grid gap-14 md:grid-cols-2 xl:grid-cols-3 w-[95%] m-auto">
        {PORTFOLIO.map((portfolio) => (
          <PortfolioItem
            key={portfolio.title}
            imgURL={portfolio.ImgURL}
            title={portfolio.title}
            description={portfolio.description}
          />
        ))}
      </ul>
    </section>
  );
};
type PortfolioItem = {
  title: string;
  description: string;
  imgURL: string;
};
const PortfolioItem = ({ title, imgURL, description }: PortfolioItem) => {
  return (
    <li className="relative flex w-full flex-1 flex-col rounded-2xl border overflow-hidden group">
      <div className="group-hover:scale-110 group-hover:opacity-50 transition-all duration-1000">
        <Image src={imgURL} alt="map" width={500} height={500} />
      </div>
      <div className="px-6 py-4 text-black group-hover:bg-indigo-500 group-hover:text-white transition-all duration-1000">
        <h3 className="bold-18 lg:bold-20 my-4 capitalize">{title}</h3>
        <p className="regular-16 text-black-30 mb-4">{description}</p>
        <div className="flex gap-1 ">
          <button className="rounded-2xl bg-white px-4 py-2 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white">
            Read More
          </button>
          {/* <Button
            type="button"
            title="Read more"
            icon="/more.svg"
            variant="btn_dark_rounded"
          /> */}
          {/* <Button
            type="button"
            title="View Code"
            icon="/github.svg"
            variant="btn_white_rounded"
          /> */}
          <button className="ml-5 rounded-2xl bg-indigo-500 px-4 py-2 text-white group-hover:bg-white group-hover:text-indigo-500">
            View code
          </button>
        </div>
      </div>
    </li>
  );
};

export default Portfolio;
