import type { Meta, StoryObj } from '@storybook/react';
import { CharacterOptions } from '../components/molecules/CharacterOptions';

const meta = {
  title: 'Molecules/CharacterOptions',
  component: CharacterOptions,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CharacterOptions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    settings: {
      includeUppercase: true,
      includeLowercase: true,
      includeNumbers: true,
      includeSymbols: false,
    },
    onChange: () => {},
  },
};

export const AllSelected: Story = {
  args: {
    settings: {
      includeUppercase: true,
      includeLowercase: true,
      includeNumbers: true,
      includeSymbols: true,
    },
    onChange: () => {},
  },
};

export const MinimalSelection: Story = {
  args: {
    settings: {
      includeUppercase: false,
      includeLowercase: true,
      includeNumbers: false,
      includeSymbols: false,
    },
    onChange: () => {},
  },
};