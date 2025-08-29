// import { useState } from 'react';
import { business } from '../../data/hub-business';

type HubBusinessProps = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

const HubBusiness = ({ activeIndex, setActiveIndex }: HubBusinessProps) => {
  const { advantages, buttonLabel, presentationBtn, helpText } =
    business[activeIndex];

  const getButtonWidth = (index: number, activeIndex: number): string => {
    const isActive = index === activeIndex;
    if (isActive) return 'xs:w-[372px]';
    return 'w-full xs:w-[68px]';
  };

  return (
    <section className="pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70">
      <div className="section">
        <h2 className="leading-[110%] tracking-[-0.02em] font-second text-center lg:text-left text-mercury-white mb-8 4xl:font-medium 4xl:mb-15">
          Ваш бізнес з HUB
        </h2>

        <div
          id="business"
          className="flex flex-col gap-1 1xl:gap-2.5 3xl:gap-3 4xl:gap-4"
        >
          <ul className="flex gap-1.5 1xl:gap-2.5 3xl:gap-3 4xl:gap-4">
            {business.map((business, index) => {
              const isActive = index === activeIndex;

              return (
                <li key={index} className="w-full">
                  <button
                    type="button"
                    aria-pressed={isActive}
                    aria-label={`Вкладка ${business.role}`}
                    onClick={() => setActiveIndex(index)}
                    className={`flex items-center rounded-lg justify-center px-4 min-h-16 transition-colors duration-300
                      ${getButtonWidth(
                        index,
                        activeIndex
                      )} lg:w-full 1xl:min-h-32 4xl:min-h-41
                     ${
                       isActive
                         ? 'bg-woodsmoke-black text-tangerine'
                         : 'bg-cod-dark text-boulder-gray'
                     }`}
                  >
                    <span
                      className={`font-second tracking-[-0.02em] text-[22px]/[110%] 1xl:text-[26px]/[110%] capitalize 4xl:text-4xl
                      ${!isActive ? 'sr-only lg:not-sr-only' : ''}`}
                    >
                      {business.role}
                    </span>
                    <svg
                      className={`w-8.5 h-8.5 fill-boulder-gray lg:hidden 
                      ${isActive ? 'hidden' : ''}`}
                      aria-hidden="true"
                    >
                      <use
                        href={`/images/svg/icons.svg#icon-${business.icon}`}
                      />
                    </svg>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex flex-col gap-14 px-3 pt-3 pb-4.5 xs:px-7 xs:pb-6.5 lg:px-10 lg:py-9 bg-cod-dark rounded-lg 1xl:flex-row 1xl:gap-24 1xl:px-11 1xl:py-10 1xl:justify-between  1xl:min-h-[542px] 3xl:gap-49 3xl:justify-start 4xl:gap-116 4xl:min-h-[686px] 3xl:px-18 4xl:py-22">
            <ul className="flex flex-col gap-5 lg:min-h-[376px] 1xl:gap-10 lg:justify-around">
              {advantages.map((advantage, index) => {
                return (
                  <li
                    key={index}
                    className="grid grid-rows-2 gap-x-2 grid-cols-10 xs:grid-cols-16 items-center lg:gap-y-1"
                  >
                    <span className="flex items-center justify-center col-span-1 text-4xl/[145%] xs:text-4xl/[183%] font-extralight text-masala-gray lg:text-[64px]/[103%]  lg:row-span-2 4xl:text-[86px]/[77%]">
                      {index + 1}
                    </span>
                    <span className="col-span-9 xs:col-span-15 text-lg xs:text-2xl/[117%] font-semibold tracking-[-0.02em] 3xl:tracking-normal 1xl:text-[32px]/[87%] lg:col-span-15 1xl:min-w-[824px] 3xl:min-w-[854px] 4xl:text-[34px]/[82%] 4xl:min-w-[910px]">
                      {advantage.title}
                    </span>
                    <span className="text-base/[137%] text-boulder-dust col-span-10 xs:col-span-16 lg:col-span-15 1xl:text-lg/[122%] lg:max-w-[644px] 1xl:max-w-[670px] 4xl:text-xl/[110%] 4xl:max-w-[890px]">
                      {advantage.description}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="flex flex-col lg:justify-between 1xl:justify-around lg:flex-row 1xl:flex-col 1xl:max-w-[280px] 4xl:max-w-[364px]">
              <div className="text-base/[137%] font-medium text-silver mb-21 lg:mb-0 lg:max-w-[476px] 1xl:text-lg/[122%] 4xl:text-[22px]/[100%]">
                <p className="mb-5">{helpText}</p>
                <p className="">
                  Також ви можете ознайомитись з нашими пропозиціями в
                  презентації.
                </p>
              </div>

              <div className="flex gap-3 lg:flex-col lg:min-w-[280px] 1xl:gap-4 4xl:gap-5">
                <a
                  href="#"
                  download={`${presentationBtn}.pdf`}
                  aria-label="Завантажити презентацію"
                  className="group flex p-4 border-1 rounded-full border-tangerine lg:py-4.5 lg:px-6 items-center lg:justify-between hover:border-chilean-fire focus:outline-chilean-fire focus:outline-2 transition-colors duration-300 4xl:py-5.5"
                >
                  <span className="hidden lg:block text-tangerine group-hover:text-chilean-fire group-focus:text-chilean-fire transition-colors duration-300 text-base/[100%] 4xl:text-xl">
                    {presentationBtn}
                  </span>
                  <svg className="w-5 h-5 fill-tangerine group-hover:fill-chilean-fire transition-colors duration-300">
                    <use href="/images/svg/icons.svg#icon-pdf" />
                  </svg>
                </a>

                <a
                  href="#more-info"
                  className="flex items-center gap-8 justify-between w-full font-bold px-6 py-4.5 rounded-[45px] text-base/[100%] 4xl:text-xl text-cod-gray bg-tangerine hover:bg-chilean-fire focus:bg-chilean-fire transition-colors duration-300"
                >
                  <span className="text-base/[100%] 4xl:text-xl">
                    {buttonLabel}
                  </span>
                  <svg className="w-4.5 h-4.5 stroke-cod-gray">
                    <use href="/images/svg/icons.svg#icon-arrow-up-right" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HubBusiness;
