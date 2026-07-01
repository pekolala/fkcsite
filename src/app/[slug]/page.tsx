import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const cleanSlug = slug.endsWith('.html') ? slug.slice(0, -5) : slug;
  const filePath = path.join(process.cwd(), 'src', 'app', `${cleanSlug}.source.html`);
  
  if (!fs.existsSync(filePath)) {
    return { title: 'Page Not Found' };
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const titleMatch = content.match(/<title>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1] : 'フジタ家庭教師センター';
  
  const descMatch = content.match(/<meta name="description" content="([^"]*)"/i);
  const description = descMatch ? descMatch[1] : '三条・燕・加茂エリア専門のプロ家庭教師。志望校合格と成績アップを全力サポート。';

  return {
    title: `${title} | フジタ家庭教師センター`,
    description,
    alternates: {
      canonical: `https://www.fujita-kc.com/${cleanSlug}`,
    },
    openGraph: {
      title: `${title} | フジタ家庭教師センター`,
      description,
      url: `https://www.fujita-kc.com/${cleanSlug}`,
      siteName: 'フジタ家庭教師センター',
      images: [
        {
          url: 'https://www.fujita-kc.com/logo.png',
          width: 1200,
          height: 630,
        },
      ],
      locale: 'ja_JP',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | フジタ家庭教師センター`,
      description,
      images: ['https://www.fujita-kc.com/logo.png'],
    },
  };
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'src', 'app');
  const files = fs.readdirSync(dir);
  
  return files
    .filter(f => f.endsWith('.source.html') && f !== 'source_index.source.html')
    .map(f => ({
      slug: f.replace('.source.html', ''),
    }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const cleanSlug = slug.endsWith('.html') ? slug.slice(0, -5) : slug;
  const filePath = path.join(process.cwd(), 'src', 'app', `${cleanSlug}.source.html`);
  
  if (!fs.existsSync(filePath)) {
    return <div>Page not found</div>;
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');

  // Extract body content
  const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyHtml = bodyMatch ? bodyMatch[1] : content;

  return (
    <main className="column-container" dangerouslySetInnerHTML={{ __html: bodyHtml }} />
  );
}
