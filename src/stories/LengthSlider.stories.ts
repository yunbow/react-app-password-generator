import type { Meta, StoryObj } from '@storybook/react';
import { LengthSlider } from '../components/molecules/LengthSlider';

const meta = {
  title: 'Molecules/LengthSlider',
  component: LengthSlider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LengthSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    length: 12,
    onChange: () => {},
  },
};

export const Short: Story = {
  args: {
    length: 4,
    onChange: () => {},
  },
};

export const Long: Story = {
  args: {
    length: 30,
    onChange: () => {},
  },
};