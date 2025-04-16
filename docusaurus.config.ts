import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Ghostie",
  tagline: "Ghostie Docs",
  favicon: "img/icon.svg",
  url: "https://wangenius.github.io",
  baseUrl: "/",
  organizationName: "wangenius",
  projectName: "ghostie_docs",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,
  deploymentBranch: "gh-pages",
  customFields: {
    // 其他配置项
    apiUrl:
      process.env.NODE_ENV === "production"
        ? "https://ghostie.wangenius.com"
        : "http://localhost:4000",
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },
    customThemes: [
      {
        theme: "@docusaurus/theme-classic",
        customCss: require.resolve("./src/css/custom.css"),
      },
    ],
    image: "img/icon.svg",
    navbar: {
      title: "Ghostie文档",
      logo: {
        alt: "Ghostie Logo",
        src: "img/icon.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "sidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "right" },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Products",
          items: [
            {
              label: "Tutorial",
              to: "/docs/start",
            },
          ],
        },
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/start",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ghostie, Inc. Built with Docusaurus.`,
    },

    palette: {
      primary: {
        main: "#cc785c", // 主色调
      },
      secondary: {
        main: "#0e0e0e", // 次色调
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
