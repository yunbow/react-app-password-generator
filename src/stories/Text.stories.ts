import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../components/atoms/Text';

const meta = {
  title: 'Atoms/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'label', 'span', 'feedback'],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading: Story = {
  args: {
    variant: 'h1',
    children: 'パスワードジェネレーター',
  },
};

export const Label: Story = {
  args: {
    variant: 'label',
    children: 'パスワードの長さ:',
  },
};

export const Span: Story = {
  args: {
    variant: 'span',
    children: '通常のテキスト',
  },
};

export const Feedback: Story = {
  args: {
    variant: 'feedback',
    children: '非常に強い',
  },
};