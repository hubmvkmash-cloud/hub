// Regular expression for name (all letters, both Latin and Cyrillic, apostrophe, hyphen, and spaces)
export const nameRegex = /^[\p{Alphabetic}'\-\s]+$/u;

// Phone number: +380001234567
export const phoneRegex = /^(?:\+)?(?!0)(?:380\d{9}|(?!380)\d{10,14})$/;

// RFC 5322 email regex (simplified without comments, allow Capital)
export const emailRegex =
  /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9]{2,}$/;
