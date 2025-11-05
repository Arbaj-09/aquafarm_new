'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string;
};

export default function ImageWithFallback({ fallbackSrc = 'https://images.unsplash.com/photo-1581090468903-7b6a5a4f159b?w=1600&h=900&fit=crop&auto=format&q=60', src, alt, loading, className, ...rest }: Props) {
  const [useFallback, setUseFallback] = useState(false);
  const resolvedSrc = typeof src === 'string' ? src : undefined;

  if (useFallback) {
    return (
      <img
        {...rest}
        alt={alt}
        src={fallbackSrc}
        className={className}
        referrerPolicy={rest.referrerPolicy ?? 'no-referrer'}
      />
    );
  }

  return (
    <div className={(className ? className + ' ' : '') + 'relative'}>
      <Image
        src={resolvedSrc || ''}
        alt={alt || ''}
        fill
        sizes={rest.sizes || '100vw'}
        quality={90}
        priority={loading === 'eager'}
        className="object-cover"
        onError={() => setUseFallback(true)}
      />
    </div>
  );
}
