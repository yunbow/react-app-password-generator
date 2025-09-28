import React from 'react';
import { Text } from '../../atoms/Text';
import { PasswordStrength } from '../../../types';
import styles from './StrengthIndicator.module.css';

export interface StrengthIndicatorProps {
  strength: PasswordStrength;
}

export const StrengthIndicator: React.FC<StrengthIndicatorProps> = ({
  strength
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>パスワード強度:</div>
      <div className={styles.bar}>
        <div
          className={styles.fill}
          style={{
            width: `${strength.percentage}%`,
            backgroundColor: strength.color
          }}
        />
      </div>
      <Text variant="feedback" className={styles.feedback}>
        {strength.feedback}
      </Text>
    </div>
  );
};