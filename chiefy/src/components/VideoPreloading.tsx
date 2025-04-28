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