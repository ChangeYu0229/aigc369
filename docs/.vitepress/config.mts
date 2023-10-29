import { DefaultTheme, defineConfig } from 'vitepress';

import docs from '../docs.json';

/**
 * Convert feishu-pages's docs.json into VitePress's sidebar config
 * @param docs from `docs.json`
 * @param rootSlug if provided, will find and use this node as the root.
 * @returns
 */
const convertDocsToSidebars = (
  docs: Record<string, any>[],
  rootSlug?: string
) => {
  const sidebars: DefaultTheme.SidebarItem[] = [];

  // Go to root slug
  docs = docs.find((doc) => doc.slug === rootSlug)?.children || docs;

  for (const doc of docs) {
    let sidebar: DefaultTheme.SidebarItem = {
      text: doc.title,
      link: '/' + doc.slug,
    };
    if (doc.children.length > 0) {
      sidebar.items = convertDocsToSidebars(doc.children);
    }
    sidebars.push(sidebar);
  }

  return sidebars;
};

const docsSidebarEN = convertDocsToSidebars(docs, 'en');
const docsSidebarZHCN = convertDocsToSidebars(docs, 'zh-CN');
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "369 API",
  description: "全链路AI模型聚合接口",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Google 谷歌专栏',
        items: [
          { text: '谷歌GV是什么？Google Voice号码有哪些用途和功能？', link: 'https://ssw9noe1h6.feishu.cn/wiki/AbJ1wV4dNi4oPKkXkrmc0UZBn4B' },
          { text: '谷歌账号 Google Voice 登陆以及常见使用问题', link: '/PemvwzFC1i9pNOkCJVQcykNInPb/UDjNwv5SoiksHNkSkZjc88BJnxc.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
