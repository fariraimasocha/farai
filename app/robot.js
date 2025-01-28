export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
      disallow: [],
    },
    sitemap: 'http:localhost:3000/sitemap.xml',
  };
}
