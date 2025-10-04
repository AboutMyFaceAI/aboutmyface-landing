import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AboutMyFace AI - AI-Powered Face Reading for Entertainment',
  description: 'Discover personality insights and mystical readings based on your facial features. Download our free mobile app for iOS and unlock the secrets your face reveals.',
  keywords: 'face reading, AI, personality insights, physiognomy, entertainment, mobile app',
  openGraph: {
    title: 'AboutMyFace AI - AI-Powered Face Reading',
    description: 'Discover personality insights and mystical readings based on your facial features.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
