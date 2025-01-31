import './globals.css';
import { Toaster } from 'react-hot-toast';
import { Analytics } from "@vercel/analytics/react"

export const Metadata = {
  metadataBase: new URL('https://farisearch.co.zw'),
  keywords: [
    'faraisearch',
    'search',
    'engine',
    'open source serach engine',
    'Farirai Masocha',
    'exa.ai',
    'exa',
    'ai',
    'search engine',
  ],
  title: {
    default: 'faraisearch',
    template: `%s | faraisearch`,
  },
  openGraph: {
    description:
      'faraisearch is an open source search engine built by Farirai Masocha',
    images: [
      {
        url: 'https://farisearch.co.zw/landing/landing.png',
        width: 800,
        height: 600,
        alt: 'faraisearch',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'faraisearch',
    description:
      'faraisearch is an open source search engine built by Farirai Masocha',
    images: [
      {
        url: 'https://farisearch.co.zw/landing/landing.png',
        width: 800,
        height: 600,
        alt: 'faraisearch',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/logo/icon.svg' type='image/svg+xml' />
      </head>
      <body>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
