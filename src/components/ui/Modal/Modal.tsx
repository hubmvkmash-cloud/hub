import { twMerge } from 'tailwind-merge';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  className?: string;
  modalBaseClasses?: string;
  closeBtnClasses?: string;
  btnIconClasses?: string;
};

const Modal = ({
  isOpen,
  onClose,
  children,
  className = '',
  modalBaseClasses,
  closeBtnClasses,
  btnIconClasses,
}: ModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const rootElement = document.getElementById('root')!;

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
      if (rootElement) {
        rootElement.setAttribute('inert', ''); // makes the content unfocusable
        rootElement.setAttribute('aria-hidden', 'true'); // for accessibility
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
      if (rootElement) {
        rootElement.removeAttribute('inert');
        rootElement.removeAttribute('aria-hidden');
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <div
      className={twMerge(
        'fixed inset-0 z-100 flex justify-center backdrop-blur-xs items-center bg-black/60 transition-opacity duration-800 ease-in-out',
        isOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none',
        modalBaseClasses
      )}
      onClick={onClose}
    >
      <div
        className={twMerge(
          'relative bg-woodsmoke-black rounded-lg w-full xs:w-[502px] p-8.5 pt-19.5 transition-all duration-500 transform 1xl:w-[1076px] 1xl:px-13.5 1xl:py-11.5 3xl:py-14 4xl:w-[1488px] 4xl:px-[192px] 4xl:py-19',
          isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 -translate-y-4',
          className
        )}
        onClick={e => e.stopPropagation()}
      >
        <button
          className={twMerge(
            'group flex justify-center items-center absolute right-4 top-4 w-10 h-10 rounded-full hover:text-mercury-white transition-colors duration-300 4xl:right-6 4xl:top-6',
            closeBtnClasses
          )}
          onClick={onClose}
        >
          <svg
            className={twMerge(
              'w-7 h-7 stroke-storm-dust group-hover:stroke-mercury-white group-focus:stroke-mercury-white transition-colors duration-300',
              btnIconClasses
            )}
          >
            <use href="/images/svg/icons.svg#icon-close" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default Modal;
