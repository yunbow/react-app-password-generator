import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/atoms/Input';

const meta = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'range'],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: 'text',
    value: 'generated-password-123',
    placeholder: 'パスワードが表示されます',
  },
};

export const TextReadonly: Story = {
  args: {
    type: 'text',
    value: 'readonly-password',
    readOnly: true,
  },
};

export const Range: Story = {
  args: {
    type: 'range',
    value: 12,
    min: 4,
    max: 50,
  },
};