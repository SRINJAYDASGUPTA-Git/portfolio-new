'use client'
import {experiences} from "@/data";
import React from "react";
import ExperienceItem from "@/components/ExperienceItem";

const Experience = () => {
  //Experience Component
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>
      <div className="w-full mt-12 gap-10 ">
          {experiences.map((experience, index) => (
                  <ExperienceItem key={index} experience={experience} />
          ))}
      </div>
    </div>
  );
};

export default Experience;
