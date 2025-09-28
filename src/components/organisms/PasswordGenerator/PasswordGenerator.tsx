import React, { useEffect } from 'react';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';
import { LengthSlider } from '../../molecules/LengthSlider';
import { CharacterOptions } from '../../molecules/CharacterOptions';
import { PasswordOutput } from '../../molecules/PasswordOutput';
import { StrengthIndicator } from '../../molecules/StrengthIndicator';
import { usePasswordGenerator } from '../../../hooks/usePasswordGenerator';
import { PASSWORD_CONFIG } from '../../../Config';
import styles from './PasswordGenerator.module.css';

export const PasswordGenerator: React.FC = () => {
  const {
    settings,
    password,
    strength,
    updateSettings,
    generate,
    copyToClipboard
  } = usePasswordGenerator();

  useEffect(() => {
    generate();
  }, [generate]);

  return (
    <div className={styles.container}>
      <Text variant="h1">パスワードジェネレーター</Text>

      <section className={styles.settings}>
        <LengthSlider
          length={settings.length}
          onChange={(length) => updateSettings({ length })}
          min={PASSWORD_CONFIG.MIN_LENGTH}
          max={PASSWORD_CONFIG.MAX_LENGTH}
        />

        <section className={styles.checkboxGroup}>
          <CharacterOptions
            settings={settings}
            onChange={updateSettings}
          />
        </section>
      </section>

      <Button
        variant="primary"
        fullWidth
        onClick={generate}
        className={styles.generateButton}
      >
        パスワードを生成
      </Button>

      <PasswordOutput
        password={password}
        onCopy={copyToClipboard}
      />

      <StrengthIndicator strength={strength} />
    </div>
  );
};