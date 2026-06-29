import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://webcrew.app',
      lastModified: '2026-06-29',
    },
    {
      url: 'https://webcrew.app/privacy',
      lastModified: '2026-05-19',
    },
    {
      url: 'https://webcrew.app/terms',
      lastModified: '2026-05-19',
    },
  ]
}
