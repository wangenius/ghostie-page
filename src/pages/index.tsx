import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import type { ReactNode } from 'react';
import Page from '../components/page';
import "@site/src/styles/global.css";

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Ghostie - 桌面智能体平台"
      description="Ghostie 是一个桌面智能体平台，助力高效工作与创新。"
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          \"@context\": \"https://schema.org\",
          \"@type\": \"Organization\",
          \"name\": \"Ghostie\",
          \"url\": \"https://ghostie.wangenius.com\",
          \"logo\": \"https://ghostie.wangenius.com/icon.svg\",
          \"description\": \"Ghostie 是一个桌面智能体平台，助力高效工作与创新。\"
        }` }} />
        <Page />
    </Layout>
  );
}
