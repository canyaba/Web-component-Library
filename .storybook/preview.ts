import '../src/index.css';

import type { Preview } from '@storybook/react-webpack5';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'ink',
      values: [
        { name: 'ink', value: '#08090c' },
        { name: 'graphite', value: '#111317' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
