import { z } from 'zod';
import { emailRegex, nameRegex, phoneRegex } from '../constants/regex';

export const nameField = z
  .string({
    error: 'Поле обов’язкове',
  })
  .min(2, 'І’мя має містити мінімум 2 символи')
  .max(50, 'І’мя не може перевищувати 50 символів')
  .regex(nameRegex, 'Допустимі: літери, апострофи, дефіси');

export const phoneField = z
  .string({
    error: 'Номер телефону обов’язковий',
  })
  .regex(phoneRegex, 'Введіть коректний номер телефону');

export const emailField = z
  .string({
    error: 'Email обов’язковий',
  })
  .max(50, 'Email не може перевищувати 50 символів')
  .regex(emailRegex, 'Невірний формат email');

export const bookModalSchema = z.object({
  role: z.enum(['Інвестор', 'Партнер', 'Локації']),
  name: nameField,
  phone: phoneField,
  email: emailField,
  question: z
    .string()
    .min(5, 'Поле має містити мінімум 5 символів')
    .max(200, 'Поле не може перевищувати 200 символів'),
});

export type BookModalSchemaType = z.infer<typeof bookModalSchema>;

export const writeUsSchema = z.object({
  name: nameField,
  phone: phoneField,
  email: emailField,
});

export type WriteUsSchemaType = z.infer<typeof writeUsSchema>;
