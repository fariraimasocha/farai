export default function sitemap() {
  const baseUrl = 'http://localhost:3000';
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];
}
