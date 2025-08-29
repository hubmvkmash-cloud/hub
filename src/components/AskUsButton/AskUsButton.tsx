interface AskUsButtonProps {
  targetId: string;
  className?: string;
}
const AskUsButton = ({ targetId, className = '' }: AskUsButtonProps) => {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div
      className={[
        'flex items-center justify-center 1xl:justify-end-safe 1xl:gap-3 4xl:gap-5.5',
        className,
      ].join(' ')}
    >
      <button
        type="button"
        onClick={handleClick}
        className="flex items-center justify-center p-5 xs:py-6.5 lg:py-5 1xl:py-6.5 min-w-[280px] lg:min-w-[258px] lg:max-h-[60px] 1xl:max-h-[76px] 1xl:min-w-[280px] rounded-[45px] bg-cod-gray border border-tangerine lg:border-gray text-tangerine lg:text-gray text-xl/[100%] 
        xs:text-2xl/[100%] lg:text-xl/[100%] 1xl:text-2xl/[100%] whitespace-nowrap font-bold xs:font-semibold tracking-[-0.02em] hover:border-tangerine hover:text-tangerine focus:text-tangerine focus:outline-none focus-visible:ring-2 focus-visible:ring-tangerine transition-colors duration-300"
      >
        Запитати в нас
      </button>
      <svg
        className="w-15 h-15 xs:w-14 xs:h-14 stroke-[2px] stroke-tangerine lg:stroke-gray"
        aria-hidden="true"
        focusable="false"
      >
        <use href="/images/svg/icons.svg#icon-arrow-down-left" />
      </svg>
    </div>
  );
};
export default AskUsButton;
