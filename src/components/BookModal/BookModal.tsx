import { useState } from 'react';
import SmartButton from '../ui/Button/SmartButton';
import { businessForModal } from '../../data/bookModal';
import { useForm } from 'react-hook-form';
import {
  bookModalSchema,
  type BookModalSchemaType,
} from '../../validation/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { twMerge } from 'tailwind-merge';
import { toast } from 'react-toastify';
import { FiCheckCircle } from 'react-icons/fi';
import axios from 'axios';
import { sendFormData } from '../../utils/sendForm';

const BookModal = ({ onClose }: { onClose: () => void }) => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const inputClass =
    'form-book w-full bg-transparent border-b-[2px] border-mine-shaft pt-6.5 pb-3 focus:outline-none focus:border-boulder-light text-xl/[100%] peer caret-boulder-dark';
  const errorClass =
    'text-persian-red text-sm/[100%] tracking-[-0.02em] font-medium mt-2';

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    reset,
  } = useForm<BookModalSchemaType>({
    resolver: zodResolver(bookModalSchema),
    mode: 'onChange',
    defaultValues: {
      role: 'Партнер',
    },
  });

  const onSubmit = async (data: BookModalSchemaType) => {
    const finalData = {
      ...data,
      name: data.name.replace(/\s+/g, ' ').trim(),
      email: data.email.toLowerCase(),
      question: data.question.replace(/\s+/g, ' ').trim(),
    };

    try {
      await sendFormData(finalData);

      toast.success('Дякуємо! Ваш запит на консультацію надіслано!', {
        icon: <FiCheckCircle color="#f08d34" size={24} />,
      });
      reset();
      onClose();
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;

        if (status === 401) {
          toast.error('Сесія закінчилася. Увійдіть повторно.');
        } else if (status === 422) {
          toast.error(
            'Дані некоректні. Перевірте правильність заповнення форми.'
          );
        } else if (status === 500) {
          toast.error('Помилка сервера. Спробуйте пізніше.');
        } else {
          toast.error(
            'Не вдалося надіслати запит. Перевірте підключення до мережі або спробуйте пізніше.'
          );
        }
      } else {
        toast.error('Сталася помилка. Оновіть сторінку або спробуйте пізніше.');
      }
    }
  };

  return (
    <div>
      <ul
        role="radiogroup"
        aria-label="Оберіть вкладку"
        className="mx-auto flex border border-masala-light rounded-full bg-cod-gray mb-5 1xl:max-w-[600px]"
      >
        {businessForModal.map((business, index) => {
          const isActive = index === activeIndex;

          return (
            <li key={index} className="w-full">
              <button
                type="button"
                role="radio"
                aria-checked={isActive}
                aria-label={`Вкладка ${business.role}`}
                onClick={() => {
                  setActiveIndex(index);
                  setValue('role', business.role, { shouldValidate: true });
                }}
                className={`flex items-center justify-center p-4.5 border-masala-light rounded-full transition-colors duration-300 w-full h-full
                     ${
                       isActive
                         ? 'bg-woodsmoke-light text-tangerine border border-x-masala-light '
                         : ' text-star-dust'
                     }`}
              >
                <span
                  className={`font-second tracking-[-0.02em] text-base/[100%] capitalize 
                      ${!isActive ? 'sr-only 1xl:not-sr-only' : ''}`}
                  {...register('role')}
                >
                  {business.role}
                </span>
                <svg
                  aria-hidden="true"
                  className={`w-8.5 h-8.5 fill-boulder-gray 1xl:hidden 
                      ${isActive ? 'hidden' : ''}`}
                >
                  <use href={`/images/svg/icons.svg#icon-${business.icon}`} />
                </svg>
              </button>
            </li>
          );
        })}
      </ul>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col 1xl:flex-1 gap-12 1xl:gap-10 4xl:gap-12"
      >
        <div className="flex flex-col w-full 1xl:flex-row 1xl:gap-3 4xl:gap-5">
          <div className="flex flex-col gap-5 4xl:gap-14 mb-18 1xl:mb-0 1xl:w-full">
            <div>
              <label htmlFor="name" className="sr-only">
                Ім’я
              </label>
              <input
                id="name"
                type="text"
                maxLength={51}
                className={inputClass}
                placeholder="Ім’я"
                autoComplete="given-name"
                aria-describedby={errors.name ? 'name-error' : undefined}
                {...register('name')}
              />
              {errors.name && (
                <p id="name-error" role="alert" className={errorClass}>
                  *{errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="sr-only">
                Телефон
              </label>
              <input
                id="phone"
                type="tel"
                maxLength={17}
                className={inputClass}
                placeholder="Телефон"
                autoComplete="tel"
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                {...register('phone')}
              />
              {errors.phone && (
                <p id="phone-error" role="alert" className={errorClass}>
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                maxLength={51}
                className={inputClass}
                placeholder="Email"
                autoComplete="email"
                aria-describedby={errors.email ? 'email-error' : undefined}
                {...register('email')}
              />
              {errors.email && (
                <p id="email-error" role="alert" className={errorClass}>
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-3 text-xl/[100%] font-medium tracking-[-0.02em] 1xl:w-full 1xl:pt-6 1xl:gap-4">
            <label htmlFor="question" className="text-mercury-white/50">
              Ваше питання
            </label>
            <div className="h-full">
              <textarea
                id="question"
                maxLength={201}
                className={twMerge(
                  inputClass,
                  'border-[2px] bg-woodsmoke-bright rounded-md py-3 px-3.5 h-full min-h-[130px] xs:min-h-[166px] resize-none 4xl:min-h-[244px]'
                )}
                aria-describedby={
                  errors.question ? 'question-error' : undefined
                }
                {...register('question')}
              />
              {errors.question && (
                <p id="question-error" role="alert" className={errorClass}>
                  {errors.question.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <SmartButton
          label="Надіслати запит"
          type="submit"
          variant="secondary"
          className={twMerge(
            'min-w-[280px] mx-auto py-5.5 text-2xl/[100%]',
            isValid ? 'opacity-100' : 'opacity-50'
          )}
        />
      </form>
    </div>
  );
};

export default BookModal;
