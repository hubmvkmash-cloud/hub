import { useState } from 'react';
import Modal from '../ui/Modal/Modal';
import BookModal from '../BookModal/BookModal';
import BurgerToggle from '../BurgerToggle/BurgerToggle';
import SmartButton from '../ui/Button/SmartButton';
import HeaderNav from '../HeaderNav/HeaderNav';

type HeaderProps = {
  setActiveIndex?: (index: number) => void;
  onShowHome: () => void;
  isPrivacy?: boolean;
};

const Header = ({
  setActiveIndex,
  isPrivacy = false,
  onShowHome,
}: HeaderProps) => {
  const [openBookModal, setOpenBookModal] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-cod-gray/60 lg:bg-transparent relative z-100 w-full  lg:mt-10 3xl:mt-18 4xl:mt-17">
        <div className="section flex gap-4 py-3.5 1xl:py-0 max-h-17 1xl:h-14 4xl:h-16 h-full items-center justify-between">
          <a href="/" className="w-1/3">
            <span className="sr-only">Повернутись на головну</span>
            <svg className="w-9.5 h-12.5 1xl:h-13 4xl:w-12 4xl:h-16.5 fill-tangerine">
              <use href="/images/svg/icons.svg#icon-logo" />
            </svg>
          </a>

          {isPrivacy ? (
            // Якщо сторінка політики — лише кнопка "На головну"
            <SmartButton
              onClick={() => onShowHome?.()}
              className="flex"
              variant="primary"
              label="На головну"
              href="/"
            />
          ) : (
            <>
              {setActiveIndex && (
                <HeaderNav
                  setActiveIndex={setActiveIndex}
                  className="w-1/3 mx-auto"
                />
              )}

              <div className="flex items-center gap-5.5 lg:w-1/3 justify-between lg:justify-end-safe">
                {!isBurgerMenuOpen && (
                  <SmartButton
                    type="button"
                    onClick={() => setOpenBookModal(true)}
                    label="Отримати консультацію"
                    variant="primary"
                    className="hidden xs:flex text-star-dust border-star-dust text-base/[100%] 1xl:text-[18px]/[1] font-semibold px-3 py-[15px] 1xl:py-4.5 1xl:px-5 bg-woodsmoke-black/50 backdrop-blur-[5px]"
                  />
                )}

                {setActiveIndex && (
                  <BurgerToggle
                    isOpen={isBurgerMenuOpen}
                    setIsOpen={setIsBurgerMenuOpen}
                    setActiveIndex={setActiveIndex}
                  />
                )}
              </div>
            </>
          )}
        </div>
      </header>

      <Modal isOpen={openBookModal} onClose={() => setOpenBookModal(false)}>
        <BookModal onClose={() => setOpenBookModal(false)} />
      </Modal>
    </>
  );
};

export default Header;
