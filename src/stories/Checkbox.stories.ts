import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../components/atoms/Checkbox';

const meta = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    id: 'uppercase',
    checked: true,
    label: '大文字 (A-Z)',
    onChange: () => {},
  },
};

export const Unchecked: Story = {
  args: {
    id: 'symbols',
    checked: false,
    label: '記号 (!@#$%^&*)',
    onChange: () => {},
  },
};