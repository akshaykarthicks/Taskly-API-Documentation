import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Taskly',
      transparentMode: 'top',
    },
    links: [
      {
        text: 'Documentation',
        url: '/docs',
        active: 'nested-url',
      },
      {
        text: 'API',
        url: '/docs/api',
      },
      {
        text: 'Live App',
        url: 'https://taskly-ai-five.vercel.app/tasks',
        external: true,
      },
    ],
  };
}
