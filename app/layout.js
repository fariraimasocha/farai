import './globals.css';
import { Toaster } from 'react-hot-toast';

export const Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  keywords: ["faraisearch", "search", "engine", "open source serach engine", "Farirai Masocha", "exa.ai", "exa", "ai", "search engine"],
  title: {
    default: 'faraisearch',
    template: `%s | faraisearch`,
  },
  openGraph: {
    description: "faraisearch is an open source search engine built by Farirai Masocha",
    ime: []
  },
  twitter: {
    card: 'summary_large_image',
    title: 'faraisearch',
    description: "faraisearch is an open source search engine built by Farirai Masocha",
    images: []
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
