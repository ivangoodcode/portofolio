import React from "react";
import Header from "@/components/Header";
import { heroTexts } from "@/data/text";

function Hero() {
  return (
    <div className="relative flex flex-col mb-8 md:block montserrat-font">
      <div className="relative z-10 order-first lg:max-w-screen-xl lg:mx-auto">
        <Header />
      </div>
      <div className="relative md:max-w-3/5 lg:max-w-screen-xl lg:mx-auto text-color-text">
        <div className="z-10 md:max-w-2xl md:w-full lg:pr-10">
          <main className="px-4 mx-auto max-w-7xl">
            <div className="lg:pt-[150px]">
              <p className="mt-28 sm:mt-10 mb-2 text-scale-1 sm:mb-4 text-[22px]">
                <span role="img" aria-label="wave">
                  👋
                </span>{" "}
                {heroTexts.greeting}
              </p>
              <h1 className="max-w-md md:max-w-none c-hero-headline font-display text-scale-6 mb-6 slide-vertical serif-font font-[700] leading-[70px] text-[#281952]">
                {heroTexts.headline}{" "}
                <span className="font-[400]">{heroTexts.headlineDetail}</span>
              </h1>
              <div className="sm:max-w-lg md:mx-auto md:max-w-full">
                <div style={{ opacity: 1, transform: "none" }}>
                  <p className="relative text-scale-1 text-[18px]">
                    {heroTexts.description}
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 w-7/12 sm:w-5/12 md:ml-0 -z-1 h-full ">
        <img
          className="object-cover w-full h-60 c-header-img xs:h-72 sm:h-80 md:h-full lg:w-full lg:h-full md:max-h-144 lg:max-h-200 2xl:max-h-full 
            transition-opacity delay-500 duration-1000 ease-out rounded-bl-[400px] object-[25%_25%]"
          src="/assets/images/hero.png"
          alt=""
          style={{ opacity: 1 }}
        />
      </div>
    </div>
  );
}

export default Hero;
