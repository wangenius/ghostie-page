import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Ghostie',
  tagline: 'Desktop Agent Platform',
  favicon: 'icon-reverse.svg',

  // Set the production url of your site here
  url: 'https://ghostie.wangenius.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'wangenius', // Usually your GitHub org/user name.
  projectName: 'ghostie-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          breadcrumbs: false,
          editUrl:
            'https://github.com/wangenius/ghostie-docs/tree/main/docs/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/wangenius/ghostie-docs/tree/main/docs/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/styles/global.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-sitemap',
      {
        changefreq: 'weekly',
        priority: 0.5,
        filename: 'sitemap.xml',
      },
    ],
  ],

  themeConfig: {
    image: 'icon.svg',
    metadata: [
      {name: 'description', content: 'Ghostie 是一个桌面智能体平台，助力高效工作与创新。'},
      {name: 'keywords', content: 'AI, 智能体, 桌面平台, Ghostie, 人工智能, 办公自动化'},
      {property: 'og:title', content: 'Ghostie - Desktop Agent Platform'},
      {property: 'og:description', content: 'Ghostie 是一个桌面智能体平台，助力高效工作与创新。'},
      {property: 'og:image', content: 'https://ghostie.wangenius.com/icon.svg'},
      {property: 'og:url', content: 'https://ghostie.wangenius.com'},
      {name: 'twitter:card', content: 'summary_large_image'},
    ],
    navbar: {
      title: 'Ghostie',
      logo: {
        alt: 'Ghostie Logo',
        src: 'icon.svg',
      }
    },
    footer: {
      style: 'dark',
    },
    
    breadcrumbs: false,
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
