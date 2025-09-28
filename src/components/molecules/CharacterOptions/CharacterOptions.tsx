import React from 'react';
import { Checkbox } from '../../atoms/Checkbox';
import { PasswordSettings } from '../../../types';
import styles from './CharacterOptions.module.css';

export interface CharacterOptionsProps {
  settings: Pick<PasswordSettings, 'includeUppercase' | 'includeLowercase' | 'includeNumbers' | 'includeSymbols'>;
  onChange: (settings: Partial<PasswordSettings>) => void;
}

export const CharacterOptions: React.FC<CharacterOptionsProps> = ({
  settings,
  onChange
}) => {
  return (
    <div className={styles.container}>
      <Checkbox
        id="uppercase"
        checked={settings.includeUppercase}
        onChange={(checked) => onChange({ includeUppercase: checked })}
        label="大文字 (A-Z)"
      />
      <Checkbox
        id="lowercase"
        checked={settings.includeLowercase}
        onChange={(checked) => onChange({ includeLowercase: checked })}
        label="小文字 (a-z)"
      />
      <Checkbox
        id="numbers"
        checked={settings.includeNumbers}
        onChange={(checked) => onChange({ includeNumbers: checked })}
        label="数字 (0-9)"
      />
      <Checkbox
        id="symbols"
        checked={settings.includeSymbols}
        onChange={(checked) => onChange({ includeSymbols: checked })}
        label="記号 (!@#$%^&*)"
      />
    </div>
  );
};