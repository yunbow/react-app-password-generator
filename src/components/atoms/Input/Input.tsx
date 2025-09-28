import React from 'react';
import styles from './Input.module.css';

export interface InputProps {
  type?: 'text' | 'range';
  value: string | number;
  onChange?: (value: string | number) => void;
  min?: number;
  max?: number;
  readOnly?: boolean;
  placeholder?: string;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  value,
  onChange,
  min,
  max,
  readOnly = false,
  placeholder,
  className = ''
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      const newValue = type === 'range' ? parseInt(e.target.value) : e.target.value;
      onChange(newValue);
    }
  };

  if (type === 'range') {
    return (
      <input
        type="range"
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        className={`${styles.range} ${className}`}
      />
    );
  }

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      readOnly={readOnly}
      placeholder={placeholder}
      className={`${styles.text} ${className}`}
    />
  );
};