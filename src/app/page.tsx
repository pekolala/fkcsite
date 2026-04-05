import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'フジタ家庭教師センター | 三条・燕・加茂エリア専門 プロ家庭教師',
  description: '三条・燕・加茂エリア専門のプロ家庭教師。小学生から高校生、既卒、不登校まで対応。志望校合格と成績アップを全力サポート。',
};

export default function Page() {
  const filePath = path.join(process.cwd(), 'src', 'app', 'source_index.source.html');
  const content = fs.readFileSync(filePath, 'utf-8');

  // Extract body content
  const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyHtml = bodyMatch ? bodyMatch[1] : content;

  return (
    <main dangerouslySetInnerHTML={{ __html: bodyHtml }} />
  );
}
