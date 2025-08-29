import { useEffect } from 'react';
import SmartButton from '../ui/Button/SmartButton';

type BurgerMenuProps = {
  isOpen: boolean;
  setActiveIndex: (index: number) => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function BurgerMenu({
  isOpen,
  setIsOpen,
  setActiveIndex,
}: BurgerMenuProps) {
  const scrollToBusiness = (index: number) => {
    setActiveIndex(index);
    const section = document.getElementById('business');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  // Блокуємо scroll при відкритому меню
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  return (
    <div className="flex flex-col items-center h-full mt-[35%] gap-[25%]">
      <ul className="flex flex-col gap-13 text-center">
        <li className="hover:text-gallery-white transition-colors">
          <button
            type="button"
            onClick={() => scrollToBusiness(0)}
            className="py-3"
          >
            Інвестору
          </button>
        </li>
        <li className="hover:text-gallery-white transition-colors">
          <button
            type="button"
            onClick={() => scrollToBusiness(1)}
            className="py-3"
          >
            Партнеру
          </button>
        </li>
        <li className="hover:text-gallery-white transition-colors">
          <button
            type="button"
            onClick={() => scrollToBusiness(2)}
            className="py-3"
          >
            Локаціям
          </button>
        </li>
      </ul>
      <SmartButton
        onClick={() => setIsOpen(false)}
        label="Отримати консультацію"
        variant="secondary"
        className="py-5.5 text-xl/[100%]"
        href="#more-info"
      ></SmartButton>
    </div>
  );
}
