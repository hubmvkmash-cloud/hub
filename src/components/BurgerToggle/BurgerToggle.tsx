import { useEffect } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

type BurgerToggleProps = {
  isOpen: boolean;
  setActiveIndex: (index: number) => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function BurgerToggle({
  isOpen,
  setIsOpen,
  setActiveIndex,
}: BurgerToggleProps) {
  // const [isOpen, setIsOpen] = useState(false);

  // Блокуємо scroll при відкритому меню
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex flex-col justify-center items-center w-12 h-12 lg:hidden"
        aria-label={isOpen ? 'Закрити меню' : 'Відкрити меню'}
        aria-expanded={isOpen}
      >
        <span
          className={`bg-tangerine block h-0.5 w-12 transform transition duration-300 ease-in-out ${
            isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1.5'
          }`}
        ></span>
        <span
          className={`bg-tangerine block h-0.5 w-12 my-1 transition-opacity duration-300 ease-in-out ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-tangerine block h-0.5 w-12 transform transition duration-300 ease-in-out ${
            isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1.5'
          }`}
        ></span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 -z-1 section bg-cod-black/90 flex flex-col  gap-13 text-4xl/[1] text-boulder-dust lg:hidden">
          <BurgerMenu
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setActiveIndex={setActiveIndex}
          />
        </div>
      )}
    </>
  );
}
