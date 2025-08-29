import { twMerge } from 'tailwind-merge';

export type SmartButtonProps = {
  label: string;
  type?: 'button' | 'submit' | 'reset';
  // SVG icon support
  icon?: string; // Шлях до символу, напр. "/icons.svg#icon-name"
  iconPosition?: 'left' | 'right';
  iconFill?: string; // напр. "currentColor", "none", "#fff"
  iconStroke?: string; // напр. "currentColor", "none", "#000"
  iconClassName?: string; // Tailwind класи для svg
  // Стилі та функціональність
  className?: string;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void; // Змінено тип події
  disabled?: boolean;
  loading?: boolean;
  iconGap?: number; // Це не використовується в коді, можна видалити або додати стилі
  href?: string; // Додано для підтримки посилань
  variant?: 'primary' | 'secondary' | 'danger';
};

export default function SmartButton({
  label,
  type = 'button',
  icon,
  iconPosition = 'left',
  iconFill,
  iconStroke,
  iconClassName = '',
  className = '',
  onClick,
  disabled = false,
  loading = false,
  variant = 'primary',
  href, // Отримуємо href з пропсів
}: SmartButtonProps) {
  const baseClasses =
    'font-semibold py-4 px-6 rounded-full transition-colors inline-flex items-center justify-center 4xl:py-5.5 duration-300 w-fit text-base/[100%] tracking-[-0.02em] 4xl:text-[20px]';

  const variantClasses = {
    primary:
      'bg-cod-gray lg:bg-woodsmoke-dimmed border-tangerine lg:border-star-dust-400 text-tangerine lg:text-star-dust-400 border-1 hover:text-tangerine hover:border-tangerine focus:outline-tangerine focus:outline-2 focus:text-tangerine',
    secondary:
      'text-cod-gray bg-tangerine hover:bg-chilean-fire focus:bg-chilean-fire focus:outline-chilean-fire focus:outline-2 font-bold',
    danger:
      'bg-red-100 text-red-700 border-red-300 hover:bg-red-500 hover:text-white',
  };

  const finalClassName = twMerge(
    baseClasses,
    variantClasses[variant],
    disabled || loading ? 'opacity-50 cursor-not-allowed' : '',
    className,
    // Додаємо стилі для gap між іконкою та текстом
    icon && iconPosition === 'left' ? 'flex-row-reverse' : '', // Якщо іконка справа, текст йде спочатку
    icon && (iconPosition === 'left' || iconPosition === 'right') ? 'gap-2' : '' // Додаємо відступ, якщо є іконка (можна додати prop iconGap)
  );

  const Icon = () =>
    icon ? (
      <svg
        className={iconClassName}
        aria-hidden="true"
        fill={iconFill}
        stroke={iconStroke}
      >
        <use href={`${icon}`} />
      </svg>
    ) : null;

  // Функція для рендерингу вмісту кнопки/посилання
  const renderContent = () =>
    loading ? (
      'Loading...'
    ) : (
      <>
        {icon && iconPosition === 'left' && <Icon />}
        <span className="shrink-0">{label}</span>
        {icon && iconPosition === 'right' && <Icon />}
      </>
    );

  // Умовний рендеринг: якщо є href, рендеримо <a>, інакше <button>
  if (href) {
    return (
      <a
        href={href}
        className={finalClassName}
        onClick={onClick} // onClick буде працювати і для <a>
        aria-disabled={disabled || loading} // aria-disabled для семантики
      >
        {renderContent()}
      </a>
    );
  }

  // Якщо href немає, рендеримо <button>
  return (
    <button
      type={type}
      className={finalClassName}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {renderContent()}
    </button>
  );
}
