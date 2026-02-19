import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableRow } from './TableRow';
import { TableCell } from '../TableCell/TableCell';

const meta: Meta<typeof TableRow> = {
  title: 'Components/Table/TableRow',
  component: TableRow,
};

export default meta;

type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
  args: {
    children: (
      <>
        <TableCell>Cell</TableCell>
      </>
    ),
  },
};
