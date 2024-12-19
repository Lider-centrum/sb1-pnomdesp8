const BLOCKED_DOMAINS = ['wp.pl', 'onet.pl', 'interia.pl'];
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isBlockedEmailDomain = (email: string): boolean => {
  return BLOCKED_DOMAINS.some(domain => email.toLowerCase().endsWith(`@${domain}`));
};

export const isValidEmail = (email: string): boolean => {
  return EMAIL_REGEX.test(email);
};

export const validatePhoneNumber = (phone: string): boolean => {
  const digitsOnly = phone.replace(/\D/g, '');
  return digitsOnly.length >= 9 && digitsOnly.length <= 15;
};