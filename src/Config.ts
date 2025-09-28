import { CharacterSets } from './types';

export const CHARACTER_SETS: CharacterSets = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};

export const PASSWORD_CONFIG = {
  MIN_LENGTH: 4,
  MAX_LENGTH: 32,
  DEFAULT_LENGTH: 8
};

export const STRENGTH_CONFIG = {
  WEAK: { min: 0, max: 2, color: '#ff4757', feedback: '弱い' as const },
  FAIR: { min: 3, max: 4, color: '#ffa726', feedback: '普通' as const },
  GOOD: { min: 5, max: 6, color: '#66bb6a', feedback: '強い' as const },
  STRONG: { min: 7, max: Infinity, color: '#4caf50', feedback: '非常に強い' as const }
};