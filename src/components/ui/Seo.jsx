import { Helmet } from 'react-helmet-async';
export default function Seo({ title, description, image }) {
  const full = title ? `${title} · BookHaven` : 'BookHaven — Exclusive Books';
  return (
    <Helmet>
      <title>{full}</title>
      <meta name="description" content={description || 'Your destination for exclusive and unforgettable books.'} />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description || ''} />
      {image && <meta property="og:image" content={image} />}
    </Helmet>
  );
}
