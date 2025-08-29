import { useState } from 'react';
import SmartButton from '../ui/Button/SmartButton';
import { products } from '../../data/products'; // або локально в файлі

export default function Product() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const currentProduct = products[currentIndex];

  return (
    <section className="pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70">
      <div className="section flex flex-col 1xl:flex-row-reverse 1xl:justify-end">
        <h2 className="font-semibold font-second text-[32px]/[110%] text-mercury-white sr-only">
          Product Page
        </h2>

        <div className="mb-9 min-h-40 xs:min-h-60 1xl:min-h-80 3xl:min-h-130 lg:mb-15 w-full flex lg:items-center justify-center">
          <img
            src={currentProduct.png}
            alt={currentProduct.type}
            className="max-w-full max-h-40 xs:max-h-60 lg:max-h-80 3xl:max-h-130 4xl:max-h-160 h-full"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col 1xl:w-1/2 1xl:justify-start 3xl:justify-center">
          <ul className="flex flex-col lg:flex-row md:flex-wrap lg:justify-between 1xl:flex-col gap-y-4.5 4xl:gap-y-14 mb-15 1xl:mb-27 4xl:mb-35 1xl:gap-10.5">
            <li className="flex flex-col gap-2 4xl:gap-3 max-w-[260px] w-1/2">
              <h3 className="font-medium text-base/[137%] 1xl:text-lg/[122%] 4xl:text-[22px]/[118%] text-chicago-gray">
                Тип комбінації:
              </h3>
              <p className="font-semibold text-[18px]/[156%] xs:text-xl/[140%] lg:text-[22px]/[127%] 1xl:text-[26px]/[108%]4xl:text-[34px]/[108%]  text-mercury-white">
                {currentProduct.type}
              </p>
            </li>
            <li className="flex flex-col gap-2 4xl:gap-3 max-w-[260px] w-1/2">
              <h3 className="font-medium text-base/[137%] 1xl:text-lg/[122%] 4xl:text-[22px]/[118%] text-chicago-gray">
                Розмір:
              </h3>
              <p className="font-semibold text-[18px]/[156%] xs:text-xl/[140%] lg:text-[22px]/[127%] 1xl:text-[26px]/[108%] 4xl:text-[34px]/[108%] text-mercury-white">
                {currentProduct.size}
              </p>
            </li>
            <li className="flex flex-col gap-2 4xl:gap-3 lg:max-w-[420px] 1xl:max-w-[720px]">
              <h3 className="font-medium text-base/[137%] 1xl:text-lg/[122%] 4xl:text-[22px]/[118%] text-chicago-gray">
                Склад:
              </h3>
              <p className="font-semibold min-h-28 text-[18px]/[156%] xs:text-xl/[140%] lg:text-[22px]/[127%] 1xl:text-[26px]/[108%] 1xl:min-h-[112px] 4xl:text-[34px]/[108%] text-mercury-white lg:min-w-90">
                {currentProduct.composition}
              </p>
            </li>
          </ul>

          <div className="flex gap-2 lg:justify-center 1xl:justify-start 4xl:gap-5">
            <button
              onClick={handlePrev}
              aria-label="Попередній слайд"
              className="flex justify-center shrink-0 items-center w-13 h-13 4xl:w-16 4xl:h-16 bg-cod-gray rounded-full border-tangerine border"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6 4xl:w-8 4xl:h-8 stroke-tangerine rotate-180 hover:stroke-chilean-fire focus:stroke-chilean-fire transition-colors duration-300"
              >
                <use href="/images/svg/icons.svg#icon-arrow-right" />
              </svg>
            </button>

            <SmartButton
              className="1xl:max-w-70 lg:grow-0 lg:max-w-75 lg:w-full 4xl:max-w-90 4xl:max-h-16 1xl:w-full grow-1 font-extrabold"
              label="Дізнатись більше"
              href="#more-info"
              variant="secondary"
            />

            <button
              onClick={handleNext}
              aria-label="Наступний слайд"
              className="flex justify-center shrink-0 items-center w-13 h-13 4xl:w-16 4xl:h-16 bg-cod-gray rounded-full border-tangerine border"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6 4xl:w-8 4xl:h-8 stroke-tangerine hover:stroke-chilean-fire focus:stroke-chilean-fire transition-colors duration-300"
              >
                <use href="/images/svg/icons.svg#icon-arrow-right" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
