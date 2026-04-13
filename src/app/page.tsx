import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'フジタ家庭教師センター | 三条・燕・加茂エリア専門 プロ家庭教師',
  description: '三条・燕・加茂エリア専門のプロ家庭教師。小学生から高校生、既卒、不登校まで対応。志望校合格と成績アップを全力サポート。',
  alternates: {
    canonical: 'https://www.fujita-kc.com',
  },
  openGraph: {
    title: 'フジタ家庭教師センター | 三条・燕・加茂エリア専門 プロ家庭教師',
    description: '三条・燕・加茂エリア専門のプロ家庭教師。志望校合格と成績アップを全力サポート。',
    url: 'https://www.fujita-kc.com',
    siteName: 'フジタ家庭教師センター',
    images: [
      {
        url: 'https://www.fujita-kc.com/logo.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'フジタ家庭教師センター | 三条・燕・加茂エリア専門 プロ家庭教師',
    description: '三条・燕・加茂エリア専門のプロ家庭教師。志望校合格と成績アップを全力サポート。',
    images: ['https://www.fujita-kc.com/logo.png'],
  },
  verification: {
    google: 'xnIKK9RpddKv4GTgciPJwkPjyIlMyYcIKXmT2ntu8V4',
  },
};

export default function Page() {
  const filePath = path.join(process.cwd(), 'src', 'app', 'source_index.source.html');
  const content = fs.readFileSync(filePath, 'utf-8');

  // Extract body content
  const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyHtml = bodyMatch ? bodyMatch[1] : content;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'フジタ家庭教師センター',
    image: 'https://www.fujita-kc.com/logo.png',
    '@id': 'https://www.fujita-kc.com',
    url: 'https://www.fujita-kc.com',
    telephone: '090-6794-4340',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '東裏館2-12-14',
      addressLocality: '三条市',
      addressRegion: '新潟県',
      postalCode: '955-0081',
      addressCountry: 'JP',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.6186, // Approximate, should be verified or removed if not sure
      longitude: 138.9221,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '09:00',
      closes: '22:00',
    },
    sameAs: [
      // Add social media links if available
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </>
  );
}
