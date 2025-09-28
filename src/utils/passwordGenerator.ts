import { PasswordSettings, PasswordStrength } from '../types';
import { CHARACTER_SETS, STRENGTH_CONFIG } from '../Config';

export const generatePassword = (settings: PasswordSettings): string => {
  const { length, includeUppercase, includeLowercase, includeNumbers, includeSymbols } = settings;

  let charset = '';
  if (includeUppercase) charset += CHARACTER_SETS.uppercase;
  if (includeLowercase) charset += CHARACTER_SETS.lowercase;
  if (includeNumbers) charset += CHARACTER_SETS.numbers;
  if (includeSymbols) charset += CHARACTER_SETS.symbols;

  if (charset === '') {
    throw new Error('少なくとも1つの文字種を選択してください');
  }

  let password = '';

  // Ensure at least one character from each selected type
  if (includeUppercase) password += getRandomChar(CHARACTER_SETS.uppercase);
  if (includeLowercase) password += getRandomChar(CHARACTER_SETS.lowercase);
  if (includeNumbers) password += getRandomChar(CHARACTER_SETS.numbers);
  if (includeSymbols) password += getRandomChar(CHARACTER_SETS.symbols);

  // Fill remaining length
  for (let i = password.length; i < length; i++) {
    password += getRandomChar(charset);
  }

  return shuffleString(password);
};

export const getRandomChar = (str: string): string => {
  return str.charAt(Math.floor(Math.random() * str.length));
};

export const shuffleString = (str: string): string => {
  return str.split('').sort(() => Math.random() - 0.5).join('');
};

export const calculatePasswordStrength = (settings: PasswordSettings): PasswordStrength => {
  const { length, includeUppercase, includeLowercase, includeNumbers, includeSymbols } = settings;

  let score = 0;

  // Length scoring (8文字以下は弱いにするため得点を下げる)
  if (length >= 6) score += 1;

  // Character type scoring
  if (includeUppercase) score += 1;
  if (includeLowercase) score += 1;
  if (includeNumbers) score += 1;
  if (includeSymbols) score += 2;

  // 長いパスワードのボーナスを削除（8文字以下の制限のため）

  // Determine strength level
  let strengthLevel;
  if (score <= STRENGTH_CONFIG.WEAK.max) {
    strengthLevel = STRENGTH_CONFIG.WEAK;
  } else if (score <= STRENGTH_CONFIG.FAIR.max) {
    strengthLevel = STRENGTH_CONFIG.FAIR;
  } else if (score <= STRENGTH_CONFIG.GOOD.max) {
    strengthLevel = STRENGTH_CONFIG.GOOD;
  } else {
    strengthLevel = STRENGTH_CONFIG.STRONG;
  }

  return {
    score,
    feedback: strengthLevel.feedback,
    percentage: Math.min((score / 8) * 100, 100),
    color: strengthLevel.color
  };
};