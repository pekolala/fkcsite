import fs from 'fs';
import path from 'path';

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
  const filePath = path.join(process.cwd(), 'src', 'app', `${slug}.source.html`);
  
  if (!fs.existsSync(filePath)) {
    return <div>Page not found</div>;
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');

  // Extract body content
  const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyHtml = bodyMatch ? bodyMatch[1] : content;

  return (
    <main dangerouslySetInnerHTML={{ __html: bodyHtml }} />
  );
}
