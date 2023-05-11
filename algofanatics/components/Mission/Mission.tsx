import Image from "next/image";
import React from "react";

const Mission = () => {
  return (
    <main>
      <section className="lg:pt-28 pt-16 px-5 container mx-auto flex items-center flex-col lg:flex-row">
        <div className="lg:block hidden">
          <Image
            src="/assets/header/mission.svg"
            alt="mission"
            width={646}
            height={388}
          />
        </div>
        
        <div className="lg:pl-16 text-justify lg:max-w-xl font-normal w-full">
          <h1 className="text-3xl lg:text-4xl font-work font-semibold">Our Mission</h1>
          <p className="py-3 lg:text-lg font-nunito text-sm md:text-lg leading-10">
            Our mission at Algofanatics is to empower struggling developers by
            providing them with the tools, resources, and guidance they need to
            navigate the ever-changing landscape of the software development
            market.
          </p>
          <ul className="list-disc font-nunito px-2 py-4 lg:text-base md:text-base text-sm leading-10 ">
          <li>
            We believe that every developer, regardless of their background or
            experience, has the potential to succeed in this industry
          </li>
          <li className="py-2">
            We offer practical advice, industry insights, and opportunities for
            professional growth
          </li>
          <li>
            By doing these, we aim to create a community of developers who are
            confident, capable, and passionate about their work
          </li>
          </ul>
        
        </div>
      </section>
    </main>
  );
};

export default Mission;