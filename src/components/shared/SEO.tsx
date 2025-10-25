import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = 'SARO SEREYVICHEA - Full Stack Developer',
  description = 'SARO SEREYVICHEA - Full Stack Developer & ICT Student. Expert in Next.js, React, Laravel. Building innovative web applications with modern technologies.',
  keywords = 'Vichea, Serey Vichea, vichea, sereyvichea, VICHEA, SARO SEREYVICHEA, SEREYVICHEA VICHEA, saro sereyvichea, Full Stack Developer, Web Developer, Next.js, React, Laravel, ICT Student, Cambodia Developer',
  canonicalUrl,
  ogImage = '/images/avatar/no_bg.png',
  ogType = 'website',
  structuredData,
}) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vichea.dev';
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'SARO SEREYVICHEA',
    alternateName: ['Vichea', 'Serey Vichea', 'sereyvichea', 'saro sereyvichea'],
    jobTitle: 'Full Stack Developer',
    description: 'ICT student and Full Stack Developer specializing in Next.js, React, and Laravel',
    url: siteUrl,
    image: `${siteUrl}/images/avatar/no_bg.png`,
    sameAs: [
      'https://www.facebook.com/sarosereyvichea',
      'https://t.me/SaroSereyvichea',
      'https://www.github.com/vichea-tech',
    ],
    email: 'sarosereyvichea@gmail.com',
    nationality: 'Cambodian',
    alumniOf: 'Institute of Technology of Cambodia',
    knowsAbout: [
      'Web Development',
      'Full Stack Development',
      'Next.js',
      'React',
      'Laravel',
      'JavaScript',
      'TypeScript',
      'PHP',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Full Stack Developer',
      description: 'Developing web applications using modern technologies',
    },
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="SARO SEREYVICHEA" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/images/avatar/no_bg.png" />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:site_name" content="SARO SEREYVICHEA" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      <meta name="twitter:creator" content="@SaroSereyvichea" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      <meta name="application-name" content="SARO SEREYVICHEA" />

      {/* Language and Geo Tags */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="KH" />
      <meta name="geo.country" content="Cambodia" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData || defaultStructuredData),
        }}
      />
    </Head>
  );
};

export default SEO;
