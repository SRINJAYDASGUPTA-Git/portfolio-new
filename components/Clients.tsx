import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind Words from <span className="text-purple">satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="normal"
          className="md:hidden block"
        /> <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
          className="hidden md:block"
        />
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map(({ name, id, img, nameImg }) => (
            <div key={id} className="flex md:max-w-72  max-w-60 gap-2">
              {name === "Keyshade" ? (
                <img src={img} alt={name} className="md:w-44 w-32" />
              ) : (
                <img src={img} alt={name} className="md:w-16 w-11" />
              )}

              {nameImg && (
                <img src={nameImg} alt={name} className="md:w-24 w-[98px]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
