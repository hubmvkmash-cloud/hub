interface FooterProps {
  onPolicyClick?: () => void;
}

const Footer = ({ onPolicyClick }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pb-18.5 xs:pb-[7px] lg:pb-5 1xl:pb-14.5 4xl:pb-17">
      <div className="section">
        <div className="pt-0 pb-0 xs:pb-17 lg:pb-5 4xl:pb-6.5">
          <div className="flex flex-row justify-between 1xl:justify-none mb-10.5 xs:mb-15 lg:mb-8 4xl:mb-15">
            <div className="flex flex-row items-start  gap-x-[5px] xs:gap-x-[6px] lg:gap-x-2.5 4xl:gap-x-3">
              <a href="/" className="flex gap-1.5">
                <span className="sr-only">Повернутись на головну</span>
                <svg className="w-[30px] h-[42px] xs:w-[36px] xs:h-[50px] lg:w-[56px] lg:h-[78px] 4xl:w-[68px] 4xl:h-[96px] fill-tangerine group-hover:fill-tangerine transition-colors duration-300">
                  <use href="/images/svg/icons.svg#icon-logo" />
                </svg>
                <div className="flex flex-col pt-1.5 xs:pt-2 lg:pt-3 4xl:pt-5">
                  <span className="leading-[120%] xs:text-xl lg:text-[32px] 4xl:text-[38px] text-tangerine font-semibold font-second">
                    MVK MASH
                  </span>
                  <span className="text-[11px] leading-[120%] xs:text-sm lg:text-[22px] 4xl:text-[26px] text-white font-second">
                    SMART LOCKERS
                  </span>
                </div>
              </a>
            </div>
            {/*Cоціальні мережі*/}
            <div className="flex gap-x-3 xs:gap-x-4 lg:gap-x-5 lg:pt-4 lg:w-1/2 4xl:gap-x-14">
              <a
                href="https://t.me/HUB_mvk_mash"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="group"
              >
                <svg className="w-10.5 h-10.5 xs:w-12 xs:h-12 lg:w-14 lg:h-14 4xl:w-20.5 4xl:h-20.5 fill-tangerine hover:fill-chilean-fire focus:fill-chilean-fire transition-colors duration-300">
                  <use href="/images/svg/icons.svg#icon-telegram" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/HUB_mvk_mash"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group"
              >
                <svg className="w-10.5 h-10.5 xs:w-12 xs:h-12 lg:w-14 lg:h-14 4xl:w-20.5 4xl:h-20.5 fill-tangerine hover:fill-chilean-fire focus:fill-chilean-fire transition-colors duration-300">
                  <use href="/images/svg/icons.svg#icon-insta" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@hub.mvkmash"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tik-Tok"
                className="group"
              >
                <svg className="w-10.5 h-10.5 xs:w-12 xs:h-12 lg:w-14 lg:h-14 4xl:w-20.5 4xl:h-20.5 fill-tangerine hover:fill-chilean-fire focus:fill-chilean-fire transition-colors duration-300">
                  <use href="/images/svg/icons.svg#icon-Union" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col lg:order-2 lg:self-end lg:w-1/2">
              <h3 className="self-start leading-[120%] 4xl:text-xl/[120%] font-medium font-second mb-6 xs:mb-4.5 4xl:mb-6">
                Надсилайте свої запитання та пропозиції
              </h3>

              <div className="flex flex-col xs:flex-row mb-9 xs:mb-13 4xl:mb-0">
                <div className="flex flex-col gap-y-[2px] xs:gap-y-[5px] flex-1 mb-3 xs:mb-0 3xl:flex-none 3xl:mr-34 4xl:mr-50 items-start">
                  <p className="font-medium leading-[120%] 4xl:text-xl/[120%] text-mountain-mist">
                    Запитання:
                  </p>
                  <a
                    href="mailto:hub@smart-hubmvk.com"
                    className="font-semibold leading-[125%] 4xl:text-lg/[111%] hover:underline"
                  >
                    hub@smart-hubmvk.com
                  </a>
                </div>

                <div className="flex flex-col gap-y-[5px] flex-1 items-start">
                  <p className="font-medium leading-[120%] 4xl:text-xl/[120%] text-mountain-mist">
                    Контакти:
                  </p>
                  <p className="font-semibold leading-[125%] 4xl:text-lg/[111%]">
                    м. Київ, вул. Солом’янська 3
                    <a
                      href="tel:+380502138055"
                      className="block hover:underline"
                    >
                      +38 (050) 213 80 55
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:w-1/2 4xl:flex-row">
              <div className="flex flex-row 4xl:order-2 mb-11 xs:mb-9.5 lg:mb-8 4xl:mb-0  1xl:whitespace-nowrap">
                <a
                  href="#"
                  className="text-lg/[126%] tracking-[-0.03em] text-mountain-mist underline hover:text-tangerine group-focus:tangerine transition-colors duration-300"
                  onClick={e => {
                    e.preventDefault();
                    onPolicyClick?.();
                  }}
                >
                  Політика конфіденційності
                </a>
              </div>

              <div className="flex flex-col gap-4 lg:max-w-[296px] 1xl:max-w-[280px] 4xl:mr-24">
                <p className="leading-[120%] font-medium text-mountain-mist">
                  © 2003–{currentYear} ТОВ «MBK МАШ»
                </p>
                <p className="leading-[120%] font-medium text-mountain-mist lg:text-left">
                  Всі права захищені. Використання матеріалів сайту можливе
                  тільки з посиланням на джерело.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
