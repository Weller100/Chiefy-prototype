import '@/styles/globals.css';
import 'remixicon/fonts/remixicon.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
// Add this to your layout.tsx or page head component for better video preloading

import Head from 'next/head';

export function VideoPreloading() {
  return (
    <Head>
      {/* Preload critical video resource */}
      <link 
        rel="preload" 
        href="/intro-video.mp4" 
        as="video" 
        type="video/mp4" 
      />
      
      {/* Add DNS prefetch for any external resources like CDNs */}
      <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
      
      {/* Meta tags for video content */}
      <meta property="og:video" content="/intro-video.mp4" />
      <meta property="og:video:type" content="video/mp4" />
      <meta property="og:video:width" content="1280" />
      <meta property="og:video:height" content="720" />
    </Head>
  );
}