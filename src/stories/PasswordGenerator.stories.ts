import type { Meta, StoryObj } from '@storybook/react';
import { PasswordGenerator } from '../components/organisms/PasswordGenerator';

const meta = {
  title: 'Organisms/PasswordGenerator',
  component: PasswordGenerator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PasswordGenerator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};