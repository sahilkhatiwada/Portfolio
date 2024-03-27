import { TESTIMONIAL } from "@/constants";
import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <section className="max-container padding-container gap-25 pb-32 md:gap-25 lg:py-25 xl:flex-row ">
      <div className="text-center bold-18 uppercase tracking-[1rem] text-blue-500 pb-20">
        Testimonial
      </div>
      <ul className="grid gap-14 md:grid-cols-2 xl:grid-cols-3  ">
        {TESTIMONIAL.map((testimonial) => (
          <TestimonialItem
            key={testimonial.title}
            title={testimonial.title}
            description={testimonial.description}
            imgURL={testimonial.ImgURL}
          />
        ))}
      </ul>
    </section>
  );
};

type TestimonialItem = {
  title: string;
  imgURL: string;
  description: string;
};

const TestimonialItem = ({ title, imgURL, description }: TestimonialItem) => {
  return (
    <li className="relative flex w-full flex-1 flex-col items-center text-center shadow-[0 3px 10px rgba(0,0,0,0.2)] rounded-2xl p-10 hover:bg-blue-500 hover:text-white     group duration-[1200ms] transition mt-8">
      <div className="absolute -top-8  ">
        <Image
          src={imgURL}
          height={66}
          width={66}
          alt="user"
          className="rounded-full shadow-xl border-4 border-indigo-300 "
        />
        <div className="absolute -top-8 right-0">
          <Image src="/quote.svg" height={44} width={44} alt="quote" />
        </div>
      </div>

      <h3 className="bold-20 lg:bold-22 mt-6 capitalize group-hover:text-white ">
        {title}
      </h3>
      <p className="regular-16 text-gray-30 group-hover:text-white my-4">
        {description}
      </p>
    </li>
  );
};

export default Testimonial;
