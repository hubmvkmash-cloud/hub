import { useForm } from 'react-hook-form';
import SmartButton from '../ui/Button/SmartButton';
import {
  writeUsSchema,
  type WriteUsSchemaType,
} from '../../validation/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { sendFormData } from '../../utils/sendForm';
import { toast } from 'react-toastify';
import { FiCheckCircle } from 'react-icons/fi';
import axios from 'axios';

const MoreInfo = () => {
  const inputClass =
    'form-write-us w-full bg-transparent border-b-[2px] border-mine-shaft pt-7.5 pb-3 focus:outline-none focus:border-boulder-light text-lg/[100%] font-medium tracking-[-0.02em] xs:text-xl/[100%] peer caret-boulder-dark';
  const errorClass =
    'text-persian-red text-sm/[100%] tracking-[-0.02em] font-medium mt-2';

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WriteUsSchemaType>({
    resolver: zodResolver(writeUsSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: WriteUsSchemaType) => {
    const finalData = {
      ...data,
      name: data.name.replace(/\s+/g, ' ').trim(),
      email: data.email.toLowerCase(),
    };

    try {
      await sendFormData(finalData);

      toast.success('Дякуємо! Ми зв’яжемось із Вами найближчим часом.', {
        icon: <FiCheckCircle color="#f08d34" size={24} />,
      });

      reset();
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
    <section id="more-info" className="pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70">
      <div className="section">
        <div className="pt-8 pb-7 px-3 xs:pt-10.5 xs:pb-14 xs:px-6 lg:pt-16 lg:pb-9 lg:px-15.5 1xl:py-12.5 1xl:px-12 3xl:pr-25 3xl:pl-19 4xl:px-30 4xl:py-28.5 bg-cod-dark rounded-[26px] xs:gap-18 lg:gap-0 3xl:gap-x-75 4xl:gap-x-81 flex flex-col 1xl:flex-row">
          {/* Ліва колонка: заголовок + опис */}
          <div className="flex flex-col mb-6.5 xs:mb-0 lg:mb-9.5 1xl:max-w-[626px] 3xl:max-w-[498px] 4xl:max-w-[680px] 1xl:pt-[34px] 4xl:pt-[6px] justify-start gap-y-1.5 xs:gap-y-3.5 lg:gap-y-4.5 1xl:gap-y-7 3xl:gap-y-11">
            <h2 className="text-[22px]/[118%] xs:text-[32px]/[119%] lg:text-[42px]/[110%] 3xl:text-5xl tracking-[-0.02em] font-medium font-second">
              Потрібно більше інформації?
            </h2>
            <p className="text-base/[112%] w-[277px] xs:w-[426px] lg:w-[552px] 1xl:w-[439px] 3xl:w-[477px] xs:text-lg/[133%] lg:text-xl/[120%] 1xl:text-xl/[120%] text-boulder-dust">
              Отримайте детальну презентацію про компанію та 40+ реалізованих
              проєктів
            </p>
          </div>

          {/* Права колонка: форма */}

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col 1xl:flex-1 3xl:max-w-[764px] 4xl:max-w-[996px] gap-14  xs:gap-18 lg:gap-15 1xl:gap-12.5"
          >
            <div className="flex flex-col gap-5.5 xs:gap-7 lg:gap-5">
              <div>
                <label htmlFor="name" className="sr-only">
                  Ім’я
                </label>
                <input
                  id="name"
                  type="text"
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
                  className={inputClass}
                  placeholder="Телефон"
                  autoComplete="tel"
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  {...register('phone')}
                />
                {errors.phone && (
                  <p id="phone-error" role="alert" className={errorClass}>
                    *{errors.phone.message}
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
                  className={inputClass}
                  placeholder="Email"
                  autoComplete="email"
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  {...register('email')}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className={errorClass}>
                    *{errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Кнопка: ліворуч на моб, праворуч на десктопі */}
            <SmartButton
              label="Напишіть нам"
              type="submit"
              variant="secondary"
              className="self-center 1xl:self-end p-5 xs:p-5.5 min-w-[280px] lg:min-w-[300px] 1xl:min-w-[280px] text-lg/[100%] tracking-[-0.02em] xs:text-2xl/[100%] font-bold"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default MoreInfo;
