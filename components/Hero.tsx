"use client";
import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container  flex flex-col flexCenter gap-20 py-10 pb-32 md:gap-28 lg:py-20 lg:flex-row">
      <span className="max-container absolute top-64 left-44 h-[144px] w-[777px] bg-indigo-400 rounded-full shadow-lg blur-[7rem] -z-20"></span>
      {/* left */}
      <div className="relative z-20 flex flex-1 flex-col pt-16">
        <h4 className="bold-20 text-indigo-500">Hello,</h4>
        <h1 className="bold-48 lg:bold-64 relative">
          I<span className="text-indigo-500">'</span>m Sahil Khatiwada
        </h1>
        <h2 className="bold-28 lg:bold-32 text-[1.8rem] capitalize">
          A
          <span className="text-indigo-500 ml-4">
            <Typewriter
              words={[
                "Full Stack Developer",
                "Frontend Developer",
                "Software Engineer",
                "Freelancer",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className="regular-15 max-w-[555px] my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          aspernatur perferendis omnis possimus, quia porro nihil nesciunt eius
          ratione pariatur doloribus officia quas corrupti amet?
        </p>
        {/* <div className="my-5 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  key={index}
                  src="/star.svg"
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="bold-18 lg:bold-20 text-indigo-500">
            1100+
            <span className="regular-16 lg:regular-20 ml-2 text-gray-90">
              Excellent Reviews
            </span>
          </p>
        </div> */}
        <div className="flexStart gap-1 pt-6">
          <Button
            type="button"
            title="Download CV"
            icon="/download.svg"
            variant="btn_dark_rounded"
          />
          <Button
            type="button"
            title="Contact me"
            icon="/arrow-right.svg"
            variant="btn_white_rounded"
          />
        </div>
      </div>
      {/* right */}
      <div className="flex flex-1 xl:flexEnd">
        <Image
          src="/bg.png"
          alt="bg"
          width={450}
          height={450}
          className="w-auto rounded-5xl"
        />
      </div>
    </section>
  );
};

export default Hero;
