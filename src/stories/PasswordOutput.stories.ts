import type { Meta, StoryObj } from '@storybook/react';
import { PasswordOutput } from '../components/molecules/PasswordOutput';

const meta = {
  title: 'Molecules/PasswordOutput',
  component: PasswordOutput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PasswordOutput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithPassword: Story = {
  args: {
    password: 'Kj9$mN2pQx7L',
    onCopy: async () => {
      console.log('Copied to clipboard');
      return true;
    },
  },
};

export const Empty: Story = {
  args: {
    password: '',
    onCopy: async () => false,
  },
};

export const LongPassword: Story = {
  args: {
    password: 'Kj9$mN2pQx7L8wR5zF3nH6vB4yT1cA0sD',
    onCopy: async () => true,
  },
};