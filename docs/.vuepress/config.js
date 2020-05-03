module.exports = {
  title: "VuePress Starter Template",
  description: "Starter Template for Documentation Website",
  base: "/vuepress-starter-template/",
  themeConfig: {
    navbar: true,
    nav: [
      { text: "GitHub", link: ""},
      { text: "Website", link: ""}
    ],
    logo: "/images/logo.png",
    sidebarDepth: 0,
    sidebar: [
      {
        collapsable: true,
        title: "Getting Started",
        children: [
          ["getting-started/introduction", 'Introduction'],
          ["getting-started/getting-started", 'Getting Started'],
        ]
      },
      {
        collapsable: true,
        title: "Section 1",
        children: [
          ["/section1/page0", 'First Page'],
          ["/section1/page1", 'Second Page'],
        ]
      },
    ],
  },
}
