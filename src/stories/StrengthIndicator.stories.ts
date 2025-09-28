import type { Meta, StoryObj } from '@storybook/react';
import { StrengthIndicator } from '../components/molecules/StrengthIndicator';

const meta = {
  title: 'Molecules/StrengthIndicator',
  component: StrengthIndicator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StrengthIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Weak: Story = {
  args: {
    strength: {
      score: 2,
      feedback: '弱い',
      percentage: 25,
      color: '#ff4757',
    },
  },
};

export const Fair: Story = {
  args: {
    strength: {
      score: 4,
      feedback: '普通',
      percentage: 50,
      color: '#ffa726',
    },
  },
};

export const Good: Story = {
  args: {
    strength: {
      score: 6,
      feedback: '強い',
      percentage: 75,
      color: '#66bb6a',
    },
  },
};

export const Strong: Story = {
  args: {
    strength: {
      score: 8,
      feedback: '非常に強い',
      percentage: 100,
      color: '#4caf50',
    },
  },
};