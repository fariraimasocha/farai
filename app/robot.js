export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
      disallow: [],
    },
    sitemap: 'https://farisearch.co.zw/sitemap.xml',
  };
}
