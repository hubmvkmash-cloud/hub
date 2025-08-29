import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';
import { galleryImages as images } from '../../data/gallery-image';

const OurHubsGallery = () => {
  const [active, setActive] = useState(0);
  const swiperRef = useRef<any>(null);

  const getSlideConfig = () => {
    const w = window.innerWidth;
    if (w >= 2560) return { width: 1156, height: 769, peek: 421, gap: 120 };
    if (w >= 1920) return { width: 1156, height: 769, peek: 262, gap: 120 };
    if (w >= 1440) return { width: 1082, height: 720, peek: 40, gap: 112 };
    if (w >= 1024) return { width: 1024, height: 827, peek: 0, gap: 0 };
    if (w >= 568) return { width: 568, height: 654, peek: 0, gap: 0 };
    if (w >= 375) return { width: 375, height: 554, peek: 0, gap: 0 };
    return { width: 1024, height: 827, peek: 0, gap: 0 };
  };

  const { width: slideW, height: slideH, peek, gap } = getSlideConfig();

  return (
    <section
      className="relative pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70"
      role="region"
      aria-roledescription="carousel"
      aria-label="Галерея наших HUBів"
      tabIndex={0}
      aria-labelledby="gallery-title"
    >
      <div className="section overflow-hidden px-0">
        <h2 className="sr-only">Наші HUBи</h2>
        {/* Верхній еліпс + заголовок */}
        <div className="relative mx-auto pt-6 pb-11.5 px-0 xs:pt-43 lg:pt-[83px] 3xl:pt-[116px] 3xl:pb-0">
          <div className="absolute inset-x-0 z-10 -top-8 xs:top-35 lg:-top-1 1xl:top-10 3xl:top-1 4xl:-top-1 pointer-events-none">
            <svg
              className="w-full h-full max-w-[375px] max-h-[200px] xs:max-w-[568px] lg:max-w-[1024px] 1xl:max-w-[1440px] 3xl:max-w-[1920px] 4xl:max-w-[2560px] fill-cod-black
              "
              aria-hidden="true"
            >
              <use href="/images/svg/icons.svg#icon-Ellipse-top" />
            </svg>
            <h2
              id="gallery-title"
              className="absolute inset-0 z-20 flex items-center justify-center -top-15 xs:-top-20 lg:-top-20 1xl:-top-20 3xl:-top-28 4xl:-top-18 text-dust-white text-[22px]/[110%] xs:text-[32px]/[110%] 1xl:text-[42px] 3xl:text-[54px] 4xl:text-[62px] tracking-[-0.02em] font-second 4xl:font-medium"
            >
              Наші HUBи
            </h2>
          </div>

          {/* Слайдер */}
          <div
            className="relative overflow-hidden"
            style={{ paddingLeft: peek, paddingRight: peek }}
          >
            {/* Градієнти */}
            <div
              className="hidden 3xl:block  pointer-events-none absolute inset-0 z-20 -left-[100px] -right-[100px]"
              style={{
                background: `
                  linear-gradient(
                    to right,
                    rgba(8, 8, 8, 0.8) 0%,
                    rgba(8, 8, 8, 0.4) 10%,
                    rgba(8, 8, 8, 0) 25%,
                    rgba(8, 8, 8, 0) 75%,
                    rgba(8, 8, 8, 0.4) 90%,
                    rgba(8, 8, 8, 0.8) 100%
                  ),
                  linear-gradient(
                    to left,
                    rgba(8, 8, 8, 0.8) 0%,
                    rgba(8, 8, 8, 0.4) 10%,
                    rgba(8, 8, 8, 0) 25%,
                    rgba(8, 8, 8, 0) 75%,
                    rgba(8, 8, 8, 0.4) 90%,
                    rgba(8, 8, 8, 0.8) 100%
                  )
                `,
                backgroundBlendMode: 'multiply',
              }}
            />

            <Swiper
              modules={[Mousewheel]}
              slidesPerView="auto"
              centeredSlides
              loop={true}
              spaceBetween={gap}
              mousewheel={{
                forceToAxis: true,
                sensitivity: 1,
              }}
              onSwiper={swiper => (swiperRef.current = swiper)}
              onRealIndexChange={swiper => {
                setActive(swiper.realIndex);
              }}
            >
              {images.map((fileName, idx) => {
                return (
                  <SwiperSlide
                    key={idx}
                    style={{
                      width: slideW,
                      height: slideH,
                      willChange: 'transform',
                    }}
                  >
                    <picture>
                      {/* WebP 2x */}
                      <source
                        srcSet={`/images/webp/hub-gallery/${fileName.replace(
                          '.webp',
                          '-2x.webp'
                        )}`}
                        type="image/webp"
                        media="(min-resolution: 192dpi)"
                      />

                      {/* Звичайний WebP */}
                      <source
                        srcSet={`/images/webp/hub-gallery/${fileName}`}
                        type="image/webp"
                      />

                      {/* Fallback PNG or JPEG if needed */}
                      <img
                        src={`/images/webp/hub-gallery/${fileName}`}
                        alt={`HUB ${idx + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </picture>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* Нижній еліпс */}
            <div className="absolute h-[200px] -bottom-20 lg:-bottom-21 1xl:-bottom-20 3xl:-bottom-10 4xl:-bottom-2 z-10 inset-x-0 pointer-events-none overflow-hidden">
              <svg className="w-full h-full max-w-[375px] xs:max-w-[568px] lg:max-w-[1024px] 1xl:max-w-[1440px] 3xl:max-w-[1920px] 4xl:max-w-[2560px] fill-cod-black">
                <use href="/images/svg/icons.svg#icon-Ellipse-45-7" />
              </svg>
            </div>

            {/* Індикатори */}
            <ul className="absolute bottom-0 xs:-bottom-1 lg:-bottom-1 1xl:-bottom-1 3xl:bottom-10 4xl:bottom-15 left-1/2 z-20 transform -translate-x-1/2 flex gap-2.5">
              {images.map((_, idx) => (
                <li key={idx}>
                  <button
                    type="button"
                    onClick={() => {
                      const swiper = swiperRef.current;
                      if (swiper && swiper.slideToLoop) {
                        swiper.slideToLoop(idx, 0);
                      }
                    }}
                    aria-label={`Перейти до слайду ${idx + 1}`}
                    aria-current={active === idx ? 'true' : undefined}
                    className={`h-2 rounded-[34px] xs:rounded-4xl transition-all ${
                      active === idx
                        ? 'w-17 bg-masala-light'
                        : 'w-7.5 bg-woodsmoke-dust'
                    }`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHubsGallery;
