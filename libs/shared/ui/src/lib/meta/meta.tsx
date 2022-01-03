
import React from 'react';
import NextHead from 'next/head';

export const Meta: React.FC<{
  meta: {
    siteName?:string;
    title: string;
    link?: string;
    desc?: string;
    image?: string;
    twitterHandle?:string;
  };
}> = (props) => {
  const { meta } = props;
  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta name="copyright" content="Colin McDonnell" />
      {meta.link && <link rel="canonical" href={meta.link} />}
      {meta.desc && <meta name="description" content={meta.desc} />}
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={meta.title} />
      {meta.desc && (
        <meta
          name="og:description"
          property="og:description"
          content={meta.desc}
        />
      )}
      <meta property="og:site_name" content={meta.siteName} />
      {meta.link && <meta property="og:url" content={`${meta.link}`} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      {meta.desc && <meta name="twitter:description" content={meta.desc} />}
      {meta.twitterHandle && (
        <>
          <meta name="twitter:site" content={meta.twitterHandle} />
          <meta name="twitter:creator" content={meta.twitterHandle} />
        </>
      )}
      {meta.image && <meta name="twitter:image" content={meta.image} />}
      {meta.image && <meta property="og:image" content={`${meta.image}`} />}
    </NextHead>
  );
};

export default Meta;
