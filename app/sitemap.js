export default function sitemap() {
  const baseUrl = 'https://farisearch.co.zw/';
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];
}
