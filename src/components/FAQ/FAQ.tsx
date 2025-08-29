import { faqItems } from '../../data/faq-items';
import AskUsButton from '../AskUsButton/AskUsButton';

const FAQ = () => {
  return (
    <section className="pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70">
      <div className="section">
        <div className="flex flex-col 1xl:flex-row 1xl:justify-start 1xl:gap-24 4xl:gap-55">
          {/* Left: h2 + desktop-only button */}
          <div className="flex flex-col lg:flex-row  lg:justify-between 1xl:justify-start 1xl:flex-col 1xl:items-start 1xl:w-[362px] 3xl:w-[488px] 4xl:w-[534px] 1xl:gap-8.5 3xl:gap-12.5 4xl:gap-10.5 4xl:pt-2.5 mb-8 xs:mb-12 lg:mb-26.5 1xl:mb-0">
            <h2 className="leading-[110%] text-[22px] xs:text-[32px] lg:text-[40px] 1xl:text-[42px] 3xl:text-5xl 4xl:text-[62px] font-second font-medium text-center 1xl:text-left tracking-[-0.02em] whitespace-nowrap">
              Часті питання
            </h2>
            <AskUsButton targetId="more-info" className="hidden lg:flex" />
          </div>
          {/*Right: list */}
          <ul className="flex flex-col w-full gap-10.5 xs:gap-21 lg:gap-10.5 1xl:gap-14.5 mb-15.5 xs:mb-25 1xl:mb-19 3xl:mb-10 4xl:mb-20  1xl:max-w-[902px] 3xl:max-w-[1156px] 4xl:max-w-[1486px]">
            {faqItems.map(({ title, text }, i) => (
              <li
                key={i}
                className="border-t border-tuatara pt-4 lg:pt-8 flex flex-col lg:flex-row gap-3 4xl:gap-4.5 lg:items-start"
              >
                <h3 className="text-lg/[133%] xs:text-[22px]/[145%] lg:leading-[173%] 3xl:text-[26px]/[146%] font-second font-semibold tracking-[-0.03em] lg:w-1/2 lg:flex-1">
                  {title}
                </h3>
                <p className="leading-[137%] xs:text-lg/[122%] lg:text-xl/[110%] text-boulder-dust lg:w-1/2">
                  {text}
                </p>
              </li>
            ))}
          </ul>
          {/* Mobile-only button под списком */}
          <AskUsButton targetId="more-info" className="flex lg:hidden" />
        </div>
      </div>
    </section>
  );
};
export default FAQ;
