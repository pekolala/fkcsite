import fs from 'fs';
import path from 'path';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Use source_index.source.html for global styles as it usually exists even if it's not the current page
  const filePath = path.join(process.cwd(), 'src', 'app', 'source_index.source.html');
  const content = fs.readFileSync(filePath, 'utf-8');

  // Extract all style tag contents from the original HTML
  const styleMatches = [...content.matchAll(/<style>(.*?)<\/style>/si)];
  const combinedStyles = styleMatches.map(m => m[1]).join('\n');

  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <style dangerouslySetInnerHTML={{ __html: combinedStyles }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
