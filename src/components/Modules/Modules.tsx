import { useState, useEffect } from 'react';
import { modules } from '../../data/hub-modules';

const Modules = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Коли змінюється activeIndex — скидаємо флаг
  useEffect(() => {
    setIsImageLoaded(false);
  }, [activeIndex]);

  const getButtonWidth = (index: number, activeIndex: number): string => {
    const isActive = index === activeIndex;
    const sameRow = Math.floor(index / 4) === Math.floor(activeIndex / 4);

    if (isActive) return 'w-[188px] xs:w-[310px]';
    if (sameRow) return 'w-[52px] xs:w-[64px]';
    return 'w-[86px] xs:w-[125.5px]';
  };

  return (
    <section id="modules" className="pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70">
      <div className="section p-0 xs:px-6 lg:px-8 1xl:px-10 3xl:px-23 4xl:px-40">
        <h2 className="sr-only">
          Модульні шафи самообслуговування для магазинів, аеропортів, тощо
        </h2>
        <div className="1xl:pt-14.5 4xl:pt-6.5 1xl:pb-4.5 3xl:py-4.5 4xl:pb-4.5 1xl:px-4.5 4xl:px-6.5 1xl:bg-cod-dark mb-10">
          {modules.map((module, index) => {
            const isActive = index === activeIndex;
            const {
              title,
              description,
              size,
              voltage,
              characteristic,
              weight,
              pictureShort,
            } = module;

            return (
              <div
                key={index}
                role="tabpanel"
                id={`tabpanel-${index}`}
                aria-labelledby={`tab-${index}`}
                aria-hidden={!isActive}
                hidden={!isActive}
                className="mb-5.5 1xl:mb-4 3xl:mb-1.5 flex flex-col 1xl:flex-row-reverse items-center 3xl:items-start gap-5.5 xs:gap-9.5 1xl:gap-15.5 4xl:gap-[158px] 1xl:justify-center 3xl:justify-end"
              >
                <div className="px-3 flex flex-col gap-5.5 xs:gap-9.5 1xl:gap-[71px] 3xl:gap-[92px] 4xl:gap-[58px] 3xl:pt-15.5 4xl:pt-13.5 1xl:max-w-[606px] 3xl:max-w-[522px] 4xl:max-w-[735px] w-full">
                  <div className="4xl:max-w-[522px]">
                    <div className="mb-5 xs:mb-13.5 lg:mb-9.5 4xl:mb-14">
                      <h3 className="font-second capitalize text-[22px]/[110%] xs:text-[28px] lg:text-3xl 3xl:leading-[75%] tracking-[-0.02em] mb-4 xs:mb-3 lg:mb-4.5">
                        {title}
                      </h3>
                      <p className="font-medium min-h-[80px] xs:min-h-[60px] text-boulder-dark leading-[125%] 4xl:text-lg/[111%]">
                        {description}
                      </p>
                    </div>

                    <ul className="flex flex-wrap gap-x-3 gap-y-3 xs:gap-y-8">
                      <li className="flex flex-col gap-1.5 min-w-[230px]">
                        <p className="text-base/[137%] xs:text-lg/[122%] font-medium text-chicago-gray">
                          Розмір:
                        </p>
                        <p className="text-lg/[156%] font-semibold xs:text-[22px]/[127%]">
                          {size}
                        </p>
                      </li>
                      <li className="flex flex-col gap-1.5 min-w-[230px]">
                        <p className="text-base/[137%] xs:text-lg/[122%] font-medium text-chicago-gray">
                          Напруга живлення:
                        </p>
                        <p className="text-lg/[156%] font-semibold xs:text-[22px]/[127%]">
                          {voltage}
                        </p>
                      </li>
                      <li className="flex flex-col gap-1.5 min-w-[230px]">
                        <p className="text-base/[137%] xs:text-lg/[122%] font-medium text-chicago-gray">
                          Потужність:
                        </p>
                        <p className="text-lg/[156%] font-semibold xs:text-[22px]/[127%]">
                          {characteristic}
                        </p>
                      </li>
                      <li className="flex flex-col gap-1.5 min-w-[230px]">
                        <p className="text-base/[137%] xs:text-lg/[122%] font-medium text-chicago-gray">
                          Вага:
                        </p>
                        <p className="text-lg/[156%] font-semibold xs:text-[22px]/[127%]">
                          {weight}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                <picture>
                  <source
                    srcSet={`
                /images/modules-desktop/${pictureShort}-1x.webp 1x,
                /images/modules-desktop/${pictureShort}-2x.webp 2x,
                /images/modules-desktop/${pictureShort}-4x.webp 4x
              `}
                    media="(min-width: 1440px)"
                    type="image/webp"
                  />
                  <source
                    srcSet={`
              /images/modules-mobile/${pictureShort}-1x.webp 1x,
              /images/modules-mobile/${pictureShort}-2x.webp 2x,
              /images/modules-mobile/${pictureShort}-4x.webp 4x
            `}
                    media="(min-width: 375px)"
                    type="image/webp"
                  />
                  <img
                    src={`/images/modules-mobile/${pictureShort}-1x.webp`}
                    srcSet={`/images/modules-mobile/${pictureShort}-2x.webp 2x, /images/modules-mobile/${pictureShort}-4x.webp 4x`}
                    alt={title}
                    loading="lazy"
                    onLoad={() => setIsImageLoaded(true)}
                    className={`
              transition-opacity duration-700 ease-in-out
              ${isImageLoaded ? 'opacity-100' : 'opacity-0'}
              w-[375px] xs:w-[520px] lg:w-[952px] 1xl:w-[656px] 3xl:w-[844px] 4xl:w-[945px]
              h-[260px] xs:h-[362px] lg:h-[516px] 3xl:h-[582px] 4xl:h-[558px]
            `}
                  />
                </picture>
              </div>
            );
          })}

          <ul
            role="tablist"
            aria-label="Оберіть вкладку"
            className="px-2 xs:px-0 flex flex-wrap justify-between gap-1 xs:gap-1.5 4xl:gap-x-3 1xl:justify-center 3xl:justify-between"
          >
            {modules.map((module, index) => {
              const isActive = index === activeIndex;

              return (
                <li key={index} role="presentation">
                  <button
                    type="button"
                    role="tab"
                    id={`tab-${index}`}
                    aria-controls={`tabpanel-${index}`}
                    aria-selected={isActive}
                    aria-label={`Перейти до вкладки ${module.title}`}
                    onClick={() => setActiveIndex(index)}
                    className={`flex items-center justify-center lg:justify-normal gap-2.5 xs:gap-4 lg:gap-2.5 1xl:gap-4 py-2.5 px-3.5 xs:p-3.5 lg:py-7 1xl:px-8 rounded-lg transition-colors duration-300 
                  ${getButtonWidth(
                    index,
                    activeIndex
                  )} lg:w-[230px] 1xl:w-[320px] 3xl:w-[410px] 4xl:w-[522px]
                  ${isActive ? 'bg-woodsmoke-black' : 'bg-cod-dark'}`}
                  >
                    <svg
                      className={`w-5.5 h-5.5 xs:w-8.5 xs:h-8.5  ${
                        isActive ? 'fill-tangerine' : 'fill-boulder-gray'
                      }`}
                      aria-hidden="true"
                    >
                      <use
                        href={`/images/svg/icons.svg#icon-${module.iconNumber}`}
                      ></use>
                    </svg>
                    <p
                      className={`uppercase font-semibold text-[10px]/[200%] xs:text-base lg:text-sm/[229%] 1xl:text-lg/[178%] 4xl:text-[22px]/[145%] ${
                        isActive
                          ? 'text-tangerine'
                          : 'sr-only lg:not-sr-only text-boulder-gray'
                      }`}
                    >
                      {module.title}
                    </p>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <a
          href="#more-info"
          aria-label="Перейти до форми замовлення"
          className="flex items-center gap-4 justify-between xs:ml-auto xs:min-w-[280px] lg:min-w-[290px] 4xl:min-w-[358px] 4xl:text-xl font-bold bg-tangerine text-cod-gray leading-none tracking-[-0.02em] py-3.5 xs:py-4 4xl:py-5.5 px-6 4xl:px-6 rounded-[45px] hover:bg-chilean-fire focus:bg-chilean-fire transition-colors duration-300 xs:w-fit"
        >
          <span>Хочу замовити!</span>
          <svg className="w-4.5 h-4.5 stroke-cod-gray">
            <use href={`/images/svg/icons.svg#icon-arrow-up-right`}></use>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Modules;
