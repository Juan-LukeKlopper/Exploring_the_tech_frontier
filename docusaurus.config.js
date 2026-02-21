// @ts-check`
// Note: type annotations allow type checking and IDEs autocompletion

const prismRenderer = require('prism-react-renderer');

const lightCodeTheme = prismRenderer.themes?.github ?? require('prism-react-renderer/themes/github/index.cjs.js');
const darkCodeTheme = prismRenderer.themes?.dracula ?? require('prism-react-renderer/themes/dracula/index.cjs.js');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Exploring the tech frontier',
  tagline: 'Where Tech and Discovery Converge.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://juan-lukeklopper.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Exploring_the_tech_frontier/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Intercosmic Labs', // Usually your GitHub org/user name.
  projectName: 'Exploring the tech frontier', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Exploring the tech frontier',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Juan-LukeKlopper/docusaurus_testing',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/juan-luke-klopper',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ScrtAgentLuke',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Juan-LukeKlopper',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Intercosmic Labs.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
