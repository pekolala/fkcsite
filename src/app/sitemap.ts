import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.fujita-kc.com';
  const dir = path.join(process.cwd(), 'src', 'app');
  
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir);

  const items = files
    .filter(f => f.endsWith('.source.html'))
    .map(f => {
      const slug = f.replace('.source.html', '');
      const route = slug === 'source_index' ? '' : `/${slug}`;
      return {
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: slug === 'source_index' ? 1.0 : 0.8,
      };
    });

  return items;
}
