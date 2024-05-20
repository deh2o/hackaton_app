/* eslint-disable react/jsx-key */
"use client";

import { heroItems } from "../constants";
import { Carousel } from "flowbite-react";
import Button from "../components/Button";

import ebs from "../assets/images/ebonyiia.png";

const Home = () => {
  return (
    <div className="bg-primary h-screen relative" id="home">
      <Carousel className="w-full h-full">
        {heroItems.map((item) => (
          <div className="relative w-full h-full mt-4 lg:mt-0">
            <div className="absolute inset-0">
              <img
                className="w-full h-full object-cover mt-0"
                src={item.bgImg}
                alt="Background"
              />
              <div className="absolute inset-0 bg-Tint3 opacity-50"></div>
            </div>
            <div className="relative flex flex-col md:flex-row-reverse items-center justify-between px-7.5 lg:px-8 xl:px-12 max-lg:py-4">
              <div className="mt-[6rem] md:mt-[4rem] lg:mt-[12rem] z-10">
                <img className="w-56 lg:w-80" src={ebs} alt="" />
              </div>
              <div className="md:w-1/2 text-secondary z-10 relative">
                <h1 className="text-3xl lg:text-5xl font-semibold mb-4 mt-6 md:mt-[12rem] lg:mt-[14rem] text-Secondary md:w-3.5/4 leading-snug block flex flex-col items-left">
                  <span>{item.title}</span>
                  <span className="text-primary leading-snug">{item.slug}</span>
                </h1>
                <p className="text-secondary mb-4 md:mt-4">{item.detail}</p>
                <Button className="mb-12 md:mt-8">Visit Our Meat Market</Button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
