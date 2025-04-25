import React from "react";

function Hero() {
  return (
    <div className="relative flex flex-col mb-8 md:block montserrat-font">
      <div className="relative z-10 order-first lg:max-w-screen-xl lg:mx-auto">
        <ul className="p-4 flex max-w-[700px] justify-between">
          <li>
            <a
              href="tel:+31620842105"
              className="flex items-center space-x-2 group hover:text-indigo-600 h-12 -my-6 md:my-auto md:h-auto"
            >
              <svg
                className="w-4 h-4 opacity-40 group-hover:opacity-70"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                height="16"
                width="16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              <span>+385 99 473 4445</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:ivan@goodcode.dev"
              className="flex items-center space-x-2 group hover:text-indigo-600 h-12 -my-6 md:my-auto md:h-auto"
            >
              <svg
                className="w-4 h-4 mt-0.5 opacity-40 group-hover:opacity-70"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                height="16"
                width="16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              <span>ivan@goodcode.dev</span>
            </a>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center space-x-2 group hover:text-indigo-600 h-12 -my-6 md:my-auto md:h-auto"
            >
              <svg
                className="w-4 h-4 mt-0.5 opacity-40 group-hover:opacity-70"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                height="16"
                width="16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                ></path>
              </svg>
              <span>Croatia</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="relative md:max-w-3/5 lg:max-w-screen-xl lg:mx-auto">
        <div className="z-10 md:max-w-2xl md:w-full lg:pr-10">
          <main className="px-4 mx-auto max-w-7xl">
            <div className="lg:pt-[150px]">
              <p className="mt-28 sm:mt-10 mb-2 text-scale-1 sm:mb-4 text-[#281952] text-[22px]">
                <span role="img" aria-label="wave">
                  👋
                </span>{" "}
                Hi, I am Ivan Maric,
              </p>
              <h1 className="max-w-md md:max-w-none c-hero-headline font-display text-scale-6 mb-6 slide-vertical serif-font font-[700] leading-[70px] text-[#281952]">
                Freelance front-end developer{" "}
                <span className="font-[400]">
                  with a passion for clean code and arhitecture
                </span>
              </h1>
              <div className="sm:max-w-lg md:mx-auto md:max-w-full">
                <div style={{ opacity: 1, transform: "none" }}>
                  <p className="relative text-scale-1 text-[18px]">
                    I enjoy building solid and user-friendly web applications
                    using my experience in interface design, TypeScript and
                    <span>
                      &nbsp; . Additionally, I am a certified scrum master. If
                      you need a communicative front-end developer who enjoys
                      working as part of a team, I’d love to hear from you!
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 w-7/12 sm:w-5/12 md:ml-0 -z-1 h-full ">
        <img
          className="object-cover w-full h-60 c-header-img xs:h-72 sm:h-80 md:h-full lg:w-full lg:h-full md:max-h-144 lg:max-h-200 2xl:max-h-full transition-opacity delay-500 duration-1000 ease-out rounded-bl-[400px] object-[25%_25%]"
          src="/assets/images/hero.png"
          alt=""
          style={{ opacity: 1 }}
        />
      </div>
    </div>
  );
}

export default Hero;
