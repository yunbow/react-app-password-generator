export interface PasswordSettings {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
}

export interface PasswordStrength {
  score: number;
  feedback: '弱い' | '普通' | '強い' | '非常に強い';
  percentage: number;
  color: string;
}

export interface CharacterSets {
  uppercase: string;
  lowercase: string;
  numbers: string;
  symbols: string;
}