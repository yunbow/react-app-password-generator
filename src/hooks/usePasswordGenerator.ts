import { useState, useCallback } from 'react';
import { PasswordSettings, PasswordStrength } from '../types';
import { generatePassword, calculatePasswordStrength } from '../utils/passwordGenerator';
import { PASSWORD_CONFIG } from '../Config';

export const usePasswordGenerator = () => {
  const [settings, setSettings] = useState<PasswordSettings>({
    length: PASSWORD_CONFIG.DEFAULT_LENGTH,
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: false
  });

  const [password, setPassword] = useState<string>('');
  const [strength, setStrength] = useState<PasswordStrength>({
    score: 0,
    feedback: '弱い',
    percentage: 0,
    color: '#ff4757'
  });

  const updateSettings = useCallback((newSettings: Partial<PasswordSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  }, []);

  const generate = useCallback(() => {
    try {
      const newPassword = generatePassword(settings);
      const newStrength = calculatePasswordStrength(settings);

      setPassword(newPassword);
      setStrength(newStrength);
    } catch (error) {
      console.error('Password generation error:', error);
    }
  }, [settings]);

  const copyToClipboard = useCallback(async () => {
    if (!password) return false;

    try {
      await navigator.clipboard.writeText(password);
      return true;
    } catch (error) {
      // Fallback for older browsers
      try {
        const textArea = document.createElement('textarea');
        textArea.value = password;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        return true;
      } catch (fallbackError) {
        console.error('Copy to clipboard failed:', fallbackError);
        return false;
      }
    }
  }, [password]);

  return {
    settings,
    password,
    strength,
    updateSettings,
    generate,
    copyToClipboard
  };
};