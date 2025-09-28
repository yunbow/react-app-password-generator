import React, { useState } from 'react';
import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import styles from './PasswordOutput.module.css';

export interface PasswordOutputProps {
  password: string;
  onCopy: () => Promise<boolean>;
}

export const PasswordOutput: React.FC<PasswordOutputProps> = ({
  password,
  onCopy
}) => {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');

  const handleCopy = async () => {
    const success = await onCopy();
    if (success) {
      setCopyStatus('copied');
      setTimeout(() => setCopyStatus('idle'), 2000);
    }
  };

  return (
    <div className={styles.container}>
      <Input
        type="text"
        value={password}
        readOnly
        className={styles.passwordInput}
      />
      <Button
        variant="success"
        onClick={handleCopy}
        className={copyStatus === 'copied' ? styles.copied : ''}
      >
        {copyStatus === 'copied' ? 'コピーしました!' : 'コピー'}
      </Button>
    </div>
  );
};