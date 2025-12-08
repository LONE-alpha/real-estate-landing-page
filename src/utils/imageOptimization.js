export const getOptimizedImage = (url, options = {}) => {
  const { width = 800, quality = 80, format = 'webp' } = options;
  
  // For demo purposes - in production, use a proper image CDN
  return {
    src: url,
    srcSet: `
      ${url}?w=${width}&q=${quality}&format=${format} ${width}w,
      ${url}?w=${width * 2}&q=${quality}&format=${format} ${width * 2}w
    `,
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  };
};

export const Image = ({ src, alt, className, ...props }) => {
  const optimized = getOptimizedImage(src);
  
  return (
    <img
      src={src}
      srcSet={optimized.srcSet}
      sizes={optimized.sizes}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
};