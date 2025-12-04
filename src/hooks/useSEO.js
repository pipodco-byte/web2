import { useEffect } from 'react';

export const useSEO = ({ title, description, keywords, ogImage, ogUrl }) => {
  useEffect(() => {
    document.title = title;
    
    const updateMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const updateOGMeta = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateOGMeta('og:title', title);
    updateOGMeta('og:description', description);
    updateOGMeta('og:image', ogImage);
    updateOGMeta('og:url', ogUrl);
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', ogImage);
  }, [title, description, keywords, ogImage, ogUrl]);
};
