import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table/Table',
  component: Table,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    disabled: false,
    children: (
      <>
        <tbody>
          <tr>
            <td>Example</td>
          </tr>
        </tbody>
      </>
    ),
  },
};
