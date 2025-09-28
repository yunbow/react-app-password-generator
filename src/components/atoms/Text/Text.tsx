import React from 'react';
import styles from './Text.module.css';

export interface TextProps {
  children: React.ReactNode;
  variant?: 'h1' | 'label' | 'span' | 'feedback';
  className?: string;
}

export const Text: React.FC<TextProps> = ({
  children,
  variant = 'span',
  className = ''
}) => {
  const Component = variant === 'h1' ? 'h1' : variant === 'label' ? 'label' : 'span';

  return (
    <Component className={`${styles[variant]} ${className}`}>
      {children}
    </Component>
  );
};