import React from 'react';
import { Input } from '../../atoms/Input';
import { Text } from '../../atoms/Text';
import styles from './LengthSlider.module.css';

export interface LengthSliderProps {
  length: number;
  onChange: (length: number) => void;
  min?: number;
  max?: number;
}

export const LengthSlider: React.FC<LengthSliderProps> = ({
  length,
  onChange,
  min = 4,
  max = 50
}) => {
  const handleChange = (value: string | number) => {
    onChange(Number(value));
  };

  return (
    <div className={styles.container}>
      <Text variant="label">パスワードの長さ:</Text>
      <Input
        type="range"
        value={length}
        onChange={handleChange}
        min={min}
        max={max}
      />
      <span className={styles.lengthValue}>{length}</span>
    </div>
  );
};